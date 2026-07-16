import Link from "next/link";
import { AlertTriangle, ArrowRight, Star } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MovieSubNav } from "@/components/work/movie/MovieSubNav";

export const metadata = { title: "Movie · Funnel Model (M3) | David Ezieshi" };

type Stage = { k: string; n: number; pct: number; note?: string; leak?: boolean };
const STAGES: Stage[] = [
  { k: "Total films", n: 5009, pct: 100.0 },
  { k: "Has budget data", n: 3951, pct: 78.9, note: "budget missing for 1,058" },
  { k: "Generated revenue", n: 3767, pct: 75.2, note: "184 earned nothing" },
  { k: "Recovered 50%+ of budget", n: 3191, pct: 63.7, note: "biggest capital leak: 576 lost here", leak: true },
  { k: "Profitable (rev > budget)", n: 2732, pct: 54.5, note: "the break-even line" },
  { k: "Strong ROI (>100%)", n: 2019, pct: 40.3, note: "doubled the budget" },
  { k: "Exceptional ROI (>300%)", n: 1425, pct: 28.4, note: "the capital-efficient hits" },
];

type Segment = { k: string; n: number; roi: number | null; rating: number; kind: "data" | "loss" | "profit"; note: string };
const SEGMENTS: Segment[] = [
  { k: "No investment data", n: 1058, roi: null, rating: 5.95, kind: "data", note: "Budget unknown, so ROI is undefined." },
  { k: "Invested, no revenue", n: 184, roi: -100.0, rating: 5.57, kind: "loss", note: "Shelved or unreleased." },
  { k: "Major loss (<50% back)", n: 576, roi: -78.5, rating: 6.04, kind: "loss", note: "The biggest capital leak." },
  { k: "Partial recovery", n: 459, roi: -25.5, rating: 6.14, kind: "loss", note: "Earned most of it back, not all." },
  { k: "Break even", n: 387, roi: 23.2, rating: 6.21, kind: "profit", note: "Just cleared the line." },
  { k: "Moderate profit", n: 326, roi: 74.6, rating: 6.38, kind: "profit", note: "Comfortable return." },
  { k: "Strong profit", n: 594, roi: 146.2, rating: 6.37, kind: "profit", note: "More than doubled." },
  { k: "Exceptional ROI (>300%)", n: 1425, roi: null, rating: 6.72, kind: "profit", note: "The hits. Highest ratings too." },
];
const SEG_MAX = 1425;

function barColor(kind: Segment["kind"]) {
  return kind === "loss" ? "#ef4444" : kind === "profit" ? "#10b981" : "var(--border)";
}

export default function MovieFunnelPage() {
  return (
    <div className="pf-page">
      <div className="pf-shell">
        <MovieSubNav active="funnel" />
        <section className="pj-hero-head" style={{ marginTop: 28 }}>
          <Badge tone="violet" style={{ marginBottom: 16 }}>Artifact M3 · Funnel Model</Badge>
          <h1 className="pf-page-title" style={{ fontSize: "clamp(30px,3.2vw,46px)" }}>
            The investment-to-profitability funnel.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 700 }}>
            Borrowing the method from sales-pipeline analysis, each film is tracked from investment
            through to profit. The framework is the deliverable: it does not just say 54.5% are
            profitable — it shows exactly where the other 45.5% fall out.
          </p>
        </section>

        <section className="pj-section" style={{ marginTop: 30 }}>
          <Eyebrow style={{ marginBottom: 8 }}>Cumulative funnel</Eyebrow>
          <p className="pj-section-sub">
            How many of the 5,009 films reach at least each stage. Width is share of the total
            cohort.
          </p>
          <div className="mv-stages">
            {STAGES.map((s, i) => {
              const prevN = i > 0 ? STAGES[i - 1].n : null;
              const d = prevN !== null ? prevN - s.n : 0;
              return (
                <div key={s.k} className={`mv-stage${s.leak ? " leak on" : ""}`} style={{ cursor: "default" }}>
                  <div className="mv-stage-top">
                    <span className="mv-stage-k">{s.k}</span>
                    <span className="mv-stage-n">{s.n.toLocaleString()} · {s.pct}%</span>
                  </div>
                  <div className="mv-stage-track">
                    <span className="mv-stage-bar" style={{ width: `${s.pct}%` }} />
                  </div>
                  <span className="mv-stage-drop">
                    {prevN !== null ? `↓ ${d.toLocaleString()} lost` : "starting cohort"}
                    {s.note ? `  ·  ${s.note}` : ""}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        <section className="pj-section">
          <Eyebrow style={{ marginBottom: 8 }}>The 8 segments, by outcome</Eyebrow>
          <p className="pj-section-sub">
            Each film counted once, in the single furthest bucket it reached. Average ROI and
            audience rating are real per-segment figures. Notice the rating climb as outcomes
            improve.
          </p>
          <div className="mv-seg">
            {SEGMENTS.map((s) => (
              <div key={s.k} className="mv-seg-row">
                <span className="mv-seg-name">{s.k}</span>
                <div className="mv-seg-track">
                  <span className="mv-seg-bar" style={{ width: `${(s.n / SEG_MAX) * 100}%`, background: barColor(s.kind) }} />
                </div>
                <span className={`mv-seg-roi ${s.roi === null ? "" : s.roi >= 0 ? "pos" : "neg"}`}>
                  {s.n.toLocaleString()} films
                  {s.roi !== null ? `  ·  ${s.roi > 0 ? "+" : ""}${s.roi}%` : ""}
                </span>
                <span className="mv-seg-rating">★ {s.rating}</span>
              </div>
            ))}
          </div>
          <p className="pj-section-sub" style={{ marginTop: 12 }}>
            The exceptional bucket&rsquo;s average is distorted by extreme outliers (Paranormal
            Activity returned ~4000%), which is why the funnel reports counts, not mean ROI.
          </p>
        </section>

        <section className="pj-section">
          <div className="cov-note" style={{ borderColor: "#f59e0b", background: "rgba(245, 158, 11, 0.08)" }}>
            <AlertTriangle size={18} aria-hidden />
            <p>
              <b>The #1 bottleneck.</b> 576 films sit in &ldquo;major loss&rdquo;: they earned box
              office revenue but recovered under half their budget. This is where the most capital
              is destroyed industry-wide. The highest-leverage fix is not making better films — it
              is tighter cost control before greenlight. Lower the break-even threshold 20% and
              hundreds of almost-profitable titles tip into profit.
            </p>
          </div>
        </section>

        <section className="pj-section">
          <div className="cov-note">
            <Star size={18} aria-hidden />
            <p>
              <b>Quality and profit move together.</b> Average audience rating rises at every
              stage, from 5.57 among total losses to 6.72 among the exceptional performers. Better
              films do earn more, but rating alone does not clear the break-even wall.
            </p>
          </div>
        </section>

        <Link href="/work/movie-profitability/method" className="pj-next">
          <div>
            <span className="pj-next-lbl">Next artifact</span>
            <span className="pj-next-title">Methodology</span>
          </div>
          <ArrowRight size={20} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
