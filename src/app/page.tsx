import { Hero } from "@/components/home/Hero";
import { OperationalFramework } from "@/components/home/OperationalFramework";
import { WorkflowDiagramSection } from "@/components/home/WorkflowDiagramSection";
import FeaturedProjectCard from "@/components/home/FeaturedProjectCard";
import { ToolsCarousel } from "@/components/home/ToolsCarousel";

export default function Home() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12 pt-12">
        <Hero />
        <OperationalFramework />
        <WorkflowDiagramSection />
      </div>
      <FeaturedProjectCard />
      <ToolsCarousel />
    </>
  );
}
