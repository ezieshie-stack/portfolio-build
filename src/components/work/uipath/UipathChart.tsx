"use client";

import { AlertTriangle } from "lucide-react";

/**
 * UipathChart — the "Price change vs last known" diverging bar chart.
 * Bars are drawn on a symmetric axis (-40% ... +40%) with a dashed
 * center line and two dashed threshold lines at ±5%. Warm bars mark
 * upward moves that breach; teal marks downward breaches; gray marks
 * inside-the-band values (no alert). Numbers are the same source as
 * the replay above.
 */

type Row = { name: string; pct: number; alert: boolean; stockFlag?: boolean };

const ROWS: Row[] = [
  { name: "Adorama", pct: 16.36, alert: true },
  { name: "B&H Photo Video", pct: 37.84, alert: true },
  { name: "Micro Center", pct: -16.67, alert: true },
  { name: "Insight", pct: 19.66, alert: true },
  { name: "Micro Card", pct: 14.78, alert: true, stockFlag: true },
  { name: "Tomauri", pct: -4.18, alert: false },
  { name: "Canada Computers", pct: 38.88, alert: true },
];

const RANGE = 40; // -40% ... +40%

function pctToLeft(v: number): string {
  const clamped = Math.max(-RANGE, Math.min(RANGE, v));
  return `${50 + (clamped / RANGE) * 50}%`;
}

export function UipathChart() {
  return (
    <div className="up-panel">
      <div className="up-panel-bar">
        <span className="up-panel-title">
          Price change vs last known — alert threshold ±5%
        </span>
      </div>
      <div className="up-chart">
        <div className="up-chart-axis">
          <span style={{ left: pctToLeft(-5) }}>−5%</span>
          <span style={{ left: pctToLeft(5) }}>+5%</span>
        </div>
        <div className="up-chart-grid">
          <span className="up-chart-line center" style={{ left: pctToLeft(0) }} />
          <span className="up-chart-line thr" style={{ left: pctToLeft(-5) }} />
          <span className="up-chart-line thr" style={{ left: pctToLeft(5) }} />
        </div>
        {ROWS.map((r) => {
          const w = Math.abs(r.pct) / RANGE * 50;
          const positive = r.pct >= 0;
          const alertClass = !r.alert
            ? "neutral"
            : positive
              ? "up"
              : "down";
          return (
            <div className="up-chart-row" key={r.name}>
              <span className="up-chart-name">{r.name}</span>
              <div className="up-chart-track">
                <span
                  className={`up-chart-fill ${alertClass}`}
                  style={{
                    left: positive ? "50%" : `calc(50% - ${w}%)`,
                    width: `${w}%`,
                  }}
                />
                <span
                  className="up-chart-label"
                  style={{
                    left: positive ? `calc(50% + ${w}% + 6px)` : `calc(50% - ${w}% - 6px)`,
                    transform: positive ? "translate(0, -50%)" : "translate(-100%, -50%)",
                  }}
                >
                  {r.pct >= 0 ? "+" : ""}
                  {r.pct.toFixed(2)}%
                  {r.stockFlag ? (
                    <>
                      {" "}
                      · stock <AlertTriangle size={10} aria-hidden />
                    </>
                  ) : null}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <p className="up-chart-cap">
        Warm bars mark upward breaches, teal marks downward breaches, gray sits inside the ±5% band. Micro Card also flipped to Out of Stock, the second alert condition.
      </p>
    </div>
  );
}
