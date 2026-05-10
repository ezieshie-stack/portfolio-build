import { PageShell } from "@/components/PageShell";
import { Hero } from "@/components/home/Hero";
import { FeaturedProject } from "@/components/home/FeaturedProject";
import { ToolsRow } from "@/components/home/ToolsRow";

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <FeaturedProject />
      <ToolsRow />
    </PageShell>
  );
}
