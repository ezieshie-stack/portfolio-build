import Link from "next/link";
import { notFound } from "next/navigation";
import AnimateIn from "@/components/AnimateIn";

/* ─── Project data ─────────────────────────────────────────── */
const projects: Record<string, Project> = {
  "fitco-operations-platform": {
    slug: "fitco-operations-platform",
    emoji: "⚙️",
    title: "Fitco Operations Platform",
    subtitle: "Operational Structure, Workflows & Information Architecture",
    tags: ["Process Design", "Information Architecture", "Documentation"],
    overview:
      "Fitco needed a clear operational foundation to support its growing customer-facing platform. I was brought in to design the operational structure, map out core workflows, and build the information architecture that would allow internal teams to execute efficiently and at scale.",
    challenge:
      "The platform lacked standardised processes — teams were operating with inconsistent workflows, unclear ownership, and no central documentation. This created friction between customer-facing and internal teams, leading to delays and repeated errors.",
    approach: [
      {
        step: "Discovery & Stakeholder Interviews",
        desc: "Conducted interviews with cross-functional stakeholders to understand current pain points, existing processes, and priority gaps.",
      },
      {
        step: "Process Mapping",
        desc: "Created end-to-end process maps for core operational flows including onboarding, support escalations, and internal handoffs.",
      },
      {
        step: "Information Architecture",
        desc: "Designed a structured documentation framework covering SOPs, role responsibilities, and workflow diagrams — all organised for easy retrieval.",
      },
      {
        step: "Implementation Support",
        desc: "Worked alongside team leads to roll out new processes and train stakeholders on the updated operating model.",
      },
    ],
    outcomes: [
      { metric: "40%", label: "Reduction in onboarding time" },
      { metric: "3×", label: "Faster process documentation" },
      { metric: "100%", label: "Team adoption within 6 weeks" },
    ],
    tools: ["Notion", "Lucidchart", "Jira", "Confluence"],
    next: "sla-escalation-optimization",
    nextTitle: "SLA & Escalation Optimization",
  },

  "sla-escalation-optimization": {
    slug: "sla-escalation-optimization",
    emoji: "📈",
    title: "SLA & Escalation Optimization",
    subtitle: "Workflow Analysis, SLA Design & Process Improvement",
    tags: ["Workflow Analysis", "SLA Design", "Process Improvement"],
    overview:
      "A high escalation rate was straining the support team and impacting customer satisfaction. I analysed the root causes, redesigned the SLA framework, and implemented targeted process changes that reduced escalation rates by 28% within two months.",
    challenge:
      "The support team was handling a disproportionate volume of escalated tickets. SLA thresholds were poorly calibrated, routing logic was inconsistent, and there was no clear escalation criteria — causing agents to escalate prematurely or too late.",
    approach: [
      {
        step: "Data Analysis",
        desc: "Queried ticket data to identify escalation patterns by category, agent, time of day, and SLA tier.",
      },
      {
        step: "Root Cause Analysis",
        desc: "Mapped escalation triggers against SLA definitions to identify misalignments and gaps in the triage process.",
      },
      {
        step: "SLA Redesign",
        desc: "Rebuilt SLA tiers with clearer definitions, appropriate time thresholds, and response ownership by tier.",
      },
      {
        step: "Agent Enablement",
        desc: "Created decision trees and escalation playbooks so agents could resolve more issues at first contact.",
      },
    ],
    outcomes: [
      { metric: "−28%", label: "Escalation rate reduction" },
      { metric: "−19%", label: "Average resolution time" },
      { metric: "94%", label: "First-contact resolution (up from 76%)" },
    ],
    tools: ["SQL", "Excel", "Looker Studio", "Notion"],
    next: "fraud-detection-analysis",
    nextTitle: "Fraud Detection Analysis (SQL)",
  },

  "fraud-detection-analysis": {
    slug: "fraud-detection-analysis",
    emoji: "🔍",
    title: "Fraud Detection Analysis (SQL)",
    subtitle: "SQL Querying, Pattern Detection & Risk Analysis",
    tags: ["SQL", "Data Analysis", "Risk Detection"],
    overview:
      "Built a suite of SQL queries to surface suspicious transaction patterns and high-risk accounts. The analysis improved fraud detection accuracy, reduced false positives, and gave the risk team a repeatable detection framework.",
    challenge:
      "The existing fraud detection relied on manual review and broad rule sets, leading to both missed fraud and a high false-positive rate. There was no systematic approach to identify behavioural patterns that indicated fraud risk.",
    approach: [
      {
        step: "Data Exploration",
        desc: "Explored transaction tables to understand data structure, fields available, and distribution of key variables.",
      },
      {
        step: "Pattern Identification",
        desc: "Identified high-risk signals: unusual transaction velocity, atypical geographic patterns, and deviation from baseline behaviour.",
      },
      {
        step: "Query Development",
        desc: "Built modular SQL queries for each fraud signal — designed for reuse and easy adaptation as patterns evolved.",
      },
      {
        step: "Validation & Handoff",
        desc: "Validated query results against known fraud cases, refined thresholds, and documented the detection logic for the risk team.",
      },
    ],
    outcomes: [
      { metric: "↑22%", label: "Fraud detection accuracy" },
      { metric: "↓35%", label: "False positive rate" },
      { metric: "4×", label: "Faster fraud flag review cycle" },
    ],
    tools: ["SQL", "Excel", "Looker Studio"],
    next: "user-flow-authentication-design",
    nextTitle: "User Flow & Authentication Design",
  },

  "user-flow-authentication-design": {
    slug: "user-flow-authentication-design",
    emoji: "🔐",
    title: "User Flow & Authentication Design",
    subtitle: "Process Mapping, System Design & Documentation",
    tags: ["Process Mapping", "System Design", "Documentation"],
    overview:
      "Designed end-to-end user flows and authentication processes for a secure platform. The project clarified session management logic, reduced friction in the sign-in experience, and produced clear documentation for engineering and product teams.",
    challenge:
      "The authentication flow lacked a unified design — edge cases were handled inconsistently, error states were unclear, and there was no documented flow for engineering to build against reliably. This led to UX gaps and recurring bugs in session handling.",
    approach: [
      {
        step: "Flow Mapping",
        desc: "Mapped all authentication states — new user sign-up, returning login, password reset, session expiry, and error handling paths.",
      },
      {
        step: "Edge Case Analysis",
        desc: "Identified all failure and exception states, ensuring each had a defined user-facing response and system behaviour.",
      },
      {
        step: "Design Documentation",
        desc: "Created detailed flow diagrams and annotated wireframes covering every authentication state and transition.",
      },
      {
        step: "Stakeholder Review",
        desc: "Walked through flows with product and engineering to validate logic, resolve ambiguities, and align on implementation.",
      },
    ],
    outcomes: [
      { metric: "100%", label: "Authentication states documented" },
      { metric: "−60%", label: "Auth-related bug reports post-launch" },
      { metric: "2 weeks", label: "Engineering handoff to build-ready" },
    ],
    tools: ["Lucidchart", "Notion", "Figma"],
    next: "fitco-operations-platform",
    nextTitle: "Fitco Operations Platform",
  },
};

