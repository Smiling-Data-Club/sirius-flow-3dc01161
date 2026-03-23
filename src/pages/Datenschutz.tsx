import { Building2, Server, Mail, Cookie, Gavel, HeadphonesIcon } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SectionReveal from "@/components/SectionReveal";

const Datenschutz = () => (
  <PageLayout
    title="Datenschutzerklärung — SIRIUS GmbH"
    description="Datenschutzerklärung der SIRIUS GmbH document solutions."
  >
    {/* Hero / Title */}
    <header className="pt-12 pb-16 px-8 max-w-5xl mx-auto">
      <SectionReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="reveal text-amber-600 font-semibold tracking-widest uppercase text-xs mb-4 block">Rechtliche Hinweise</span>
            <h1 className="reveal font-extrabold text-5xl md:text-6xl tracking-tighter leading-tight">
              Datenschutz-<br />erklärung
            </h1>
          </div>
          <div className="hidden md:block pb-2">
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-tighter">Stand: März 2026</p>
          </div>
        </div>
      </SectionReveal>
    </header>

    <main className="px-8 pb-32 max-w-5xl mx-auto space-y-24">
      {/* Section 1: Responsible Party */}
      <SectionReveal stagger>
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4 md:sticky md:top-24">
            <h2 className="reveal font-bold text-2xl text-primary flex items-center gap-3">
              <Building2 className="w-6 h-6" />
              Verantwortlicher
            </h2>
            <div className="reveal mt-4 p-6 bg-secondary rounded-xl border-l-4 border-primary">
              <p className="font-bold">SIRIUS GmbH</p>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                document solutions<br />
                Abrichstrasse 23<br />
                79108 Freiburg-Hochdorf<br />
                Telefon: (0761) 704070<br />
                E-Mail: info@sirius-gmbh.de
              </p>
            </div>
          </div>
          <div className="md:col-span-8 space-y-6">
            <p className="reveal text-lg leading-relaxed text-muted-foreground">
              Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <div className="reveal bg-card p-8 rounded-xl shadow-[0px_20px_40px_rgba(25,28,30,0.06)] folded-corner">
              <h3 className="font-bold text-xl mb-4">Grundlagen der Verarbeitung</h3>
              <p className="leading-relaxed text-muted-foreground">
                Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
              </p>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Section 2: Hosting & Technical */}
      <SectionReveal stagger>
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-8 order-2 md:order-1 space-y-6">
            <div className="reveal bg-muted p-8 rounded-xl">
              <h3 className="font-bold text-xl mb-4">Hosting durch IONOS</h3>
              <p className="leading-relaxed text-muted-foreground">
                Unsere Website wird bei IONOS gehostet. Anbieter ist die IONOS SE, Elgendorfer Str. 57, 56410 Montabaur (im Folgenden: IONOS). Wenn Sie unsere Website besuchen, erfasst IONOS verschiedene Logfiles inklusive Ihrer IP-Adressen.
              </p>
              <p className="leading-relaxed text-muted-foreground mt-4">
                Details entnehmen Sie der Datenschutzerklärung von IONOS:{" "}
                <a className="text-primary font-bold underline decoration-2 underline-offset-4" href="https://www.ionos.de/terms-gtc/datenschutzerklaerung/" target="_blank" rel="noopener noreferrer">
                  https://www.ionos.de/terms-gtc/datenschutzerklaerung/
                </a>
              </p>
              <div className="mt-6 flex items-start gap-4 p-4 bg-card/50 rounded-lg">
                <Server className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm font-medium">Die Verwendung von IONOS erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website.</p>
              </div>
            </div>
            <div className="reveal p-8 border-2 border-border rounded-xl">
              <h3 className="font-bold text-xl mb-4">SSL- bzw. TLS-Verschlüsselung</h3>
              <p className="leading-relaxed text-muted-foreground">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
            </div>
          </div>
          <div className="md:col-span-4 order-1 md:order-2">
            <h2 className="reveal font-bold text-2xl text-primary flex items-center gap-3">
              <Server className="w-6 h-6" />
              Infrastruktur
            </h2>
            <p className="reveal mt-4 text-sm text-muted-foreground leading-relaxed">
              Sichere Datenspeicherung und verschlüsselte Übertragungswege bilden das Rückgrat unserer digitalen Dokumentenlösungen.
            </p>
          </div>
        </section>
      </SectionReveal>

      {/* Section 3: Zoho */}
      <SectionReveal>
        <section className="reveal p-12 bg-primary text-primary-foreground rounded-3xl overflow-hidden relative">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-extrabold text-3xl tracking-tight mb-6">Zoho Ökosystem & Web-Analyse</h2>
              <p className="text-blue-100/80 leading-relaxed mb-8">
                Für unsere Kundenkommunikation und die Analyse des Nutzerverhaltens setzen wir Tools der Zoho Corporation ein. Dies ermöglicht uns eine präzise Steuerung unserer Servicequalität.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <span className="bg-white/10 p-2 rounded-full">
                    <Mail className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="font-bold">Zoho Contact Forms</p>
                    <p className="text-xs text-blue-100/60">Anfragen & Lead-Management</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <span className="bg-white/10 p-2 rounded-full">
                    <Server className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="font-bold">Zoho Analytics</p>
                    <p className="text-xs text-blue-100/60">Anonymisierte Nutzungsstatistiken</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
              <h4 className="font-bold mb-4">Datenverarbeitung</h4>
              <p className="text-sm leading-relaxed mb-4">
                Wenn Sie unser Kontaktformular nutzen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              </p>
              <p className="text-sm leading-relaxed">
                Zoho Analytics verwendet Cookies, um die Benutzung der Website zu analysieren. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Zoho übertragen und dort gespeichert.
              </p>
            </div>
          </div>
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary/50 rounded-full blur-3xl opacity-50" />
        </section>
      </SectionReveal>

      {/* Section 4: Cookies & Rights */}
      <SectionReveal stagger>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="reveal bg-secondary p-8 rounded-2xl flex flex-col h-full">
            <Cookie className="w-9 h-9 text-amber-600 mb-6" />
            <h3 className="font-bold text-xl mb-4">Cookies</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Sie dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
            </p>
          </div>
          <div className="reveal bg-secondary p-8 rounded-2xl flex flex-col h-full">
            <Gavel className="w-9 h-9 text-amber-600 mb-6" />
            <h3 className="font-bold text-xl mb-4">Ihre Rechte</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
            </p>
          </div>
          <div className="reveal bg-secondary p-8 rounded-2xl flex flex-col h-full">
            <HeadphonesIcon className="w-9 h-9 text-amber-600 mb-6" />
            <h3 className="font-bold text-xl mb-4">Beschwerderecht</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Im Falle datenschutzrechtlicher Verstöße steht dem Betroffenen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde ist der Landesdatenschutzbeauftragte des Bundeslandes Baden-Württemberg.
            </p>
          </div>
        </section>
      </SectionReveal>

      {/* Final Notice */}
      <SectionReveal>
        <div className="reveal bg-muted/30 p-12 rounded-3xl border-2 border-dashed border-border text-center max-w-3xl mx-auto">
          <h4 className="font-bold text-2xl mb-4">Noch Fragen zum Datenschutz?</h4>
          <p className="text-muted-foreground mb-8">
            Unser Datenschutz-Team steht Ihnen für spezifische Rückfragen zur Verarbeitung Ihrer Daten jederzeit zur Verfügung.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              className="px-8 py-3 bg-card border border-border font-bold rounded-xl hover:bg-secondary transition-colors inline-flex items-center gap-2"
              href="mailto:info@sirius-gmbh.de"
            >
              <Mail className="w-4 h-4" />
              E-Mail schreiben
            </a>
          </div>
        </div>
      </SectionReveal>
    </main>
  </PageLayout>
);

export default Datenschutz;
