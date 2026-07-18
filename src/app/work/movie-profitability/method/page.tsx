import Link from "next/link";
import {
  ArrowRight,
  Filter,
  GitCommitHorizontal,
  Search,
  Wrench,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MovieSubNav } from "@/components/work/movie/MovieSubNav";
import { DiagramShell } from "@/components/work/fiitco/diagrams/DiagramShell";
import { FlowCanvas } from "@/components/work/fiitco/diagrams/FlowCanvas";
import type { FlowConfig } from "@/components/work/fiitco/diagrams/types";

export const metadata = {
  title: "Movie · Methodology (M4) | David Ezieshi",
  description:
    "The three-phase pipeline from two raw CSVs to the funnel and dashboard, one stage per script.",
};

const PIPELINE: FlowConfig = {
  unit: { NW: 162, NH: 66, HG: 60, VG: 34 },
  legend: [
    ["authed", "Raw source"],
    ["db", "Merged data"],
    ["good", "EDA / analysis"],
    ["form", "Engineered"],
    ["admin", "Funnel step"],
    ["actor", "Output"],
  ],
  groups: [
    { label: "Extract", members: ["tmdb", "imdb"] },
    { label: "Merge & clean", members: ["merge", "clean"] },
    { label: "Explore (EDA)", members: ["eda", "corr", "genre"] },
    { label: "Engineer", members: ["feat"] },
    { label: "Funnel", members: ["f1", "f2"] },
    { label: "Deliver", members: ["dash", "rec"] },
  ],
  nodes: [
    { id: "tmdb", c: 0, r: 1, label: "TMDB 5000", tone: "authed", sub: "4,803 rows" },
    { id: "imdb", c: 0, r: 4, label: "IMDB metadata", tone: "authed", sub: "5,043 rows" },
    { id: "merge", c: 1, r: 2, label: "02 merge sources", tone: "db", sub: "5,009 × 42" },
    { id: "clean", c: 1, r: 4, label: "02 clean, parse JSON", tone: "db" },
    { id: "eda", c: 2, r: 0, label: "01 distributions", tone: "good", sub: "16 charts" },
    { id: "corr", c: 2, r: 2, label: "01 correlations", tone: "good", sub: "0.73 / 0.78" },
    { id: "genre", c: 2, r: 4, label: "01 genre & people", tone: "good" },
    { id: "feat", c: 3, r: 2, label: "02 engineer features", tone: "form", sub: "tiers, ROI, era" },
    { id: "f1", c: 4, r: 1, label: "03 define 7 stages", tone: "admin" },
    { id: "f2", c: 4, r: 3, label: "03 segment funnel", tone: "admin", sub: "genre · tier · era" },
    { id: "dash", c: 5, r: 1, label: "Streamlit dashboard", tone: "actor", sub: "5 pages" },
    { id: "rec", c: 5, r: 3, label: "Recommendations", tone: "actor", sub: "5 levers" },
  ],
  edges: [
    { from: "tmdb", to: "merge" },
    { from: "imdb", to: "merge" },
    { from: "imdb", to: "clean" },
    { from: "merge", to: "eda" },
    { from: "merge", to: "corr" },
    { from: "clean", to: "genre" },
    { from: "eda", to: "feat" },
    { from: "corr", to: "feat" },
    { from: "genre", to: "feat" },
    { from: "feat", to: "f1" },
    { from: "feat", to: "f2" },
    { from: "f1", to: "f2" },
    { from: "f2", to: "dash" },
    { from: "f2", to: "rec" },
    { from: "f1", to: "rec" },
  ],
};

const PHASES = [
  {
    icon: Search,
    n: "1 · Exploratory analysis",
    desc: "Understand the data before judging it: distributions, correlations, genre and people rankings across 16 visualizations.",
    script: "01_exploratory_data_analysis.py",
  },
  {
    icon: Wrench,
    n: "2 · ETL pipeline",
    desc: "Merge two messy sources, parse JSON genres, derive Profit and ROI, and engineer budget, era, and rating tiers into 6 clean tables.",
    script: "02_etl_tableau_prep.py",
  },
  {
    icon: Filter,
    n: "3 · Funnel analysis",
    desc: "Model the lifecycle as a 7-stage investment-to-profit funnel, broken down by genre, budget tier, and era to find the leak.",
    script: "03_funnel_analysis.py",
  },
];

export default function MovieMethodPage() {
  return (
    <div className="pf-page">
      <div className="pf-shell">
        <MovieSubNav active="method" />
        <section className="pj-hero-head" style={{ marginTop: 28 }}>
          <Badge tone="violet" style={{ marginBottom: 16 }}>
            Artifact M4 · Methodology
          </Badge>
          <h1
            className="pf-page-title"
            style={{ fontSize: "clamp(30px,3.2vw,46px)" }}
          >
            Two raw CSVs in, a funnel out.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 700 }}>
            The whole pipeline in one diagram, so a reviewer sees the method,
            not just the charts. Every node maps to a script in the repo.
            Hover a stage to trace what feeds it and what it produces.
          </p>
        </section>

        <section className="pj-section" style={{ marginTop: 30 }}>
          <DiagramShell title="Analysis pipeline">
            <FlowCanvas config={PIPELINE} />
          </DiagramShell>
        </section>

        <section className="pj-section">
          <Eyebrow style={{ marginBottom: 8 }}>Each phase, in one sentence</Eyebrow>
          <div className="ff-artifacts">
            {PHASES.map((p) => {
              const Ico = p.icon;
              return (
                <div className="ff-artifact" key={p.n}>
                  <span className="ff-artifact-ic">
                    <Ico size={20} aria-hidden />
                  </span>
                  <div>
                    <strong>{p.n}</strong>
                    <span>{p.desc}</span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        color: "var(--accent-text)",
                        marginTop: 4,
                        display: "block",
                      }}
                    >
                      {p.script}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="pj-section">
          <div
            className="cov-note"
            style={{
              borderColor: "var(--violet-border)",
              background: "var(--violet-fill)",
            }}
          >
            <GitCommitHorizontal
              size={18}
              aria-hidden
              style={{ color: "var(--accent)" }}
            />
            <p>
              <b>Understand, engineer, then frame.</b> The order matters: EDA
              builds intuition for the data&rsquo;s shape, ETL turns two messy
              sources into analysis-ready tables, and only then does the
              funnel impose a business framework on top. The funnel was the
              most valuable output, not because the numbers surprised anyone,
              but because it gave stakeholders a way to reason about where a
              movie investment actually fails.
            </p>
          </div>
        </section>

        <Link href="/work/movie-profitability/doc" className="pj-next">
          <div>
            <span className="pj-next-lbl">Next artifact</span>
            <span className="pj-next-title">The write-up</span>
          </div>
          <ArrowRight size={20} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
