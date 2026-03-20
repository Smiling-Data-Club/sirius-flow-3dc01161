import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/PageLayout";
import SectionReveal from "@/components/SectionReveal";

const Social = () => (
  <PageLayout
    title="Social Media — SIRIUS GmbH"
    description="Folgen Sie SIRIUS auf LinkedIn für Insights, Updates und Blicke hinter die Kulissen."
  >
    <section className="py-24 md:py-32">
      <div className="container">
        <SectionReveal>
          <div className="max-w-2xl mb-16">
            <h1 className="reveal text-3xl md:text-5xl font-bold mb-6">SIRIUS auf Social Media</h1>
            <p className="reveal text-lg text-muted-foreground">
              Folgen Sie uns auf LinkedIn für Insights, Updates und den ein oder anderen Blick hinter die Kulissen.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal stagger>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="reveal aspect-[4/3] bg-secondary rounded-xl flex items-center justify-center text-muted-foreground text-sm"
              >
                LinkedIn-Post Embed (Platzhalter {i})
              </div>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal>
          <div className="reveal">
            <Button variant="hero" size="lg" asChild>
              <a
                href="https://www.linkedin.com/company/79397257/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 w-5 h-5" />
                Auf LinkedIn folgen
              </a>
            </Button>
          </div>
        </SectionReveal>
      </div>
    </section>
  </PageLayout>
);

export default Social;
