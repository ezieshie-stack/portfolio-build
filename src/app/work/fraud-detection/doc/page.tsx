import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { FraudSubNav } from "@/components/work/fraud/FraudSubNav";

export const metadata = {
  title: "Fraud · Write-up (F5) | David Ezieshi",
  description: "The full case study behind the auditable SQL rules engine.",
};

const SECTIONS = [
  { id: "problem", title: "The problem" },
  { id: "why-sql", title: "Why SQL, not ML" },
  { id: "features", title: "Engineering the features" },
  { id: "rules", title: "The rules engine" },
  { id: "threshold", title: "Choosing the threshold" },
  { id: "limits", title: "Honest limits" },
];

export default function FraudDocPage() {
  return (
    <div className="pf-page">
      <div className="pf-shell">
        <FraudSubNav active="doc" />
        <section className="pj-hero-head" style={{ marginTop: 28 }}>
          <Badge tone="violet" style={{ marginBottom: 16 }}>Artifact F5 · Write-up</Badge>
          <h1 className="pf-page-title" style={{ fontSize: "clamp(30px,3.2vw,46px)" }}>
            Catching Fraud Without Drowning the Analysts.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 680 }}>
            The full case study behind the scoring sandbox, for readers who want the story rather
            than the controls.
          </p>
          <div className="pj-doc-meta">
            <span><b>Author</b> David Ezieshi</span>
            <span><b>Length</b> ~950 words · 6 min read</span>
            <span>
              <BrandIcon name="github" size={13} />{" "}
              <a href="https://github.com/ezieshie-stack/Fraud-Detection-SQL-Window-Functions" target="_blank" rel="noopener noreferrer">
                Fraud-Detection-SQL-Window-Functions
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
                  <li key={s.id}><a href={`#${s.id}`}>{s.title}</a></li>
                ))}
              </ul>
            </aside>

            <article className="pj-doc-body">
              <h2 id="problem">The problem</h2>
              <p>
                Fraud systems don&rsquo;t usually fail by missing fraud. They fail by over-alerting.
                Every false positive burns an analyst&rsquo;s hour and freezes a real customer&rsquo;s
                payment. The regulated version of the problem is worse: a frozen account has to be
                defended to compliance, and &ldquo;the model said so&rdquo; is not a defense.
              </p>
              <p>
                So the brief was: catch fraud, don&rsquo;t flood the queue, and be able to explain
                every alert to a regulator.
              </p>

              <h2 id="why-sql">Why SQL, not ML</h2>
              <p>
                A black-box classifier can push AUC higher, but nobody can read its coefficients out
                loud. A weighted rules engine sums to a bounded number, and each point is a single
                CASE statement any officer can review. The trade is measurable — a few percentage
                points of precision — for something worth more in a regulated pipeline: total
                transparency.
              </p>

              <h2 id="features">Engineering the features</h2>
              <p>
                Fraud is a pattern within a timeframe, not a lifetime total. A GROUP BY averages
                that pattern away. Window functions preserve it. Two features do the heavy lifting:
                a rolling 1-hour count and spend per account (velocity + burst), and a 30-day
                rolling fraud rate per recipient (destination risk).
              </p>

              <h2 id="rules">The rules engine</h2>
              <p>
                Four weighted rules: high velocity (+40), high spend (+30), risky destination
                (+25), odd hours (+15). Sum to a score out of 110. To clear the queue cutoff of 80,
                a transaction needs velocity <em>and</em> spend to both fire, plus one more rule.
                That means the queue always represents a rapid, high-value burst — never a single
                weak signal.
              </p>

              <h2 id="threshold">Choosing the threshold</h2>
              <p>
                A false-positive analysis buckets flagged transactions by score and measures
                precision per bucket. Precision rises with the score. That&rsquo;s the evidence
                behind drawing the queue at ≥ 80: those alerts are the likeliest to be real fraud.
                Lower thresholds (60, 40) are simulated for teams with more capacity.
              </p>

              <h2 id="limits">Honest limits</h2>
              <p>
                PaySim is synthetic, so absolute fraud rates are illustrative. Merchants are
                inferred from nameDest since PaySim does not flag them explicitly. 30-day history
                is approximated as 720 steps. The engine covers TRANSFER and CASH_OUT only — the
                two transaction types where PaySim fraud lives. On a real production dataset the
                weights would be tuned from actual false-positive rates rather than the synthetic
                benchmark.
              </p>

              <div className="pj-doc-repro">
                <FileText size={16} aria-hidden />
                <div>
                  <b>Reproduce</b>
                  <pre>{`git clone https://github.com/ezieshie-stack/Fraud-Detection-SQL-Window-Functions.git
cd Fraud-Detection-SQL-Window-Functions
psql -f sql/00_schema.sql
psql -f sql/01_load.sql
# then work through sql/02_stg → sql/07_watchlist`}</pre>
                </div>
              </div>
            </article>
          </div>
        </section>

        <Link href="/work/fraud-detection" className="pj-next">
          <div>
            <span className="pj-next-lbl">Return to</span>
            <span className="pj-next-title">Fraud Detection hub</span>
          </div>
          <ArrowRight size={20} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
