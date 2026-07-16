import Link from "next/link";
import { ArrowRight, Clock, Crosshair, Database } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SlaSubNav } from "@/components/work/sla/SlaSubNav";

export const metadata = { title: "SLA · Model Card (S3) | David Ezieshi" };

// Real numbers from phase_d_model_performance.txt (deployed operating point)
const TP = 136;
const FN = 0;
const FP = 701;
const TN = 857;
const TOTAL = TP + FP + FN + TN; // 1694
const PRECISION = TP / (TP + FP);
const RECALL = TP / (TP + FN);
const F1 = (2 * PRECISION * RECALL) / (PRECISION + RECALL);
const ACC = (TP + TN) / TOTAL;
const AUC = 0.83;
const CIRCUM = 2 * Math.PI * 70;

const MODELS = [
  { name: "Logistic Regression", tag: "baseline", auc: null as number | null, note: "Linear benchmark trained for comparison." },
  { name: "Random Forest", tag: "chosen", auc: 0.83, note: "Balanced class weights. Chosen for the cost-sensitive operating point, not raw accuracy." },
];

const FEATURES = [
  { name: "Ticket Priority", note: "Critical vs. the rest is the dominant split. Sets the SLA target and carries the cost." },
  { name: "Ticket Type", note: "Refund and cancellation load run slightly hotter on handling time." },
  { name: "Ticket Channel", note: "Modest signal; the diagnostics showed channel effect is small." },
  { name: "Customer Age", note: "The one numeric input; interacts with priority in the tree splits." },
];

