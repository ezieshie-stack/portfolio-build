import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Calculator,
  Calendar,
  Clapperboard,
  DollarSign,
  ThumbsUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { MovieSubNav } from "@/components/work/movie/MovieSubNav";

export const metadata = { title: "Movie · Data Dictionary (M2) | David Ezieshi" };

type Role = "src" | "eng" | "deriv" | "id" | "gap";
type Col = { name: string; type: string; meaning: string; role: Role };
type Cluster = { icon: LucideIcon; title: string; n: string; cols: Col[] };

const CLUSTERS: Cluster[] = [
  { icon: Clapperboard, title: "Identity", n: "2", cols: [
    { name: "id", type: "INT", meaning: "Unique film key used to join TMDB and IMDB rows. No analytical signal on its own.", role: "id" },
    { name: "Title", type: "TEXT", meaning: "Film title. Label only; some had character-encoding issues fixed in ETL.", role: "id" },
  ]},
  { icon: DollarSign, title: "Financial · source", n: "3", cols: [
    { name: "Budget", type: "REAL", meaning: "Production budget in USD. Missing for ~10% of films, who drop out at the funnel's first stage.", role: "gap" },
    { name: "Revenue", type: "REAL", meaning: "Box office revenue. Missing for ~13%; revenue is used first, gross as fallback.", role: "gap" },
    { name: "gross", type: "REAL", meaning: "IMDB domestic gross, used to backfill Revenue where TMDB revenue is absent.", role: "src" },
  ]},
  { icon: Calculator, title: "Financial · derived", n: "3", cols: [
    { name: "Profit", type: "REAL", meaning: "Revenue minus Budget. An outcome — defines success rather than predicting it.", role: "deriv" },
    { name: "ROI", type: "REAL", meaning: "(Profit / Budget) × 100. Drives every funnel threshold (>100%, >300%, >1000%).", role: "deriv" },
    { name: "Is Profitable", type: "INT", meaning: "Binary flag, 1 when Revenue > Budget. The break-even line of the funnel.", role: "deriv" },
  ]},
  { icon: Users, title: "Creative & people", n: "6", cols: [
    { name: "genres", type: "JSON", meaning: "Raw JSON array of genres. Parsed and exploded into one row per movie-genre (5,009 → 14,884).", role: "src" },
    { name: "Primary Genre", type: "TEXT", meaning: "First listed genre, used when a single label per film is needed.", role: "eng" },
    { name: "Director", type: "TEXT", meaning: "Director name. Aggregated into a director-performance table; proven names beat the average.", role: "src" },
    { name: "Actor 1 / 2 / 3", type: "TEXT", meaning: "Top-billed cast. Feed the actor-performance rankings.", role: "src" },
    { name: "Content Rating", type: "TEXT", meaning: "MPAA rating. PG-13 reaches the broadest demographic, the financial sweet spot.", role: "src" },
    { name: "Rating Category", type: "TEXT", meaning: "Binned audience score: Poor → Below Avg → Average → Good → Excellent.", role: "eng" },
  ]},
  { icon: ThumbsUp, title: "Engagement & popularity", n: "8", cols: [
    { name: "popularity", type: "REAL", meaning: "TMDB popularity index at snapshot time.", role: "src" },
    { name: "Vote Count", type: "INT", meaning: "Number of audience votes. Strongest single predictor of revenue (r = 0.78).", role: "src" },
    { name: "Vote Average", type: "REAL", meaning: "Mean audience score (0–10).", role: "src" },
    { name: "TMDB / IMDB Rating", type: "REAL", meaning: "Critical and audience scores from each source; combined into one rating.", role: "src" },
    { name: "Movie FB Likes", type: "INT", meaning: "Facebook likes for the film page.", role: "src" },
    { name: "Cast FB Likes", type: "INT", meaning: "Combined cast social following.", role: "src" },
    { name: "Director FB Likes", type: "INT", meaning: "Director social following. Nulls imputed logically in ETL.", role: "src" },
    { name: "Total Social Engagement", type: "INT", meaning: "Movie + cast + director likes, binned Low → Medium → High → Viral.", role: "eng" },
  ]},
  { icon: Calendar, title: "Temporal & format", n: "5", cols: [
    { name: "Release Date", type: "DATE", meaning: "Theatrical release date.", role: "src" },
    { name: "Year", type: "INT", meaning: "Release year, spanning 1970 to 2017.", role: "src" },
    { name: "Era", type: "TEXT", meaning: "Binned period: Classic → 1980s → 1990s → 2000s → 2010s.", role: "eng" },
    { name: "Runtime Minutes", type: "INT", meaning: "Film length in minutes.", role: "src" },
    { name: "Runtime Category", type: "TEXT", meaning: "Binned: Short → Standard → Long → Epic.", role: "eng" },
  ]},
];

