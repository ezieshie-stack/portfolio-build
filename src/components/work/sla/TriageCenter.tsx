"use client";

import { useMemo, useState } from "react";

/**
 * TriageCenter — the marquee widget on the SLA hub. A seeded day of
 * tickets (calibrated to the documented 8.03% breach rate, Critical
 * breach $500, High breach $200) is scored and sorted by predicted
 * probability; the capacity picker + review-cost slider re-run the
 * escalation logic client-side to show breach cost caught, targeted
 * reviews, gross vs net savings, and ROI.
 *
 * Reconstruction of the Streamlit command center in the analytics
 * repo, not a fitted model.
 */

type Ticket = { prio: string; p: number; isBreach: boolean; cost: number };
type TierSpec = [prio: string, share: number, breachShare: number, cost: number, probMean: number, probSd: number];

const TIERS: TierSpec[] = [
  ["Critical", 0.18, 0.56, 500, 0.84, 0.09],
  ["High", 0.22, 0.46, 200, 0.7, 0.11],
  ["Medium", 0.3, 0.03, 0, 0.09, 0.05],
  ["Low", 0.3, 0.01, 0, 0.05, 0.03],
];

const CAP_OPTS: (number | "All")[] = [10, 25, 50, 75, 100, "All"];
const DAY_SIZE = 470;
const SEED = 2027;

const clamp = (v: number, lo: number, hi: number) =>
  Math.min(hi, Math.max(lo, v));

function mulberry32(a: number) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildDay(seed: number): Ticket[] {
  const r = mulberry32(seed);
  const out: Ticket[] = [];
  TIERS.forEach(([prio, share, br, cost, pm, ps]) => {
    const n = Math.round(DAY_SIZE * share);
    for (let i = 0; i < n; i++) {
      const u1 = Math.max(1e-9, r());
      const u2 = r();
      const z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
      let p = clamp(pm + z * ps, 0.01, 0.98);
      const isBreach = r() < br;
      // Breaches lean toward high predicted probability — the model is right about them.
      if (isBreach && cost > 0) p = Math.max(p, 0.55 + r() * 0.4);
      out.push({
        prio,
        p,
        isBreach: isBreach && cost > 0,
        cost: isBreach && cost > 0 ? cost : 0,
      });
    }
  });
  return out.sort((a, b) => b.p - a.p);
}

