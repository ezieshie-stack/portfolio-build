import Link from "next/link";
import { ArrowRight, Database, FlaskConical, GitCommitHorizontal, ShieldAlert, SlidersHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FraudSubNav } from "@/components/work/fraud/FraudSubNav";

export const metadata = { title: "Fraud · Methodology (F4) | David Ezieshi" };

const PHASES = [
  { icon: Database, t: "1 · Ingest & stage", d: "Load PaySim into a raw table, then a staging view that guarantees consistent casing and a clean interface for everything downstream.", s: "00–02" },
  { icon: SlidersHorizontal, t: "2 · Engineer features", d: "Window functions build 1-hour velocity and spend per account, plus a 30-day rolling fraud rate per destination.", s: "03_features.sql" },
  { icon: ShieldAlert, t: "3 · Score & serve", d: "The rules engine assigns a weighted, explainable score, feeding a daily alert queue, a merchant blocklist, and a watchlist.", s: "04–07" },
  { icon: FlaskConical, t: "4 · Analytics lab", d: "Seven ad-hoc scripts discover patterns and tune the thresholds, then feed the tuned logic back into the engine.", s: "analysis/01–07" },
];

const LAYERS = [
  { code: "00", name: "schema.sql", desc: "Table definitions + type constraints" },
  { code: "01", name: "load.sql", desc: "COPY PaySim CSV into transactions_raw" },
  { code: "02", name: "stg_transactions", desc: "Staging view — clean casing, aliases" },
  { code: "03", name: "mart_risk_features", desc: "Window-function feature mart (velocity, spend, dest history)" },
  { code: "04", name: "mart_rules_engine", desc: "Weighted CASE score + concatenated reason strings" },
  { code: "05", name: "alerts_daily", desc: "Daily investigation queue (score ≥ 80)" },
  { code: "06", name: "merchant_risk", desc: "Recipient blocklist ranked by 30-day fraud rate" },
  { code: "07", name: "customer_watchlist", desc: "Senders trending toward the queue threshold" },
];

export default function FraudMethodPage() {
  return (
    <div className="pf-page">
      <div className="pf-shell">
        <FraudSubNav active="method" />
        <section className="pj-hero-head" style={{ marginTop: 28 }}>
          <Badge tone="violet" style={{ marginBottom: 16 }}>Artifact F4 · Methodology</Badge>
          <h1 className="pf-page-title" style={{ fontSize: "clamp(30px,3.2vw,46px)" }}>Raw logs in, a ranked queue out.</h1>
          <p className="pf-page-intro" style={{ maxWidth: 700 }}>
            A layered pipeline where each SQL view builds on the last, with an analytics lab off to
            the side that tunes the engine. Every layer is a view a reviewer can open and read.
          </p>
        </section>

        <section className="pj-section" style={{ marginTop: 30 }}>
          <Eyebrow style={{ marginBottom: 8 }}>The 7 pipeline layers</Eyebrow>
          <div className="mv-seg">
            {LAYERS.map((l) => (
              <div key={l.code} className="mv-seg-row" style={{ gridTemplateColumns: "60px 200px 1fr" }}>
                <code style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--accent-text)" }}>{l.code}</code>
                <span className="mv-seg-name" style={{ fontFamily: "var(--font-mono)", fontSize: 13 }}>{l.name}</span>
                <span className="mv-genre-why">{l.desc}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="pj-section">
          <Eyebrow style={{ marginBottom: 8 }}>Each layer, in one sentence</Eyebrow>
          <div className="ff-artifacts">
            {PHASES.map((p) => {
              const Ico = p.icon;
              return (
                <div className="ff-artifact" key={p.t}>
                  <span className="ff-artifact-ic"><Ico size={20} aria-hidden /></span>
                  <div>
                    <strong>{p.t}</strong>
                    <span>{p.d}</span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--accent-text)", marginTop: 4, display: "block" }}>{p.s}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="pj-section">
          <div className="cov-note">
            <GitCommitHorizontal size={18} aria-hidden />
            <p>
              <b>Views, not black boxes.</b> Every layer is a SQL view a reviewer can open and read,
              and the analytics lab loops back into the engine: patterns discovered ad-hoc become
              weighted rules, and the threshold simulation sets where the queue is drawn. The
              pipeline is a decision system, not just a report.
            </p>
          </div>
        </section>

        <Link href="/work/fraud-detection/doc" className="pj-next">
          <div>
            <span className="pj-next-lbl">Next artifact</span>
            <span className="pj-next-title">The write-up</span>
          </div>
          <ArrowRight size={20} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
