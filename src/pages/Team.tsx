import { Linkedin } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SectionReveal from "@/components/SectionReveal";

import fabianImg from "@/assets/team/fabian-schueler.jpg";
import michaelWImg from "@/assets/team/michael-wangerowski.jpg";
import patriciaImg from "@/assets/team/patricia-pierdel.jpg";
import laraImg from "@/assets/team/lara-koebelin.jpg";
import sallyImg from "@/assets/team/sally-nehring.jpg";
import michaelHImg from "@/assets/team/michael-heitzmann.jpg";
import senaImg from "@/assets/team/sena-kaya.jpg";
import josefineImg from "@/assets/team/josefine-wartner.png";
import danielaImg from "@/assets/team/daniela-trunner.jpg";
import angelaImg from "@/assets/team/angela-warzecha.jpg";
import nataschaImg from "@/assets/team/natascha-biechele.jpg";

import manfredImg from "@/assets/team/manfred-schueler.jpg";
import bahadirImg from "@/assets/team/bahadir-alaz.jpg";
import christianImg from "@/assets/team/christian-klose.jpg";
import jonasImg from "@/assets/team/jonas-gabel.jpg";
import christophImg from "@/assets/team/christoph-schild.jpg";
import vladimirImg from "@/assets/team/vladimir-korotine.jpg";
import hasibImg from "@/assets/team/hasib-jabari.jpg";
import husseinImg from "@/assets/team/hussein-ahmad.jpg";
import ramiImg from "@/assets/team/rami-nouri.jpg";

interface TeamMember {
  name: string;
  role: string;
  image?: string;
  objectPos?: string;
  linkedin?: string;
}

const salesMarketing: TeamMember[] = [
  { name: "Fabian", role: "Geschäftsführer", image: fabianImg, linkedin: "https://www.linkedin.com/in/fabian-sch%C3%BCler-6a9049159" },
  { name: "Michael", role: "Geschäftsführer", image: michaelWImg, linkedin: "https://www.linkedin.com/in/michael-wangerowski-771628283" },
  { name: "Patricia", role: "Marketing & Sales Coordination", image: patriciaImg, linkedin: "https://www.linkedin.com/in/patricia-pierdel-502486221" },
  { name: "Lara", role: "Social Media Marketing", image: laraImg, objectPos: "center 15%", linkedin: "https://www.linkedin.com/in/lara-k%C3%B6belin" },
  { name: "Sally", role: "Account Managerin", image: sallyImg, objectPos: "center 15%", linkedin: "https://www.linkedin.com/in/sally-nehring-2a6138207" },
  { name: "Michael H.", role: "Account Manager", image: michaelHImg, objectPos: "center 15%", linkedin: "https://www.linkedin.com/in/michael-heitzmann-614971251" },
  { name: "Sena", role: "Business Development", image: senaImg, linkedin: "https://www.linkedin.com/in/sena-kaya-hammoud-0b2439211" },
  { name: "Josefine", role: "Inside Sales", image: josefineImg, objectPos: "center 15%", linkedin: "https://www.linkedin.com/in/josefine-wartner" },
  { name: "Daniela", role: "Sales", image: danielaImg },
  { name: "Angela", role: "Operations Managerin", image: angelaImg, objectPos: "center 15%", linkedin: "https://www.linkedin.com/in/angela-warzecha" },
  { name: "Natascha", role: "Accounting", image: nataschaImg, objectPos: "center 15%" },
];

