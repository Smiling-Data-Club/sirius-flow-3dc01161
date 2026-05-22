import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Linkedin, Instagram, Play, Eye, ExternalLink } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import LinkedInFeed from "@/components/LinkedInFeed";

// ─── Types ────────────────────────────────────────────────────────────────────
interface InstagramPost {
  id: string;
  post_id: string;
  caption: string;
  created_at: string;
  url: string;
  likes: number;
  media_url: string | null;
  media_type: string;
}

interface TikTokPost {
  id: string;
  post_id: string;
  description: string;
  created_at: string;
  url: string;
  views: number;
  cover_image_url: string | null;
}

interface YouTubeVideo {
  id: string;
  video_id: string;
  title: string;
  description: string;
  created_at: string;
  url: string;
  thumbnail_url: string | null;
  view_count: number;
  duration: string | null;
}

type Platform = "linkedin" | "instagram" | "tiktok" | "youtube";

const tabs: { key: Platform; label: string; icon: React.ReactNode }[] = [
  { key: "linkedin", label: "LinkedIn", icon: <Linkedin className="w-4 h-4" /> },
  { key: "instagram", label: "Instagram", icon: <Instagram className="w-4 h-4" /> },
  {
    key: "tiktok",
    label: "TikTok",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52V6.8a4.84 4.84 0 01-1-.11z" />
      </svg>
    ),
  },
  {
    key: "youtube",
    label: "YouTube",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 00.5 6.19 31.56 31.56 0 000 12a31.56 31.56 0 00.5 5.81 3.02 3.02 0 002.12 2.14c1.84.55 9.38.55 9.38.55s7.54 0 9.38-.55a3.02 3.02 0 002.12-2.14A31.56 31.56 0 0024 12a31.56 31.56 0 00-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z" />
      </svg>
    ),
  },
];

