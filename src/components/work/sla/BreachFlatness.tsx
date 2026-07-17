"use client";

import { useState } from "react";

/**
 * BreachFlatness — the diagnostic cohort chart on the SLA hub. Bars are
 * nearly level (7.7% to 8.3%), which is itself the point: no ticket
 * type is uniquely to blame, so the fix is structural, not disciplinary.
 * Hover a row to see the underlying ticket count.
 */

const TYPES = [
  { k: "Cancellation request", rate: 8.3, n: 1695 },
  { k: "Refund request", rate: 8.2, n: 1752 },
  { k: "Technical issue", rate: 8.1, n: 1747 },
  { k: "Product inquiry", rate: 7.7, n: 1641 },
  { k: "Billing inquiry", rate: 7.7, n: 1634 },
];

const MAX = 10;

export function BreachFlatness() {
  const [hover, setHover] = useState<number | null>(null);
  return (
    <div className="pj-cohorts">
      {TYPES.map((c, i) => (
        <div
          className={"pj-cohort" + (hover === i ? " on" : "")}
          key={c.k}
          onMouseEnter={() => setHover(i)}
          onMouseLeave={() => setHover(null)}
        >
          <span className="pj-cohort-k">{c.k}</span>
          <div className="pj-cohort-track">
            <span
              className="pj-cohort-bar"
              style={{ width: `${(c.rate / MAX) * 100}%` }}
            />
          </div>
          <span className="pj-cohort-rate">{c.rate}%</span>
          <span className="pj-cohort-n">
            {hover === i ? `${c.n.toLocaleString()} tickets` : ""}
          </span>
        </div>
      ))}
    </div>
  );
}
