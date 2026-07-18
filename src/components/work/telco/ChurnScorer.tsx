"use client";

import { useMemo, useState } from "react";

/**
 * ChurnScorer — client-side interactive reconstruction of the
 * logistic-regression model from T3. Coefficients are calibrated to
 * reproduce the top-of-funnel numbers the SQL Explorer documents
 * (Month-to-month · Fiber · No support · 5-month tenure · $85/mo → ~75%
 * churn probability), not fitted here — the fitted version lives in
 * 10_ml_logistic_regression.py in the repo.
 */

type Contract = "m2m" | "1yr" | "2yr";
type Internet = "fiber" | "dsl" | "none";
type YesNo = "yes" | "no";

const COEF = {
  intercept: -1.8,
  contract: { m2m: 1.4, "1yr": -0.7, "2yr": -1.6 } as Record<Contract, number>,
  internet: { fiber: 0.8, dsl: -0.1, none: -1.2 } as Record<Internet, number>,
  techSupport: { yes: -0.45, no: 0.45 } as Record<YesNo, number>,
  paperless: { yes: 0.25, no: -0.25 } as Record<YesNo, number>,
  tenurePerMonth: -0.045,
  chargesPerDollarOverBase: 0.012,
  chargesBase: 65,
} as const;

const sigmoid = (x: number) => 1 / (1 + Math.exp(-x));

type DriverKey =
  | "contract"
  | "monthly"
  | "internet"
  | "techSupport"
  | "paperless"
  | "tenure";

const DRIVER_LABELS: Record<DriverKey, string> = {
  contract: "Contract",
  monthly: "Monthly charges",
  internet: "Internet",
  techSupport: "Tech support",
  paperless: "Paperless",
  tenure: "Tenure",
};