const REASONS = [
  { code: "gap", label: "Source gap", note: "A source column with material missingness (Budget ~10%, Revenue ~13%). Handled in ETL; films missing these drop out at the funnel's first two stages, which is itself a finding." },
  { code: "deriv", label: "Derived outcome", note: "Computed from Budget and Revenue (Profit, ROI, Is Profitable). These define success and drive the funnel thresholds — outputs, never treated as independent inputs." },
  { code: "id", label: "Identifier", note: "Unique per film (id, Title). Used to join sources and label rows; no generalisable analytical signal on their own." },
];

function rolePill(r: Role | string): [string, string] {
  if (r === "src") return ["yes", "source"];
  if (r === "eng") return ["yes", "engineered"];
  if (r === "deriv") return ["leak", "derived"];
  if (r === "gap") return ["leak", "source gap"];
  return ["no", "identifier"];
}

export default function MovieDataPage() {
  return (
    <div className="pf-page">
      <div className="pf-shell">
        <MovieSubNav active="data" />
        <section className="pj-hero-head" style={{ marginTop: 28 }}>
          <Badge tone="violet" style={{ marginBottom: 16 }}>Artifact M2 · Data Dictionary</Badge>
          <h1 className="pf-page-title" style={{ fontSize: "clamp(30px,3.2vw,46px)" }}>
            Two messy sources, one clean master.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 700 }}>
            TMDB (4,803 rows) and IMDB metadata (5,043 rows) merged into a 5,009-row, 42-column
            master. Every column, its type, what it means, and its role.
          </p>
        </section>

        <section className="pj-section" style={{ marginTop: 30 }}>
          <div className="tc-grid">
            {CLUSTERS.map((cl) => {
              const Ico = cl.icon;
              return (
                <div className="tc-card" key={cl.title}>
                  <div className="tc-hd">
                    <Ico size={15} aria-hidden />
                    <span className="tc-hd-t">{cl.title}</span>
                    <span className="tc-hd-n">{cl.n}</span>
                  </div>
                  {cl.cols.map((c) => {
                    const [cls, lbl] = rolePill(c.role);
                    return (
                      <div className="tc-col" key={c.name}>
                        <div className="tc-col-top">
                          <span className="tc-col-n">{c.name}</span>
                          <span className="tc-type">{c.type}</span>
                          <span className={`tc-used ${cls}`}>{lbl}</span>
                        </div>
                        <div className="tc-col-m">{c.meaning}</div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div className="sla-legend">
            {REASONS.map((r) => {
              const [cls] = rolePill(r.code);
              return (
                <div className="sla-legend-row" key={r.code}>
                  <span className={`tc-used ${cls}`}>{r.label}</span>
                  <span className="sla-legend-note">{r.note}</span>
                </div>
              );
            })}
          </div>
        </section>

        <section className="pj-section">
          <div className="cov-note">
            <AlertTriangle size={18} aria-hidden />
            <p>
              <b>Data quality, honestly.</b> Genres arrived as raw JSON strings needing custom
              parsing. Budget was missing for 10% of films, revenue for 13%, and social metrics
              had nulls that were logically imputed. Every gap is documented rather than silently
              filled, because the missing-budget films are not noise — they are the funnel&rsquo;s
              first and largest drop-off.
            </p>
          </div>
        </section>

        <Link href="/work/movie-profitability/funnel" className="pj-next">
          <div>
            <span className="pj-next-lbl">Next artifact</span>
            <span className="pj-next-title">The Funnel Model</span>
          </div>
          <ArrowRight size={20} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
