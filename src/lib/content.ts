export const site = {
  brand: {
    initials: "DE",
    name: "David Ezieshi",
    role: "Operations & Business Systems Analyst",
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
  tag: "OPERATIONS & BUSINESS SYSTEMS ANALYST",
  titleStart: "Designing Systems That Drive",
  titleHighlight: "Operational Excellence.",
  subtitle:
    "I analyze, design, and optimize operational workflows and systems that improve efficiency, align teams, and drive measurable business outcomes.",
  primaryCta: { label: "View My Work", href: "/work" },
  secondaryCta: { label: "Let's Connect", href: "/contact" },
  competencies: [
    { label: "Process Optimization", icon: "Workflow" as const },
    { label: "Data-Informed Decisions", icon: "BarChart3" as const },
    { label: "Cross-Functional Alignment", icon: "Users" as const },
    { label: "Continuous Improvement", icon: "RefreshCw" as const },
  ],
  diagram: {
    centerLabel: "Process & Workflow Design",
    centerIcon: "GitBranch" as const,
    nodes: [
      {
        label: "Stakeholder Alignment",
        position: "top-left" as const,
        icon: "Users" as const,
      },
      {
        label: "Data & System Inputs",
        position: "top-right" as const,
        icon: "Database" as const,
      },
      {
        label: "Implementation & Coordination",
        position: "mid-bottom" as const,
        icon: "Settings" as const,
      },
      {
        label: "Operational Outcomes",
        position: "mid-right" as const,
        icon: "CheckCircle2" as const,
      },
    ],
  },
  metricCard: {
    label: "PROCESS EFFICIENCY",
    value: "28%",
    sublabel: "Improvement vs. Previous Quarter",
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
      "Python",
      "Power BI",
      "Looker Studio",
      "Jira",
      "Notion",
      "Figma",
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

export type Project = {
  slug: string;
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
};

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "[Project one title]",
    category: "Process Design",
    summary: "[One-line project summary placeholder.]",
    tags: ["Process Design", "Information Architecture", "Documentation"],
    metrics: [
      { value: "[00%]", label: "[Metric A]" },
      { value: "[00%]", label: "[Metric B]" },
      { value: "[00%]", label: "[Metric C]" },
      { value: "[00+]", label: "[Metric D]" },
    ],
    client: "[Client name]",
    timeline: "[Start] – [End]",
    role: "[Role]",
    team: "[Team composition]",
    tools: ["SQL", "Python", "Looker Studio", "Jira", "Notion"],
    challenge:
      "[Challenge paragraph placeholder. Describe the operational problem and the constraints that made it hard.]",
    approach: [
      "[Approach bullet one placeholder.]",
      "[Approach bullet two placeholder.]",
      "[Approach bullet three placeholder.]",
      "[Approach bullet four placeholder.]",
    ],
    deliverables: [
      "[Deliverable one placeholder.]",
      "[Deliverable two placeholder.]",
      "[Deliverable three placeholder.]",
      "[Deliverable four placeholder.]",
    ],
  },
  {
    slug: "project-two",
    title: "[Project two title]",
    category: "Data Analysis",
    summary: "[One-line project summary placeholder.]",
    tags: ["Workflow Analysis", "SLA Design", "Process Improvement"],
    metrics: [
      { value: "[00%]", label: "[Metric A]" },
      { value: "[00%]", label: "[Metric B]" },
    ],
    client: "[Client name]",
    timeline: "[Start] – [End]",
    role: "[Role]",
    team: "[Team composition]",
    tools: ["SQL", "Looker Studio"],
    challenge: "[Challenge paragraph placeholder.]",
    approach: [
      "[Approach bullet one.]",
      "[Approach bullet two.]",
      "[Approach bullet three.]",
    ],
    deliverables: [
      "[Deliverable one.]",
      "[Deliverable two.]",
    ],
  },
  {
    slug: "project-three",
    title: "[Project three title]",
    category: "Data Analysis",
    summary: "[One-line project summary placeholder.]",
    tags: ["SQL", "Data Analysis", "Risk Detection"],
    metrics: [
      { value: "[00%]", label: "[Metric A]" },
      { value: "[00%]", label: "[Metric B]" },
    ],
    client: "[Client name]",
    timeline: "[Start] – [End]",
    role: "[Role]",
    team: "[Team composition]",
    tools: ["SQL", "Python"],
    challenge: "[Challenge paragraph placeholder.]",
    approach: [
      "[Approach bullet one.]",
      "[Approach bullet two.]",
    ],
    deliverables: [
      "[Deliverable one.]",
      "[Deliverable two.]",
    ],
  },
];

export const work = {
  tag: "// SELECTED WORK",
  title: "Operational systems, analytics projects, and process improvements.",
  intro:
    "A curated view of projects across business analysis, workflow optimization, reporting systems, and operational execution.",
  filters: [
    "All",
    "Business Analysis",
    "Process Design",
    "Analytics",
    "Systems",
    "Reporting",
  ],
  featured: {
    pill: "Featured Case Study",
    title: "FIIT Co Operational Ecosystem",
    meta: "Business Analysis • Workflow Systems • Platform Administration",
    description:
      "Designed and deployed a live operational ecosystem supporting class management, internal workflows, customer engagement, and platform administration.",
    primaryCta: { label: "View Case Study", href: "/work/fiitco" },
    secondaryCta: { label: "Project Details", href: "/work/fiitco" },
    metrics: [
      {
        icon: "Rocket",
        title: "Live Deployment",
        sub: "Production Environment",
      },
      {
        icon: "Layers",
        title: "2 Platforms",
        sub: "Web + Admin Portal",
      },
      {
        icon: "Users",
        title: "Workflow Ownership",
        sub: "End-to-end Ownership",
      },
    ],
  },
  cards: [
    {
      icon: "BarChart3",
      category: "Predictive Analytics",
      title: "SLA Optimization Dashboard",
      desc: "Built a predictive dashboard to identify high-risk SLA breaches and improve operational performance.",
      tags: ["Dashboard", "ML", "Operations"],
      href: "/work",
    },
    {
      icon: "Database",
      category: "Data Systems",
      title: "Fraud Detection Pipeline",
      desc: "Designed a SQL-based monitoring pipeline that tracks risk signals and potential fraudulent activities.",
      tags: ["SQL", "Risk", "Monitoring"],
      href: "/work",
    },
    {
      icon: "FileText",
      category: "Business Analysis",
      title: "Requirements Documentation",
      desc: "Created BRDs, process maps, user stories, and requirements artifacts to support product development.",
      tags: ["BRD", "BPMN", "Requirements"],
      href: "/work",
    },
    {
      icon: "GitBranch",
      category: "Process Improvement",
      title: "Workflow Redesign System",
      desc: "Redesigned internal operational workflows to improve efficiency, clarity, and task ownership.",
      tags: ["Process", "Ops", "Systems"],
      href: "/work",
    },
    {
      icon: "TrendingUp",
      category: "Operational Reporting",
      title: "Executive Reporting Suite",
      desc: "Built executive dashboards and automated reports that support data-driven decision making.",
      tags: ["Reporting", "KPI", "Automation"],
      href: "/work",
    },
    {
      icon: "Settings",
      category: "Systems Administration",
      title: "Platform Administration",
      desc: "Managed user roles, system settings, data integrity, and day-to-day platform administration.",
      tags: ["Admin", "Security", "Governance"],
      href: "/work",
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
