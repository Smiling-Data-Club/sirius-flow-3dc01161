import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SectionReveal from "@/components/SectionReveal";
import PageHero from "@/components/PageHero";
import { keyFacts, formatDate } from "@/data/keyFacts";

const KeyFacts = () => (
  <PageLayout
    title="Key Facts — SIRIUS GmbH"
    description="Lead Magnete, Whitepaper und kompakte Faktenpapiere zu Compliance, Digitalisierung und Managed Print Services."
  >
    <PageHero
      topLine="Klarheit durch"
      keyword="Information"
      subtitle="Kompakte Whitepaper und Faktenpapiere zu aktuellen Themen — kostenfrei zum Lesen und Teilen."
    />

    <div className="pb-24 px-8 max-w-7xl mx-auto">
      <SectionReveal stagger>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {keyFacts.map((item) => (
            <a
              key={item.slug}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group relative flex flex-col bg-card rounded-xl shadow-[0px_20px_40px_rgba(25,28,30,0.06)] overflow-hidden transition-all duration-300 hover:scale-[1.02] folded-corner"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  width={1280}
                  height={800}
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <time className="text-xs text-muted-foreground font-medium mb-3">
                  {formatDate(item.date)}
                </time>
                <h2 className="font-bold text-2xl mb-4 leading-snug group-hover:text-primary transition-colors">
                  {item.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8 line-clamp-3">
                  {item.excerpt}
                </p>
                <div className="mt-auto flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto">
                  <span className="inline-flex items-center text-primary font-bold text-sm">
                    Jetzt lesen
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </SectionReveal>
    </div>
  </PageLayout>
);

export default KeyFacts;
