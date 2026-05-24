import PageLayout from "@/components/PageLayout";
import SectionReveal from "@/components/SectionReveal";
import SocialHub from "@/components/SocialHub";
import PageHero from "@/components/PageHero";

const Social = () => (
  <PageLayout
    title="Social Media — SIRIUS GmbH"
    description="Folgen Sie SIRIUS auf LinkedIn für Insights, Updates und Blicke hinter die Kulissen."
  >
    <PageHero
      topLine="Klarheit durch"
      keyword="unsere Socials"
      subtitle="Folgen Sie uns auf LinkedIn, Instagram, TikTok und YouTube für Insights, Updates und den ein oder anderen Blick hinter die Kulissen."
    />

    <div className="pb-24 px-6 max-w-7xl mx-auto">
      {/* Social Hub with tabs */}
      <SectionReveal>
        <div className="reveal">
          <SocialHub />
        </div>
      </SectionReveal>
    </div>
  </PageLayout>
);

export default Social;
