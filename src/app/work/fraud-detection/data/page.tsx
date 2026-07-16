import Link from "next/link";
import {
  ArrowLeftRight,
  ArrowRight,
  Clock,
  Flag,
  ShieldCheck,
  User,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { FraudSubNav } from "@/components/work/fraud/FraudSubNav";

export const metadata = {
  title: "Fraud · Data Dictionary (F2) | David Ezieshi",
  description: "The 11 PaySim columns grouped by role, with reconciliation callouts.",
};

type Col = { name: string; type: string; meaning: string; role: "sig" | "id" | "label" };
type Cluster = { icon: LucideIcon; title: string; n: string; cols: Col[] };

const CLUSTERS: Cluster[] = [
  { icon: Clock, title: "Time", n: "1", cols: [
    { name: "step", type: "INT", meaning: "Unit of time. PaySim uses integer steps; this project treats 1 step = 1 hour, and every window function is built on it.", role: "sig" },
  ]},
  { icon: ArrowLeftRight, title: "Transaction", n: "2", cols: [
    { name: "type", type: "TEXT", meaning: "CASH-IN, CASH-OUT, DEBIT, PAYMENT, or TRANSFER. Fraud concentrates in TRANSFER and CASH_OUT, so detection focuses there.", role: "sig" },
    { name: "amount", type: "NUMERIC", meaning: "Transaction amount. Drives the high-spend rule and the structuring threshold.", role: "sig" },
  ]},
  { icon: User, title: "Parties", n: "2", cols: [
    { name: "nameOrig", type: "TEXT", meaning: "Originating customer. Partition key for velocity and spend windows; uniquely identifies a sender.", role: "id" },
    { name: "nameDest", type: "TEXT", meaning: "Recipient. Partition key for the 30-day destination fraud rate; a merchant or another user.", role: "id" },
  ]},
  { icon: Wallet, title: "Balances · origin", n: "2", cols: [
    { name: "oldbalanceOrg", type: "NUMERIC", meaning: "Sender balance before. With the amount, gives the expected post-balance for reconciliation.", role: "sig" },
    { name: "newbalanceOrig", type: "NUMERIC", meaning: "Sender balance after. A mismatch vs (old − amount) signals ledger tampering.", role: "sig" },
  ]},
  { icon: Wallet, title: "Balances · destination", n: "2", cols: [
    { name: "oldbalanceDest", type: "NUMERIC", meaning: "Recipient balance before. Zero here plus a large inbound amount flags a cash-out endpoint.", role: "sig" },
    { name: "newbalanceDest", type: "NUMERIC", meaning: "Recipient balance after. Checked against (old + amount) for reconciliation.", role: "sig" },
  ]},
  { icon: Flag, title: "Labels", n: "2", cols: [
    { name: "isFraud", type: "INT", meaning: "Ground-truth fraud flag (1/0). Used only to validate precision, never as a scoring input.", role: "label" },
    { name: "isFlaggedFraud", type: "INT", meaning: "PaySim's own flag for very large transfers (>200k). A reference marker, not used by the engine.", role: "label" },
  ]},
];

const REASONS = [
  { code: "label", label: "Outcome label", note: "isFraud and isFlaggedFraud are ground truth, used only to measure precision after the fact. Feeding them into the score would leak the answer the engine is meant to infer." },
  { code: "id", label: "Identifier / partition key", note: "nameOrig and nameDest identify the parties and act as the PARTITION BY keys for the window functions; no standalone signal, but essential to per-account behavior." },
];

function rolePill(r: Col["role"] | string): [string, string] {
  if (r === "sig") return ["yes", "signal"];
  if (r === "label") return ["leak", "label"];
  return ["no", "identifier"];
}

export default function FraudDataPage() {
  return (
    <div className="pf-page">
      <div className="pf-shell">
        <FraudSubNav active="data" />
        <section className="pj-hero-head" style={{ marginTop: 28 }}>
          <Badge tone="violet" style={{ marginBottom: 16 }}>Artifact F2 · Data Dictionary</Badge>
          <h1 className="pf-page-title" style={{ fontSize: "clamp(30px,3.2vw,46px)" }}>
            Eleven columns, one ledger.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 700 }}>
            The PaySim schema: what each column means and how it is used. The four balance
            columns do the quiet work — they let a reconciliation check catch tampering that
            the amount alone would never reveal.
          </p>
        </section>

        <section className="pj-section" style={{ marginTop: 30 }}>
          <div className="tc-grid">
            {CLUSTERS.map((cl) => {
              const Ico = cl.icon;
              return (
                <div className="tc-card" key={cl.title}>
                  <div className="tc-hd">
                    <Ico size={15} aria-hidden />
                    <span className="tc-hd-t">{cl.title}</span>
                    <span className="tc-hd-n">{cl.n}</span>
                  </div>
                  {cl.cols.map((c) => {
                    const [cls, lbl] = rolePill(c.role);
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
              const [cls] = rolePill(r.code);
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
          <div className="cov-note">
            <ShieldCheck size={18} aria-hidden />
            <p>
              <b>Integrity first.</b> A QA script asserts the pipeline&rsquo;s health before any
              scoring runs: no null accounts or steps, no negative amounts, and every isFraud
              value strictly 0 or 1. A detection system is only as trustworthy as the ledger
              under it.
            </p>
          </div>
        </section>

        <Link href="/work/fraud-detection/rules" className="pj-next">
          <div>
            <span className="pj-next-lbl">Next artifact</span>
            <span className="pj-next-title">The Rules Engine</span>
          </div>
          <ArrowRight size={20} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
