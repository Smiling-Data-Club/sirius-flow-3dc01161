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

      html,
      body,
      #root,
      .app-wrapper {
        background: #0a0a1a !important;
      }

      html {
        min-height: 100%;
      }

      body {
        min-height: 100%;
        margin: 0;
        overflow-x: hidden;
        overflow-y: auto;
        overscroll-behavior-y: none;
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
        width: 100%;
        max-width: 100vw;
        position: relative;
        -webkit-overflow-scrolling: touch;
        box-sizing: border-box;
      }

      .cc-page {
        width: 100%;
        max-width: 100vw;
        min-height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background:
          radial-gradient(circle at 50% 22%, rgba(94, 207, 207, 0.16), transparent 34rem),
          radial-gradient(circle at 50% 100%, rgba(224, 95, 160, 0.14), transparent 28rem),
          #0a0a1a;
        box-sizing: border-box;
      }

      .cc-section {
        width: 100%;
        padding: 0 20px;
        box-sizing: border-box;
      }

      .cc-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
        padding-top: 32px;
      }

      .cc-main {
        display: flex;
        flex: 1 0 auto;
        flex-direction: column;
        align-items: center;
        gap: 24px;
        padding-top: 24px;
        padding-bottom: 40px;
        text-align: center;
      }

      .cc-footer {
        flex: 0 0 auto;
        padding-top: 24px;
        padding-bottom: 32px;
        text-align: center;
        background: #0a0a1a;
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
        padding: 0 16px;
        word-break: keep-all;
        overflow-wrap: normal;
        color: #fff;
        font-size: clamp(2.5rem, 12vw, 4.75rem);
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
        min-height: 44px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        touch-action: manipulation;
      }

      .cc-video-wrap {
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
        background: #1a1a2e;
        border: 2px solid #5ecfcf;
        border-radius: 12px;
        box-shadow: 0 0 20px #5ecfcf44;
        padding: 8px;
        box-sizing: border-box;
      }
      .cc-video {
        display: block;
        width: 100%;
        height: auto;
        border-radius: 8px;
        background: #1a1a2e;
        touch-action: pan-y;
      }

      @media (min-width: 768px) {
        .cc-header {
          padding-top: 48px;
        }

        .cc-main {
          gap: 32px;
          padding-top: 32px;
          padding-bottom: 56px;
        }

        .cc-headline {
          font-size: clamp(4.5rem, 8vw, 8rem);
        }
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
        .cc-headline {
          animation: none !important;
        }
      }
    `}</style>

    <div className="cc-root">
      <div className="cc-page">
        <header className="cc-section cc-header">
          <img
            src="/assets/sdc-logo.png"
            alt="Smiling Data Club"
            width={120}
            height={120}
            className="cc-logo w-[96px] sm:w-[120px] h-auto select-none"
            draggable={false}
          />
        </header>

        <main className="cc-section cc-main">
          <span className="cc-wordmark uppercase">// Event Series</span>

          <h1 className="cc-headline">
            Culture &amp; Code
          </h1>

          <div className="cc-divider w-32 sm:w-40" />

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
        </main>

        <footer className="cc-section cc-footer">
          <span className="cc-wordmark uppercase opacity-60">
            Smiling Data Club &nbsp;·&nbsp; Culture &amp; Code
          </span>
          <div>
            <a href="/" className="cc-back-link uppercase">← zurück zu Sirius</a>
          </div>
        </footer>
      </div>
    </div>
  </>
);

export default CultureAndCode;
