import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import SdcLogo from "@/components/SdcLogo";
import sdcLogoFull from "@/assets/sdc/sdc-logo-full.png";
import aftermovieMp4Asset from "@/assets/sdc/aftermovie.mp4.asset.json";
import aftermovieWebmAsset from "@/assets/sdc/aftermovie.webm.asset.json";
import aftermoviePoster from "@/assets/sdc/aftermovie_poster.jpg";

const aftermovieVideo = aftermovieMp4Asset.url;
const aftermovieWebm = aftermovieWebmAsset.url;

import { galleryItems, reelItems, type GalleryCategoryKey } from "@/data/sdcGallery";
import { supabase } from "@/integrations/supabase/client";

const SmilingDataClub = () => {
  const aftermovieRef = useRef<HTMLVideoElement>(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [aftermovieStarted, setAftermovieStarted] = useState(false);

  const playAftermovie = async () => {
    const video = aftermovieRef.current;
    if (!video) return;

    await video.play();
    setAftermovieStarted(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || submitting) return;
    setSubmitting(true);
    setErrorMsg(null);
    try {
      const { error } = await supabase
        .from("sdc_newsletter_signups")
        .insert({ email, source: "smiling-data-club-page" });
      if (error) throw error;
      setSubmitted(true);
    } catch (err) {
      console.error("Newsletter signup failed", err);
      setErrorMsg("Da ist etwas schiefgelaufen. Bitte versuch es später erneut.");
    } finally {
      setSubmitting(false);
    }
  };

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const showPrev = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i - 1 + galleryItems.length) % galleryItems.length)),
    []
  );
  const showNext = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i + 1) % galleryItems.length)),
    []
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowLeft") showPrev();
      else if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);


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
        /* Headlines — eine einzige Vollfarbe, dezenter Neon-Glow. Kein Gradient. */
        .sdc-grad-headline {
          color: #ffffff;
          text-shadow:
            0 0 18px rgba(255,45,146,0.45),
            0 0 40px rgba(255,45,146,0.25);
        }
        .sdc-grad-pc {
          color: #ff2d92;
          text-shadow:
            0 0 16px rgba(0,240,255,0.35),
            0 0 32px rgba(255,45,146,0.25);
        }



        /* perspektivisches Neon-Grid */
        .sdc-grid {
          position: absolute;
          left: 50%; right: auto; bottom: 0;
          width: 100vw;
          transform: translateX(-50%);
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
        @keyframes sdc-logo-float {
          0%, 100% { transform: translateY(0px); }
          50%      { transform: translateY(-8px); }
        }
        @keyframes sdc-logo-glitch {
          0%, 92%, 100% {
            filter: drop-shadow(0 0 4px rgba(10,4,32,0.55)) drop-shadow(0 0 8px rgba(10,4,32,0.45)) drop-shadow(0 0 14px rgba(10,4,32,0.35)) drop-shadow(0 0 22px rgba(10,4,32,0.25)) drop-shadow(0 0 14px rgba(0,240,255,0.6)) drop-shadow(0 0 22px rgba(255,45,146,0.4));
            transform: translateX(0);
          }
          93% {
            filter: drop-shadow(0 0 4px rgba(10,4,32,0.55)) drop-shadow(0 0 8px rgba(10,4,32,0.45)) drop-shadow(0 0 14px rgba(10,4,32,0.35)) drop-shadow(0 0 22px rgba(10,4,32,0.25)) drop-shadow(3px 0 0 rgba(255,45,146,0.8)) drop-shadow(-3px 0 0 rgba(0,240,255,0.8));
            transform: translateX(-2px);
          }
          94% {
            filter: drop-shadow(0 0 4px rgba(10,4,32,0.55)) drop-shadow(0 0 8px rgba(10,4,32,0.45)) drop-shadow(0 0 14px rgba(10,4,32,0.35)) drop-shadow(0 0 22px rgba(10,4,32,0.25)) drop-shadow(-3px 0 0 rgba(255,45,146,0.8)) drop-shadow(3px 0 0 rgba(0,240,255,0.8));
            transform: translateX(2px);
          }
          95% {
            filter: drop-shadow(0 0 4px rgba(10,4,32,0.55)) drop-shadow(0 0 8px rgba(10,4,32,0.45)) drop-shadow(0 0 14px rgba(10,4,32,0.35)) drop-shadow(0 0 22px rgba(10,4,32,0.25)) drop-shadow(2px 0 0 rgba(255,45,146,0.8)) drop-shadow(-2px 0 0 rgba(0,240,255,0.8));
            transform: translateX(-1px);
          }
          96% {
            filter: drop-shadow(0 0 4px rgba(10,4,32,0.55)) drop-shadow(0 0 8px rgba(10,4,32,0.45)) drop-shadow(0 0 14px rgba(10,4,32,0.35)) drop-shadow(0 0 22px rgba(10,4,32,0.25)) drop-shadow(0 0 14px rgba(0,240,255,0.6)) drop-shadow(0 0 22px rgba(255,45,146,0.4));
            transform: translateX(0);
          }
        }
        .sdc-hero-logo-float {
          animation: sdc-logo-float 4s ease-in-out infinite;
          will-change: transform;
        }
        .sdc-hero-logo-glitch {
          animation: sdc-logo-glitch 7s steps(1) infinite;
          will-change: filter, transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .sdc-hero-logo-float,
          .sdc-hero-logo-glitch { animation: none !important; }
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
          padding: 40px 20px;
          max-width: 1100px;
          margin: 0 auto;
        }
        @media (min-width: 768px) {
          .sdc-section { padding: 64px 40px; }
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
        .sdc-masonry { column-count: 3; column-gap: 16px; }
        @media (max-width: 1000px) { .sdc-masonry { column-count: 2; } }
        @media (max-width: 620px) { .sdc-masonry { column-count: 1; } }
        .sdc-reels-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        @media (max-width: 900px) { .sdc-reels-grid { grid-template-columns: 1fr; max-width: 420px; margin: 0 auto; } }

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



          <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: 32 }}>
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 20,
              }}
            >
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  width: 220,
                  height: 220,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(0,240,255,0.35) 0%, rgba(255,45,146,0.2) 40%, transparent 70%)",
                  filter: "blur(20px)",
                  zIndex: 0,
                }}
              />
              <div className="sdc-hero-logo-float" style={{ position: "relative", zIndex: 1, display: "inline-block" }}>
                <img
                  src={sdcLogoFull}
                  alt="Smiling Data Club"
                  width={195}
                  height={195}
                  className="sdc-hero-logo-glitch"
                  style={{
                    display: "block",
                    width: 195,
                    height: "auto",
                    filter:
                      "drop-shadow(0 0 4px rgba(10,4,32,0.55)) drop-shadow(0 0 8px rgba(10,4,32,0.45)) drop-shadow(0 0 14px rgba(10,4,32,0.35)) drop-shadow(0 0 22px rgba(10,4,32,0.25)) drop-shadow(0 0 14px rgba(0,240,255,0.6)) drop-shadow(0 0 22px rgba(255,45,146,0.4))",
                  }}
                />
              </div>
            </div>
            <div
              className="sdc-label"
              style={{
                fontSize: 13,
                color: "#7ff5ff",
                background: "rgba(0,240,255,0.08)",
                borderLeft: "none",
                padding: "8px 16px",
                borderRadius: 999,
                textShadow: "0 0 12px rgba(0,240,255,0.7)",
              }}
            >
              // KICK-OFF · 01.07.2026 · FREIBURG
            </div>
            <h1 className="sdc-grad-headline" style={{ fontSize: "clamp(22px, 4.2vw, 42px)", lineHeight: 1.2, maxWidth: 900, margin: 0 }}>
              das war culture & code. unser erstes smiling data club event — und es war genau das, was wir uns erträumt haben.
            </h1>

            <div
              style={{
                width: "100%",
                maxWidth: 960,
                aspectRatio: "16 / 9",
                border: "2px solid #00f0ff",
                borderRadius: 14,
                overflow: "hidden",
                position: "relative",
                background: "#000",
                boxShadow: "0 0 24px rgba(0,240,255,0.35), inset 0 0 40px rgba(0,240,255,0.08)",
              }}
            >
              <video
                ref={aftermovieRef}
                poster={aftermoviePoster}
                controls
                playsInline
                preload="metadata"
                onPlay={() => setAftermovieStarted(true)}
                onEnded={() => setAftermovieStarted(false)}
                style={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }}
              >
                <source src={aftermovieVideo} type="video/mp4" />
                <source src={aftermovieWebm} type="video/webm" />
                Your browser does not support the video tag.
              </video>
              {!aftermovieStarted && (
                <button
                  type="button"
                  onClick={playAftermovie}
                  aria-label="Aftermovie abspielen"
                  title="Aftermovie abspielen"
                  style={{
                    position: "absolute",
                    inset: 0,
                    margin: "auto",
                    width: 76,
                    height: 76,
                    borderRadius: "50%",
                    border: "2px solid var(--sdc-cyan)",
                    background: "rgba(10,4,32,0.88)",
                    color: "var(--sdc-cyan)",
                    fontSize: 30,
                    lineHeight: 1,
                    cursor: "pointer",
                    boxShadow: "0 0 24px rgba(0,240,255,0.65), 0 0 42px rgba(255,45,146,0.35)",
                    zIndex: 2,
                  }}
                >
                  ▶
                </button>
              )}
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
          <h2 className="sdc-grad-pc" style={{ fontSize: "clamp(28px, 4vw, 44px)", marginTop: 0, marginBottom: 28 }}>
            so hat sich der tag angefühlt
          </h2>
          <div
            style={{
              columnCount: 3,
              columnGap: 16,
            }}
            className="sdc-masonry"
          >
            {galleryItems.map((g, i) => (
              <figure
                key={`${g.src}-${i}`}
                onClick={() => setLightboxIndex(i)}
                style={{
                  margin: "0 0 16px",
                  breakInside: "avoid",
                  borderRadius: 14,
                  overflow: "hidden",
                  border: g.featured
                    ? "1px solid rgba(255,45,146,0.6)"
                    : "1px solid rgba(0,240,255,0.25)",
                  boxShadow: g.featured
                    ? "0 0 32px rgba(255,45,146,0.4), 0 0 56px rgba(0,240,255,0.28)"
                    : "0 0 20px rgba(255,45,146,0.12), 0 0 32px rgba(0,240,255,0.1)",
                  background: "var(--bg-mid)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                  cursor: "zoom-in",
                  transform: g.featured ? "scale(1.01)" : undefined,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = g.featured ? "translateY(-2px) scale(1.015)" : "translateY(-2px)";
                  e.currentTarget.style.borderColor = g.featured ? "rgba(255,45,146,0.85)" : "rgba(0,240,255,0.55)";
                  e.currentTarget.style.boxShadow = "0 0 28px rgba(255,45,146,0.42), 0 0 52px rgba(0,240,255,0.32)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = g.featured ? "scale(1.01)" : "";
                  e.currentTarget.style.borderColor = g.featured ? "rgba(255,45,146,0.6)" : "rgba(0,240,255,0.25)";
                  e.currentTarget.style.boxShadow = g.featured
                    ? "0 0 32px rgba(255,45,146,0.4), 0 0 56px rgba(0,240,255,0.28)"
                    : "0 0 20px rgba(255,45,146,0.12), 0 0 32px rgba(0,240,255,0.1)";
                }}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  decoding="async"
                  style={{ display: "block", width: "100%", height: "auto", objectFit: "cover" }}
                />
                {g.caption && (
                  <figcaption
                    style={{
                      padding: "10px 12px",
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 10,
                      letterSpacing: "0.2em",
                      color: "var(--sdc-text-dim)",
                      textTransform: "uppercase",
                    }}
                  >
                    {g.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </section>

        {/* IN BEWEGUNG — Video-Reels */}
        <section className="sdc-section">
          <div className="sdc-label" style={{ marginBottom: 16 }}>03 · In Bewegung</div>
          <h2 className="sdc-grad-pc" style={{ fontSize: "clamp(28px, 4vw, 44px)", marginTop: 0, marginBottom: 24 }}>
            kurz gesagt.
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--sdc-text-soft)", maxWidth: 720, marginBottom: 28 }}>
            Drei O-Töne unserer Gäste vom Tag.
          </p>
          <div className="sdc-reels-grid">
            {reelItems.map((r) => (
              <figure
                key={r.videoSrc}
                style={{
                  margin: 0,
                  borderRadius: 14,
                  overflow: "hidden",
                  border: "1px solid rgba(0,240,255,0.25)",
                  boxShadow: "0 0 20px rgba(255,45,146,0.12), 0 0 32px rgba(0,240,255,0.1)",
                  background: "var(--bg-mid)",
                }}
              >
                <div style={{ position: "relative", background: "#000" }}>
                  <video
                    poster={r.poster}
                    controls
                    playsInline
                    preload="metadata"
                    style={{ display: "block", width: "100%", height: "auto", aspectRatio: "9 / 16", objectFit: "cover" }}
                  >
                    <source src={r.videoSrcWebm} type="video/webm" />
                    <source src={r.videoSrc} type="video/mp4" />
                  </video>
                </div>
                <figcaption
                  style={{
                    padding: "12px 14px",
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 11,
                    letterSpacing: "0.15em",
                    color: "var(--sdc-text-dim)",
                    textTransform: "uppercase",
                  }}
                >
                  <span style={{ color: "#00f0ff" }}>{r.title}</span>
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
          <p style={{ fontSize: 18, lineHeight: 1.75, color: "var(--sdc-text-soft)", maxWidth: 780 }}>
            Zwei Keynotes, drei Impulse, parallele Deep-Dives und viel Zeit dazwischen. Fabian Schüler und Bahadir Alaz
            haben eröffnet, Betül Hanisch hat über den Menschen nach der Maschine gesprochen, Josef R. Schneider über AI &
            EQ. Prof. Dr. Hannah Bast von der Uni Freiburg hat den Tag mit einer Closing-Keynote über KI, Algorithmen und
            den Menschen dahinter geschlossen. Ausgeklungen ist der Tag im Innenhof — mit Coffee Bike, offenen
            Gesprächen und Musik, bis das Licht ausging.
          </p>
        </section>


        {/* DANKE */}
        <section className="sdc-section" style={{ textAlign: "center" }}>
          <div className="sdc-label" style={{ marginBottom: 16, display: "inline-block" }}>05 · Danke</div>
          <h2 className="sdc-grad-headline" style={{ fontSize: "clamp(40px, 8vw, 96px)", margin: "0 0 32px" }}>
            danke.
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.75, color: "var(--sdc-text-soft)", maxWidth: 780, margin: "0 auto" }}>
            Dieser Tag hat vor allem unserem kleinen Orga-Team einiges abverlangt — von der ersten Idee bis zum letzten
            Handgriff. Und es war jede Minute wert. Danke an Betül und Hannah Bast fürs Teilen ihres Wissens, an das
            ganze Team für den Einsatz vor, während und nach dem Tag, an Sharp für die Technik und an Golden
            Cut Media für Ton, Bild und Licht. Und an jede und jeden, die/der da war — schön, dass ihr dabei wart.
          </p>
        </section>

        {/* WAS KOMMT ALS NÄCHSTES */}
        <section className="sdc-section" style={{ paddingBottom: 80 }}>
          <div className="sdc-label" style={{ marginBottom: 16 }}>06 · Was kommt als nächstes</div>
          <h2 className="sdc-grad-pc" style={{ fontSize: "clamp(28px, 4vw, 44px)", marginTop: 0, marginBottom: 24 }}>
            das war der anfang
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.75, color: "var(--sdc-text-soft)", maxWidth: 780, marginBottom: 32 }}>
            Culture & Code war kein einmaliges Ding. Der nächste Smiling Data Club Termin steht noch nicht fest — wird aber kommen. Trag
            dich ein, dann bist du der/die Erste, die/der Bescheid bekommt.
          </p>

          <div className="sdc-save-date" style={{ marginBottom: 28 }}>
            <div className="sdc-label" style={{ display: "inline-block", borderLeft: "none", paddingLeft: 0, color: "var(--sdc-pink)", textShadow: "0 0 10px rgba(255,45,146,0.6)", marginBottom: 16 }}>
              SAVE THE DATE
            </div>
            <h3 className="sdc-grad-pc" style={{ fontSize: "clamp(24px, 3.5vw, 36px)", margin: "0 0 12px" }}>
              nächstes smiling data club event
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
              disabled={submitted || submitting}
            />
            <button type="submit" className="sdc-btn sdc-btn-pink" disabled={submitted || submitting}>
              {submitted ? "✓ Eingetragen" : submitting ? "Sende..." : "Eintragen"}
            </button>
          </form>
          {submitted && (
            <p style={{ textAlign: "center", marginTop: 20, color: "var(--sdc-green)", fontFamily: "'Space Mono', monospace", fontSize: 14, letterSpacing: "0.1em" }}>
              Danke, du bekommst Bescheid!
            </p>
          )}
          {errorMsg && (
            <p style={{ textAlign: "center", marginTop: 20, color: "var(--sdc-pink)", fontFamily: "'Space Mono', monospace", fontSize: 14, letterSpacing: "0.1em" }}>
              {errorMsg}
            </p>
          )}

          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link to="/" className="sdc-btn">← zurück zur homepage</Link>
          </div>
        </section>
      </div>

      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Foto-Galerie"
          onClick={closeLightbox}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(5,4,20,0.92)",
            backdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "clamp(16px, 4vw, 48px)",
          }}
        >
          {/* Close */}
          <button
            aria-label="Schließen"
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              width: 48,
              height: 48,
              borderRadius: "50%",
              border: "1px solid rgba(0,240,255,0.5)",
              background: "rgba(5,4,20,0.7)",
              color: "#00f0ff",
              fontSize: 22,
              lineHeight: 1,
              cursor: "pointer",
              boxShadow: "0 0 20px rgba(0,240,255,0.4)",
              fontFamily: "'Space Mono', monospace",
            }}
          >×</button>

          {/* Prev */}
          <button
            aria-label="Vorheriges Foto"
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
            style={{
              position: "absolute",
              left: 20,
              top: "50%",
              transform: "translateY(-50%)",
              width: 52,
              height: 52,
              borderRadius: "50%",
              border: "1px solid rgba(255,45,146,0.55)",
              background: "rgba(5,4,20,0.7)",
              color: "#ff2d92",
              fontSize: 24,
              cursor: "pointer",
              boxShadow: "0 0 20px rgba(255,45,146,0.4)",
              fontFamily: "'Space Mono', monospace",
            }}
          >‹</button>

          {/* Next */}
          <button
            aria-label="Nächstes Foto"
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            style={{
              position: "absolute",
              right: 20,
              top: "50%",
              transform: "translateY(-50%)",
              width: 52,
              height: 52,
              borderRadius: "50%",
              border: "1px solid rgba(255,45,146,0.55)",
              background: "rgba(5,4,20,0.7)",
              color: "#ff2d92",
              fontSize: 24,
              cursor: "pointer",
              boxShadow: "0 0 20px rgba(255,45,146,0.4)",
              fontFamily: "'Space Mono', monospace",
            }}
          >›</button>

          <figure
            onClick={(e) => e.stopPropagation()}
            style={{
              margin: 0,
              maxWidth: "min(1200px, 92vw)",
              maxHeight: "88vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 14,
            }}
          >
            <img
              src={galleryItems[lightboxIndex].src}
              alt={galleryItems[lightboxIndex].alt}
              style={{
                maxWidth: "100%",
                maxHeight: "78vh",
                objectFit: "contain",
                borderRadius: 12,
                border: "1px solid rgba(0,240,255,0.3)",
                boxShadow: "0 0 40px rgba(255,45,146,0.25), 0 0 60px rgba(0,240,255,0.2)",
              }}
            />
            <figcaption
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 11,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#00f0ff",
                textAlign: "center",
              }}
            >
              {galleryItems[lightboxIndex].caption && (
                <span style={{ marginRight: 12 }}>{galleryItems[lightboxIndex].caption}</span>
              )}
              <span style={{ color: "rgba(255,255,255,0.4)" }}>
                {lightboxIndex + 1} / {galleryItems.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </PageLayout>
  );
};

export default SmilingDataClub;