/* ─── Types ─────────────────────────────────────────────────── */
interface Project {
  slug: string;
  emoji: string;
  title: string;
  subtitle: string;
  tags: string[];
  overview: string;
  challenge: string;
  approach: { step: string; desc: string }[];
  outcomes: { metric: string; label: string }[];
  tools: string[];
  next: string;
  nextTitle: string;
}

/* ─── Static params ──────────────────────────────────────────── */
export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

/* ─── Page ───────────────────────────────────────────────────── */
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) notFound();

  return (
    <div style={{ paddingTop: "96px", paddingBottom: "80px" }}>
      <div className="section-container flex flex-col gap-16">

        {/* ── Back link ── */}
        <AnimateIn>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm transition-colors"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            ← Back to Projects
          </Link>
        </AnimateIn>

        {/* ── Hero ── */}
        <div className="flex flex-col gap-6 max-w-[720px]">
          <AnimateIn>
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
              style={{ background: "rgba(129,74,200,0.12)", border: "1px solid rgba(129,74,200,0.25)" }}
            >
              {project.emoji}
            </div>
          </AnimateIn>
          <AnimateIn delay={0.07}>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-[11px] font-medium"
                  style={{
                    background: "rgba(129,74,200,0.12)",
                    border: "1px solid rgba(129,74,200,0.25)",
                    color: "#c084fc",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </AnimateIn>
          <AnimateIn delay={0.12}>
            <h1
              className="font-bold leading-[1.08]"
              style={{ fontSize: "clamp(28px, 4vw, 44px)", letterSpacing: "-1.5px" }}
            >
              {project.title}
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.16}>
            <p className="text-[16px] leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              {project.subtitle}
            </p>
          </AnimateIn>
        </div>

        {/* ── Content grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ── Main column ── */}
          <div className="lg:col-span-2 flex flex-col gap-10">

            {/* Overview */}
            <AnimateIn>
              <div className="flex flex-col gap-4">
                <p className="text-[10px] font-bold tracking-widest uppercase" style={{ color: "#814ac8" }}>
                  Overview
                </p>
                <p className="text-[16px] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                  {project.overview}
                </p>
              </div>
            </AnimateIn>

            {/* Challenge */}
            <AnimateIn delay={0.05}>
              <div
                className="flex flex-col gap-4 p-6 rounded-2xl"
                style={{ background: "rgba(13,13,13,0.9)", border: "1px solid #1e1e1e" }}
              >
                <p className="text-[10px] font-bold tracking-widest uppercase" style={{ color: "#814ac8" }}>
                  The Challenge
                </p>
                <p className="text-[15px] leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {project.challenge}
                </p>
              </div>
            </AnimateIn>

            {/* Approach */}
            <AnimateIn delay={0.08}>
              <div className="flex flex-col gap-5">
                <p className="text-[10px] font-bold tracking-widest uppercase" style={{ color: "#814ac8" }}>
                  My Approach
                </p>
                <div className="flex flex-col gap-3">
                  {project.approach.map((item, i) => (
                    <div
                      key={i}
                      className="flex gap-4 p-5 rounded-xl"
                      style={{ background: "rgba(13,13,13,0.9)", border: "1px solid #1e1e1e" }}
                    >
                      <div
                        className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold"
                        style={{
                          background: "rgba(129,74,200,0.15)",
                          border: "1px solid rgba(129,74,200,0.3)",
                          color: "#c084fc",
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold text-[14px]">{item.step}</p>
                        <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>

          {/* ── Sidebar ── */}
          <div className="flex flex-col gap-6">

            {/* Outcomes */}
            <AnimateIn delay={0.15} direction="left">
              <div
                className="flex flex-col gap-5 p-6 rounded-2xl"
                style={{ background: "rgba(129,74,200,0.08)", border: "1px solid rgba(129,74,200,0.2)" }}
              >
                <p className="text-[10px] font-bold tracking-widest uppercase" style={{ color: "#814ac8" }}>
                  Key Outcomes
                </p>
                <div className="flex flex-col gap-4">
                  {project.outcomes.map((o) => (
                    <div key={o.label} className="flex flex-col gap-0.5">
                      <p
                        className="font-bold"
                        style={{ fontSize: "clamp(22px, 2.5vw, 28px)", letterSpacing: "-0.5px", color: "#c084fc" }}
                      >
                        {o.metric}
                      </p>
                      <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                        {o.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>

            {/* Tools */}
            <AnimateIn delay={0.2} direction="left">
              <div
                className="flex flex-col gap-4 p-6 rounded-2xl"
                style={{ background: "rgba(13,13,13,0.9)", border: "1px solid #1e1e1e" }}
              >
                <p className="text-[10px] font-bold tracking-widest uppercase" style={{ color: "#814ac8" }}>
                  Tools Used
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 rounded-lg text-xs font-medium"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid #222",
                        color: "rgba(255,255,255,0.6)",
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateIn>

            {/* CTA */}
            <AnimateIn delay={0.25} direction="left">
              <div
                className="flex flex-col gap-4 p-6 rounded-2xl"
                style={{ background: "rgba(13,13,13,0.9)", border: "1px solid #1e1e1e" }}
              >
                <p className="text-sm font-semibold">Interested in working together?</p>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:brightness-110"
                  style={{ background: "#814ac8" }}
                >
                  Get in Touch ↗
                </Link>
              </div>
            </AnimateIn>
          </div>
        </div>

        {/* ── Next project ── */}
        <AnimateIn>
          <div style={{ borderTop: "1px solid #111", paddingTop: "40px" }}>
            <p className="text-[10px] font-bold tracking-widest uppercase mb-4" style={{ color: "rgba(255,255,255,0.3)" }}>
              Next Project
            </p>
            <Link href={`/projects/${project.next}`} className="group inline-flex flex-col gap-1">
              <p
                className="font-semibold text-[20px] transition-colors"
                style={{ letterSpacing: "-0.5px", color: "rgba(255,255,255,0.85)" }}
              >
                {project.nextTitle} ↗
              </p>
            </Link>
          </div>
        </AnimateIn>

      </div>
    </div>
  );
}
