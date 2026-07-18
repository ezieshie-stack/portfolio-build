import Link from "next/link";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Database,
  Eye,
  FileText,
  GitBranch,
  GitFork,
  HelpCircle,
  Info,
  Layers,
  ShieldAlert,
  Table2,
  TrendingUp,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ProjectFooter } from "@/components/work/ProjectFooter";
import { Chip } from "@/components/ui/Chip";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MetricStat } from "@/components/ui/MetricStat";
import { ScoringSandbox } from "@/components/work/fraud/ScoringSandbox";

export const metadata = {
  title: "Fraud Detection SQL Pipeline | David Ezieshi",
  description:
    "A 7-layer PostgreSQL pipeline scoring PaySim transactions with 4 weighted, auditable rules.",
};

type Artifact = { href: string; idx: string; icon: LucideIcon; title: string; desc: string; meta: string };

const ARTIFACTS: Artifact[] = [
  { href: "/work/fraud-detection/sql", idx: "F1", icon: Database, title: "SQL Explorer", desc: "The 7 analysis queries: velocity, balance, structuring, precision.", meta: "7 queries" },
  { href: "/work/fraud-detection/data", idx: "F2", icon: Table2, title: "Data Dictionary", desc: "The 11 PaySim columns and how each one is used.", meta: "11 columns" },
  { href: "/work/fraud-detection/rules", idx: "F3", icon: ShieldAlert, title: "Rules Engine", desc: "The 4 weighted rules, tiers, actions, and precision framework.", meta: "4 rules · 110 max" },
  { href: "/work/fraud-detection/method", idx: "F4", icon: GitFork, title: "Methodology", desc: "The layered SQL pipeline as an interactive diagram.", meta: "7 layers" },
  { href: "/work/fraud-detection/doc", idx: "F5", icon: FileText, title: "Write-up", desc: "The full case study in reading mode.", meta: "6 min read" },
];

const THRESHOLDS = [
  { t: "≥ 80", tier: "Queue", need: "Velocity + spend must both fire (plus one more). Highest confidence, smallest queue." },
  { t: "≥ 60", tier: "High", need: "Any combination reaching 60. Freeze-worthy. Wider net, more analyst load." },
  { t: "≥ 40", tier: "Watch", need: "A single strong signal (velocity alone). Broadest coverage, highest noise." },
];

const FINDINGS = [
  { finding: "Fraud is a pattern within a timeframe, not a lifetime total. An account's overall volume looks normal even when it made a dozen transfers in one hour. A GROUP BY cannot see that; a window function can.", recBold: "Build velocity features with window functions.", rec: "Rolling 1-hour counts and spend per account, plus a 30-day destination fraud rate, preserve transaction-level detail while scoring behavior over time." },
  { finding: "A regulated team cannot act on a score it cannot explain. A frozen account has to be defended to compliance, and 'the model said so' is not a defense.", recBold: "Score with weighted, auditable rules.", rec: "Four readable conditions summing to 110, each attaching its own reason string, so every alert explains itself and the logic can be tuned by a human." },
  { finding: "Precision rises with the score: the highest-scoring alerts are far likelier to be true fraud. Flooding analysts with low-score alerts destroys the queue's value.", recBold: "Set the queue at score ≥ 80 and tune to capacity.", rec: "That cutoff needs velocity and spend to both fire, delivering the highest-confidence slice. Simulate ≥60 and ≥40 only if the team has the headroom." },
];

const CHIPS = ["PostgreSQL", "Window Functions", "Rule-based Scoring", "PaySim", "DuckDB-portable"];

