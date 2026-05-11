import { Hero } from "@/components/home/Hero";
import { HeroSocialLinks } from "@/components/home/HeroSocialLinks";
import { CoreCapabilities } from "@/components/home/CoreCapabilities";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ToolsCarousel } from "@/components/home/ToolsCarousel";
import { OperationalFramework } from "@/components/home/OperationalFramework";
import { WorkflowDiagramSection } from "@/components/home/WorkflowDiagramSection";
import { FeaturedProjectsSlider } from "@/components/home/FeaturedProjectsSlider";
import { CurrentlyExploring } from "@/components/home/CurrentlyExploring";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12 pt-0 md:pt-8 lg:pt-12">
        <Hero />
        <HeroSocialLinks />
      </div>
      <CoreCapabilities />
      <AboutPreview />
      <ToolsCarousel />
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12">
        <OperationalFramework />
        <WorkflowDiagramSection />
      </div>
      <FeaturedProjectsSlider />
      <CurrentlyExploring />
      <FinalCTA />
    </>
  );
}
