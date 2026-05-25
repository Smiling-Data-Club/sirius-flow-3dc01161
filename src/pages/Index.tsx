import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Printer, FileText, Settings, Check } from "lucide-react";
import FloatingPapers from "@/components/FloatingPapers";
import PageLayout from "@/components/PageLayout";
import SectionReveal from "@/components/SectionReveal";
import { useCountUp } from "@/hooks/useCountUp";
import sdcLogo from "@/assets/sdc-logo.png";
import whiteboardImg from "@/assets/homepage-whiteboard.jpg";
import belleLogo from "@/assets/referenzen/belle.png";
import gesslerLogo from "@/assets/referenzen/gessler.svg";
import dafheLogo from "@/assets/referenzen/dafhe.png";
import tobyLogo from "@/assets/referenzen/toby-schaum.png";
import diatoolLogo from "@/assets/referenzen/diatool.png";
import skodaLogo from "@/assets/referenzen/skoda-suetterlin.png";
import edekaLogo from "@/assets/referenzen/edeka-barwig.png";
import weinbauLogo from "@/assets/referenzen/weinbauverband.png";
import grieshaberLogo from "@/assets/referenzen/grieshaber.png";
import kestenholzLogo from "@/assets/referenzen/kestenholz.png";
import marderLogo from "@/assets/referenzen/marder-stopgo.png";
import andockLogo from "@/assets/referenzen/andocksysteme.png";
import kundoLogo from "@/assets/referenzen/kundo-xt.png";
import waldhausLogo from "@/assets/referenzen/waldhaus.png";



/* ════════════════════════════════════════════
   HERO — two-column, editorial
   ════════════════════════════════════════════ */
const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden bg-background pt-20">
    
    <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Text */}
      <div>
        <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[3.75rem] lg:text-[4.25rem] font-extrabold leading-[1.1] tracking-tight mb-6">
          {"Klarheit für Ihre".split(" ").map((word, i) => (
            <span
              key={i}
              className="inline-block animate-hero-fade-up"
              style={{ animationDelay: `${i * 200}ms` }}
            >
              {word}&nbsp;
            </span>
          ))}
          <span
            className="inline-block animate-hero-fade-up text-primary"
            style={{ animationDelay: "600ms" }}
          >
            Dokumente
          </span>
          <span className="inline-block animate-hero-fade-up" style={{ animationDelay: "800ms" }}>.</span>
        </h1>

        <p
          className="text-xl md:text-2xl lg:text-3xl font-light text-muted-foreground mb-10 leading-relaxed animate-hero-fade-up"
          style={{ animationDelay: "1.2s" }}
        >
          Struktur für Ihre Prozesse. Wir begleiten den Mittelstand in die digitale Souveränität.
        </p>

        <div
          className="flex flex-wrap gap-4 animate-hero-fade-up"
          style={{ animationDelay: "1.6s" }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground px-8 py-4 shadow-lg hover:scale-105 transition-transform font-semibold"
            asChild
          >
            <a
              href="https://sirius-gmbh.zohobookings.eu/#/fschuelersiriusgmbh"
              target="_blank"
              rel="noopener noreferrer"
            >
              Termin vereinbaren
            </a>
          </Button>

        </div>
      </div>

      {/* Image */}
      <div className="hidden lg:block relative">
        <div className="absolute -top-10 -right-10 w-96 h-96 bg-secondary rounded-full blur-3xl opacity-50" />
        <img
          src={whiteboardImg}
          alt="SIRIUS Team bei der Strategieplanung"
          className="relative z-10 rounded-2xl shadow-2xl transition-all duration-700"
          loading="lazy"
        />
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-arrow text-muted-foreground">
      <ChevronDown size={28} />
    </div>
  </section>
);

/* ════════════════════════════════════════════
   SDC TEASER — dark, editorial
   ════════════════════════════════════════════ */
