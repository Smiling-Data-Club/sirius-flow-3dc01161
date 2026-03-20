import PageLayout from "@/components/PageLayout";
import SectionReveal from "@/components/SectionReveal";

const teamMembers = [
  { name: "Fabian Schüler", role: "Geschäftsführer", bio: "Strategie, Digitalisierung und Vertrieb." },
  { name: "Michael Wangerowski", role: "Geschäftsführer", bio: "Technik, Service und Managed Print." },
  { name: "Manfred Schüler", role: "Geschäftsführer", bio: "Gründer und Berater." },
  { name: "Teamname", role: "Rolle", bio: "Kurze Bio kommt hier." },
  { name: "Teamname", role: "Rolle", bio: "Kurze Bio kommt hier." },
  { name: "Teamname", role: "Rolle", bio: "Kurze Bio kommt hier." },
];

const Team = () => (
  <PageLayout
    title="Unser Team — SIRIUS GmbH"
    description="Lernen Sie das Team hinter SIRIUS kennen."
  >
    <section className="py-24 md:py-32">
      <div className="container">
        <SectionReveal>
          <h1 className="reveal text-3xl md:text-5xl font-bold mb-16">Unser Team</h1>
        </SectionReveal>

        <SectionReveal stagger>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((m, i) => (
              <div key={i} className="reveal text-center">
                <div className="w-32 h-32 rounded-full bg-secondary mx-auto mb-5 flex items-center justify-center text-muted-foreground text-xs">
                  Foto
                </div>
                <h2 className="text-lg font-semibold">{m.name}</h2>
                <p className="text-primary text-sm font-medium mb-2">{m.role}</p>
                <p className="text-muted-foreground text-sm">{m.bio}</p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  </PageLayout>
);

export default Team;
