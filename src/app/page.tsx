import { Hero } from "@/components/home/Hero";
import { CoreCapabilities } from "@/components/home/CoreCapabilities";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ToolsCarousel } from "@/components/home/ToolsCarousel";
import { SkillsCarousel } from "@/components/home/SkillsCarousel";
import { OperationalFramework } from "@/components/home/OperationalFramework";
import { WorkflowDiagramSection } from "@/components/home/WorkflowDiagramSection";
import { FeaturedProjectsSlider } from "@/components/home/FeaturedProjectsSlider";
import { CurrentlyExploring } from "@/components/home/CurrentlyExploring";
import { home as homeDefault } from "@/lib/content";
import { deepMerge, fetchSectionContent } from "@/lib/cms";

export default async function Home() {
  const override = await fetchSectionContent<typeof homeDefault>("home");
  const home = deepMerge(homeDefault, override);

  return (
    <>
      <div className="max-w-[1600px] mx-auto px-6 md:px-8 lg:px-12 pt-0 md:pt-8 lg:pt-12">
        <Hero data={home} />
      </div>
      <CoreCapabilities />
      <AboutPreview />
      <ToolsCarousel />
      <SkillsCarousel />
      <div className="max-w-[1600px] mx-auto px-6 md:px-8 lg:px-12">
        <OperationalFramework
          diagram={home.diagram}
          metricCard={home.metricCard}
        />
        <WorkflowDiagramSection />
      </div>
      <FeaturedProjectsSlider />
      <CurrentlyExploring />
    </>
  );
}
