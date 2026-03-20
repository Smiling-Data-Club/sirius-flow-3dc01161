import { Droplet, Wrench, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/PageLayout";
import SectionReveal from "@/components/SectionReveal";

const ServiceArea = () => (
  <PageLayout
    title="Service Area — SIRIUS GmbH"
    description="Toner bestellen oder Reparatur melden — schnell und direkt für unsere Managed-Print-Kunden."
  >
    <section className="py-24 md:py-32">
      <div className="container">
        <SectionReveal>
          <div className="max-w-2xl mb-16">
            <h1 className="reveal text-3xl md:text-5xl font-bold mb-6">Service Area</h1>
            <p className="reveal text-lg text-muted-foreground">
              Für unsere Managed-Print-Kunden: Toner bestellen oder Reparatur melden — schnell und direkt.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal stagger>
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* Toner */}
            <div className="reveal bg-card rounded-xl p-10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Droplet className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-xl font-semibold mb-3">Toner bestellen</h2>
              <p className="text-muted-foreground mb-6">Verbrauchsmaterial nachbestellen für Ihr Gerät.</p>
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:info@sirius-gmbh.de?subject=Tonerbestellung">
                  Toner bestellen
                </a>
              </Button>
            </div>

            {/* Reparatur */}
            <div className="reveal bg-card rounded-xl p-10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Wrench className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-xl font-semibold mb-3">Reparatur melden</h2>
              <p className="text-muted-foreground mb-6">Störung oder Defekt? Wir kümmern uns.</p>
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:info@sirius-gmbh.de?subject=Reparaturanfrage">
                  Reparatur melden
                </a>
              </Button>
            </div>
          </div>
        </SectionReveal>

        {/* Contact */}
        <SectionReveal>
          <div className="reveal bg-secondary rounded-xl p-10 max-w-lg">
            <h3 className="text-lg font-semibold mb-6">Kontakt</h3>
            <div className="flex flex-col gap-4 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+497617040700" className="hover:text-primary transition-colors">(0761) 704070</a>
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
