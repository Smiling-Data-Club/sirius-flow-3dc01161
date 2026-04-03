import { Link } from "react-router-dom";
import { Eye, ShieldCheck, Wrench, Rocket } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SectionReveal from "@/components/SectionReveal";
import teamPortrait from "@/assets/team-portrait-frau.jpg";
import tabletImg from "@/assets/about-tablet.jpg";
import siriusTeamImg from "@/assets/about-team-sirius.jpg";

const values = [
  { icon: Eye, title: "Klarheit", text: "Wir schaffen Durchblick in komplexen Datenstrukturen durch intuitive Logik und sauberes Design." },
  { icon: ShieldCheck, title: "Verlässlichkeit", text: "Höchste Sicherheitsstandards und termingerechte Ausführung sind unser Versprechen an Sie." },
  { icon: Wrench, title: "Pragmatismus", text: "Lösungen müssen funktionieren. Wir konzentrieren uns auf das, was Sie heute wirklich weiterbringt." },
  { icon: Rocket, title: "Digitaler Vorsprung", text: "Wir denken morgen schon heute, um Ihnen einen entscheidenden Marktvorteil zu verschaffen." },
];

const About = () => (
  <PageLayout
    title="Über uns — SIRIUS GmbH"
    description="Seit über 45 Jahren begleitet SIRIUS Unternehmen auf dem Weg zu effizienten Dokumentenprozessen."
  >
    {/* Hero */}
    <section className="relative h-[614px] flex items-center overflow-hidden bg-primary">
      <div className="absolute inset-0 opacity-40">
        <img
          src={teamPortrait}
          alt="Office Interior"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-8 w-full">
        <SectionReveal>
          <h1 className="reveal font-extrabold text-6xl md:text-8xl text-primary-foreground tracking-tighter leading-tight max-w-2xl">
            Über <span className="text-amber-200">SIRIUS</span>
          </h1>
          <p className="reveal mt-6 text-xl text-blue-100 max-w-xl font-light">
            Wir gestalten die digitale Transformation von Dokumentenprozessen mit architektonischer Präzision und menschlicher Weitsicht.
          </p>
        </SectionReveal>
      </div>
    </section>

    {/* Story Section */}
    <section className="py-24 px-8 max-w-7xl mx-auto space-y-32">
      {/* Part 1: Intro */}
      <SectionReveal stagger>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="reveal font-bold text-4xl text-primary tracking-tight">Unsere Vision der Ordnung</h2>
            <p className="reveal text-lg text-muted-foreground leading-relaxed">
              Seit unserer Gründung verfolgen wir ein klares Ziel: Information in Wissen zu verwandeln. Dokumente sind für uns keine bloßen Papierstapel oder Dateien, sondern die strukturelle Basis Ihres Geschäftserfolgs. Wir verstehen uns als Architekten, die das Chaos ordnen und effiziente Flüsse schaffen.
            </p>
            <p className="reveal text-lg text-muted-foreground leading-relaxed">
              Mit SIRIUS haben wir eine Plattform geschaffen, die technologische Innovation mit jahrzehntelanger Expertise im Dokumentenmanagement vereint. Unser Fokus liegt dabei immer auf der nahtlosen Integration in Ihre bestehenden Arbeitsabläufe.
            </p>
          </div>
          <div className="reveal relative group">
            <div className="absolute -inset-4 bg-muted rounded-xl -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
            <img
              src={teamPortrait}
              alt="SIRIUS Team meeting and collaboration"
              className="relative rounded-xl shadow-[0px_20px_40px_rgba(25,28,30,0.06)] transition-all duration-700"
              loading="lazy"
            />
          </div>
        </div>
      </SectionReveal>

      {/* Part 2: Innovation */}
      <SectionReveal stagger>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 reveal relative group">
            <div className="absolute -inset-4 bg-blue-50 rounded-xl rotate-2 group-hover:rotate-0 transition-transform duration-500" />
            <img
              src={tabletImg}
              alt="SIRIUS Technician operating digital systems"
              className="relative rounded-xl shadow-[0px_20px_40px_rgba(25,28,30,0.06)]"
              loading="lazy"
            />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="reveal font-bold text-4xl text-primary tracking-tight">Digitaler Fortschritt, menschlich gedacht</h2>
            <p className="reveal text-lg text-muted-foreground leading-relaxed">
              Innovation ist kein Selbstzweck. Bei SIRIUS nutzen wir Künstliche Intelligenz und Cloud-Technologien, um Barrieren abzubauen. Wir glauben daran, dass Technologie den Menschen entlasten sollte, damit Raum für kreative und strategische Aufgaben entsteht.
            </p>
            <p className="reveal text-lg text-muted-foreground leading-relaxed">
              Unsere Lösungen wachsen mit Ihren Anforderungen. Vom ersten digitalen Scan bis hin zur vollautomatisierten Prozesskette begleiten wir Sie auf jedem Schritt Ihrer digitalen Reise — sicher, verlässlich und zukunftsorientiert.
            </p>
          </div>
        </div>
      </SectionReveal>
    </section>

    {/* Values */}
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-8">
        <SectionReveal>
          <div className="text-center mb-16 space-y-4">
            <h2 className="reveal font-bold text-4xl text-primary">Unsere Werte</h2>
            <p className="reveal text-muted-foreground uppercase tracking-[0.15em] text-sm">Das Fundament unserer Arbeit</p>
          </div>
        </SectionReveal>
        <SectionReveal stagger>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="reveal bg-card p-8 rounded-xl shadow-[0px_20px_40px_rgba(25,28,30,0.06)] hover:scale-105 transition-transform duration-300 flex flex-col items-start gap-4 folded-corner"
              >
                <v.icon className="w-9 h-9 text-primary" />
                <h3 className="font-bold text-xl">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>

    {/* Partners */}
    <section className="py-24 max-w-7xl mx-auto px-8">
      <SectionReveal>
        <div className="text-center mb-12">
          <h2 className="reveal font-bold text-2xl text-muted-foreground/60">Unsere Partner & Netzwerke</h2>
        </div>
        <div className="reveal flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60">
          {["DocuWare Partner", "Zoho Authorized Partner", "Sharp", "Make"].map((name) => (
            <div key={name} className="font-bold text-xl tracking-tighter hover:opacity-100 transition-opacity">
              {name}
            </div>
          ))}
        </div>
      </SectionReveal>
    </section>

    {/* CTA */}
    <section className="py-24 px-8">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-primary/80 p-12 md:p-20 rounded-xl text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
        <div className="relative z-10 space-y-8">
          <SectionReveal>
            <h2 className="reveal font-bold text-4xl md:text-5xl text-primary-foreground">
              Lernen Sie die Menschen hinter SIRIUS kennen.
            </h2>
            <p className="reveal text-blue-100 text-lg max-w-xl mx-auto mt-4">
              Unser Team aus Experten freut sich darauf, Ihre Projekte gemeinsam mit Ihnen zu realisieren.
            </p>
            <div className="reveal pt-4">
              <Link
                to="/ueber-uns/team"
                className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-foreground px-8 py-4 rounded-lg font-bold text-lg transition-all hover:gap-5"
              >
                Unser Team kennenlernen →
              </Link>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default About;
