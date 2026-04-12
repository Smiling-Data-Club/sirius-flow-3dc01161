import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import SectionReveal from "@/components/SectionReveal";
import PageHero from "@/components/PageHero";
import { blogPosts, formatDate } from "@/data/blogPosts";

const Blog = () => (
  <PageLayout
    title="Blog — SIRIUS GmbH"
    description="Insights zu Dokumentenmanagement, Digitalisierung und Managed Print Services."
  >
    <PageHero
      topLine="Klarheit durch"
      keyword="Insights"
      subtitle="Aktuelle Artikel zu Dokumentenmanagement, Digitalisierung und Managed Print Services."
    />

    <div className="pb-24 px-8 max-w-7xl mx-auto">
      <SectionReveal stagger>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="reveal group relative flex flex-col bg-card rounded-xl shadow-[0px_20px_40px_rgba(25,28,30,0.06)] overflow-hidden transition-all duration-300 hover:scale-[1.02] folded-corner"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <time className="text-xs text-muted-foreground font-medium mb-3">
                  {formatDate(post.date)}
                </time>
                <h2 className="font-bold text-2xl mb-4 leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary font-bold text-sm group/link"
                  >
                    Weiterlesen
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </SectionReveal>
    </div>
  </PageLayout>
);

export default Blog;
