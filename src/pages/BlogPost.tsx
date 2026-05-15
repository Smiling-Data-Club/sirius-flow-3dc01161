import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { blogPosts, formatDate } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <PageLayout title="Nicht gefunden — SIRIUS GmbH" description="">
        <div className="pt-32 pb-24 px-8 max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-primary mb-4">Beitrag nicht gefunden</h1>
          <Link to="/blog" className="text-primary font-bold inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Zurück zum Blog
          </Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout
      title={`${post.title} — SIRIUS GmbH`}
      description={post.excerpt}
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        datePublished: post.date,
        author: { "@type": "Organization", name: post.author },
        description: post.excerpt,
      }}
    >
      <article className="pt-32 pb-24 px-8 max-w-3xl mx-auto">
        <Link
          to="/blog"
          className="inline-flex items-center text-muted-foreground hover:text-primary font-medium text-sm mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Zurück zum Blog
        </Link>

        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary leading-tight mb-4">
          {post.title}
        </h1>

        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-8">
          <time>{formatDate(post.date)}</time>
          <span>·</span>
          <span>{post.author}</span>
        </div>

        <div className="aspect-[16/9] rounded-xl overflow-hidden mb-12">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-foreground prose-headings:text-primary prose-strong:text-foreground prose-blockquote:border-primary prose-blockquote:text-muted-foreground">
          {post.content.split("\n\n").map((block, i) => {
            if (block.startsWith("## ")) {
              return <h2 key={i}>{block.replace("## ", "")}</h2>;
            }
            if (block.startsWith("### ")) {
              return <h3 key={i}>{block.replace("### ", "")}</h3>;
            }
            if (block.startsWith("> ")) {
              return (
                <blockquote key={i}>
                  <p>{block.replace("> ", "")}</p>
                </blockquote>
              );
            }
            if (block.startsWith("- ") || block.startsWith("1. ")) {
              const items = block.split("\n").map((item) =>
                item.replace(/^[-\d]+\.\s*/, "").replace(/^\s*/, "")
              );
              const isOrdered = block.startsWith("1.");
              const ListTag = isOrdered ? "ol" : "ul";
              return (
                <ListTag key={i}>
                  {items.map((item, j) => (
                    <li key={j} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
                  ))}
                </ListTag>
              );
            }
            if (block.startsWith("*Erstveröffentlichung")) {
              return (
                <p key={i} className="text-sm text-muted-foreground italic mt-12 pt-8 border-t border-border">
                  <span dangerouslySetInnerHTML={{ __html: formatInline(block.replace(/^\*|\*$/g, "")) }} />
                </p>
              );
            }
            return <p key={i} dangerouslySetInnerHTML={{ __html: formatInline(block) }} />;
          })}
        </div>

        {post.source && (
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Quelle:{" "}
              <a
                href={post.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {post.source}
              </a>
            </p>
          </div>
        )}
      </article>
    </PageLayout>
  );
};

function formatInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-primary hover:underline">$1</a>');
}

export default BlogPost;
