// Sync last 3 posts per platform from rss.app feeds into Supabase tables.
// Triggered by pg_cron every 6h. Idempotent via UNIQUE(post_id) upserts.

import { createClient } from "npm:@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

interface RssItem {
  id: string;
  title: string;
  description: string;
  link: string;
  pubDate: string;
  image: string | null;
}

// Tiny, dependency-free RSS/Atom parser tailored for rss.app output.
function parseFeed(xml: string): RssItem[] {
  const items: RssItem[] = [];
  // Match <item>…</item> (RSS) or <entry>…</entry> (Atom)
  const blockRegex = /<(item|entry)\b[^>]*>([\s\S]*?)<\/\1>/gi;
  let match: RegExpExecArray | null;
  while ((match = blockRegex.exec(xml)) !== null) {
    const block = match[2];
    const pick = (tag: string) => {
      const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i");
      const m = block.match(re);
      return m ? m[1].trim() : "";
    };
    const stripCdata = (s: string) =>
      s.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1").trim();
    const decode = (s: string) =>
      s
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'");
    const stripHtml = (s: string) => s.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

    const titleRaw = stripCdata(pick("title"));
    const descRaw = stripCdata(pick("description") || pick("content:encoded") || pick("summary") || pick("content"));
    const linkRaw = stripCdata(pick("link")) || (block.match(/<link[^>]*href="([^"]+)"/i)?.[1] ?? "");
    const guidRaw = stripCdata(pick("guid") || pick("id")) || linkRaw;
    const dateRaw = stripCdata(pick("pubDate") || pick("published") || pick("updated"));

    // Try to find an image: <enclosure url>, <media:content url>, or first <img src> in description.
    let image: string | null = null;
    const enc = block.match(/<enclosure[^>]+url="([^"]+)"/i);
    if (enc) image = enc[1];
    if (!image) {
      const media = block.match(/<media:(?:content|thumbnail)[^>]+url="([^"]+)"/i);
      if (media) image = media[1];
    }
    if (!image) {
      const img = descRaw.match(/<img[^>]+src=["']([^"']+)["']/i);
      if (img) image = img[1];
    }

    items.push({
      id: decode(guidRaw),
      title: decode(stripHtml(titleRaw)),
      description: decode(stripHtml(descRaw)),
      link: decode(linkRaw),
      pubDate: dateRaw,
      image,
    });
  }
  return items;
}

async function fetchFeed(url: string): Promise<RssItem[]> {
  const res = await fetch(url, { headers: { "user-agent": "SIRIUS-SocialSync/1.0" } });
  if (!res.ok) throw new Error(`Feed fetch failed [${res.status}] for ${url}`);
  const xml = await res.text();
  return parseFeed(xml).slice(0, 3); // only latest 3
}

function toIso(date: string): string {
  const t = Date.parse(date);
  return isNaN(t) ? new Date().toISOString() : new Date(t).toISOString();
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
    const SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(SUPABASE_URL, SERVICE_KEY);

    const igUrl = Deno.env.get("RSS_INSTAGRAM_URL");
    const ttUrl = Deno.env.get("RSS_TIKTOK_URL");
    const liUrl = Deno.env.get("RSS_LINKEDIN_URL");

    const results: Record<string, { synced: number; error?: string }> = {};

    // Instagram
    if (igUrl) {
      try {
        const items = await fetchFeed(igUrl);
        const rows = items.map((i) => ({
          post_id: i.id,
          caption: i.description || i.title,
          url: i.link,
          media_url: i.image,
          media_type: "IMAGE",
          likes: 0,
          created_at: toIso(i.pubDate),
        }));
        if (rows.length) {
          const { error } = await supabase.from("instagram_posts").upsert(rows, { onConflict: "post_id" });
          if (error) throw error;
        }
        results.instagram = { synced: rows.length };
      } catch (e) {
        results.instagram = { synced: 0, error: String(e instanceof Error ? e.message : e) };
      }
    }

    // TikTok
    if (ttUrl) {
      try {
        const items = await fetchFeed(ttUrl);
        const rows = items.map((i) => ({
          post_id: i.id,
          description: i.description || i.title,
          url: i.link,
          cover_image_url: i.image,
          views: 0,
          created_at: toIso(i.pubDate),
        }));
        if (rows.length) {
          const { error } = await supabase.from("tiktok_posts").upsert(rows, { onConflict: "post_id" });
          if (error) throw error;
        }
        results.tiktok = { synced: rows.length };
      } catch (e) {
        results.tiktok = { synced: 0, error: String(e instanceof Error ? e.message : e) };
      }
    }

    // LinkedIn
    if (liUrl) {
      try {
        const items = await fetchFeed(liUrl);
        const rows = items.map((i) => ({
          post_id: i.id,
          text: i.description || i.title,
          url: i.link,
          image_url: i.image,
          likes: 0,
          created_at: toIso(i.pubDate),
        }));
        if (rows.length) {
          const { error } = await supabase.from("linkedin_posts").upsert(rows, { onConflict: "post_id" });
          if (error) throw error;
        }
        results.linkedin = { synced: rows.length };
      } catch (e) {
        results.linkedin = { synced: 0, error: String(e instanceof Error ? e.message : e) };
      }
    }

    // YouTube (offizieller Channel-RSS-Feed)
    const ytChannelId = "UCeeGDedeYKsYqMCdiHNlJXg";
    try {
      const ytUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${ytChannelId}`;
      const res = await fetch(ytUrl, { headers: { "user-agent": "SIRIUS-SocialSync/1.0" } });
      if (!res.ok) throw new Error(`YouTube feed fetch failed [${res.status}]`);
      const xml = await res.text();
      const items = parseFeed(xml).slice(0, 3);
      const rows = items.map((i) => {
        // yt:videoId is the canonical id; fallback to extracting from link
        const videoId = (i.id.match(/video:([A-Za-z0-9_-]+)/)?.[1])
          || (i.link.match(/[?&]v=([A-Za-z0-9_-]+)/)?.[1])
          || i.id;
        const thumbnail = i.image || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
        return {
          video_id: videoId,
          title: i.title,
          description: i.description || "",
          url: i.link || `https://www.youtube.com/watch?v=${videoId}`,
          thumbnail_url: thumbnail,
          view_count: 0,
          created_at: toIso(i.pubDate),
        };
      });
      if (rows.length) {
        const { error } = await supabase.from("youtube_videos").upsert(rows, { onConflict: "video_id" });
        if (error) throw error;
      }
      results.youtube = { synced: rows.length };
    } catch (e) {
      results.youtube = { synced: 0, error: String(e instanceof Error ? e.message : e) };
    }

    return new Response(JSON.stringify({ ok: true, results }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(
      JSON.stringify({ ok: false, error: e instanceof Error ? e.message : String(e) }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
