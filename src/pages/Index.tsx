import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsPreview } from "@/components/sections/ProjectsPreview";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { SkillsPreview } from "@/components/sections/SkillsPreview";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ExperienceTimeline />
        <ProjectsPreview />
        <SkillsPreview />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
