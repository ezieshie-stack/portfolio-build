import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Crosshair,
  Fingerprint,
  Hash,
  Phone,
  Receipt,
  Users,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TelcoSubNav } from "@/components/work/telco/TelcoSubNav";

export const metadata = {
  title: "Telco · Data Dictionary (T2) | David Ezieshi",
  description:
    "The 21 columns of the customers table with type, business meaning, and model role, including two dropped-column decisions.",
};

type Col = { name: string; type: string; meaning: string; used: "y" | "id" | "leak" };
type Cluster = { icon: LucideIcon; title: string; n: string; drop?: boolean; cols: Col[] };

const CLUSTERS: Cluster[] = [
  {
    icon: Hash,
    title: "Identity",
    n: "1 · dropped",
    drop: true,
    cols: [
      { name: "customerid", type: "TEXT", meaning: "Unique subscriber ID. A model that learns from IDs is a lookup table, not a classifier.", used: "id" },
    ],
  },
  {
    icon: Users,
    title: "Demographics",
    n: "4",
    cols: [
      { name: "gender", type: "TEXT", meaning: "Male / Female. Kept, but near-zero coefficient, no material signal.", used: "y" },
      { name: "seniorcitizen", type: "INT", meaning: "Whether the subscriber is 65+. A positive churn signal.", used: "y" },
      { name: "partner", type: "TEXT", meaning: "Has a spouse or partner.", used: "y" },
      { name: "dependents", type: "TEXT", meaning: "Has dependents.", used: "y" },
    ],
  },
  {
    icon: Receipt,
    title: "Account & billing",
    n: "5 (+1 dropped)",
    cols: [
      { name: "tenure", type: "INT", meaning: "Months with the company (0–72). Numeric feature.", used: "y" },
      { name: "contract", type: "TEXT", meaning: "Month-to-month / One year / Two year. Highest-impact feature.", used: "y" },
      { name: "paperlessbilling", type: "TEXT", meaning: "Paperless billing on/off. Positive churn signal.", used: "y" },
      { name: "paymentmethod", type: "TEXT", meaning: "How they pay. Electronic check is the risk signal.", used: "y" },
      { name: "monthlycharges", type: "REAL", meaning: "Current monthly bill in USD (18.25–118.75). Numeric feature.", used: "y" },
      { name: "totalcharges", type: "REAL", meaning: "Cumulative billed amount. Equals monthly × tenure, embeds the churn signal. Dropped to prevent target leakage.", used: "leak" },
    ],
  },
  {
    icon: Phone,
    title: "Phone service",
    n: "2",
    cols: [
      { name: "phoneservice", type: "TEXT", meaning: "Has phone service.", used: "y" },
      { name: "multiplelines", type: "TEXT", meaning: "Has multiple lines.", used: "y" },
    ],
  },
  {
    icon: Wifi,
    title: "Internet service",
    n: "7",
    cols: [
      { name: "internetservice", type: "TEXT", meaning: "DSL / Fiber optic / No. Fiber optic is the 2nd-highest churn signal.", used: "y" },
      { name: "onlinesecurity", type: "TEXT", meaning: "Add-on: online security. Protective.", used: "y" },
      { name: "onlinebackup", type: "TEXT", meaning: "Add-on: online backup.", used: "y" },
      { name: "deviceprotection", type: "TEXT", meaning: "Add-on: device protection.", used: "y" },
      { name: "techsupport", type: "TEXT", meaning: "Add-on: tech support. Strongest protective add-on.", used: "y" },
      { name: "streamingtv", type: "TEXT", meaning: "Add-on: streaming TV.", used: "y" },
      { name: "streamingmovies", type: "TEXT", meaning: "Add-on: streaming movies. Positive churn signal.", used: "y" },
    ],
  },
];

const REASONS = [
  { code: "leak", label: "Leakage risk", note: "Derived from the outcome or known only after it. Feeding these to a churn model would leak the answer it is meant to predict." },
  { code: "id", label: "Identifier", note: "Unique per subscriber. No generalisable signal; a model that learns from it is a lookup table that fails on new customers." },
];

