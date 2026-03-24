import { ThumbsUp, MessageCircle, Share2, ExternalLink, Star, ChevronRight, BarChart3 } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SectionReveal from "@/components/SectionReveal";
import LinkedInFeed from "@/components/LinkedInFeed";

const Social = () => (
  <PageLayout
    title="Social Media — SIRIUS GmbH"
    description="Folgen Sie SIRIUS auf LinkedIn für Insights, Updates und Blicke hinter die Kulissen."
  >
    <div className="pt-12 pb-24 px-6 max-w-7xl mx-auto">
      {/* Hero */}
      <SectionReveal stagger>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-20">
          <div className="lg:col-span-7">
            <span className="reveal text-amber-600 font-semibold tracking-widest uppercase text-xs mb-4 block">Connect with us</span>
            <h1 className="reveal text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1] mb-8">
              SIRIUS auf Social Media
            </h1>
            <p className="reveal text-xl text-muted-foreground max-w-xl leading-relaxed">
              Folgen Sie uns auf LinkedIn für Insights, Updates und den ein oder anderen Blick hinter die Kulissen.
            </p>
          </div>
          <div className="lg:col-span-5 flex lg:justify-end">
            <a
              className="reveal group relative inline-flex items-center gap-3 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg shadow-[0px_20px_40px_rgba(9,76,149,0.2)] transition-all duration-400 hover:-translate-y-1 active:scale-95"
              href="https://www.linkedin.com/company/79397257/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Auf LinkedIn folgen</span>
              <ExternalLink className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </SectionReveal>

      {/* Bento Grid */}
      <SectionReveal stagger>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Featured Post (Large) */}
          <div className="reveal md:col-span-8 bg-card rounded-xl p-1 shadow-[0px_20px_40px_rgba(25,28,30,0.06)] overflow-hidden group">
            <div className="h-full flex flex-col md:flex-row">
              <div className="md:w-1/2 relative overflow-hidden bg-primary/10 min-h-[200px]">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Modern office"
                  loading="lazy"
                />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-between bg-card">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">S</div>
                    <div>
                      <p className="font-bold text-sm leading-none">SIRIUS GmbH</p>
                      <p className="text-xs text-muted-foreground">vor 2 Tagen</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 leading-snug">Die Zukunft des Dokumentenmanagements beginnt heute.</h3>
                  <p className="text-muted-foreground text-sm line-clamp-4 leading-relaxed">
                    Wir haben unsere neuen Cloud-Lösungen vorgestellt, die den Workflow in mittelständischen Unternehmen revolutionieren. Effizienz trifft auf höchste Sicherheitsstandards.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-border/10 flex justify-between items-center">
                  <div className="flex gap-4">
                    <ThumbsUp className="w-5 h-5 text-primary" />
                    <MessageCircle className="w-5 h-5 text-primary" />
                    <Share2 className="w-5 h-5 text-primary" />
                  </div>
                  <ExternalLink className="w-5 h-5 text-primary" />
                </div>
              </div>
            </div>
          </div>

          {/* Quote Post */}
          <div className="reveal md:col-span-4 bg-secondary rounded-xl p-8 flex flex-col justify-between shadow-sm relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold">S</div>
                <p className="font-bold text-xs">SIRIUS Insights</p>
              </div>
              <p className="text-lg font-medium italic leading-relaxed mb-6">
                "Nachhaltigkeit im Büro ist kein Trend, sondern eine Notwendigkeit. Unsere neuen Druck-Optimierungs-Strategien sparen bis zu 30% Papier."
              </p>
            </div>
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-xs font-bold text-primary">#Sustainability #GreenIT</span>
            </div>
          </div>

          {/* Visual Post */}
          <div className="reveal md:col-span-4 bg-card rounded-xl shadow-[0px_20px_40px_rgba(25,28,30,0.06)] overflow-hidden flex flex-col group">
            <div className="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                alt="Team collaboration"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-4 h-4 text-amber-600 fill-amber-600" />
                <p className="text-[10px] uppercase font-bold tracking-widest text-amber-600">Team Spirit</p>
              </div>
              <h4 className="font-bold text-lg mb-3 leading-tight">Willkommen im Team!</h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Wir freuen uns riesig über Zuwachs in unserer Beratungsabteilung. Gemeinsam gestalten wir die digitale Transformation.
              </p>
              <div className="flex items-center gap-1 text-primary text-xs font-bold">
                Original Post ansehen <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Metric Post */}
          <div className="reveal md:col-span-8 bg-primary text-primary-foreground rounded-xl p-10 flex items-center justify-between relative overflow-hidden group">
            <div className="relative z-10 max-w-md">
              <h3 className="text-3xl font-extrabold mb-4">98% Kundenzufriedenheit</h3>
              <p className="text-blue-100 leading-relaxed">
                Ein riesiges Dankeschön an unsere Partner und Kunden für das Vertrauen im letzten Quartal. Unsere aktuellen Statistiken auf LinkedIn zeigen den Impact unserer Document Solutions.
              </p>
              <div className="mt-8 flex gap-4">
                <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 text-xs font-bold">Analytics 2026</div>
                <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 text-xs font-bold">Customer Success</div>
              </div>
            </div>
            <div className="hidden lg:block relative z-10">
              <BarChart3 className="w-28 h-28 opacity-20 group-hover:rotate-12 transition-transform duration-700" />
            </div>
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/50 rounded-full opacity-50 blur-3xl" />
          </div>
        </div>
      </SectionReveal>

      {/* Secondary CTA */}
      <SectionReveal>
        <div className="reveal mt-24 bg-muted rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Bleiben Sie informiert.</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Erhalten Sie exklusive Einblicke in Branchentrends, neue Technologien und Best Practices direkt in Ihren LinkedIn Feed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://www.linkedin.com/company/79397257/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground font-bold px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              SIRIUS auf LinkedIn
            </a>
            <button className="bg-transparent border border-border font-bold px-8 py-3 rounded-lg hover:bg-secondary transition-colors">
              Andere Kanäle
            </button>
          </div>
        </div>
      </SectionReveal>
    </div>
  </PageLayout>
);

export default Social;
