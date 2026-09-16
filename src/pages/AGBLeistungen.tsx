import { Download, Printer, ScrollText } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import SectionReveal from "@/components/SectionReveal";

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-3">{children}</p>
);

const Sub = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-base font-semibold text-foreground mt-6 mb-2">{children}</h3>
);

const travelCosts = [
  ["Bis 50 km", "€ 70,00"],
  ["Bis 200 km", "€ 280,00"],
  ["Bis 500 km", "€ 600,00"],
  ["Über 500 km", "€ 750,00"],
];

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: "1. Abschluss von Einzelverträgen",
    body: (
      <>
        <P>
          a. Allgemeine Geschäfts- oder Einkaufsbedingungen des Kunden gelten gegenüber SI nur,
          soweit SI ihnen ausdrücklich schriftlich zugestimmt hat. Diese AGB gelten auch dann
          ausschließlich, wenn SI die Leistungen in Kenntnis entgegenstehender allgemeiner
          Geschäfts- oder Einkaufsbedingungen des Kunden vorbehaltlos ausführt.
        </P>
        <P>
          b. Alle leistungsbezogenen Angebote von SI erfolgen freibleibend, es sei denn, SI
          kennzeichnet das Angebot ausdrücklich als verbindlich. SI ist berechtigt, Angebote des
          Kunden innerhalb von zwei Wochen nach Eingang bei SI anzunehmen.
        </P>
        <P>
          c. Neben- und Zusatzabreden zu einem Einzelvertrag, Beschaffenheitsangaben über die
          Leistungen und Vereinbarungen, die jeweils vor, bei oder nach Abschluss eines
          Einzelvertrages abgegeben bzw. getroffen werden, bedürfen zu ihrer Wirksamkeit zumindest
          der Textform sowie einer ausdrücklichen Bezugnahme auf den betreffenden Einzelvertrag.
        </P>
        <P>
          d. Diese AGB gelten nicht nur für den ersten mit dem Kunden vereinbarten Einzelvertrag,
          sondern ausdrücklich auch für sämtliche weiteren Einzelverträge, insbesondere Folge- und
          Zusatzaufträge.
        </P>
      </>
    ),
  },
  {
    title: "2. Gegenstand der Leistung",
    body: (
      <>
        <P>
          a. SI erbringt für den Kunden die Leistungen nach Maßgabe des zugrundeliegenden
          Einzelvertrages und dieser AGB. Bei Widersprüchen haben die Bestimmungen des
          Einzelvertrages Vorrang.
        </P>
        <P>
          b. Die Leistungsbeschreibung gibt die von SI einzelvertraglich geschuldete Beschaffenheit
          der Leistung abschließend wieder. Änderungen der Leistungsbeschreibung erfolgen nur gemäß
          nachfolgender Ziff. 5 dieser AGB.
        </P>
        <P>
          c. Bietet SI dem Kunden in einem Angebot mehrere/unterschiedliche Leistungen (z.B.
          Überlassung von Software, Analyse-Support, Konfiguration, Implementierung etc.) sowie
          Preise an, welche den jeweiligen Leistungen zugeordnet werden können (Einzelpreise), liegt
          für jede dieser Leistungen ein rechtlich selbständiger individueller Einzelvertrag vor, es
          sei denn, dem Angebot von SI ist ausdrücklich zu entnehmen, dass SI einen einzigen
          Einzelvertrag über die Gesamtheit aller Leistungen anbieten will. Wird im Angebot von SI
          neben Einzelpreisen ein Gesamtpreis für mehrere Leistungen ausgewiesen, genügt dies allein
          nicht für die Annahme eines einzigen Einzelvertrages über die Gesamtheit aller Leistungen.
        </P>
        <P>
          d. SI räumt dem Kunden erst mit vollständiger Bezahlung der geschuldeten Vergütung das
          nicht ausschließliche, nicht übertragbare Recht ein, die Leistungen für den vertraglich
          vorausgesetzten Einsatzzweck in seinem Unternehmen zusammen mit der von SI überlassenen
          SI-Software zu nutzen, soweit nicht Abweichendes im Einzelvertrag vereinbart ist. Im
          Übrigen verbleiben alle Rechte an den Leistungsergebnissen bei SI.
        </P>
      </>
    ),
  },
  {
    title: "3. Zusammenarbeit der Parteien",
    body: (
      <P>
        Der Kunde und SI benennen jeweils einen Projektleiter als Ansprechpartner, die mit der
        Durchführung des Einzelvertrages zusammenhängende Entscheidungen unverzüglich herbeizuführen
        haben und für notwendige Informationen zur Verfügung stehen. SI hat den vom Kunden benannten
        Ansprechpartner einzuschalten, soweit die Durchführung des Einzelvertrages dies erfordert.
        Die Entscheidungen der Projektleiter sind zumindest in Textform festzuhalten.
      </P>
    ),
  },
  {
    title: "4. Leistungstermine und Verzug",
    body: (
      <>
        <P>
          a. Im Einzelvertrag vereinbarte Fristen und Leistungstermine sind unverbindliche Ziel- und
          Richtwerte, es sei denn, sie werden im Einzelvertrag ausdrücklich und zumindest in
          Textform als fester Leistungstermin vereinbart.
        </P>
        <P>
          b. SI kommt bei festen Leistungsterminen ferner nur dann in Verzug, wenn die Leistung
          fällig ist, der Kunde SI erfolglos eine angemessene schriftliche Nachfrist gesetzt hat und
          die Verzögerung von SI verschuldet ist.
        </P>
        <P>
          c. Die Einhaltung von festen Leistungsterminen durch SI setzt die rechtzeitige Vornahme
          aller Pflichten und Mitwirkungshandlungen des Kunden sowie die Einhaltung der vereinbarten
          Zahlungsbedingungen voraus. Werden diese Voraussetzungen vom Kunden (verschuldet wie
          unverschuldet) nicht rechtzeitig erfüllt, so verschieben sich die festen Leistungstermine
          der SI entsprechend. SI behält sich im Übrigen weitergehende gesetzliche Einreden und
          Einwendungen vor.
        </P>
        <P>
          d. Ist die Nichteinhaltung der Fristen oder Leistungstermine auf höhere Gewalt, z.B.
          Mobilmachung, Krieg, Aufruhr oder auf ähnliche Ereignisse, z.B. Streik, Aussperrung,
          zurückzuführen, verschieben sich die Fristen oder Leistungstermine um die Dauer der
          vorgenannten Leistungshindernisse entsprechend.
        </P>
        <P>
          e. Im Falle leichter Fahrlässigkeit ist ein Anspruch des Kunden auf Schadenersatz wegen
          Leistungsverzuges ausgeschlossen, im Übrigen begrenzt auf die Höhe des vorhersehbaren
          Schadens, maximal jedoch auf 5 % des vom Leistungsverzug betroffenen Leistungswertes. Vom
          Einzelvertrag kann der Kunde im Rahmen der gesetzlichen Bestimmungen nur zurücktreten,
          soweit die Verzögerung der Leistung von SI zu vertreten ist. Der Kunde ist verpflichtet,
          auf Verlangen von SI innerhalb einer angemessenen Frist zu erklären, ob er wegen der
          Verzögerung der Leistung vom Einzelvertrag zurücktritt oder auf die Leistung besteht. Die
          vorstehenden Haftungsbeschränkungen gelten nicht bei Vorsatz oder grober Fahrlässigkeit
          von SI.
        </P>
      </>
    ),
  },
  {
    title: "5. Verfahren für Leistungsänderungen (Change Request)",
    body: (
      <>
        <P>
          Beide Parteien können Änderungen der Leistungsbeschreibung (siehe Ziff. 2 Buchst. b dieser
          AGB) und Leistungserbringung vorschlagen. Derartige Vorschläge müssen zumindest in
          Textform erfolgen. Es gilt sodann folgendes Verfahren:
        </P>
        <P>
          a. SI wird jeden Änderungsvorschlag des Kunden sichten und ihm mitteilen, ob eine
          umfangreiche Prüfung dieses Änderungsvorschlages erforderlich ist oder nicht. SI kann
          umfangreiche Prüfungen von der Erstattung der damit verbundenen Kosten abhängig machen.
        </P>
        <P>
          b. Ist eine umfangreiche Prüfung des Änderungsvorschlages nicht erforderlich oder die
          beauftragte umfangreiche Prüfung abgeschlossen, wird SI dem Kunden entweder (i) mitteilen,
          dass der Änderungsvorschlag im Rahmen der vereinbarten Leistungen für SI nicht
          durchführbar ist oder (ii) ein schriftliches Angebot zur Durchführung der Änderungen
          (Änderungsangebot) unterbreiten. Das Änderungsangebot enthält insbesondere die Änderungen
          der Leistungsbeschreibung und deren Auswirkungen auf den Leistungszeitraum, die geplanten
          Termine und die Vergütung.
        </P>
        <P>
          c. Der Kunde wird ein Änderungsangebot innerhalb der dort genannten Annahmefrist
          (Bindefrist) entweder ablehnen oder die Annahme schriftlich oder in einer anderen zwischen
          den Parteien vereinbarten Form erklären.
        </P>
        <P>
          d. SI und der Kunde können vereinbaren, dass von einem Änderungsvorschlag betroffene
          Leistungen bis zur Beendigung der Prüfung, oder – soweit ein Änderungsangebot unterbreitet
          wird – bis zum Ablauf der Bindefrist unterbrochen werden.
        </P>
        <P>
          e. Bis zur Annahme des Änderungsangebots werden die Arbeiten auf der Grundlage des
          bisherigen Einzelvertrags weitergeführt. Die Leistungszeiträume verlängern sich um die
          Zahl der Kalendertage, an denen die Arbeiten im Zusammenhang mit dem Änderungsvorschlag
          oder seiner Prüfung unterbrochen wurden. SI kann für die Dauer der Unterbrechung eine
          angemessene Vergütung verlangen, soweit SI seine von der Unterbrechung betroffenen
          Arbeitnehmer nicht anderweitig eingesetzt oder einzusetzen böswillig unterlassen hat.
        </P>
        <P>
          f. Das Änderungsverfahren wird auf Anforderung von SI schriftlich oder in Textform auf
          einem Formular von SI dokumentiert, soweit nichts anderes vereinbart ist. Jede Änderung
          der Leistungsbeschreibung ist zumindest in Textform zu vereinbaren.
        </P>
        <P>g. Änderungsvorschläge sind an den Projektleiter der jeweils anderen Partei zu richten.</P>
        <P>
          h. Für Änderungsvorschläge von SI gelten die Ziffer 5. Buchstaben b. bis f. dieser AGB
          entsprechend.
        </P>
      </>
    ),
  },
  {
    title: "6. Pflichten des Kunden",
    body: (
      <>
        <P>
          a. Der Kunde ist verpflichtet, für die vollständige und pünktliche Erstellung der
          Leistungsbeschreibung gem. Ziff. 2. b dieser AGB Sorge zu tragen und an dieser
          mitzuwirken.
        </P>
        <P>
          b. Der Kunde ist verpflichtet, soweit erforderlich SI zu unterstützen sowie alle in der
          Betriebssphäre des Kunden zur ordnungsgemäßen Ausführung des Einzelvertrages
          erforderlichen Voraussetzungen zu schaffen. Der Kunde stellt auf Wunsch von SI
          unentgeltlich ausreichende Arbeitsplätze und Arbeitsmittel zur Verfügung. Ein Anspruch des
          Kunden auf Leistungserbringung vor Ort beim Kunden besteht nicht, soweit die Natur der zu
          erbringenden Leistung dies nicht erforderlich macht.
        </P>
        <P>
          c. Der Kunde sorgt dafür, dass fachkundiges Personal projektbegleitend für die
          Unterstützung von SI zur Verfügung steht.
        </P>
        <P>
          d. Der Kunde wird die in der Leistungsbeschreibung vereinbarten Testfälle und -daten zur
          Verfügung stellen. Unterlässt der Kunde die Übergabe solcher Testfälle und -daten, kann SI
          – ohne insoweit verpflichtet zu sein – selbst geeignete Testfälle gegen zusätzliche
          Vergütung auswählen und erstellen.
        </P>
        <P>
          e. Der Kunde hat SI bei der Beseitigung etwaiger Leistungsmängel, bei K&amp;I-Leistungen
          nach Maßgabe der Ziff. 14 dieser AGB, zu unterstützen, insbesondere auf Anforderung von SI
          einen Remote-Zugang auf das Kundensystem zu ermöglichen und erforderliches
          Analysematerial zur Verfügung zu stellen.
        </P>
        <P>
          f. Soweit nichts anderes vereinbart ist, wird der Kunde alle an SI übergebenen Unterlagen,
          Informationen und Daten bei sich zusätzlich so verwahren, dass diese bei Beschädigung und
          Verlust anhand von Datenträgern rekonstruiert werden können.
        </P>
        <P>
          g. Der Kunde darf nichts unternehmen, was einer unberechtigten Nutzung der Leistung
          Vorschub leisten könnte. Insbesondere darf er, wenn die Leistung die Erstellung von
          Software beinhaltet, nicht versuchen, die Software zu dekompilieren, außer er ist dazu
          aufgrund ausdrücklicher Regelung in der individuellen Leistungsvereinbarung berechtigt.
          Der Kunde wird SI unverzüglich unterrichten, wenn er Kenntnis davon hat, dass in seinem
          Bereich ein unberechtigter Zugriff droht oder erfolgt ist.
        </P>
      </>
    ),
  },
  {
    title: "7. Preise und Zahlungsbedingungen",
    body: (
      <>
        <P>
          a. Die im Einzelvertrag vereinbarten Preise verstehen sich ab Werk zuzüglich der jeweils
          geltenden gesetzlichen Umsatzsteuer und zuzüglich etwaiger Lieferkosten und
          Verpackungskosten. Preise werden vereinbart in Euro.
        </P>
        <P>
          b. Reisezeit gilt als Arbeitszeit. Anfallende Reisekosten werden pauschal in Abhängigkeit
          der Entfernung zwischen dem Sitz von SI (Freiburg-Hochdorf) und dem Einsatzort berechnet.
        </P>
        <div className="overflow-x-auto mb-3">
          <table className="w-full min-w-[320px] text-left border-collapse text-sm">
            <caption className="text-left text-sm font-semibold text-foreground mb-2">
              Inland
            </caption>
            <thead>
              <tr className="border-b border-border">
                <th className="py-2 pr-4 font-semibold text-foreground">Entfernung</th>
                <th className="py-2 font-semibold text-foreground">Pauschale</th>
              </tr>
            </thead>
            <tbody>
              {travelCosts.map(([d, v]) => (
                <tr key={d} className="border-b border-border/60">
                  <td className="py-2 pr-4">{d}</td>
                  <td className="py-2">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <P>
          c. Die Abrechnung der Leistungen erfolgt bei Support-Leistungen monatlich im Nachhinein,
          bei Schulungs-Leistungen vorab unverzüglich nach Abschluss des Einzelvertrages, bei
          K&amp;I-Leistungen nach Abnahme oder Teilabnahme, soweit sich aus Buchst. d nicht
          Abweichendes ergibt. SI prüft regelmäßig die Kreditwürdigkeit des Kunden und behält sich
          bei negativer Auskunft vor, Leistungen nur nach Vorkasse zu erbringen.
        </P>
        <P>
          d. Bei K&amp;I-Projekten mit einer Laufzeit von mehr als 14 Kalendertagen erfolgt die
          Abrechnung von erbrachten Leistungen am Ende des Monats, in dem die Leistung erbracht
          wurde. Bei Zahlungsverzug des Kunden ist SI berechtigt, die Leistungserbringung bis zur
          Zahlung aller offenen Forderungen auszusetzen. Die Möglichkeit der Geltendmachung weiterer
          Ansprüche von SI bleibt davon unberührt.
        </P>
        <P>
          e. Soweit nicht nach vorstehendem Buchst. c. gegen Vorkasse geleistet wurde, gilt ein
          Zahlungsziel von 7 Kalendertagen ab Datum der Rechnung.
        </P>
        <P>
          f. Zahlungen sind vorbehaltlich nachfolgendem Buchst. g. ohne Abzug auf die von SI
          genannte Bankverbindung zu überweisen.
        </P>
        <P>
          g. Der Kunde kann nur mit unbestrittenen oder rechtskräftig festgestellten Forderungen
          aufrechnen und alleine auf Grundlage solcher Forderungen etwaige gesetzliche
          Zurückbehaltungsrechte geltend machen. Ein Zurückbehaltungsrecht kann der Kunde ferner nur
          wegen Gegenforderungen ausüben, die auf demselben Einzelvertrag beruhen. Bei Mängeln kann
          der Kunde Zahlungen nur zu einem unter Berücksichtigung des Mangels verhältnismäßigen Teil
          zurückbehalten.
        </P>
        <P>
          h. SI berechnet Verzugszinsen in Höhe von 10 % über dem jeweils aktuellen
          EZB-Basiszinssatz, mindestens jedoch in Höhe von 12 % p.a., sofern der Kunde nicht
          nachweist, dass SI ein geringerer Schaden entstanden ist. SI bleibt es im Einzelfall
          vorbehalten, einen tatsächlich angefallenen höheren Zinsschaden geltend zu machen.
        </P>
      </>
    ),
  },
  {
    title: "8. Schutz personenbezogener Daten, Daten- und IT-Sicherheit",
    body: (
      <>
        <P>
          a. Falls und soweit SI im Zusammenhang mit den Leistungen Zugang zu personenbezogenen
          Daten des Kunden oder dessen Auftraggebern erhält, wird SI das anwendbare Datenschutzrecht
          beachten. Soweit der Kunde Informationen oder Berichte über den von SI betriebenen
          Datenschutz oder eine diesbezügliche Zertifizierung schriftlich verlangt, wird SI diese
          gegen angemessenen Kostenersatz zur Verfügung stellen. Sollte im Rahmen eines
          Einzelauftrags eine der Parteien darüber hinaus personenbezogene Daten im Auftrag der
          anderen Partei verarbeiten, werden die Parteien eine separate schriftliche Vereinbarung
          nach Maßgabe der jeweils aktuellen Allgemeinen Geschäftsbedingungen der SI über eine
          Auftragsdatenverarbeitung abschließen.
        </P>
        <P>
          b. Dem Kunden ist bekannt, dass eine elektronische unverschlüsselte Kommunikation (z.B.
          per E-Mail) mit Sicherheitsrisiken behaftet ist. Bei dieser Art der Kommunikation wird der
          Kunde daher keine Ansprüche geltend machen, die mit dieser Art der Kommunikation
          zusammenhängen oder durch das Fehlen einer Verschlüsselung begründet sind; es sei denn,
          eine derartige Verpflichtung zur Verschlüsselung wurde im Einzelauftrag ausdrücklich
          vereinbart.
        </P>
      </>
    ),
  },
  {
    title: "9. Beauftragung Dritter",
    body: (
      <>
        <P>
          a. Der Kunde ist damit einverstanden, dass SI zur Erfüllung seiner Leistungen verbundene
          Unternehmen von SI zur Leistungserfüllung heranzieht bzw. verbundene Unternehmen mit
          Leistungen und/oder Freiberufler unterbeauftragt. Die Unterbeauftragung sonstiger dritter
          Unternehmen bedarf der vorherigen Zustimmung seitens des Kunden.
        </P>
        <P>
          b. Wenn dritte Unternehmen als Subunternehmer durch SI eingeschaltet werden, so werden die
          vertraglichen Vereinbarungen so gestaltet, dass sie den sich aus diesen AGB ergebenden
          Anforderungen an Vertraulichkeit, Datenschutz und Datensicherheit entsprechen. Ebenso ist
          der Kunde berechtigt, auf eine zumindest in Textform erfolgende Anforderung von SI
          Auskunft über den wesentlichen Vertragsinhalt und die Umsetzung der datenschutzrelevanten
          Verpflichtungen des Unterauftragnehmers gegen Kostenersatz zu erhalten, erforderlichenfalls
          auch durch Einsicht in die relevanten Vertragsunterlagen.
        </P>
      </>
    ),
  },
  {
    title: "10. Allgemeine Haftung von SI und Verjährung",
    body: (
      <>
        <P>
          Soweit für den Fall des Leistungsverzugs nach Ziff. 4 dieser AGB nichts Abweichendes gilt
          oder nach dem Einzelvertrag nichts Abweichendes vereinbart ist, gilt für die Haftung von
          SI Folgendes:
        </P>
        <P>
          a. SI haftet dem Kunden stets (i) für die von ihm sowie seinen gesetzlichen Vertretern
          oder Erfüllungsgehilfen vorsätzlich oder grob fahrlässig verursachten Schäden, (ii) nach
          dem Produkthaftungsgesetz und (iii) für Schäden aus der Verletzung des Lebens, des Körpers
          oder der Gesundheit, die SI, seine gesetzlichen Vertreter oder Erfüllungsgehilfen zu
          vertreten haben.
        </P>
        <P>
          b. SI haftet bei leichter Fahrlässigkeit nicht, es sei denn, SI selbst hat eine wesentliche
          Vertragspflicht (Kardinalpflicht) verletzt. Diese Haftung ist bei Sach- und
          Vermögensschäden auf den vertragstypischen und vorhersehbaren Schaden beschränkt. Die
          Haftung für entgangenen Gewinn, ausgebliebene Einsparungen, Betriebsunterbrechungen und
          für sonstige entfernte Mangelfolgeschäden ist ausgeschlossen. Für einen einzelnen
          Schadensfall und pro Vertragsjahr ist die Haftung auf 10 % des vereinbarten Netto-Werts
          des betroffenen Einzelvertrags begrenzt. Die Parteien können bei Abschluss eines
          Einzelvertrages eine weitergehende Haftung pro Schadenfall oder Vertragsjahr gegen
          gesonderte Vergütung vereinbaren. Die Haftung gemäß vorstehendem Buchst. a. bleibt von
          diesem Absatz unberührt.
        </P>
        <P>
          c. Aus einer Garantieerklärung haftet SI nur auf Schadensersatz, wenn dies in der Garantie
          ausdrücklich übernommen wurde. Diese Haftung unterliegt bei leichter Fahrlässigkeit den
          Beschränkungen gemäß Buchst. b.
        </P>
        <P>
          d. Bei Verlust von Daten, Nachrichten und Informationen haftet SI nur für denjenigen
          Aufwand, der für die Wiederherstellung der Daten, Nachrichten und Informationen bei
          ordnungsgemäßer Sicherung durch den Kunden erforderlich ist. Bei leichter Fahrlässigkeit
          von SI tritt diese Haftung nur ein, wenn der Kunde unmittelbar vor der zum Datenverlust
          führenden Maßnahme eine ordnungsgemäße Datensicherung durchgeführt hat.
        </P>
        <P>
          e. Schadenersatzansprüche verjähren innerhalb eines Jahres ab dem gesetzlichen
          Verjährungsbeginn. Die gesetzlichen Fristen bleiben unberührt bei einer vorsätzlichen oder
          grob fahrlässigen Pflichtverletzung von SI sowie in den Fällen der Verletzung des Lebens,
          des Körpers oder der Gesundheit.
        </P>
        <P>
          f. Für Aufwendungsersatzansprüche und sonstige Haftungsansprüche des Kunden gegen SI
          gelten vorstehende Buchstaben a. bis e. dieser Ziffer entsprechend.
        </P>
      </>
    ),
  },
  {
    title: "11. Vertraulichkeitsverpflichtung",
    body: (
      <>
        <P>
          a. Jede Partei verpflichtet sich, den Inhalt jedes Einzelvertrages sowie die ihm von der
          anderen Partei – in welcher Form auch immer – vor oder während des Einzelvertrages
          mitgeteilten oder zugänglich gemachten Daten, insbesondere Zugangsdaten, Software,
          Betriebsgeheimnisse, technisches Know-how oder sonstige Informationen, gleich welchen
          Inhalts, Dritten gegenüber geheim zu halten, sie nur für Zwecke des betreffenden
          Einzelvertrages zu verwenden und sie ohne ausdrückliche schriftliche Zustimmung der
          anderen Partei – weder ganz noch teilweise – für eigene Zwecke zu verwerten und seine
          Mitarbeiter sowie sonst damit in Berührung kommende Dritte hierzu zu verpflichten.
        </P>
        <P>
          b. Buchst. a gilt nicht, solange und soweit derartig vertrauliche Informationen (i) dem
          jeweiligen Empfänger bereits vorher ohne Verpflichtung zur Geheimhaltung bekannt waren
          oder (ii) allgemein bekannt sind oder werden, ohne dass dies der jeweilige Empfänger zu
          vertreten hat oder (iii) dem jeweiligen Empfänger von einem Dritten ohne
          Geheimhaltungsverpflichtung mitgeteilt bzw. überlassen werden oder (iv) vom Empfänger
          nachweislich unabhängig entwickelt worden sind oder (v) aufgrund rechtlicher Vorschriften
          Behörden zugänglich zu machen sind oder (vi) von der überlassenden Partei zur
          Bekanntmachung schriftlich freigegeben worden sind.
        </P>
      </>
    ),
  },
  {
    title: "12. Sonstige Bedingungen",
    body: (
      <>
        <P>
          a. Jeder Einzelvertrag zwischen SI und dem Kunden und dessen Zustandekommen oder
          Beendigung unterliegen dem Recht der Bundesrepublik Deutschland. UN-Kaufrecht (CISG)
          findet keine Anwendung.
        </P>
        <P>
          b. Sollte eine Bestimmung eines Einzelvertrages nichtig sein oder werden, so berührt dies
          die Wirksamkeit dieses Einzelvertrages nicht, es sei denn, das Festhalten am Einzelvertrag
          würde eine unzumutbare Härte für eine der Parteien darstellen.
        </P>
        <P>
          c. Der Kunde wird für die Leistungen anzuwendende Import- und Export-Vorschriften
          eigenverantwortlich beachten, insbesondere solche der USA. Bei grenzüberschreitender
          Leistung trägt der Kunde anfallende Zölle, Gebühren und sonstige Abgaben. Der Kunde wird
          gesetzliche oder behördliche Verfahren im Zusammenhang mit grenzüberschreitenden
          Lieferungen oder Leistungen eigenverantwortlich abwickeln, außer soweit Anderes
          ausdrücklich vereinbart ist.
        </P>
        <P>
          d. Änderungen und Ergänzungen eines Einzelvertrages müssen zumindest in Textform
          vereinbart werden. Dies gilt auch im Falle einer Änderung dieses Buchst. d.
        </P>
        <P>
          e. Der Inhalt eines Einzelvertrags ersetzt alle vorausgehenden Erklärungen von SI in Bezug
          auf den Leistungsgegenstand dieses Einzelauftrags.
        </P>
        <P>
          f. Gerichtsstand für jede Streitigkeit aus und im Zusammenhang mit einem Einzelvertrag –
          auch in Bezug auf dessen Zustandekommen und dessen Beendigung – mit einem Kaufmann, einer
          juristischen Person des öffentlichen Rechts oder einem öffentlich-rechtlichen
          Sondervermögen ist der Sitz von SI. Die vorstehende Wahl dieses Gerichtsstands ist nur für
          den Kunden ausschließlich.
        </P>
      </>
    ),
  },
  {
    title: "13. Ergänzende Regelungen für Support-Leistungen",
    body: (
      <>
        <Sub>13.1 Supporttermine</Sub>
        <P>
          Verschiebt oder storniert der Kunde vereinbarte Supporttermine aus Gründen, die der Kunde
          zu vertreten hat, ist SI berechtigt, externe Stornierungskosten (Hotel, Flug o.ä.) und den
          folgenden pauschalierten Schadenersatz in Rechnung zu stellen: Bei einer Verschiebung oder
          Stornierung von 7 oder weniger als 7 Kalendertagen, aber mehr als 3 Kalendertagen vor dem
          vereinbarten Supporttermin 50 % der für diesen Termin veranschlagten Vergütung; bei einer
          Stornierung von weniger als 3 Kalendertagen vor dem Termin oder einem Nichterscheinen des
          Kunden zum Termin 100 % der für diesen Termin veranschlagten Vergütung. Weitergehende
          Schadenersatzansprüche bleiben unberührt.
        </P>
        <Sub>13.2 Rechte an den Supportergebnissen</Sub>
        <P>
          a. Die wesentlichen Ergebnisse, die bei der Durchführung der Support-Leistungen geschaffen
          werden, werden von SI dokumentiert und dem Kunden bei Abschluss der Support-Leistungen
          übergeben. Zu den Supportergebnissen gehören nicht Konzepte oder Vorentwürfe.
        </P>
        <P>
          b. Nach vollständiger Zahlung der Support-Leistung erwirbt der Kunde das
          nicht-ausschließliche, nicht übertragbare und nicht unterlizenzierbare Recht, die
          Supportergebnisse für die eigenen Zwecke des Kunden zu verwenden. Der Kunde ist jedoch
          nicht berechtigt, von SI schriftlich dokumentierte Supportergebnisse zu verändern oder zu
          vervielfältigen, es sei denn, der Einzelvertrag lässt dies ausdrücklich zu. Sollte der
          Einzelvertrag dem Kunden das Recht zur Vervielfältigung ausnahmsweise einräumen, hat der
          Kunde einen Urheberrechtsvermerk zu Gunsten von SI anzubringen.
        </P>
      </>
    ),
  },
  {
    title: "14. Ergänzende Regelungen für K&I-Leistungen",
    body: (
      <>
        <Sub>14.1 Abnahme; Teilabnahme von Teilleistungen</Sub>
        <P>
          a. SI wird dem Projektleiter des Kunden die Fertigstellung der K&amp;I-Leistung zumindest
          in Textform anzeigen. Der Kunde wird die K&amp;I-Leistung auf seine Kosten unverzüglich
          nach Zugang der Fertigstellungsanzeige – jedoch innerhalb von nicht mehr als 7
          Kalendertagen – abnehmen. Dies gilt auch, wenn SI die Fertigstellung einer abgrenzbaren
          Teilleistung anzeigt. Der Kunde wird die in der K&amp;I-Leistungsbeschreibung vereinbarten
          Tests und Testpläne einsetzen.
        </P>
        <P>
          b. Der Kunde wird SI während oder nach der Abnahme auftretende Mängel unverzüglich,
          spätestens sieben Kalendertage ab Kenntnis, mitteilen.
        </P>
        <P>
          c. Der Kunde hat Mängel in nachvollziehbarer und detaillierter Form unter Angabe aller für
          die Mängelerkennung und -analyse zweckdienlichen Informationen zumindest in Textform zu
          melden. Anzugeben sind dabei insbesondere die Arbeitsschritte, die zum Auftreten des
          Mangels geführt haben, die Erscheinungsform sowie die Auswirkungen des Mangels. Auf die
          Mitwirkungspflichten der Ziff. 6 dieser AGB wird verwiesen.
        </P>
        <P>
          d. Unterbleibt die Abnahme der K&amp;I-Leistung oder der Teilleistung, gilt die
          K&amp;I-Leistung oder Teilleistung nach Ablauf von 7 Kalendertagen nach der
          Fertigstellungsanzeige in Textform als abgenommen, wenn SI auf den Fristbeginn zusammen
          mit der Fertigstellungsanzeige hingewiesen hat. Dieselbe Rechtsfolge ergibt sich auch für
          den Fall der Produktivsetzung der Leistungen oder Teilleistungen durch den Kunden.
        </P>
        <P>
          e. Erfolgt die Meldung etwaiger Mängel nicht in Form von Buchst. c dieser Ziffer, so gilt
          die Leistung ebenfalls nach Ablauf von sieben Kalendertagen als abgenommen, wenn SI den
          Kunden schriftlich zur Einhaltung der Darlegungserfordernisse unter ausdrücklichem Hinweis
          auf diese Folge auffordert.
        </P>
        <P>
          f. Haben sich die Parteien im Einzelvertrag auf Teilabnahmen von Teilleistungen geeinigt
          und hat der Kunde Teilleistungen teilabgenommen, steht SI ein Vergütungsanspruch in Bezug
          auf die teilabgenommenen Teilleistungen auch dann zu, wenn der Kunde die Endabnahme
          verweigert. Dieser Vergütungsanspruch bestimmt sich unter Zugrundelegung der in diesem
          Fall von SI offenzulegenden Kalkulation des Arbeitsaufwandes für das Gesamtprojekt nach
          dem Verhältnis der erreichten Teilleistung zur Gesamtleistung.
        </P>

        <Sub>14.2 Mängelansprüche des Kunden</Sub>
        <P>
          a. Bei einer nur unerheblichen Abweichung der K&amp;I-Leistungen von der vertragsgemäßen
          Beschaffenheit oder Brauchbarkeit bestehen keine Sachmängelansprüche. Ansprüche wegen
          Mängeln bestehen auch nicht bei übermäßiger oder unsachgemäßer Nutzung, natürlichem
          Verschleiß, Versagen von Komponenten der Systemumgebung, nicht reproduzierbaren oder
          anderweitig durch den Kunden nachweisbaren Fehlern oder bei Schäden, welche aufgrund
          besonderer äußerer Einflüsse entstehen, die nach dem Einzelvertrag nicht vorausgesetzt
          sind. Dies gilt auch bei nachträglicher Veränderung oder Instandsetzung der
          K&amp;I-Leistung durch den Kunden oder Dritte, außer damit ist eine Erschwerung der
          Analyse und der Beseitigung eines Sachmangels nicht verbunden. Für die Mitteilung von
          Mängeln gilt insbesondere vorstehende Ziffer 14.1 Buchst. c dieser AGB.
        </P>
        <P>
          b. Stehen dem Kunden Sachmängelansprüche zu, hat er zunächst nur das Recht auf
          Nacherfüllung innerhalb einer angemessenen Frist. Die Nacherfüllung beinhaltet nach Wahl
          von SI entweder Nachbesserung oder die Lieferung einer Ersatzsoftware. Schlägt die
          Nacherfüllung fehl oder ist sie aus anderen Gründen nicht durchzuführen, kann der Kunde
          unter den gesetzlichen Voraussetzungen die Vergütung mindern, von dem Einzelvertrag
          zurücktreten und/oder Schadens- oder Aufwendungsersatz verlangen. Für Schadensersatz- und
          Aufwendungsersatzansprüche gilt Ziffer 10 dieser AGB ergänzend. Der Kunde übt ein ihm
          zustehendes Wahlrecht für Mangelansprüche innerhalb einer angemessenen Frist aus, in der
          Regel innerhalb von 14 Kalendertagen.
        </P>
        <P>
          c. Ansprüche wegen eines Sachmangels verjähren innerhalb eines Jahres ab Abnahme. Die
          Bearbeitung einer Sachmangelanzeige des Kunden durch SI führt nur zur Hemmung der
          Verjährung, soweit die gesetzlichen Voraussetzungen dafür vorliegen. Ein Neubeginn der
          Verjährung tritt dadurch nicht ein. Eine Nacherfüllung (Neulieferung oder Nachbesserung)
          kann ausschließlich auf die Verjährung des die Nacherfüllung auslösenden Mangels Einfluss
          haben.
        </P>

        <Sub>14.3 Rechtsmängelansprüche des Kunden</Sub>
        <P>
          a. Für Verletzungen von gewerblichen Schutzrechten und Urheberrechten (im Folgenden:
          Schutzrechte) Dritter durch die K&amp;I-Leistungen haftet SI nach Maßgabe von Buchst. b
          nur, falls sämtliche der folgenden Voraussetzungen vorliegen:
        </P>
        <ul className="list-disc pl-6 mb-3 space-y-1">
          <li>
            (i) der Kunde nutzt die K&amp;I-Leistungen vertragsgemäß, insbesondere im vertraglich
            vorgesehenen Nutzungsumfeld;
          </li>
          <li>
            (ii) die Nutzung der von SI gelieferten K&amp;I-Leistungen durch den Kunden beschränkt
            sich auf die Europäische Union und den Europäischen Wirtschaftsraum;
          </li>
          <li>
            (iii) der Kunde hat SI unverzüglich darüber berichtet, dass ein Dritter gegenüber dem
            Kunden die Verletzung von Schutzrechten geltend macht;
          </li>
          <li>(iv) SI hat die Schutzrechtsverletzung grob fahrlässig oder vorsätzlich verursacht.</li>
        </ul>
        <P>
          b. Unter den in Buchst. a genannten Voraussetzungen haftet SI ausschließlich wie folgt: SI
          wird nach eigener Wahl und auf eigene Kosten (i) dem Kunden das Recht zur Nutzung der
          K&amp;I-Leistungen verschaffen oder (ii) die K&amp;I-Leistungen rechtsverletzungsfrei
          gestalten oder (iii) die K&amp;I-Leistungen unter Erstattung der dafür vom Kunden
          geleisteten Vergütung (abzüglich einer angemessenen Nutzungsentschädigung) zurücknehmen,
          wenn SI keine andere Abhilfe mit angemessenem Aufwand erzielen kann. Die Interessen des
          Kunden werden dabei angemessen berücksichtigt.
        </P>
        <P>
          c. Ansprüche des Kunden wegen Schutzrechtsverletzungen verjähren entsprechend Ziffer 14.2
          Buchst. c. dieser AGB.
        </P>
      </>
    ),
  },
  {
    title: "15. Ergänzende Regelungen für Schulungs-Leistungen",
    body: (
      <>
        <Sub>15.1 Leistungsgegenstand und -umfang</Sub>
        <P>
          a. Schulungs-Leistungen finden in den Räumen von SI oder direkt beim Kunden statt.
          Einzelheiten werden ebenfalls in dem jeweiligen Einzelvertrag vereinbart.
        </P>
        <P>
          b. Schulungs-Leistungen beim Kunden vor Ort werden jedenfalls exklusiv für den Kunden
          durchgeführt. Bei Schulungs-Leistungen, die bei SI vor Ort stattfinden, ist im Zweifel die
          Teilnahme weiterer Kunden gestattet (offener Teilnehmerkreis), es sei denn, der
          Einzelvertrag schließt dies ausdrücklich aus.
        </P>
        <P>
          c. Die Auswahl und Anzahl der Teilnehmer wird nach billigem Ermessen von SI festgelegt, es
          sei denn, die betreffende Schulung oder das Seminar erfolgt nach vorstehendem Buchst. b.
          exklusiv für den Kunden und dessen Mitarbeiter. SI wird bei der vorgenannten
          Ermessensentscheidung insbesondere Folgendes berücksichtigen: die räumlichen Kapazitäten,
          etwaige Vorgaben des Schulungs- und Seminarziels für die Anzahl und die Auswahl der
          Teilnehmer, die Reihenfolge des Eingangs von Anmeldungen.
        </P>
        <P>
          d. Wenn SI vor Ort beim Kunden schult, hat der Kunde die notwendige Ausstattung des
          Schulungsraumes in seinem Hause bereitzustellen, es sei denn, im Einzelvertrag ist
          Abweichendes vereinbart oder der Kunde hat SI spätestens 14 Tage vor Schulungs- bzw.
          Seminarbeginn zumindest in Textform darüber informiert, welche technischen Ausstattungen
          von SI beizustellen bzw. beim Kunden zu installieren sind.
        </P>
        <P>
          e. Bei ganztägigen Schulungs-Leistungen ist für die Dauer der Schulung eine angemessene
          Verpflegung im Zweifel im Leistungsumfang enthalten. Bei mehrtägigen Schulungs-Leistungen
          hat sich der Kunde um Übernachtungsmöglichkeiten selbst zu kümmern.
        </P>
        <P>
          f. Der Kunde hat keinen Anspruch auf Schulungsunterlagen, es sei denn, der betreffende
          Einzelvertrag sieht dies ausdrücklich vor. Stellt SI Schulungsunterlagen zur Verfügung,
          erhält der Kunde an diesen ein einfaches Nutzungsrecht für interne Zwecke des Kunden. Jede
          Form der Vervielfältigung der Schulungs- und Seminarunterlagen, ganz oder wesentlicher
          Teile hieraus, sowie deren Verbreitung bedarf der vorausgehenden schriftlichen Zustimmung
          durch SI oder einer diesbezüglichen Vereinbarung im Einzelvertrag.
        </P>

        <Sub>15.2 Vergütung und Stornierung von Schulungs-Leistungen</Sub>
        <P>
          a. Soweit der Einzelvertrag nicht Abweichendes vorsieht, versteht sich die
          einzelvertraglich vereinbarte Vergütung für Schulungs-Leistungen
        </P>
        <ul className="list-disc pl-6 mb-3 space-y-1">
          <li>
            inklusive Verpflegung, Vorbereitungsaufwand von SI und etwaiger Schulungsunterlagen für
            die Teilnehmer;
          </li>
          <li>
            zuzüglich MwSt., etwaiger Schulungsunterlagen für Nichtteilnehmer und bei Schulungen und
            Seminaren beim Kunden vor Ort zzgl. etwaiger Reisekosten von SI.
          </li>
        </ul>
        <P>
          b. Geht die Vergütung nicht vor Schulungsbeginn mit Teilnehmerkennung bei SI ein, kann SI
          die Teilnahme an der Schulung verweigern.
        </P>
        <P>
          c. Die Vergütung von Schulungsleistungen, die spätestens 14 Kalendertage vor dem
          Schulungs- und Seminartermin storniert werden, wird von SI auf Anforderung des Kunden zu
          75 % erstattet. Bei einer Stornierung von weniger als 7 Kalendertagen vor dem
          Schulungstermin erstattet SI auf Anforderung des Kunden 50 % der vereinbarten Vergütung.
          Bei Stornierungen von weniger als 3 Kalendertagen werden 25 % der vereinbarten Vergütung
          auf Anforderung des Kunden erstattet. Stornierungen und Erstattungsaufforderung müssen
          jeweils schriftlich erfolgen.
        </P>
        <P>
          d. Das Nichterscheinen eines Teilnehmers gilt als Stornierung und es werden 25 % der
          vereinbarten Vergütung auf Anforderung des Kunden erstattet. Hat der Teilnehmer das
          Nichterscheinen nicht zu vertreten und entschuldigt er sich schriftlich vor dem
          betreffenden Schulungs- und Seminartermin, erstattet SI auf Anforderung des Kunden
          jedenfalls 75 % der vereinbarten Vergütung. Satz 4 des vorstehenden Buchst. c. dieser
          Ziffer gilt entsprechend.
        </P>

        <Sub>15.3 Terminverschiebung, Änderungen und Absage durch SI</Sub>
        <P>
          a. SI ist berechtigt, eine Schulung wegen zu geringer Teilnehmerzahl oder aus Gründen, die
          SI nicht zu vertreten hat, abzusagen. In diesem Fall informiert SI den Kunden umgehend und
          erstattet die gegebenenfalls bereits gezahlte Vergütung.
        </P>
        <P>
          b. SI behält sich bei Vorliegen wichtiger Gründe die Änderung von Terminen, Referenten
          sowie geringfügige Änderungen des Schulungsinhalts nach dem billigen Ermessen von SI vor.
          Auch in diesem Fall informiert SI den Kunden umgehend.
        </P>
      </>
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

        <SectionReveal>
          <div className="reveal mb-8 text-muted-foreground leading-relaxed">
            <P>Die SIRIUS GmbH (SI) erbringt in Bezug auf die DocuWare Software</P>
            <ul className="list-disc pl-6 mb-3 space-y-1">
              <li>Prozessanalyse-Support (Support-Leistungen)</li>
              <li>Konfigurations- und Implementierungsleistungen (K&amp;I-Leistungen)</li>
              <li>Schulungen und Seminare (Schulungs-Leistungen)</li>
            </ul>
            <P>
              (Support-, K&amp;I-Leistungen und Schulungs-Leistungen jeweils einzeln oder insgesamt
              auch: Leistungen) für Unternehmen im Sinne von § 14 BGB (im Folgenden: Kunde) aufgrund
              der nachstehenden Allgemeinen Geschäftsbedingungen (im Folgenden: AGB), soweit SI und
              der Kunde im Einzelfall aufgrund eines Angebots und dessen Annahme (im Folgenden:
              Einzelvertrag) nicht Abweichendes zumindest in Textform vereinbaren.
            </P>
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
