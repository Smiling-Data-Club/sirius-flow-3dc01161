import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SectionReveal from "@/components/SectionReveal";

const posts = [
  {
    title: "Digitalisierung der Archivsysteme 2026",
    date: "12. MAI 2026",
    excerpt: "Wie moderne Dokumentenmanagement-Systeme die Effizienz in mittelständischen Unternehmen revolutionieren und welche Trends wir für das kommende Jahr erwarten.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    title: "KI im Dokumenten-Workflow",
    date: "04. MAI 2026",
    excerpt: "Künstliche Intelligenz ist mehr als nur ein Schlagwort. Erfahren Sie, wie wir bei SIRIUS KI-Modelle nutzen, um Datenextraktion fehlerfrei zu gestalten.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  },
  {
    title: "Nachhaltigkeit im modernen Druck",
    date: "28. APRIL 2026",
    excerpt: "Weniger Verschnitt, bessere Ökobilanz. Unser neuer Bericht zeigt, wie smarte Drucklösungen sowohl Kosten als auch CO2-Emissionen signifikant senken.",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80",
  },
];

const Blog = () => (
  <PageLayout
    title="Blog — SIRIUS GmbH"
    description="Insights zu Dokumentenmanagement, Digitalisierung und Managed Print Services."
  >
    <div className="pt-12 pb-24 px-8 max-w-7xl mx-auto">
      {/* Hero Title */}
      <SectionReveal>
        <div className="mb-16">
          <span className="reveal text-amber-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Magazin</span>
          <h1 className="reveal font-extrabold text-7xl text-primary tracking-tighter leading-none mb-6">Blog</h1>
          <div className="reveal h-1.5 w-24 bg-amber-500 rounded-full" />
        </div>
      </SectionReveal>

      {/* Blog Cards Grid */}
      <SectionReveal stagger>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {posts.map((post) => (
            <article
              key={post.title}
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
                <time className="text-xs text-muted-foreground font-medium mb-3">{post.date}</time>
                <h2 className="font-bold text-2xl mb-4 leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto">
                  <a className="inline-flex items-center text-primary font-bold text-sm group/link" href="#">
                    Weiterlesen
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </SectionReveal>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4">
        <button className="w-12 h-12 rounded-full flex items-center justify-center bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2">
          <span className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-primary-foreground font-bold text-sm">1</span>
          <span className="w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground hover:bg-muted transition-colors font-medium text-sm cursor-pointer">2</span>
          <span className="w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground hover:bg-muted transition-colors font-medium text-sm cursor-pointer">3</span>
        </div>
        <button className="w-12 h-12 rounded-full flex items-center justify-center bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  </PageLayout>
);

export default Blog;
