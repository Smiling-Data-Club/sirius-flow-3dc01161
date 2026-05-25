import { FileText, ScrollText } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import SectionReveal from "@/components/SectionReveal";

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: "§ 1 Geltung",
    body: `Die Lieferungen, Leistungen und Angebote erfolgen stets auf Grundlage dieser Geschäftsbedingungen. Spätestens mit der Entgegennahme der Ware oder Leistung gelten diese Bedingungen als angenommen. Abweichungen sind nur gültig, wenn sie von uns schriftlich bestätigt werden. Sollte irgendeine Bestimmung dieser Geschäftsbedingungen unwirksam sein, so wird dadurch die Gültigkeit der übrigen Bestimmungen nicht berührt. Die Vertragspartner werden unwirksame Bestimmungen nach Möglichkeit durch solche ersetzen, die den angestrebten Zweck weitestgehend erreichen. Mündliche Nebenabreden haben keine Gültigkeit.`,
  },
  {
    title: "§ 2 Preise",
    body: `Soweit nicht ausdrücklich anders angegeben, ist die SIRIUS GmbH an die schriftlichen Angebote und Reparaturkostenvoranschläge für 10 Kalendertage ab Erstelldatum gebunden. Die Preise sind Nettopreise zuzüglich der jeweils gültigen, gesetzlichen Mehrwertsteuer. Die genannten Preise gelten ab Geschäftsstelle Freiburg. Zusätzliche Leistungen wie Lieferung, Installation und Einweisung/Schulung werden gesondert berechnet. Die SIRIUS GmbH ist berechtigt, Mindermengenzuschläge zu berechnen und Vorauszahlungen zu verlangen.`,
  },
  {
    title: "§ 3 Zahlung",
    body: `Zahlungen sind ausschließlich an die SIRIUS GmbH oder an schriftlich bevollmächtigte Personen zu leisten. Es gelten folgende Zahlungsbedingungen (soweit nicht anders vereinbart): Handelsware innerhalb 7 Tagen mit 2% Skonto, 14 Tage netto. Dienst- und Serviceleistungen (Reparaturen, Schulungen etc.): nach Vereinbarung, sonst bei Rechnungserhalt, sofort netto Kasse. Kosten/Gebühren bei Miet- und Wartungsverträgen: Einzug per Lastschrift ohne Skonto. Im Falle des Zahlungsverzuges gelten die gesetzlichen Regeln der §§ 288 BGB. Fälligkeit der Forderungen tritt spätestens 14 Kalendertage ab Rechnungsdatum ein. Mit gegen die SIRIUS GmbH bestehenden Forderungen darf der Käufer weder aufrechnen, noch ein Zurückbehaltungsrecht ausüben. Ausgenommen sind rechtskräftig festgestellte und/oder unbestrittene Forderungen sowie Gegenforderungen aus demselben Vertragsverhältnis. Reklamationen befreien nicht von der Zahlungsverpflichtung. Werden für einen Teil des vereinbarten Kaufpreises Waren in Zahlung genommen, so kann ein vereinbarter Barzahlungsrabatt nur für den verbleibenden Restbetrag gewährt werden. Vereinbarte Skonti gelten nicht, wenn sich der Kunde mit der Zahlung älterer Forderungen von SIRIUS im Rückstand befindet.`,
  },
  {
    title: "§ 4 Lieferbedingung",
    body: `Von SIRIUS genannte Fristen, insbesondere Liefertermine, sind nur verbindlich, wenn sie ausdrücklich in der Auftragsbestätigung als solche bezeichnet wurden. Installationsfristen beginnen frühestens, wenn die zu installierenden Geräte mängelfrei am Installationsort zur Verfügung stehen und wenn die grundsätzlich vom Besteller auf eigene Kosten zu schaffenden sonstigen Installationsvoraussetzungen ohne Einschränkung gegeben sind. Liefer- und Leistungsfristen verlängern sich angemessen bei Eintritt höherer Gewalt und allen sonst von SIRIUS nicht zu vertretenden Hindernissen, welche auf die Lieferung oder Leistung von erheblichem Einfluss sind, insbesondere bei Streik oder Aussperrung bei Lieferanten oder deren Unterlieferanten von SIRIUS. Für Testzwecke gelieferte Gegenstände (Hardware, Software einschließlich Datenträger, Dokumentation) sind Eigentum von SIRIUS. Sie dürfen vom Kunden nur aufgrund gesonderter Vereinbarungen mit SIRIUS genutzt werden. SIRIUS ist berechtigt, Teillieferungen vorzunehmen.`,
  },
  {
    title: "§ 5 Lieferung und Gefahrenübergang",
    body: `Die Anlieferung erfolgt, soweit nicht individuell und anders vereinbart, auf Rechnung und Gefahr des Kunden. Äußerlich sichtbare Schäden müssen bei Anlieferung/Annahme sofort, verdeckte Schäden binnen 7 Kalendertagen seit Anlieferung gemeldet werden.`,
  },
  {
    title: "§ 6 Gewährleistung und Haftung",
    body: `Die Gewährleistungsrechte des Kunden, der Unternehmer bzw. Kaufmannes, setzen voraus, dass dieser seine Untersuchungs- und Rügeobliegenheiten lt. § 377 HGB erfüllt hat. Die Gewährleistungsfrist wird bei Verkäufen an Unternehmer oder Kaufleute auf 12 Monate begrenzt. Das gilt nicht, sofern ein Mangel arglistig verschwiegen wurde. Bei Verbrauchern gelten die gesetzlichen Bestimmungen. Öffentliche Äußerungen von SIRIUS oder eines Herstellers oder dessen Gehilfen (z.B. durch Werbung, Internet) gehören nur zur Beschaffenheit, soweit sie als Vertragsbestandteil fixiert sind. Sollte eine eventuell notwendige, weil vom betreffenden Hersteller geforderte Kunden-Registrierung erforderlich sein oder werden, obliegt die Verantwortung und Verpflichtung hierfür vollständig dem Kunden. Angaben über die Beschaffenheit von Waren oder Leistungen stellen keine Garantien gem. § 276 Abs. 1, 443 BGB dar. Die Parteien stimmen darüber überein, dass nach dem Stand der Technik bei Standardsoftware Fehler unter allen Anwendungsbedingungen nicht gänzlich ausgeschlossen werden können. Wenn die empfohlenen Wartungs- und Reinigungsintervalle nicht eingehalten werden, so kann dies zum völligen Erlöschen der Gewährleistungsansprüche führen. Wenn ein von SIRIUS zu vertretender Mangel der Kaufsache vorliegt, ist diese, nach ihrer Wahl, zur Nacherfüllung (auch mehrmals) oder Ersatzlieferung verpflichtet. Soweit sich nachstehend nichts anderes ergibt, sind weitergehende Ansprüche des Kunden, gleich aus welchen Rechtsgründen, ausgeschlossen. SIRIUS haftet nicht für Schäden, die nicht im Liefergegenstand selbst entstanden sind, insbesondere haftet SIRIUS nicht für entgangenen Gewinn oder sonstige Vermögensschäden des Kunden. Vorstehende Haftungsbegrenzung gilt nicht, soweit die Schadensursache auf Vorsatz oder grober Fahrlässigkeit seitens SIRIUS beruht. Sie gilt ferner nicht, wenn eine Verletzung der Gesundheit des Kunden auf einer Pflichtverletzung durch SIRIUS beruht. SIRIUS haftet insbesondere nicht für den Verlust von Daten. Werden die Wartungs- und Betriebsanleitungen nicht befolgt, Änderungen an den Produkten vorgenommen, Teile ausgewechselt oder Verbrauchsmaterialien verwendet, die nicht den Originalspezifikationen entsprechen, so entfällt jede Gewährleistung. SIRIUS ist berechtigt, sämtliche Kosten, die nicht über den Hersteller im Rahmen seiner Gewährleistung abgedeckt werden, an den Kunden zu berechnen. Dies gilt insbesondere für Verbrauchsmaterialien. Diese sind durch den Kunden vorab zu bezahlen. Nach abschließender Klärung und Begleichung durch den Hersteller erfolgt die entsprechende Gutschrift an den Kunden. SIRIUS ist berechtigt, für solche Fälle eine Bearbeitungsgebühr in Höhe des entstandenen Aufwandes, der auf Anforderung nachgewiesen wird, zu berechnen, unabhängig davon, in wie weit der Hersteller Gewährleistung, Kulanz oder Teilkulanz gewährt. Die Erfüllung sämtlicher Gewährleistungsansprüche erfolgt am Firmensitz der SIRIUS GmbH.`,
  },
  {
    title: "§ 7 Eigentumsvorbehalt",
    body: `Die Ware bleibt bis zur vollständigen Bezahlung Eigentum von SIRIUS. Der Kunde ist berechtigt, den Kaufgegenstand im ordnungsgemäßen Geschäftsverkehr zu veräußern, solange er nicht mit der Zahlung des Kaufpreises in Verzug ist. Die aus dem Weiterverkauf resultierenden Forderungen tritt der Kunde bereits jetzt sicherheitshalber an SIRIUS im vollen Umfang ab. SIRIUS ermächtigt den Kunden hiermit widerruflich, diese Forderungen einzuziehen. Der Widerruf kann nur ausgeübt werden, wenn die Sicherung der Kaufpreisforderung gefährdet ist. Die unter Eigentumsvorbehalt stehende Ware ist gegen alle Risiken zu versichern und sachgemäß zu lagern. Der Kunde hat die Pflicht, während der Dauer des Eigentumsvorbehalts die Ware in einem ordnungsgemäßen Zustand zu halten und notwendige Reparaturen auf seine Kosten ausführen zu lassen. Wenn Dritte auf das Vorbehaltseigentum zugreifen, wird der Kunde unverzüglich auf das Eigentum von SIRIUS hinweisen und diesen von dem Zugriffsversuch benachrichtigen. Durch den Zugriff oder geplanten Zugriff entstehende Kosten und Schäden hat der Kunde zu tragen. Kommt der Kunde ihm obliegenden vertraglichen Verpflichtungen nicht nach oder treten Zweifel an seiner Kreditwürdigkeit auf, so ist SIRIUS berechtigt, Vorbehaltsware zum Zwecke der Verwertung in unmittelbaren Besitz zu nehmen. An die gegensätzlichen Bestimmungen über den Pfandverkauf ist SIRIUS nicht gebunden. Dem Kunden gegenüber ist SIRIUS berechtigt, auch Ware, an der uns gemäß dieser Bestimmung Miteigentum zusteht, in unmittelbaren Besitz zu nehmen. Die Zurücknahme der Ware gilt nicht als Rücktritt vom Vertrag und hat einen Rücktritt nicht zur Voraussetzung.`,
  },
  {
    title: "§ 8 Zusätzliche Bestimmungen für Wiederverkäufer",
    body: `Wiederverkäufer verpflichten sich zur Einhaltung der vereinbarten Gebietsgrenzen und haften für alle Verstöße mit allen sich daraus ergebenden Forderungen. Durch SIRIUS erbrachte Dienstleistungen, insbesondere im Rahmen der Gewährleistung, werden an den Wiederverkäufer abgerechnet, sofern diese nicht zweifelsfrei durch den Hersteller schon abgegolten wurden.`,
  },
  {
    title: "§ 9 Reparaturbedingungen",
    body: `Reparaturrechnungen sind sofort und ohne jeden Abzug zur Zahlung fällig. Falls ein erteilter Auftrag aus nicht durch SIRIUS zu vertretenden Gründen nicht oder nicht vollständig ausgeführt werden kann, ist SIRIUS berechtigt, den bis dahin entstandenen gesamten Aufwand zu berechnen. Der Aufwand für einen schriftlichen Kostenanschlag wird dem Kunden in Rechnung gestellt, unabhängig von der Auftragserteilung zur Reparatur. Ein Kostenanschlag wird unaufgefordert erstellt, wenn die Reparaturkosten in Relation zum Zeitwert unverhältnismäßig hoch sind. Auch dieser Aufwand wird dem Kunden in Rechnung gestellt. Die Gewährleistung für Reparaturen beträgt 12 Monate. Die Frist beginnt mit der Übergabe an den Kunden. Gewähr wird nur auf die tatsächlich ausgeführte Reparatur übernommen, jedoch nicht für weitere oder andere Fehlermeldungen, ebenfalls nicht auf Verbrauchs- und Verschleißteile. SIRIUS haftet nicht für den Verlust von Daten. Sämtliche weitergehende Ansprüche des Kunden sind ausgeschlossen. Der Kunde hat den Reparaturgegenstand innerhalb von 4 Wochen nach Aufforderung abzuholen. Geschieht dies nicht, wird ein angemessenes Lagergeld berechnet (Stand 01.07.2020: 5 € pro Tag pro Gerät). 3 Monate nach der Abholaufforderung entfällt auch die Pflicht zur Aufbewahrung. Die Gefahr des Untergangs oder Verlustes oder der Beschädigung geht über auf den Kunden. SIRIUS wird dem Kunden nach dieser Zeit einmalig schriftlich gegen Zugangsnachweis den Verkauf, die Verwertung des Reparaturgegenstandes oder die kostenpflichtige Entsorgung androhen. Sollte der Kunde binnen drei Wochen ab Zustellung des Schreibens das Gerät nicht abholen, wird nach § 383 ff. BGB verfahren (Selbsthilfeverkauf). Vom Verkaufserlös werden Reparatur- und Lagerkosten einbehalten, ein eventueller Mehrerlös steht dem Kunden zu und wird gegebenenfalls hinterlegt.`,
  },
  {
    title: "§ 10 Sondervereinbarungen",
    body: `Für Sondervereinbarungen (Mietverträge, Leasingverträge, Softwareverträge usw.) gelten zusätzlich zu den vorliegenden Geschäftsbedingungen noch die formularmäßigen Bedingungen der Drittauftragnehmer. In diesen Fällen wird der Lieferer dem Besteller die Bedingungen der Drittauftragnehmer unverzüglich zur Kenntnis bringen. Sondervereinbarungen bedürfen zu ihrer Wirksamkeit der rechtsverbindlichen Unterschrift der vertragsschließenden Parteien. Insbesondere bei Miet- und Leasingverträgen gilt die Auftragserteilung an den Lieferer ab Genehmigung des Vertragsabschlusses zwischen Lieferer und Leasinggeber und gleichzeitig ab Verpflichtung, mit dem Leasinggeber einen den festgelegten Bedingungen entsprechenden Vertrag abzuschließen.`,
  },
  {
    title: "§ 11 Gerichtsstand",
    body: `Erfüllungsort und ausschließlicher Gerichtsstand für Lieferungen und Zahlungen sowie sämtliche zwischen den Parteien sich ergebenden Streitigkeiten ist 79098 Freiburg. Es gilt ausschließlich deutsches Recht.`,
  },
  {
    title: "§ 12 Meldung von Zählerständen",
    body: (
      <>
        Nach Vereinbarung bzw. den Verträgen zu Wartung werden regelmäßig Meldungen der Zählerstände
        notwendig. Diese Leistung ist vom Kunden zu erbringen, idealerweise vollautomatisch über den
        Best-for-Admin-Fleet, oder manuell über{" "}
        <a
          href="https://www.sirius-gmbh.de/Support/Zählerstände"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-4"
        >
          www.sirius-gmbh.de/Support/Zählerstände
        </a>
        . Der Kunde wird bei jeder Meldung vorab durch SIRIUS hierzu aufgefordert, unter Angabe der
        aktuellen und relevanten Informationen. Um einen geordneten Ablauf zu gewährleisten, ist der
        Kunde verpflichtet dieser Aufforderung möglichst zeitnah (binnen 3 Werktagen) nachzukommen.
        Trägt der Kunde hierfür nicht Sorge, ist es SIRIUS erlaubt den eigenen zusätzlichen Aufwand
        zu berechnen. Hierfür wird pauschal pro Abrechnung und pro Gerät 10,- EUR (bei nachgewiesenem
        Aufwand auch mehr) in Rechnung gestellt.
      </>
    ),
  },
  {
    title: "§ 13 Datenschutz",
    body: (
      <>
        Wichtige Informationen zum Datenschutz finden Sie unter{" "}
        <Link to="/datenschutz" className="text-primary underline underline-offset-4">
          www.sirius-gmbh.de/datenschutz
        </Link>
        .
      </>
    ),
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
              SIRIUS GmbH document solutions, Freiburg-Hochdorf
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
                <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {s.body}
                </div>
              </section>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal>
          <div className="reveal mt-12 bg-secondary p-6 rounded-xl text-sm text-muted-foreground flex items-start gap-3">
            <FileText className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <p>
              Bei Fragen erreichen Sie uns unter{" "}
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