export default function SlaModelPage() {
  return (
    <div className="pf-page">
      <div className="pf-shell">
        <SlaSubNav active="model" />
        <section className="pj-hero-head" style={{ marginTop: 28 }}>
          <Badge tone="violet" style={{ marginBottom: 16 }}>Artifact S3 · Model Card</Badge>
          <h1 className="pf-page-title" style={{ fontSize: "clamp(30px,3.2vw,46px)" }}>
            A model tuned for dollars, not accuracy.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 700 }}>
            A Random Forest with balanced class weights, trained to predict SLA breaches on a
            held-out set of 1,694 tickets. Every headline number is from the real run.
          </p>
        </section>

        <section className="pj-section" style={{ marginTop: 30 }}>
          <div className="tm-perf">
            <div className="pj-gauge">
              <svg viewBox="0 0 160 160" width="160" height="160">
                <circle cx="80" cy="80" r="70" fill="none" stroke="var(--surface)" strokeWidth="11" />
                <circle cx="80" cy="80" r="70" fill="none" stroke="var(--accent)" strokeWidth="11" strokeLinecap="round" strokeDasharray={CIRCUM} strokeDashoffset={CIRCUM * (1 - AUC)} transform="rotate(-90 80 80)" />
              </svg>
              <div className="pj-gauge-center">
                <span className="pj-gauge-pct" style={{ fontSize: 30 }}>{AUC.toFixed(2)}</span>
                <span className="pj-gauge-lbl">ROC-AUC</span>
              </div>
            </div>
            <div className="tm-metrics">
              <div className="tm-metric"><div className="tm-metric-v">{Math.round(PRECISION * 100)}%</div><div className="tm-metric-l">Precision on breach</div></div>
              <div className="tm-metric"><div className="tm-metric-v">{Math.round(RECALL * 100)}%</div><div className="tm-metric-l">Recall on breach</div></div>
              <div className="tm-metric"><div className="tm-metric-v">{F1.toFixed(2)}</div><div className="tm-metric-l">F1 (breach)</div></div>
              <div className="tm-metric"><div className="tm-metric-v">{Math.round(ACC * 100)}%</div><div className="tm-metric-l">Accuracy</div></div>
            </div>
          </div>

          <div className="tm-grid2" style={{ marginTop: 32 }}>
            <div>
              <Eyebrow style={{ marginBottom: 10 }}>Confusion matrix · deployed threshold · {TP + FP} flagged</Eyebrow>
              <div className="tm-cm">
                <div className="tm-cm-corner"></div>
                <div className="tm-cm-h">Pred. safe</div>
                <div className="tm-cm-h">Pred. breach</div>
                <div className="tm-cm-rh">Actual safe</div>
                <div className="tm-cm-cell tn"><div className="tm-cm-v">{TN}</div><div className="tm-cm-k">true negative</div></div>
                <div className="tm-cm-cell fp"><div className="tm-cm-v">{FP}</div><div className="tm-cm-k">false alarm</div></div>
                <div className="tm-cm-rh">Actual breach</div>
                <div className="tm-cm-cell fn"><div className="tm-cm-v">{FN}</div><div className="tm-cm-k">missed breach</div></div>
                <div className="tm-cm-cell tp"><div className="tm-cm-v">{TP}</div><div className="tm-cm-k">caught breach</div></div>
              </div>
              <p className="pj-caption" style={{ marginTop: 10 }}>
                A missed breach costs $200–$500; a false alarm costs minutes of review. The
                threshold sits low on purpose.
              </p>
            </div>
            <div>
              <Eyebrow style={{ marginBottom: 10 }}>Model comparison &amp; features</Eyebrow>
              <div className="tm-coefs">
                {MODELS.map((m) => (
                  <div className="tm-coef" key={m.name} style={{ gridTemplateColumns: "1fr auto", rowGap: 2 }}>
                    <span className="tm-coef-k" style={{ fontWeight: m.tag === "chosen" ? 700 : 500, color: m.tag === "chosen" ? "var(--accent-text)" : "var(--text-body)" }}>{m.name} · {m.tag}</span>
                    <span className="tm-coef-v risk" style={{ color: "var(--text-heading)" }}>{m.auc != null ? m.auc.toFixed(2) : "—"}</span>
                    <span style={{ gridColumn: "1 / -1", fontSize: 11.5, color: "var(--text-dim)", lineHeight: 1.45 }}>{m.note}</span>
                  </div>
                ))}
              </div>
              <Eyebrow style={{ margin: "16px 0 8px" }}>Model inputs</Eyebrow>
              <div className="tm-coefs">
                {FEATURES.map((f) => (
                  <div className="tm-coef" key={f.name} style={{ gridTemplateColumns: "1fr", rowGap: 2 }}>
                    <span className="tm-coef-k" style={{ fontWeight: 600 }}>{f.name}</span>
                    <span style={{ fontSize: 11.5, color: "var(--text-dim)", lineHeight: 1.45 }}>{f.note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pj-section">
          <Eyebrow style={{ marginBottom: 8 }}>Honest limits</Eyebrow>
          <div className="ff-artifacts">
            <div className="ff-artifact">
              <span className="ff-artifact-ic"><Crosshair size={20} aria-hidden /></span>
              <div><strong>16% precision by design</strong><span>Catching every breach means flagging roughly six safe tickets per real one. That is acceptable only because a review is cheap and a miss is not.</span></div>
            </div>
            <div className="ff-artifact">
              <span className="ff-artifact-ic"><Clock size={20} aria-hidden /></span>
              <div><strong>Scores at intake, not over time</strong><span>The model scores a ticket once. It does not re-rank a ticket as it ages toward its deadline, which is the natural next version.</span></div>
            </div>
            <div className="ff-artifact">
              <span className="ff-artifact-ic"><Database size={20} aria-hidden /></span>
              <div><strong>Four features only</strong><span>Priority, type, channel, and age. Ticket age at scoring and live agent workload would sharpen it, but were not in the source data.</span></div>
            </div>
          </div>
        </section>

        <Link href="/work/sla-optimization/method" className="pj-next">
          <div>
            <span className="pj-next-lbl">Next artifact</span>
            <span className="pj-next-title">Methodology Diagram</span>
          </div>
          <ArrowRight size={20} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
