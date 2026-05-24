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
      { label: "Email", href: "mailto:Ezieshie@gmail.com" },
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
      "My process focuses on transforming operational complexity into scalable systems that improve efficiency, visibility, and organizational alignment.",
  },
  executionTag: "// EXECUTION MODEL",
  steps: [
    {
      number: "01",
      subtitle: "Understanding the operational landscape",
      title: "Discovery & Analysis",
      description:
        "I begin by auditing workflows, stakeholder pain points, business objectives, and existing systems to uncover inefficiencies and identify opportunities for optimization.",
      tags: [
        "Stakeholder Interviews",
        "Workflow Mapping",
        "Requirements Gathering",
        "Gap Analysis",
      ],
    },
    {
      number: "02",
      subtitle: "Building scalable operational frameworks",
      title: "Systems Design",
      description:
        "After identifying constraints and opportunities, I design operational systems that simplify execution, improve visibility, and align teams around measurable outcomes.",
      tags: [
        "Process Architecture",
        "Automation Opportunities",
        "Documentation Systems",
        "KPI Framework Design",
      ],
    },
    {
      number: "03",
      subtitle: "Deploying structured solutions",
      title: "Implementation",
      description:
        "I collaborate with stakeholders and cross-functional teams to implement systems efficiently while ensuring usability, adoption, and long-term sustainability.",
      tags: [
        "Cross-team Coordination",
        "System Deployment",
        "Process Documentation",
        "Change Management",
      ],
    },
    {
      number: "04",
      subtitle: "Continuous improvement through data",
      title: "Optimization",
      description:
        "Operational excellence is iterative. I monitor metrics, gather feedback, and continuously refine workflows to improve performance and scalability over time.",
      tags: [
        "Performance Monitoring",
        "Operational Reporting",
        "Workflow Refinement",
        "Continuous Iteration",
      ],
    },
  ],
  metricsTag: "// PERFORMANCE IMPACT",
  metrics: [
    { value: "4.2×", label: "Workflow Efficiency", icon: "chart" },
    { value: "65%", label: "Process Reduction", icon: "clock" },
    { value: "100%", label: "Visibility Coverage", icon: "eye" },
  ],
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
  title: "Let's build the systems that make your operations run.",
  intro:
    "Whether you're untangling a workflow, scoping a new internal tool, or trying to turn scattered data into a real reporting story, I'm always open to conversations that move things from ambiguity to action.",
  channels: [
    { label: "Email", value: "Ezieshie@gmail.com", href: "mailto:Ezieshie@gmail.com" },
    { label: "LinkedIn", value: "linkedin.com/in/david-ezieshi", href: "https://www.linkedin.com/in/david-ezieshi/" },
    { label: "GitHub", value: "github.com/ezieshie-stack", href: "https://github.com/ezieshie-stack" },
    { label: "Availability", value: "Open to operations, systems analysis, and business analyst roles, plus short-term project work." },
  ],
  formTitle: "Send a Message",
  altCtas: [
    { label: "View My LinkedIn", href: "https://www.linkedin.com/in/david-ezieshi/" },
    { label: "Email Me", href: "mailto:Ezieshie@gmail.com" },
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
