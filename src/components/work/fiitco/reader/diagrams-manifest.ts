import type { DocManifestEntry } from "./docs-manifest";

// Reference: DIAG_LIB in ui_kits/portfolio/project-fiitco-diagrams.jsx.
// Phase strings deliberately don't match the docs page — the diagrams
// picker uses its own set (Architecture / Data / Function & Behaviour
// / Analysis). We pass them through via the phaseOrder prop.
export const DIAGRAM_PHASE_ORDER = [
  "Architecture",
  "Data",
  "Function & Behaviour",
  "Analysis",
] as const;

export const DIAGRAM_MANIFEST: (DocManifestEntry & { n: string })[] = [
  {
    id: "arch",
    group: "Architecture",
    code: "System Architecture · 5 diagrams",
    icon: "network",
    file: "/docs/06-system-architecture.md",
    title: "System Architecture",
    n: "5 diagrams",
    metaLine: [
      ["Artifact", "BA-08b · C4-style layered architecture"],
      ["Source", "Technical Architecture Handoff v1.0 · BA-08 Data Model"],
      ["Snapshot", "April 30, 2026 · handover v1.0"],
    ],
    live: {
      href: "/work/fiitco",
      label: "Visit the live product",
      blurb: "These diagrams describe the **two-site, one-backend** platform that runs in production today.",
    },
  },
  {
    id: "erd",
    group: "Data",
    code: "Entity-Relationship Diagram · 28 tables",
    icon: "table",
    file: "/docs/11-erd.md",
    title: "Entity-Relationship Diagram",
    n: "28 tables",
    metaLine: [
      ["Artifact", "BA-08 · Physical data model (Convex schema)"],
      ["Source", "Technical Architecture Handoff §2 · convex/schema.ts"],
      ["Scope", "28 tables · 4 domains"],
    ],
    live: {
      href: "/work/fiitco/data",
      label: "View Data & Scope Model (A2)",
      blurb: "The BA-authored **logical model** is explorable as its own interactive artifact. This is the physical schema behind it.",
    },
  },
  {
    id: "dfd",
    group: "Data",
    code: "Data Flow Diagram · L0 + L1",
    icon: "git-fork",
    file: "/docs/07-data-flow.md",
    title: "Data Flow Diagram",
    n: "L0 + L1",
    metaLine: [
      ["Artifact", "BA-08c · Gane-Sarson DFD (Level 0 + Level 1)"],
      ["Source", "BA-03 BRD · BA-08 Data Model · Tech Architecture Handoff"],
    ],
    live: {
      href: "/work/fiitco/data",
      label: "View Data & Scope Model (A2)",
      blurb: "Where the data lives is the **data model**; this shows where it moves.",
    },
  },
  {
    id: "fdd",
    group: "Function & Behaviour",
    code: "Functional Decomposition · 59 leaves",
    icon: "list-checks",
    file: "/docs/09-functional-decomposition.md",
    title: "Functional Decomposition",
    n: "59 leaves",
    metaLine: [
      ["Artifact", "BA-11b · Functional decomposition (L0 → L3)"],
      ["Source", "BA-03 BRD · BA-10 Backlog · BA-12 RTM"],
    ],
    live: {
      href: "/work/fiitco/rtm",
      label: "View Traceability (A6)",
      blurb: "Every leaf function traces to a business requirement. See the full trace in the **RTM** artifact.",
    },
  },
  {
    id: "usecase",
    group: "Function & Behaviour",
    code: "Use Case Diagram · 22 use cases",
    icon: "users",
    file: "/docs/10-use-case.md",
    title: "Use Case Diagram",
    n: "22 use cases",
    metaLine: [
      ["Artifact", "BA-10b · UML use case diagram"],
      ["Source", "BA-02 Stakeholders · BA-09 RBAC · BA-10 Backlog"],
    ],
    live: {
      href: "/work/fiitco/rules",
      label: "View Business Rules (A3)",
      blurb: "The authenticated use cases encode the access **business rules**. See them as a decision table.",
    },
  },
  {
    id: "fishbone",
    group: "Analysis",
    code: "Fishbone (Ishikawa) · incident I-02",
    icon: "gauge",
    file: "/docs/08-fishbone.md",
    title: "Fishbone Diagram",
    n: "6M · incident I-02",
    metaLine: [
      ["Artifact", "BA-06b · Ishikawa root-cause analysis"],
      ["Incident", "Stale-edge-cache · RAID entry I-02"],
      ["Author", "David Ezieshi"],
    ],
    live: {
      href: "/work/fiitco/raid",
      label: "View RAID Log (A7)",
      blurb: "This analyses the real production incident logged as **I-02** in the **RAID log**.",
    },
  },
];
