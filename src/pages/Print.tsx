import { Link } from "react-router-dom";
import { Printer, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/PageLayout";
import SectionReveal from "@/components/SectionReveal";

const benefits = [
  { title: "Kostenoptimierung", text: "Transparente Kosten durch planbares Druckmanagement." },
  { title: "Maximale Verfügbarkeit", text: "Proaktive Wartung, schneller Service, minimale Ausfallzeiten." },
  { title: "Nachhaltigkeit", text: "Weniger Verschwendung durch optimierte Geräteflotten." },
];

const Print = () => (
  <PageLayout
    title="Managed Print Services — SIRIUS GmbH"
    description="Druck-Infrastruktur, die einfach funktioniert. Geplant, gewartet, optimiert — von SIRIUS."
  >
    {/* Hero */}
    <section className="py-24 md:py-32 bg-gradient-to-b from-background to-secondary">
      <div className="container">
        <SectionReveal>
          <div className="max-w-3xl">
            <div className="reveal w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Printer className="w-7 h-7 text-primary" />
            </div>
            <h1 className="reveal text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Managed Print Services
            </h1>
            <p className="reveal text-lg md:text-xl text-muted-foreground max-w-2xl">
              Druck-Infrastruktur, die einfach funktioniert. Geplant, gewartet, optimiert — damit Sie sich auf Ihr Geschäft konzentrieren können.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>

    {/* Content + Image */}
    <section className="py-24 md:py-32">
      <div className="container">
        <SectionReveal stagger>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="reveal text-2xl md:text-3xl font-bold mb-6">
                Ihr Drucker-Fuhrpark. Unser Job.
              </h2>
              <p className="reveal text-muted-foreground mb-4">
                Wir analysieren, planen und betreiben Ihre Druckerlandschaft. Von der Bedarfsanalyse über die Geräteauswahl bis zur proaktiven Wartung — alles aus einer Hand.
              </p>
              <p className="reveal text-muted-foreground">
                Als Sharp-Partner bieten wir Ihnen zuverlässige Hardware, kombiniert mit intelligentem Flottenmanagement und transparenter Kostenstruktur.
              </p>
            </div>
            <div className="reveal aspect-[4/3] bg-secondary rounded-xl flex items-center justify-center text-muted-foreground text-sm">
              Platzhalter: MPS-Bild
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>

    {/* Benefits */}
    <section className="bg-secondary py-24 md:py-32">
      <div className="container">
        <SectionReveal>
          <h2 className="reveal text-2xl md:text-3xl font-bold text-center mb-16">Ihre Vorteile</h2>
        </SectionReveal>
        <SectionReveal stagger>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="reveal bg-card rounded-xl p-8 shadow-sm">
                <CheckCircle className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{b.title}</h3>
                <p className="text-muted-foreground">{b.text}</p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>

    {/* Manufacturers */}
    <section className="py-24 md:py-32">
      <div className="container text-center">
        <SectionReveal>
          <h2 className="reveal text-2xl md:text-3xl font-bold mb-12">Unsere Hersteller-Partner</h2>
          <div className="reveal flex flex-wrap justify-center gap-8">
            {["Sharp", "HP", "Lexmark"].map((name) => (
              <div key={name} className="px-8 py-4 bg-secondary rounded-lg text-muted-foreground text-sm">
                {name} Logo
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-dark text-dark-foreground py-24">
      <div className="container text-center">
        <SectionReveal>
          <h2 className="reveal text-2xl md:text-3xl font-bold mb-4">Toner bestellen oder Reparatur melden?</h2>
          <p className="reveal text-dark-foreground/70 mb-8">Direkt über unsere Service Area.</p>
          <div className="reveal">
            <Button variant="dark-cta" size="lg" asChild>
              <Link to="/service-area">
                Zur Service Area <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </SectionReveal>
      </div>
    </section>
  </PageLayout>
);

export default Print;
