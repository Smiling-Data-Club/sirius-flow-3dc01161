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
  <div className="reveal text-center">
    {member.image ? (
      <div className="w-44 h-44 md:w-48 md:h-48 rounded-full mx-auto mb-5 overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
          style={{ objectPosition: member.objectPos || "center top" }}
          loading="lazy"
        />
      </div>
    ) : (
      <div className="w-44 h-44 md:w-48 md:h-48 rounded-full bg-secondary mx-auto mb-5 flex items-center justify-center text-muted-foreground text-xs">
        Foto
      </div>
    )}
    <h3 className="text-lg font-semibold">{member.name}</h3>
    <p className="text-primary text-sm font-medium">{member.role}</p>
    {member.linkedin && (
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-8 h-8 mt-2 rounded-full text-muted-foreground hover:text-[#0A66C2] hover:bg-accent transition-colors"
        aria-label={`${member.name} auf LinkedIn`}
      >
        <Linkedin size={18} />
      </a>
    )}
  </div>
);

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

        {/* Sales & Marketing */}
        <SectionReveal>
          <h2 className="reveal text-xl md:text-2xl font-semibold mb-10 text-primary">Sales & Marketing</h2>
        </SectionReveal>
        <SectionReveal stagger>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
            {salesMarketing.map((m, i) => (
              <TeamCard key={i} member={m} />
            ))}
          </div>
        </SectionReveal>

        {/* Professional Services */}
        <SectionReveal>
          <h2 className="reveal text-xl md:text-2xl font-semibold mb-10 text-primary">Professional Services</h2>
        </SectionReveal>
        <SectionReveal stagger>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {professionalServices.map((m, i) => (
              <TeamCard key={i} member={m} />
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  </PageLayout>
);

export default Team;
