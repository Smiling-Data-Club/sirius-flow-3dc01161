import { Download, Printer, ScrollText } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import SectionReveal from "@/components/SectionReveal";

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: "Hinweis",
    body: (
      <p className="mb-3">
        Der vollständige Text der Allgemeinen Geschäftsbedingungen für die Erbringung von Leistungen
        (Ziffern 1–15, Stand 15.09.2026) wird an dieser Stelle eingefügt, sobald er vorliegt.
      </p>
    ),
  },
];

const AGBLeistungen = () => (
  <PageLayout
    title="AGB Leistungen — SIRIUS GmbH"
    description="Allgemeine Geschäftsbedingungen der SIRIUS GmbH für Prozessanalyse, Konfiguration, Implementierung und Schulung rund um DocuWare."
  >
    <div className="pt-12 pb-24 px-6 agb-doc">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <header className="mb-12">
            <Link
              to="/agb"
              className="reveal no-print inline-block text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              ← Zur Übersicht
            </Link>
            <h1 className="reveal text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">
              Allgemeine Geschäftsbedingungen für die Erbringung von Leistungen
            </h1>
            <div className="reveal h-1 w-24 bg-amber-500" />
            <p className="reveal text-muted-foreground mt-6 leading-relaxed">
              SIRIUS GmbH document solutions, Freiburg-Hochdorf · Stand: 15.09.2026
            </p>

            <div className="reveal no-print mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="/agb/AGB-Leistungen-2026-09-15.pdf"
                download
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                <Download className="w-4 h-4" />
                Als PDF herunterladen
              </a>
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 rounded-lg border border-primary/30 text-primary font-medium hover:bg-secondary transition-colors"
              >
                <Printer className="w-4 h-4" />
                Drucken
              </button>
            </div>
          </header>
        </SectionReveal>

        <SectionReveal>
          <div className="reveal mb-8 bg-secondary p-6 rounded-xl text-sm text-muted-foreground">
            Für Lieferung, Lizenzerwerb und Service gelten unsere{" "}
            <Link to="/agb/allgemein" className="text-primary underline underline-offset-4">
              Allgemeinen Geschäftsbedingungen
            </Link>
            .
          </div>
        </SectionReveal>

        <SectionReveal stagger>
          <div className="space-y-6">
            {sections.map((s) => (
              <section
                key={s.title}
                className="reveal bg-card p-8 rounded-xl shadow-[0px_20px_40px_rgba(25,28,30,0.06)] folded-corner"
              >
                <h2 className="text-xl font-bold mb-4 text-primary flex items-center gap-2">
                  <ScrollText className="w-5 h-5 text-amber-600 shrink-0" />
                  {s.title}
                </h2>
                <div className="text-muted-foreground leading-relaxed">{s.body}</div>
              </section>
            ))}
          </div>
        </SectionReveal>
      </div>
    </div>
  </PageLayout>
);

export default AGBLeistungen;