export default function FraudHubPage() {
  return (
    <div className="pf-page">
      <div className="pf-shell">
        <Link href="/work" className="pj-back">
          <ArrowLeft size={14} aria-hidden /> Back to All Projects
        </Link>

        <section className="pj-hero-head">
          <Badge tone="violet" style={{ marginBottom: 18 }}>
            Fraud &amp; Risk Analytics · Interactive
          </Badge>
          <h1 className="pf-page-title" style={{ fontSize: "clamp(34px,3.6vw,52px)" }}>
            Score a transaction for fraud.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 700 }}>
            This is the rules engine I wrote in SQL, running live in your
            browser. Toggle which rules a transaction trips and watch the risk
            score, tier, and the action a fraud analyst would take. No black
            box, every point is explainable.
          </p>
        </section>

        {/* interactive scoring sandbox, the marquee widget */}
        <section className="pj-section" style={{ marginTop: 24 }}>
          <ScoringSandbox />
          <p className="cs-caption">
            <Info size={13} aria-hidden />
            Weights, thresholds, and tiers verbatim from{" "}
            <code>sql/04_rules_engine.sql</code>. Built on the PaySim dataset
            in PostgreSQL.
          </p>
        </section>

        <section className="pj-section" style={{ marginTop: 36 }}>
          <Eyebrow prefix="" style={{ marginBottom: 8 }}>The analyst&rsquo;s brief</Eyebrow>
          <p className="pj-section-sub">
            Fraud systems rarely fail by missing fraud, they fail by over-alerting. Precision, not just
            recall, is the business constraint.
          </p>
          <div className="sla-brief">
            <div className="sla-brief-card">
              <span className="sla-brief-k"><AlertCircle size={15} aria-hidden /> Why it matters</span>
              <p>Every false positive burns an analyst&rsquo;s hour and freezes a real customer&rsquo;s payment. Precision is what turns a scoring system from an alert firehose into a decision tool.</p>
            </div>
            <div className="sla-brief-card">
              <span className="sla-brief-k"><HelpCircle size={15} aria-hidden /> The question</span>
              <p>Which transaction patterns reliably indicate fraud, how do we score risk without a black-box model, and where should the alert threshold sit to balance fraud loss against the team&rsquo;s real capacity?</p>
            </div>
            <div className="sla-brief-card">
              <span className="sla-brief-k"><TrendingUp size={15} aria-hidden /> Business benefit</span>
              <p>An interpretable, fully auditable engine produces a prioritized daily queue and a merchant blocklist the business can act on same-day, and it survives a compliance review because every alert states its reasons.</p>
            </div>
          </div>
          <div className="sla-approach">
            <div className="sla-approach-row"><span className="sla-approach-k">Data source</span><span className="sla-approach-v">PaySim synthetic financial transactions (Kaggle), loaded into PostgreSQL. 11 columns including balances before and after for both parties, plus an isFraud label. Time is an integer step, treated as 1 hour.</span></div>
            <div className="sla-approach-row"><span className="sla-approach-k">Analysis type</span><span className="sla-approach-v">Diagnostic and rule-based. Window functions build velocity and destination-history features; a weighted SQL scoring engine turns them into an interpretable risk score, no ML.</span></div>
            <div className="sla-approach-row"><span className="sla-approach-k">Scope &amp; caveats</span><span className="sla-approach-v">PaySim is synthetic, so absolute fraud rates are illustrative. Merchants are inferred from nameDest since PaySim does not flag them explicitly. 30-day history approximated as 720 steps.</span></div>
            <div className="sla-approach-row"><span className="sla-approach-k">Tooling</span><span className="sla-approach-v">PostgreSQL only: window functions (COUNT/SUM OVER with RANGE frames), views for each pipeline layer, and QA assertions. Portable to DuckDB.</span></div>
          </div>
        </section>

        <section className="pj-section">
          <Eyebrow prefix="" style={{ marginBottom: 8 }}>Where to draw the line</Eyebrow>
          <p className="pj-section-sub">
            The threshold is a capacity decision, not a statistical one.
          </p>
          <div className="mv-tiers" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            {THRESHOLDS.map((t) => (
              <div key={t.t} className="mv-tier">
                <span className="mv-tier-k">Score {t.t}</span>
                <div className="mv-tier-rate" style={{ fontSize: 22, marginTop: 10 }}>{t.tier}</div>
                <div className="mv-tier-meta" style={{ marginTop: 8 }}>{t.need}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="pj-section">
          <Eyebrow prefix="" style={{ marginBottom: 8 }}>Findings, and what to do about them</Eyebrow>
          <div className="sla-frec">
            {FINDINGS.map((f, i) => (
              <div className="sla-frec-row" key={i}>
                <div className="sla-frec-f"><span className="sla-frec-tag find">Finding</span><p>{f.finding}</p></div>
                <div className="sla-frec-arrow"><ArrowRight size={22} aria-hidden /></div>
                <div className="sla-frec-r"><span className="sla-frec-tag rec">Recommendation</span><p><b>{f.recBold}</b> {f.rec}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className="pj-section">
          <Eyebrow prefix="" style={{ marginBottom: 8 }}>Go deeper</Eyebrow>
          <div className="fx-index">
            {ARTIFACTS.map((a) => {
              const Ico = a.icon;
              return (
                <Link key={a.idx} href={a.href} className="fx-idxcard">
                  <div className="fx-idxcard-top">
                    <span className="fx-idxcard-ic"><Ico size={22} aria-hidden /></span>
                    <span className="fx-idxcard-idx">{a.idx}</span>
                  </div>
                  <h3>{a.title}</h3>
                  <p>{a.desc}</p>
                  <div className="fx-idxcard-foot">
                    <span className="fx-idxcard-meta">{a.meta}</span>
                    <span className="fx-idxcard-go">Open <ArrowRight size={15} aria-hidden /></span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="pj-section">
          <div className="pj-metrics">
            <MetricStat value="7" label="Pipeline layers (SQL)" icon={<Layers size={22} aria-hidden />} />
            <MetricStat value="4" label="Weighted scoring rules" icon={<ShieldAlert size={22} aria-hidden />} />
            <MetricStat value="3" label="Risk tiers + actions" icon={<GitBranch size={22} aria-hidden />} />
            <MetricStat value="0" label="Black-box models" icon={<Eye size={22} aria-hidden />} />
          </div>
        </section>

        <details className="pj-hood">
          <summary><Wrench size={16} aria-hidden /> Under the hood <span className="pj-hood-hint">method &amp; stack</span></summary>
          <div className="pj-hood-body">
            <p>A layered PostgreSQL pipeline: raw table → staging view → feature mart (window functions for 1-hour velocity and 30-day destination history) → rules-engine view (weighted score + reasons) → daily alerts, merchant risk, and a customer watchlist. Seven ad-hoc analysis scripts prototype and tune the logic; QA assertions guard data integrity.</p>
            <div className="pj-chips">{CHIPS.map((t) => <Chip key={t}>{t}</Chip>)}</div>
          </div>
        </details>

        <ProjectFooter current="fraud" />

        <Link href="/work/fraud-detection/sql" className="pj-next">
          <div>
            <span className="pj-next-lbl">Start with</span>
            <span className="pj-next-title">SQL Query Explorer</span>
          </div>
          <ArrowRight size={20} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
