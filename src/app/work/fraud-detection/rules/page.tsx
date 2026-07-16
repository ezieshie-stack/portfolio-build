import Link from "next/link";
import { ArrowRight, Sigma, Target } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FraudSubNav } from "@/components/work/fraud/FraudSubNav";

export const metadata = {
  title: "Fraud · Rules Engine (F3) | David Ezieshi",
  description: "Four weighted rules summing to 110, three tiers, and the precision framework behind the queue cutoff.",
};

const RULES = [
  { pts: 40, name: "High velocity", cond: "txn_cnt_1h >= 5", reason: "velocity_1h", why: "Five or more transactions inside one hour. The strongest single signal, the fingerprint of an automated burst attack." },
  { pts: 30, name: "High spend", cond: "spend_1h >= 1000", reason: "high_spend_1h", why: "At least $1,000 moved within a single hour window." },
  { pts: 25, name: "Risky destination", cond: "dest_fraud_rate_30d >= 0.02", reason: "risky_dest_30d", why: "The recipient's fraud rate over the last 30 days (720 steps) is 2% or higher: a known cash-out endpoint." },
  { pts: 15, name: "Odd hours", cond: "(step % 24) BETWEEN 0 AND 5", reason: "odd_hours_night", why: "Transaction fired between midnight and 5am, when legitimate activity is lowest." },
];

type Tier = { range: string; tier: string; action: string; tone: string };
const TIERS: Tier[] = [
  { range: ">= 80", tier: "Queue", action: "Reaches the daily investigation queue. Requires velocity + spend to both fire, so it is the highest-confidence slice.", tone: "#ef4444" },
  { range: ">= 60", tier: "High", action: "Freeze account + investigator review.", tone: "#ef4444" },
  { range: "30 – 59", tier: "Medium", action: "Step-up authentication (OTP) + continue monitoring.", tone: "#f59e0b" },
  { range: "< 30", tier: "Low", action: "No action.", tone: "#10b981" },
];

export default function FraudRulesPage() {
  return (
    <div className="pf-page">
      <div className="pf-shell">
        <FraudSubNav active="rules" />
        <section className="pj-hero-head" style={{ marginTop: 28 }}>
          <Badge tone="violet" style={{ marginBottom: 16 }}>Artifact F3 · Rules Engine</Badge>
          <h1 className="pf-page-title" style={{ fontSize: "clamp(30px,3.2vw,46px)" }}>
            An auditable score, not a black box.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 700 }}>
            The engine is four weighted rules summing to 110. A compliance officer can read every
            point, and every alert carries the exact reasons it fired. Interpretability is the design
            goal, chosen deliberately over a higher-accuracy model nobody could defend.
          </p>
        </section>

        <section className="pj-section" style={{ marginTop: 30 }}>
          <Eyebrow style={{ marginBottom: 8 }}>The four weighted rules</Eyebrow>
          <p className="pj-section-sub">
            Each rule is a single SQL CASE. Points accumulate; the reason string is concatenated
            alongside so the score always explains itself.
          </p>
          <div className="mv-seg">
            {RULES.map((r) => (
              <div key={r.name} className="mv-seg-row" style={{ gridTemplateColumns: "170px 80px 1fr" }}>
                <div>
                  <div className="mv-seg-name">{r.name}</div>
                  <code style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--accent-text)" }}>{r.cond}</code>
                </div>
                <span className="mv-seg-roi pos" style={{ textAlign: "left", fontSize: 18 }}>+{r.pts}</span>
                <span className="mv-genre-why">
                  {r.why}{" "}
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-dim)" }}>→ {r.reason}</span>
                </span>
              </div>
            ))}
          </div>
          <div className="cov-note" style={{ marginTop: 16 }}>
            <Sigma size={18} aria-hidden />
            <p>
              <b>Maximum score is 110.</b> To clear the queue cutoff of 80, a transaction needs
              high velocity (40) and high spend (30) plus at least one more rule — so the queue that
              reaches a human always represents a rapid, high-value burst, never a single weak signal.
            </p>
          </div>
        </section>

        <section className="pj-section">
          <Eyebrow style={{ marginBottom: 8 }}>Score to action</Eyebrow>
          <p className="pj-section-sub">
            The score is only useful if it maps to a decision. Each tier has a defined operational
            response.
          </p>
          <div className="mv-seg">
            {TIERS.map((t) => (
              <div key={t.range} className="mv-seg-row" style={{ gridTemplateColumns: "120px 110px 1fr" }}>
                <code style={{ fontFamily: "var(--font-mono)", fontSize: 14, color: t.tone }}>{t.range}</code>
                <span className="mv-genre-roi" style={{ color: t.tone, border: `1px solid ${t.tone}`, textAlign: "center" }}>{t.tier}</span>
                <span className="mv-genre-why">{t.action}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="pj-section">
          <div className="cov-note">
            <Target size={18} aria-hidden />
            <p>
              <b>Why the cutoff is defensible.</b> A false-positive analysis buckets flagged
              transactions by score and measures precision per bucket. Precision rises with the
              score, so the highest-scoring alerts are the likeliest to be real fraud. That is the
              evidence behind drawing the queue at the top rather than alerting on everything.
            </p>
          </div>
        </section>

        <Link href="/work/fraud-detection/method" className="pj-next">
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
