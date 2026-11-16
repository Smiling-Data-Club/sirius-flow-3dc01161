import { Link } from "react-router-dom";
import { Droplet, Wrench, Phone, Mail, Clock, ExternalLink, Monitor, Gauge, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/PageLayout";
import SectionReveal from "@/components/SectionReveal";

const ZOHO_FORM_URL =
  "https://forms.zohopublic.eu/siriusgmbh1/form/ServiceAreaFormular/formperma/5ZAf6z1tCYFuMB2d4nnw1D8rlz5W95mwXMsnD_HKdU4";

const TEAMVIEWER_URL = "https://get.teamviewer.com/sirius-gmbh";

const ServiceArea = () => (
  <PageLayout
    title="Service Area — SIRIUS GmbH"
    description="Toner bestellen, Service melden, Remote Support per TeamViewer oder Zählerstände auslesen — schnell und direkt für unsere Managed-Print-Kunden."
  >
    <section className="py-24 md:py-32">
      <div className="container">
        <SectionReveal>
          <div className="max-w-2xl mb-16">
            <h1 className="reveal text-3xl md:text-5xl font-bold mb-6">Service Area</h1>
            <p className="reveal text-lg text-muted-foreground">
              Für unsere Managed-Print-Kunden: Toner bestellen, Service melden, Remote Support per TeamViewer oder
              Zählerstände auslesen — schnell und direkt.
            </p>
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <SectionReveal>
            <div className="reveal bg-card rounded-2xl p-8 md:p-10 shadow-sm border h-full flex flex-col">
              <div className="flex gap-3 mb-5">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Droplet className="w-7 h-7 text-primary" />
                </div>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Wrench className="w-7 h-7 text-primary" />
                </div>
              </div>
              <h2 className="text-2xl font-semibold mb-3">Toner bestellen oder Service melden</h2>
              <p className="text-muted-foreground mb-6 flex-1">
                Egal ob Tonernachbestellung oder Störungsmeldung — nutzen Sie unser zentrales Service-Formular. Wir
                melden uns umgehend zurück.
              </p>
              <div>
                <Button variant="hero" size="lg" asChild>
                  <a href={ZOHO_FORM_URL} target="_blank" rel="noopener noreferrer">
                    Zum Service-Formular
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="reveal bg-card rounded-2xl p-8 md:p-10 shadow-sm border h-full flex flex-col">
              <div className="flex gap-3 mb-5">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Monitor className="w-7 h-7 text-primary" />
                </div>
              </div>
              <h2 className="text-2xl font-semibold mb-3">Remote Support</h2>
              <p className="text-muted-foreground mb-6 flex-1">
                Schnelle IT-Hilfe per TeamViewer — z. B. bei Druckertreibern, Scaneinstellungen oder ähnlichen
                Themen rund um Ihre Druck- und Scanumgebung. Starten Sie die Sitzung mit einem Klick, unser Team
                verbindet sich direkt mit Ihnen.
              </p>
              <div>
                <Button variant="hero" size="lg" asChild>
                  <a href={TEAMVIEWER_URL} target="_blank" rel="noopener noreferrer">
                    Remote Support starten
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal className="md:col-span-2 lg:col-span-1">
            <div className="reveal bg-card rounded-2xl p-8 md:p-10 shadow-sm border h-full flex flex-col">
              <div className="flex gap-3 mb-5">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Gauge className="w-7 h-7 text-primary" />
                </div>
              </div>
              <h2 className="text-2xl font-semibold mb-3">Zählerstände auslesen</h2>
              <p className="text-muted-foreground mb-6 flex-1">
                Schritt-für-Schritt-Anleitung für Sharp, Epson, Lexmark und Toshiba-Etikettendrucker — mit Modellsuche
                und PDF zum Herunterladen. So finden Sie schnell die Werte, die Sie in unser Webportal eintragen.
              </p>
              <div>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/zaehlerstand">
                    Zur Anleitung
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </SectionReveal>
        </div>


        <SectionReveal>
          <div className="reveal bg-secondary rounded-xl p-10 max-w-lg">
            <h3 className="text-lg font-semibold mb-6">Kontakt</h3>
            <div className="flex flex-col gap-4 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+49761704070" className="hover:text-primary transition-colors">(0761) 704070</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:info@sirius-gmbh.de" className="hover:text-primary transition-colors">info@sirius-gmbh.de</a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <span>Mo–Fr, 8:00–17:00 Uhr</span>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  </PageLayout>
);

export default ServiceArea;