export function ChurnScorer() {
  const [contract, setContract] = useState<Contract>("m2m");
  const [internet, setInternet] = useState<Internet>("fiber");
  const [techSupport, setTechSupport] = useState<YesNo>("no");
  const [paperless, setPaperless] = useState<YesNo>("yes");
  const [tenure, setTenure] = useState(5);
  const [charges, setCharges] = useState(85);

  const { probability, drivers } = useMemo(() => {
    const parts: Record<DriverKey, number> = {
      contract: COEF.contract[contract],
      internet: COEF.internet[internet],
      techSupport: COEF.techSupport[techSupport],
      paperless: COEF.paperless[paperless],
      tenure: COEF.tenurePerMonth * tenure,
      monthly: COEF.chargesPerDollarOverBase * (charges - COEF.chargesBase),
    };
    const logit =
      COEF.intercept +
      parts.contract +
      parts.internet +
      parts.techSupport +
      parts.paperless +
      parts.tenure +
      parts.monthly;
    const p = sigmoid(logit);
    const order: DriverKey[] = [
      "contract",
      "monthly",
      "internet",
      "techSupport",
      "paperless",
      "tenure",
    ];
    const maxAbs = Math.max(...order.map((k) => Math.abs(parts[k])), 0.1);
    const drivers = order.map((k) => ({
      key: k,
      value: parts[k],
      pct: (Math.abs(parts[k]) / maxAbs) * 100,
    }));
    return { probability: p, drivers };
  }, [contract, internet, techSupport, paperless, tenure, charges]);

  const pct = Math.round(probability * 100);
  const risk = probability >= 0.6 ? "HIGH RISK" : probability >= 0.35 ? "AT RISK" : "LOW RISK";
  const R = 96;
  const CIRC = 2 * Math.PI * R;
  const offset = CIRC * (1 - probability);
  const gaugeColor = probability >= 0.6 ? "#f2547d" : probability >= 0.35 ? "#f0a744" : "#3ec28f";

  return (
    <div className="cs-card">
      <div className="cs-row">
        <div className="cs-field-label">Contract</div>
        <div className="cs-toggle" role="radiogroup" aria-label="Contract">
          {(
            [
              ["m2m", "Month-to-month"],
              ["1yr", "One year"],
              ["2yr", "Two year"],
            ] as [Contract, string][]
          ).map(([k, label]) => (
            <button
              key={k}
              type="button"
              role="radio"
              aria-checked={contract === k}
              className={`cs-tog${contract === k ? " on" : ""}`}
              onClick={() => setContract(k)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="cs-row">
        <div className="cs-field-label">Internet Service</div>
        <div className="cs-toggle" role="radiogroup" aria-label="Internet Service">
          {(
            [
              ["fiber", "Fiber optic"],
              ["dsl", "DSL"],
              ["none", "None"],
            ] as [Internet, string][]
          ).map(([k, label]) => (
            <button
              key={k}
              type="button"
              role="radio"
              aria-checked={internet === k}
              className={`cs-tog${internet === k ? " on" : ""}`}
              onClick={() => setInternet(k)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="cs-row cs-row-2">
        <div className="cs-col">
          <div className="cs-field-label">Tech Support</div>
          <div className="cs-toggle" role="radiogroup" aria-label="Tech Support">
            {(
              [
                ["yes", "Yes"],
                ["no", "No"],
              ] as [YesNo, string][]
            ).map(([k, label]) => (
              <button
                key={k}
                type="button"
                role="radio"
                aria-checked={techSupport === k}
                className={`cs-tog${techSupport === k ? " on" : ""}`}
                onClick={() => setTechSupport(k)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        <div className="cs-col">
          <div className="cs-field-label">Paperless Billing</div>
          <div className="cs-toggle" role="radiogroup" aria-label="Paperless Billing">
            {(
              [
                ["yes", "Yes"],
                ["no", "No"],
              ] as [YesNo, string][]
            ).map(([k, label]) => (
              <button
                key={k}
                type="button"
                role="radio"
                aria-checked={paperless === k}
                className={`cs-tog${paperless === k ? " on" : ""}`}
                onClick={() => setPaperless(k)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="cs-slider">
        <div className="cs-slider-head">
          <span className="cs-field-label">Tenure</span>
          <span className="cs-slider-v">
            {tenure} <em>mo</em>
          </span>
        </div>
        <input
          type="range"
          min={0}
          max={72}
          step={1}
          value={tenure}
          onChange={(e) => setTenure(Number(e.target.value))}
          aria-label="Tenure in months"
        />
      </div>

      <div className="cs-slider">
        <div className="cs-slider-head">
          <span className="cs-field-label">Monthly Charges</span>
          <span className="cs-slider-v">
            {charges} <em>$</em>
          </span>
        </div>
        <input
          type="range"
          min={20}
          max={120}
          step={1}
          value={charges}
          onChange={(e) => setCharges(Number(e.target.value))}
          aria-label="Monthly charges in dollars"
        />
      </div>

      <div className="cs-out">
        <div className="cs-gauge" aria-label={`Churn probability ${pct} percent`}>
          <svg viewBox="0 0 220 220" width="220" height="220" role="img">
            <circle
              cx="110"
              cy="110"
              r={R}
              fill="none"
              stroke="var(--border)"
              strokeWidth={10}
            />
            <circle
              cx="110"
              cy="110"
              r={R}
              fill="none"
              stroke={gaugeColor}
              strokeWidth={10}
              strokeLinecap="round"
              strokeDasharray={CIRC}
              strokeDashoffset={offset}
              transform="rotate(-90 110 110)"
              style={{ transition: "stroke-dashoffset 320ms ease, stroke 200ms ease" }}
            />
            <text
              x="110"
              y="100"
              textAnchor="middle"
              fontSize="36"
              fontWeight={800}
              fill="var(--text-heading)"
            >
              {pct}%
            </text>
            <text
              x="110"
              y="122"
              textAnchor="middle"
              fontFamily="var(--font-mono)"
              fontSize="10"
              letterSpacing="0.16em"
              fill="var(--text-dim)"
            >
              CHURN PROBABILITY
            </text>
          </svg>
          <span className={`cs-risk cs-risk-${probability >= 0.6 ? "hi" : probability >= 0.35 ? "mid" : "lo"}`}>
            {risk}
          </span>
        </div>

        <div className="cs-drivers">
          <div className="cs-drivers-h">What&rsquo;s driving it</div>
          {drivers.map((d) => (
            <div className="cs-drow" key={d.key}>
              <span className="cs-dlbl">{DRIVER_LABELS[d.key]}</span>
              <div className="cs-dtrack">
                <span
                  className={`cs-dbar ${d.value >= 0 ? "up" : "dn"}`}
                  style={{ width: `${d.pct}%` }}
                />
              </div>
            </div>
          ))}
          <div className="cs-dlegend">
            <span className="cs-dot up" /> raises churn
            <span className="cs-dot dn" /> lowers churn
          </div>
        </div>
      </div>
    </div>
  );
}
