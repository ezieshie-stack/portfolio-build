import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FiitSubNav } from "@/components/work/fiitco/FiitSubNav";
import { DiagramRenderer } from "@/components/work/fiitco/diagrams/DiagramRenderer";
import { DIAGRAM_MANIFEST } from "@/components/work/fiitco/diagrams/data";

export const metadata = {
  title: "FIIT Co. · Diagrams (A8) | David Ezieshi",
  description:
    "11 custom interactive diagrams — system architecture (×5), ERD, data flow (×2), functional decomposition, use case, and Ishikawa root-cause.",
};

const GROUPS = ["Architecture", "Data", "Function & Behaviour", "Analysis"];

export default function FiitDiagramsPage() {
  const grouped = GROUPS.map((g) => ({
    name: g,
    items: DIAGRAM_MANIFEST.filter((d) => d.group === g),
  }));

  return (
    <div className="pf-page">
      <div className="pf-shell">
        <FiitSubNav active="diagrams" />

        <section className="pj-hero-head" style={{ marginTop: 28 }}>
          <Badge tone="violet" style={{ marginBottom: 16 }}>
            Artifact A8 · Diagrams · Live
          </Badge>
          <h1
            className="pf-page-title"
            style={{ fontSize: "clamp(30px,3.2vw,46px)" }}
          >
            The system, drawn, and fully interactive.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 700 }}>
            The architecture, data-flow, ERD, functional-decomposition,
            use-case, and root-cause diagrams — <b>11 custom-built interactive
            graphics</b>. Hover any node to trace its connections, pan and
            zoom, and open any diagram fullscreen; read the talking points
            beside each set.
          </p>
        </section>

        {grouped.map((g) =>
          g.items.length === 0 ? null : (
            <section className="pj-section" key={g.name}>
              <Eyebrow style={{ marginBottom: 8 }}>{g.name}</Eyebrow>
              {g.items.map((set) => (
                <div key={set.id} id={set.id} style={{ marginBottom: 32 }}>
                  <div className="pj-diagram-source">
                    <Eyebrow prefix="" style={{ marginBottom: 4 }}>
                      {set.code} · {set.meta}
                    </Eyebrow>
                    <span>
                      <b>{set.title}</b>
                    </span>
                  </div>
                  <div style={{ display: "grid", gap: 24, marginTop: 12 }}>
                    {set.entries.map((entry, i) => (
                      <DiagramRenderer key={i} entry={entry} />
                    ))}
                  </div>
                </div>
              ))}
            </section>
          )
        )}

        <Link href="/work/fiitco" className="pj-next">
          <div>
            <span className="pj-next-lbl">Return to</span>
            <span className="pj-next-title">FIIT Co. hub</span>
          </div>
          <ArrowRight size={20} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
