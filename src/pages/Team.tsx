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
}

const salesMarketing: TeamMember[] = [
  { name: "Fabian Schüler", role: "Geschäftsführer", image: fabianImg },
  { name: "Michael Wangerowski", role: "Geschäftsführer", image: michaelWImg },
  { name: "Patricia Pierdel", role: "Marketing & Sales Coordination", image: patriciaImg },
  { name: "Lara Köbelin", role: "Social Media Marketing", image: laraImg },
  { name: "Sally Nehring", role: "Account Managerin", image: sallyImg },
  { name: "Michael Heitzmann", role: "Account Manager", image: michaelHImg },
  { name: "Sena Kaya", role: "Business Development", image: senaImg },
  { name: "Josefine Wartner", role: "Inside Sales", image: josefineImg },
  { name: "Daniela Trunner", role: "Sales", image: danielaImg },
  { name: "Angela Warzecha", role: "Operations Managerin", image: angelaImg },
  { name: "Natascha Biechele", role: "Accounting", image: nataschaImg },
];

const professionalServices: TeamMember[] = [
  { name: "Manfred Schüler", role: "Geschäftsführer", image: manfredImg },
  { name: "Bahadir Alaz", role: "Head of Professional Services", image: bahadirImg },
  { name: "Christian Klose", role: "Senior System Engineer", image: christianImg },
  { name: "Jonas Gabel", role: "Projektmanagement Print", image: jonasImg },
  { name: "Christoph Schild", role: "Helpdesk & Dispatching", image: christophImg },
  { name: "Vladimir Korotine", role: "Senior Service Specialist", image: vladimirImg },
  { name: "Hasib Jabari", role: "Service & Maintenance", image: hasibImg },
  { name: "Hussein Ahmad", role: "Service & Maintenance", image: husseinImg },
  { name: "Rami Nouri", role: "Service & Maintenance", image: ramiImg },
  { name: "Majed", role: "Professional Services" },
];

const TeamCard = ({ member }: { member: TeamMember }) => (
  <div className="reveal text-center">
    {member.image ? (
      <div className="w-44 h-44 md:w-48 md:h-48 rounded-full mx-auto mb-5 overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-[140%] h-[140%] object-cover object-top -ml-[20%] -mt-[5%]"
          loading="lazy"
        />
      </div>
    ) : (
      <div className="w-44 h-44 md:w-52 md:h-52 rounded-full bg-secondary mx-auto mb-5 flex items-center justify-center text-muted-foreground text-xs">
        Foto
      </div>
    )}
    <h3 className="text-lg font-semibold">{member.name}</h3>
    <p className="text-primary text-sm font-medium">{member.role}</p>
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
