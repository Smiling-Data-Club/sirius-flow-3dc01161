import type { ReactNode } from "react";
import { Mail } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SectionReveal from "@/components/SectionReveal";
import { oeffneCookieEinstellungen } from "@/lib/consent";

// Datenschutzerklärung. Bei neuen Formularen, Tracking oder externen Diensten
// hier nachziehen (siehe AGENTS.md). Ändert sich der Tracking-Umfang, VERSION in
// src/lib/consent.ts hochzählen.

const Abschnitt = ({ titel, children }: { titel: string; children: ReactNode }) => (
  <section className="space-y-3">
    <h2 className="font-bold text-2xl text-primary">{titel}</h2>
    <div className="space-y-3 leading-relaxed text-muted-foreground">{children}</div>
  </section>
);

const Liste = ({ children }: { children: ReactNode }) => (
  <ul className="list-disc pl-5 space-y-1.5">{children}</ul>
);

const ExtLink = ({ href, children }: { href: string; children: ReactNode }) => (
  <a className="text-primary underline underline-offset-2 break-words" href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

const CookieLink = () => (
  <button type="button" onClick={oeffneCookieEinstellungen} className="text-primary underline underline-offset-2">
    Cookie-Einstellungen
  </button>
);

const Datenschutz = () => (
  <PageLayout
    title="Datenschutzerklärung — SIRIUS GmbH"
    description="Datenschutzerklärung der SIRIUS GmbH document solutions."
  >
    <header className="pt-12 pb-16 px-6 md:px-8 max-w-5xl mx-auto">
      <SectionReveal>
        <div className="reveal space-y-4">
          <h1 className="font-extrabold text-5xl md:text-6xl tracking-tighter leading-tight">
            Datenschutz-<br />erklärung
          </h1>
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-tighter">Stand: November 2026</p>
        </div>
      </SectionReveal>
    </header>

    <main className="px-6 md:px-8 pb-32 max-w-3xl mx-auto space-y-14">
      <Abschnitt titel="1. Verantwortlicher">
        <p>
          <strong className="text-foreground">SIRIUS GmbH document solutions</strong>
          <br />
          Abrichstrasse 23, 79108 Freiburg-Hochdorf
          <br />
          Telefon: (0761) 704070 · E-Mail: info@sirius-gmbh.de
        </p>
        <p>
          <strong className="text-foreground">Datenschutzbeauftragter:</strong> Christian Klose, E-Mail:{" "}
          <a className="text-primary underline underline-offset-2" href="mailto:datenschutz@sirius-gmbh.de">
            datenschutz@sirius-gmbh.de
          </a>
        </p>
      </Abschnitt>

      <Abschnitt titel="2. Allgemeines">
        <p>
          Sie können unsere Website grundsätzlich nutzen, ohne Angaben zu Ihrer Person zu machen. Personenbezogene Daten
          verarbeiten wir nur, soweit es für die Bereitstellung der Website, die Bearbeitung Ihrer Anfragen oder auf
          Grundlage Ihrer Einwilligung erforderlich ist. Rechtsgrundlagen sind insbesondere Art. 6 Abs. 1 lit. a DSGVO
          (Einwilligung), lit. b (Vertrag und vorvertragliche Maßnahmen), lit. c (rechtliche Pflicht) und lit. f
          (berechtigtes Interesse). Für das Speichern von und den Zugriff auf Informationen in Ihrem Endgerät gilt
          zusätzlich § 25 TDDDG.
        </p>
      </Abschnitt>

      <Abschnitt titel="3. Hosting und Server-Logfiles">
        <p>
          Unsere Website wird bei Netlify gehostet (Netlify, Inc., 101 2nd Street, San Francisco, CA 94105, USA). Beim
          Aufruf der Website verarbeitet Netlify technisch notwendige Daten, insbesondere IP-Adresse, Datum und Uhrzeit,
          aufgerufene Seite, Browser und Betriebssystem (Server-Logfiles). Das ist erforderlich, um die Website
          auszuliefern und vor Angriffen zu schützen (Art. 6 Abs. 1 lit. f DSGVO).
        </p>
        <p>
          Netlify kann Daten in den USA verarbeiten. Netlify ist nach dem EU-US Data Privacy Framework zertifiziert
          (Angemessenheitsbeschluss der EU-Kommission vom 10.07.2023). Ergänzend gelten die Standardvertragsklauseln der
          EU-Kommission aus unserem Vertrag zur Auftragsverarbeitung mit Netlify.
        </p>
        <p>
          Unsere Domain und die Namensauflösung (DNS) verwalten wir bei der IONOS SE, Elgendorfer Str. 57, 56410
          Montabaur. Die Inhalte der Website liefert IONOS nicht aus.
        </p>
        <p>
          Die Website ist durchgängig per TLS verschlüsselt (erkennbar an „https://“ und dem Schloss-Symbol im Browser).
        </p>
      </Abschnitt>

      <Abschnitt titel="4. Kontakt per E-Mail und Telefon">
        <p>
          Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir Ihre Angaben, um Ihre Anfrage zu bearbeiten
          (Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO). Wir löschen die Daten, sobald sie nicht mehr erforderlich sind, sofern
          keine gesetzlichen Aufbewahrungspflichten bestehen.
        </p>
      </Abschnitt>

      <Abschnitt titel="5. Bewerbungen">
        <p>
          Das Bewerbungsformular auf unserer Karriereseite überträgt keine Daten an uns, sondern öffnet Ihr E-Mail-Programm
          mit einer vorbereiteten Nachricht. Erst wenn Sie diese abschicken, erhalten wir Ihre Bewerbung. Wir verarbeiten
          Ihre Angaben zur Durchführung des Bewerbungsverfahrens (§ 26 BDSG, Art. 6 Abs. 1 lit. b DSGVO). Kommt kein
          Arbeitsverhältnis zustande, löschen wir Ihre Unterlagen 6 Monate nach Abschluss des Verfahrens, sofern Sie nicht
          in eine längere Speicherung eingewilligt haben.
        </p>
      </Abschnitt>

      <Abschnitt titel="6. Service-Anfragen, Terminbuchung und Fernwartung">
        <Liste>
          <li>
            <strong className="text-foreground">Service-Formular:</strong> Der Link zur Service-Anfrage führt zu einem
            Formular von Zoho Forms (Zoho Corporation B.V., Beneluxlaan 4B, 3527 HS Utrecht, Niederlande). Ihre Angaben
            werden in Rechenzentren von Zoho in der EU verarbeitet und dienen der Bearbeitung Ihrer Anfrage (Art. 6 Abs. 1
            lit. b DSGVO).
          </li>
          <li>
            <strong className="text-foreground">Terminbuchung:</strong> Über einen Link gelangen Sie zu Zoho Bookings
            (Anbieter wie oben). Dort verarbeiten wir Ihre Angaben zur Vereinbarung des Termins.
          </li>
          <li>
            <strong className="text-foreground">Fernwartung:</strong> Der Link „TeamViewer“ führt zur Website der
            TeamViewer Germany GmbH, Göppingen. Daten werden erst übertragen, wenn Sie die Software herunterladen und eine
            Sitzung starten.
          </li>
        </Liste>
        <p>
          Für technischen Support kann Zoho im Einzelfall auch von Indien aus (Zoho Corporation Pvt. Ltd.) auf die in der
          EU gespeicherten Daten zugreifen. Grundlage sind die Standardvertragsklauseln der EU-Kommission. Weitere
          Informationen: <ExtLink href="https://www.zoho.com/de/privacy.html">www.zoho.com/de/privacy.html</ExtLink>
        </p>
      </Abschnitt>

      <Abschnitt titel="7. Webanalyse mit Zoho PageSense">
        <p>
          Mit Ihrer Einwilligung nutzen wir Zoho PageSense (Anbieter: Zoho Corporation B.V., siehe oben), um zu verstehen,
          wie unsere Website genutzt wird, und sie zu verbessern. Die Daten werden in Rechenzentren von Zoho in der EU
          verarbeitet. Dabei können erhoben werden:
        </p>
        <Liste>
          <li>Seitenaufrufe, Verweildauer und Weg durch die Website</li>
          <li>Klicks, Mausbewegungen und Scrollverhalten – daraus entstehen zusammengefasste Heatmaps</li>
          <li>
            Sitzungsaufzeichnungen: Ihr Besuch wird als Ablauf aus Seitenaufrufen, Klicks und Scrollbewegungen
            aufgezeichnet. Eingaben in Formularfeldern werden dabei unkenntlich gemacht und nicht aufgezeichnet. Die
            Karriereseite und die Zählerstand-Meldung werden nicht aufgezeichnet.
          </li>
          <li>Gerätetyp, Betriebssystem, Browser und Bildschirmauflösung</li>
          <li>Ungefährer Standort auf Basis der IP-Adresse</li>
          <li>Verweisende Seite (Referrer)</li>
        </Liste>
        <p>
          Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG). Das PageSense-Script wird
          erst geladen, wenn Sie im Cookie-Banner der Kategorie „Statistik &amp; Marketing“ zugestimmt haben. Sie können
          Ihre Einwilligung jederzeit mit Wirkung für die Zukunft über die <CookieLink /> widerrufen (auch unten auf jeder
          Seite). Beim Widerruf löschen wir die PageSense-Cookies in Ihrem Browser.
        </p>
        <p>
          Die erhobenen Daten löschen wir, sobald sie für die Auswertung nicht mehr benötigt werden. Zoho PageSense löscht
          sie zudem automatisch nach Ablauf der Aufbewahrungsfrist, die für unseren Tarif gilt. Zum möglichen
          Support-Zugriff aus Indien siehe Abschnitt 6.
        </p>
      </Abschnitt>

      <Abschnitt titel="8. Externe Medien: YouTube und Social-Media-Beiträge">
        <p>
          Auf unserer Startseite binden wir Videos von YouTube ein (Google Ireland Limited, Gordon House, Barrow Street,
          Dublin 4, Irland), im erweiterten Datenschutzmodus (youtube-nocookie.com). Auf der Seite „Social Hub“ zeigen wir
          Beiträge aus unseren Kanälen bei LinkedIn, Instagram, TikTok und YouTube.
        </p>
        <p>
          Diese Inhalte werden{" "}
          <strong className="text-foreground">
            erst geladen, wenn Sie auf „Inhalt laden“ klicken oder der Kategorie „Externe Medien“ zugestimmt haben.
          </strong>{" "}
          Dann baut Ihr Browser eine Verbindung zu folgenden Servern auf und überträgt dabei mindestens Ihre IP-Adresse und
          technische Angaben zu Ihrem Browser:
        </p>
        <Liste>
          <li>
            <strong className="text-foreground">YouTube/Google</strong> – Videos und Vorschaubilder. YouTube kann beim
            Abspielen Cookies oder ähnliche Speicher setzen. Google LLC (USA) ist nach dem EU-US Data Privacy Framework
            zertifiziert.
          </li>
          <li>
            <strong className="text-foreground">LinkedIn</strong> – Bilder der LinkedIn-Beiträge. LinkedIn Corporation
            (USA) ist nach dem EU-US Data Privacy Framework zertifiziert.
          </li>
          <li>
            <strong className="text-foreground">wsrv.nl (früher images.weserv.nl)</strong> – ein Bilddienst, über den wir
            die Vorschaubilder von Instagram und TikTok laden. Ihr Browser verbindet sich dabei nur mit wsrv.nl, nicht mit
            Instagram oder TikTok. Der Dienst läuft nach eigenen Angaben auf Servern in der EU.
          </li>
        </Liste>
        <p>
          Instagram und TikTok erhalten erst dann Daten, wenn Sie einen Beitrag anklicken und deren Website öffnen. Es
          gelten dann deren Datenschutzbestimmungen.
        </p>
        <p>
          Die Texte und Verweise der Beiträge speichern wir in unserer Datenbank bei Supabase (Supabase Inc., USA;
          Speicherort der Daten: Frankfurt am Main). Dabei werden keine Daten über Sie gespeichert.
        </p>
        <p>
          Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG). Sie können sie jederzeit
          über die <CookieLink /> widerrufen.
        </p>
        <p>
          <strong className="text-foreground">Links zu sozialen Netzwerken:</strong> Die Symbole im Footer sind einfache
          Links. Daten werden erst übertragen, wenn Sie einen Link anklicken.
        </p>
      </Abschnitt>

      <Abschnitt titel="9. Cookies und lokale Speicherung">
        <p className="font-semibold text-foreground">
          Technisch notwendig (§ 25 Abs. 2 Nr. 2 TDDDG, Art. 6 Abs. 1 lit. f DSGVO)
        </p>
        <Liste>
          <li>
            <code>sirius-einwilligung</code> (Local Storage): speichert Ihre Auswahl im Cookie-Banner, bis Sie sie ändern
            oder den Browserspeicher löschen
          </li>
        </Liste>
        <p className="font-semibold text-foreground">
          Statistik &amp; Marketing – nur mit Einwilligung (§ 25 Abs. 1 TDDDG, Art. 6 Abs. 1 lit. a DSGVO)
        </p>
        <Liste>
          <li><code>zpc…</code> (Zoho PageSense): merkt sich Ihre Zustimmung – 1 Jahr</li>
          <li><code>zsc…</code> (Zoho PageSense): Sitzung – 30 Minuten</li>
          <li><code>zft-…</code> (Zoho PageSense): Erstbesuch und Herkunft – 12 Stunden</li>
          <li><code>zps-tgr-dts</code> (Zoho PageSense): Zeitstempel – 1 Jahr</li>
          <li><code>zpsCookieMeta</code> (Zoho PageSense): Verwaltung der Cookies – 400 Tage</li>
          <li>
            <code>zps-ft-details</code>, <code>zps-ft-pghitType-details</code> (Local Storage, Zoho PageSense): Herkunft
            des Besuchs – bis zum Widerruf
          </li>
        </Liste>
        <p className="font-semibold text-foreground">Externe Medien – nur mit Einwilligung oder nach Klick</p>
        <p>Cookies und ähnliche Speicher von YouTube und den Social-Media-Anbietern, siehe Abschnitt 8.</p>
        <p>
          Sie können Ihre Auswahl jederzeit über die <CookieLink /> ändern. Außerdem können Sie Ihren Browser so
          einstellen, dass er Cookies nur im Einzelfall erlaubt, generell ablehnt oder beim Schließen löscht.
        </p>
      </Abschnitt>

      <Abschnitt titel="10. Ihre Rechte">
        <p>Sie haben das Recht auf</p>
        <Liste>
          <li>Auskunft über Ihre bei uns gespeicherten Daten (Art. 15 DSGVO),</li>
          <li>Berichtigung (Art. 16), Löschung (Art. 17) und Einschränkung der Verarbeitung (Art. 18),</li>
          <li>Datenübertragbarkeit (Art. 20),</li>
          <li>
            <strong className="text-foreground">Widerspruch</strong> gegen Verarbeitungen auf Grundlage berechtigter
            Interessen (Art. 21),
          </li>
          <li>
            <strong className="text-foreground">Widerruf</strong> erteilter Einwilligungen mit Wirkung für die Zukunft
            (Art. 7 Abs. 3).
          </li>
        </Liste>
        <p>
          Wenden Sie sich dazu an{" "}
          <a className="text-primary underline underline-offset-2" href="mailto:datenschutz@sirius-gmbh.de">
            datenschutz@sirius-gmbh.de
          </a>
          .
        </p>
      </Abschnitt>

      <Abschnitt titel="11. Beschwerderecht">
        <p>
          Sie können sich bei einer Datenschutz-Aufsichtsbehörde beschweren. Für uns zuständig ist der Landesbeauftragte
          für den Datenschutz und die Informationsfreiheit Baden-Württemberg, Lautenschlagerstraße 20, 70173 Stuttgart.
        </p>
      </Abschnitt>

      <Abschnitt titel="12. Änderungen">
        <p>
          Wir passen diese Datenschutzerklärung an, wenn sich unsere Website oder die Rechtslage ändert. Es gilt die
          jeweils hier veröffentlichte Fassung.
        </p>
      </Abschnitt>

      <SectionReveal>
        <div className="reveal bg-muted/30 p-8 md:p-12 rounded-3xl border-2 border-dashed border-border text-center">
          <h2 className="font-bold text-2xl mb-4">Noch Fragen zum Datenschutz?</h2>
          <p className="text-muted-foreground mb-8">Schreiben Sie unserem Datenschutzbeauftragten.</p>
          <a
            className="px-8 py-3 bg-card border border-border font-bold rounded-xl hover:bg-secondary transition-colors inline-flex items-center gap-2"
            href="mailto:datenschutz@sirius-gmbh.de"
          >
            <Mail className="w-4 h-4" />
            E-Mail schreiben
          </a>
        </div>
      </SectionReveal>
    </main>
  </PageLayout>
);

export default Datenschutz;
