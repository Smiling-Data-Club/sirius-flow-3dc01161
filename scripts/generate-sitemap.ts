// Runs before `vite dev` and `vite build`; writes public/sitemap.xml.
import { writeFileSync } from "fs";
import { resolve } from "path";

// TODO: replace with your project URL once a project name or custom domain is set.
const BASE_URL = "";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly" | "daily";
  priority?: string;
}

const staticEntries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/print", changefreq: "monthly", priority: "0.8" },
  { path: "/blog", changefreq: "weekly", priority: "0.8" },
  { path: "/social", changefreq: "monthly", priority: "0.6" },
  { path: "/ueber-uns", changefreq: "monthly", priority: "0.7" },
  { path: "/ueber-uns/team", changefreq: "monthly", priority: "0.6" },
  { path: "/service-area", changefreq: "monthly", priority: "0.6" },
  { path: "/impressum", priority: "0.3" },
  { path: "/datenschutz", priority: "0.3" },
];

async function loadBlogSlugs(): Promise<string[]> {
  const mod = await import("../src/data/blogPosts.ts" as string).catch(() => null);
  if (!mod || !Array.isArray((mod as { blogPosts?: unknown[] }).blogPosts)) return [];
  return (mod as { blogPosts: { slug: string }[] }).blogPosts.map((p) => p.slug);
}

function generate(entries: SitemapEntry[]) {
  const urls = entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n")
  );
  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n");
}

const slugs = await loadBlogSlugs();
const entries = [
  ...staticEntries,
  ...slugs.map((slug) => ({ path: `/blog/${slug}`, changefreq: "monthly" as const, priority: "0.6" })),
];

writeFileSync(resolve("public/sitemap.xml"), generate(entries));
console.log(`sitemap.xml written (${entries.length} entries)`);
