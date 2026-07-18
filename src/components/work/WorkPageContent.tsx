"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  Bot,
  ClipboardCheck,
  Database,
  FileText,
  GitBranch,
  GitCompare,
  Layers,
  Rocket,
  Settings,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Eyebrow";

type FeaturedMetric = { icon: LucideIcon; title: string; sub: string };
type WorkCard = {
  icon: LucideIcon;
  category: string;
  title: string;
  desc: string;
  tags: string[];
  group: "Analytics" | "Business Analysis" | "Data Engineering";
  href: string;
};
type PipelineStage = { icon: LucideIcon; title: string; desc: string };

const FILTERS = ["All", "Analytics", "Business Analysis", "Data Engineering"];

const FEATURED_METRICS: FeaturedMetric[] = [
  { icon: Layers, title: "27 Modules", sub: "Internal + CMS" },
  { icon: GitBranch, title: "32 Tables", sub: "Convex data model" },
  { icon: Rocket, title: "Live", sub: "In Production" },
];

const CARDS: WorkCard[] = [
  {
    icon: BarChart3,
    category: "Data Analytics",
    title: "Telco Customer Churn Analysis",
    desc: "7,043 telecom customers segmented with 8 SQL queries and predicted with a logistic-regression model at 0.86 ROC-AUC.",
    tags: ["SQL", "Logistic Regression", "Churn"],
    group: "Analytics",
    href: "/work/telco-churn",
  },
  {
    icon: TrendingUp,
    category: "Analytics Dashboard",
    title: "Movie Industry Profitability",
    desc: "A 9-stage Python pipeline on ~5,000 films feeding a profitability model and a live 5-page Streamlit dashboard.",
    tags: ["ETL", "Python", "Streamlit"],
    group: "Data Engineering",
    href: "/work/movie-profitability",
  },
  {
    icon: Database,
    category: "Data Engineering",
    title: "Fraud Detection SQL Pipeline",
    desc: "A 7-layer PostgreSQL pipeline using window functions to build velocity and risk features, feeding a rule-based scoring engine.",
    tags: ["PostgreSQL", "Window Functions", "Risk Scoring"],
    group: "Data Engineering",
    href: "/work/fraud-detection",
  },
  {
    icon: GitBranch,
    category: "Predictive Analytics",
    title: "Customer Support SLA Optimization",
    desc: "A cost-sensitive Random Forest predicting SLA breaches and ranking tickets by financial risk in a Streamlit dashboard.",
    tags: ["Machine Learning", "Streamlit", "Python"],
    group: "Analytics",
    href: "/work/sla-optimization",
  },
  {
    icon: FileText,
    category: "Business Analysis",
    title: "Business Analysis & Process Design",
    desc: "A full BABOK v3 set. BRD, as-is and to-be process design, BPMN swimlane maps, and use-case specifications.",
    tags: ["BABOK v3", "BPMN", "Requirements"],
    group: "Business Analysis",
    href: "/work/fiitco",
  },
  {
    icon: Bot,
    category: "RPA · Automation",
    title: "UiPath Supplier Price Monitor",
    desc: "A UiPath bot that checks supplier prices on a schedule, flags anything past a ±5% threshold, and drops an Excel alert. Runs the seven-supplier list in under ten minutes vs. 60–90 manual.",
    tags: ["UiPath", "RPA", "Excel"],
    group: "Data Engineering",
    href: "/work/uipath-automation",
  },
];

const PIPELINE: PipelineStage[] = [
  {
    icon: FileText,
    title: "Requirements",
    desc: "Define what's actually needed",
  },
  {
    icon: GitCompare,
    title: "Modeling",
    desc: "Map the process and the data",
  },
  { icon: Layers, title: "Build", desc: "Configure or deliver the solution" },
  {
    icon: ClipboardCheck,
    title: "Validate",
    desc: "Test against the need through UAT",
  },
  {
    icon: Settings,
    title: "Operate",
    desc: "Run it live and measure what changed",
  },
];

