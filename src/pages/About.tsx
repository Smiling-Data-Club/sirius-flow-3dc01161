import { Link } from "react-router-dom";
import { Lightbulb, Shield, Wrench, Rocket } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SectionReveal from "@/components/SectionReveal";
import teamPortrait from "@/assets/team-portrait-frau.jpg";

const values = [
  { icon: Lightbulb, title: "Klarheit", text: "Wir machen Komplexes verständlich." },
  { icon: Shield, title: "Verlässlichkeit", text: "Unser Wort zählt. Unser Service auch." },
  { icon: Wrench, title: "Pragmatismus", text: "Lösungen, die funktionieren — nicht nur auf dem Papier." },
  { icon: Rocket, title: "Digitaler Vorsprung", text: "Technologie, die Ihren Alltag wirklich verbessert." },
];

const About = () => (
  <PageLayout
    title="Über uns — SIRIUS GmbH"
    description="Seit über 45 Jahren begleitet SIRIUS Unternehmen auf dem Weg zu effizienten Dokumentenprozessen."
  >
    {/* Hero */}
    <section className="py-24 md:py-32 bg-gradient-to-b from-background to-secondary">
      <div className="container">
        <SectionReveal>
          <h1 className="reveal text-3xl md:text-5xl font-bold mb-6">Über SIRIUS</h1>
          <p className="reveal text-lg text-muted-foreground max-w-2xl">
            Seit über 45 Jahren sind wir Partner für Unternehmen, die ihre Dokumentenprozesse klarer, effizienter und zukunftssicher gestalten wollen.
          </p>
        </SectionReveal>
      </div>
    </section>

    {/* Story */}
    <section className="py-24 md:py-32">
      <div className="container">
        <SectionReveal stagger>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="reveal text-2xl md:text-3xl font-bold mb-6">Unsere Geschichte</h2>
              <p className="reveal text-muted-foreground mb-4">
                Was als klassisches Bürotechnik-Unternehmen in Freiburg begann, hat sich über drei Jahrzehnte zu einem modernen Dienstleister für digitale Dokumentenprozesse entwickelt.
              </p>
              <p className="reveal text-muted-foreground mb-4">
                Heute verbinden wir Managed Print Services, Dokumentenmanagement mit DocuWare und digitale Geschäftsprozesse mit Zoho One und Make zu integrierten Lösungen.
              </p>
              <p className="reveal text-muted-foreground">
                Mit dem Smiling Data Club haben wir zudem ein Spin-off gegründet, das sich auf KI-gestützte Automatisierung und smarte Datenprozesse spezialisiert.
              </p>
            </div>
            <div className="reveal aspect-[4/3] rounded-xl overflow-hidden">
              <img src={teamPortrait} alt="SIRIUS Mitarbeiterin im modernen Büro" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>

    {/* Values */}
    <section className="bg-secondary py-24 md:py-32">
      <div className="container">
        <SectionReveal>
          <h2 className="reveal text-2xl md:text-3xl font-bold text-center mb-16">Unsere Werte</h2>
        </SectionReveal>
        <SectionReveal stagger>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="reveal bg-card rounded-xl p-8 shadow-sm text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm">{v.text}</p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>

    {/* Partners */}
    <section className="py-24 md:py-32">
      <div className="container text-center">
        <SectionReveal>
          <h2 className="reveal text-2xl md:text-3xl font-bold mb-12">Partner & Zertifizierungen</h2>
          <div className="reveal flex flex-wrap justify-center gap-8">
            {["DocuWare Partner", "Zoho Authorized Partner", "Sharp", "Make"].map((name) => (
              <div key={name} className="px-8 py-4 bg-secondary rounded-lg text-muted-foreground text-sm">
                {name}
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>

    {/* Team CTA */}
    <section className="bg-dark text-dark-foreground py-24">
      <div className="container text-center">
        <SectionReveal>
          <h2 className="reveal text-2xl md:text-3xl font-bold mb-8">Die Menschen hinter SIRIUS</h2>
          <div className="reveal">
            <Link
              to="/ueber-uns/team"
              className="inline-flex items-center gap-2 text-primary-foreground font-semibold bg-primary hover:bg-primary/90 px-8 py-3 rounded-lg transition-colors"
            >
              Unser Team kennenlernen →
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  </PageLayout>
);

export default About;