const followLinks: { platform: Platform; label: string; url: string; color: string }[] = [
  { platform: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/fabian-sch%C3%BCler-6a9049159/", color: "bg-[#003DA5]" },
  { platform: "instagram", label: "Instagram", url: "https://www.instagram.com/sirius.freiburg/", color: "bg-gradient-to-r from-[#E1306C] to-[#F77737]" },
  { platform: "tiktok", label: "TikTok", url: "https://www.tiktok.com/@gopaperlessbysirius", color: "bg-[#010101]" },
  { platform: "youtube", label: "YouTube", url: "https://www.youtube.com/@sirius.freiburg", color: "bg-[#FF0000]" },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function formatViews(n: number | null | undefined): string {
  if (n == null || isNaN(n)) return "0";
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(".", ",") + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace(".", ",") + "K";
  return n.toLocaleString("de-DE");
}

function truncate(text: string | null | undefined, max = 120) {
  if (!text) return "";
  if (text.length <= max) return text;
  return text.slice(0, max).trimEnd() + "…";
}

// ─── Skeleton ─────────────────────────────────────────────────────────────────
function SkeletonCard() {
  return (
    <div className="bg-card rounded-xl border border-border/50 overflow-hidden">
      <Skeleton className="w-full aspect-square" />
      <div className="p-4 space-y-2">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
      </div>
    </div>
  );
}

// ─── Instagram Card ───────────────────────────────────────────────────────────
function InstagramCard({ post }: { post: InstagramPost }) {
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-card rounded-xl border border-border/50 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
    >
      <div className="relative aspect-square bg-muted overflow-hidden">
        {post.media_url ? (
          <img src={post.media_url} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
        ) : (
          <div className="w-full h-full flex items-center justify-center"><Instagram className="w-12 h-12 text-muted-foreground/30" /></div>
        )}
        {(post.media_type === "VIDEO" || post.media_type === "REEL") && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
              <Play className="w-5 h-5 text-white fill-white ml-0.5" />
            </div>
          </div>
        )}
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <p className="text-sm text-foreground/90 leading-relaxed flex-1">{truncate(post.caption)}</p>
        <div className="mt-3 pt-3 border-t border-border/30 flex items-center justify-between text-xs text-muted-foreground">
          {(post.likes ?? 0) > 0 && <span>❤️ {post.likes!.toLocaleString("de-DE")}</span>}
          <span className="ml-auto font-semibold bg-gradient-to-r from-[#E1306C] to-[#F77737] bg-clip-text text-transparent">Ansehen →</span>
        </div>
      </div>
    </a>
  );
}

// ─── TikTok Card ──────────────────────────────────────────────────────────────
function TikTokCard({ post }: { post: TikTokPost }) {
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-card rounded-xl border border-border/50 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
    >
      <div className="relative aspect-[9/16] max-h-72 bg-[#010101] overflow-hidden">
        {post.cover_image_url ? (
          <img src={post.cover_image_url} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white/20">
            <Play className="w-12 h-12" />
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-[#FE2C55]/80 backdrop-blur-sm flex items-center justify-center shadow-lg">
            <Play className="w-6 h-6 text-white fill-white ml-0.5" />
          </div>
        </div>
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <p className="text-sm text-foreground/90 leading-relaxed flex-1">{truncate(post.description)}</p>
        <div className="mt-3 pt-3 border-t border-border/30 flex items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5" /> {formatViews(post.views)}</span>
          <span className="ml-auto font-semibold text-[#FE2C55]">Ansehen →</span>
        </div>
      </div>
    </a>
  );
}

// ─── YouTube Card ─────────────────────────────────────────────────────────────
function YouTubeCard({ video }: { video: YouTubeVideo }) {
  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-card rounded-xl border border-border/50 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
    >
      <div className="relative aspect-video bg-muted overflow-hidden">
        {video.thumbnail_url ? (
          <img src={video.thumbnail_url} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#FF0000]/10">
            <Play className="w-12 h-12 text-[#FF0000]/30" />
          </div>
        )}
        {video.duration && (
          <span className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-mono px-1.5 py-0.5 rounded">
            {video.duration}
          </span>
        )}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-14 h-14 rounded-full bg-[#FF0000]/90 flex items-center justify-center shadow-lg">
            <Play className="w-6 h-6 text-white fill-white ml-0.5" />
          </div>
        </div>
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h4 className="text-sm font-semibold text-foreground leading-snug line-clamp-2 flex-1">{video.title}</h4>
        <div className="mt-3 pt-3 border-t border-border/30 flex items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5" /> {formatViews(video.view_count)}</span>
          <span className="ml-auto font-semibold text-[#FF0000]">Ansehen →</span>
        </div>
      </div>
    </a>
  );
}

// ─── Platform Feed (Instagram / TikTok / YouTube) ─────────────────────────────
function PlatformFeed({ platform }: { platform: Exclude<Platform, "linkedin"> }) {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetch() {
      try {
        const table = platform === "instagram" ? "instagram_posts" : platform === "tiktok" ? "tiktok_posts" : "youtube_videos";
        const { data: rows, error: err } = await supabase
          .from(table)
          .select("*")
          .order("created_at", { ascending: false })
          .limit(3);
        if (err) throw err;
        setData(rows ?? []);
      } catch {
        setError("Beiträge konnten nicht geladen werden.");
      } finally {
        setLoading(false);
      }
    }
    fetch();
  }, [platform]);

  if (error) return <p className="text-center text-destructive py-8">{error}</p>;

  const gridCols = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  return (
    <>
      <div className={`grid ${gridCols} gap-6`}>
        {loading
          ? Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)
          : data.map((item) =>
              platform === "instagram" ? <InstagramCard key={item.id} post={item} /> :
              platform === "tiktok" ? <TikTokCard key={item.id} post={item} /> :
              <YouTubeCard key={item.id} video={item} />
            )}
      </div>
      {!loading && !error && data.length === 0 && (
        <p className="text-center text-muted-foreground mt-8">Noch keine Beiträge vorhanden.</p>
      )}
    </>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function SocialHub() {
  const [active, setActive] = useState<Platform>("linkedin");

  return (
    <section className="py-20">
      {/* Section header */}
      <div className="text-center mb-10">
        <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary mb-4">Social Hub</span>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          SIRIUS Social Hub
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Alle unsere Social-Media-Kanäle an einem Ort — Insights, Behind the Scenes und mehr.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-muted rounded-xl p-1 gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200
                ${active === tab.key
                  ? "bg-[#003DA5] text-white shadow-md"
                  : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      {active === "linkedin" ? (
        <LinkedInFeed />
      ) : (
        <PlatformFeed platform={active} />
      )}

      {/* Follow Buttons */}
      <div className="mt-16 flex flex-wrap justify-center gap-4">
        {followLinks.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${link.color} text-white font-semibold px-6 py-3 rounded-xl text-sm inline-flex items-center gap-2 hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 shadow-md`}
          >
            {tabs.find((t) => t.key === link.platform)?.icon}
            {link.label} folgen
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        ))}
      </div>
    </section>
  );
}
