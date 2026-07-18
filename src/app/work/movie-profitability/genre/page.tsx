import Link from "next/link";
import { ArrowRight, Lightbulb, Target } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MovieSubNav } from "@/components/work/movie/MovieSubNav";

export const metadata = { title: "Movie · Genre & Budget (M1) | David Ezieshi" };

const TIERS = [
  { k: "Low (<$15M)", rate: 71.7, n: 1277, roi: "High variance", why: "Most fail quietly; the rare hit (Paranormal Activity: $15K budget, $194M revenue) returns thousands of percent." },
  { k: "Mid ($15M–$40M)", rate: 68.5, n: 1319, roi: "86.5% median", best: true, why: "Best risk-adjusted returns: consistent, with limited downside. The sweet spot for a slate's core." },
  { k: "High ($40M–$100M)", rate: 72.9, n: 988, roi: "Moderate", why: "Solid performers, but capital-intensive per bet." },
  { k: "Mega ($100M+)", rate: 90.6, n: 310, roi: "Lower", why: "Highest success rate of any tier, but when they fail the losses are catastrophic." },
];

type GenreRow = { g: string; band: string; cls: "top" | "mid" | "low"; why: string };
const GENRES: GenreRow[] = [
  { g: "Horror / Mystery", band: "Highest", cls: "top", why: "Audiences show up regardless of budget. No need for $100M of VFX, so capital efficiency is unmatched." },
  { g: "Animation / Family", band: "High", cls: "top", why: "Built-in audience of kids plus parents, and merchandise revenue extends value well beyond the box office." },
  { g: "Comedy", band: "Moderate", cls: "mid", why: "The steady earner. Consistent returns on moderate budgets, but rarely spectacular." },
  { g: "Action / Adventure", band: "Moderate", cls: "mid", why: "Highest total revenue, but requires massive budgets ($80M+) and carries the steepest downside risk." },
  { g: "Drama", band: "Lowest", cls: "low", why: "The most produced and most oversaturated genre. Too many films chase the same audience." },
];

export default function MovieGenrePage() {
  return (
    <div className="pf-page">
      <div className="pf-shell">
        <MovieSubNav active="genre" />
        <section className="pj-hero-head" style={{ marginTop: 28 }}>
          <Badge tone="violet" style={{ marginBottom: 16 }}>Artifact M1 · Genre &amp; Budget</Badge>
          <h1 className="pf-page-title" style={{ fontSize: "clamp(30px,3.2vw,46px)" }}>
            The two levers a studio actually controls.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 700 }}>
            You cannot control whether a film connects, but you can choose its budget tier and its
            genre before a dollar is spent. Both move the odds measurably, and neither works the
            way intuition suggests.
          </p>
        </section>

        <section className="pj-section" style={{ marginTop: 30 }}>
          <Eyebrow style={{ marginBottom: 8 }}>Budget tier · success rate</Eyebrow>
          <p className="pj-section-sub">
            Success = revenue exceeds production budget. Exact rates across 3,894 films with
            budget data. The mega tier wins most often but costs the most to lose.
          </p>
          <div className="mv-tiers">
            {TIERS.map((t) => (
              <div key={t.k} className={`mv-tier${t.best ? " best" : ""}`}>
                <span className="mv-tier-k">{t.k}</span>
                <div className="mv-tier-rate">{t.rate}%</div>
                <div className="mv-tier-bar"><span style={{ width: `${t.rate}%` }} /></div>
                <div className="mv-tier-meta">{t.why}</div>
                <div className="mv-tier-n" style={{ marginTop: 8 }}>{t.n.toLocaleString()} films · ROI: {t.roi}</div>
              </div>
            ))}
          </div>
          <div className="cov-note" style={{ marginTop: 16 }}>
            <Lightbulb size={18} aria-hidden />
            <p>
              <b>The counter-intuitive read:</b> budget correlates with revenue at 0.73, so bigger
              films do earn more. But the marginal return on each extra dollar falls. A $200M film
              does not earn twice a $100M film. Mid-budget titles ($15M–$40M) deliver the best
              return per dollar of risk, which is why they anchor a healthy slate.
            </p>
          </div>
        </section>

        <section className="pj-section">
          <Eyebrow style={{ marginBottom: 8 }}>Genre · as a risk lever</Eyebrow>
          <p className="pj-section-sub">
            Genre selection is an investment decision, not just a creative one. Ranked by ROI
            efficiency, highest first.
          </p>
          <div className="mv-genre">
            {GENRES.map((row, i) => (
              <div key={row.g} className={`mv-genre-row${i === 0 ? " hot" : ""}`}>
                <span className="mv-genre-name">{row.g}</span>
                <span className={`mv-genre-roi ${row.cls}`}>{row.band}</span>
                <span className="mv-genre-why">{row.why}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="pj-section">
          <div className="cov-note">
            <Target size={18} aria-hidden />
            <p>
              <b>Quantified impact.</b> Had a studio weighted its portfolio toward Horror and
              Mystery titles, its success rate would have run 84.6 to 85.7%, against the
              dataset&rsquo;s 72.5% overall rate. That is a 12+ point gain in capital efficiency,
              or 12 fewer losses on a 100-film slate. These are the actual success rates from
              the 5,009 films in the dataset, not a projection.
            </p>
          </div>
        </section>

        <Link href="/work/movie-profitability/data" className="pj-next">
          <div>
            <span className="pj-next-lbl">Next artifact</span>
            <span className="pj-next-title">Data Dictionary</span>
          </div>
          <ArrowRight size={20} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
