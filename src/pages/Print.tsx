import { Link } from "react-router-dom";
import { BarChart3, Settings2, ShieldCheck, Banknote, Zap, Leaf, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SectionReveal from "@/components/SectionReveal";
import werkstattImg from "@/assets/print-werkstatt.jpg";
import lagerImg from "@/assets/print-hero.jpg";

const Print = () => (
  <PageLayout
    title="Managed Print Services — SIRIUS GmbH"
    description="Druck-Infrastruktur, die einfach funktioniert. Geplant, gewartet, optimiert — von SIRIUS."
  >
    {/* Hero */}
    <section className="relative min-h-[716px] flex items-center overflow-hidden px-8">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative z-10 space-y-6">
          <SectionReveal>
            <span className="reveal inline-block px-4 py-1.5 rounded-full bg-blue-50 text-primary text-xs font-bold tracking-widest uppercase">
              Dokumenten-Infrastruktur
            </span>
            <h1 className="reveal text-5xl lg:text-7xl font-extrabold text-primary leading-[1.1] tracking-tighter mt-4">
              Managed Print <br /><span className="text-muted-foreground">Services</span>
            </h1>
            <p className="reveal text-xl text-muted-foreground max-w-lg leading-relaxed font-light mt-6">
              Druck-Infrastruktur, die einfach funktioniert. Wir gestalten Ihre Dokumentenprozesse effizienter, sicherer und nachhaltiger.
            </p>
            <div className="reveal flex flex-wrap gap-4 pt-4">
              <Link
                to="/service-area"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold flex items-center gap-2 hover:scale-105 transition-transform duration-300"
              >
                Jetzt beraten lassen
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </SectionReveal>
        </div>
        <div className="relative">
          <SectionReveal>
            <div className="reveal aspect-[4/5] rounded-xl overflow-hidden shadow-[0px_20px_40px_rgba(25,28,30,0.06)] scale-95 lg:scale-100 rotate-1 lg:rotate-2">
              <img
                src={lagerImg}
                className="w-full h-full object-cover"
                alt="Moderner Drucker in minimalistischem Workspace"
                loading="lazy"
              />
            </div>
            {/* Floating Element */}
            <div className="absolute -bottom-6 -left-6 bg-card p-8 rounded-xl shadow-xl max-w-xs border-l-4 border-amber-500 hidden md:block">
              <div className="flex items-center gap-4 mb-3">
                <ShieldCheck className="w-5 h-5 text-amber-600" />
                <span className="font-bold text-primary">SIRIUS zertifiziert</span>
              </div>
              <p className="text-sm text-muted-foreground leading-snug">Optimierte Workflows für Unternehmen mit über 50 Arbeitsplätzen.</p>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>

    {/* Leistungsbeschreibung */}
    <section className="py-32 bg-secondary px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7">
          <SectionReveal stagger>
            <h2 className="reveal text-3xl lg:text-4xl font-bold tracking-tight mb-8">Ganzheitliche Betreuung Ihrer Flotte</h2>
            <div className="space-y-8">
              <div className="reveal flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Analyse & Consulting</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">Wir erfassen Ihren Ist-Zustand und identifizieren Einsparpotenziale von bis zu 30% Ihrer aktuellen Druckkosten.</p>
                </div>
              </div>
              <div className="reveal flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                  <Settings2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Automatisierung</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">Automatisierte Verbrauchsmaterial-Lieferung und proaktives Monitoring verhindern Stillstände, bevor sie entstehen.</p>
                </div>
              </div>
              <div className="reveal flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Secure Printing</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">Höchste Sicherheitsstandards durch Follow-Me-Printing und verschlüsselte Datenübertragung in Ihrem Netzwerk.</p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
        <div className="lg:col-span-5">
          <SectionReveal>
            <div className="reveal folded-corner p-1 shadow-lg rounded-xl overflow-hidden">
              <img
                src={werkstattImg}
                className="w-full h-auto rounded-lg"
                alt="Professionelles Büro mit klaren architektonischen Linien"
                loading="lazy"
              />
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>

    {/* Vorteile */}
    <section className="py-32 px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="reveal text-amber-600 text-xs font-bold tracking-widest uppercase mb-4 block">Ihre Vorteile</span>
            <h2 className="reveal text-4xl font-bold text-primary tracking-tight">Warum SIRIUS Managed Print?</h2>
          </div>
        </SectionReveal>
        <SectionReveal stagger>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="reveal bg-card p-10 rounded-xl shadow-[0px_20px_40px_rgba(25,28,30,0.06)] hover:scale-[1.02] transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-8">
                <Banknote className="w-9 h-9 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-4">Kostentransparenz</h3>
              <p className="text-muted-foreground font-light">Feste Seitenpreise und keine versteckten Kosten. Ersetzen Sie Investitionskosten durch planbare monatliche Raten.</p>
            </div>
            <div className="reveal bg-card p-10 rounded-xl shadow-[0px_20px_40px_rgba(25,28,30,0.06)] hover:scale-[1.02] transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mb-8">
                <Zap className="w-9 h-9 text-amber-600" />
              </div>
              <h3 className="font-bold text-xl mb-4">Maximale Uptime</h3>
              <p className="text-muted-foreground font-light">Unser bundesweites Servicenetzwerk garantiert schnelle Reaktionszeiten und minimiert Ausfälle in Ihrem Tagesgeschäft.</p>
            </div>
            <div className="reveal bg-card p-10 rounded-xl shadow-[0px_20px_40px_rgba(25,28,30,0.06)] hover:scale-[1.02] transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center mb-8">
                <Leaf className="w-9 h-9 text-teal-600" />
              </div>
              <h3 className="font-bold text-xl mb-4">Nachhaltigkeit</h3>
              <p className="text-muted-foreground font-light">Wir optimieren Ihren Papier- und Energieverbrauch durch moderne Hardware und intelligente Software-Steuerung.</p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>

    {/* Hersteller Logos */}
    <section className="py-24 border-t border-border/15 px-8">
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          <p className="reveal text-center text-muted-foreground text-sm font-medium mb-12 uppercase tracking-widest opacity-60">Unsere Technologie-Partner</p>
          <div className="reveal flex flex-wrap justify-center items-center gap-16 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {["SHARP", "LEXMARK", "EPSON", "PAPERCUT", "GESPAGE", "DOCUWARE", "ZOHO"].map((name) => (
              <div key={name} className="font-black text-3xl tracking-tighter">{name}</div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>

    {/* CTA */}
    <section className="py-32 px-8">
      <div className="max-w-5xl mx-auto relative bg-primary rounded-3xl p-12 lg:p-20 overflow-hidden shadow-2xl">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionReveal>
              <h2 className="reveal text-4xl font-extrabold text-primary-foreground mb-6 leading-tight">Bereit für die Service Area?</h2>
              <p className="reveal text-blue-100 text-lg mb-8 font-light">
                Verwalten Sie Ihre gesamte Druckerflotte, bestellen Sie Toner und fordern Sie Techniker an — alles an einem zentralen Ort.
              </p>
              <div className="reveal flex flex-wrap gap-4">
                <Link to="/service-area" className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                  Zum Login
                </Link>
                <a href="mailto:info@sirius-gmbh.de" className="border border-white/30 text-primary-foreground px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors">
                  Support kontaktieren
                </a>
              </div>
            </SectionReveal>
          </div>
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-amber-500" />
                <div className="h-2 w-32 bg-white/40 rounded" />
              </div>
              <div className="space-y-3">
                <div className="h-10 w-full bg-white/5 rounded" />
                <div className="h-10 w-full bg-white/5 rounded" />
                <div className="h-10 w-3/4 bg-white/5 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Print;
