export const site = {
  brand: {
    initials: "DE",
    name: "David Ezieshi",
    role: "Operations & Process Analyst",
  },
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Process", href: "/process" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
  cta: { label: "Let's Connect", href: "/contact" },
  footer: {
    text: "© [YEAR] David Ezieshi. All rights reserved.",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/david-ezieshi/" },
      { label: "Email", href: "mailto:ezieshie@gmail.com" },
      { label: "GitHub", href: "https://github.com/ezieshie-stack" },
    ],
  },
} as const;

export const home = {
  tag: "OPERATIONS & PROCESS ANALYST · TORONTO, CANADA",
  titleStart: "Diagnosing Workflows.",
  titleHighlight: "Building The Fix.",
  subtitle:
    "I diagnose operational bottlenecks, redesign the workflows that cause them, and prototype the internal tools that ship the fix. Early-career analyst. Toronto.",
  primaryCta: { label: "View My Work", href: "/work" },
  secondaryCta: { label: "Let's Connect", href: "/contact" },
  competencies: [
    { label: "Process Diagnosis", icon: "Workflow" as const },
    { label: "Workflow Redesign", icon: "GitCompare" as const },
    { label: "BPMN Mapping", icon: "Waypoints" as const },
    { label: "Bottleneck Analysis", icon: "Filter" as const },
    { label: "Rapid Prototyping", icon: "Sparkles" as const },
    { label: "Internal Tooling", icon: "Wrench" as const },
  ],
  diagram: {
    centerLabel: "Diagnose and Redesign",
    centerIcon: "GitBranch" as const,
    nodes: [
      {
        label: "Stakeholder Interviews",
        position: "top-left" as const,
        icon: "Users" as const,
      },
      {
        label: "Current-State Data",
        position: "top-right" as const,
        icon: "Database" as const,
      },
      {
        label: "Documentation and Hand Off",
        position: "mid-bottom" as const,
        icon: "Settings" as const,
      },
      {
        label: "Prototype the Tool",
        position: "mid-right" as const,
        icon: "CheckCircle2" as const,
      },
    ],
  },
  metricCard: {
    label: "MY METHOD",
    value: "Diagnose. Redesign. Prototype.",
    sublabel: "Three steps. One analyst. No engineering ticket required.",
  },
  featured: {
    tag: "FEATURED PROJECT",
    pill: "Process Redesign",
    title: "Fiitco: Fitness Platform Process Redesign",
    description:
      "Redesigned end-to-end workflows, implemented role-based systems, and built operational reporting that improved efficiency by 28%.",
    workflow: {
      title: "End-to-End Workflow",
      steps: [
        ["User Registration", "Workout Selection", "Payment Processing", "Plan Activation"],
        ["Progress Tracking", "Performance Analytics", "Reporting & Insights", "Continuous Improvement"],
      ] as const,
    },
    metrics: [
      { value: "28%", label: "Improvement in Operational Efficiency" },
      { value: "32%", label: "Reduction in Response Time" },
      { value: "25%", label: "Increase in Data Accuracy" },
      { value: "20+", label: "Hours Saved Monthly" },
    ],
    cta: { label: "View Case Study", href: "/work/featured" },
  },
  tools: {
    label: "TOOLS & TECHNOLOGIES",
    items: [
      "Excel",
      "SQL",
      "Power BI",
      "Looker Studio",
      "Jira",
      "Confluence",
      "Notion",
      "Lucidchart",
      "Miro",
      "Visio",
    ],
  },
};

export const about = {
  tag: "ABOUT ME",
  title: "[Section heading placeholder line 1.]\n[Section heading placeholder line 2.]\n[Section heading placeholder line 3.]",
  body: [
    "[About paragraph one placeholder. Replace with a short bio paragraph that describes your background and focus.]",
    "[About paragraph two placeholder. Replace with a complementary paragraph that highlights what you enjoy and where you add value.]",
  ],
  stats: [
    { value: "[0+]", label: "[Stat label A]" },
    { value: "[0+]", label: "[Stat label B]" },
    { value: "[0%]", label: "[Stat label C]" },
    { value: "[Word]", label: "[Stat label D]" },
  ],
  drivesTag: "WHAT DRIVES ME",
  drives: [
    {
      title: "[Principle one]",
      description: "[Short principle description placeholder.]",
    },
    {
      title: "[Principle two]",
      description: "[Short principle description placeholder.]",
    },
    {
      title: "[Principle three]",
      description: "[Short principle description placeholder.]",
    },
    {
      title: "[Principle four]",
      description: "[Short principle description placeholder.]",
    },
  ],
  educationTag: "EDUCATION",
  education: [
    {
      degree: "[Degree placeholder]",
      school: "[Institution placeholder]",
      dates: "[Start year] – [End year]",
    },
    {
      degree: "[Degree placeholder]",
      school: "[Institution placeholder]",
      dates: "[Start month year] – [End month year]",
    },
  ],
};

