import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import SectionReveal from "@/components/SectionReveal";

const posts = [
  { title: "Warum Managed Print Services sich lohnen", date: "15. März 2026", excerpt: "Druckkosten senken und gleichzeitig die Produktivität steigern — so geht's." },
  { title: "Digitalisierung im Mittelstand: Wo anfangen?", date: "2. Februar 2026", excerpt: "Drei pragmatische Schritte, die sofort wirken." },
  { title: "DocuWare vs. klassisches Archiv", date: "18. Januar 2026", excerpt: "Warum digitale Dokumentenverwaltung mehr ist als ein Trend." },
];

const Blog = () => (
  <PageLayout
    title="Blog — SIRIUS GmbH"
    description="Insights zu Dokumentenmanagement, Digitalisierung und Managed Print Services."
  >
    <section className="py-24 md:py-32">
      <div className="container">
        <SectionReveal>
          <h1 className="reveal text-3xl md:text-5xl font-bold mb-16">Blog</h1>
        </SectionReveal>

        <SectionReveal stagger>
          <div className="grid md:grid-cols-2 gap-10">
            {posts.map((p) => (
              <article key={p.title} className="reveal group">
                <div className="aspect-[16/9] bg-secondary rounded-xl mb-5 flex items-center justify-center text-muted-foreground text-sm">
                  Platzhalter: Blog-Bild
                </div>
                <time className="text-sm text-muted-foreground">{p.date}</time>
                <h2 className="text-xl font-semibold mt-2 mb-3 group-hover:text-primary transition-colors">
                  {p.title}
                </h2>
                <p className="text-muted-foreground mb-4">{p.excerpt}</p>
                <span className="text-primary font-semibold text-sm">Weiterlesen →</span>
              </article>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  </PageLayout>
);

export default Blog;
