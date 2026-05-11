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
    text: "© [YEAR] [NAME PLACEHOLDER]. All rights reserved.",
    links: [
      { label: "LinkedIn", href: "#" },
      { label: "Email", href: "mailto:placeholder@example.com" },
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
    title: "Fiitco — Fitness Platform Process Redesign",
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
      dates: "[Start year]—[End year]",
    },
    {
      degree: "[Degree placeholder]",
      school: "[Institution placeholder]",
      dates: "[Start month year]—[End month year]",
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
    timeline: "[Start]—[End]",
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
    timeline: "[Start]—[End]",
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
    timeline: "[Start]—[End]",
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
  tag: "MY WORK",
  title: "[Work index headline placeholder line 1]\n[Work index headline placeholder line 2]",
  intro:
    "[Work intro paragraph placeholder. Briefly describe the kinds of projects collected here.]",
  filters: [
    "All",
    "Process Design",
    "Data Analysis",
    "System Design",
    "Improvement",
  ],
  cta: {
    title: "Have a project in mind?",
    body: "[Closing line placeholder describing willingness to chat.]",
    label: "Let's Connect",
    href: "/contact",
  },
};

export const process = {
  tag: "MY APPROACH",
  title: "[Process headline placeholder line 1]\n[Process headline placeholder line 2]",
  intro: "[Process intro paragraph placeholder.]",
  steps: [
    {
      number: "01",
      title: "Understand",
      description: "[Step description placeholder.]",
    },
    {
      number: "02",
      title: "Analyze",
      description: "[Step description placeholder.]",
    },
    {
      number: "03",
      title: "Design",
      description: "[Step description placeholder.]",
    },
    {
      number: "04",
      title: "Implement",
      description: "[Step description placeholder.]",
    },
    {
      number: "05",
      title: "Evaluate",
      description: "[Step description placeholder.]",
    },
  ],
  principlesTag: "CORE PRINCIPLES",
  principles: [
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
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
};

export const insights = {
  tag: "INSIGHTS",
  title: "[Insights headline placeholder line 1]\n[Insights headline placeholder line 2]",
  intro: "[Insights intro paragraph placeholder.]",
  filters: ["All", "Process Improvement", "Data & Analytics", "Systems"],
  articles: [
    {
      slug: "article-one",
      title: "[Article one title placeholder]",
      excerpt: "[Article one excerpt placeholder.]",
      category: "Process Improvement",
      date: "[Mon DD, YYYY]",
      readTime: "[N] min read",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    },
    {
      slug: "article-two",
      title: "[Article two title placeholder]",
      excerpt: "[Article two excerpt placeholder.]",
      category: "Process Improvement",
      date: "[Mon DD, YYYY]",
      readTime: "[N] min read",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    },
    {
      slug: "article-three",
      title: "[Article three title placeholder]",
      excerpt: "[Article three excerpt placeholder.]",
      category: "Systems",
      date: "[Mon DD, YYYY]",
      readTime: "[N] min read",
      image:
        "https://images.unsplash.com/photo-1518433278988-2b2bb19767ad?auto=format&fit=crop&q=80&w=800",
    },
  ] as Article[],
  viewAll: { label: "View All Articles", href: "/insights" },
};

export const contact = {
  tag: "GET IN TOUCH",
  title: "[Contact headline placeholder]",
  intro:
    "[Contact intro paragraph placeholder. One or two sentences describing availability and what you're open to.]",
  channels: [
    { label: "Email", value: "[your-email@example.com]", href: "mailto:placeholder@example.com" },
    { label: "LinkedIn", value: "[linkedin.com/in/your-handle]", href: "#" },
    { label: "Location", value: "[City, Region, Country]" },
    { label: "Availability", value: "[Availability statement placeholder]" },
  ],
  formTitle: "Send a Message",
  altCtas: [
    { label: "View My LinkedIn", href: "#" },
    { label: "Email Me", href: "mailto:placeholder@example.com" },
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
