import { useState } from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import SdcLogo from "@/components/SdcLogo";

const galleryItems = [
  { n: 1, label: "Ankommen & Empfang" },
  { n: 2, label: "Opening Keynote" },
  { n: 3, label: "Impulsvortrag" },
  { n: 4, label: "Deep Dives / Expert Lounge" },
  { n: 5, label: "Abschluss-Keynote" },
  { n: 6, label: "Übergang in den offenen Teil" },
  { n: 7, label: "Public Viewing & Ausklang" },
];




const SmilingDataClub = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <PageLayout
      title="Smiling Data Club — Ein Rückblick auf Culture & Code"
      description="Smiling Data Club, 01.07.2026 in Freiburg: Ein Tag zwischen KI, echten Gesprächen und einem Innenhof voller Leute. Der Rückblick, die Stimmen, was als nächstes kommt."
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&family=Space+Mono:wght@400;700&family=Outfit:wght@300;400;500;700&display=swap');

        .sdc-page {
          --bg-deep: #0a0420;
          --bg-mid: #1a0b3d;
          --bg-light: #2d0f5e;
          --neon-pink: #ff2d92;
          --neon-cyan: #00f0ff;
          --neon-purple: #b537f2;
          --neon-yellow: #ffd700;
          --neon-green: #00ff88;
          --text-bright: #ffffff;
          --text-soft: #e0d4ff;
          --text-dim: #9d8bc7;

          /* Legacy aliases (kept so existing rules below keep working) */
          --sdc-bg-deep: var(--bg-deep);
          --sdc-bg-mid: var(--bg-mid);
          --sdc-bg-hi: var(--bg-light);
          --sdc-pink: var(--neon-pink);
          --sdc-cyan: var(--neon-cyan);
          --sdc-purple: var(--neon-purple);
          --sdc-yellow: var(--neon-yellow);
          --sdc-green: var(--neon-green);
          --sdc-text: var(--text-bright);
          --sdc-text-soft: var(--text-soft);
          --sdc-text-dim: var(--text-dim);

          background: var(--bg-deep);
          color: var(--text-bright);
          font-family: 'Outfit', system-ui, sans-serif;
          font-weight: 300;
          position: relative;
          overflow-x: clip;
        }
        .sdc-page h1, .sdc-page h2, .sdc-page h3,
        .sdc-page h4, .sdc-page h5, .sdc-page h6 {
          font-family: 'Major Mono Display', monospace;
          text-transform: lowercase;
          font-weight: 400;
          letter-spacing: 0.04em;
        }
        .sdc-page p, .sdc-page li, .sdc-page span, .sdc-page a, .sdc-page div {
          font-family: 'Outfit', system-ui, sans-serif;
        }
        .sdc-label {
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--neon-cyan);
          border-left: 3px solid var(--neon-cyan);
          padding-left: 10px;
          text-shadow: 0 0 10px rgba(0,240,255,0.5);
        }
        /* Headlines — EIN durchgehender Gradient über den GESAMTEN mehrzeiligen
           Textblock. display:inline-block + box-decoration-break:slice sorgt dafür,
           dass der Gradient sich über alle Zeilen als ein einziges Bild spannt und
           nicht pro Zeile/Wort neu startet. */
        .sdc-grad-headline,
        .sdc-grad-pc {
          display: inline-block;
          -webkit-background-clip: text !important;
          background-clip: text !important;
          -webkit-text-fill-color: transparent;
          color: transparent;
          background-repeat: no-repeat;
          background-size: 100% 100%;
          background-position: 0 0;
          -webkit-box-decoration-break: slice;
          box-decoration-break: slice;
        }
        .sdc-grad-headline {
          background-image: linear-gradient(135deg, #ff2d92 0%, #ffd700 50%, #00f0ff 100%);
        }
        .sdc-grad-pc {
          background-image: linear-gradient(135deg, #ff2d92 0%, #00f0ff 100%);
        }


        /* perspektivisches Neon-Grid */
        .sdc-grid {
          position: absolute;
          left: 0; right: 0; bottom: 0;
          height: 55vh;
          pointer-events: none;
          perspective: 500px;
          perspective-origin: 50% 0%;
          overflow: hidden;
          mask-image: linear-gradient(to top, black 55%, transparent 100%);
          -webkit-mask-image: linear-gradient(to top, black 55%, transparent 100%);
        }
        .sdc-grid-inner {
          position: absolute;
          left: -50%;
          right: -50%;
          top: 0;
          bottom: -50%;
          background-image:
            linear-gradient(to right, rgba(255,45,146,0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,240,255,0.5) 1px, transparent 1px);
          background-size: 60px 60px;
          transform: rotateX(60deg);
          transform-origin: 50% 0%;
          animation: sdc-grid-scroll 12s linear infinite;
        }
        @keyframes sdc-grid-scroll {
          from { background-position: 0 0; }
          to   { background-position: 0 60px; }
        }
        .sdc-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          opacity: 0.55;
        }

        .sdc-section {
          position: relative;
          padding: 80px 20px;
          max-width: 1100px;
          margin: 0 auto;
        }
        @media (min-width: 768px) {
          .sdc-section { padding: 120px 40px; }
        }

        .sdc-btn {
          display: inline-block;
          font-family: 'Space Mono', monospace;
          font-size: 13px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          padding: 14px 32px;
          border-radius: 999px;
          border: 1.5px solid var(--sdc-cyan);
          color: var(--sdc-cyan);
          background: transparent;
          cursor: pointer;
          transition: all 0.25s ease;
          text-decoration: none;
        }
        .sdc-btn:hover {
          background: var(--sdc-cyan);
          color: var(--sdc-bg-deep);
          box-shadow: 0 0 24px rgba(0,240,255,0.6);
        }
        .sdc-btn-pink {
          border-color: var(--sdc-pink);
          color: var(--sdc-bg-deep);
          background: var(--sdc-pink);
          box-shadow: 0 0 20px rgba(255,45,146,0.55);
        }
        .sdc-btn-pink:hover {
          background: transparent;
          color: var(--sdc-pink);
          box-shadow: 0 0 30px rgba(255,45,146,0.8);
        }

        .sdc-card {
          background: linear-gradient(180deg, rgba(45,15,94,0.55), rgba(26,11,61,0.75));
          border: 1px solid rgba(0,240,255,0.35);
          border-radius: 16px;
          padding: 28px;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .sdc-card:hover {
          border-color: var(--sdc-pink);
          box-shadow: 0 0 24px rgba(255,45,146,0.25);
          transform: translateY(-4px);
        }

        .sdc-placeholder {
          position: relative;
          aspect-ratio: 4/3;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid rgba(181,55,242,0.4);
          background:
            linear-gradient(135deg, rgba(255,45,146,0.15), rgba(0,240,255,0.15)),
            var(--sdc-bg-mid);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          text-align: center;
          padding: 20px;
        }
        .sdc-placeholder .num {
          font-family: 'Major Mono Display', monospace;
          font-size: 44px;
          color: var(--sdc-cyan);
          text-shadow: 0 0 16px rgba(0,240,255,0.6);
        }
        .sdc-placeholder .lbl {
          font-family: 'Space Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.15em;
          color: var(--sdc-text-soft);
        }

        .sdc-input {
          width: 100%;
          background: rgba(10,4,32,0.8);
          border: 1.5px solid var(--sdc-cyan);
          color: var(--sdc-text);
          padding: 14px 18px;
          border-radius: 999px;
          font-family: 'Space Mono', monospace;
          font-size: 14px;
          outline: none;
          transition: box-shadow 0.2s ease;
        }
        .sdc-input:focus {
          box-shadow: 0 0 18px rgba(0,240,255,0.5);
        }

        .sdc-save-date {
          border: 1.5px solid var(--sdc-pink);
          border-radius: 20px;
          padding: 40px 28px;
          background:
            radial-gradient(circle at 20% 20%, rgba(255,45,146,0.18), transparent 60%),
            radial-gradient(circle at 80% 80%, rgba(0,240,255,0.18), transparent 60%),
            var(--sdc-bg-mid);
          box-shadow: 0 0 40px rgba(255,45,146,0.2);
          text-align: center;
        }
      `}</style>

      <div className="sdc-page">
        {/* HERO */}
        <section className="sdc-section" style={{ paddingTop: 60, paddingBottom: 40, textAlign: "center", minHeight: "80vh" }}>
          {/* Radialer Glow von unten/mitte */}
          <div
            aria-hidden
            style={{
              position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
              background:
                "radial-gradient(60% 45% at 50% 78%, rgba(255,45,146,0.28), transparent 70%), radial-gradient(50% 35% at 50% 95%, rgba(181,55,242,0.35), transparent 70%)",
            }}
          />
          {/* Sterne */}
          <div
            aria-hidden
            style={{
              position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, opacity: 0.7,
              backgroundImage:
                "radial-gradient(1px 1px at 12% 18%, #fff, transparent 50%), radial-gradient(1.2px 1.2px at 78% 12%, #fff, transparent 50%), radial-gradient(1px 1px at 32% 32%, #fff, transparent 50%), radial-gradient(1px 1px at 88% 40%, #fff, transparent 50%), radial-gradient(1.4px 1.4px at 22% 55%, #fff, transparent 50%), radial-gradient(1px 1px at 65% 22%, #fff, transparent 50%), radial-gradient(1px 1px at 50% 8%, #fff, transparent 50%)",
              maskImage: "linear-gradient(to bottom, #000 0%, #000 55%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, #000 0%, #000 55%, transparent 100%)",
            }}
          />
          {/* Grid (reduziert) */}
          <div className="sdc-grid"><div className="sdc-grid-inner" /></div>
          {/* Bergsilhouette */}
          <svg
            aria-hidden
            viewBox="0 0 1200 200"
            preserveAspectRatio="none"
            style={{
              position: "absolute", left: 0, right: 0, bottom: "38%", width: "100%", height: 120,
              pointerEvents: "none", zIndex: 1, filter: "drop-shadow(0 0 10px rgba(0,240,255,0.5))",
            }}
          >
            <polyline
              points="0,180 90,120 160,150 240,70 320,140 410,90 500,150 590,60 690,140 780,100 870,160 960,80 1060,150 1140,110 1200,170"
              fill="none" stroke="#00f0ff" strokeWidth="2" strokeLinejoin="round"
            />
          </svg>

          <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: 32 }}>
            <SdcLogo size={200} style={{ filter: "drop-shadow(0 0 20px rgba(0,240,255,0.35))" }} />
            <div className="sdc-label">// KICK-OFF · 01.07.2026 · FREIBURG</div>
            <h1 className="sdc-grad-headline" style={{ fontSize: "clamp(28px, 5.5vw, 56px)", lineHeight: 1.15, maxWidth: 900, margin: 0 }}>
              gestern war smiling data club. und es war genau das, was wir uns erträumt haben.
            </h1>
            <p style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "var(--sdc-text-soft)", maxWidth: 640, lineHeight: 1.6, margin: 0 }}>
              Ein Tag zwischen KI, echten Gesprächen und einem Innenhof voller Leute, die geblieben sind, bis das Licht ausging.
            </p>

            {/* Welcome video placeholder */}
            <div style={{ width: "100%", maxWidth: 720, marginTop: 24 }}>
              <div style={{
                aspectRatio: "16/9",
                borderRadius: 16,
                border: "1.5px solid var(--sdc-cyan)",
                boxShadow: "0 0 30px rgba(0,240,255,0.35)",
                background: "linear-gradient(135deg, rgba(255,45,146,0.15), rgba(0,240,255,0.15)), var(--sdc-bg-mid)",
                display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 10, padding: 24,
              }}>
                <div style={{ fontFamily: "'Major Mono Display', monospace", fontSize: 22, color: "var(--sdc-cyan)" }}>▶ welcome</div>
                <div className="sdc-label" style={{ borderLeft: "none", paddingLeft: 0, color: "var(--sdc-text-dim)" }}>
                  SDC_Welcome_Folie_Culture_and_Code.mp4 — hier einbinden
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GESCHICHTE */}
        <section className="sdc-section">
          <div className="sdc-label" style={{ marginBottom: 16 }}>01 · Die Geschichte dahinter</div>
          <h2 className="sdc-grad-pc" style={{ fontSize: "clamp(28px, 4vw, 44px)", marginTop: 0, marginBottom: 24 }}>
            warum es diesen tag gab
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.75, color: "var(--sdc-text-soft)", maxWidth: 780 }}>
            Smiling Data Club ist kein Produkt-Launch und keine Messe. Es ist die Idee, dass man über KI, Führung und die
            Zukunft der Arbeit auch anders reden kann — persönlich, ehrlich, ohne Bühnennebel. Wir haben Paletten-Möbel
            selbst gebaut, einen Coffee Bike organisiert und einen Tag lang alles dafür getan, dass sich niemand wie auf
            einer Konferenz fühlt. Das war kein Zufall. Das war Absicht.
          </p>
        </section>

        {/* DER TAG IN BILDERN */}
        <section className="sdc-section">
          <div className="sdc-label" style={{ marginBottom: 16 }}>02 · Der Tag in Bildern</div>
          <h2 className="sdc-grad-pc" style={{ fontSize: "clamp(28px, 4vw, 44px)", marginTop: 0, marginBottom: 40 }}>
            so hat sich der tag angefühlt
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 20 }}>
            {galleryItems.map((g) => (
              <div key={g.n} className="sdc-placeholder">
                <div className="num">0{g.n}</div>
                <div className="lbl">{g.label}</div>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "var(--sdc-text-dim)", letterSpacing: "0.2em" }}>
                  BILD FOLGT
                </div>
              </div>
            ))}
          </div>
        </section>




        {/* PROGRAMM-RECAP */}
        <section className="sdc-section">
          <div className="sdc-label" style={{ marginBottom: 16 }}>04 · Programm-Recap</div>
          <h2 className="sdc-grad-pc" style={{ fontSize: "clamp(28px, 4vw, 44px)", marginTop: 0, marginBottom: 24 }}>
            was an dem tag passiert ist
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.75, color: "var(--sdc-text-soft)", maxWidth: 820, marginBottom: 40 }}>
            Los ging's mit Fabians Vision für den Smiling Data Club, gefolgt von Betül Hanischs Impuls zu wertschätzender
            Führung in der Transformation. Am Nachmittag drei parallele Deep Dives — von der DocuWare-Live-Demo bis zu
            Neurodivergenz im Business. Den Schlusspunkt setzte Prof. Dr. Hannah Bast von der Uni Freiburg mit einem Blick
            auf KI, Algorithmen und den Menschen dahinter. Ab 17 Uhr wurde es dann familiär: WM-Public-Viewing im Hof,
            Musik, und ein Ausklang, den sich niemand hat nehmen lassen wollen.
          </p>

          {/* Timetable video placeholder */}
          <div style={{
            aspectRatio: "16/9",
            borderRadius: 16,
            border: "1.5px solid var(--sdc-pink)",
            boxShadow: "0 0 30px rgba(255,45,146,0.3)",
            background: "linear-gradient(135deg, rgba(255,45,146,0.18), rgba(181,55,242,0.15)), var(--sdc-bg-mid)",
            display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 10, padding: 24,
          }}>
            <div style={{ fontFamily: "'Major Mono Display', monospace", fontSize: 22, color: "var(--sdc-pink)" }}>▶ timetable</div>
            <div className="sdc-label" style={{ borderLeft: "none", paddingLeft: 0, color: "var(--sdc-text-dim)" }}>
              SDC_Timetable_Culture_and_Code.mp4 — hier einbinden
            </div>
          </div>
        </section>

        {/* DANKE */}
        <section className="sdc-section" style={{ textAlign: "center" }}>
          <div className="sdc-label" style={{ marginBottom: 16, display: "inline-block" }}>05 · Danke</div>
          <h2 className="sdc-grad-headline" style={{ fontSize: "clamp(40px, 8vw, 96px)", margin: "0 0 32px" }}>
            danke.
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.75, color: "var(--sdc-text-soft)", maxWidth: 780, margin: "0 auto" }}>
            An Fabian, Betül und Hannah Bast fürs Teilen ihres Wissens. An Bahadir und das ganze Team für den Einsatz vor,
            während und nach dem Tag. An Sharp für die Technik, an Golden Cut Media für Ton, Bild und Licht. Und an jede
            und jeden, die/der da war — ihr habt den Tag gemacht, nicht wir.
          </p>
        </section>

        {/* WAS KOMMT ALS NÄCHSTES */}
        <section className="sdc-section" style={{ paddingBottom: 140 }}>
          <div className="sdc-label" style={{ marginBottom: 16 }}>06 · Was kommt als nächstes</div>
          <h2 className="sdc-grad-pc" style={{ fontSize: "clamp(28px, 4vw, 44px)", marginTop: 0, marginBottom: 24 }}>
            das war der anfang
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.75, color: "var(--sdc-text-soft)", maxWidth: 780, marginBottom: 48 }}>
            Smiling Data Club war kein einmaliges Ding. Der nächste Termin steht noch nicht fest — wird aber kommen. Trag
            dich ein, dann bist du der/die Erste, die/der Bescheid bekommt.
          </p>

          <div className="sdc-save-date" style={{ marginBottom: 40 }}>
            <img src={sdcLogo} alt="" style={{ width: 60, marginBottom: 16, filter: "drop-shadow(0 0 12px rgba(255,45,146,0.6))" }} />
            <div className="sdc-label" style={{ display: "inline-block", borderLeft: "none", paddingLeft: 0, color: "var(--sdc-pink)", textShadow: "0 0 10px rgba(255,45,146,0.6)", marginBottom: 12 }}>
              SAVE THE DATE
            </div>
            <h3 className="sdc-grad-pc" style={{ fontSize: "clamp(24px, 3.5vw, 36px)", margin: "0 0 12px" }}>
              nächster smiling data club
            </h3>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 14, color: "var(--sdc-text-soft)", letterSpacing: "0.1em" }}>
              Termin: folgt in Kürze
            </div>
          </div>

          <form onSubmit={handleSubmit} style={{ display: "flex", gap: 12, flexWrap: "wrap", maxWidth: 520, margin: "0 auto" }}>
            <input
              type="email"
              required
              placeholder="deine@email.de"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="sdc-input"
              style={{ flex: "1 1 240px" }}
              disabled={submitted}
            />
            <button type="submit" className="sdc-btn sdc-btn-pink" disabled={submitted}>
              {submitted ? "✓ Eingetragen" : "Eintragen"}
            </button>
          </form>
          {submitted && (
            <p style={{ textAlign: "center", marginTop: 20, color: "var(--sdc-green)", fontFamily: "'Space Mono', monospace", fontSize: 14, letterSpacing: "0.1em" }}>
              Danke, du bekommst Bescheid!
            </p>
          )}

          <div style={{ textAlign: "center", marginTop: 60 }}>
            <Link to="/" className="sdc-btn">← zurück zur homepage</Link>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default SmilingDataClub;
