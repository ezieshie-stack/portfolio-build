import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Clock,
  Crosshair,
  Database,
  Filter,
  Hash,
  Star,
  Ticket,
  Users,
  Wand2,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SlaSubNav } from "@/components/work/sla/SlaSubNav";

export const metadata = { title: "SLA · Data Dictionary (S2) | David Ezieshi" };

type Used = "y" | "e" | "id" | "leak" | "def" | "held";
type Col = { name: string; type: string; meaning: string; used: Used };
type Cluster = { icon: LucideIcon; title: string; n: string; drop?: boolean; cols: Col[] };

const CLUSTERS: Cluster[] = [
  { icon: Hash, title: "Identity", n: "1 · dropped", drop: true, cols: [
    { name: "Ticket ID", type: "INT", meaning: "Unique ticket number (1 to 8,469). An identifier, never a feature.", used: "id" },
  ]},
  { icon: Users, title: "Customer", n: "5", cols: [
    { name: "Customer Name", type: "TEXT", meaning: "Free-text name (8,028 unique). An identifier.", used: "id" },
    { name: "Customer Email", type: "TEXT", meaning: "Contact email (8,320 unique). An identifier.", used: "id" },
    { name: "Customer Age", type: "INT", meaning: "Age 18 to 70 (mean 44). The one numeric model feature.", used: "y" },
    { name: "Customer Gender", type: "TEXT", meaning: "Male / Female / Other. Held out to avoid demographic bias; low predictive signal.", used: "held" },
    { name: "Product Purchased", type: "TEXT", meaning: "42 products. Usable, but needs target or frequency encoding first, deferred.", used: "def" },
  ]},
  { icon: Ticket, title: "Ticket attributes", n: "5", cols: [
    { name: "Ticket Type", type: "TEXT", meaning: "Billing / Cancellation / Product / Refund / Technical. Model feature.", used: "y" },
    { name: "Ticket Subject", type: "TEXT", meaning: "Only 16 subject lines. Low-cardinality and one-hot ready, a usable feature left for the next iteration.", used: "def" },
    { name: "Ticket Description", type: "TEXT", meaning: "Free-text body (8,077 unique). Reserved for NLP features (sentiment, length).", used: "def" },
    { name: "Ticket Priority", type: "TEXT", meaning: "Critical / High / Medium / Low. Sets the SLA target and drives risk.", used: "y" },
    { name: "Ticket Channel", type: "TEXT", meaning: "Email / Chat / Phone / Social media. Model feature.", used: "y" },
  ]},
  { icon: Clock, title: "Timestamps & status", n: "4", cols: [
    { name: "Date of Purchase", type: "DATETIME", meaning: "When the product was bought (2020–2021). Could derive customer tenure or recency.", used: "def" },
    { name: "First Response Time", type: "DATETIME", meaning: "First agent reply. Populated for 5,650 of 8,469. Proxy start for SLA math.", used: "e" },
    { name: "Time to Resolution", type: "DATETIME", meaning: "When the ticket closed. Populated for only 2,769 of 8,469. Drives resolution hours.", used: "e" },
    { name: "Ticket Status", type: "TEXT", meaning: "Open / Pending / Closed. Known only at or after resolution, using it would leak the outcome.", used: "leak" },
  ]},
  { icon: Star, title: "Outcome", n: "2", cols: [
    { name: "Resolution", type: "TEXT", meaning: "Free-text resolution note (2,770 unique). Not a predictor.", used: "id" },
    { name: "CSAT Rating", type: "INT", meaning: "1 to 5 CSAT (mean 2.99). A post-resolution outcome, kept out of the model to avoid leakage.", used: "leak" },
  ]},
];

const REASONS = [
  { code: "def", label: "Usable, deferred", note: "Real signal left on the table: low-cardinality categoricals, or fields needing encoding or NLP first. The honest modelling backlog." },
  { code: "leak", label: "Leakage risk", note: "Known only at or after resolution. Feeding these to a model that predicts breach would leak the answer." },
  { code: "id", label: "Identifier", note: "Names, emails, IDs, free-text notes. Unique per row, no generalisable signal, never features." },
  { code: "held", label: "Held out", note: "Available but deliberately excluded to avoid demographic bias; signal is weak." },
];

const ENGINEERED = [
  { name: "Resolution_Hours", type: "REAL", meaning: "Resolution minus inferred creation time, in hours. The core SLA measure." },
  { name: "SLA_Target_Hours", type: "INT", meaning: "Target by priority: Critical 4, High 8, Normal 24, Low 72." },
  { name: "Is_SLA_Breach", type: "BOOL", meaning: "True when Resolution_Hours exceeds the target. The model label." },
  { name: "Breach_Cost", type: "INT", meaning: "Dollars lost on a breach: $500 Critical, $200 High, else $0." },
  { name: "Pred_Breach_Prob", type: "REAL", meaning: "Model output, 0 to 1. The score the escalation queue ranks by." },
  { name: "Risk_Bucket", type: "TEXT", meaning: "Low / Medium / High, bucketed from the predicted probability." },
];

