import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Play } from "lucide-react";

/**
 * Culture & Code — hidden landing page for the SDC event series.
 * Stable URL: /culture-and-code (QR-friendly).
 *
 * Immersive synthwave layout — bypasses the regular header/footer
 * to keep the SDC atmosphere uninterrupted.
 *
 * To swap in the real video later:
 *   1. Drop file into /public/videos/ (e.g. culture-and-code-01.mp4)
 *   2. Set `videoSrc` below.
 */

// VIDEO_PLACEHOLDER: replace src here once the file is uploaded to /public/videos/
const videoSrc: string | undefined = undefined;
const videoPoster: string | undefined = undefined;

const VideoArea = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || !videoSrc || hasPlayed) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && e.intersectionRatio >= 0.6) {
            el.play().catch(() => {});
            setHasPlayed(true);
          }
        });
      },
      { threshold: [0, 0.6, 1] }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [hasPlayed]);

  if (!videoSrc) {
    return (
      <div className="cc-video-frame relative aspect-video w-full rounded-2xl overflow-hidden flex flex-col items-center justify-center">
        <div className="cc-play-pulse w-24 h-24 rounded-full flex items-center justify-center mb-8">
          <Play className="w-9 h-9" fill="currentColor" />
        </div>
        <p className="cc-placeholder-title text-2xl md:text-3xl font-bold tracking-wider text-center px-6">
          COMING SOON
        </p>
        <p className="cc-placeholder-sub mt-3 text-sm md:text-base text-center px-6">
          Das Video folgt in Kürze.
        </p>
      </div>
    );
  }

  return (
    <div className="cc-video-frame relative aspect-video w-full rounded-2xl overflow-hidden">
      <video
        ref={videoRef}
        src={videoSrc}
        poster={videoPoster}
        controls
        playsInline
        muted
        preload="metadata"
        className="w-full h-full bg-black"
      />
    </div>
  );
};

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
        --cc-cyan: #00f5ff;
        --cc-magenta: #ff00aa;
        --cc-purple: #7c3aed;
        --cc-text: #e6e6ff;
        font-family: 'Silom', 'Courier New', 'Consolas', monospace;
        background-color: var(--cc-bg);
        color: var(--cc-text);
        min-height: 100vh;
        position: relative;
        overflow-x: hidden;
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
          rgba(255, 0, 170, 0.35) 0%,
          rgba(124, 58, 237, 0.18) 30%,
          rgba(0, 245, 255, 0.08) 55%,
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
          linear-gradient(to right, rgba(0, 245, 255, 0.35) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 0, 170, 0.35) 1px, transparent 1px);
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
          0 0 6px rgba(0, 245, 255, 0.8),
          0 0 16px rgba(0, 245, 255, 0.4);
      }

      .cc-headline {
        font-family: 'Silom', 'Courier New', monospace;
        font-weight: 700;
        letter-spacing: 0.04em;
        line-height: 1;
        color: #fff;
        text-shadow:
          0 0 8px rgba(0, 245, 255, 0.9),
          0 0 24px rgba(0, 245, 255, 0.55),
          0 0 48px rgba(255, 0, 170, 0.35);
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

      /* Video frame with pulsing neon border */
      .cc-video-frame {
        background: linear-gradient(160deg, #0f0f24 0%, #14142b 100%);
        box-shadow:
          0 0 0 1px rgba(0, 245, 255, 0.4),
          0 0 24px rgba(0, 245, 255, 0.35),
          0 0 60px rgba(255, 0, 170, 0.25),
          inset 0 0 60px rgba(124, 58, 237, 0.15);
        animation: cc-border-pulse 3.5s ease-in-out infinite;
      }
      @keyframes cc-border-pulse {
        0%, 100% {
          box-shadow:
            0 0 0 1px rgba(0, 245, 255, 0.4),
            0 0 24px rgba(0, 245, 255, 0.35),
            0 0 60px rgba(255, 0, 170, 0.25),
            inset 0 0 60px rgba(124, 58, 237, 0.15);
        }
        50% {
          box-shadow:
            0 0 0 1px rgba(255, 0, 170, 0.55),
            0 0 32px rgba(255, 0, 170, 0.5),
            0 0 80px rgba(0, 245, 255, 0.35),
            inset 0 0 80px rgba(124, 58, 237, 0.22);
        }
      }

      .cc-play-pulse {
        background: rgba(0, 245, 255, 0.12);
        border: 1px solid rgba(0, 245, 255, 0.6);
        color: var(--cc-cyan);
        box-shadow:
          0 0 24px rgba(0, 245, 255, 0.5),
          inset 0 0 16px rgba(0, 245, 255, 0.25);
        animation: cc-play-pulse 2.4s ease-in-out infinite;
      }
      @keyframes cc-play-pulse {
        0%, 100% { transform: scale(1); box-shadow: 0 0 24px rgba(0, 245, 255, 0.5), inset 0 0 16px rgba(0, 245, 255, 0.25); }
        50%      { transform: scale(1.06); box-shadow: 0 0 40px rgba(255, 0, 170, 0.55), inset 0 0 22px rgba(255, 0, 170, 0.3); }
      }

      .cc-placeholder-title {
        font-family: 'Silom', 'Courier New', monospace;
        color: #fff;
        text-shadow:
          0 0 8px rgba(255, 0, 170, 0.9),
          0 0 20px rgba(255, 0, 170, 0.45);
      }
      .cc-placeholder-sub {
        font-family: 'Silom', 'Courier New', monospace;
        color: var(--cc-cyan);
        opacity: 0.85;
        letter-spacing: 0.18em;
      }

      .cc-back-link {
        font-family: 'Silom', 'Courier New', monospace;
        letter-spacing: 0.25em;
        font-size: 0.7rem;
        color: var(--cc-text);
        opacity: 0.55;
        transition: opacity 0.2s ease, color 0.2s ease;
      }
      .cc-back-link:hover {
        opacity: 1;
        color: var(--cc-cyan);
      }

      @media (prefers-reduced-motion: reduce) {
        .cc-grid::before,
        .cc-headline,
        .cc-video-frame,
        .cc-play-pulse {
          animation: none !important;
        }
      }
    `}</style>

    <div className="cc-root">
      <div className="cc-sun" aria-hidden="true" />
      <div className="cc-grid" aria-hidden="true" />
      <div className="cc-scanlines" aria-hidden="true" />

      <div className="cc-content min-h-screen flex flex-col">
        <header className="px-6 md:px-10 pt-8 flex items-center justify-between">
          <span className="cc-wordmark uppercase">Smiling Data Club</span>
          <a href="/" className="cc-back-link uppercase">← Sirius</a>
        </header>

        <main className="flex-1 flex flex-col items-center justify-center px-6 py-16">
          <div className="w-full max-w-4xl flex flex-col items-center text-center">
            <span className="cc-wordmark uppercase mb-6">// Event Series</span>

            <h1 className="cc-headline text-5xl md:text-7xl lg:text-8xl mb-6">
              Culture &amp; Code
            </h1>

            <p className="cc-subline text-sm md:text-base uppercase mb-10">
              Das Video folgt in Kürze.
            </p>

            <div className="cc-divider w-40 mb-12" />

            <div className="w-full">
              <VideoArea />
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
