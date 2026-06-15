import { Link } from "react-router-dom";
import { Building2, Phone, Mail, FileText, Briefcase, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SectionReveal from "@/components/SectionReveal";

const Impressum = () => (
  <PageLayout
    title="Impressum — SIRIUS GmbH"
    description="Impressum der SIRIUS GmbH document solutions, Freiburg."
  >
    <div className="pt-12 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <SectionReveal>
          <header className="mb-16">
            <h1 className="reveal text-5xl font-extrabold text-primary mb-4 tracking-tight">Impressum</h1>
            <div className="reveal h-1 w-24 bg-amber-500" />
          </header>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="md:col-span-8 space-y-12">
            <SectionReveal stagger>
              {/* Section: Mandatory Info */}
              <section className="reveal bg-card p-8 rounded-xl shadow-[0px_20px_40px_rgba(25,28,30,0.06)] relative overflow-hidden folded-corner">
                <h2 className="text-xl font-bold mb-6 text-primary flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-amber-600" />
                  Angaben gemäß § 5 TMG
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p className="font-bold text-foreground">SIRIUS GmbH document solutions</p>
                  <p>
                    Abrichstrasse 23<br />
                    79108 Freiburg-Hochdorf<br />
                    Deutschland
                  </p>
                </div>
              </section>

              {/* Section: Contact */}
              <section className="reveal bg-secondary p-8 rounded-xl">
                <h2 className="text-xl font-bold mb-6 text-primary flex items-center gap-2">
                  <Phone className="w-5 h-5 text-amber-600" />
                  Kontakt
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Telefon</p>
                      <p className="font-medium">(0761) 704070</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">E-Mail</p>
                      <p className="font-medium">
                        <a href="mailto:info@sirius-gmbh.de" className="text-primary underline underline-offset-4">
                          info@sirius-gmbh.de
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section: Registry */}
              <section className="reveal bg-card p-8 rounded-xl shadow-[0px_20px_40px_rgba(25,28,30,0.06)]">
                <h2 className="text-xl font-bold mb-6 text-primary flex items-center gap-2">
                  <FileText className="w-5 h-5 text-amber-600" />
                  Register & Steuer
                </h2>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Registereintrag</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Eintragung im Handelsregister.<br />
                      Registergericht: Amtsgericht Freiburg<br />
                      Registernummer: HRB 2624
                    </p>
                  </div>
                  <div className="pt-4 border-t border-border/20">
                    <p className="text-sm text-muted-foreground mb-2">Umsatzsteuer-ID</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                      DE 142113183
                    </p>
                  </div>
                  <div className="pt-4 border-t border-border/20">
                    <p className="text-sm text-muted-foreground mb-2">EORI-Nummer</p>
                    <p className="text-muted-foreground leading-relaxed">
                      DE429382942623019
                    </p>
                  </div>
                </div>
              </section>


              {/* Section: Disclaimers */}
              <section className="reveal space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-primary mb-3">Haftung für Inhalte</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-3">Urheberrecht</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                  </p>
                </div>
              </section>
            </SectionReveal>
          </div>

          {/* Side Info */}
          <aside className="md:col-span-4 space-y-8">
            <SectionReveal stagger>
              <div className="reveal bg-primary p-8 rounded-xl text-primary-foreground">
                <h3 className="text-lg font-bold mb-4">Vertreten durch</h3>
                <p className="font-medium mb-1">Fabian Schüler</p>
                <p className="text-blue-100 text-sm">Geschäftsführer</p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="font-medium mb-1">Michael Wangerowski</p>
                  <p className="text-blue-100 text-sm">Geschäftsführer</p>
                </div>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="font-medium mb-1">Manfred Schüler</p>
                  <p className="text-blue-100 text-sm">Geschäftsführer</p>
                </div>
              </div>

              <div className="reveal bg-muted p-8 rounded-xl">
                <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Verantwortlich für Inhalt</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Fabian Schüler<br />
                  Abrichstrasse 23<br />
                  79108 Freiburg-Hochdorf
                </p>
              </div>
            </SectionReveal>
          </aside>
        </div>

        {/* Bewerbung CTA */}
        <SectionReveal>
          <div className="reveal mt-16 p-8 md:p-10 rounded-2xl bg-primary text-primary-foreground flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-2">Möchten Sie Teil unserer Mission werden?</h2>
                <p className="text-blue-100 text-sm font-light max-w-xl">
                  Bewerben Sie sich direkt über unser Bewerbungsformular auf der Team-Seite.
                </p>
              </div>
            </div>
            <Link
              to="/ueber-uns/team#bewerbung"
              className="inline-flex items-center gap-2 bg-white text-primary font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors shrink-0"
            >
              Zum Bewerbungsformular <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </SectionReveal>
      </div>
    </div>
  </PageLayout>
);

export default Impressum;
