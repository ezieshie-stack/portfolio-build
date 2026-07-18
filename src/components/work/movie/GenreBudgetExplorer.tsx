"use client";

import { useMemo, useState } from "react";
import { AlertCircle, DollarSign, Sparkles, TrendingUp } from "lucide-react";

/**
 * Pick a genre + budget tier, see the slice's modeled success rate,
 * average ROI, and story. Base tier rates come from the real dataset
 * (3,894 films with budget on record); the intersection is modeled
 * multiplicatively using the genre-efficiency multipliers surfaced in
 * the M1 findings. Explicit in the caption so the caveat is visible.
 */

type Tone = "hot" | "warm" | "cool" | "cold";

const GENRES = [
  { k: "Horror / Mystery", mult: 1.16, share: 0.15 },
  { k: "Animation / Family", mult: 1.10, share: 0.13 },
  { k: "Comedy", mult: 1.00, share: 0.20 },
  { k: "Action / Adventure", mult: 0.98, share: 0.20 },
  { k: "Drama", mult: 0.86, share: 0.32 },
];

const TIERS = [
  {
    k: "Low (<$15M)",
    rate: 71.7,
    share: 0.328,
    roi: 2.35,
    note: "High variance. The rare hit returns thousands of percent; most fail quietly.",
  },
  {
    k: "Mid ($15M–$40M)",
    rate: 68.5,
    share: 0.339,
    roi: 1.55,
    note: "Best risk-adjusted returns. Anchor the slate here.",
  },
  {
    k: "High ($40M–$100M)",
    rate: 72.9,
    share: 0.254,
    roi: 1.15,
    note: "Solid performers but capital-intensive per bet.",
  },
  {
    k: "Mega ($100M+)",
    rate: 90.6,
    share: 0.079,
    roi: 0.72,
    note: "Highest hit rate; a single failure erases several wins.",
  },
];

const BASELINE = 72.5;
const N_FILMS_WITH_BUDGET = 3894;

function toneFor(rate: number): Tone {
  if (rate >= 85) return "hot";
  if (rate >= 78) return "warm";
  if (rate >= 65) return "cool";
  return "cold";
}
function bandFor(rate: number): string {
  if (rate >= 85) return "Highest";
  if (rate >= 78) return "Elevated";
  if (rate >= 65) return "Around baseline";
  return "Below baseline";
}
function roiBand(roi: number): string {
  if (roi >= 2.0) return "Exceptional";
  if (roi >= 1.5) return "Strong";
  if (roi >= 1.0) return "Moderate";
  return "Thin";
}

function compute(gi: number, ti: number) {
  const g = GENRES[gi];
  const t = TIERS[ti];
  const rawRate = t.rate * g.mult;
  const success = Math.max(30, Math.min(95, rawRate));
  const n = Math.round(N_FILMS_WITH_BUDGET * g.share * t.share);
  const roi = t.roi * g.mult;
  const delta = success - BASELINE;
  return {
    success,
    delta,
    n,
    roi,
    tone: toneFor(success),
    band: bandFor(success),
    roiLabel: roiBand(roi),
  };
}

export function GenreBudgetExplorer() {
  const [gi, setGi] = useState(0);
  const [ti, setTi] = useState(1);
  const s = useMemo(() => compute(gi, ti), [gi, ti]);
  const g = GENRES[gi];
  const t = TIERS[ti];

  return (
    <div className="mv-slice">
      <div className="mv-slice-picks">
        <div className="mv-slice-col">
          <div className="mv-slice-lbl">Genre</div>
          <div className="mv-slice-chips">
            {GENRES.map((row, i) => (
              <button
                key={row.k}
                type="button"
                className={`mv-slice-chip${i === gi ? " on" : ""}`}
                onClick={() => setGi(i)}
                aria-pressed={i === gi}
              >
                {row.k}
              </button>
            ))}
          </div>
        </div>
        <div className="mv-slice-col">
          <div className="mv-slice-lbl">Budget tier</div>
          <div className="mv-slice-chips">
            {TIERS.map((row, i) => (
              <button
                key={row.k}
                type="button"
                className={`mv-slice-chip${i === ti ? " on" : ""}`}
                onClick={() => setTi(i)}
                aria-pressed={i === ti}
              >
                {row.k}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={`mv-slice-out ${s.tone}`}>
        <div className="mv-slice-hero">
          <div>
            <div className="mv-slice-band">
              <Sparkles size={13} aria-hidden /> {s.band}
            </div>
            <div className="mv-slice-title">
              {g.k} · {t.k}
            </div>
          </div>
          <div className="mv-slice-rate">
            <span className="mv-slice-rate-v">{s.success.toFixed(1)}%</span>
            <span className="mv-slice-rate-l">Modeled success rate</span>
            <span className={`mv-slice-delta ${s.delta >= 0 ? "up" : "down"}`}>
              {s.delta >= 0 ? "+" : ""}
              {s.delta.toFixed(1)} vs. baseline
            </span>
          </div>
        </div>

        <div className="mv-slice-stats">
          <div className="mv-slice-stat">
            <span className="mv-slice-stat-ic">
              <TrendingUp size={16} aria-hidden />
            </span>
            <div>
              <div className="mv-slice-stat-v">{s.roi.toFixed(2)}×</div>
              <div className="mv-slice-stat-l">Avg ROI · {s.roiLabel}</div>
            </div>
          </div>
          <div className="mv-slice-stat">
            <span className="mv-slice-stat-ic">
              <DollarSign size={16} aria-hidden />
            </span>
            <div>
              <div className="mv-slice-stat-v">{s.n.toLocaleString()}</div>
              <div className="mv-slice-stat-l">Films in this slice</div>
            </div>
          </div>
          <div className="mv-slice-stat">
            <span className="mv-slice-stat-ic">
              <AlertCircle size={16} aria-hidden />
            </span>
            <div>
              <div className="mv-slice-stat-v">
                {(s.n * (s.success / 100)).toFixed(0)}
              </div>
              <div className="mv-slice-stat-l">Modeled profitable count</div>
            </div>
          </div>
        </div>

        <p className="mv-slice-story">
          <b>{t.note}</b> {g.mult >= 1.05
            ? "The genre lifts every tier because audiences show up regardless of budget."
            : g.mult >= 0.99
            ? "Genre effect is neutral here; the tier does the heavy lifting."
            : "Oversaturation drags every tier down; the tier's ceiling is capped."}
        </p>
      </div>

      <p className="pj-caption" style={{ marginTop: 12 }}>
        Baseline tier rates from the real 3,894-film dataset. Genre × tier
        intersection modeled multiplicatively using the M1 genre efficiency
        multipliers, capped at 95% and floored at 30%. Sample counts split
        proportionally to genre and tier share of the pool.
      </p>
    </div>
  );
}
