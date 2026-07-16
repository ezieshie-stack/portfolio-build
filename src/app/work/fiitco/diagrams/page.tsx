import Link from "next/link";
import {
  ArrowRight,
  Database,
  Fish,
  GitFork,
  ListTree,
  Network,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FiitSubNav } from "@/components/work/fiitco/FiitSubNav";

export const metadata = {
  title: "FIIT Co. · Diagrams (A8) | David Ezieshi",
  description:
    "System architecture, ERD, data-flow, functional decomposition, use-case, and Ishikawa root-cause diagrams.",
};

type Entry = {
  id: string;
  group: string;
  code: string;
  title: string;
  icon: LucideIcon;
  n: string;
  desc: string;
  source: string;
  live?: { href: string; label: string; blurb: string };
};

const DIAG: Entry[] = [
  {
    id: "arch",
    group: "Architecture",
    code: "BA-08b · System Architecture",
    title: "System Architecture",
    icon: Network,
    n: "5 diagrams",
    desc: "C4-style layered architecture: context, container, data domains, auth & session lifecycle, and deployment topology.",
    source: "Technical Architecture Handoff v1.0 · BA-08 Data Model",
    live: {
      href: "/work/fiitco",
      label: "Visit the live product",
      blurb: "These diagrams describe the two-site, one-backend platform that runs in production today.",
    },
  },
  {
    id: "erd",
    group: "Data",
    code: "BA-08 · Entity-Relationship",
    title: "Entity-Relationship Diagram",
    icon: Database,
    n: "28 tables",
    desc: "Physical Convex schema: 28 tables in 4 domains, with soft-FK relationships enforced by the app code. Uses `erDiagram` notation.",
    source: "Technical Architecture Handoff §2 · convex/schema.ts",
    live: {
      href: "/work/fiitco/data",
      label: "View Data & Scope Model (A2)",
      blurb: "The BA-authored logical model is explorable as its own artifact. This is the physical schema behind it.",
    },
  },
  {
    id: "dfd",
    group: "Data",
    code: "BA-08c · Data Flow Diagram",
    title: "Data Flow Diagram (Level 0 + Level 1)",
    icon: GitFork,
    n: "L0 + L1",
    desc: "Gane-Sarson DFD showing where data enters, transforms, and lands. Level 0 = the whole platform as one process; Level 1 explodes it into 7 processes and 4 data stores.",
    source: "BA-03 BRD · BA-08 Data Model · Tech Architecture Handoff",
    live: {
      href: "/work/fiitco/data",
      label: "View Data & Scope Model (A2)",
      blurb: "Where the data lives is the data model; this shows where it moves.",
    },
  },
  {
    id: "fdd",
    group: "Function & Behaviour",
    code: "BA-11b · Functional Decomposition",
    title: "Functional Decomposition",
    icon: ListTree,
    n: "59 leaves",
    desc: "Hierarchy of everything the platform does — 6 Level-1 branches, 23 Level-2 nodes, 59 Level-3 atomic functions. Every leaf traces to a BR or a governance clause.",
    source: "BA-03 BRD · BA-10 Backlog · BA-12 RTM",
    live: {
      href: "/work/fiitco/rtm",
      label: "View Traceability (A6)",
      blurb: "Every leaf function traces to a business requirement. See the full trace in the RTM artifact.",
    },
  },
  {
    id: "usecase",
    group: "Function & Behaviour",
    code: "BA-10b · Use Case Diagram",
    title: "Use Case Diagram",
    icon: Users,
    n: "22 use cases",
    desc: "UML use case diagram with 6 actors, 22 use cases, and proper «include» / «extend» / generalisation relationships. Authenticate Session is an included dependency of every authed use case.",
    source: "BA-02 Stakeholders · BA-09 RBAC · BA-10 Backlog",
    live: {
      href: "/work/fiitco/rules",
      label: "View Business Rules (A3)",
      blurb: "The authenticated use cases encode the access business rules. See them as a decision table.",
    },
  },
  {
    id: "fishbone",
    group: "Analysis",
    code: "BA-06b · Fishbone (Ishikawa)",
    title: "Fishbone Diagram",
    icon: Fish,
    n: "6M · incident I-02",
    desc: "Root-cause analysis of the stale-edge-cache incident using the 6M framework (Man / Machine / Method / Material / Measurement / Milieu), followed by 5 Whys drilling to a UAT-coverage-gap root cause.",
    source: "RAID entry I-02 · BA-15",
    live: {
      href: "/work/fiitco/raid",
      label: "View RAID Log (A7)",
      blurb: "This analyses the real production incident logged as I-02 in the RAID log.",
    },
  },
];

const GROUPS = ["Architecture", "Data", "Function & Behaviour", "Analysis"].map(
  (g) => ({ name: g, items: DIAG.filter((d) => d.group === g) })
);

export default function FiitDiagramsPage() {
  return (
    <div className="pf-page">
      <div className="pf-shell">
        <FiitSubNav active="diagrams" />

        <section className="pj-hero-head" style={{ marginTop: 28 }}>
          <Badge tone="violet" style={{ marginBottom: 16 }}>
            Artifact A8 · Diagrams
          </Badge>
          <h1
            className="pf-page-title"
            style={{ fontSize: "clamp(30px,3.2vw,46px)" }}
          >
            The system, drawn.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 700 }}>
            Six diagram sets — architecture, ERD, data-flow, functional
            decomposition, use case, and root-cause. Each is authored as
            renderable Mermaid + accompanying narrative and talking points.
          </p>
        </section>

        <section className="pj-section" style={{ marginTop: 32 }}>
          <div className="pj-docs-library">
            {GROUPS.map((g) => (
              <div className="pj-docs-group" key={g.name}>
                <h2 className="pj-docs-phase">{g.name}</h2>
                <div className="pj-docs-cards">
                  {g.items.map((d) => {
                    const Ico = d.icon;
                    return (
                      <article className="pj-docs-card" key={d.id} id={d.id}>
                        <header>
                          <span className="pj-docs-ic">
                            <Ico size={20} aria-hidden />
                          </span>
                          <div className="pj-docs-code">
                            <span className="pj-docs-code-id">{d.code}</span>
                            <span className="pj-docs-code-title">
                              {d.title} · {d.n}
                            </span>
                          </div>
                        </header>
                        <p className="pj-docs-summary">{d.desc}</p>
                        <div className="pj-diagram-source">
                          <Eyebrow prefix="" style={{ marginBottom: 4 }}>
                            Source
                          </Eyebrow>
                          <span>{d.source}</span>
                        </div>
                        {d.live && (
                          <Link href={d.live.href} className="pj-docs-live">
                            <span className="pj-docs-live-blurb">
                              {d.live.blurb}
                            </span>
                            <span className="pj-docs-live-cta">
                              {d.live.label}{" "}
                              <ArrowRight size={14} aria-hidden />
                            </span>
                          </Link>
                        )}
                      </article>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="pj-section">
          <div className="pj-note">
            Diagram engine (pan/zoom/fullscreen interactive Mermaid rendering)
            ships in a follow-up slice. Each diagram source is authored and
            ready — the artifact page currently indexes them and links to the
            underlying data source.
          </div>
        </section>

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
