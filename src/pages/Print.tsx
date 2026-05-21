import { Link } from "react-router-dom";
import { BarChart3, Settings2, ShieldCheck, Banknote, Zap, Leaf, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SectionReveal from "@/components/SectionReveal";
import PageHero from "@/components/PageHero";
import werkstattImg from "@/assets/print-werkstatt.jpg";
import lagerImg from "@/assets/print-hero.jpg";
import serviceMitarbeiterImg from "@/assets/sirius-service-mitarbeiter.jpg";

const Print = () => (
  <PageLayout
    title="Managed Print Services — SIRIUS GmbH"
    description="Druck-Infrastruktur, die einfach funktioniert. Geplant, gewartet, optimiert — von SIRIUS."
  >
    {/* Hero with image beside headline */}
    <section className="pt-12 pb-24 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <PageHero
            className="mb-6"
            topLine="Klarheit durch"
            keyword={`Managed Print\nServices`}
            subtitle="Druck-Infrastruktur, die einfach funktioniert. Wir gestalten Ihre Dokumentenprozesse effizienter, sicherer und nachhaltiger."
          />
          <SectionReveal>
            <div className="reveal flex flex-wrap gap-4 pt-4 px-8">
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
        <div className="hidden lg:block relative">
          <div className="absolute -top-10 -right-10 w-96 h-96 bg-secondary rounded-full blur-3xl opacity-50" />
          <SectionReveal>
            <img
              src={lagerImg}
              alt="Moderner Drucker in minimalistischem Workspace"
              className="relative z-10 rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              loading="lazy"
            />
          </SectionReveal>
        </div>
      </div>
    </section>


    {/* Vorteile */}
    <section className="py-32 px-8 bg-accent">
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
              <p className="reveal text-blue-100 text-lg mb-6 font-light">
                Verwalten Sie Ihre gesamte Druckerflotte, bestellen Sie Toner und fordern Sie Techniker an — alles an einem zentralen Ort.
              </p>
              <p className="reveal text-blue-100/90 text-base mb-8 font-light">
                <strong className="font-semibold text-white">Tipp:</strong> Toner nachbestellen oder eine Reparatur melden? Nutzen Sie unser zentrales Service-Formular in der Service Area — wir melden uns umgehend zurück.
              </p>
              <div className="reveal flex flex-wrap gap-4">
                <Link to="/service-area" className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                  Zur Service Area
                </Link>
                <a href="mailto:info@sirius-gmbh.de" className="border border-white/30 text-primary-foreground px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors">
                  Support kontaktieren
                </a>
              </div>
            </SectionReveal>
          </div>
          <div className="hidden lg:block">
            <div className="rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
              <img
                src={serviceMitarbeiterImg}
                alt="SIRIUS Mitarbeiter im Lager mit SHARP Druckern"
                className="w-full h-full object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Print;
