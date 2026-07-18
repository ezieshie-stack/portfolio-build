/**
 * Shared footer for every project hub. Two blocks:
 *   1. Related-work strip — 2 cards linking to the natural next reads
 *   2. "Talk to me about this" pill — deep-links to /contact?project=<slug>
 *      so the subject line prefills with the project name.
 */

import Link from "next/link";
import { ArrowUpRight, MessageSquare } from "lucide-react";

export type ProjectSlug =
  | "telco"
  | "sla"
  | "fraud"
  | "movie"
  | "fiitco"
  | "uipath";

type Project = {
  href: string;
  title: string;
  blurb: string;
  eyebrow: string;
};

const PROJECTS: Record<ProjectSlug, Project> = {
  telco: {
    href: "/work/telco-churn",
    title: "Telco Customer Churn",
    blurb:
      "7,043 customers · 8 SQL queries · logistic regression at 0.86 ROC-AUC.",
    eyebrow: "Data analytics",
  },
  sla: {
    href: "/work/sla-optimization",
    title: "Customer Support SLA Optimizer",
    blurb:
      "Cost-sensitive Random Forest · 100% breach recall · capacity-aware daily kill-list.",
    eyebrow: "Predictive analytics",
  },
  fraud: {
    href: "/work/fraud-detection",
    title: "Fraud Detection SQL Pipeline",
    blurb:
      "7-layer PostgreSQL · window functions · four auditable weighted rules.",
    eyebrow: "Data engineering",
  },
  movie: {
    href: "/work/movie-profitability",
    title: "Movie Industry Profitability",
    blurb:
      "5,009 films · 8-stage investment-to-profit funnel · Streamlit dashboard.",
    eyebrow: "Analytics dashboard",
  },
  fiitco: {
    href: "/work/fiitco",
    title: "FIIT Co. Operations Platform",
    blurb:
      "BABOK v3 artifacts · BRD · process design · BPMN · retained as sole administrator.",
    eyebrow: "Business analysis",
  },
  uipath: {
    href: "/work/uipath-automation",
    title: "UiPath Supplier Price Monitor",
    blurb:
      "Scheduled bot · 7 suppliers · ±5% threshold · Excel alert dropped daily.",
    eyebrow: "RPA · automation",
  },
};

const RELATED: Record<ProjectSlug, [ProjectSlug, ProjectSlug]> = {
  telco: ["fraud", "sla"],
  sla: ["fraud", "telco"],
  fraud: ["sla", "telco"],
  movie: ["telco", "fraud"],
  fiitco: ["uipath", "sla"],
  uipath: ["fiitco", "fraud"],
};

const PROJECT_LABEL: Record<ProjectSlug, string> = {
  telco: "the Telco churn work",
  sla: "the SLA optimizer",
  fraud: "the fraud pipeline",
  movie: "the movie profitability analysis",
  fiitco: "the FIIT Co. platform",
  uipath: "the UiPath supplier monitor",
};

export function ProjectFooter({ current }: { current: ProjectSlug }) {
  const related = RELATED[current];
  const label = PROJECT_LABEL[current];

  return (
    <section className="pj-footer">
      <div className="pj-related-hd">
        <span className="pj-related-eyebrow">// Related work</span>
        <span className="pj-related-sub">
          Natural next reads — related craft, connected story.
        </span>
      </div>
      <div className="pj-related">
        {related.map((slug) => {
          const p = PROJECTS[slug];
          return (
            <Link key={slug} href={p.href} className="pj-related-card">
              <span className="pj-related-eb">{p.eyebrow}</span>
              <h3>{p.title}</h3>
              <p>{p.blurb}</p>
              <span className="pj-related-go">
                Open <ArrowUpRight size={14} aria-hidden />
              </span>
            </Link>
          );
        })}
      </div>

      <Link href={`/contact?project=${current}`} className="pj-talk">
        <span className="pj-talk-ic">
          <MessageSquare size={18} aria-hidden />
        </span>
        <div className="pj-talk-body">
          <b>Talk to me about {label}.</b>
          <span>
            Contact form opens with the subject line already scoped to this
            project.
          </span>
        </div>
        <ArrowUpRight size={16} aria-hidden />
      </Link>
    </section>
  );
}
