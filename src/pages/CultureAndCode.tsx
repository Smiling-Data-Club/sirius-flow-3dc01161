import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SectionReveal from "@/components/SectionReveal";
import PageHero from "@/components/PageHero";

/**
 * Culture & Code
 * Hidden landing page (not linked in main nav) for the event video series.
 * Stable URL: /culture-and-code — safe to encode in a QR code now.
 *
 * To swap in the real video later:
 *  1. Upload the file to /public/videos/ (e.g. culture-and-code-01.mp4)
 *  2. Replace the VIDEO_PLACEHOLDER src below.
 *  3. Flip `videoReady` to true.
 */

type VideoItem = {
  id: string;
  title: string;
  date: string;
  description: string;
  // VIDEO_PLACEHOLDER: replace src with /videos/<file>.mp4 when ready
  src?: string;
  poster?: string;
};

const featuredVideo: VideoItem = {
  id: "cc-01",
  title: "Culture & Code – Auftaktveranstaltung",
  date: "Folgt in Kürze",
  description:
    "Das Video unserer ersten Culture & Code Veranstaltung wird hier in Kürze veröffentlicht.",
  // VIDEO_PLACEHOLDER: replace src here once the file is uploaded to /public/videos/
  src: undefined,
  poster: undefined,
};

// Future videos go here — page already renders a grid below the main video.
const additionalVideos: VideoItem[] = [];

const VideoPlayer = ({ video }: { video: VideoItem }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  // Autoplay (muted) when the player scrolls into view.
  useEffect(() => {
    const el = videoRef.current;
    if (!el || !video.src || hasPlayed) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            el.play().catch(() => {
              /* Autoplay blocked — user can press play manually. */
            });
            setHasPlayed(true);
          }
        });
      },
      { threshold: [0, 0.6, 1] }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [video.src, hasPlayed]);

  if (!video.src) {
    return (
      <div className="aspect-video w-full bg-[#1A1A2E] rounded-2xl flex flex-col items-center justify-center text-white shadow-[0px_20px_40px_rgba(25,28,30,0.12)] folded-corner overflow-hidden">
        <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-6 backdrop-blur-sm">
          <Play className="w-8 h-8 text-white" fill="currentColor" />
        </div>
        <p className="text-2xl md:text-3xl font-semibold mb-2 text-center px-4">
          Culture &amp; Code – Coming Soon
        </p>
        <p className="text-sm md:text-base text-white/70 text-center px-4 max-w-md">
          Das Video folgt in Kürze.
        </p>
        {/* VIDEO_PLACEHOLDER: replace this block by rendering the <video> below
            once `video.src` is set. The aspect ratio is locked so the layout
            will not shift when the real video is added. */}
      </div>
    );
  }

  return (
    <video
      ref={videoRef}
      src={video.src}
      poster={video.poster}
      controls
      playsInline
      muted
      preload="metadata"
      className="aspect-video w-full bg-black rounded-2xl shadow-[0px_20px_40px_rgba(25,28,30,0.12)] folded-corner"
    />
  );
};

const CultureAndCode = () => (
  <PageLayout
    title="Culture & Code — SIRIUS GmbH"
    description="Videos und Aufzeichnungen unserer Culture & Code Veranstaltungsreihe."
  >
    <PageHero
      topLine="Klarheit durch"
      keyword="Culture & Code"
      subtitle="Eindrücke, Talks und Aufzeichnungen unserer Veranstaltungsreihe — kompakt und auf den Punkt."
    />

    <div className="pb-24 px-8 max-w-5xl mx-auto">
      <SectionReveal>
        <div className="reveal mb-12">
          <VideoPlayer video={featuredVideo} />
          <div className="mt-6">
            <time className="text-xs text-muted-foreground font-medium">
              {featuredVideo.date}
            </time>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-2 mb-3">
              {featuredVideo.title}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              {featuredVideo.description}
            </p>
          </div>
        </div>
      </SectionReveal>

      {additionalVideos.length > 0 && (
        <SectionReveal stagger>
          <h3 className="text-xl font-semibold text-foreground mt-20 mb-8">
            Weitere Folgen
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalVideos.map((v) => (
              <article
                key={v.id}
                className="reveal bg-card rounded-xl shadow-[0px_20px_40px_rgba(25,28,30,0.06)] overflow-hidden folded-corner"
              >
                <VideoPlayer video={v} />
                <div className="p-6">
                  <time className="text-xs text-muted-foreground font-medium">
                    {v.date}
                  </time>
                  <h4 className="text-lg font-semibold text-foreground mt-2 mb-2">
                    {v.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{v.description}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionReveal>
      )}
    </div>
  </PageLayout>
);

export default CultureAndCode;
