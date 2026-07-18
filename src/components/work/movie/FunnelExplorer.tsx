"use client";

import { useState } from "react";
import { AlertTriangle } from "lucide-react";

/**
 * FunnelExplorer — the signature widget on the movie hub. A 7-stage
 * investment-to-profitability funnel where each stage is a button; the
 * selected stage renders its story in the detail panel on the right.
 *
 * All numbers verbatim from the movies-dataset repo (README + funnel
 * analysis CSV), 5,009 films 1970–2017.
 */

const TOTAL = 5009;

type Kind = "data" | "leak" | "profit";

type Stage = {
  k: string;
  n: number;
  kind: Kind;
  story: string;
};

const FUNNEL: Stage[] = [
  {
    k: "Total films",
    n: 5009,
    kind: "data",
    story:
      "The full dataset: 5,009 films released between 1970 and 2017, merged from TMDB (4,803 rows) and IMDB metadata (5,043 rows) into one 42-column master.",
  },
  {
    k: "Has budget data",
    n: 3951,
    kind: "data",
    story:
      "1,058 films drop out here with no production budget on record. This is a data-availability gap, not an economic one, so ROI is undefined for them and they sit outside the money analysis.",
  },
  {
    k: "Generated revenue",
    n: 3767,
    kind: "data",
    story:
      "184 films had a budget but never recorded box office revenue: shelved, unreleased, or data-incomplete projects.",
  },
  {
    k: "Recovered 50%+ of budget",
    n: 3191,
    kind: "leak",
    story:
      "576 films earned money at the box office but could not recover even half their production cost. This is the single biggest capital leak in the industry, and where tighter pre-greenlight cost control has the most leverage.",
  },
  {
    k: "Profitable (rev > budget)",
    n: 2732,
    kind: "profit",
    story:
      "The break-even line. 54.5% of all films clear it, meaning nearly half never do. This is why studios must think in portfolio terms rather than betting on individual titles.",
  },
  {
    k: "Strong ROI (>100%)",
    n: 2019,
    kind: "profit",
    story:
      "40.3% of films more than doubled their production budget. Profit and quality track together here: average audience rating keeps climbing through every stage of the funnel.",
  },
  {
    k: "Exceptional ROI (>300%)",
    n: 1425,
    kind: "profit",
    story:
      "28.4% of films returned more than 300%. These are the capital-efficient hits, disproportionately low-budget Horror and Mystery titles that need no nine-figure VFX to succeed.",
  },
];

export function FunnelExplorer() {
  const [sel, setSel] = useState(3); // default: the biggest leak
  const s = FUNNEL[sel];
  const prev = sel > 0 ? FUNNEL[sel - 1].n : null;
  const drop = prev !== null ? prev - s.n : 0;
  const conv = prev !== null ? (s.n / prev) * 100 : 100;
  const pctTotal = (s.n / TOTAL) * 100;

  return (
    <div className="mv-funnel">
      <div className="mv-stages">
        {FUNNEL.map((f, i) => {
          const prevN = i > 0 ? FUNNEL[i - 1].n : null;
          const d = prevN !== null ? prevN - f.n : 0;
          return (
            <button
              key={f.k}
              type="button"
              className={
                "mv-stage" +
                (i === sel ? " on" : "") +
                (f.kind === "leak" ? " leak" : "")
              }
              onClick={() => setSel(i)}
            >
              <div className="mv-stage-top">
                <span className="mv-stage-k">{f.k}</span>
                <span className="mv-stage-n">
                  {f.n.toLocaleString()} · {((f.n / TOTAL) * 100).toFixed(1)}%
                </span>
              </div>
              <div className="mv-stage-track">
                <span
                  className="mv-stage-bar"
                  style={{ width: `${(f.n / TOTAL) * 100}%` }}
                />
              </div>
              {prevN !== null ? (
                <span className="mv-stage-drop">
                  ↓ {d.toLocaleString()} lost from prior stage
                  {f.kind === "leak" ? "  ·  biggest capital leak" : ""}
                </span>
              ) : (
                <span className="mv-stage-drop">starting cohort</span>
              )}
            </button>
          );
        })}
      </div>
      <div className="mv-detail">
        <span className="mv-detail-idx">Stage {sel + 1} of 7</span>
        <h3>{s.k}</h3>
        <div className="mv-detail-big">{s.n.toLocaleString()}</div>
        <div className="mv-detail-sub">
          {pctTotal.toFixed(1)}% of all films
          {prev !== null ? `  ·  ${conv.toFixed(1)}% kept from prior` : ""}
        </div>
        {s.kind === "leak" ? (
          <span className="mv-detail-tag">
            <AlertTriangle size={12} aria-hidden /> Biggest leak
          </span>
        ) : null}
        <p>{s.story}</p>
        {prev !== null ? (
          <p style={{ color: "var(--text-dim)", fontSize: 12.5 }}>
            Drop from previous stage: {drop.toLocaleString()} films.
          </p>
        ) : null}
      </div>
    </div>
  );
}
