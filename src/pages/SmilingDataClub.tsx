import { useState } from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import SdcLogo from "@/components/SdcLogo";
import photoArrival from "@/assets/sdc/004_culture_code_01_07431_20260701_goldencutmedia_2026.jpg.asset.json";
import photoHug from "@/assets/sdc/012_culture_code_01_07470_20260701_goldencutmedia_2026.jpg.asset.json";
import photoNeon from "@/assets/sdc/015_culture_code_01_07483_20260701_goldencutmedia_2026.jpg.asset.json";
import photoStage from "@/assets/sdc/019_culture_code_01_07510_20260701_goldencutmedia_2026.jpg.asset.json";
import photoKeynote from "@/assets/sdc/037_culture_code_01_07689_20260701_goldencutmedia_2026.jpg.asset.json";

const galleryItems = [
  { n: 1, label: "Ankommen & Empfang", src: photoArrival.url },
  { n: 2, label: "Opening Keynote", src: photoKeynote.url },
  { n: 3, label: "Impulsvortrag", src: photoStage.url },
  { n: 4, label: "Neon-Signet im Innenhof", src: photoNeon.url },
  { n: 5, label: "Ausklang & echte Momente", src: photoHug.url },
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
            linear-gradient(to right, rgba(255,45,146,0.28) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,240,255,0.28) 1px, transparent 1px);
          background-size: 100px 100px;
          transform: rotateX(60deg);
          transform-origin: 50% 0%;
          animation: sdc-grid-scroll 14s linear infinite;
        }
        @keyframes sdc-grid-scroll {
          from { background-position: 0 0; }
          to   { background-position: 0 100px; }
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

        /* ========= TIMETABLE ========= */
        .sdc-timetable {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-bottom: 40px;
        }
        @media (max-width: 780px) {
          .sdc-timetable { grid-template-columns: 1fr; gap: 32px; }
        }
        .sdc-tt-head {
          font-family: 'Space Mono', monospace;
          font-size: 13px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--sdc-cyan);
          padding-bottom: 10px;
          margin-bottom: 20px;
          border-bottom: 1px solid rgba(0,240,255,0.35);
          text-shadow: 0 0 12px rgba(0,240,255,0.4);
        }
        .sdc-tt-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 22px; }
        .sdc-tt-item { display: grid; grid-template-columns: 72px 1fr; column-gap: 16px; row-gap: 4px; align-items: baseline; }
        .sdc-tt-time {
          font-family: 'Space Mono', monospace;
          font-size: 14px;
          color: var(--sdc-cyan);
          letter-spacing: 0.05em;
          grid-row: 1 / span 2;
          padding-top: 2px;
        }
        .sdc-tt-title {
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 17px;
          color: #ffffff;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px;
          line-height: 1.35;
        }
        .sdc-tt-sub {
          font-family: 'Outfit', sans-serif;
          font-size: 13px;
          color: var(--sdc-text-dim);
          line-height: 1.5;
          grid-column: 2;
        }
        .sdc-tt-item-highlight {
          border: 1px solid var(--sdc-pink);
          border-radius: 12px;
          padding: 14px 16px;
          background: rgba(255,45,146,0.06);
          box-shadow: 0 0 24px rgba(255,45,146,0.18);
        }
        .sdc-tt-item-highlight .sdc-tt-time { padding-top: 0; }

        .sdc-pill {
          display: inline-flex;
          align-items: center;
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: lowercase;
          padding: 3px 9px;
          border-radius: 999px;
          border: 1px solid;
          white-space: nowrap;
        }
        .sdc-pill-keynote { color: var(--sdc-pink); border-color: var(--sdc-pink); }
        .sdc-pill-impuls { color: #ff8ac2; border-color: #ff8ac2; }
        .sdc-pill-closing {
          color: #ffffff;
          background: var(--sdc-pink);
          border-color: var(--sdc-pink);
          box-shadow: 0 0 14px rgba(255,45,146,0.6);
        }

        /* ========= SESSIONS BOX ========= */
        .sdc-sessions-box {
          border: 1px solid var(--sdc-pink);
          border-radius: 16px;
          padding: 24px 28px;
          background: rgba(255,45,146,0.04);
          box-shadow: 0 0 26px rgba(255,45,146,0.18);
        }
        .sdc-sessions-head {
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 18px;
          color: var(--sdc-pink);
          margin-bottom: 18px;
          display: flex;
          gap: 8px;
          align-items: baseline;
        }
        .sdc-sessions-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 14px; }
        .sdc-session {
          border-left: 3px solid var(--sdc-cyan);
          padding: 4px 0 4px 14px;
        }
        .sdc-session-title {
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          color: #ffffff;
          font-size: 15px;
          margin-bottom: 3px;
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
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
            {galleryItems.map((g) => (
              <figure
                key={g.n}
                style={{
                  margin: 0,
                  borderRadius: 16,
                  overflow: "hidden",
                  border: "1px solid rgba(0,240,255,0.25)",
                  boxShadow: "0 0 24px rgba(255,45,146,0.15), 0 0 40px rgba(0,240,255,0.12)",
                  background: "var(--bg-mid)",
                }}
              >
                <img
                  src={g.src}
                  alt={g.label}
                  loading="lazy"
                  style={{ display: "block", width: "100%", height: 260, objectFit: "cover" }}
                />
                <figcaption style={{ padding: "12px 14px", fontFamily: "'Space Mono', monospace", fontSize: 11, letterSpacing: "0.2em", color: "var(--sdc-text-dim)", textTransform: "uppercase" }}>
                  0{g.n} · {g.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>




        {/* PROGRAMM-RECAP */}
        <section className="sdc-section">
          <div className="sdc-label" style={{ marginBottom: 16 }}>04 · Programm-Recap</div>
          <h2 className="sdc-grad-pc" style={{ fontSize: "clamp(28px, 4vw, 44px)", marginTop: 0, marginBottom: 24 }}>
            was an dem tag passiert ist
          </h2>
          {/* Timetable — zweispaltig Vormittag / Nachmittag */}
          <div className="sdc-timetable">
            {/* VORMITTAG */}
            <div className="sdc-tt-col">
              <div className="sdc-tt-head">Vormittag</div>
              <ul className="sdc-tt-list">
                <li className="sdc-tt-item">
                  <div className="sdc-tt-time">11:00</div>
                  <div className="sdc-tt-title">Warm-up & Ankommen</div>
                  <div className="sdc-tt-sub">30 Min · Empfang im Innenhof</div>
                </li>
                <li className="sdc-tt-item">
                  <div className="sdc-tt-time">11:30</div>
                  <div className="sdc-tt-title">
                    <span className="sdc-pill sdc-pill-keynote">keynote</span>
                    Das Lächeln zurückbringen
                  </div>
                  <div className="sdc-tt-sub">Fabian Schüler (CEO SIRIUS GmbH) & Bahadir Alaz · 30 Min</div>
                </li>
                <li className="sdc-tt-item">
                  <div className="sdc-tt-time">12:00</div>
                  <div className="sdc-tt-title">
                    <span className="sdc-pill sdc-pill-impuls">impuls</span>
                    Der Mensch nach der Maschine
                  </div>
                  <div className="sdc-tt-sub">Betül Hanisch · 45 Min</div>
                </li>
                <li className="sdc-tt-item">
                  <div className="sdc-tt-time">12:45</div>
                  <div className="sdc-tt-title">Brain-Food Break</div>
                  <div className="sdc-tt-sub">30 Min · Coffee Bike & Fingerfood</div>
                </li>
                <li className="sdc-tt-item">
                  <div className="sdc-tt-time">13:15</div>
                  <div className="sdc-tt-title">Parallele Sessions</div>
                  <div className="sdc-tt-sub">Siehe Session-Box unten</div>
                </li>
              </ul>
            </div>

            {/* NACHMITTAG */}
            <div className="sdc-tt-col">
              <div className="sdc-tt-head">Nachmittag</div>
              <ul className="sdc-tt-list">
                <li className="sdc-tt-item">
                  <div className="sdc-tt-time">14:20</div>
                  <div className="sdc-tt-title">
                    <span className="sdc-pill sdc-pill-impuls">impuls</span>
                    AI meets EQ
                  </div>
                  <div className="sdc-tt-sub">Josef R. Schneider · 20 Min</div>
                </li>
                <li className="sdc-tt-item">
                  <div className="sdc-tt-time">14:40</div>
                  <div className="sdc-tt-title">Coffee & Switch Break</div>
                  <div className="sdc-tt-sub">50 Min</div>
                </li>
                <li className="sdc-tt-item sdc-tt-item-highlight">
                  <div className="sdc-tt-time">15:30</div>
                  <div className="sdc-tt-title">
                    <span className="sdc-pill sdc-pill-closing">★ closing keynote</span>
                    Prof. Dr. Hannah Bast
                  </div>
                  <div className="sdc-tt-sub">Universität Freiburg · KI, Algorithmen & der Mensch dahinter · 45 Min</div>
                </li>
                <li className="sdc-tt-item">
                  <div className="sdc-tt-time">16:15</div>
                  <div className="sdc-tt-title">Q&A mit Prof. Dr. Hannah Bast</div>
                  <div className="sdc-tt-sub">15 Min</div>
                </li>
                <li className="sdc-tt-item">
                  <div className="sdc-tt-time">16:30</div>
                  <div className="sdc-tt-title">Ausklang & Networking</div>
                  <div className="sdc-tt-sub">Open End · WM-Public-Viewing im Hof</div>
                </li>
              </ul>
            </div>
          </div>

          {/* PARALLELE SESSIONS */}
          <div className="sdc-sessions-box">
            <div className="sdc-sessions-head">
              <span className="sdc-tt-time" style={{ fontSize: 15 }}>13:15</span>
              <span>· Parallele Sessions</span>
            </div>
            <ul className="sdc-sessions-list">
              <li className="sdc-session" style={{ borderLeftColor: "#b537f2" }}>
                <div className="sdc-session-title">Ask-the-Expert-Lounge: Zoho MCP live</div>
                <div className="sdc-tt-sub">Bahadir Alaz · 1 Std 15 Min</div>
              </li>
              <li className="sdc-session" style={{ borderLeftColor: "var(--sdc-cyan)" }}>
                <div className="sdc-session-title">Deep Dive A — The NEW DocuWare</div>
                <div className="sdc-tt-sub">Live-Demo · 1 Std</div>
              </li>
              <li className="sdc-session" style={{ borderLeftColor: "var(--sdc-pink)" }}>
                <div className="sdc-session-title">Deep Dive B — Leadership-Workshop</div>
                <div className="sdc-tt-sub">Betül Hanisch · 1 Std 30 Min</div>
              </li>
            </ul>
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
            <SdcLogo variant="sticker" size={96} style={{ marginBottom: 16, filter: "drop-shadow(0 0 12px rgba(255,45,146,0.55))" }} />
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
