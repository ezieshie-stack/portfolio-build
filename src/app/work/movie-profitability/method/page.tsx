import Link from "next/link";
import { ArrowRight, Filter, GitCommitHorizontal, Search, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MovieSubNav } from "@/components/work/movie/MovieSubNav";

export const metadata = { title: "Movie · Methodology (M4) | David Ezieshi" };

const PHASES = [
  { icon: Search, t: "1 · Exploratory analysis", d: "Understand the data before judging it: distributions, correlations, genre and people rankings across 16 visualizations.", s: "01_exploratory_data_analysis.py" },
  { icon: Wrench, t: "2 · ETL pipeline", d: "Merge two messy sources, parse JSON genres, derive Profit and ROI, and engineer budget, era, and rating tiers into 6 clean tables.", s: "02_etl_tableau_prep.py" },
  { icon: Filter, t: "3 · Funnel analysis", d: "Model the lifecycle as an 8-stage investment-to-profit funnel, broken down by genre, budget tier, and era to find the leak.", s: "03_funnel_analysis.py" },
];

const NODES = [
  { code: "S1", name: "TMDB 5000", desc: "Kaggle: 4,803 films — budget, revenue, genres, ratings" },
  { code: "S2", name: "IMDB metadata", desc: "Kaggle: 5,043 films — directors, cast, social" },
  { code: "M1", name: "02 merge sources", desc: "Join on title + year → 5,009 × 42 master" },
  { code: "M2", name: "02 parse JSON genres", desc: "Explode 5,009 → 14,884 rows for genre analysis" },
  { code: "E1", name: "01 distributions + correlations", desc: "16 EDA charts; Vote Count ↔ Revenue = 0.78" },
  { code: "E2", name: "02 engineer features", desc: "Budget tier, ROI band, era, runtime category" },
  { code: "F1", name: "03 define 8 funnel stages", desc: "Total → Has budget → Revenue → 50%+ → Profit → 100%+ → 300%+" },
  { code: "F2", name: "03 segment funnel", desc: "Break down by genre, tier, era" },
  { code: "D1", name: "Streamlit dashboard", desc: "5-page live app" },
  { code: "D2", name: "Recommendations", desc: "5 investment levers" },
];

export default function MovieMethodPage() {
  return (
    <div className="pf-page">
      <div className="pf-shell">
        <MovieSubNav active="method" />
        <section className="pj-hero-head" style={{ marginTop: 28 }}>
          <Badge tone="violet" style={{ marginBottom: 16 }}>Artifact M4 · Methodology</Badge>
          <h1 className="pf-page-title" style={{ fontSize: "clamp(30px,3.2vw,46px)" }}>
            Two raw CSVs in, a funnel out.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 700 }}>
            The whole pipeline in one three-phase structure, so a reviewer sees the method, not
            just the charts.
          </p>
        </section>

        <section className="pj-section" style={{ marginTop: 30 }}>
          <Eyebrow style={{ marginBottom: 8 }}>The 10 pipeline nodes</Eyebrow>
          <div className="mv-seg">
            {NODES.map((n) => (
              <div key={n.code} className="mv-seg-row" style={{ gridTemplateColumns: "60px 220px 1fr" }}>
                <code style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--accent-text)" }}>{n.code}</code>
                <span className="mv-seg-name">{n.name}</span>
                <span className="mv-genre-why">{n.desc}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="pj-section">
          <Eyebrow style={{ marginBottom: 8 }}>Each phase, in one sentence</Eyebrow>
          <div className="ff-artifacts">
            {PHASES.map((p) => {
              const Ico = p.icon;
              return (
                <div className="ff-artifact" key={p.t}>
                  <span className="ff-artifact-ic"><Ico size={20} aria-hidden /></span>
                  <div>
                    <strong>{p.t}</strong>
                    <span>{p.d}</span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--accent-text)", marginTop: 4, display: "block" }}>{p.s}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="pj-section">
          <div className="cov-note">
            <GitCommitHorizontal size={18} aria-hidden />
            <p>
              <b>Understand, engineer, then frame.</b> The order matters: EDA builds intuition for
              the data&rsquo;s shape, ETL turns two messy sources into analysis-ready tables, and
              only then does the funnel impose a business framework on top. The funnel was the
              most valuable output — not because the numbers surprised anyone, but because it gave
              stakeholders a way to reason about where a movie investment actually fails.
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
