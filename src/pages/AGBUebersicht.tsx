import { Package, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import SectionReveal from "@/components/SectionReveal";

const cards = [
  {
    to: "/agb/allgemein",
    icon: Package,
    title: "Allgemeine Geschäftsbedingungen",
    subtitle: "Lieferung, Hardware, Lizenzerwerb, Service und Reparatur",
    text: "Gelten für den Kauf und die Lieferung von Geräten, Software-Lizenzen und Verbrauchsmaterial sowie für Wartungs-, Service- und Reparaturleistungen.",
    badge: null as string | null,
  },
  {
    to: "/agb/leistungen",
    icon: Workflow,
    title: "AGB für die Erbringung von Leistungen",
    subtitle: "Prozessanalyse, Konfiguration & Implementierung, Schulung (DocuWare)",
    text: "Gelten für Dienstleistungen rund um die DocuWare Software: Prozessanalyse-Support, Konfigurations- und Implementierungsleistungen sowie Schulungen und Seminare.",
    badge: "Stand: 15.09.2026",
  },
];

const AGBUebersicht = () => (
  <PageLayout
    title="AGB — SIRIUS GmbH"
    description="Allgemeine Geschäftsbedingungen der SIRIUS GmbH document solutions, Freiburg — Lieferung & Service sowie Erbringung von Leistungen."
  >
    <div className="pt-12 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <header className="mb-16">
            <h1 className="reveal text-5xl font-extrabold text-primary mb-4 tracking-tight">
              Allgemeine Geschäftsbedingungen
            </h1>
            <div className="reveal h-1 w-24 bg-amber-500" />
            <p className="reveal text-muted-foreground mt-6 leading-relaxed">
              SIRIUS GmbH document solutions, Freiburg-Hochdorf
            </p>
            <p className="reveal text-muted-foreground mt-4 leading-relaxed">
              Je nach Vertragsgegenstand gelten unterschiedliche Bedingungen. Bitte wählen Sie die
              für Ihren Auftrag maßgebliche Fassung.
            </p>
          </header>
        </SectionReveal>

        <SectionReveal stagger>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cards.map((c) => (
              <Link
                key={c.to}
                to={c.to}
                className="reveal relative block bg-card p-8 rounded-xl shadow-[0px_20px_40px_rgba(25,28,30,0.06)] folded-corner transition-transform hover:-translate-y-1"
              >
                {c.badge && (
                  <span className="absolute top-4 right-8 text-xs font-medium text-amber-600 bg-amber-500/10 px-2 py-1 rounded-full">
                    {c.badge}
                  </span>
                )}
                <c.icon className="w-8 h-8 text-amber-600 mb-4" />
                <h2 className="text-xl font-bold text-primary mb-2">{c.title}</h2>
                <p className="text-sm font-medium text-foreground/80 mb-3">{c.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed text-sm">{c.text}</p>
              </Link>
            ))}
          </div>
        </SectionReveal>
      </div>
    </div>
  </PageLayout>
);

export default AGBUebersicht;