function usedPill(u: Col["used"]): [string, string] {
  if (u === "y") return ["yes", "✓ in model"];
  if (u === "leak") return ["leak", "leakage risk"];
  return ["no", "identifier"];
}

export default function TelcoDataPage() {
  return (
    <div className="pf-page">
      <div className="pf-shell">
        <TelcoSubNav active="data" />
        <section className="pj-hero-head" style={{ marginTop: 28 }}>
          <Badge tone="violet" style={{ marginBottom: 16 }}>
            Artifact T2 · Data Dictionary &amp; Schema
          </Badge>
          <h1
            className="pf-page-title"
            style={{ fontSize: "clamp(30px,3.2vw,46px)" }}
          >
            Twenty-one columns, eighteen features.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 700 }}>
            Every column in the customers table: its type, what it means, and
            how it is used. The story is the two columns that don&rsquo;t feed
            the model, and why their reasons differ, one is an identifier, the
            other is target leakage.
          </p>
        </section>

        <section className="pj-section" style={{ marginTop: 30 }}>
          <div className="tc-grid">
            {CLUSTERS.map((cl) => {
              const Ico = cl.icon;
              return (
                <div
                  className={`tc-card${cl.drop ? " drop" : ""}`}
                  key={cl.title}
                >
                  <div className="tc-hd">
                    <Ico size={15} aria-hidden />
                    <span className="tc-hd-t">{cl.title}</span>
                    <span className="tc-hd-n">{cl.n}</span>
                  </div>
                  {cl.cols.map((c) => {
                    const [cls, lbl] = usedPill(c.used);
                    return (
                      <div className="tc-col" key={c.name}>
                        <div className="tc-col-top">
                          <span className="tc-col-n">{c.name}</span>
                          <span className="tc-type">{c.type}</span>
                          <span className={`tc-used ${cls}`}>{lbl}</span>
                        </div>
                        <div className="tc-col-m">{c.meaning}</div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>

          <div className="sla-legend">
            {REASONS.map((r) => {
              const [cls] = usedPill(r.code as Col["used"]);
              return (
                <div className="sla-legend-row" key={r.code}>
                  <span className={`tc-used ${cls}`}>{r.label}</span>
                  <span className="sla-legend-note">{r.note}</span>
                </div>
              );
            })}
          </div>

          <div className="tc-target">
            <Crosshair size={22} aria-hidden />
            <span>
              <b>churn</b> (TEXT · Yes/No) is the prediction target, binary-
              encoded to 1/0 in the pipeline. The other 18 usable columns
              become ~30 features after one-hot encoding, all pointing at this
              one flag.
            </span>
          </div>
        </section>

        <section className="pj-section">
          <Eyebrow style={{ marginBottom: 8 }}>Two decisions worth explaining</Eyebrow>
          <div className="ff-artifacts">
            <div className="ff-artifact">
              <span className="ff-artifact-ic">
                <AlertTriangle size={20} aria-hidden />
              </span>
              <div>
                <strong>Dropped totalcharges</strong>
                <span>
                  It equals monthly × tenure and embeds the churn signal
                  itself. Feeding it would train the model to spot customers
                  who already stopped paying, not who will. Textbook target
                  leakage.
                </span>
              </div>
            </div>
            <div className="ff-artifact">
              <span className="ff-artifact-ic">
                <Fingerprint size={20} aria-hidden />
              </span>
              <div>
                <strong>Dropped customerid</strong>
                <span>
                  A unique value per row. A model that learns from it is a
                  lookup table, and any apparent signal evaporates on new
                  customers.
                </span>
              </div>
            </div>
          </div>
        </section>

        <Link href="/work/telco-churn/model" className="pj-next">
          <div>
            <span className="pj-next-lbl">Next artifact</span>
            <span className="pj-next-title">Model Card</span>
          </div>
          <ArrowRight size={20} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