function usedPill(u: Used | string): [string, string] {
  if (u === "y") return ["yes", "✓ in model"];
  if (u === "e") return ["yes", "→ engineered"];
  if (u === "def") return ["def", "usable · deferred"];
  if (u === "leak") return ["leak", "leakage risk"];
  if (u === "held") return ["no", "held out"];
  return ["no", "identifier"];
}

export default function SlaDataPage() {
  return (
    <div className="pf-page">
      <div className="pf-shell">
        <SlaSubNav active="data" />
        <section className="pj-hero-head" style={{ marginTop: 28 }}>
          <Badge tone="violet" style={{ marginBottom: 16 }}>Artifact S2 · Data Dictionary &amp; Schema</Badge>
          <h1 className="pf-page-title" style={{ fontSize: "clamp(30px,3.2vw,46px)" }}>
            Seventeen raw fields, six engineered.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 700 }}>
            Every column in the ticket dataset: its type, what it means, and how it is used.
            &ldquo;Not in the model&rdquo; is not one thing, so each unused field carries a reason
            code.
          </p>
        </section>

        <section className="pj-section" style={{ marginTop: 30 }}>
          <div className="tc-grid">
            {CLUSTERS.map((cl) => {
              const Ico = cl.icon;
              return (
                <div className={`tc-card${cl.drop ? " drop" : ""}`} key={cl.title}>
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
              const [cls] = usedPill(r.code);
              return (
                <div className="sla-legend-row" key={r.code}>
                  <span className={`tc-used ${cls}`}>{r.label}</span>
                  <span className="sla-legend-note">{r.note}</span>
                </div>
              );
            })}
          </div>
        </section>

        <section className="pj-section">
          <Eyebrow style={{ marginBottom: 8 }}>Engineered fields · the SLA layer</Eyebrow>
          <p className="pj-section-sub">
            The raw data had no notion of a breach. This layer was built first: infer a creation
            time, compute resolution hours, apply per-priority targets, then attach cost and model
            score.
          </p>
          <div className="tc-card">
            <div className="tc-hd">
              <Wand2 size={15} aria-hidden />
              <span className="tc-hd-t">Derived in the pipeline</span>
              <span className="tc-hd-n">6 fields</span>
            </div>
            {ENGINEERED.map((c) => (
              <div className="tc-col" key={c.name}>
                <div className="tc-col-top">
                  <span className="tc-col-n">{c.name}</span>
                  <span className="tc-type">{c.type}</span>
                  <span className="tc-used yes">✓ engineered</span>
                </div>
                <div className="tc-col-m">{c.meaning}</div>
              </div>
            ))}
          </div>
          <div className="tc-target">
            <Crosshair size={22} aria-hidden />
            <span>
              <b>Is_SLA_Breach</b> (BOOL) is the prediction target. Four raw columns (priority,
              channel, type, customer age) become the feature set after one-hot encoding.
            </span>
          </div>
        </section>

        <section className="pj-section">
          <Eyebrow style={{ marginBottom: 8 }}>Data-quality calls worth explaining</Eyebrow>
          <div className="ff-artifacts">
            <div className="ff-artifact">
              <span className="ff-artifact-ic"><Database size={20} aria-hidden /></span>
              <div><strong>Timestamps are the least complete fields</strong><span>First Response Time is present on 5,650 of 8,469 rows and Time to Resolution on only 2,769. Rows missing either are dropped, so SLA analysis runs on the resolved subset. Volume and CSAT stats still use all 8,469.</span></div>
            </div>
            <div className="ff-artifact">
              <span className="ff-artifact-ic"><AlertTriangle size={20} aria-hidden /></span>
              <div><strong>No true creation timestamp</strong><span>The raw data only had first-response and resolution times. A creation time was inferred as a 1–5 hour window before first response so resolution hours were realistic. A documented assumption, flagged as a limitation.</span></div>
            </div>
            <div className="ff-artifact">
              <span className="ff-artifact-ic"><Filter size={20} aria-hidden /></span>
              <div><strong>Dropped negative durations</strong><span>Rows where the inferred math produced a negative resolution time were removed as source-data logic errors before any analysis ran.</span></div>
            </div>
          </div>
        </section>

        <Link href="/work/sla-optimization/model" className="pj-next">
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
