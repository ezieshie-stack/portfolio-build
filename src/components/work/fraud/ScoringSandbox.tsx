"use client";

import { useState } from "react";

/**
 * ScoringSandbox — the marquee widget on the fraud hub. Mirrors the
 * shipped rules engine (sql/04_rules_engine.sql) exactly: four weighted
 * rules, each with a Fires / Clear toggle, aggregating to a score out
 * of 110 with a live risk band, recommended action, daily-queue flag,
 * and the exact `risk_reasons` string a real alert would carry.
 *
 * Weights, thresholds, and tiers are verbatim from the repo.
 */

type RuleKey = "vel" | "spend" | "dest" | "odd";

type Rule = {
  key: RuleKey;
  pts: number;
  label: string;
  cond: string;
  reason: string;
};

const RULES: Rule[] = [
  {
    key: "vel",
    pts: 40,
    label: "High velocity",
    cond: "txn_cnt_1h ≥ 5",
    reason: "velocity_1h",
  },
  {
    key: "spend",
    pts: 30,
    label: "High spend",
    cond: "spend_1h ≥ $1,000",
    reason: "high_spend_1h",
  },
  {
    key: "dest",
    pts: 25,
    label: "Risky destination",
    cond: "dest_fraud_rate_30d ≥ 2%",
    reason: "risky_dest_30d",
  },
  {
    key: "odd",
    pts: 15,
    label: "Odd hours",
    cond: "hour ∈ [00:00, 05:00]",
    reason: "odd_hours_night",
  },
];

const MAX_SCORE = 110;

export function ScoringSandbox() {
  const [on, setOn] = useState<Record<RuleKey, boolean>>({
    vel: true,
    spend: true,
    dest: false,
    odd: true,
  });
  const toggle = (k: RuleKey) => setOn((p) => ({ ...p, [k]: !p[k] }));

  const score = RULES.reduce((s, r) => s + (on[r.key] ? r.pts : 0), 0);
  const tier =
    score >= 80
      ? "Queue"
      : score >= 60
        ? "High"
        : score >= 30
          ? "Medium"
          : "Low";
  const tierColor =
    score >= 80
      ? "#ef4444"
      : score >= 60
        ? "#f2547d"
        : score >= 30
          ? "#f5a623"
          : "#3ec28f";
  const action =
    score >= 80
      ? "Reaches the daily investigation queue"
      : score >= 60
        ? "Freeze account + investigator review"
        : score >= 30
          ? "Step-up auth (OTP) + monitor"
          : "No action";
  const inQueue = score >= 80;
  const reasons =
    RULES.filter((r) => on[r.key]).map((r) => r.reason).join("; ") || "none";

  const R = 78;
  const C = 2 * Math.PI * R;
  const offset = C * (1 - score / MAX_SCORE);

  return (
    <div className="fx-scorer">
      <div className="fx-inputs">
        <span className="fx-scorer-h">Toggle the rules that fire for a transaction</span>
        {RULES.map((r) => (
          <div key={r.key} className="fx-field">
            <div className="fx-field-head">
              <span className="fx-field-lbl">
                {r.label}{" "}
                <span className="fx-field-cond">· {r.cond}</span>
              </span>
              <span className="fx-field-pts">+{r.pts}</span>
            </div>
            <div className="fx-seg" role="radiogroup" aria-label={r.label}>
              <button
                type="button"
                role="radio"
                aria-checked={on[r.key]}
                className={"fx-seg-btn" + (on[r.key] ? " on" : "")}
                onClick={() => on[r.key] || toggle(r.key)}
              >
                Fires
              </button>
              <button
                type="button"
                role="radio"
                aria-checked={!on[r.key]}
                className={"fx-seg-btn" + (!on[r.key] ? " on" : "")}
                onClick={() => !on[r.key] || toggle(r.key)}
              >
                Clear
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="fx-out">
        <div className="fx-gauge" aria-label={`Risk score ${score} out of ${MAX_SCORE}`}>
          <svg viewBox="0 0 180 180" width="180" height="180" role="img">
            <circle
              cx="90"
              cy="90"
              r={R}
              fill="none"
              stroke="var(--border)"
              strokeWidth={12}
            />
            <circle
              cx="90"
              cy="90"
              r={R}
              fill="none"
              stroke={tierColor}
              strokeWidth={12}
              strokeLinecap="round"
              strokeDasharray={C}
              strokeDashoffset={offset}
              transform="rotate(-90 90 90)"
              style={{
                transition:
                  "stroke-dashoffset 320ms cubic-bezier(0.16,1,0.3,1), stroke 200ms ease",
              }}
            />
            <text
              x="90"
              y="88"
              textAnchor="middle"
              fontSize="34"
              fontWeight={800}
              fill="var(--text-heading)"
            >
              {score}
            </text>
            <text
              x="90"
              y="108"
              textAnchor="middle"
              fontFamily="var(--font-mono)"
              fontSize="9.5"
              letterSpacing="0.16em"
              fill="var(--text-dim)"
            >
              RISK SCORE / 110
            </text>
          </svg>
          <span
            className="fx-risk"
            style={{ color: tierColor, borderColor: tierColor }}
          >
            {tier} risk
          </span>
        </div>

        <div className="fx-why">
          <span className="fx-why-h">Recommended action</span>
          <p className="fx-why-action">{action}</p>
          <span className="fx-why-h">Daily queue (score ≥ 80)</span>
          <p
            className="fx-why-queue"
            style={{ color: inQueue ? "#f2547d" : "var(--text-dim)" }}
          >
            {inQueue
              ? "Reaches an investigator today."
              : "Below the queue cutoff, monitored not escalated."}
          </p>
          <span className="fx-why-h">risk_reasons</span>
          <code className="fx-why-reasons">{reasons}</code>
        </div>
      </div>
    </div>
  );
}
