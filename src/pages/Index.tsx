import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Printer, FileText, Settings, Play } from "lucide-react";
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
   Decorative floating paper elements
   ════════════════════════════════════════════ */
const PaperElement = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <div
    className={`paper-deco animate-float-paper ${className ?? ""}`}
    style={style}
    aria-hidden="true"
  />
);

/* ════════════════════════════════════════════
   HERO
   ════════════════════════════════════════════ */
const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-background to-secondary">
    {/* Floating papers */}
    <PaperElement
      className="hidden md:block w-32 h-44 opacity-[0.07]"
      style={{ top: "12%", left: "8%", "--rotate": "-6deg", "--tx": "12px", "--ty": "-18px" } as React.CSSProperties}
    />
    <PaperElement
      className="hidden md:block w-24 h-32 opacity-[0.05]"
      style={{ top: "25%", right: "12%", "--rotate": "8deg", "--tx": "-10px", "--ty": "-14px" } as React.CSSProperties}
    />
    <PaperElement
      className="hidden md:block w-20 h-28 opacity-[0.06]"
      style={{ bottom: "20%", left: "20%", "--rotate": "4deg", "--tx": "6px", "--ty": "-10px" } as React.CSSProperties}
    />
    <PaperElement
      className="w-16 h-20 opacity-[0.04]"
      style={{ bottom: "30%", right: "25%", "--rotate": "-10deg", "--tx": "-8px", "--ty": "6px" } as React.CSSProperties}
    />
    <PaperElement
      className="hidden lg:block w-28 h-36 opacity-[0.05]"
      style={{ top: "40%", right: "5%", "--rotate": "12deg", "--tx": "14px", "--ty": "-20px" } as React.CSSProperties}
    />

    <div className="container relative z-10 py-24 md:py-0">
      <div className="max-w-3xl">
        <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3.25rem] lg:text-[3.75rem] font-bold leading-[1.08] tracking-tight">
          {"Klarheit für Ihre Dokumente.".split(" ").map((word, i) => (
            <span
              key={i}
              className="inline-block animate-hero-fade-up"
              style={{ animationDelay: `${i * 200}ms` }}
            >
              {word}&nbsp;
            </span>
          ))}
          <br className="hidden sm:block" />
          {"Struktur für Ihre Prozesse.".split(" ").map((word, i) => (
            <span
              key={`b-${i}`}
              className="inline-block animate-hero-fade-up"
              style={{ animationDelay: `${(i + 4) * 200}ms` }}
            >
              {word}&nbsp;
            </span>
          ))}
        </h1>

        <p
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl animate-hero-fade-up"
          style={{ animationDelay: "1.6s" }}
        >
          SIRIUS verbindet Dokumentenmanagement, Drucklösungen und digitale Prozesse zu einem System, das funktioniert.
        </p>

        <div
          className="flex flex-wrap gap-4 mt-10 animate-hero-fade-up"
          style={{ animationDelay: "2.1s" }}
        >
          <Button
            variant="hero"
            size="lg"
            onClick={() =>
              document.getElementById("leistungen")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Leistungen entdecken
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <Link to="/service-area">Service Area</Link>
          </Button>
        </div>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-arrow text-muted-foreground">
      <ChevronDown size={28} />
    </div>
  </section>
);

/* ════════════════════════════════════════════
   SDC TEASER — Mini-preview of smiling-data.club
   ════════════════════════════════════════════ */
