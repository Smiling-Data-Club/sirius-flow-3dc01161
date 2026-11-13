/* ==========================================================================
   Erzeugt public/downloads/anleitung-zaehlerstaende.pdf aus denselben Daten
   wie die Seite /zaehlerstand (src/data/zaehlerstand.ts).

   Aufruf:  npm run pdf:zaehlerstand

   - Design wie die Website: Urbanist, SIRIUS-Blau, aktuelles Logo.
   - Inhaltsverzeichnis mit Seitenzahlen: Dafür wird zweimal gedruckt. Die
     Seitenzahlen ermittelt `pdftotext` (Paket poppler-utils). Fehlt es,
     entsteht das Inhaltsverzeichnis ohne Seitenzahlen (Links funktionieren).
   - Braucht Chromium über Playwright. Fehlt der passende Browser:
     `npx playwright install chromium` oder PDF_CHROMIUM=/pfad/zu/chrome setzen.
   ========================================================================== */
import { execFileSync } from "child_process";
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "fs";
import { tmpdir } from "os";
import { join, resolve } from "path";
import { pathToFileURL } from "url";
import { chromium } from "playwright";
import {
  ABLAUF,
  HINWEISE,
  hersteller,
  PDF_URL,
  reihenfolge,
  type ZBild,
  type ZGruppe,
  type ZHersteller,
} from "../src/data/zaehlerstand";

const ROOT = resolve(import.meta.dir, "..");
const ZIEL = join(ROOT, "public", PDF_URL.replace(/^\//, ""));
const datei = (...teile: string[]) => pathToFileURL(join(ROOT, ...teile)).href;
const esc = (t: string) => t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
// Links im Fließtext klickbar machen
const text = (t: string) => esc(t).replace(/(https?:\/\/[^\s)]+[^\s).,;:])/g, '<a href="$1">$1</a>');

const STAND = new Intl.DateTimeFormat("de-DE", { month: "long", year: "numeric", timeZone: "Europe/Berlin" }).format(new Date());
const liste = reihenfolge(hersteller);

type Eintrag = { id: string; titel: string; ebene: 1 | 2 };
const toc: Eintrag[] = [
  { id: "ablauf", titel: "So geht's", ebene: 1 },
  { id: "statusseiten", titel: "Statusseite lesen", ebene: 1 },
  ...liste.flatMap((h) => [
    { id: h.id, titel: h.name, ebene: 1 as const },
    ...h.gruppen.map((g) => ({ id: g.id, titel: kurztitel(g), ebene: 2 as const })),
  ]),
  { id: "kontakt", titel: "Fragen?", ebene: 1 },
];

function kurztitel(g: ZGruppe) {
  const m = g.titel.split(", ");
  return m.length > 4 ? `${m.slice(0, 4).join(", ")} und ${m.length - 4} weitere` : g.titel;
}

const bilder = (liste: ZBild[] = [], gross = false) =>
  liste.length
    ? `<div class="bilder${gross ? " gross" : ""}">${liste
        .map(
          (b) =>
            `<figure><img src="${datei("public", "zaehlerstand", b.datei)}" alt="${esc(b.alt)}">${
              b.beschriftung ? `<figcaption>${esc(b.beschriftung)}</figcaption>` : ""
            }</figure>`,
        )
        .join("")}</div>`
    : "";

const marke = (id: string, mitMarken: boolean) => (mitMarken ? `<span class="marke">§§${id}§§</span>` : "");

const schritt = (s: ZGruppe["schritte"][number], i: number) => `
  <div class="schritt">
    <span class="nr">${i + 1}</span>
    <div class="inhalt${s.bilder?.length ? " mit-bild" : ""}">
      <div class="text">
        <p>${text(s.text)}</p>
        ${s.punkte ? `<ul>${s.punkte.map((p) => `<li>${text(p)}</li>`).join("")}</ul>` : ""}
      </div>
      ${bilder(s.bilder)}
    </div>
  </div>`;

