/**
 * Project case studies rendered at /work/[slug].
 *
 * Each entry maps to one detail page and is included in
 * generateStaticParams when `published: true`. Content here is drawn
 * from the real repositories and resume, with no fabricated metrics.
 * For self-directed projects the headline numbers are structural facts
 * (files, stages, dataset size) or measured results actually committed
 * in the repo; unverifiable README claims are deliberately left off.
 */

export type ProjectLink = { label: string; href: string };

export type Project = {
  slug: string;
  /** When false, the slug page is not generated and /work/<slug> 404s. */
  published: boolean;
  title: string;
  category: string;
  summary: string;
  tags: string[];
  metrics: { value: string; label: string }[];
  client: string;
  timeline: string;
  role: string;
  team: string;
  tools: string[];
  challenge: string;
  approach: string[];
  deliverables: string[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    // /work/fiitco + /work/telco-churn now have dedicated routes
    // (src/app/work/{fiitco,telco-churn}/page.tsx) with artifact hubs + sub-pages.
    // Marking unpublished so [slug] doesn't also generate.
    slug: "fiitco",
    published: false,
    title: "FIIT Co. Operational Ecosystem",
    category: "Operations Platform",
    summary:
      "A two-application operations platform for a fitness business: an internal class-management system and a paired public site, delivered and administered end to end on Next.js and Convex.",
    tags: ["Business Analysis", "Platform Administration", "Workflow Design"],
    metrics: [
      { value: "27", label: "Operational Modules" },
      { value: "32", label: "Data Tables" },
      { value: "9", label: "Backend Services" },
      { value: "Live", label: "In Production" },
    ],
    client: "FIIT Co. (George Brown Work-Integrated Learning)",
    timeline: "Feb 2026 – Present",
    role: "Business Analyst & Platform Administrator",
    team: "Within a six-person engagement",
    tools: ["Next.js 16", "Convex", "TypeScript", "TipTap", "Excel"],
    challenge:
      "FIIT Co. needed one system to run class programming, instructor scheduling, delivery tracking, and a public marketing site, without a dedicated engineering team. The work had to go from stakeholder requirements all the way to a live, maintainable deployment.",
    approach: [
      "Ran requirements elicitation with the partner and authored the engagement's BA Report covering scope, stakeholders, current and future state, and the data model.",
      "Translated the BA Report into working configuration: forms, workflows, permissions, and a 32-table Convex data model.",
      "Built role-based access with custom auth, approval workflows, and instructor scheduling with automated buffer-conflict detection.",
      "Shipped a self-service CMS so the partner can manage the public site (pricing, testimonials, blog, FAQ) without a developer.",
    ],
    deliverables: [
      "BA Report documenting scope, data model, and requirements",
      "UAT Report (12 slides; 8 bugs with severity and reproduction steps; 13 recommendations)",
      "56-finding P0–P3 pre-walkthrough audit",
      "Internal class-management platform spanning 27 modules",
      "Public marketing site with a self-service CMS",
      "Role-based access, approval workflows, and Excel import tooling",
    ],
    links: [
      { label: "View Live Site", href: "https://www.fiitco.ca" },
      { label: "View Repo", href: "https://github.com/ezieshie-stack/Fiitco-Operation" },
    ],
  },
  {
    // See fiitco note above — dedicated route at /work/telco-churn/.
    slug: "telco-churn",
    published: false,
    title: "Telco Customer Churn Analysis",
    category: "Data Analytics",
    summary:
      "A SQL and Python churn analysis of 7,043 telecom customers that segments churn drivers across contract, tenure, and service dimensions and predicts at-risk customers with a logistic-regression model.",
    tags: ["SQL", "Logistic Regression", "Churn Analysis"],
    metrics: [
      { value: "7,043", label: "Customers Analyzed" },
      { value: "0.86", label: "Model ROC-AUC" },
      { value: "69%", label: "Churn Precision" },
      { value: "58%", label: "Churn Recall" },
    ],
    client: "Self-directed project (IBM Telco dataset)",
    timeline: "2025",
    role: "Data Analyst",
    team: "Solo",
    tools: ["SQLite", "Python", "scikit-learn", "SciPy", "pandas"],
    challenge:
      "Month-to-month telecom customers churn far faster than contract customers, but marketing-led retention had stalled. The goal was to find the operational drivers of churn in the data and build a model that flags at-risk customers before they leave.",
    approach: [
      "Loaded the 7,043-customer dataset into SQLite and wrote 8 SQL segmentation queries across contract, payment method, tenure, and service quality.",
      "Validated contract type as a churn driver with a chi-square test (p < 5.8e-258).",
      "Built a logistic-regression pipeline with one-hot encoding and an 80/20 split, reaching 0.86 ROC-AUC.",
      "Identified fiber-without-tech-support (~49% churn) and month-to-month contracts (about 4x churn) as the highest-risk segments.",
    ],
    deliverables: [
      "8 SQL segmentation queries",
      "Chi-square statistical validation of churn drivers",
      "Logistic-regression churn model at 0.86 ROC-AUC",
      "Rendered analysis report with retention recommendations",
    ],
    links: [
      { label: "View Repo", href: "https://github.com/ezieshie-stack/telco-churn-analysis" },
      {
        label: "View Analysis",
        href: "https://htmlpreview.github.io/?https://github.com/ezieshie-stack/telco-churn-analysis/blob/main/Telco%20Customer%20Churn%20Analysis.html",
      },
    ],
  },
  {
    // Dedicated route at /work/movie-profitability with hub + 5 sub-pages.
    slug: "movie-profitability",
    published: false,
    title: "Movie Industry Profitability Analysis",
    category: "Analytics Dashboard",
    summary:
      "An end-to-end analytics project on roughly 5,000 films from TMDB and IMDB: a 9-stage Python ETL pipeline feeding an investment-to-profitability funnel and a 5-page interactive Streamlit dashboard.",
    tags: ["ETL", "Python", "Streamlit", "Tableau"],
    metrics: [
      { value: "5,000+", label: "Films Analyzed" },
      { value: "42", label: "Features Engineered" },
      { value: "9", label: "ETL Stages" },
      { value: "5", label: "Dashboard Pages" },
    ],
    client: "Self-directed project (TMDB + IMDB data)",
    timeline: "2025",
    role: "Data Analyst",
    team: "Solo",
    tools: ["Python", "pandas", "Streamlit", "Tableau", "Plotly"],
    challenge:
      "Studio profitability data is messy: split across TMDB and IMDB, full of JSON-encoded genres, missing budgets, and inconsistent formats. The goal was to clean and merge it into something that could answer where film capital is won and lost.",
    approach: [
      "Merged TMDB (4,803) and IMDB (5,043) into a roughly 5,000-film master dataset with 42 features.",
      "Built a 9-stage Python ETL pipeline (JSON parsing, financial cleaning, feature engineering) outputting 6 analysis-ready datasets.",
      "Modeled a 7-stage investment-to-profitability funnel to locate the biggest value drop-offs.",
      "Shipped a 5-page interactive Streamlit dashboard with a filterable movie browser.",
    ],
    deliverables: [
      "9-stage ETL pipeline and 6 clean datasets",
      "7-stage profitability funnel model",
      "5-page Streamlit dashboard (live)",
      "Documented data limitations (2017 cutoff, marketing excluded)",
    ],
    links: [
      { label: "View Repo", href: "https://github.com/ezieshie-stack/movies-dataset" },
      {
        label: "Live Dashboard",
        href: "https://movies-dataset-uhi6ckeurkswnkfjk5kree.streamlit.app",
      },
    ],
  },
  {
    // Dedicated route at /work/fraud-detection with hub + 5 sub-pages.
    slug: "fraud-detection",
    published: false,
    title: "Fraud Detection SQL Pipeline",
    category: "Data Engineering",
    summary:
      "A PostgreSQL fraud-detection architecture on the synthetic PaySim dataset, using window functions to engineer transaction-velocity and destination-risk features for an interpretable, rule-based scoring engine.",
    tags: ["PostgreSQL", "Window Functions", "Risk Scoring"],
    metrics: [
      { value: "9", label: "SQL Build Files" },
      { value: "7", label: "Pipeline Layers" },
      { value: "4", label: "Fraud Patterns" },
      { value: "4", label: "Scoring Rules" },
    ],
    client: "Self-directed project (PaySim dataset)",
    timeline: "2025",
    role: "Data / SQL Analyst",
    team: "Solo",
    tools: ["PostgreSQL", "SQL Window Functions", "PaySim"],
    challenge:
      "Fraud detection fails when it over-alerts and buries analysts. The goal was to design an interpretable, rule-based pipeline whose every alert can be explained and audited, rather than a black-box model.",
    approach: [
      "Designed a 7-layer pipeline from raw load through staging, feature engineering, scoring, and alerting.",
      "Engineered velocity and destination-risk features using window functions (partitioned, time-ranged SUM, COUNT, and AVG OVER).",
      "Built a transparent rule-based scoring engine (0 to 110) across 4 fraud patterns: velocity, structuring, balance anomalies, and behavioral sequences.",
      "Added merchant-risk profiling, a daily investigation queue, and data-quality assertions.",
    ],
    deliverables: [
      "9-file SQL build pipeline from schema to QA",
      "Window-function feature views",
      "Rule-based risk-scoring engine",
      "Daily alert queue and merchant-risk profiles",
    ],
    links: [
      {
        label: "View Repo",
        href: "https://github.com/ezieshie-stack/Fraud-Detection-SQL-Window-Functions",
      },
    ],
  },
  {
    // Dedicated route at /work/sla-optimization with hub + 5 sub-pages.
    slug: "sla-optimization",
    published: false,
    title: "Customer Support SLA Optimization",
    category: "Predictive Analytics",
    summary:
      "A cost-sensitive machine-learning model that predicts which support tickets will breach SLA and ranks them by financial risk, surfaced in a Streamlit decision dashboard.",
    tags: ["Machine Learning", "Streamlit", "Python"],
    metrics: [
      { value: "RF", label: "Cost-Sensitive Model" },
      { value: "4", label: "SLA Priority Tiers" },
      { value: "2-Tab", label: "Decision Dashboard" },
      { value: "Top-N", label: "Daily Triage Queue" },
    ],
    client: "Self-directed project",
    timeline: "2025",
    role: "Data Analyst",
    team: "Solo",
    tools: ["Python", "scikit-learn", "Streamlit", "Tableau", "pandas"],
    challenge:
      "Support teams miss SLAs predictably, not at random, and chasing every ticket equally wastes capacity. The goal was to predict which tickets will breach and rank them by financial risk so managers escalate only the ones that matter.",
    approach: [
      "Engineered ticket-age, priority, and channel features from a support-ticket dataset.",
      "Trained a cost-sensitive Random Forest with a threshold tuned to minimize expected financial loss rather than raw accuracy.",
      "Built a two-tab Streamlit dashboard: a strategic-context view and a command center that ranks tickets by predicted breach probability.",
      "Modeled a capacity-constrained escalation strategy that escalates only the top-ranked tickets each day.",
    ],
    deliverables: [
      "Cost-sensitive Random Forest breach-prediction model",
      "Feature engineering and financial-loss threshold optimization",
      "Two-tab Streamlit decision dashboard",
      "Capacity-constrained escalation simulation",
    ],
    links: [
      {
        label: "View Repo",
        href: "https://github.com/ezieshie-stack/Customer-Support-SLA-Optimization-Project",
      },
    ],
  },
  {
    // Dedicated route at /work/ba-process-design with hub + 4 sub-pages.
    slug: "ba-process-design",
    published: false,
    title: "Business Analysis & Process Design Portfolio",
    category: "Business Analysis",
    summary:
      "A set of BABOK v3 business-analysis artifacts (a Business Requirements Document, an As-Is / To-Be process design, BPMN swimlane maps, and use-case specifications) demonstrating end-to-end BA methodology on a representative operational scenario.",
    tags: ["BABOK v3", "BPMN", "Requirements"],
    metrics: [
      { value: "4", label: "Core BA Artifacts" },
      { value: "BRD", label: "Requirements Doc" },
      { value: "BPMN", label: "Process Notation" },
      { value: "As-Is/To-Be", label: "Gap Analysis" },
    ],
    client: "Methodology portfolio (self-directed)",
    timeline: "2025",
    role: "Business Analyst",
    team: "Solo",
    tools: ["Lucidchart", "BPMN", "BABOK v3", "MoSCoW"],
    challenge:
      "Business analysis is judged on artifacts: can you scope requirements, map a process, and specify a solution clearly? This portfolio demonstrates that toolkit end to end on a representative operational-optimization scenario.",
    approach: [
      "Authored a Business Requirements Document covering scope, stakeholder analysis, and functional and non-functional requirements.",
      "Produced an As-Is / To-Be process design with gap analysis and exception handling.",
      "Drew BPMN swimlane diagrams with decision gateways and message flows.",
      "Wrote use-case specifications with actor-system flows and pre and post conditions.",
    ],
    deliverables: [
      "Business Requirements Document (BRD)",
      "Process Design Document (As-Is / To-Be)",
      "BPMN swimlane process maps",
      "Use-case specifications",
    ],
    links: [
      {
        label: "View Repo",
        href: "https://github.com/ezieshie-stack/Business-Analysis-Process-Design-Portfolio",
      },
    ],
  },
];

export const publishedProjects = projects.filter((p) => p.published);
