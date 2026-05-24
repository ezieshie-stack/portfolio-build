import {
  ArrowUpRight,
  CheckCircle2,
  Crosshair,
  Database,
  Film,
  LayoutDashboard,
  LayoutGrid,
  LineChart,
  Rocket,
  Server,
  Target,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

type Metric = { value: string; label: string; icon: LucideIcon };
type ProjectLink = { label: string; href: string };

export type Project = {
  title: string;
  category: string;
  description: string;
  meta: [string, string];
  metrics: [Metric, Metric, Metric, Metric];
  highlights: string[];
  outcomeNote: string;
  builtWith: string[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    title: "Fiitco: Fitness Operations Platform",
    category: "Operations Platform",
    description:
      "An end-to-end operations platform for a fitness business, built solo on Next.js 16 and Convex. Spans 27 modules and a 32-table data model covering class programming, instructor scheduling, delivery tracking, and a self-service CMS for the public website.",
    meta: ["Full-stack build", "Live in production"],
    metrics: [
      { value: "27", label: "Operational Modules", icon: LayoutGrid },
      { value: "32", label: "Data Tables", icon: Database },
      { value: "9", label: "Backend Services", icon: Server },
      { value: "Live", label: "In Production", icon: Rocket },
    ],
    highlights: [
      "27 operational and website-CMS modules in one platform",
      "Role-based access with custom auth and approval workflows",
      "Instructor scheduling with automated buffer-conflict detection",
      "Auto-generates a Word business-analysis report (scope, data model, risk matrix)",
    ],
    outcomeNote:
      "A production operations tool built by one analyst, not an engineering team.",
    builtWith: ["Next.js 16", "Convex", "TypeScript", "TipTap"],
    links: [
      { label: "View Repo", href: "https://github.com/ezieshie-stack/Fiitco-Operation" },
      { label: "Live Site", href: "https://www.fiitco.ca" },
    ],
  },
  {
    title: "Telco Customer Churn Analysis",
    category: "Churn Analytics",
    description:
      "A churn analysis of 7,043 telecom customers using SQL segmentation and a logistic-regression model. Identifies the contract, tenure, and service patterns most predictive of churn and recommends operational retention interventions.",
    meta: ["Public IBM dataset", "Solo analysis"],
    metrics: [
      { value: "7,043", label: "Customers Analyzed", icon: Users },
      { value: "0.86", label: "Model ROC-AUC", icon: LineChart },
      { value: "69%", label: "Churn Precision", icon: Target },
      { value: "58%", label: "Churn Recall", icon: Crosshair },
    ],
    highlights: [
      "Segmented 7,043 customers across contract, tenure, and service tiers with 8 SQL queries",
      "Chi-square validated contract type as a churn driver (p < 5.8e-258)",
      "Logistic regression at 0.86 ROC-AUC, 69% precision on flagged churners",
      "Surfaced fiber-without-tech-support (~49% churn) as the highest-risk segment",
    ],
    outcomeNote:
      "Month-to-month contracts emerged as the top churn driver, statistically validated.",
    builtWith: ["SQLite", "Python", "scikit-learn", "SciPy"],
    links: [
      { label: "View Repo", href: "https://github.com/ezieshie-stack/telco-churn-analysis" },
      {
        label: "View Analysis",
        href: "https://htmlpreview.github.io/?https://github.com/ezieshie-stack/telco-churn-analysis/blob/main/Telco%20Customer%20Churn%20Analysis.html",
      },
    ],
  },
  {
    title: "Movie Industry Profitability Analysis",
    category: "Analytics Dashboard",
    description:
      "An end-to-end analytics project on ~5,000 films from TMDB and IMDB. A 9-stage Python ETL pipeline feeds an 8-stage investment-to-profitability funnel and a 5-page interactive Streamlit dashboard that traces where studio capital is won and lost.",
    meta: ["Public TMDB + IMDB data", "Live dashboard"],
    metrics: [
      { value: "5,000+", label: "Films Analyzed", icon: Film },
      { value: "42", label: "Features Engineered", icon: Database },
      { value: "9", label: "ETL Stages", icon: Workflow },
      { value: "5", label: "Dashboard Pages", icon: LayoutDashboard },
    ],
    highlights: [
      "Merged TMDB (4,803) and IMDB (5,043) into a ~5,000-film master dataset, 42 features",
      "9-stage Python ETL pipeline outputting 6 analysis-ready datasets",
      "8-stage investment-to-profitability funnel model",
      "5-page interactive Streamlit dashboard with filterable movie browser",
    ],
    outcomeNote:
      "An investment-funnel model that traces where film capital is lost, stage by stage.",
    builtWith: ["Python", "pandas", "Streamlit", "Tableau"],
    links: [
      { label: "View Repo", href: "https://github.com/ezieshie-stack/movies-dataset" },
      {
        label: "Live Dashboard",
        href: "https://movies-dataset-uhi6ckeurkswnkfjk5kree.streamlit.app",
      },
    ],
  },
];

export function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <article className="featuredProjectCard">
      <div className="projectIntro">
        <span className="projectBadge">{project.category}</span>

        <h2>{project.title}</h2>

        <p>{project.description}</p>

        <div className="projectMeta">
          <span>
            <CheckCircle2 size={16} /> {project.meta[0]}
          </span>
          <span>
            <Rocket size={16} /> {project.meta[1]}
          </span>
        </div>

        <div className="projectActions">
          {project.links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={i === 0 ? "primaryAction" : "secondaryAction"}
            >
              {link.label}
              {i === 0 ? <ArrowUpRight size={16} /> : null}
            </a>
          ))}
        </div>

        <div className="keyHighlights">
          <p>Key Highlights</p>

          <ul>
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="projectSide">
        <div className="projectOutcomes">
          <p className="panelTitle">Project Outcomes</p>

          <div className="metricsGrid">
            {project.metrics.map((metric) => {
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
            <span>{project.outcomeNote}</span>
          </div>
        </div>

        <div className="projectFlow">
          <p className="panelTitle">Built With</p>

          <div className="builtWithStrip">
            {project.builtWith.map((tech) => (
              <span className="techChip" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