// Überschrift und erster Schritt stehen in einem Block, der nicht getrennt wird.
const gruppe = (g: ZGruppe, mitMarken: boolean) => `
  <section class="gruppe" id="${g.id}">
    ${marke(g.id, mitMarken)}
    <div class="gruppenkopf">
      <h3>${esc(g.titel)}</h3>
      ${g.einleitung ? `<p class="einleitung">${text(g.einleitung)}</p>` : ""}
      ${g.schritte.length ? schritt(g.schritte[0], 0) : ""}
    </div>
    ${g.schritte.slice(1).map((s, i) => schritt(s, i + 1)).join("")}
    ${g.abschluss ? `<p class="abschluss">${text(g.abschluss)}</p>` : ""}
  </section>`;

const herstellerTeil = (h: ZHersteller, mitMarken: boolean) => `
  <section class="hersteller" id="${h.id}">
    ${marke(h.id, mitMarken)}
    <p class="kicker">Anleitung</p>
    <h2>${esc(h.name)}</h2>
    ${h.beschreibung ? `<p class="unterzeile">${esc(h.beschreibung)}</p>` : ""}
    ${h.hinweis ? `<div class="hinweis">${text(h.hinweis)}</div>` : ""}
    ${h.gruppen.map((g) => gruppe(g, mitMarken)).join("")}
  </section>`;

