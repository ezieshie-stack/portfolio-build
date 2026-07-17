// Picker manifest — matches DOC_LIB in project-fiitco-docs.jsx.
// Each entry says which markdown file to load, the picker label, the
// icon, and the "live" callout that appears at the top of the reader.

export type DocLiveLink = {
  href: string;
  label: string;
  blurb: string;
};

export type DocManifestEntry = {
  id: string;
  group: string;
  code: string;
  icon: string;
  file: string;
  title?: string;
  /** Set on files that are a pdftotext extract. Tells the parser to
   * discard the surrounding ASCII code block, strip the extract header,
   * and reshape numbered sections + column rows into normal blocks. */
  pdftext?: boolean;
  /** Meta rows to render at the top of the reader, when the file's
   * own front-matter is missing (e.g. pdftext files). */
  metaLine?: [string, string][];
  live: DocLiveLink | null;
};

export const DOC_MANIFEST: DocManifestEntry[] = [
  {
    id: "charter",
    group: "Initiate",
    code: "BA-01 · Project Charter",
    icon: "flag",
    file: "/docs/BA-01_Project_Charter.md",
    live: {
      href: "/work/fiitco/stakeholder",
      label: "View Stakeholder & RACI (A5)",
      blurb: "The charter names the stakeholders and governance, see the full **RACI matrix** as an interactive artifact.",
    },
  },
  {
    id: "exec",
    group: "Initiate",
    code: "BA-05 · Executive Summary",
    icon: "gauge",
    file: "/docs/BA-05_Executive_Summary.md",
    live: {
      href: "/work/fiitco",
      label: "Back to artifact index",
      blurb: "The one-page summary of the whole engagement.",
    },
  },
  {
    id: "brd",
    group: "Analyze",
    code: "BA-03 · Business Requirements",
    icon: "clipboard-list",
    file: "/docs/BA-03_Business_Requirements_Document.md",
    live: {
      href: "/work/fiitco/rtm",
      label: "View Traceability (A6)",
      blurb: "Every requirement here traces forward, follow it in the **requirements traceability** artifact.",
    },
  },
  {
    id: "personas",
    group: "Analyze",
    code: "BA-04 · Personas & Journeys",
    icon: "users",
    file: "/docs/BA-04_Personas_and_Journey_Maps.md",
    live: {
      href: "/work/fiitco/process",
      label: "View Process Models (A1)",
      blurb: "The journeys these personas take are modelled as **as-is / to-be** process maps.",
    },
  },
  {
    id: "pdd",
    group: "Design",
    code: "PDD · Product Design Document",
    icon: "layout-template",
    file: "/docs/FIIT_Co_Product_Design_Document.md",
    title: "Product Design Document",
    pdftext: true,
    metaLine: [
      ["Authors", "David Ezieshi, Lead BA · Emmanuel Ametepe Ofori, UX Analyst"],
      ["Version", "v1.0 Final · April 25, 2026"],
      ["Source", "pdftotext extract, formatting approximate"],
    ],
    live: {
      href: "/work/fiitco/data",
      label: "View Data & Scope Model (A2)",
      blurb: "The design's data model is explorable as an interactive **ERD** artifact.",
    },
  },
  {
    id: "stories",
    group: "Design",
    code: "BA-10 · User Story Backlog",
    icon: "list-checks",
    file: "/docs/BA-10_User_Story_Backlog.md",
    live: {
      href: "/work/fiitco/rules",
      label: "View Business Rules (A3)",
      blurb: "The acceptance criteria here encode the **business rules**, see them as a decision table.",
    },
  },
  {
    id: "uat",
    group: "Deliver",
    code: "BA-07 · UAT Plan & Test Cases",
    icon: "shield-check",
    file: "/docs/BA-07_UAT_Plan_and_Test_Cases.md",
    live: {
      href: "/work/fiitco/rtm",
      label: "View Traceability (A6)",
      blurb: "Each test case closes a requirement, see the closure signals in the **traceability** artifact.",
    },
  },
  {
    id: "vendor",
    group: "Deliver",
    code: "BA-13 · Vendor Comparison",
    icon: "scale",
    file: "/docs/BA-13_Vendor_Comparison_Matrix.md",
    live: null,
  },
  {
    id: "closure",
    group: "Close",
    code: "BA-16 · Closure Report",
    icon: "flag-triangle-right",
    file: "/docs/BA-16_Closure_Report.md",
    live: {
      href: "/work/fiitco/raid",
      label: "View RAID Log (A7)",
      blurb: "Closure carries open items forward, they live in the **RAID log** artifact.",
    },
  },
];