const SDCTeaser = () => (
  <section className="bg-dark text-dark-foreground py-24 relative overflow-hidden">
    {/* Gradient accent line top */}
    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-sdc-cyan via-sdc-purple to-sdc-pink" />

    <div className="container">
      <SectionReveal stagger>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="reveal">
            <span className="reveal inline-block px-3 py-1 rounded-full bg-white/10 text-sdc-cyan text-xs font-bold tracking-[0.2em] uppercase mb-6">
              Smiling Data Club
            </span>
            <h2 className="reveal text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Daten, die Sie{" "}
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sdc-pink to-sdc-purple">
                lächeln lassen.
              </span>
            </h2>
            <p className="reveal text-dark-foreground/60 text-lg mb-8 leading-relaxed">
              Unser Spin-off für KI-gestützte Automatisierung und smarte Datenprozesse.
              Wenn Digitalisierung nicht nur funktionieren, sondern auch Spaß machen soll.
            </p>
            <a
              href="https://smiling-data-club.de"
              target="_blank"
              rel="noopener noreferrer"
              className="reveal inline-flex items-center text-dark-foreground font-semibold group"
            >
              Zum Smiling Data Club
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          {/* Logo */}
          <div className="reveal flex justify-center items-center">
            <a href="https://smiling-data-club.de" target="_blank" rel="noopener noreferrer">
              <img
                src={sdcLogo}
                alt="Smiling Data Club Logo"
                className="w-64 h-64 md:w-80 md:h-80 object-contain animate-sdc-float"
              />
            </a>
          </div>
        </div>
      </SectionReveal>
    </div>
  </section>
);

/* ════════════════════════════════════════════
   LEISTUNGEN — folded-corner cards
   ════════════════════════════════════════════ */
const services = [
  {
    icon: Printer,
    title: "Managed Print Services",
    text: "Optimierung Ihrer Druckinfrastruktur für maximale Effizienz und minimale Kosten.",
    bullets: ["Hardware-Flottenmanagement", "Automatisierte Verbrauchsmaterialien"],
    link: "/print",
  },
  {
    icon: FileText,
    title: "Dokumentenmanagement",
    text: "Zentrale Ablage und rechtssichere Archivierung für eine papierlose Zukunft.",
    bullets: ["Cloud & On-Premise DMS", "GoBD-konforme Archivierung"],
    link: "#",
  },
  {
    icon: Settings,
    title: "Digitale Prozesse",
    text: "Intelligente Workflows, die Ihre Teams entlasten und Prozesse beschleunigen.",
    bullets: ["Workflow-Automatisierung", "ERP-Integration"],
    link: "#",
  },
];

const Services = () => (
  <section id="leistungen" className="bg-secondary py-32 relative overflow-hidden">
    <div className="container">
      <SectionReveal>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="reveal text-3xl md:text-4xl font-extrabold mb-6">Ganzheitliche Lösungen</h2>
          <div className="reveal w-20 h-1 bg-primary mx-auto" />
        </div>
      </SectionReveal>

      <SectionReveal stagger>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <Link
              key={s.title}
              to={s.link}
              className="reveal group bg-card p-10 folded-corner shadow-[0px_20px_40px_rgba(25,28,30,0.06)] hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">{s.text}</p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </SectionReveal>
    </div>
  </section>
);

/* ════════════════════════════════════════════
   VIDEO TESTIMONIALS
   ════════════════════════════════════════════ */
const testimonials = [
  { name: "Aline Hernandez", role: "Prokuristin, BELLE AG", videoId: "z7m9qV7ZceU" },
  { name: "Johannes Gessler", role: "CEO, Gessler Collection", videoId: "5CFvvNQnBC4" },
  { name: "Bastian Rudigier", role: "Qualitätsmanagement, Deutscher Arbeitskreis für Familienhilfe e.V.", videoId: "HB3e8Xly6BM" },
];

const referenceLogos = [
  { src: belleLogo, alt: "BELLE AG" },
  { src: gesslerLogo, alt: "Gessler Collection" },
  { src: dafheLogo, alt: "Dt. Arbeitskreis für Familienhilfe" },
  { src: tobyLogo, alt: "Toby Schaum" },
  { src: diatoolLogo, alt: "Diatool" },
  { src: skodaLogo, alt: "Skoda Sütterlin" },
  { src: edekaLogo, alt: "Edeka Barwig" },
  { src: weinbauLogo, alt: "Badischer Weinbauverband" },
  { src: grieshaberLogo, alt: "Grieshaber Logistics" },
  { src: kestenholzLogo, alt: "Kestenholz" },
  { src: marderLogo, alt: "Marder Stop & Go" },
  { src: andockLogo, alt: "Andocksysteme" },
  { src: kundoLogo, alt: "Kundo xT" },
  { src: waldhausLogo, alt: "Waldhaus" },
];