const SDCTeaser = () => (
  <section className="relative overflow-hidden" style={{ background: "#0d0d1a" }}>
    {/* Grid pattern overlay */}
    <div
      className="absolute inset-0 opacity-[0.07]"
      style={{
        backgroundImage: "linear-gradient(rgba(42,191,191,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(42,191,191,0.5) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
      aria-hidden="true"
    />

    {/* Gradient glow effects */}
    <div
      className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.08] blur-[120px]"
      style={{ background: "hsl(var(--sdc-cyan))" }}
      aria-hidden="true"
    />
    <div
      className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.06] blur-[100px]"
      style={{ background: "hsl(var(--sdc-pink))" }}
      aria-hidden="true"
    />

    {/* Gradient accent lines top & bottom */}
    <div
      className="absolute top-0 left-0 right-0 h-px"
      style={{ background: "linear-gradient(90deg, hsl(var(--sdc-cyan)), hsl(var(--sdc-purple)), hsl(var(--sdc-pink)))" }}
    />
    <div
      className="absolute bottom-0 left-0 right-0 h-px"
      style={{ background: "linear-gradient(90deg, hsl(var(--sdc-pink)), hsl(var(--sdc-purple)), hsl(var(--sdc-cyan)))" }}
    />

    <div className="container relative py-16 md:py-20">
      <SectionReveal stagger>
        <div className="flex flex-col items-center text-center">
          {/* Animated Logo */}
          <div className="reveal mb-8">
            <img
              src={sdcLogo}
              alt="Smiling Data Club Logo"
              className="w-24 h-24 md:w-32 md:h-32 object-contain animate-sdc-float"
            />
          </div>

          {/* Headline — retro monospace style */}
          <h2
            className="reveal text-lg md:text-2xl lg:text-3xl font-normal tracking-[0.1em] uppercase mb-4"
            style={{
              color: "#2ABFBF",
              fontFamily: "'Press Start 2P', monospace",
              textShadow: "0 0 30px rgba(42,191,191,0.4), 0 0 60px rgba(42,191,191,0.15)",
            }}
          >
            Smiling Data Club
          </h2>

          {/* Tagline */}
          <p
            className="reveal text-[10px] md:text-xs tracking-[0.15em] mb-8"
            style={{
              color: "#E84B8A",
              fontFamily: "'Press Start 2P', monospace",
              textShadow: "0 0 20px rgba(232,75,138,0.3)",
            }}
          >
            Today's complexity. Retro simplicity.
          </p>

          {/* Description */}
          <p className="reveal text-white/60 max-w-lg mb-8 text-sm md:text-base">
            Unser Spin-off für KI-gestützte Automatisierung und smarte Datenprozesse.
            Wenn Digitalisierung nicht nur funktionieren, sondern auch Spaß machen soll.
          </p>

          {/* CTA Button — gradient like the real site */}
          <div className="reveal">
            <a
              href="https://smiling-data.club"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #2ABFBF, #E84B8A)",
                color: "#0d0d1a",
                fontFamily: "'Press Start 2P', monospace",
                fontSize: "10px",
                boxShadow: "0 0 20px rgba(42,191,191,0.2)",
              }}
            >
              Zum Smiling Data Club →
            </a>
          </div>

          {/* "Von SIRIUS" label */}
          <p className="reveal text-white/30 text-xs uppercase tracking-[0.3em] mt-8">
            Ein Spin-off von SIRIUS
          </p>
        </div>
      </SectionReveal>
    </div>
  </section>
);

/* ════════════════════════════════════════════
   LEISTUNGEN
   ════════════════════════════════════════════ */
const services = [
  {
    icon: Printer,
    title: "Managed Print Services",
    text: "Druck-Infrastruktur, die läuft — geplant, gewartet, optimiert.",
    link: "/print",
  },
  {
    icon: FileText,
    title: "Dokumentenmanagement",
    text: "Vom Papier zum digitalen Workflow. Mit DocuWare als DMS-Plattform.",
    link: "#",
  },
  {
    icon: Settings,
    title: "Digitale Prozesse",
    text: "CRM, ERP, Automatisierung — mit Zoho One und Make.",
    link: "#",
  },
];

