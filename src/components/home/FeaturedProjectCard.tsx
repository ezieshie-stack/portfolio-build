import {
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  Clock,
  Database,
  LineChart,
  Search,
  Settings,
  Users,
} from "lucide-react";

const impactFlow = [
  { label: "Process Discovery", icon: Search },
  { label: "Workflow Redesign", icon: Settings },
  { label: "System Implementation", icon: Database },
  { label: "Team Training", icon: Users },
  { label: "Operational Execution", icon: Settings },
  { label: "Reporting & Analytics", icon: LineChart },
  { label: "Performance Monitoring", icon: LineChart },
  { label: "Continuous Improvement", icon: CheckCircle2 },
];

const metricMeta = [
  { label: "Increase in Operational Efficiency", icon: LineChart },
  { label: "Reduction in Response Time", icon: Clock },
  { label: "Improvement in Data Accuracy", icon: Database },
  { label: "Hours Saved Monthly", icon: Users },
];

const highlights = [
  "Streamlined 12+ operational workflows",
  "Introduced role-based access and data governance",
  "Built real-time dashboards for operational visibility",
  "Reduced manual reporting time by 32%",
];

export type Project = {
  title: string;
  category: string;
  description: string;
  metricValues: [string, string, string, string];
};

export const projects: Project[] = [
  {
    title: "Fiitco — Fitness Platform Process Redesign",
    category: "Process Redesign",
    description:
      "Redesigned end-to-end workflows, implemented role-based systems, and built operational reporting that improved efficiency and team accountability.",
    metricValues: ["28%", "32%", "25%", "20+"],
  },
  {
    title: "SLA & Escalation Optimization",
    category: "Workflow Analysis",
    description:
      "Analyzed escalation patterns, support bottlenecks, and SLA gaps to improve response workflows and operational visibility.",
    metricValues: ["-28%", "-19%", "94%", "100%"],
  },
  {
    title: "Fraud Detection Analysis",
    category: "Data Analysis",
    description:
      "Used SQL-driven analysis to identify suspicious patterns, high-risk transaction behavior, and reporting opportunities.",
    metricValues: ["SQL", "Risk", "Patterns", "Insights"],
  },
];

export function FeaturedProjectCard({ project }: { project: Project }) {
  const metrics = metricMeta.map((meta, i) => ({
    ...meta,
    value: project.metricValues[i],
  }));

  return (
    <article className="featuredProjectCard">
      <div className="projectIntro">
        <span className="projectBadge">{project.category}</span>

        <h2>{project.title}</h2>

        <p>{project.description}</p>

        <div className="projectMeta">
          <span>
            <Calendar size={16} /> Mar 2024 – May 2024
          </span>
          <span>
            <Users size={16} /> Cross-functional Project
          </span>
        </div>

        <div className="projectActions">
          <a href="/work/fiitco" className="primaryAction">
            View Case Study <ArrowUpRight size={16} />
          </a>
          <a href="/work/fiitco" className="secondaryAction">
            Project Details
          </a>
        </div>
      </div>

      <div className="projectFlow">
        <p className="panelTitle">Project Impact Flow</p>

        <div className="flowGrid">
          {impactFlow.map((step, index) => {
            const Icon = step.icon;

            return (
              <div className="flowStep" key={step.label}>
                <Icon size={22} />
                <span>{step.label}</span>

                {index !== impactFlow.length - 1 && (
                  <span className="flowArrow">→</span>
                )}
              </div>
            );
          })}
        </div>

        <div className="keyHighlights">
          <p>Key Highlights</p>

          <ul>
            {highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="projectOutcomes">
        <p className="panelTitle">Project Outcomes</p>

        <div className="metricsGrid">
          {metrics.map((metric) => {
            const Icon = metric.icon;

            return (
              <div className="metricBox" key={metric.label}>
                <Icon size={24} />
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            );
          })}
        </div>

        <div className="outcomeNote">
          <CheckCircle2 size={22} />
          <span>
            Delivered measurable improvement across processes, people, and
            performance.
          </span>
        </div>
      </div>
    </article>
  );
}
