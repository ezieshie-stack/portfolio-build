import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { FiitSubNav } from "@/components/work/fiitco/FiitSubNav";
import { DiagramsPageClient } from "@/components/work/fiitco/diagrams/DiagramsPageClient";

export const metadata = {
  title: "FIIT Co. · Diagrams (A8) | David Ezieshi",
  description:
    "Interactive architecture, data-flow, ERD, functional-decomposition, use-case, and Ishikawa root-cause diagrams, each with its source narrative and talking points.",
};

export default function FiitDiagramsPage() {
  return (
    <div className="pf-page fx-wide">
      <div className="pf-shell">
        <FiitSubNav active="diagrams" />

        <section className="pj-hero-head" style={{ marginTop: 28 }}>
          <Badge tone="violet" style={{ marginBottom: 16 }}>
            Artifact A8 · Diagrams · Live
          </Badge>
          <h1 className="pf-page-title" style={{ fontSize: "clamp(30px,3.2vw,46px)" }}>
            The system, drawn, and fully interactive.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 700 }}>
            The architecture, data-flow, ERD, functional-decomposition,
            use-case, and root-cause diagrams, custom-built as interactive
            graphics. Hover any node to trace its connections, pan and zoom,
            and open any diagram fullscreen; read the talking points beside it.
          </p>
        </section>

        <section className="pj-section" style={{ marginTop: 32 }}>
          <DiagramsPageClient />
        </section>

        <Link href="/work/fiitco" className="pj-next">
          <div>
            <span className="pj-next-lbl">Back to</span>
            <span className="pj-next-title">FIIT Co. artifact index</span>
          </div>
          <ArrowRight size={20} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
