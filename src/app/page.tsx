import { PageShell } from "@/components/PageShell";
import { Hero } from "@/components/home/Hero";
import { WorkflowDiagram } from "@/components/home/WorkflowDiagram";
import { FeaturedProject } from "@/components/home/FeaturedProject";
import { TechStack } from "@/components/home/TechStack";

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <WorkflowDiagram />
      <FeaturedProject />
      <TechStack />
    </PageShell>
  );
}