const Services = () => (
  <section id="leistungen" className="bg-secondary py-24 md:py-32 relative overflow-hidden">
    {/* Decorative paper */}
    <div
      className="paper-deco hidden md:block w-20 h-28 opacity-[0.04] -rotate-12"
      style={{ top: "10%", right: "5%" }}
      aria-hidden="true"
    />
    <div className="container">
      <SectionReveal>
        <div className="text-center mb-16">
          <h2 className="reveal text-3xl md:text-4xl font-bold mb-4">Was wir tun</h2>
          <p className="reveal text-muted-foreground text-lg max-w-xl mx-auto">
            Drei Säulen. Ein Ziel: Ihre Prozesse einfacher machen.
          </p>
        </div>
      </SectionReveal>

      <SectionReveal stagger>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <Link
              key={s.title}
              to={s.link}
              className="reveal group bg-card rounded-xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                <s.icon className="w-6 h-6 text-primary group-hover:animate-spin-once" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground mb-4">{s.text}</p>
              <span className="text-primary font-semibold text-sm">Mehr erfahren →</span>
            </Link>
          ))}
        </div>
      </SectionReveal>

      <SectionReveal>
        <div className="reveal mt-16 aspect-[21/9] rounded-xl overflow-hidden">
          <img src={whiteboardImg} alt="SIRIUS Team bei der Strategieplanung am Whiteboard" className="w-full h-full object-cover" loading="lazy" />
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

const Testimonials = () => (
  <section className="py-24 md:py-32">
    <div className="container">
      <SectionReveal>
        <h2 className="reveal text-3xl md:text-4xl font-bold text-center mb-16">
          Das sagen unsere Kunden
        </h2>
      </SectionReveal>

      <SectionReveal stagger>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="reveal">
              <div className="aspect-video rounded-lg overflow-hidden mb-5 shadow-md">
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
      <div className="text-5xl md:text-7xl font-bold text-primary tabular-nums">
        {count}{suffix}
      </div>
      <div className="text-xs uppercase tracking-[0.2em] text-foreground mt-2">{label}</div>
    </div>
  );
};

const Trust = () => (
  <section className="bg-secondary py-24 md:py-32">
    <div className="container">
      <SectionReveal stagger>
        <div className="grid grid-cols-3 gap-8 mb-16">
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

          {/* Referenzen-Logo-Marquee */}
          <div className="relative overflow-hidden mb-8">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-secondary to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-secondary to-transparent z-10" />
            <div className="flex animate-marquee gap-12 md:gap-16 items-center">
              {[...Array(2)].flatMap((_, setIdx) => [
                { src: belleLogo, alt: "BELLE AG" },
                { src: gesslerLogo, alt: "Gessler Collection" },
                { src: dafheLogo, alt: "Dt. Arbeitskreis für Familienhilfe" },
                { src: tobyLogo, alt: "Toby Schaum" },
                { src: diatoolLogo, alt: "Diatool" },
                { src: skodaLogo, alt: "Skoda Sütterlin" },
                { src: edekaLogo, alt: "Edeka Barwig" },
                { src: weinbauLogo, alt: "Badischer Weinbauverband" },
                { src: grieshaberLogo, alt: "Grafried" },
                { src: marderLogo, alt: "Marder Stop & Go" },
                { src: andockLogo, alt: "Andocksysteme" },
                { src: kundoLogo, alt: "Kundo xT" },
                { src: waldhausLogo, alt: "Waldhaus" },
              ].map((logo, i) => (
                <img
                  key={`${setIdx}-${i}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 md:h-14 max-w-[120px] md:max-w-[160px] w-auto object-contain opacity-50 hover:opacity-100 transition-opacity shrink-0"
                />
              )))}
            </div>
          </div>

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
  <section className="bg-dark text-dark-foreground py-24 md:py-32">
    <div className="container text-center">
      <SectionReveal>
        <h2 className="reveal text-3xl md:text-4xl font-bold mb-4">Service Area</h2>
        <p className="reveal text-dark-foreground/70 text-lg mb-8 max-w-lg mx-auto">
          Toner bestellen, Reparatur anfragen — direkt und unkompliziert.
        </p>
        <div className="reveal">
          <Button variant="dark-cta" size="lg" asChild>
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
    title="SIRIUS GmbH — Dokumentenlösungen, Digitalisierung & Managed Print Services"
    description="SIRIUS verbindet Dokumentenmanagement, Drucklösungen und digitale Prozesse zu einem System, das funktioniert. Seit über 45 Jahren aus Freiburg."
  >
    <Hero />
    <SDCTeaser />
    <Services />
    <Testimonials />
    <Trust />
    <ServiceCTA />
  </PageLayout>
);

export default Index;
