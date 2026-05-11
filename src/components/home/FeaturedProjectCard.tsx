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

const metrics = [
  { value: "28%", label: "Increase in Operational Efficiency", icon: LineChart },
  { value: "32%", label: "Reduction in Response Time", icon: Clock },
  { value: "25%", label: "Improvement in Data Accuracy", icon: Database },
  { value: "20+", label: "Hours Saved Monthly", icon: Users },
];

export default function FeaturedProjectCard() {
  return (
    <section className="featuredProjectSection">
      <div className="featuredProjectHeader">
        <h2 className="featuredTitle">Featured Project</h2>
        <a href="/work" className="featuredHeaderLink">
          View All Projects <ArrowUpRight size={16} />
        </a>
      </div>

      <article className="featuredProjectCard">
        <div className="projectIntro">
          <span className="projectBadge">Process Redesign</span>

          <h2>Fiitco — Fitness Platform Process Redesign</h2>

          <p>
            Redesigned end-to-end workflows, implemented role-based systems,
            and built operational reporting that improved efficiency and team
            accountability.
          </p>

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
              <li>Streamlined 12+ operational workflows</li>
              <li>Introduced role-based access and data governance</li>
              <li>Built real-time dashboards for operational visibility</li>
              <li>Reduced manual reporting time by 32%</li>
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

      <a href="/work" className="viewAllButton">
        View All Projects <ArrowUpRight size={16} />
      </a>
    </section>
  );
}