export function WorkPageContent() {
  const [filter, setFilter] = useState<string>("All");
  const shown = CARDS.filter((c) => filter === "All" || c.group === filter);

  return (
    <div className="pf-page">
      <div className="pf-shell">
        {/* Hero + Featured Case Study */}
        <section className="pf-work-hero">
          <div>
            <Eyebrow className="mb-[22px]">Selected Work</Eyebrow>
            <h1 className="pf-page-title">
              A live operations platform, four data projects, and the analysis
              behind them.
            </h1>
            <p className="pf-page-intro">
              Each project started with a question no one had framed yet, or a
              process that needed to actually work. Filter by type, or open one
              to see what I delivered.
            </p>
          </div>

          <Card glow padding="36px">
            <span className="pf-work-featpill">Featured Case Study</span>
            <h2
              className="pf-feat-title"
              style={{ fontSize: "var(--text-2xl)" }}
            >
              FIIT Co. Operations Platform
            </h2>
            <p className="pf-work-featmeta">
              Business Analysis · Solution Delivery · Platform Administration
            </p>
            <p className="pf-feat-desc">
              A two-application operations platform for a fitness business,
              led through the full lifecycle on Next.js and Convex. It runs
              as an internal class-management system across 27 modules, paired
              with a public site and a self-service CMS. I led the analyst team
              that built it. After the team rolled off, I was retained to
              administer it.
            </p>
            <div className="pf-btnrow">
              <Button
                variant="primary"
                href="/work/fiitco"
                iconRight={<ArrowUpRight size={16} aria-hidden />}
              >
                View Case Study
              </Button>
              <Button variant="secondary" href="https://www.fiitco.ca">
                Live Site
              </Button>
            </div>
            <div className="pf-work-metrics">
              {FEATURED_METRICS.map((m) => {
                const Ico = m.icon;
                return (
                  <div className="pf-work-metric" key={m.title}>
                    <span className="ic">
                      <Ico size={20} aria-hidden />
                    </span>
                    <strong>{m.title}</strong>
                    <span>{m.sub}</span>
                  </div>
                );
              })}
            </div>
          </Card>
        </section>

        {/* Filter pills + grid */}
        <section style={{ marginBottom: 64 }}>
          <div className="pf-filters">
            {FILTERS.map((x) => (
              <button
                key={x}
                type="button"
                className={`pf-filter${filter === x ? " on" : ""}`}
                onClick={() => setFilter(x)}
              >
                {x}
              </button>
            ))}
          </div>

          <div className="pf-workgrid">
            {shown.map((c) => {
              const Ico = c.icon;
              return (
                <Link href={c.href} key={c.title} className="pf-workcard">
                  <span className="pf-workcard-ic" aria-hidden>
                    <Ico size={22} />
                  </span>
                  <span className="pf-workcard-cat">{c.category}</span>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                  <div className="pf-workcard-tags">
                    {c.tags.map((t) => (
                      <span className="pf-tag-sm" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="pf-workcard-link">
                    View Case Study{" "}
                    <ArrowUpRight size={14} aria-hidden />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* How I Approach Work — 5-node pipeline rail */}
        <Card padding="44px">
          <div className="pf-pipe-head">
            <Eyebrow className="mb-[14px]">How I Approach Work</Eyebrow>
            <h2 className="pf-feat-title" style={{ marginBottom: 10 }}>
              Every project moves through the same five stages.
            </h2>
            <p className="pf-pipe-intro">
              Different work each time. Operations, analytics, documentation.
              The same path from a fuzzy ask to a result I can measure.
            </p>
          </div>
          <div className="pf-pipe">
            {PIPELINE.map((s, i) => {
              const Ico = s.icon;
              return (
                <div className="pf-pipe-node" key={s.title}>
                  <span className="pf-pipe-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="pf-pipe-ic" aria-hidden>
                    <Ico size={22} />
                  </span>
                  <div className="pf-pipe-text">
                    <strong>{s.title}</strong>
                    <p>{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
}
