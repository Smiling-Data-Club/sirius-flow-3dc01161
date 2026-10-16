/* ═══════════════════════════════════════════
   Paper Flock — Boids-Schwarm aus Papierblättern
   Canvas 2D mit eigener 3D-Projektion, ohne three.js.
   Flugverhalten angelehnt an Vanta „Birds“ (Separation,
   Alignment, Cohesion, Maus als Störer).
   ═══════════════════════════════════════════ */

export type PaperShape = "blatt" | "flieger";

export interface PaperFlockOptions {
  shape?: PaperShape;
  /** Fläche in px² pro Blatt — kleiner = mehr Blätter */
  density?: number;
  minCount?: number;
  maxCount?: number;
  /** Nur ein Standbild rendern (prefers-reduced-motion) */
  still?: boolean;
}

export interface PaperFlock {
  start: () => void;
  stop: () => void;
  setShape: (shape: PaperShape) => void;
  resize: () => void;
  destroy: () => void;
}

type Vec3 = [number, number, number];

interface Boid {
  p: Vec3;
  v: Vec3;
  acc: Vec3;
  right: Vec3;
  bank: number;
  phase: number;
  size: number;
}

interface Poly {
  /** Screen-Koordinaten x0,y0,x1,y1,… */
  pts: number[];
  z: number;
  shade: number;
  alpha: number;
  kind: "face" | "keel";
  /** Textzeilen als Segmente x0,y0,x1,y1,… */
  lines: number[];
  /** Eselsohr, wird nach der Fläche gezeichnet */
  overlay: number[];
}

/* SIRIUS-Palette: Papier hell, Schatten in Blau-Grau, Kante in SIRIUS-Blau (#3065AF) */
const PAPER: Vec3 = [246, 248, 251];
const SHADE: Vec3 = [178, 194, 216];
const FOLD: Vec3 = [214, 222, 233];
const EDGE = "48, 101, 175";
const INK = "48, 101, 175";

const FOCAL = 700;
const CAM_Z = 700;
const DEPTH = 280;
const LIGHT = normalize([-0.35, -0.8, 0.5]);
/* Bezugs-„oben“ zur Kamera geneigt: die Blätter zeigen ihre Fläche statt der Kante */
const UP_REF = normalize([0, -0.4, 0.92]);

const MAX_SPEED = 2.3;
const MIN_SPEED = 0.9;
const SEP_R = 46;
const ALI_R = 70;
const COH_R = 110;
const PREDATOR_R = 150;

function normalize(a: Vec3): Vec3 {
  const l = Math.hypot(a[0], a[1], a[2]) || 1;
  return [a[0] / l, a[1] / l, a[2] / l];
}

function cross(a: Vec3, b: Vec3): Vec3 {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
}

function mix(a: Vec3, b: Vec3, t: number): string {
  return `rgb(${Math.round(a[0] + (b[0] - a[0]) * t)}, ${Math.round(a[1] + (b[1] - a[1]) * t)}, ${Math.round(
    a[2] + (b[2] - a[2]) * t,
  )})`;
}