const professionalServices: TeamMember[] = [
  { name: "Manfred", role: "Geschäftsführer", image: manfredImg, linkedin: "https://www.linkedin.com/in/manfred-sch%C3%BCler-583761169" },
  { name: "Bahadir", role: "Head of Professional Services", image: bahadirImg, linkedin: "https://www.linkedin.com/in/bahadir-alaz-a9884728a" },
  { name: "Christian", role: "Senior System Engineer", image: christianImg, objectPos: "center 15%" },
  { name: "Jonas", role: "Projektmanagement Print", image: jonasImg },
  { name: "Christoph", role: "Helpdesk & Dispatching", image: christophImg, linkedin: "https://www.linkedin.com/in/christoph-schild-38b62b15b" },
  { name: "Vladimir", role: "Senior Service Specialist", image: vladimirImg, objectPos: "center 15%" },
  { name: "Hasib", role: "Service & Maintenance", image: hasibImg },
  { name: "Hussein", role: "Service & Maintenance", image: husseinImg, linkedin: "https://www.linkedin.com/in/hussein-ahmad-48a10b340" },
  { name: "Rami", role: "Service & Maintenance", image: ramiImg, objectPos: "center 15%" },
  { name: "Majed", role: "Professional Services" },
];

const TeamCard = ({ member }: { member: TeamMember }) => (
  <div className="reveal group relative bg-card p-8 rounded-xl shadow-[0px_20px_40px_rgba(25,28,30,0.06)] hover:scale-[1.02] transition-transform duration-300 folded-corner">
    <div className="flex flex-col items-center text-center">
      {member.image ? (
        <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-border group-hover:border-primary/30 transition-colors duration-300">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
            style={{ objectPosition: member.objectPos || "center top" }}
            loading="lazy"
          />
        </div>
      ) : (
        <div className="w-32 h-32 rounded-full bg-secondary mb-6 flex items-center justify-center text-muted-foreground text-xs border-4 border-border">
          Foto
        </div>
      )}
      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
      <p className="text-xs font-medium tracking-[0.15em] uppercase text-primary mb-2">{member.role}</p>
      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-8 h-8 mt-1 rounded-full text-muted-foreground hover:text-[#0A66C2] hover:bg-accent transition-colors"
          aria-label={`${member.name} auf LinkedIn`}
        >
          <Linkedin size={18} />
        </a>
      )}
    </div>
  </div>
);

const Team = () => (
  <PageLayout
    title="Unser Team — SIRIUS GmbH"
    description="Lernen Sie das Team hinter SIRIUS kennen."
  >
    <section className="pt-32 pb-24">
      <div className="container">
        {/* Hero Header */}
        <SectionReveal>
          <header className="reveal text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-semibold tracking-[0.2em] text-[10px] uppercase mb-4 block">
              Architects of Information
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Unser Team
            </h1>
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              Hinter SIRIUS steht ein Team aus Visionären, Technik-Experten und strategischen Denkern.
              Gemeinsam gestalten wir die Zukunft des digitalen Dokumentenmanagements.
            </p>
          </header>
        </SectionReveal>

        {/* Sales & Marketing */}
        <SectionReveal>
          <div className="reveal flex items-center gap-4 mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-primary whitespace-nowrap">Sales & Marketing</h2>
            <div className="h-px flex-1 bg-border" />
          </div>
        </SectionReveal>
        <SectionReveal stagger>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {salesMarketing.map((m, i) => (
              <TeamCard key={i} member={m} />
            ))}
          </div>
        </SectionReveal>

        {/* Professional Services */}
        <SectionReveal>
          <div className="reveal flex items-center gap-4 mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-primary whitespace-nowrap">Professional Services</h2>
            <div className="h-px flex-1 bg-border" />
          </div>
        </SectionReveal>
        <SectionReveal stagger>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {professionalServices.map((m, i) => (
              <TeamCard key={i} member={m} />
            ))}
          </div>
        </SectionReveal>

        {/* CTA Section */}
        <SectionReveal>
          <div className="reveal mt-32 p-12 bg-secondary rounded-2xl flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
                Möchten Sie Teil unserer Mission werden?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Wir sind immer auf der Suche nach Talenten, die Lust haben, die Grenzen des Machbaren
                im Dokumenten-Management neu zu definieren. Werden Sie Teil eines Teams, das Innovation atmet.
              </p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  </PageLayout>
);

export default Team;
