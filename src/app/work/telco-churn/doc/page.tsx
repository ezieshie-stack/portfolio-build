import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TelcoSubNav } from "@/components/work/telco/TelcoSubNav";

export const metadata = {
  title: "Telco · Write-up (T5) | David Ezieshi",
  description:
    "The long-form case study behind the interactive Telco churn dashboard — problem, method, findings, recommendations.",
};

const SECTIONS = [
  { id: "problem", title: "The problem" },
  { id: "setup", title: "Setting up the database" },
  { id: "sql", title: "What SQL surfaced" },
  { id: "proof", title: "Proving the pattern" },
  { id: "model", title: "Scoring individuals, not just segments" },
  { id: "drivers", title: "The top drivers" },
  { id: "recs", title: "From analysis to intervention" },
  { id: "limits", title: "What this analysis is not" },
];

export default function TelcoDocPage() {
  return (
    <div className="pf-page">
      <div className="pf-shell">
        <TelcoSubNav active="doc" />
        <section className="pj-hero-head" style={{ marginTop: 28 }}>
          <Badge tone="violet" style={{ marginBottom: 16 }}>
            Artifact T5 · Write-up
          </Badge>
          <h1
            className="pf-page-title"
            style={{ fontSize: "clamp(30px,3.2vw,46px)" }}
          >
            Identifying the $1.7M Revenue Leak.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 680 }}>
            The long-form case study behind the interactive dashboard — for
            readers who want the story rather than the toggles.
          </p>
          <div className="pj-doc-meta">
            <span>
              <b>Author</b> David Ezieshi
            </span>
            <span>
              <b>Length</b> ~1,500 words · 7 min read
            </span>
            <span>
              <BrandIcon name="github" size={13} />{" "}
              <a
                href="https://github.com/ezieshie-stack/telco-churn-analysis"
                target="_blank"
                rel="noopener noreferrer"
              >
                telco-churn-analysis
              </a>
            </span>
          </div>
        </section>

        <section className="pj-section" style={{ marginTop: 30 }}>
          <div className="pj-doc-grid">
            <aside className="pj-doc-toc">
              <Eyebrow style={{ marginBottom: 8 }}>Contents</Eyebrow>
              <ul>
                {SECTIONS.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`}>{s.title}</a>
                  </li>
                ))}
              </ul>
            </aside>

            <article className="pj-doc-body">
              <h2 id="problem">The problem</h2>
              <p>
                A telecommunications provider has 7,043 active subscribers and
                no shortage of instinct about why some of them leave. The
                instinct isn&rsquo;t wrong — but it isn&rsquo;t specific
                either. Every retention email costs the company money, and the
                industry rule of thumb is that acquiring a new customer costs
                five to seven times what it costs to retain an existing one.
                Blanket outreach is expensive; ignoring churn is expensive; the
                interesting question is <em>whom</em> to reach and <em>why</em>.
              </p>
              <p>
                That was the brief. Find the segments most at risk, prove the
                pattern is real, build a scoring model, and translate the
                output into interventions that cost less than the revenue they
                save.
              </p>

              <h2 id="setup">Setting up the database</h2>
              <p>
                The raw dataset arrives as a flat CSV — 7,043 rows, 21 columns.
                That&rsquo;s fine for a one-off notebook, but the moment a
                second analyst wants to reproduce a number, the CSV becomes the
                problem. Every filter has to be re-written; every join is
                bespoke; every finding is a screenshot.
              </p>
              <p>
                So the first step of the pipeline (
                <code>src/01_load_telco_to_sqlite.py</code>) loaded the CSV
                into a SQLite database called <code>churn.db</code>. From that
                point on, every segmentation lived as a versioned SQL query in
                the <code>src/</code> folder.
              </p>

              <h2 id="sql">What SQL surfaced</h2>
              <p>
                Seven queries, each isolating one hypothesised driver of churn.
              </p>
              <p>
                <b>Contract type turned out to be the dominant story.</b>{" "}
                Month-to-month subscribers churn at 42.7%. Two-year subscribers
                churn at 2.8%. That&rsquo;s not a nudge — that&rsquo;s a
                fifteen-times gap.
              </p>
              <p>
                <b>The interaction of contract and payment method</b> was where
                the risk concentrated. Month-to-month customers paying by
                Electronic check — 1,850 people, 26% of the base — churned at{" "}
                <b>53.7%</b>.
              </p>
              <p>
                <b>Service quality was the most surprising finding.</b>{" "}
                Fiber-optic customers <em>without</em> Tech Support churned at
                49.4% — the highest churn rate of any large segment. Adding
                Tech Support cut that same segment&rsquo;s churn to 22.6%,
                more than halving it.
              </p>

              <h2 id="proof">Proving the pattern</h2>
              <p>
                None of this was worth acting on if the numbers were noise. I
                ran a Chi-Square test of independence against the Contract ×
                Churn contingency table.
              </p>
              <p>
                The statistic came back at <b>1,184.60</b>, with a p-value of{" "}
                <b>5.86 × 10⁻²⁵⁸</b>. For scale — the conventional statistical-
                significance threshold is 0.05. This p-value is 258 orders of
                magnitude below it.
              </p>

              <h2 id="model">Scoring individuals, not just segments</h2>
              <p>
                Segment-level findings are strategic. But retention teams
                operate at the individual level — they call one customer at a
                time. So the next step was to train a model that could score
                any subscriber&rsquo;s churn probability.
              </p>
              <p>
                I chose logistic regression. Two reasons: it&rsquo;s
                interpretable, and it&rsquo;s fast. Both mattered more than a
                marginal accuracy bump from a gradient-boosting model would
                have.
              </p>
              <p>
                The model landed at <b>0.8607 ROC-AUC</b>. In plain language:
                pick any two customers — one a churner, one a stayer — and the
                model will rank the churner higher 86% of the time.
              </p>

              <h2 id="drivers">The top drivers, on the model&rsquo;s own terms</h2>
              <p>
                The top ten coefficients told the same story SQL had told, in a
                different language. <b>Contract Two Year (−1.374)</b> was the
                strongest protector. <b>Fiber optic internet (+0.764)</b> was
                the strongest risk signal. <b>Tech Support Yes (−0.352)</b> was
                the specific antidote to the Q6 fiber-without-support cohort.{" "}
                <b>Electronic Check (+0.330)</b> and{" "}
                <b>Paperless Billing (+0.332)</b> were the two behavioural risk
                proxies.
              </p>

              <h2 id="recs">From analysis to intervention</h2>
              <p>
                Three recommendations came out of the work, each targeting a
                specific findings cluster.
              </p>
              <p>
                <b>Lock &amp; Shield</b> targets month-to-month customers in
                their first six months with a discounted one-year contract and
                an onboarding concierge call. Reducing that cohort&rsquo;s
                55.2% churn by even 20 points protects roughly $340,000 in
                annual revenue.
              </p>
              <p>
                <b>Support Bundle</b> auto-bundles Tech Support into every
                fiber-optic plan. Reducing that segment&rsquo;s churn by 15
                points protects approximately $180,000 per year.
              </p>
              <p>
                <b>First 90 Days</b> is a structured onboarding retention
                program — automated check-ins at day 7, 30, and 60. Industry
                benchmarks put churn reduction from structured onboarding at
                10–25%.
              </p>

              <h2 id="limits">What this analysis is not</h2>
              <p>
                It&rsquo;s a snapshot model on a public dataset. It
                doesn&rsquo;t track how a customer&rsquo;s churn probability
                changes over time. It hasn&rsquo;t been calibrated. It
                doesn&rsquo;t correct for the class imbalance, which pulls
                recall down. And it wasn&rsquo;t trained on the target
                company&rsquo;s real data; retraining on internal data would
                be a required first step before any of the recommendations
                shipped.
              </p>
              <p>
                Those aren&rsquo;t bugs. They&rsquo;re the honest ceiling of a
                study built on public data — and they&rsquo;re the reasons a
                real retention model deserves a second phase before it goes
                into production.
              </p>

              <div className="pj-doc-repro">
                <FileText size={16} aria-hidden />
                <div>
                  <b>Reproduce</b>
                  <pre>{`git clone https://github.com/ezieshie-stack/telco-churn-analysis.git
cd telco-churn-analysis
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
python src/01_load_telco_to_sqlite.py
python src/10_ml_logistic_regression.py`}</pre>
                </div>
              </div>
            </article>
          </div>
        </section>

        <Link href="/work/telco-churn" className="pj-next">
          <div>
            <span className="pj-next-lbl">Return to</span>
            <span className="pj-next-title">Telco Churn hub</span>
          </div>
          <ArrowRight size={20} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
