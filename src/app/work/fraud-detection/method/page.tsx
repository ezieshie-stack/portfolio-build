import Link from "next/link";
import {
  ArrowRight,
  Database,
  FlaskConical,
  GitCommitHorizontal,
  ShieldAlert,
  SlidersHorizontal,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FraudSubNav } from "@/components/work/fraud/FraudSubNav";
import { DiagramShell } from "@/components/work/fiitco/diagrams/DiagramShell";
import { FlowCanvas } from "@/components/work/fiitco/diagrams/FlowCanvas";
import type { FlowConfig } from "@/components/work/fiitco/diagrams/types";

export const metadata = {
  title: "Fraud · Methodology (F4) | David Ezieshi",
  description:
    "A layered PostgreSQL pipeline from raw PaySim logs to a ranked investigator queue, with an analytics lab tuning the engine.",
};

const PIPELINE: FlowConfig = {
  unit: { NW: 168, NH: 66, HG: 62, VG: 32 },
  legend: [
    ["authed", "Raw"],
    ["db", "Pipeline view"],
    ["form", "Feature mart"],
    ["admin", "Rules engine"],
    ["good", "Analysis lab"],
    ["actor", "Output"],
  ],
  groups: [
    { label: "Ingest", members: ["raw", "stg"] },
    { label: "Engineer", members: ["feat"] },
    { label: "Score", members: ["rules"] },
    { label: "Serve", members: ["alerts", "merch", "watch"] },
    { label: "Analytics lab", members: ["disc", "tune"] },
  ],
  nodes: [
    { id: "csv", c: 0, r: 2, label: "PaySim CSV", tone: "authed", sub: "raw logs" },
    { id: "raw", c: 1, r: 2, label: "00–01 transactions_raw", tone: "db" },
    { id: "stg", c: 2, r: 2, label: "02 stg_transactions", tone: "db", sub: "clean view" },
    { id: "feat", c: 3, r: 2, label: "03 mart_risk_features", tone: "form", sub: "window fns" },
    { id: "rules", c: 4, r: 2, label: "04 mart_rules_engine", tone: "admin", sub: "score + reasons" },
    { id: "alerts", c: 5, r: 0, label: "05 alerts_daily", tone: "actor", sub: "score ≥ 80" },
    { id: "merch", c: 5, r: 2, label: "06 merchant_risk", tone: "actor", sub: "block list" },
    { id: "watch", c: 5, r: 4, label: "07 customer_watchlist", tone: "actor" },
    { id: "disc", c: 3, r: 5, label: "01–04 discovery", tone: "good", sub: "velocity · balance · smurf" },
    { id: "tune", c: 4, r: 5, label: "05–07 tune thresholds", tone: "good", sub: "precision · capacity" },
  ],
  edges: [
    { from: "csv", to: "raw" },
    { from: "raw", to: "stg" },
    { from: "stg", to: "feat" },
    { from: "feat", to: "rules" },
    { from: "rules", to: "alerts" },
    { from: "rules", to: "merch" },
    { from: "rules", to: "watch" },
    { from: "stg", to: "disc" },
    { from: "disc", to: "tune" },
    { from: "tune", to: "rules" },
  ],
};

const PHASES = [
  {
    icon: Database,
    n: "1 · Ingest & stage",
    desc: "Load PaySim into a raw table, then a staging view that guarantees consistent casing and a clean interface for everything downstream.",
    script: "00–02",
  },
  {
    icon: SlidersHorizontal,
    n: "2 · Engineer features",
    desc: "Window functions build 1-hour velocity and spend per account, plus a 30-day rolling fraud rate per destination.",
    script: "03_features.sql",
  },
  {
    icon: ShieldAlert,
    n: "3 · Score & serve",
    desc: "The rules engine assigns a weighted, explainable score, feeding a daily alert queue, a merchant blocklist, and a watchlist.",
    script: "04–07",
  },
  {
    icon: FlaskConical,
    n: "4 · Analytics lab",
    desc: "Seven ad-hoc scripts discover patterns and tune the thresholds, then feed the tuned logic back into the engine.",
    script: "analysis/01–07",
  },
];

export default function FraudMethodPage() {
  return (
    <div className="pf-page">
      <div className="pf-shell">
        <FraudSubNav active="method" />
        <section className="pj-hero-head" style={{ marginTop: 28 }}>
          <Badge tone="violet" style={{ marginBottom: 16 }}>
            Artifact F4 · Methodology
          </Badge>
          <h1
            className="pf-page-title"
            style={{ fontSize: "clamp(30px,3.2vw,46px)" }}
          >
            Raw logs in, a ranked queue out.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 700 }}>
            A layered pipeline where each SQL view builds on the last, with an
            analytics lab off to the side that tunes the engine. Hover a stage
            to trace what feeds it and what it produces.
          </p>
        </section>

        <section className="pj-section" style={{ marginTop: 30 }}>
          <DiagramShell title="SQL pipeline">
            <FlowCanvas config={PIPELINE} />
          </DiagramShell>
        </section>

        <section className="pj-section">
          <Eyebrow style={{ marginBottom: 8 }}>Each layer, in one sentence</Eyebrow>
          <div className="ff-artifacts">
            {PHASES.map((p) => {
              const Ico = p.icon;
              return (
                <div className="ff-artifact" key={p.n}>
                  <span className="ff-artifact-ic">
                    <Ico size={20} aria-hidden />
                  </span>
                  <div>
                    <strong>{p.n}</strong>
                    <span>{p.desc}</span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        color: "var(--accent-text)",
                        marginTop: 4,
                        display: "block",
                      }}
                    >
                      {p.script}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="pj-section">
          <div
            className="cov-note"
            style={{
              borderColor: "var(--violet-border)",
              background: "var(--violet-fill)",
            }}
          >
            <GitCommitHorizontal
              size={18}
              aria-hidden
              style={{ color: "var(--accent)" }}
            />
            <p>
              <b>Views, not black boxes.</b> Every layer is a SQL view a
              reviewer can open and read, and the analytics lab loops back
              into the engine: patterns discovered ad-hoc become weighted
              rules, and the threshold simulation sets where the queue is
              drawn. The pipeline is a decision system, not just a report.
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
