import { Helmet } from "react-helmet-async";

/**
 * Culture & Code — hidden landing page for the SDC event series.
 * Stable URL: /culture-and-code (QR-friendly).
 */

const CultureAndCode = () => (
  <>
    <Helmet>
      <title>Culture & Code — Smiling Data Club</title>
      <meta
        name="description"
        content="Culture & Code — Videos und Aufzeichnungen der SDC Veranstaltungsreihe."
      />
      <link rel="canonical" href="/culture-and-code" />
      <meta property="og:title" content="Culture & Code — Smiling Data Club" />
      <meta
        property="og:description"
        content="Culture & Code — Videos und Aufzeichnungen der SDC Veranstaltungsreihe."
      />
      <meta property="og:type" content="website" />
    </Helmet>

    <style>{`
      @font-face {
        font-family: 'Silom';
        src: local('Silom'), local('Silom-Regular');
        font-display: swap;
      }

      .cc-root {
        --cc-bg: #0a0a1a;
        --cc-cyan: #5ecfcf;
        --cc-magenta: #e05fa0;
        --cc-purple: #6b3fa0;
        --cc-text: #ffffff;
        font-family: 'Silom', 'Courier New', 'Consolas', monospace;
        background-color: var(--cc-bg);
        color: var(--cc-text);
        min-height: 100%;
        position: relative;
        overflow-x: clip;
        -webkit-overflow-scrolling: touch;
      }

      /* Sun glow behind the grid */
      .cc-sun {
        position: absolute;
        left: 50%;
        bottom: -10%;
        transform: translateX(-50%);
        width: 1200px;
        height: 1200px;
        background: radial-gradient(
          circle at center,
          rgba(224, 95, 160, 0.32) 0%,
          rgba(107, 63, 160, 0.20) 30%,
          rgba(94, 207, 207, 0.10) 55%,
          transparent 70%
        );
        filter: blur(40px);
        pointer-events: none;
        z-index: 0;
      }

      /* Perspective synthwave grid */
      .cc-grid {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 55vh;
        perspective: 600px;
        pointer-events: none;
        z-index: 0;
        overflow: hidden;
      }
      .cc-grid::before {
        content: '';
        position: absolute;
        inset: -20% -20% -20% -20%;
        background-image:
          linear-gradient(to right, rgba(94, 207, 207, 0.32) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(224, 95, 160, 0.32) 1px, transparent 1px);
        background-size: 60px 60px;
        transform: rotateX(60deg) translateZ(0);
        transform-origin: center top;
        animation: cc-grid-scroll 12s linear infinite;
        mask-image: linear-gradient(to bottom, transparent 0%, black 25%, black 100%);
        -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 25%, black 100%);
      }
      @keyframes cc-grid-scroll {
        from { background-position: 0 0; }
        to   { background-position: 0 60px; }
      }

      /* Scanlines */
      .cc-scanlines {
        position: absolute;
        inset: 0;
        pointer-events: none;
        z-index: 1;
        background-image: repeating-linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0.03) 0px,
          rgba(255, 255, 255, 0.03) 1px,
          transparent 1px,
          transparent 3px
        );
        mix-blend-mode: overlay;
      }

      .cc-content {
        position: relative;
        z-index: 2;
      }

      .cc-wordmark {
        font-family: 'Silom', 'Courier New', monospace;
        letter-spacing: 0.45em;
        font-size: 0.8rem;
        color: var(--cc-cyan);
        text-shadow:
          0 0 6px rgba(94, 207, 207, 0.8),
          0 0 16px rgba(94, 207, 207, 0.4);
      }

      .cc-headline {
        font-family: 'Silom', 'Courier New', monospace;
        font-weight: 700;
        letter-spacing: 0.04em;
        line-height: 1;
        color: #fff;
        text-shadow:
          0 0 8px rgba(94, 207, 207, 0.9),
          0 0 24px rgba(94, 207, 207, 0.55),
          0 0 48px rgba(224, 95, 160, 0.35);
        animation: cc-headline-flicker 6s ease-in-out infinite;
      }
      @keyframes cc-headline-flicker {
        0%, 92%, 100% { opacity: 1; }
        93% { opacity: 0.82; }
        94% { opacity: 1; }
        96% { opacity: 0.9; }
        97% { opacity: 1; }
      }

      .cc-subline {
        font-family: 'Silom', 'Courier New', monospace;
        color: var(--cc-text);
        opacity: 0.75;
        letter-spacing: 0.12em;
      }

      .cc-divider {
        height: 1px;
        background: linear-gradient(
          to right,
          transparent,
          var(--cc-magenta) 30%,
          var(--cc-cyan) 70%,
          transparent
        );
        opacity: 0.7;
      }

      .cc-back-link {
        font-family: 'Silom', 'Courier New', monospace;
        letter-spacing: 0.25em;
        font-size: 0.7rem;
        color: var(--cc-text);
        opacity: 0.55;
        transition: opacity 0.2s ease, color 0.2s ease;
      }

      .cc-video-wrap {
        width: 90vw;
        max-width: 800px;
        margin: 0 auto;
        background: #1a1a2e;
        border: 2px solid #5ecfcf;
        border-radius: 12px;
        box-shadow: 0 0 20px #5ecfcf44;
        padding: 12px;
      }
      .cc-video {
        display: block;
        width: 100%;
        height: auto;
        min-height: 200px;
        border-radius: 8px;
        background: #000;
        touch-action: pan-y;
      }
      @media (min-width: 768px) {
        .cc-video { min-height: 360px; }
      }
      .cc-back-link:hover {
        opacity: 1;
        color: var(--cc-cyan);
      }

      .cc-logo {
        filter:
          drop-shadow(0 0 12px rgba(94, 207, 207, 0.45))
          drop-shadow(0 0 24px rgba(224, 95, 160, 0.25));
      }

      @media (prefers-reduced-motion: reduce) {
        .cc-grid::before,
        .cc-headline {
          animation: none !important;
        }
      }
    `}</style>

    <div className="cc-root">
      <div className="cc-sun" aria-hidden="true" />
      <div className="cc-grid" aria-hidden="true" />
      <div className="cc-scanlines" aria-hidden="true" />

      <div className="cc-content flex flex-col" style={{ minHeight: "100%" }}>
        <header className="px-6 md:px-10 pt-10 md:pt-12 flex flex-col items-center">
          <img
            src="/assets/sdc-logo.png"
            alt="Smiling Data Club"
            width={120}
            height={120}
            className="cc-logo w-[120px] h-auto select-none"
            draggable={false}
          />
          <a href="/" className="cc-back-link uppercase mt-6">← zurück zu Sirius</a>
        </header>

        <main className="flex-1 flex flex-col items-center justify-center px-6 py-16">
          <div className="w-full max-w-4xl flex flex-col items-center text-center">
            <span className="cc-wordmark uppercase mb-6">// Event Series</span>

            <h1 className="cc-headline text-5xl md:text-7xl lg:text-8xl mb-6">
              Culture &amp; Code
            </h1>

            <div className="cc-divider w-40 mb-12" />

            <div className="cc-video-wrap">
              <video
                src="/videos/Edits_Fabius_Kopf_20260625_111710.mp4"
                controls
                playsInline
                preload="auto"
                className="cc-video"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </main>

        <footer className="px-6 md:px-10 pb-8 pt-4 flex items-center justify-center">
          <span className="cc-wordmark uppercase opacity-60">
            Smiling Data Club &nbsp;·&nbsp; Culture &amp; Code
          </span>
        </footer>
      </div>
    </div>
  </>
);

export default CultureAndCode;
