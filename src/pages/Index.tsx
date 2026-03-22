import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Printer, FileText, Settings, Play } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SectionReveal from "@/components/SectionReveal";
import { useCountUp } from "@/hooks/useCountUp";
import sdcLogo from "@/assets/sdc-logo.ico";
import whiteboardImg from "@/assets/homepage-whiteboard.jpg";

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
   SDC TEASER
   ════════════════════════════════════════════ */
const SDCTeaser = () => (
  <section className="relative bg-dark text-dark-foreground overflow-hidden">
    {/* Gradient accent lines */}
    <div
      className="absolute top-0 left-0 right-0 h-px"
      style={{ background: "linear-gradient(90deg, hsl(var(--sdc-cyan)), hsl(var(--sdc-purple)), hsl(var(--sdc-pink)))" }}
    />
    <div
      className="absolute bottom-0 left-0 right-0 h-px"
      style={{ background: "linear-gradient(90deg, hsl(var(--sdc-pink)), hsl(var(--sdc-purple)), hsl(var(--sdc-cyan)))" }}
    />

    <div className="container py-20 md:py-28">
      <SectionReveal stagger>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="reveal text-xs uppercase tracking-[0.25em] text-dark-foreground/50 mb-3">
              Von SIRIUS
            </p>
            <h2 className="reveal text-3xl md:text-4xl font-bold mb-2">
              Smiling Data Club
            </h2>
            <p className="reveal text-lg text-dark-foreground/70 font-light mb-5">
              Today's complexity. Retro simplicity.
            </p>
            <p className="reveal text-dark-foreground/80 mb-6 max-w-md">
              Unser Spin-off für KI-gestützte Automatisierung und smarte Datenprozesse. Wenn Digitalisierung nicht nur funktionieren, sondern auch Spaß machen soll.
            </p>
            <a
              href="https://smiling-data.club"
              target="_blank"
              rel="noopener noreferrer"
              className="reveal inline-flex items-center gap-1 text-sdc-cyan font-semibold hover:underline underline-offset-4 transition-colors"
            >
              Zum Smiling Data Club →
            </a>
          </div>

          {/* SDC Logo */}
          <div className="reveal flex justify-center md:justify-end">
            <img
              src={sdcLogo}
              alt="Smiling Data Club Logo"
              className="w-48 h-48 md:w-56 md:h-56 object-contain animate-sdc-logo"
            />
          </div>
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
    </div>
  </section>
);

/* ════════════════════════════════════════════
   VIDEO TESTIMONIALS
   ════════════════════════════════════════════ */
const testimonials = [
  { name: "Kundenname", role: "Geschäftsführer, Musterfirma GmbH", quote: "SIRIUS hat unsere Druckprozesse komplett vereinfacht." },
  { name: "Kundenname", role: "IT-Leiter, Beispiel AG", quote: "Endlich ein Partner, der mitdenkt." },
  { name: "Kundenname", role: "Office Manager, Demo KG", quote: "Von der Beratung bis zur Umsetzung — alles aus einer Hand." },
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
              <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center mb-5 relative overflow-hidden group cursor-pointer">
                <span className="text-muted-foreground text-sm">Testimonial-Video {i + 1}</span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center shadow-lg animate-pulse-play group-hover:bg-primary transition-colors">
                    <Play size={22} className="ml-1" />
                  </div>
                </div>
              </div>
              <p className="text-foreground italic mb-3">"{t.quote}"</p>
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

          {/* Partner logos placeholder */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {["DocuWare Partner", "Zoho Authorized Partner", "Sharp", "Make"].map((name) => (
              <div
                key={name}
                className="px-6 py-3 bg-card rounded border text-sm text-muted-foreground"
              >
                {name}
              </div>
            ))}
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
