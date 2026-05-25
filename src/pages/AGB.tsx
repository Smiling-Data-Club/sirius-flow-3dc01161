import { FileText, ScrollText } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SectionReveal from "@/components/SectionReveal";

const sections = [
  {
    title: "§ 1 Geltungsbereich",
    body: `Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge, Lieferungen und sonstigen Leistungen der SIRIUS GmbH document solutions (nachfolgend „SIRIUS") gegenüber Unternehmern, juristischen Personen des öffentlichen Rechts und öffentlich-rechtlichen Sondervermögen im Sinne des § 310 Abs. 1 BGB. Entgegenstehende oder von diesen AGB abweichende Bedingungen des Kunden erkennt SIRIUS nicht an, es sei denn, SIRIUS hätte ihrer Geltung ausdrücklich schriftlich zugestimmt.`,
  },
  {
    title: "§ 2 Angebot und Vertragsschluss",
    body: `Angebote von SIRIUS sind freibleibend und unverbindlich. Bestellungen des Kunden gelten als verbindliches Angebot. SIRIUS kann dieses Angebot innerhalb von zwei Wochen durch Auftragsbestätigung oder Lieferung der bestellten Ware annehmen. Nebenabreden und Änderungen bedürfen zu ihrer Wirksamkeit der Schriftform.`,
  },
  {
    title: "§ 3 Preise und Zahlungsbedingungen",
    body: `Alle Preise verstehen sich, sofern nicht anders angegeben, in Euro zuzüglich der jeweils geltenden gesetzlichen Umsatzsteuer und zuzüglich Versand-, Verpackungs- und ggf. Installationskosten. Rechnungen sind innerhalb von 14 Tagen nach Rechnungsdatum ohne Abzug zur Zahlung fällig. Bei Zahlungsverzug ist SIRIUS berechtigt, Verzugszinsen in gesetzlicher Höhe zu berechnen.`,
  },
  {
    title: "§ 4 Lieferung und Leistungszeit",
    body: `Liefertermine und -fristen sind nur verbindlich, wenn sie von SIRIUS ausdrücklich schriftlich bestätigt wurden. Ereignisse höherer Gewalt sowie sonstige unvorhersehbare, von SIRIUS nicht zu vertretende Umstände berechtigen SIRIUS, die Lieferung um die Dauer der Behinderung hinauszuschieben oder ganz oder teilweise vom Vertrag zurückzutreten.`,
  },
  {
    title: "§ 5 Eigentumsvorbehalt",
    body: `Die gelieferte Ware bleibt bis zur vollständigen Bezahlung aller Forderungen aus der Geschäftsverbindung Eigentum von SIRIUS. Der Kunde ist berechtigt, die Vorbehaltsware im ordnungsgemäßen Geschäftsverkehr weiterzuveräußern; er tritt SIRIUS jedoch bereits jetzt alle Forderungen in Höhe des Rechnungsendbetrages ab, die ihm aus der Weiterveräußerung erwachsen.`,
  },
  {
    title: "§ 6 Gewährleistung",
    body: `Es gelten die gesetzlichen Gewährleistungsregelungen. Die Gewährleistungsfrist beträgt für Unternehmer 12 Monate ab Lieferung der Ware bzw. ab Abnahme der Leistung. Offensichtliche Mängel sind unverzüglich, spätestens jedoch innerhalb von zwei Wochen nach Empfang der Ware, schriftlich gegenüber SIRIUS anzuzeigen.`,
  },
  {
    title: "§ 7 Haftung",
    body: `SIRIUS haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie nach den Vorschriften des Produkthaftungsgesetzes. Für leichte Fahrlässigkeit haftet SIRIUS nur bei Verletzung einer wesentlichen Vertragspflicht (Kardinalpflicht); in diesem Fall ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt. Eine weitergehende Haftung ist ausgeschlossen.`,
  },
  {
    title: "§ 8 Datenschutz",
    body: `SIRIUS verarbeitet personenbezogene Daten des Kunden ausschließlich im Rahmen der gesetzlichen Bestimmungen, insbesondere der DSGVO und des BDSG. Einzelheiten zur Datenverarbeitung sind unserer Datenschutzerklärung zu entnehmen.`,
  },
  {
    title: "§ 9 Schlussbestimmungen",
    body: `Es gilt ausschließlich das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Ausschließlicher Gerichtsstand für alle Streitigkeiten ist – soweit gesetzlich zulässig – der Sitz von SIRIUS in Freiburg. Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.`,
  },
];

const AGB = () => (
  <PageLayout
    title="AGB — SIRIUS GmbH"
    description="Allgemeine Geschäftsbedingungen der SIRIUS GmbH document solutions, Freiburg."
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
              Stand: Januar 2026 — SIRIUS GmbH document solutions, Freiburg-Hochdorf
            </p>
          </header>
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
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{s.body}</p>
              </section>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal>
          <div className="reveal mt-12 bg-secondary p-6 rounded-xl text-sm text-muted-foreground flex items-start gap-3">
            <FileText className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <p>
              Diese AGB stehen auf Anfrage gerne auch als PDF zur Verfügung. Bei Fragen erreichen Sie uns unter{" "}
              <a href="mailto:info@sirius-gmbh.de" className="text-primary underline underline-offset-4">
                info@sirius-gmbh.de
              </a>
              .
            </p>
          </div>
        </SectionReveal>
      </div>
    </div>
  </PageLayout>
);

export default AGB;
