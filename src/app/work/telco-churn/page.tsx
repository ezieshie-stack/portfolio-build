import Link from "next/link";
import {
  AlertCircle,
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Crosshair,
  Database,
  FileText,
  GitFork,
  HelpCircle,
  Info,
  Table2,
  Target,
  TrendingUp,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Chip } from "@/components/ui/Chip";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MetricStat } from "@/components/ui/MetricStat";
import { ChurnScorer } from "@/components/work/telco/ChurnScorer";
import { ProjectFooter } from "@/components/work/ProjectFooter";

export const metadata = {
  title: "Telco Customer Churn Analysis | David Ezieshi",
  description:
    "7,043-customer churn analysis with 8 SQL queries and a logistic-regression model at 0.86 ROC-AUC.",
};

type Artifact = {
  href: string;
  idx: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  meta: string;
};

const TELCO_ARTIFACTS: Artifact[] = [
  { href: "/work/telco-churn/sql", idx: "T1", icon: Database, title: "SQL Explorer", desc: "The 8 analytical queries, real SQL and results.", meta: "8 queries" },
  { href: "/work/telco-churn/data", idx: "T2", icon: Table2, title: "Data Dictionary", desc: "21 columns, what each means, what feeds the model.", meta: "21 columns" },
  { href: "/work/telco-churn/model", idx: "T3", icon: Target, title: "Model Card", desc: "Metrics, coefficients, and a live threshold slider.", meta: "0.86 ROC-AUC" },
  { href: "/work/telco-churn/method", idx: "T4", icon: GitFork, title: "Methodology", desc: "The full pipeline from CSV to recommendations.", meta: "CSV → model" },
  { href: "/work/telco-churn/doc", idx: "T5", icon: FileText, title: "Write-up", desc: "The long-form case study in prose.", meta: "7 min read" },
];

type Cohort = { k: string; rate: number; n: number };
const COHORTS: Cohort[] = [
  { k: "Fiber · no support · M2M", rate: 49, n: 1140 },
  { k: "Month-to-month (all)", rate: 43, n: 3875 },
  { k: "Fiber optic (all)", rate: 42, n: 3096 },
  { k: "No tech support", rate: 41, n: 3473 },
  { k: "Paperless billing", rate: 34, n: 4171 },
  { k: "DSL", rate: 19, n: 2421 },
  { k: "One year contract", rate: 11, n: 1473 },
  { k: "Two year contract", rate: 3, n: 1695 },
];

const FINDINGS = [
  {
    finding: "Month-to-month contracts churn at 42.7%, roughly 15× the two-year rate (2.8%). Stack in electronic-check payment and it hits 53.7%, a coin flip, covering 1,850 customers (26% of the base).",
    recBold: "“Lock & Shield” contract migration.",
    rec: "Target month-to-month customers in their first 6 months with a ~15% discounted 1-year contract plus an onboarding concierge call. A 20% conversion protects an estimated $340K a year.",
  },
  {
    finding: "Fiber-optic customers without Tech Support churn at ~49.4%, the highest of any segment. Adding support more than halves it, to 22.6%. The premium product without premium support is the problem.",
    recBold: "“Support Bundle” for Fiber.",
    rec: "Auto-bundle Tech Support into Fiber plans at a marginal $5/mo discount. Closing that service gap by even 15 points saves an estimated $180K a year.",
  },
  {
    finding: "The first 6 months are catastrophic: 52.9% attrition, falling to 14% past 25 months. The cliff is a month-to-month story, long-contract customers who clear year one flatten at 3 to 12%.",
    recBold: "“First 90 Days” onboarding program.",
    rec: "Automated check-ins at Day 7, 30, and 60 plus proactive success calls for high-value accounts. Structured onboarding typically cuts early churn 10 to 25%.",
  },
];

const CHIPS = ["SQLite", "Python", "scikit-learn", "SciPy", "Logistic Regression"];
const MAX_RATE = 50;

