import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Linkedin, ExternalLink } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

function openExternalLink(event: React.MouseEvent<HTMLAnchorElement>, url: string) {
  event.preventDefault();
  try {
    window.top?.location.assign(url);
  } catch {
    window.location.assign(url);
  }
}

interface LinkedInPost {
  id: string;
  post_id: string;
  text: string;
  created_at: string;
  url: string;
  likes: number;
  image_url: string | null;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function truncate(text: string, max = 280) {
  if (text.length <= max) return { text, truncated: false };
  return { text: text.slice(0, max).trimEnd() + "…", truncated: true };
}

function PostCard({ post }: { post: LinkedInPost }) {
  const [expanded, setExpanded] = useState(false);
  const { text, truncated } = truncate(post.text);

  return (
    <div className="bg-card rounded-xl border border-border/50 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
      {/* Author row */}
      <div className="flex items-center gap-3 p-5 pb-0">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0">
          FS
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-sm text-foreground leading-tight">Fabian Schüler</p>
          <p className="text-xs text-muted-foreground">CEO · SIRIUS GmbH · {formatDate(post.created_at)}</p>
        </div>
        <Linkedin className="w-5 h-5 text-primary shrink-0" />
      </div>

      {/* Optional image */}
      {post.image_url && (
        <div className="mt-4 mx-5">
          <img
            src={post.image_url}
            alt=""
            className="w-full rounded-lg object-cover max-h-52"
            loading="lazy"
          />
        </div>
      )}

      {/* Post text */}
      <div className="px-5 pt-4 flex-1">
        <p className="text-sm text-foreground/90 leading-relaxed whitespace-pre-line">
          {expanded ? post.text : text}
        </p>
        {truncated && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-2 text-primary text-xs font-semibold hover:underline bg-transparent border-none p-0 cursor-pointer"
          >
            {expanded ? "Weniger anzeigen" : "Weiterlesen"}
          </button>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-5 py-4 mt-auto border-t border-border/30">
        {post.likes > 0 && (
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            👍 {post.likes.toLocaleString("de-DE")}
          </span>
        )}
        <a
          href={post.url}
          target="_top"
          rel="noopener noreferrer"
          onClick={(event) => openExternalLink(event, post.url)}
          className="text-xs text-primary font-semibold hover:underline flex items-center gap-1 ml-auto"
        >
          Auf LinkedIn ansehen
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className="bg-card rounded-xl border border-border/50 p-5 space-y-4">
      <div className="flex items-center gap-3">
        <Skeleton className="w-10 h-10 rounded-full" />
        <div className="space-y-2 flex-1">
          <Skeleton className="h-3 w-32" />
          <Skeleton className="h-2 w-48" />
        </div>
      </div>
      <div className="space-y-2">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-[90%]" />
        <Skeleton className="h-3 w-[75%]" />
      </div>
    </div>
  );
}

export default function LinkedInFeed() {
  const [posts, setPosts] = useState<LinkedInPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const { data, error } = await supabase
          .from("linkedin_posts")
          .select("*")
          .order("created_at", { ascending: false })
          .limit(3);

        if (error) throw error;
        setPosts((data as LinkedInPost[]) ?? []);
      } catch (err: unknown) {
        setError("Beiträge konnten nicht geladen werden.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <section className="py-20">
      {/* Section header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
          <Linkedin className="w-4 h-4" />
          LinkedIn
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Aus meinem LinkedIn-Feed
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Was mich gerade bewegt — zu Digitalisierung, ADHD, Unternehmertum und dem ganzen Rest.
        </p>
      </div>

      {/* Error state */}
      {error && (
        <p className="text-center text-destructive mb-8">{error}</p>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)
          : posts.map((post) => <PostCard key={post.id} post={post} />)}
      </div>

      {/* Empty state */}
      {!loading && !error && posts.length === 0 && (
        <p className="text-center text-muted-foreground mt-8">
          Noch keine Beiträge vorhanden.
        </p>
      )}

      {/* CTA */}
      {!loading && (
        <div className="text-center mt-12">
          <Button asChild variant="hero" size="lg">
            <a
              href="https://www.linkedin.com/company/79397257/"
              target="_top"
              rel="noopener noreferrer"
              onClick={(event) => openExternalLink(event, "https://www.linkedin.com/company/79397257/")}
            >
              Alle Beiträge auf LinkedIn
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      )}
    </section>
  );
}
