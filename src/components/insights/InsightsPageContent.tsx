"use client";

import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  Database,
  FileText,
  GitCompare,
  type LucideIcon,
  Lightbulb,
  Waypoints,
  Workflow,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Eyebrow";
import {
  ARTICLES,
  FEATURED,
  FILTERS,
  type Article,
  type Block,
} from "@/data/insights-articles";

const ICONS: Record<string, LucideIcon> = {
  "lightbulb": Lightbulb,
  "git-compare": GitCompare,
  "file-text": FileText,
  "bar-chart-3": BarChart3,
  "workflow": Workflow,
  "waypoints": Waypoints,
  "database": Database,
};

function IconFor({ name, size = 20 }: { name: string; size?: number }) {
  const Ico = ICONS[name] ?? FileText;
  return <Ico size={size} aria-hidden />;
}

function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="pf-article-body">
      {blocks.map((b, i) => {
        if ("h" in b && b.h) return <h2 key={i}>{b.h}</h2>;
        if ("ul" in b && b.ul)
          return (
            <ul key={i}>
              {b.ul.map((li, j) => (
                <li key={j}>{li}</li>
              ))}
            </ul>
          );
        if ("p" in b && b.p) return <p key={i}>{b.p}</p>;
        return null;
      })}
    </div>
  );
}

function InsightReader({
  article,
  onClose,
}: {
  article: Article;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      className="pf-reader"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={article.title}
    >
      <div
        className="pf-reader-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="pf-reader-close"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={20} aria-hidden />
        </button>
        <article className="pf-reader-inner">
          <button
            type="button"
            className="pf-reader-back"
            onClick={onClose}
          >
            <ArrowLeft size={14} aria-hidden /> All Insights
          </button>
          <p className="pf-reader-cat">{article.category}</p>
          <h1 className="pf-reader-title">{article.title}</h1>
          {article.sub && <p className="pf-reader-sub">{article.sub}</p>}
          <div className="pf-reader-meta">
            <span>{article.date}</span>
            <span aria-hidden>·</span>
            <span>{article.read}</span>
          </div>
          <ArticleBody blocks={article.body} />
          <div className="pf-reader-foot">
            <span>Written by David Ezieshi</span>
            <Button variant="secondary" size="sm" pill onClick={onClose}>
              Back to Insights
            </Button>
          </div>
        </article>
      </div>
    </div>
  );
}

export function InsightsPageContent() {
  const [filter, setFilter] = useState<string>("All");
  const [open, setOpen] = useState<Article | null>(null);

  const shown = ARTICLES.filter(
    (a) => filter === "All" || a.category === filter,
  );

  return (
    <div className="pf-page">
      <div className="pf-shell">
        <section className="pf-pagehead" style={{ marginBottom: 40 }}>
          <Eyebrow className="mb-[22px]">Insights</Eyebrow>
          <h1 className="pf-page-title">
            Thinking through systems, workflows, and operational clarity.
          </h1>
          <p className="pf-page-intro">
            Notes on business analysis, process design, operational systems,
            reporting infrastructure, and the practical work of improving how
            teams execute.
          </p>
        </section>

        <Card
          glow
          padding="44px"
          className="pf-insight-feat"
          style={{ marginBottom: 56 }}
        >
          <div className="pf-insight-feat-grid">
            <div>
              <Badge tone="spark" dot className="mb-[22px]">
                {FEATURED.pill}
              </Badge>
              <h2
                className="pf-feat-title"
                style={{ fontSize: "var(--text-2xl)" }}
              >
                {FEATURED.title}
              </h2>
              <p className="pf-feat-desc" style={{ maxWidth: 520 }}>
                {FEATURED.sub}
              </p>
              <Button
                variant="primary"
                iconRight={<ArrowUpRight size={16} aria-hidden />}
                onClick={() => setOpen(FEATURED)}
              >
                {FEATURED.cta}
              </Button>
            </div>
            <div className="pf-insight-feat-art" aria-hidden>
              <Lightbulb size={40} aria-hidden />
              <span>Operational Systems</span>
            </div>
          </div>
        </Card>

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

        <div className="pf-insightgrid">
          {shown.map((a) => (
            <article
              key={a.slug}
              className="pf-insightcard"
              onClick={() => setOpen(a)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setOpen(a);
                }
              }}
            >
              <div className="pf-insightcard-top">
                <span className="pf-insightcard-ic" aria-hidden>
                  <IconFor name={a.icon} size={20} />
                </span>
                <span className="pf-insightcard-cat">{a.category}</span>
              </div>
              <h3>{a.title}</h3>
              <p>{a.excerpt}</p>
              <div className="pf-insightcard-meta">
                <span>{a.date}</span>
                <span className="dot">·</span>
                <span>{a.read}</span>
                <ArrowUpRight size={15} aria-hidden />
              </div>
            </article>
          ))}
        </div>
      </div>

      {open && <InsightReader article={open} onClose={() => setOpen(null)} />}
    </div>
  );
}