export default function TelcoHubPage() {
  return (
    <div className="pf-page">
      <div className="pf-shell">
        <Link href="/work" className="pj-back">
          <ArrowLeft size={14} aria-hidden /> Back to All Projects
        </Link>

        <section className="pj-hero-head">
          <Badge tone="violet" style={{ marginBottom: 18 }}>
            Churn Analytics · Interactive
          </Badge>
          <h1
            className="pf-page-title"
            style={{ fontSize: "clamp(34px,3.6vw,52px)" }}
          >
            Score a customer for churn.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 680 }}>
            This is the model I built on 7,043 telecom customers, running live
            in your browser. Change the inputs and watch the prediction move.
            No slides, the thing itself.
          </p>
        </section>

        {/* interactive scorer, client-side reconstruction of T3 */}
        <section className="pj-section" style={{ marginTop: 28 }}>
          <ChurnScorer />
          <p className="cs-caption">
            <Info size={14} aria-hidden />
            Interactive reconstruction of the logistic-regression model (0.86
            ROC-AUC). Coefficients calibrated to the documented churn drivers.
          </p>
        </section>

        {/* analyst's brief */}
        <section className="pj-section" style={{ marginTop: 40 }}>
          <Eyebrow prefix="" style={{ marginBottom: 8 }}>
            The analyst&rsquo;s brief
          </Eyebrow>
          <p className="pj-section-sub">
            A churn score is only useful if the intervention it triggers costs
            less than the revenue it saves.
          </p>
          <div className="sla-brief">
            <div className="sla-brief-card">
              <span className="sla-brief-k">
                <AlertCircle size={15} aria-hidden /> Why it matters
              </span>
              <p>
                Acquiring a new subscriber costs 5 to 7× more than keeping one.
                Across 7,043 accounts, every churn is lost monthly revenue plus
                wasted acquisition spend, but the business cannot see who is
                about to leave or why until they are already gone.
              </p>
            </div>
            <div className="sla-brief-card">
              <span className="sla-brief-k">
                <HelpCircle size={15} aria-hidden /> The question
              </span>
              <p>
                Which customers will churn next, which segments are driving the
                loss, and which single intervention per segment costs less than
                the revenue it protects?
              </p>
            </div>
            <div className="sla-brief-card">
              <span className="sla-brief-k">
                <TrendingUp size={15} aria-hidden /> Business benefit
              </span>
              <p>
                A per-customer churn score plus a segment diagnosis turns
                blanket retention spend into three targeted programs. Together
                they defend an estimated $520K in annual revenue at a fraction
                of that in cost.
              </p>
            </div>
          </div>
          <div className="sla-approach">
            <div className="sla-approach-row">
              <span className="sla-approach-k">Data source</span>
              <span className="sla-approach-v">
                7,043-row Telco dataset loaded into a SQLite database
                (churn.db) so every finding is a versioned, re-runnable query.
                21 columns, no missing rows.
              </span>
            </div>
            <div className="sla-approach-row">
              <span className="sla-approach-k">Analysis type</span>
              <span className="sla-approach-v">
                Descriptive first (8 SQL segmentations), then diagnostic (a
                Chi-Square test proves the pattern is real), then predictive (a
                logistic-regression model scores each customer).
              </span>
            </div>
            <div className="sla-approach-row">
              <span className="sla-approach-k">Scope &amp; caveats</span>
              <span className="sla-approach-v">
                A single point-in-time snapshot, no time series. `customerid`
                and `totalcharges` are excluded (identifier and target
                leakage). Model trained on an 80/20 split, seed 42.
              </span>
            </div>
            <div className="sla-approach-row">
              <span className="sla-approach-k">Tooling</span>
              <span className="sla-approach-v">
                SQLite and SQL for exploration, SciPy for the significance
                test, scikit-learn for the classifier.
              </span>
            </div>
          </div>
        </section>

        {/* cohort explorer (static bars) */}
        <section className="pj-section">
          <Eyebrow prefix="" style={{ marginBottom: 8 }}>
            Churn rate by segment
          </Eyebrow>
          <p className="pj-section-sub">
            Eight segments ranked by churn rate. The top segment churns at
            nearly one in two.
          </p>
          <div className="pj-cohorts">
            {COHORTS.map((c) => (
              <div className="pj-cohort" key={c.k}>
                <span className="pj-cohort-k">{c.k}</span>
                <div className="pj-cohort-track">
                  <span
                    className="pj-cohort-bar"
                    style={{ width: `${(c.rate / MAX_RATE) * 100}%` }}
                  />
                </div>
                <span className="pj-cohort-rate">{c.rate}%</span>
                <span className="pj-cohort-n">
                  {c.n.toLocaleString()} customers
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* findings → recommendations */}
        <section className="pj-section">
          <Eyebrow prefix="" style={{ marginBottom: 8 }}>
            Findings, and what to do about them
          </Eyebrow>
          <p className="pj-section-sub">
            Every finding is a fact from the data. Every recommendation is a
            costed action tied directly to it.
          </p>
          <div className="sla-frec">
            {FINDINGS.map((f, i) => (
              <div className="sla-frec-row" key={i}>
                <div className="sla-frec-f">
                  <span className="sla-frec-tag find">Finding</span>
                  <p>{f.finding}</p>
                </div>
                <div className="sla-frec-arrow">
                  <ArrowRight size={22} aria-hidden />
                </div>
                <div className="sla-frec-r">
                  <span className="sla-frec-tag rec">Recommendation</span>
                  <p>
                    <b>{f.recBold}</b> {f.rec}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* artifact index */}
        <section className="pj-section">
          <Eyebrow prefix="" style={{ marginBottom: 8 }}>
            Go deeper
          </Eyebrow>
          <p className="pj-section-sub">
            Five artifacts open the analysis up, from the raw SQL to the model
            card and the full write-up.
          </p>
          <div className="fx-index">
            {TELCO_ARTIFACTS.map((a) => {
              const Ico = a.icon;
              return (
                <Link key={a.idx} href={a.href} className="fx-idxcard">
                  <div className="fx-idxcard-top">
                    <span className="fx-idxcard-ic">
                      <Ico size={22} aria-hidden />
                    </span>
                    <span className="fx-idxcard-idx">{a.idx}</span>
                  </div>
                  <h3>{a.title}</h3>
                  <p>{a.desc}</p>
                  <div className="fx-idxcard-foot">
                    <span className="fx-idxcard-meta">{a.meta}</span>
                    <span className="fx-idxcard-go">
                      Open <ArrowRight size={15} aria-hidden />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* outcomes */}
        <section className="pj-section">
          <div className="pj-metrics">
            <MetricStat
              value="7,043"
              label="Customers analyzed"
              icon={<Users size={22} aria-hidden />}
            />
            <MetricStat
              value="0.86"
              label="Model ROC-AUC"
              icon={<Target size={22} aria-hidden />}
            />
            <MetricStat
              value="69%"
              label="Precision on flagged"
              icon={<Crosshair size={22} aria-hidden />}
            />
            <MetricStat
              value="49%"
              label="Top-segment churn"
              icon={<AlertTriangle size={22} aria-hidden />}
            />
          </div>
        </section>

        {/* under the hood */}
        <details className="pj-hood">
          <summary>
            <Wrench size={16} aria-hidden /> Under the hood{" "}
            <span className="pj-hood-hint">method &amp; stack</span>
          </summary>
          <div className="pj-hood-body">
            <p>
              Data segmented in SQLite with 8 analytical queries; hypothesis
              tested with SciPy chi-square; model trained with scikit-learn
              logistic regression, evaluated on a held-out split (ROC-AUC
              0.86). Every model number on T3 is from the real run.
            </p>
            <div className="pj-chips">
              {CHIPS.map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>
          </div>
        </details>

        <ProjectFooter current="telco" />

        <Link href="/work/telco-churn/sql" className="pj-next">
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
