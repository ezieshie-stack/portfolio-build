import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { FraudSubNav } from "@/components/work/fraud/FraudSubNav";
import type { ReactNode } from "react";

export const metadata = {
  title: "Fraud · SQL Explorer (F1) | David Ezieshi",
  description: "The 7 fraud-detection analysis queries — velocity, balance anomalies, structuring, precision analysis.",
};

type Query = { id: string; title: string; phase: string; q: string; sql: string; read: ReactNode };

const QUERIES: Query[] = [
  { id: "01", title: "Baseline metrics", phase: "Discovery",
    q: "What is normal? Volume, fraud rate, amount distribution, and the worst senders.",
    sql: `SELECT
  COUNT(*) AS total_txns,
  MIN(step) AS min_step,
  MAX(step) AS max_step,
  ROUND(100.0 * AVG(isFraud), 3) AS overall_fraud_rate_pct
FROM fraud.transactions_raw;

-- Fraud rate by transaction type
SELECT type, COUNT(*) AS txns,
  SUM(isFraud) AS fraud_txns,
  ROUND(100.0 * AVG(isFraud), 3) AS fraud_rate_pct
FROM fraud.transactions_raw
GROUP BY 1
ORDER BY fraud_rate_pct DESC;`,
    read: <>Establishes the baseline every later rule is measured against. In PaySim fraud lives almost entirely in <b>TRANSFER and CASH_OUT</b>, so the whole system focuses there.</> },
  { id: "02", title: "Velocity fraud (burst detection)", phase: "Discovery",
    q: "Which accounts fire a rapid burst of transfers in a short window?",
    sql: `WITH rolling AS (
  SELECT nameOrig, step, type, amount,
    COUNT(*) OVER (
      PARTITION BY nameOrig ORDER BY step
      RANGE BETWEEN 2 PRECEDING AND CURRENT ROW
    ) AS txns_last_3_steps,
    SUM(amount) OVER (
      PARTITION BY nameOrig ORDER BY step
      RANGE BETWEEN 2 PRECEDING AND CURRENT ROW
    ) AS amt_last_3_steps
  FROM fraud.transactions_raw
  WHERE type IN ('TRANSFER','CASH_OUT')
)
SELECT * FROM rolling
WHERE txns_last_3_steps >= 5
   OR amt_last_3_steps >= 10000
ORDER BY amt_last_3_steps DESC
LIMIT 200;`,
    read: <>A window function counts transactions and sums spend over a rolling 3-step (3-hour) frame <b>per account</b>, so a normal-looking lifetime total cannot hide an hourly burst.</> },
  { id: "03", title: "Balance anomalies (follow the money)", phase: "Anomaly",
    q: "Do the balances reconcile, and who receives big money into an empty wallet?",
    sql: `-- Origin reconciliation mismatch
SELECT step, type, nameOrig, amount,
  oldbalanceOrg, newbalanceOrig,
  (newbalanceOrig - (oldbalanceOrg - amount)) AS discrepancy
FROM fraud.transactions_raw
WHERE type IN ('TRANSFER','CASH_OUT')
  AND ABS(newbalanceOrig - (oldbalanceOrg - amount)) > 0.01;

-- Empty wallet receives a large amount
SELECT step, nameDest, amount, oldbalanceDest, newbalanceDest
FROM fraud.transactions_raw
WHERE oldbalanceDest = 0 AND newbalanceDest > 0
  AND amount >= 10000
ORDER BY amount DESC;`,
    read: <>When <code>newbalance</code> does not equal <code>oldbalance − amount</code>, the ledger has been tampered with. An empty destination suddenly receiving a large sum is a classic <b>cash-out endpoint</b>.</> },
  { id: "04", title: "Structuring / smurfing", phase: "Anomaly",
    q: "Who splits a big transfer into chunks to stay under the reporting threshold?",
    sql: `WITH params AS (
  SELECT 10000::numeric AS report_threshold,
         3000::numeric  AS single_txn_cap
),
daily AS (
  SELECT nameOrig, (step / 24) AS day_bucket,
    COUNT(*) AS txns, MAX(amount) AS max_txn,
    SUM(amount) AS total_amt
  FROM fraud.transactions_raw
  WHERE type IN ('TRANSFER','CASH_OUT')
  GROUP BY 1, 2
)
SELECT d.*, p.report_threshold, p.single_txn_cap
FROM daily d CROSS JOIN params p
WHERE d.total_amt > p.report_threshold
  AND d.max_txn  < p.single_txn_cap
ORDER BY d.total_amt DESC;`,
    read: <>Smurfing is a daily total over <b>$10,000</b> where every single transfer stays under a <b>$3,000</b> cap: deliberately engineered to slip beneath reporting rules.</> },
  { id: "05", title: "Risk scoring logic", phase: "Risk engineering",
    q: "How do the signals combine into one interpretable score?",
    sql: `SELECT nameOrig, nameDest, step,
  (
    CASE WHEN txn_cnt_1h >= 5           THEN 40 ELSE 0 END +
    CASE WHEN spend_1h   >= 1000        THEN 30 ELSE 0 END +
    CASE WHEN dest_fraud_rate_30d >= 0.02 THEN 25 ELSE 0 END +
    CASE WHEN (step % 24) BETWEEN 0 AND 5 THEN 15 ELSE 0 END
  ) AS risk_score,
  isFraud
FROM fraud.mart_risk_features
ORDER BY risk_score DESC
LIMIT 500;`,
    read: <>Four weighted CASE statements sum to a score out of 110. This is the whole engine, and it is <b>fully auditable</b>: no coefficients, no black box, just readable thresholds.</> },
  { id: "06", title: "False-positive analysis", phase: "Risk engineering",
    q: "Does precision actually rise with the score?",
    sql: `WITH scored AS (
  SELECT step, risk_score, isFraud
  FROM fraud.mart_rules_engine
  WHERE risk_score > 0
),
bucketed AS (
  SELECT width_bucket(risk_score, 0, 100, 5) AS bucket_id,
         risk_score, isFraud
  FROM scored
)
SELECT (bucket_id-1)*20 AS bucket_min, bucket_id*20 AS bucket_max,
  COUNT(*) AS total_flagged,
  SUM(isFraud::int) AS true_fraud,
  ROUND(100.0 * (SUM(isFraud::int)::numeric
    / NULLIF(COUNT(*),0)), 2) AS precision_pct
FROM bucketed
GROUP BY 1, 2
ORDER BY bucket_min DESC;`,
    read: <>Bucketing flagged transactions by score and measuring precision per bucket proves the score <b>separates</b> high-risk from low-risk traffic, which justifies drawing the queue at the top.</> },
  { id: "07", title: "Alert threshold simulation", phase: "Risk engineering",
    q: "How many alerts per day at each threshold, and can the team handle it?",
    sql: `WITH daily_stats AS (
  SELECT (step / 24) AS day_id, risk_score
  FROM fraud.mart_rules_engine
)
SELECT 'Score >= 80' AS threshold_level,
  ROUND(COUNT(*)::numeric
    / NULLIF(COUNT(DISTINCT day_id),0), 2) AS avg_daily_alerts
FROM daily_stats WHERE risk_score >= 80
UNION ALL
SELECT 'Score >= 60', ROUND(COUNT(*)::numeric
  / NULLIF(COUNT(DISTINCT day_id),0), 2)
FROM daily_stats WHERE risk_score >= 60
UNION ALL
SELECT 'Score >= 40', ROUND(COUNT(*)::numeric
  / NULLIF(COUNT(DISTINCT day_id),0), 2)
FROM daily_stats WHERE risk_score >= 40;`,
    read: <>Average alerts per day at each cutoff turns the threshold into a <b>staffing decision</b>. Pick the score that fills the team&rsquo;s capacity without overflowing the queue.</> },
];