function html(seiten: Record<string, number>, mitMarken: boolean) {
  const nr = (id: string) => (seiten[id] ? `<span class="seite">${seiten[id]}</span>` : "");
  return `<!doctype html>
<html lang="de"><head><meta charset="utf-8"><title>Zählerstände auslesen – SIRIUS GmbH</title>
<style>
  @font-face { font-family: Urbanist; src: url(${datei("src/fonts/Urbanist-Regular.ttf")}); font-weight: 400; }
  @font-face { font-family: Urbanist; src: url(${datei("src/fonts/Urbanist-Medium.ttf")}); font-weight: 500; }
  @font-face { font-family: Urbanist; src: url(${datei("src/fonts/Urbanist-SemiBold.ttf")}); font-weight: 600; }
  @font-face { font-family: Urbanist; src: url(${datei("src/fonts/Urbanist-Bold.ttf")}); font-weight: 700; }
  :root { --blau: #306ab0; --dunkel: #19192e; --grau: #65758b; --hell: #f4f6fa; --linie: #e2e8f0; }
  @page { size: A4; margin: 15mm 17mm 20mm; }
  @page :first { margin: 0; }
  * { box-sizing: border-box; }
  html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  body { margin: 0; font-family: Urbanist, sans-serif; font-size: 10.5pt; line-height: 1.5; color: var(--dunkel); }
  a { color: var(--blau); }
  h1, h2, h3 { line-height: 1.2; margin: 0; }
  .marke { position: absolute; font-size: 1px; color: transparent; }

  /* Deckblatt */
  .deckblatt { height: 297mm; display: flex; flex-direction: column; break-after: page; }
  .deckblatt .band { background: var(--blau); color: #fff; padding: 22mm 20mm 26mm; flex: 0 0 auto; }
  .deckblatt .band img { height: 17mm; }
  .deckblatt .band .kicker { color: rgba(255,255,255,.75); margin-top: 34mm; }
  .deckblatt h1 { font-size: 40pt; font-weight: 700; margin-top: 3mm; }
  .deckblatt .sub { font-size: 14pt; margin-top: 5mm; color: rgba(255,255,255,.9); max-width: 150mm; }
  .deckblatt .unten { padding: 16mm 20mm; flex: 1; display: flex; flex-direction: column; justify-content: space-between; }
  .deckblatt .hersteller-liste { display: flex; gap: 4mm; flex-wrap: wrap; }
  .deckblatt .hersteller-liste span { border: 1px solid var(--linie); border-radius: 99px; padding: 2mm 5mm; font-weight: 500; }
  .deckblatt .kontakt { color: var(--grau); font-size: 10pt; }
  .deckblatt .kontakt strong { color: var(--dunkel); }

  .kicker { text-transform: uppercase; letter-spacing: .18em; font-size: 8pt; font-weight: 600; color: var(--blau); margin: 0 0 1.5mm; }
  h2 { font-size: 24pt; font-weight: 700; }
  .unterzeile { color: var(--grau); margin: 1.5mm 0 6mm; }

  /* Inhaltsverzeichnis + Ablauf */
  .start { break-after: page; }
  .toc { margin: 4mm 0 10mm; padding: 0; list-style: none; columns: 2; column-gap: 10mm; }
  .toc li { break-inside: avoid; display: flex; gap: 2mm; padding: 1mm 0; font-size: 9.5pt; }
  .toc li.e1 { font-weight: 600; margin-top: 2mm; }
  .toc li.e2 { padding-left: 4mm; color: var(--grau); }
  .toc a { color: inherit; text-decoration: none; flex: 1; }
  .toc .seite { font-variant-numeric: tabular-nums; color: var(--blau); font-weight: 600; }
  .karten { display: grid; grid-template-columns: repeat(3, 1fr); gap: 4mm; margin: 5mm 0 7mm; }
  .karte { border: 1px solid var(--linie); border-radius: 4mm; padding: 5mm; }
  .karte .nr { display: inline-flex; width: 7mm; height: 7mm; border-radius: 99px; background: var(--blau); color: #fff; align-items: center; justify-content: center; font-weight: 700; font-size: 9pt; }
  .karte strong { display: block; margin: 3mm 0 1mm; }
  .karte p { margin: 0; color: var(--grau); font-size: 9.5pt; }
  .box { background: #eef3fa; border: 1px solid #c8d8ee; border-radius: 4mm; padding: 5mm 6mm; }
  .box h3 { font-size: 12pt; margin-bottom: 2mm; }
  .box ul { margin: 0; padding-left: 5mm; }
  .box li { margin: 1.2mm 0; }

  /* Statusseiten */
  .statusseiten { break-before: page; }
  .statusseite { break-inside: avoid-page; margin-bottom: 6mm; border: 1px solid var(--linie); border-radius: 4mm; padding: 6mm; }
  .statusseite h3 { font-size: 15pt; margin-bottom: 2mm; }
  .statusseite ul { padding-left: 5mm; margin: 0 0 4mm; }

  /* Hersteller und Schritte */
  .hersteller { break-before: page; }
  .hinweis { background: #eef3fa; border-left: 1.2mm solid var(--blau); border-radius: 2mm; padding: 3.5mm 5mm; margin: 0 0 6mm; font-size: 9.5pt; }
  .gruppe { margin-bottom: 7mm; }
  .gruppenkopf { break-inside: avoid; }
  .gruppe h3 { font-size: 13pt; font-weight: 700; background: var(--hell); border-radius: 3mm; padding: 3.5mm 5mm; break-after: avoid; }
  .einleitung { margin: 3mm 0 0; color: var(--grau); }
  .schritt { display: flex; gap: 4mm; padding: 2.5mm 0; break-inside: avoid; border-bottom: 1px solid var(--linie); }
  .gruppe > .schritt:last-of-type { border-bottom: 0; }
  .gruppenkopf h3 + .schritt, .gruppenkopf .einleitung + .schritt { margin-top: 3mm; }
  .schritt .nr { flex: 0 0 7mm; height: 7mm; border-radius: 99px; background: var(--blau); color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 9pt; }
  .schritt .inhalt { flex: 1; min-width: 0; }
  /* Text links, Bilder rechts – spart viel Platz */
  .schritt .inhalt.mit-bild { display: grid; grid-template-columns: 38% 1fr; gap: 5mm; align-items: start; }
  .schritt .inhalt.mit-bild .bilder { margin-top: 0; justify-content: flex-end; }
  .schritt p { margin: .8mm 0 0; }
  .schritt ul { margin: 1.5mm 0 0; padding-left: 5mm; }
  .abschluss { font-weight: 600; margin-top: 3mm; }
  .bilder { display: flex; flex-wrap: wrap; gap: 3mm; margin-top: 2.5mm; align-items: flex-start; }
  .bilder figure { margin: 0; max-width: 100%; }
  .bilder img { display: block; max-width: 100%; max-height: 48mm; width: auto; height: auto; border: 1px solid var(--linie); border-radius: 2mm; background: #fff; }
  .bilder.gross img { max-height: 160mm; }
  .bilder figcaption { font-size: 8.5pt; font-weight: 600; margin-top: 1.5mm; }

  .kontaktseite { break-before: page; }
  .kontaktseite .box p { margin: 1.5mm 0; }
</style></head><body>

<section class="deckblatt">
  <div class="band">
    <img src="${datei("src/assets/sirius_logo_weiss.svg")}" alt="SIRIUS document solutions">
    <p class="kicker">Anleitung</p>
    <h1>Zählerstände auslesen</h1>
    <p class="sub">Schritt für Schritt: So lesen Sie den Zählerstand Ihres Druckers, Multifunktionsgeräts oder Etikettendruckers aus.</p>
  </div>
  <div class="unten">
    <div>
      <p class="kicker">Für diese Hersteller</p>
      <div class="hersteller-liste">${liste.map((h) => `<span>${esc(h.name)}</span>`).join("")}</div>
    </div>
    <div class="kontakt">
      <p><strong>Online mit Modellsuche:</strong> <a href="https://www.sirius-gmbh.de/zaehlerstand">www.sirius-gmbh.de/zaehlerstand</a></p>
      <p><strong>Fragen?</strong> (0761) 704070 · <a href="mailto:info@sirius-gmbh.de">info@sirius-gmbh.de</a></p>
      <p>SIRIUS GmbH document solutions · Stand: ${STAND}</p>
    </div>
  </div>
</section>

<section class="start" id="ablauf">
  ${marke("ablauf", mitMarken)}
  <p class="kicker">So geht's</p>
  <h2>In drei Schritten zum Zählerstand</h2>
  <div class="karten">
    ${ABLAUF.map(([t, x], i) => `<div class="karte"><span class="nr">${i + 1}</span><strong>${esc(t)}</strong><p>${esc(x)}</p></div>`).join("")}
  </div>
  <div class="box"><h3>Bitte beachten Sie</h3><ul>${HINWEISE.map((h) => `<li>${esc(h)}</li>`).join("")}</ul></div>
  <p class="kicker" style="margin-top:9mm">Inhalt</p>
  <ul class="toc">
    ${toc.map((e) => `<li class="e${e.ebene}"><a href="#${e.id}">${esc(e.titel)}</a>${nr(e.id)}</li>`).join("")}
  </ul>
</section>

<section class="statusseiten" id="statusseiten">
  ${marke("statusseiten", mitMarken)}
  <p class="kicker">Wichtig</p>
  <h2>Statusseite lesen</h2>
  <p class="unterzeile">Diese Werte tragen Sie im Webportal ein. Toshiba-Etikettendrucker: Den Wert finden Sie direkt in der Anleitung für Ihr Modell.</p>
  ${liste
    .filter((h) => h.statusseite)
    .map(
      (h) => `<div class="statusseite"><h3>${esc(h.name)}</h3><ul>${h.statusseite!.punkte
        .map((p) => `<li>${text(p)}</li>`)
        .join("")}</ul>${bilder(h.statusseite!.bilder, true)}</div>`,
    )
    .join("")}
</section>

${liste.map((h) => herstellerTeil(h, mitMarken)).join("")}

<section class="kontaktseite" id="kontakt">
  ${marke("kontakt", mitMarken)}
  <p class="kicker">Hilfe</p>
  <h2>Fragen?</h2>
  <p class="unterzeile">Ihr Modell ist nicht dabei oder es klappt nicht? Wir helfen gern.</p>
  <div class="box">
    <p><strong>Telefon:</strong> (0761) 704070</p>
    <p><strong>E-Mail:</strong> <a href="mailto:info@sirius-gmbh.de">info@sirius-gmbh.de</a></p>
    <p><strong>Online mit Modellsuche:</strong> <a href="https://www.sirius-gmbh.de/zaehlerstand">www.sirius-gmbh.de/zaehlerstand</a></p>
  </div>
</section>
</body></html>`;
}

