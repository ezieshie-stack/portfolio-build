"use client";

import { useState, type ReactNode } from "react";
import {
  ArrowUpRight,
  BarChart2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
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
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { MetricStat } from "@/components/ui/MetricStat";

type Metric = { value: string; label: string; icon: ReactNode; spark?: boolean };

type Project = {
  category: string;
  title: string;
  description: string;
  meta: [string, string];
  metrics: Metric[];
  highlights: string[];
  builtWith: string[];
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
};

const PROJECTS: Project[] = [
  {
    category: "Operations Platform",
    title: "FIIT Co. Operations Platform",
    description:
      "A two-application operations platform for a fitness business, built on Next.js and Convex. I led it through the full lifecycle, from requirements through delivery and into live administration. The platform spans 27 modules and a 32-table data model across class programming, instructor scheduling, and a self-service CMS.",
    meta: ["Full lifecycle", "Live in production"],
    metrics: [
      { value: "27", label: "Modules", icon: <LayoutGrid size={22} /> },
      { value: "32", label: "Data Tables", icon: <Database size={22} /> },
      { value: "11", label: "BPMN Processes", icon: <Server size={22} /> },
      { value: "Live", label: "In Production", icon: <Rocket size={22} />, spark: true },
    ],
    highlights: [
      "Led a six-person analyst team through four scopes from elicitation to delivery",
      "Authored the engagement's BRD, PRD, and process design",
      "Configured 27 modules and a 32-table data model to the requirements I wrote",
      "Retained as sole administrator after the team rolled off",
    ],
    builtWith: ["Next.js", "Convex", "TypeScript", "TipTap"],
    primaryHref: "/work/fiitco",
    primaryLabel: "View Case Study",
    secondaryHref: "https://www.fiitco.ca",
    secondaryLabel: "Live Site",
  },
  {
    category: "Churn Analytics",
    title: "Telco Customer Churn Analysis",
    description:
      "A churn analysis of 7,043 telecom customers. SQL segmentation across contract, tenure, and service tiers, followed by a logistic-regression model to predict who leaves and why.",
    meta: ["IBM public dataset", "Self-directed"],
    metrics: [
      { value: "7,043", label: "Customers", icon: <Users size={22} /> },
      { value: "0.86", label: "Model ROC-AUC", icon: <LineChart size={22} />, spark: true },
      { value: "69%", label: "Churn Precision", icon: <Target size={22} /> },
      { value: "58%", label: "Churn Recall", icon: <Crosshair size={22} /> },
    ],
    highlights: [
      "Segmented 7,043 customers with 8 SQL queries across contract, tenure, and service tiers",
      "Chi-square confirmed contract type as a real churn driver",
      "Logistic regression at 0.86 ROC-AUC, 69% precision on flagged churners",
      "Identified fiber-without-tech-support (~49% churn) as the highest-risk segment",
    ],
    builtWith: ["SQLite", "Python", "scikit-learn", "SciPy"],
    primaryHref: "/work/telco-churn",
    primaryLabel: "View Repo",
    secondaryHref: "/work/telco-churn",
    secondaryLabel: "View Analysis",
  },
  {
    category: "Analytics Dashboard",
    title: "Movie Industry Profitability Analysis",
    description:
      "A profitability analysis of about 5,000 films from TMDB and IMDB. A 9-stage Python pipeline cleans and merges the data. The data feeds an investment-to-profitability model and drives a 5-page interactive Streamlit dashboard.",
    meta: ["TMDB + IMDB", "Live dashboard"],
    metrics: [
      { value: "5,000+", label: "Films", icon: <Film size={22} /> },
      { value: "42", label: "Features Engineered", icon: <Database size={22} /> },
      { value: "9", label: "ETL Stages", icon: <Workflow size={22} /> },
      { value: "5", label: "Dashboard Pages", icon: <LayoutDashboard size={22} />, spark: true },
    ],
    highlights: [
      "Merged TMDB (4,803) and IMDB (5,043) into one ~5,000-film dataset with 42 features",
      "9-stage Python pipeline outputting 6 analysis-ready datasets",
      "7-stage profitability funnel tracing films from budget to return",
      "5-page Streamlit dashboard with a filterable browser",
    ],
    builtWith: ["Python", "pandas", "Streamlit", "Tableau"],
    primaryHref: "/work/movie-profitability",
    primaryLabel: "View Repo",
    secondaryHref: "/work/movie-profitability",
    secondaryLabel: "Live Dashboard",
  },
];

function ProjectSlide({ p }: { p: Project }) {
  return (
    <div className="pf-featgrid">
      <Card glow padding="40px">
        <Badge className="mb-[22px]">{p.category}</Badge>
        <h2 className="pf-feat-title">{p.title}</h2>
        <p className="pf-feat-desc">{p.description}</p>
        <div className="pf-projmeta">
          <span>
            <CheckCircle2 size={15} style={{ color: "var(--accent)" }} aria-hidden /> {p.meta[0]}
          </span>
          <span>
            <Rocket size={15} style={{ color: "var(--accent)" }} aria-hidden /> {p.meta[1]}
          </span>
        </div>
        <div className="pf-btnrow" style={{ marginBottom: 26 }}>
          <Button
            variant="primary"
            href={p.primaryHref}
            iconRight={<ArrowUpRight size={16} aria-hidden />}
          >
            {p.primaryLabel}
          </Button>
          <Button variant="secondary" href={p.secondaryHref}>
            {p.secondaryLabel}
          </Button>
        </div>
        <p className="pf-mono-h">Key Highlights</p>
        <ul className="pf-hl">
          {p.highlights.map((h) => (
            <li key={h}>
              <CheckCircle2 size={16} style={{ color: "var(--accent)" }} aria-hidden />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </Card>
      <Card>
        <p className="pf-mono-h">Project Outcomes</p>
        <div className="pf-metrics">
          {p.metrics.map((m) => (
            <MetricStat
              key={m.label}
              value={m.value}
              label={m.label}
              icon={m.icon}
              spark={m.spark}
            />
          ))}
        </div>
        <p className="pf-mono-h" style={{ marginTop: 24 }}>
          Built With
        </p>
        <div className="pf-chips">
          {p.builtWith.map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>
      </Card>
    </div>
  );
}

export function FeaturedProjectsSlider() {
  const [cur, setCur] = useState(0);
  const total = PROJECTS.length;
  const go = (i: number) => setCur(((i % total) + total) % total);

  return (
    <section className="pf-section">
      <div className="pf-shell">
        <h2 className="pf-section-title">Featured Projects</h2>
        <div className="pf-slider-view">
          <div
            className="pf-slider-track"
            style={{ transform: `translateX(-${cur * 100}%)` }}
          >
            {PROJECTS.map((p) => (
              <div className="pf-slide" key={p.title}>
                <ProjectSlide p={p} />
              </div>
            ))}
          </div>
          <button
            type="button"
            className="pf-arrow prev"
            aria-label="Previous project"
            onClick={() => go(cur - 1)}
          >
            <ChevronLeft size={20} aria-hidden />
          </button>
          <button
            type="button"
            className="pf-arrow next"
            aria-label="Next project"
            onClick={() => go(cur + 1)}
          >
            <ChevronRight size={20} aria-hidden />
          </button>
        </div>
        <div className="pf-dots">
          {PROJECTS.map((p, i) => (
            <button
              key={p.title}
              type="button"
              className={`pf-dot${i === cur ? " on" : ""}`}
              aria-label={`Show project ${i + 1}`}
              onClick={() => go(i)}
            />
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 28 }}>
          <Button
            variant="secondary"
            size="md"
            pill
            href="/work"
            iconRight={<ArrowUpRight size={16} aria-hidden />}
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
