import { GraduationCap, Briefcase, Send } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SectionReveal from "@/components/SectionReveal";
import PageHero from "@/components/PageHero";
import ApplicationForm from "@/components/ApplicationForm";

interface JobItem {
  title: string;
  type: string;
  detail?: string;
}

const ausbildung: JobItem[] = [
  { title: "Kauffrau/-mann Büromanagement", type: "Ausbildung" },
  { title: "IT-Systemkaufmann/-frau", type: "Ausbildung" },
  { title: "IT-Systemelektroniker", type: "Ausbildung" },
];

const studium: JobItem[] = [
  { title: "Duales Studium", type: "Studium", detail: "an der DHBW" },
];

const jobs: JobItem[] = [];

const Karriere = () => (
  <PageLayout
    title="Karriere — SIRIUS GmbH"
    description="Arbeiten bei SIRIUS: Vielfältiges Team, Ausbildungs- und Studienplätze sowie offene Stellen in Freiburg-Hochdorf."
  >
    <PageHero
      topLine="Klarheit für Ihre"
      keyword="Karriere"
      subtitle="Arbeiten bei SIRIUS — ein Team, viele Wege."
    />

    {/* Intro */}
    <section className="pb-16 px-8 max-w-4xl mx-auto">
      <SectionReveal>
        <div className="reveal">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Arbeiten bei SIRIUS</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Bist du bereit, Teil eines vielfältigen und respektvollen Teams zu werden? Bei SIRIUS schätzen wir deine Einzigartigkeit.
            Wir bringen Menschen mit unterschiedlichen Lebenswegen und Hintergründen zusammen und fördern eine Kultur des
            gegenseitigen Respekts und der Wertschätzung. Egal, welche Fähigkeiten oder Lebensumstände du mitbringst —
            bei uns zählt jede Mitarbeiterin und jeder Mitarbeiter als Mensch mit einer individuellen Persönlichkeit.
          </p>
        </div>
      </SectionReveal>
    </section>

    {/* Jobmöglichkeiten */}
    <section className="pb-24 px-8 max-w-6xl mx-auto">
      <SectionReveal stagger>
        <h2 className="reveal text-3xl md:text-4xl font-extrabold mb-12">Jobmöglichkeiten</h2>

        {/* Ausbildung */}
        <div className="reveal mb-12">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold">Ausbildung</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ausbildung.map((job) => (
              <article
                key={job.title}
                className="bg-card rounded-2xl shadow-[0px_20px_40px_rgba(25,28,30,0.06)] p-6 folded-corner transition-transform hover:scale-[1.02]"
              >
                <span className="inline-block text-xs uppercase tracking-wider text-primary font-bold mb-3">
                  {job.type}
                </span>
                <h4 className="font-bold text-lg leading-snug">{job.title}</h4>
              </article>
            ))}
          </div>
        </div>

        {/* Studium */}
        <div className="reveal mb-12">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold">Studium</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studium.map((job) => (
              <article
                key={job.title}
                className="bg-card rounded-2xl shadow-[0px_20px_40px_rgba(25,28,30,0.06)] p-6 folded-corner transition-transform hover:scale-[1.02]"
              >
                <span className="inline-block text-xs uppercase tracking-wider text-primary font-bold mb-3">
                  {job.type}
                </span>
                <h4 className="font-bold text-lg leading-snug">{job.title}</h4>
                {job.detail && (
                  <p className="text-sm text-muted-foreground mt-2">{job.detail}</p>
                )}
              </article>
            ))}
          </div>
        </div>

        {/* Jobs */}
        <div className="reveal">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold">Jobs</h3>
          </div>
          {jobs.length === 0 ? (
            <div className="bg-secondary/40 rounded-2xl p-8 text-muted-foreground">
              Aktuell sind keine offenen Stellen ausgeschrieben — wir freuen uns jederzeit über deine{" "}
              <a href="#initiativbewerbung" className="text-primary font-bold underline-offset-4 hover:underline">
                Initiativbewerbung
              </a>.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <article
                  key={job.title}
                  className="bg-card rounded-2xl shadow-[0px_20px_40px_rgba(25,28,30,0.06)] p-6 folded-corner"
                >
                  <span className="inline-block text-xs uppercase tracking-wider text-primary font-bold mb-3">
                    {job.type}
                  </span>
                  <h4 className="font-bold text-lg leading-snug">{job.title}</h4>
                </article>
              ))}
            </div>
          )}
        </div>
      </SectionReveal>
    </section>

    {/* Initiativbewerbung */}
    <section id="initiativbewerbung" className="pb-32 px-8 max-w-4xl mx-auto scroll-mt-32">
      <SectionReveal>
        <div className="reveal bg-card rounded-2xl shadow-[0px_20px_40px_rgba(25,28,30,0.06)] p-8 md:p-12">
          <div className="flex items-center gap-3 mb-4">
            <Send className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-extrabold">Initiativbewerbung</h2>
          </div>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Keine passende Stelle dabei? Erzähl uns von dir — wir freuen uns darauf, dich kennenzulernen.
          </p>
          <ApplicationForm />
        </div>
      </SectionReveal>
    </section>
  </PageLayout>
);

export default Karriere;