export function createPaperFlock(canvas: HTMLCanvasElement, options: PaperFlockOptions = {}): PaperFlock {
  const ctx = canvas.getContext("2d");
  const density = options.density ?? 20000;
  const minCount = options.minCount ?? 18;
  const maxCount = options.maxCount ?? 60;
  let shape: PaperShape = options.shape ?? "blatt";

  let width = 0;
  let height = 0;
  let dpr = 1;
  let half: Vec3 = [400, 300, DEPTH];
  let sizeScale = 1;
  const boids: Boid[] = [];
  let raf = 0;
  let running = false;
  let last = 0;
  let pointer: { x: number; y: number } | null = null;

  const polys: Poly[] = [];
  const order: number[] = [];

  /* ── Setup ─────────────────────────────── */

  function spawn(): Boid {
    const dir = normalize([Math.random() - 0.5, (Math.random() - 0.5) * 0.4, Math.random() - 0.5]);
    const speed = MIN_SPEED + Math.random() * (MAX_SPEED - MIN_SPEED);
    return {
      p: [(Math.random() * 2 - 1) * half[0] * 0.9, (Math.random() * 2 - 1) * half[1] * 0.8, (Math.random() * 2 - 1) * half[2] * 0.8],
      v: [dir[0] * speed, dir[1] * speed, dir[2] * speed],
      acc: [0, 0, 0],
      right: [0, 0, 1],
      bank: 0,
      phase: Math.random() * Math.PI * 2,
      size: 0.8 + Math.random() * 0.45,
    };
  }

  function resize() {
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    width = Math.max(1, rect.width);
    height = Math.max(1, rect.height);
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    half = [width / 2 + 40, height / 2 + 20, DEPTH];
    sizeScale = Math.min(1, Math.max(0.85, width / 1200));

    const target = Math.round(Math.min(maxCount, Math.max(minCount, (width * height) / density)));
    while (boids.length < target) boids.push(spawn());
    if (boids.length > target) boids.length = target;
    while (polys.length < boids.length * 3) {
      polys.push({ pts: [], z: 0, shade: 0, alpha: 1, kind: "face", lines: [], overlay: [] });
    }
    if (!running) draw();
  }

  /* ── Simulation ────────────────────────── */

  function step(dt: number) {
    const n = boids.length;
    const pred = pointer ? screenToWorld(pointer.x, pointer.y) : null;

    for (let i = 0; i < n; i++) {
      const b = boids[i];
      const sep: Vec3 = [0, 0, 0];
      const ali: Vec3 = [0, 0, 0];
      const coh: Vec3 = [0, 0, 0];
      let aliN = 0;
      let cohN = 0;

      for (let j = 0; j < n; j++) {
        if (i === j) continue;
        const o = boids[j];
        const dx = o.p[0] - b.p[0];
        const dy = o.p[1] - b.p[1];
        const dz = o.p[2] - b.p[2];
        const d2 = dx * dx + dy * dy + dz * dz;
        if (d2 > COH_R * COH_R) continue;
        const d = Math.sqrt(d2) || 0.001;
        if (d < SEP_R) {
          const f = (SEP_R - d) / SEP_R / d;
          sep[0] -= dx * f;
          sep[1] -= dy * f;
          sep[2] -= dz * f;
        }
        if (d < ALI_R) {
          ali[0] += o.v[0];
          ali[1] += o.v[1];
          ali[2] += o.v[2];
          aliN++;
        }
        coh[0] += o.p[0];
        coh[1] += o.p[1];
        coh[2] += o.p[2];
        cohN++;
      }

      const a: Vec3 = [sep[0] * 0.09, sep[1] * 0.09, sep[2] * 0.09];
      if (aliN) {
        a[0] += (ali[0] / aliN - b.v[0]) * 0.035;
        a[1] += (ali[1] / aliN - b.v[1]) * 0.035;
        a[2] += (ali[2] / aliN - b.v[2]) * 0.035;
      }
      if (cohN) {
        a[0] += (coh[0] / cohN - b.p[0]) * 0.0007;
        a[1] += (coh[1] / cohN - b.p[1]) * 0.0007;
        a[2] += (coh[2] / cohN - b.p[2]) * 0.0007;
      }

      // Weicher Rand: zurücklenken, bevor ein Blatt den Bereich verlässt
      for (let k = 0; k < 3; k++) {
        const edge = half[k] * 0.82;
        if (b.p[k] > edge) a[k] -= ((b.p[k] - edge) / half[k]) * 0.35;
        else if (b.p[k] < -edge) a[k] += ((-edge - b.p[k]) / half[k]) * 0.35;
      }

      // Maus / Finger scheucht die Blätter auf
      if (pred) {
        const dx = b.p[0] - pred[0];
        const dy = b.p[1] - pred[1];
        const d = Math.hypot(dx, dy);
        if (d < PREDATOR_R && d > 0.001) {
          const f = ((PREDATOR_R - d) / PREDATOR_R) * 0.45;
          a[0] += (dx / d) * f;
          a[1] += (dy / d) * f;
        }
      }

      b.acc = a;
    }

    for (let i = 0; i < n; i++) {
      const b = boids[i];
      b.v[0] += b.acc[0] * dt;
      b.v[1] += b.acc[1] * dt;
      b.v[2] += b.acc[2] * dt;
      // leichter Auftrieb gegen zu steile Flugbahnen
      b.v[1] *= 1 - 0.01 * dt;

      const sp = Math.hypot(b.v[0], b.v[1], b.v[2]);
      const lim = pointer ? MAX_SPEED * 1.6 : MAX_SPEED;
      const clamped = Math.min(lim, Math.max(MIN_SPEED, sp));
      if (sp > 0) {
        b.v[0] *= clamped / sp;
        b.v[1] *= clamped / sp;
        b.v[2] *= clamped / sp;
      }

      b.p[0] += b.v[0] * dt;
      b.p[1] += b.v[1] * dt;
      b.p[2] += b.v[2] * dt;
      b.phase += (0.08 + Math.max(0, -b.v[1]) * 0.05) * dt;
    }
  }

  function screenToWorld(x: number, y: number): Vec3 {
    // Projektion auf die Ebene z = 0 (dort ist scale = 1)
    return [x - width / 2, y - height / 2, 0];
  }

  /* ── Geometrie ─────────────────────────── */

  function orient(b: Boid) {
    const f = normalize(b.v);
    let r = cross(f, UP_REF);
    if (Math.hypot(r[0], r[1], r[2]) < 0.05) r = b.right;
    r = normalize(r);
    const u = cross(r, f);

    // Querneigung in Kurven, wie bei einem Gleiter
    const lateral = b.acc[0] * r[0] + b.acc[1] * r[1] + b.acc[2] * r[2];
    b.bank += (Math.max(-0.9, Math.min(0.9, lateral * 14)) - b.bank) * 0.08;
    const c = Math.cos(b.bank);
    const s = Math.sin(b.bank);
    const rb: Vec3 = [r[0] * c + u[0] * s, r[1] * c + u[1] * s, r[2] * c + u[2] * s];
    const ub: Vec3 = [u[0] * c - r[0] * s, u[1] * c - r[1] * s, u[2] * c - r[2] * s];
    b.right = rb;
    return { f, r: rb, u: ub };
  }

  let polyCount = 0;

  function project(b: Boid, basis: { f: Vec3; r: Vec3; u: Vec3 }, local: number[], out: number[], world?: number[]) {
    const { f, r, u } = basis;
    let zSum = 0;
    for (let i = 0; i < local.length; i += 3) {
      const a = local[i];
      const bb = local[i + 1];
      const c = local[i + 2];
      const wx = b.p[0] + f[0] * a + r[0] * bb + u[0] * c;
      const wy = b.p[1] + f[1] * a + r[1] * bb + u[1] * c;
      const wz = b.p[2] + f[2] * a + r[2] * bb + u[2] * c;
      world?.push(wx, wy, wz);
      zSum += wz;
      const sc = FOCAL / (CAM_Z - wz);
      out.push(width / 2 + wx * sc, height / 2 + wy * sc);
    }
    return zSum / (local.length / 3);
  }

  function emit(
    b: Boid,
    basis: { f: Vec3; r: Vec3; u: Vec3 },
    local: number[],
    kind: Poly["kind"],
    lines?: number[],
    overlay?: number[],
  ) {
    const poly = polys[polyCount++];
    poly.kind = kind;
    poly.pts.length = 0;
    poly.lines.length = 0;
    poly.overlay.length = 0;

    const world: number[] = [];
    poly.z = project(b, basis, local, poly.pts, world);

    // Flächennormale für die Schattierung (beidseitig beleuchtet)
    const e1: Vec3 = [world[3] - world[0], world[4] - world[1], world[5] - world[2]];
    const e2: Vec3 = [world[6] - world[0], world[7] - world[1], world[8] - world[2]];
    const nrm = normalize(cross(e1, e2));
    poly.shade = Math.abs(nrm[0] * LIGHT[0] + nrm[1] * LIGHT[1] + nrm[2] * LIGHT[2]);

    // Tiefennebel: hintere Blätter treten zurück
    const t = Math.min(1, Math.max(0, (poly.z + DEPTH) / (2 * DEPTH)));
    poly.alpha = 0.28 + 0.72 * t;

    if (lines) project(b, basis, lines, poly.lines);
    if (overlay) project(b, basis, overlay, poly.overlay);
  }

  /** A4-Blatt, entlang der Mittellinie gefaltet; die Hälften schlagen wie Flügel */
  function buildSheet(b: Boid, basis: { f: Vec3; r: Vec3; u: Vec3 }) {
    const L = 38 * b.size * sizeScale;
    const w = L / 1.414 / 2;
    const fold = 0.22 + 0.26 * Math.sin(b.phase);
    const cy = Math.cos(fold);
    const cz = Math.sin(fold);
    const e = L * 0.22; // Eselsohr
    const front = L / 2;
    const back = -L / 2;

    for (const side of [1, -1]) {
      const y = (v: number) => v * cy * side;
      const z = (v: number) => v * cz;
      const outline =
        side === 1
          ? [front, 0, 0, front, y(w), z(w), back + e, y(w), z(w), back, y(w - e * 0.7), z(w - e * 0.7), back, 0, 0]
          : [front, 0, 0, front, y(w), z(w), back, y(w), z(w), back, 0, 0];

      // Textzeilen quer zur Flugrichtung, wie auf einem echten Dokument
      const lines: number[] = [];
      const rows = 5;
      for (let k = 0; k < rows; k++) {
        const a = front - L * 0.18 - k * L * 0.13;
        const inner = w * 0.12;
        const outer = w * (k === rows - 1 ? 0.45 : 0.82);
        lines.push(a, y(inner), z(inner), a, y(outer), z(outer));
      }
      const dogEar =
        side === 1
          ? [back + e, y(w), z(w), back, y(w - e * 0.7), z(w - e * 0.7), back + e, y(w - e * 0.7), z(w - e * 0.7)]
          : undefined;
      emit(b, basis, outline, "face", lines, dogEar);
    }
  }

  /** Klassischer Papierflieger: zwei Tragflächen und ein Kiel */
  function buildPlane(b: Boid, basis: { f: Vec3; r: Vec3; u: Vec3 }) {
    const L = 40 * b.size * sizeScale;
    const span = L * 0.42;
    const keel = L * 0.2;
    const dihedral = span * (0.18 + 0.1 * Math.sin(b.phase * 0.6));
    const nose = L * 0.55;
    const tail = -L * 0.45;

    emit(b, basis, [nose, 0, 0, tail, 0, 0, tail, span, dihedral], "face");
    emit(b, basis, [nose, 0, 0, tail, 0, 0, tail, -span, dihedral], "face");
    emit(b, basis, [nose, 0, 0, tail, 0, 0, tail + L * 0.12, 0, -keel], "keel");
  }

  /* ── Zeichnen ──────────────────────────── */

  function draw() {
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, width, height);

    polyCount = 0;
    for (const b of boids) {
      const basis = orient(b);
      if (shape === "flieger") buildPlane(b, basis);
      else buildSheet(b, basis);
    }

    order.length = polyCount;
    for (let i = 0; i < polyCount; i++) order[i] = i;
    order.sort((a, b) => polys[a].z - polys[b].z);

    ctx.lineJoin = "round";
    for (const idx of order) {
      const p = polys[idx];
      const pts = p.pts;
      ctx.globalAlpha = p.alpha;
      ctx.beginPath();
      ctx.moveTo(pts[0], pts[1]);
      for (let i = 2; i < pts.length; i += 2) ctx.lineTo(pts[i], pts[i + 1]);
      ctx.closePath();
      ctx.fillStyle = p.kind === "keel" ? mix(SHADE, FOLD, p.shade) : mix(SHADE, PAPER, 0.35 + 0.65 * p.shade);
      ctx.fill();
      ctx.strokeStyle = `rgba(${EDGE}, 0.45)`;
      ctx.lineWidth = 0.8;
      ctx.stroke();

      if (p.lines.length) {
        ctx.strokeStyle = `rgba(${INK}, 0.28)`;
        ctx.lineWidth = 0.9;
        ctx.beginPath();
        for (let i = 0; i < p.lines.length; i += 4) {
          ctx.moveTo(p.lines[i], p.lines[i + 1]);
          ctx.lineTo(p.lines[i + 2], p.lines[i + 3]);
        }
        ctx.stroke();
      }

      if (p.overlay.length) {
        const o = p.overlay;
        ctx.beginPath();
        ctx.moveTo(o[0], o[1]);
        ctx.lineTo(o[2], o[3]);
        ctx.lineTo(o[4], o[5]);
        ctx.closePath();
        ctx.fillStyle = mix(SHADE, FOLD, 0.6);
        ctx.fill();
        ctx.strokeStyle = `rgba(${EDGE}, 0.45)`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }
    }
    ctx.globalAlpha = 1;
  }

  /* ── Loop & Events ─────────────────────── */

  function frame(now: number) {
    if (!running) return;
    const dt = last ? Math.min(3, Math.max(0.2, (now - last) / (1000 / 60))) : 1;
    last = now;
    step(dt);
    draw();
    raf = requestAnimationFrame(frame);
  }

  function start() {
    if (running || options.still) return;
    running = true;
    last = 0;
    raf = requestAnimationFrame(frame);
  }

  function stop() {
    running = false;
    cancelAnimationFrame(raf);
  }

  function onPointerMove(e: PointerEvent) {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    pointer = x >= 0 && y >= 0 && x <= rect.width && y <= rect.height ? { x, y } : null;
  }

  function onPointerEnd(e: PointerEvent) {
    // Finger weg = kein Störer mehr; die Maus bleibt, bis sie den Bereich verlässt
    if (e.pointerType !== "mouse") pointer = null;
  }

  function onPointerOut(e: PointerEvent) {
    if (!e.relatedTarget) pointer = null;
  }

  window.addEventListener("pointermove", onPointerMove, { passive: true });
  window.addEventListener("pointerup", onPointerEnd, { passive: true });
  window.addEventListener("pointercancel", onPointerEnd, { passive: true });
  document.addEventListener("pointerout", onPointerOut, { passive: true });

  resize();
  // Ein paar Schritte vorrechnen, damit der Schwarm schon formiert startet
  for (let i = 0; i < 90; i++) step(1);
  draw();

  return {
    start,
    stop,
    resize,
    setShape(next) {
      shape = next;
      if (!running) draw();
    },
    destroy() {
      stop();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerEnd);
      window.removeEventListener("pointercancel", onPointerEnd);
      document.removeEventListener("pointerout", onPointerOut);
    },
  };
}
