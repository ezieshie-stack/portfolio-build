import Link from "next/link";
import { ArrowRight, Clock, Crosshair, Scale } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TelcoSubNav } from "@/components/work/telco/TelcoSubNav";
import { TelcoThresholdSlider } from "@/components/work/telco/TelcoThresholdSlider";

export const metadata = {
  title: "Telco · Model Card (T3) | David Ezieshi",
  description:
    "Logistic regression on 7,043 customers · ROC-AUC 0.8607 · precision 0.69 · recall 0.58 · with the real top-10 coefficients.",
};

// Real numbers from src/10_ml_logistic_regression.py run against churn.db (2026-07-15)
const TP = 218;
const FP = 96;
const FN = 155;
const TN = 940;
const TOTAL = TP + FP + FN + TN; // 1409
const PRECISION = TP / (TP + FP);
const RECALL = TP / (TP + FN);
const F1 = (2 * PRECISION * RECALL) / (PRECISION + RECALL);
const ACC = (TP + TN) / TOTAL;
const AUC = 0.8607;

const COEFS: [string, number, "prot" | "risk"][] = [
  ["contract_Two year", -1.374, "prot"],
  ["internetservice_Fiber optic", 0.764, "risk"],
  ["contract_One year", -0.638, "prot"],
  ["phoneservice_Yes", -0.483, "prot"],
  ["onlinesecurity_Yes", -0.436, "prot"],
  ["techsupport_Yes", -0.352, "prot"],
  ["paperlessbilling_Yes", 0.332, "risk"],
  ["paymentmethod_Electronic check", 0.33, "risk"],
  ["streamingmovies_Yes", 0.295, "risk"],
  ["multiplelines_Yes", 0.265, "risk"],
];

const COEF_MAX = Math.max(...COEFS.map((c) => Math.abs(c[1])));
const CIRCUM = 2 * Math.PI * 70;

export default function TelcoModelPage() {
  return (
    <div className="pf-page">
      <div className="pf-shell">
        <TelcoSubNav active="model" />
        <section className="pj-hero-head" style={{ marginTop: 28 }}>
          <Badge tone="violet" style={{ marginBottom: 16 }}>
            Artifact T3 · Model Card
          </Badge>
          <h1
            className="pf-page-title"
            style={{ fontSize: "clamp(30px,3.2vw,46px)" }}
          >
            The model, its scores, and its honest limits.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 680 }}>
            Logistic regression on 5,634 training customers, tested on 1,409
            held out. Every headline number below is from the real run against
            the shipped SQLite database.
          </p>
        </section>

        <section className="pj-section" style={{ marginTop: 30 }}>
          <div className="tm-perf">
            <div className="pj-gauge">
              <svg viewBox="0 0 160 160" width="160" height="160">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  fill="none"
                  stroke="var(--surface)"
                  strokeWidth="11"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="11"
                  strokeLinecap="round"
                  strokeDasharray={CIRCUM}
                  strokeDashoffset={CIRCUM * (1 - AUC)}
                  transform="rotate(-90 80 80)"
                />
              </svg>
              <div className="pj-gauge-center">
                <span className="pj-gauge-pct" style={{ fontSize: 30 }}>
                  {AUC.toFixed(2)}
                </span>
                <span className="pj-gauge-lbl">ROC-AUC</span>
              </div>
            </div>
            <div className="tm-metrics">
              <div className="tm-metric">
                <div className="tm-metric-v">{Math.round(PRECISION * 100)}%</div>
                <div className="tm-metric-l">Precision on churn</div>
              </div>
              <div className="tm-metric">
                <div className="tm-metric-v">{Math.round(RECALL * 100)}%</div>
                <div className="tm-metric-l">Recall on churn</div>
              </div>
              <div className="tm-metric">
                <div className="tm-metric-v">{F1.toFixed(2)}</div>
                <div className="tm-metric-l">F1 (churn)</div>
              </div>
              <div className="tm-metric">
                <div className="tm-metric-v">{Math.round(ACC * 100)}%</div>
                <div className="tm-metric-l">Accuracy</div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 26 }}>
            <TelcoThresholdSlider />
          </div>
        </section>

        <section className="pj-section">
          <Eyebrow style={{ marginBottom: 10 }}>Top 10 feature coefficients</Eyebrow>
          <div className="tm-coefs">
            {COEFS.map(([k, v, dir]) => (
              <div className="tm-coef" key={k}>
                <span className="tm-coef-k">{k}</span>
                <div className="tm-coef-track">
                  <div className="tm-coef-mid" />
                  <div
                    className={`tm-coef-bar ${dir}`}
                    style={{ width: `${(Math.abs(v) / COEF_MAX) * 50}%` }}
                  />
                </div>
                <span className={`tm-coef-v ${dir}`}>
                  {v > 0 ? "+" : ""}
                  {v.toFixed(2)}
                </span>
              </div>
            ))}
          </div>
          <p className="pj-caption" style={{ marginTop: 10 }}>
            <span style={{ color: "#10b981" }}>■</span> protective &nbsp;
            <span style={{ color: "#ef4444" }}>■</span> raises churn · log-odds
            scale
          </p>
        </section>

        <section className="pj-section">
          <Eyebrow style={{ marginBottom: 8 }}>Honest limits</Eyebrow>
          <div className="ff-artifacts">
            <div className="ff-artifact">
              <span className="ff-artifact-ic">
                <Crosshair size={20} aria-hidden />
              </span>
              <div>
                <strong>58% recall</strong>
                <span>
                  At the default threshold the model misses more than 4 in 10
                  actual churners. Lowering the threshold trades precision to
                  catch more.
                </span>
              </div>
            </div>
            <div className="ff-artifact">
              <span className="ff-artifact-ic">
                <Clock size={20} aria-hidden />
              </span>
              <div>
                <strong>No time dimension</strong>
                <span>
                  A snapshot model. It does not track how a customer&rsquo;s
                  risk moves as tenure and charges change.
                </span>
              </div>
            </div>
            <div className="ff-artifact">
              <span className="ff-artifact-ic">
                <Scale size={20} aria-hidden />
              </span>
              <div>
                <strong>Uncorrected imbalance</strong>
                <span>
                  Training is ~73% stayers. class_weight=&lsquo;balanced&rsquo;
                  would trade precision for recall; it was left off by default.
                </span>
              </div>
            </div>
          </div>
        </section>

        <Link href="/work/telco-churn/method" className="pj-next">
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