const Testimonials = () => (
  <section className="bg-card py-32 overflow-hidden">
    <div className="container">
      <SectionReveal>
        <h2 className="reveal text-3xl md:text-4xl font-extrabold text-center mb-16">
          Stimmen unserer Kunden
        </h2>
      </SectionReveal>

      <SectionReveal stagger>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="reveal">
              <div className="aspect-video rounded-2xl overflow-hidden mb-5 shadow-xl">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${t.videoId}`}
                  title={`Testimonial von ${t.name}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
              <p className="font-semibold">{t.name}</p>
              <p className="text-muted-foreground text-sm">{t.role}</p>
            </div>
          ))}
        </div>
      </SectionReveal>

      {/* Weitere Referenzen - Logo Marquee */}
      <SectionReveal>
        <div className="reveal mt-20">
          <h3 className="text-xl md:text-2xl font-semibold text-center mb-10">Weitere Referenzen</h3>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-card to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-card to-transparent z-10" />
            <div className="flex w-max animate-marquee gap-12 md:gap-16 items-center">
              {[...referenceLogos, ...referenceLogos].map((logo, i) => (
                <img
                  key={i}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 md:h-12 max-w-[120px] md:max-w-[150px] w-auto object-contain opacity-50 hover:opacity-100 transition-opacity shrink-0"
                />
              ))}
            </div>
          </div>
        </div>
      </SectionReveal>
    </div>
  </section>
);

/* ════════════════════════════════════════════
   TRUST / NUMBERS
   ════════════════════════════════════════════ */
const stats = [
  { value: 45, suffix: "+", label: "Jahre Erfahrung" },
  { value: 4000, suffix: "+", label: "Betreute Geräte" },
  { value: 120, suffix: "+", label: "Digitalisierungsprojekte" },
];

const StatItem = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl font-extrabold text-primary tabular-nums mb-2">
        {count}{suffix}
      </div>
      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
    </div>
  );
};

const Trust = () => (
  <section className="bg-secondary py-24 md:py-32">
    <div className="container">
      <SectionReveal stagger>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
          {stats.map((s) => (
            <div key={s.label} className="reveal">
              <StatItem {...s} />
            </div>
          ))}
        </div>
      </SectionReveal>

      <SectionReveal>
        <div className="reveal max-w-2xl mx-auto text-center">
          <p className="text-muted-foreground text-lg mb-8">
            Seit über 45 Jahren begleiten wir Unternehmen auf dem Weg zu effizienten Dokumentenprozessen. Als zertifizierter DocuWare-Partner und Zoho-Authorized-Partner verbinden wir Beratung mit Umsetzung.
          </p>
          <Link to="/ueber-uns" className="text-primary font-semibold hover:underline underline-offset-4">
            Mehr über uns →
          </Link>
        </div>
      </SectionReveal>
    </div>
  </section>
);

/* ════════════════════════════════════════════
   SERVICE AREA CTA
   ════════════════════════════════════════════ */
const ServiceCTA = () => (
  <section className="bg-dark text-dark-foreground py-24 md:py-32 relative">
    <div className="container text-center max-w-4xl">
      <SectionReveal>
        <h2 className="reveal text-4xl md:text-5xl font-bold mb-8">Service Area</h2>
        <p className="reveal text-dark-foreground/60 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Toner bestellen, Reparatur anfragen — direkt und unkompliziert.
        </p>
        <div className="reveal">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground px-10 py-5 text-lg font-bold hover:bg-primary/90 shadow-xl"
            asChild
          >
            <Link to="/service-area">Zur Service Area →</Link>
          </Button>
        </div>
      </SectionReveal>
    </div>
  </section>
);

/* ════════════════════════════════════════════
   INDEX PAGE
   ════════════════════════════════════════════ */
const Index = () => (
  <PageLayout
    title="SIRIUS GmbH — Dokumentenlösungen & Digitalisierung"
    description="SIRIUS verbindet Dokumentenmanagement, Drucklösungen und digitale Prozesse zu einem System, das funktioniert. Seit über 45 Jahren aus Freiburg."
    jsonLd={{
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "SIRIUS GmbH document solutions",
      url: "/",
      telephone: "+49 761 4002-0",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Abrichstrasse 23",
        addressLocality: "Freiburg",
        postalCode: "79108",
        addressCountry: "DE",
      },
    }}
  >
    <FloatingPapers />

    <Hero />
    <SDCTeaser />
    <Testimonials />
    <Trust />
    <ServiceCTA />
  </PageLayout>
);

export default Index;