// Project case studies live in `src/data/projects.ts` so unpublished
// placeholders don't ship to production. Import `publishedProjects`
// from there in any page that needs to render or link to a project.

export const work = {
  tag: "// SELECTED WORK",
  title: "Operational systems, data analysis, and the artifacts behind them.",
  intro:
    "A curated set of projects across platform delivery, data analysis, SQL engineering, and business-analysis documentation.",
  filters: [
    "All",
    "Analytics",
    "Business Analysis",
    "Data Engineering",
  ],
  featured: {
    pill: "Featured Case Study",
    title: "FIIT Co. Operational Ecosystem",
    meta: "Business Analysis • Platform Administration • Workflow Design",
    description:
      "A two-application operations platform for a fitness business, built and administered end to end on Next.js and Convex: an internal class-management system spanning 27 modules plus a paired public site with a self-service CMS.",
    primaryCta: { label: "View Case Study", href: "/work/fiitco" },
    secondaryCta: { label: "Live Site", href: "https://www.fiitco.ca" },
    metrics: [
      {
        icon: "Layers",
        title: "27 Modules",
        sub: "Internal + public CMS",
      },
      {
        icon: "GitBranch",
        title: "32 Tables",
        sub: "Convex data model",
      },
      {
        icon: "Rocket",
        title: "Live",
        sub: "In production",
      },
    ],
  },
  cards: [
    {
      icon: "BarChart3",
      category: "Data Analytics",
      title: "Telco Customer Churn Analysis",
      desc: "Segmented 7,043 telecom customers with 8 SQL queries and a logistic-regression model (0.86 ROC-AUC) to find and predict churn drivers.",
      tags: ["SQL", "Logistic Regression", "Churn"],
      href: "/work/telco-churn",
    },
    {
      icon: "TrendingUp",
      category: "Analytics Dashboard",
      title: "Movie Industry Profitability",
      desc: "A 9-stage Python ETL pipeline on ~5,000 films feeding an 8-stage profitability funnel and a live 5-page Streamlit dashboard.",
      tags: ["ETL", "Python", "Streamlit"],
      href: "/work/movie-profitability",
    },
    {
      icon: "Database",
      category: "Data Engineering",
      title: "Fraud Detection SQL Pipeline",
      desc: "A 7-layer PostgreSQL pipeline using window functions for velocity and risk features feeding an interpretable, rule-based scoring engine.",
      tags: ["PostgreSQL", "Window Functions", "Risk Scoring"],
      href: "/work/fraud-detection",
    },
    {
      icon: "GitBranch",
      category: "Predictive Analytics",
      title: "Customer Support SLA Optimization",
      desc: "A cost-sensitive Random Forest that predicts SLA breaches and ranks tickets by financial risk in a Streamlit decision dashboard.",
      tags: ["Machine Learning", "Streamlit", "Python"],
      href: "/work/sla-optimization",
    },
    {
      icon: "FileText",
      category: "Business Analysis",
      title: "Business Analysis & Process Design",
      desc: "BABOK v3 artifacts: a BRD, an As-Is / To-Be process design, BPMN swimlane maps, and use-case specifications.",
      tags: ["BABOK v3", "BPMN", "Requirements"],
      href: "/work/ba-process-design",
    },
  ],
  philosophyTag: "// HOW I APPROACH WORK",
  philosophyHeading: "I focus on projects that connect:",
  philosophy: [
    { icon: "FileText", title: "Requirements", desc: "Understand the need" },
    { icon: "GitBranch", title: "Workflows", desc: "Design the process" },
    { icon: "Layers", title: "Systems", desc: "Build or optimize" },
    { icon: "BarChart3", title: "Reporting", desc: "Trace every metric" },
    { icon: "Target", title: "Outcomes", desc: "Ship the change" },
  ],
};

