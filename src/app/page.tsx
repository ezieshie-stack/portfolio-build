import { PageShell } from "@/components/PageShell";
import { Hero } from "@/components/home/Hero";
import { WorkflowDiagramSection } from "@/components/home/WorkflowDiagramSection";
import { FeaturedProject } from "@/components/home/FeaturedProject";
import { TechStack } from "@/components/home/TechStack";

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <WorkflowDiagramSection />
      <FeaturedProject />
      <TechStack />
    </PageShell>
  );
}