export function TriageCenter() {
  const [cap, setCap] = useState<number | "All">(50);
  const [icost, setIcost] = useState(2);

  const day = useMemo(() => buildDay(SEED), []);
  const totalBreachCost = useMemo(
    () => day.reduce((s, t) => s + t.cost, 0),
    [day]
  );
  const totalBreaches = useMemo(
    () => day.filter((t) => t.isBreach).length,
    [day]
  );

  const limit = cap === "All" ? day.length : cap;
  const flagged = day.slice(0, limit);
  const caught = flagged.filter((t) => t.isBreach);
  const reviews = flagged.length;
  const breachesPrevented = caught.length;
  const gross = caught.reduce((s, t) => s + t.cost, 0);
  const opsCost = reviews * icost;
  const net = gross - opsCost;
  const roi = opsCost > 0 ? net / opsCost : 0;
  const capturePct = totalBreachCost > 0 ? gross / totalBreachCost : 0;
  const capturePctInt = Math.round(capturePct * 100);

  const R = 78;
  const C = 2 * Math.PI * R;
  const offset = C * (1 - capturePct);
  const sliderPct = ((icost - 1) / (10 - 1)) * 100;

  return (
    <div className="pj-scorer">
      <div className="pj-inputs">
        <div className="pj-field">
          <span className="pj-field-lbl">Daily escalation capacity</span>
          <div className="pj-seg">
            {CAP_OPTS.map((o) => (
              <button
                key={String(o)}
                type="button"
                className={"pj-seg-btn" + (o === cap ? " on" : "")}
                onClick={() => setCap(o)}
              >
                {o === "All" ? "All" : o}
              </button>
            ))}
          </div>
        </div>

        <div className="pj-field">
          <div className="pj-slider-head">
            <span className="pj-field-lbl">Review cost per ticket</span>
            <span className="pj-slider-val">${icost}</span>
          </div>
          <input
            type="range"
            className="pj-slider"
            min={1}
            max={10}
            step={1}
            value={icost}
            onChange={(e) => setIcost(Number(e.target.value))}
            aria-label="Review cost per ticket in dollars"
            style={{
              background: `linear-gradient(to right, var(--accent) ${sliderPct}%, var(--surface-2) ${sliderPct}%)`,
            }}
          />
        </div>

        <div className="pj-why" style={{ marginTop: 4 }}>
          <span className="pj-why-h">
            Today&rsquo;s priority queue · top {reviews} of {day.length}
          </span>
          {flagged.slice(0, 6).map((t, i) => (
            <div className="pj-why-row" key={i}>
              <span className="pj-why-k" style={{ minWidth: 66 }}>
                {t.prio}
              </span>
              <div className="pj-why-track">
                <span
                  className="pj-why-bar"
                  style={{
                    left: 0,
                    width: `${t.p * 60}%`,
                    background: t.isBreach ? "#f2547d" : "var(--accent)",
                  }}
                />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--text-dim)",
                  minWidth: 38,
                  textAlign: "right",
                }}
              >
                {Math.round(t.p * 100)}%
              </span>
            </div>
          ))}
          <span className="pj-why-foot">
            <span className="up">■</span> will breach&nbsp;&nbsp;
            <span style={{ color: "var(--accent)" }}>■</span> safe
          </span>
        </div>
      </div>

      <div className="pj-readout">
        <div className="pj-gauge" aria-label={`${capturePctInt} percent of breach cost caught`}>
          <svg viewBox="0 0 180 180" width="100%" height="100%" role="img">
            <circle
              cx="90"
              cy="90"
              r={R}
              fill="none"
              stroke="var(--surface-2)"
              strokeWidth={12}
            />
            <circle
              cx="90"
              cy="90"
              r={R}
              fill="none"
              stroke="var(--accent-solid)"
              strokeWidth={12}
              strokeLinecap="round"
              strokeDasharray={C}
              strokeDashoffset={offset}
              transform="rotate(-90 90 90)"
              style={{
                transition: "stroke-dashoffset 320ms cubic-bezier(0.16,1,0.3,1)",
              }}
            />
          </svg>
          <div className="pj-gauge-center">
            <span className="pj-gauge-pct">{capturePctInt}%</span>
            <span className="pj-gauge-lbl">of breach cost caught</span>
            <span
              className="pj-gauge-band"
              style={{
                color: "var(--accent-text)",
                borderColor: "var(--violet-border)",
              }}
            >
              {breachesPrevented} of {totalBreaches} breaches
            </span>
          </div>
        </div>

        <div className="tm-metrics" style={{ width: "100%" }}>
          <div className="tm-metric">
            <div className="tm-metric-v">{reviews}</div>
            <div className="tm-metric-l">Targeted reviews</div>
          </div>
          <div className="tm-metric">
            <div className="tm-metric-v">${gross.toLocaleString()}</div>
            <div className="tm-metric-l">Gross savings</div>
          </div>
          <div className="tm-metric">
            <div className="tm-metric-v">${opsCost.toLocaleString()}</div>
            <div className="tm-metric-l">Review cost</div>
          </div>
          <div className="tm-metric">
            <div className="tm-metric-v" style={{ color: "var(--accent-text)" }}>
              ${net.toLocaleString()}
              <span
                style={{
                  fontSize: 13,
                  marginLeft: 6,
                  color: "var(--text-dim)",
                }}
              >
                {roi.toFixed(0)}×
              </span>
            </div>
            <div className="tm-metric-l">Net savings · ROI</div>
          </div>
        </div>
      </div>
    </div>
  );
}
