import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { TelcoSubNav } from "@/components/work/telco/TelcoSubNav";
import type { ReactNode } from "react";

export const metadata = {
  title: "Telco · SQL Query Explorer (T1) | David Ezieshi",
  description:
    "The 8 analytical SQL queries with their actual grouped results from a fresh run against churn.db.",
};

type Query = {
  id: string;
  title: string;
  q: string;
  sql: string;
  cols: string[];
  rows: (string | number)[][];
  read: ReactNode;
  noBars?: boolean;
  stat?: [string, string][];
};

const QUERIES: Query[] = [
  {
    id: "Q1",
    title: "Churn rate by contract type",
    q: "Do short-term contracts churn more than long-term ones, and by how much?",
    sql: `SELECT
  contract,
  COUNT(*) AS customers,
  ROUND(SUM(CASE WHEN churn='Yes'
    THEN 1 ELSE 0 END)*1.0/COUNT(*), 3) AS churn_rate
FROM customers
GROUP BY contract
ORDER BY churn_rate DESC;`,
    cols: ["Contract", "Customers", "Churn rate"],
    rows: [
      ["Month-to-month", "3,875", 42.7],
      ["One year", "1,473", 11.3],
      ["Two year", "1,695", 2.8],
    ],
    read: (
      <>
        Month-to-month churns at <b>15× the rate</b> of two-year contracts.
        Committing a customer to a longer contract is the single strongest
        defence in the dataset.
      </>
    ),
  },
  {
    id: "Q2",
    title: "Churn rate by payment method",
    q: "Does how someone pays predict whether they leave?",
    sql: `SELECT
  paymentmethod,
  COUNT(*) AS customers,
  ROUND(SUM(CASE WHEN churn='Yes'
    THEN 1 ELSE 0 END)*1.0/COUNT(*), 3) AS churn_rate
FROM customers
GROUP BY paymentmethod
ORDER BY churn_rate DESC;`,
    cols: ["Payment method", "Customers", "Churn rate"],
    rows: [
      ["Electronic check", "2,365", 45.3],
      ["Mailed check", "1,612", 19.1],
      ["Bank transfer (auto)", "1,544", 16.7],
      ["Credit card (auto)", "1,522", 15.2],
    ],
    read: (
      <>
        Manual payment methods churn at <b>2 to 3× the rate</b> of automatic
        ones. Auto-payment is a proxy for commitment.
      </>
    ),
  },
  {
    id: "Q3",
    title: "Contract × Payment cross-tab",
    q: "Stack the two risk signals — what is the worst-case segment?",
    sql: `SELECT
  contract, paymentmethod,
  COUNT(*) AS customers,
  ROUND(SUM(CASE WHEN churn='Yes'
    THEN 1 ELSE 0 END)*1.0/COUNT(*), 3) AS churn_rate
FROM customers
GROUP BY contract, paymentmethod
ORDER BY churn_rate DESC;`,
    cols: ["Segment", "Customers", "Churn rate"],
    rows: [
      ["M2M · Electronic check", "1,850", 53.7],
      ["M2M · Bank transfer", "589", 34.1],
      ["M2M · Credit card", "543", 32.8],
      ["M2M · Mailed check", "893", 31.6],
      ["1yr · Electronic check", "347", 18.4],
      ["2yr · Bank transfer", "564", 3.4],
      ["2yr · Mailed check", "382", 0.8],
    ],
    read: (
      <>
        Month-to-month + Electronic check = <b>53.7% churn</b> — a coin flip.
        1,850 customers (26% of the base) sit in this one cell.
      </>
    ),
  },
  {
    id: "Q4",
    title: "Churn rate by tenure band",
    q: "When in a customer's lifecycle do they leave?",
    sql: `SELECT
  CASE
    WHEN tenure<=6  THEN '0-6 months'
    WHEN tenure<=12 THEN '7-12 months'
    WHEN tenure<=24 THEN '13-24 months'
    ELSE '25+ months' END AS tenure_band,
  COUNT(*) AS customers,
  ROUND(SUM(CASE WHEN churn='Yes'
    THEN 1 ELSE 0 END)*1.0/COUNT(*), 3) AS churn_rate
FROM customers
GROUP BY tenure_band
ORDER BY churn_rate DESC;`,
    cols: ["Tenure band", "Customers", "Churn rate"],
    rows: [
      ["0-6 months", "1,481", 52.9],
      ["7-12 months", "705", 35.9],
      ["13-24 months", "1,024", 28.7],
      ["25+ months", "3,833", 14.0],
    ],
    read: (
      <>
        The first six months are catastrophic: <b>over 50% attrition</b>.
        Onboarding is not marketing, it is a retention lever.
      </>
    ),
  },
  {
    id: "Q5",
    title: "Tenure × Contract interaction",
    q: "Is the early-tenure cliff universal, or just month-to-month?",
    sql: `SELECT
  CASE WHEN tenure<=6 THEN '0-6 months'
    WHEN tenure<=12 THEN '7-12 months'
    WHEN tenure<=24 THEN '13-24 months'
    ELSE '25+ months' END AS tenure_band,
  contract, COUNT(*) AS customers,
  ROUND(SUM(CASE WHEN churn='Yes'
    THEN 1 ELSE 0 END)*1.0/COUNT(*), 3) AS churn_rate
FROM customers
GROUP BY tenure_band, contract
HAVING COUNT(*) >= 100
ORDER BY churn_rate DESC;`,
    cols: ["Band · Contract", "Customers", "Churn rate"],
    rows: [
      ["0-6mo · M2M", "1,413", 55.2],
      ["7-12mo · M2M", "581", 42.0],
      ["13-24mo · M2M", "737", 37.7],
      ["25+mo · M2M", "1,144", 30.9],
      ["25+mo · 1yr", "1,152", 11.9],
      ["25+mo · 2yr", "1,537", 3.1],
    ],
    read: (
      <>
        The cliff <b>is</b> a month-to-month story. Long-contract customers who
        pass year one flatten at 3 to 11%. The problem is not new customers —
        it is new customers who never committed.
      </>
    ),
  },
  {
    id: "Q6",
    title: "Service quality · Internet × Tech Support",
    q: "Is expensive internet without support worse than cheaper internet with it?",
    sql: `SELECT
  internetservice, techsupport,
  COUNT(*) AS customers,
  ROUND(SUM(CASE WHEN churn='Yes'
    THEN 1 ELSE 0 END)*1.0/COUNT(*), 3) AS churn_rate
FROM customers
GROUP BY internetservice, techsupport
HAVING COUNT(*) >= 100
ORDER BY churn_rate DESC;`,
    cols: ["Internet · Support", "Customers", "Churn rate"],
    rows: [
      ["Fiber optic · No", "2,230", 49.4],
      ["DSL · No", "1,243", 27.8],
      ["Fiber optic · Yes", "866", 22.6],
      ["DSL · Yes", "1,178", 9.7],
      ["No internet", "1,526", 7.4],
    ],
    read: (
      <>
        Fiber-optic customers <b>without</b> Tech Support churn at ~49%. Adding
        support more than halves it (49.4% → 22.6%). Premium product without
        premium support is the worst segment in the data.
      </>
    ),
  },
  {
    id: "Q7",
    title: "Pricing sensitivity by charge band",
    q: "Are higher-paying customers more likely to churn?",
    sql: `SELECT
  CASE WHEN monthlycharges<30 THEN '$0-30'
    WHEN monthlycharges<60 THEN '$30-60'
    WHEN monthlycharges<90 THEN '$60-90'
    ELSE '$90+' END AS price_range,
  COUNT(*) AS customers,
  ROUND(SUM(CASE WHEN churn='Yes'
    THEN 1 ELSE 0 END)*1.0/COUNT(*), 3) AS churn_rate
FROM customers
GROUP BY price_range
ORDER BY MIN(monthlycharges);`,
    cols: ["Price range", "Customers", "Churn rate"],
    rows: [
      ["$0 - $30", "1,653", 9.8],
      ["$30 - $60", "1,254", 26.1],
      ["$60 - $90", "2,392", 33.7],
      ["$90+", "1,744", 32.9],
    ],
    read: (
      <>
        Churn triples from cheapest to mid band, then <b>plateaus</b>. Above
        $60/mo, higher price does not push churn further — so it is not the
        price. It is the value gap at those price points.
      </>
    ),
  },
  {
    id: "Q8",
    title: "Statistical validation · Chi-Square",
    q: "Is the contract-vs-churn relationship real, or noise?",
    sql: `SELECT contract, churn, COUNT(*) AS n
FROM customers
GROUP BY contract, churn;

-- scipy.stats.chi2_contingency
-- chi2 = 1184.60
-- p    = 5.86e-258`,
    cols: ["Contract", "Stayers", "Churners"],
    rows: [
      ["Month-to-month", "2,220", "1,655"],
      ["One year", "1,307", "166"],
      ["Two year", "1,647", "48"],
    ],
    noBars: true,
    stat: [
      ["chi-square", "1,184.60"],
      ["p-value", "5.86 × 10⁻²⁵⁸"],
      ["threshold", "0.05"],
      ["verdict", "Reject H₀ — dependent"],
    ],
    read: (
      <>
        A p-value of <b>5.86 × 10⁻²⁵⁸</b> is not merely significant — it means
        there is no realistic universe in which contract type and churn are
        independent. The relationship is structural.
      </>
    ),
  },
];

