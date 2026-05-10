import { PageShell } from "@/components/PageShell";
import { Hero } from "@/components/home/Hero";
import { DiagramSection } from "@/components/home/DiagramSection";
import { FeaturedProject } from "@/components/home/FeaturedProject";
import { ToolsRow } from "@/components/home/ToolsRow";

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <DiagramSection />
      <FeaturedProject />
      <ToolsRow />
    </PageShell>
  );
}