export const processPage = {
  hero: {
    eyebrow: "// PROCESS FRAMEWORK",
    title: "Systems designed for execution.",
    highlight: "execution.",
    description:
      "My process turns operational complexity into working systems: I diagnose the bottleneck, redesign the workflow, and prototype the tool that ships the fix.",
  },
  executionTag: "// EXECUTION MODEL",
  steps: [
    {
      number: "01",
      subtitle: "Stakeholder discovery",
      title: "Listen",
      description:
        "I sit with the people who live the process, walk the current workflow end to end, and note exactly where they wince. The goal is the real problem, not just the one everyone complains about.",
      tags: [
        "Stakeholder Interviews",
        "Requirements Elicitation",
        "Current-State Walkthrough",
      ],
    },
    {
      number: "02",
      subtitle: "The as-is in BPMN",
      title: "Map",
      description:
        "I draw the current state in BPMN with swimlanes, gateways, and handoffs, so the bottleneck is visible to everyone before anyone proposes a fix.",
      tags: ["BPMN 2.0", "Swimlane Mapping", "Process Documentation"],
    },
    {
      number: "03",
      subtitle: "Quantify the bottleneck",
      title: "Diagnose",
      description:
        "I find where time, cost, quality, or volume is leaking and put a number on it, so the redesign targets the real constraint instead of a symptom.",
      tags: ["Bottleneck Analysis", "Root Cause Analysis", "Gap Analysis"],
    },
    {
      number: "04",
      subtitle: "Build the fix",
      title: "Prototype",
      description:
        "I redesign the to-be workflow and, when the engineering queue can't move fast enough, prototype the tool that delivers it using internal-tools platforms and AI-accelerated builds.",
      tags: ["To-Be Design", "Rapid Prototyping", "Internal Tooling"],
    },
    {
      number: "05",
      subtitle: "Document and transition",
      title: "Hand Off",
      description:
        "I document the change in plain language, train the user, and transition ownership, so the fix sticks after I step away.",
      tags: ["Documentation", "User Acceptance Testing", "Change Management"],
    },
  ],
  metricsTag: "// RECENT RESULTS",
  metrics: [
    { value: "27", label: "Module platform delivered (FIIT Co.)", icon: "chart" },
    { value: "0.86", label: "Churn model ROC-AUC (Telco)", icon: "eye" },
    { value: "5,000+", label: "Records analyzed (Movies)", icon: "data" },
  ],
  resultsCta: { label: "See these phases applied — View Work", href: "/work" },
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image?: string;
};

export const insights = {
  tag: "// INSIGHTS",
  title: "Thinking through systems, workflows, and operational clarity.",
  intro:
    "Notes on business analysis, process design, operational systems, reporting infrastructure, and the practical work of improving how teams execute.",
  featured: {
    pill: "Featured Insight",
    title:
      "Operational systems are only valuable when people can actually use them.",
    body: "Good systems do more than organize information. They reduce friction, clarify ownership, improve visibility, and help teams make better decisions faster.",
    ctaLabel: "Read Insight",
    ctaHref: "/insights/operational-systems",
  },
  filters: ["All", "Process Design", "Business Analysis", "Analytics", "Systems"],
  articles: [
    {
      slug: "operational-clarity-workflows",
      title: "Why operational clarity starts with better workflows",
      excerpt:
        "A breakdown of how process visibility, ownership, and documentation improve team execution.",
      category: "Process Design",
      date: "Mar 2026",
      readTime: "5 min read",
    },
    {
      slug: "requirements-to-systems",
      title: "Turning requirements into systems teams can actually use",
      excerpt:
        "How strong requirements gathering connects business needs to practical execution.",
      category: "Business Analysis",
      date: "Mar 2026",
      readTime: "6 min read",
    },
    {
      slug: "dashboards-and-decisions",
      title: "Dashboards are only useful when they support decisions",
      excerpt:
        "Why reporting systems should focus on action, not just visualization.",
      category: "Analytics",
      date: "Feb 2026",
      readTime: "4 min read",
    },
  ] as Article[],
};

export const contact = {
  tag: "GET IN TOUCH",
  title: "Let's diagnose the problem and ship the fix.",
  intro:
    "Whether you're hiring for an operations or analyst role, untangling a workflow, or scoping an internal tool, I'm open to conversations that move things from ambiguity to action.",
  channels: [
    { label: "Email", value: "ezieshie@gmail.com", href: "mailto:ezieshie@gmail.com" },
    { label: "LinkedIn", value: "linkedin.com/in/david-ezieshi", href: "https://www.linkedin.com/in/david-ezieshi/" },
    { label: "GitHub", value: "github.com/ezieshie-stack", href: "https://github.com/ezieshie-stack" },
    { label: "Availability", value: "Toronto-based, eligible to work in Canada. Open to operations, process, and business analyst roles, plus short-term project work." },
  ],
  formTitle: "Send a Message",
  altCtas: [
    { label: "View My LinkedIn", href: "https://www.linkedin.com/in/david-ezieshi/" },
    { label: "Email Me", href: "mailto:ezieshie@gmail.com" },
  ],
};

export const resume = {
  tag: "MY RESUME",
  title: "[Resume headline placeholder line 1]\n[Resume headline placeholder line 2]",
  intro: "[Resume intro paragraph placeholder.]",
  whatTag: "WHAT YOU'LL FIND",
  what: [
    "[Resume highlight one placeholder.]",
    "[Resume highlight two placeholder.]",
    "[Resume highlight three placeholder.]",
  ],
  expertiseTag: "AREAS OF EXPERTISE",
  expertise: [
    "Process Optimization",
    "Data Analysis & Reporting",
    "Systems Design",
    "Workflow Automation",
    "Business Analysis",
    "Stakeholder Management",
  ],
  downloadCta: { label: "Download Resume", href: "#" },
  viewCta: { label: "View Resume Online", href: "#" },
};

export const notFound = {
  code: "404",
  title: "Page Not Found",
  description:
    "The page you're looking for doesn't exist or has been moved.",
  cta: { label: "Go Back Home", href: "/" },
};