function QueryCard({ q }: { q: Query }) {
  const rateMax = q.noBars
    ? 1
    : Math.max(...q.rows.map((r) => Number(r[2])));
  const topRate = q.noBars
    ? -1
    : Math.max(...q.rows.map((r) => Number(r[2])));
  return (
    <div className="tq-card">
      <div className="tq-head">
        <div className="tq-n">{q.id}</div>
        <div className="tq-title">{q.title}</div>
        <div className="tq-q">{q.q}</div>
      </div>
      <div className="tq-body">
        <pre className="tq-sql">{q.sql}</pre>
        <div className="tq-res">
          <table className="tq-table">
            <thead>
              <tr>
                {q.cols.map((c, i) => (
                  <th key={i}>{c}</th>
                ))}
                {!q.noBars && <th className="tq-bt"></th>}
              </tr>
            </thead>
            <tbody>
              {q.rows.map((r, i) => {
                const isTop = !q.noBars && Number(r[2]) === topRate;
                return (
                  <tr key={i} className={isTop ? "top" : ""}>
                    <td>{r[0]}</td>
                    <td>{r[1]}</td>
                    <td>{q.noBars ? r[2] : `${r[2]}%`}</td>
                    {!q.noBars && (
                      <td className="tq-bt">
                        <div className="tq-track">
                          <span
                            className={`tq-bar${isTop ? " top" : ""}`}
                            style={{
                              width: `${(Number(r[2]) / rateMax) * 100}%`,
                            }}
                          />
                        </div>
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
          {q.stat && (
            <table className="tq-table" style={{ marginTop: 12 }}>
              <tbody>
                {q.stat.map(([k, v], i) => (
                  <tr key={i}>
                    <td>{k}</td>
                    <td style={{ color: "var(--accent-text)" }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      <div className="tq-read">{q.read}</div>
    </div>
  );
}

export default function TelcoSqlPage() {
  return (
    <div className="pf-page">
      <div className="pf-shell">
        <TelcoSubNav active="sql" />
        <section className="pj-hero-head" style={{ marginTop: 28 }}>
          <Badge tone="violet" style={{ marginBottom: 16 }}>
            Artifact T1 · SQL Query Explorer
          </Badge>
          <h1
            className="pf-page-title"
            style={{ fontSize: "clamp(30px,3.2vw,46px)" }}
          >
            Eight queries, the real SQL and the real numbers.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 680 }}>
            Every segmentation lived as a versioned SQL query against a SQLite
            database of 7,043 customers. Each card shows the exact query, the
            grouped result it produced, and what the numbers mean.
          </p>
        </section>
        <section className="pj-section" style={{ marginTop: 30 }}>
          <div className="tq-grid">
            {QUERIES.map((q) => (
              <QueryCard key={q.id} q={q} />
            ))}
          </div>
        </section>
        <Link href="/work/telco-churn/data" className="pj-next">
          <div>
            <span className="pj-next-lbl">Next artifact</span>
            <span className="pj-next-title">Data Dictionary &amp; Schema</span>
          </div>
          <ArrowRight size={20} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