export default function FraudSqlPage() {
  return (
    <div className="pf-page">
      <div className="pf-shell">
        <FraudSubNav active="sql" />
        <section className="pj-hero-head" style={{ marginTop: 28 }}>
          <Badge tone="violet" style={{ marginBottom: 16 }}>Artifact F1 · SQL Query Explorer</Badge>
          <h1 className="pf-page-title" style={{ fontSize: "clamp(30px,3.2vw,46px)" }}>
            Seven queries, the real SQL.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 700 }}>
            Each detection pattern lives as a versioned SQL script against the PaySim table.
            Every card shows the exact query and what the pattern means.
          </p>
        </section>
        <section className="pj-section" style={{ marginTop: 30 }}>
          <div className="tq-grid">
            {QUERIES.map((q) => (
              <div className="tq-card" key={q.id}>
                <div className="tq-head">
                  <div className="tq-n">{q.id}</div>
                  <div className="tq-title">{q.title}</div>
                  <div className="tq-q">{q.q}</div>
                </div>
                <div className="tq-body" style={{ gridTemplateColumns: "1fr" }}>
                  <pre className="tq-sql">{q.sql}</pre>
                </div>
                <div className="tq-read">
                  <span className="tq-read-tag">{q.phase}</span> {q.read}
                </div>
              </div>
            ))}
          </div>
        </section>
        <Link href="/work/fraud-detection/data" className="pj-next">
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
