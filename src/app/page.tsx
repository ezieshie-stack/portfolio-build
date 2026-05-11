import { PageShell } from "@/components/PageShell";
import { Hero } from "@/components/home/Hero";
import { OperationalFramework } from "@/components/home/OperationalFramework";
import { WorkflowDiagramSection } from "@/components/home/WorkflowDiagramSection";
import { FeaturedProject } from "@/components/home/FeaturedProject";
import { TechStack } from "@/components/home/TechStack";

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <OperationalFramework />
      <WorkflowDiagramSection />
      <FeaturedProject />
      <TechStack />
    </PageShell>
  );
}