const logoBlau = `data:image/svg+xml;base64,${readFileSync(join(ROOT, "src/assets/sirius_logo_blau.svg")).toString("base64")}`;
const kopf = "<span></span>";
const fuss = `<div style="width:100%;padding:0 17mm;display:flex;justify-content:space-between;align-items:center;font-family:sans-serif;font-size:7.5pt;color:#65758b">
  <span style="display:flex;align-items:center;gap:3mm"><img src="${logoBlau}" style="height:5mm"> www.sirius-gmbh.de/zaehlerstand · (0761) 704070</span>
  <span>Seite <span class="pageNumber"></span> von <span class="totalPages"></span></span></div>`;

async function drucken(inhalt: string, ziel: string) {
  const ordner = mkdtempSync(join(tmpdir(), "zaehlerstand-pdf-"));
  const htmlDatei = join(ordner, "seite.html");
  writeFileSync(htmlDatei, inhalt);
  // Lokale Bilder dürfen umgerechnet werden (nur in diesem kurzlebigen Druck-Browser).
  const args = ["--allow-file-access-from-files"];
  const browser = await chromium
    .launch(process.env.PDF_CHROMIUM ? { executablePath: process.env.PDF_CHROMIUM, args } : { args })
    .catch(() => chromium.launch({ executablePath: "/opt/pw-browsers/chromium", args }));
  try {
    const page = await browser.newPage();
    await page.goto(pathToFileURL(htmlDatei).href, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    // Bilder als JPEG (max. 1400 px breit) einbetten, sonst wird das PDF sehr groß.
    await page.evaluate(async () => {
      for (const img of Array.from(document.querySelectorAll<HTMLImageElement>(".bilder img"))) {
        if (!img.complete) await new Promise((r) => (img.onload = img.onerror = r));
        const f = Math.min(1, 1400 / img.naturalWidth);
        const c = document.createElement("canvas");
        c.width = Math.round(img.naturalWidth * f);
        c.height = Math.round(img.naturalHeight * f);
        const ctx = c.getContext("2d")!;
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, c.width, c.height);
        ctx.drawImage(img, 0, 0, c.width, c.height);
        img.src = c.toDataURL("image/jpeg", 0.85);
        await img.decode();
      }
    });
    await page.pdf({
      path: ziel,
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
      displayHeaderFooter: true,
      headerTemplate: kopf,
      footerTemplate: fuss,
      outline: true,
      tagged: true,
    });
  } finally {
    await browser.close();
    rmSync(ordner, { recursive: true, force: true });
  }
}

function seitenErmitteln(pdf: string): Record<string, number> {
  try {
    const seiten = execFileSync("pdftotext", ["-layout", pdf, "-"], { encoding: "utf8" }).split("\f");
    const ergebnis: Record<string, number> = {};
    seiten.forEach((t, i) => {
      for (const m of t.matchAll(/§§([a-z0-9-]+)§§/g)) ergebnis[m[1]] ??= i + 1;
    });
    return ergebnis;
  } catch {
    console.warn("pdftotext nicht gefunden – Inhaltsverzeichnis ohne Seitenzahlen.");
    return {};
  }
}

// 1. Durchgang mit unsichtbaren Marken, um die Seitenzahlen zu ermitteln
const probe = join(tmpdir(), `zaehlerstand-probe-${process.pid}.pdf`);
await drucken(html({}, true), probe);
const seiten = seitenErmitteln(probe);
if (existsSync(probe)) rmSync(probe);
// 2. Durchgang: endgültiges PDF mit Seitenzahlen, ohne Marken
await drucken(html(seiten, false), ZIEL);
console.log(`PDF erzeugt: ${ZIEL} (${Object.keys(seiten).length} Einträge mit Seitenzahl)`);
