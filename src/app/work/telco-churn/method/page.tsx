import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Database,
  FlaskConical,
  GitCommitHorizontal,
  Search,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TelcoSubNav } from "@/components/work/telco/TelcoSubNav";
import { DiagramShell } from "@/components/work/fiitco/diagrams/DiagramShell";
import { FlowCanvas } from "@/components/work/fiitco/diagrams/FlowCanvas";
import type { FlowConfig } from "@/components/work/fiitco/diagrams/types";

export const metadata = {
  title: "Telco · Methodology (T4) | David Ezieshi",
  description:
    "The full analysis pipeline from raw CSV to recommendations, one stage per script.",
};

const PIPELINE: FlowConfig = {
  unit: { NW: 158, NH: 66, HG: 62, VG: 34 },
  legend: [
    ["authed", "Input"],
    ["db", "Database"],
    ["good", "SQL query"],
    ["form", "Validation"],
    ["admin", "Model step"],
    ["actor", "Output"],
  ],
  groups: [
    { label: "Engineer", members: ["p1", "db"] },
    { label: "Explore · SQL", members: ["q2", "q3", "q4", "q5", "q6", "q7", "q8"] },
    { label: "Validate", members: ["chi"] },
    { label: "Model", members: ["m1", "m2", "m3", "m4", "m5"] },
    { label: "Outputs", members: ["o1", "o3"] },
  ],
  nodes: [
    { id: "raw", c: 0, r: 3, label: "Raw CSV", tone: "authed", sub: "7,043 × 21" },
    { id: "p1", c: 1, r: 3, label: "01 load to SQLite", tone: "db" },
    { id: "db", c: 2, r: 3, label: "churn.db", tone: "auth", sub: "customers table" },
    { id: "q2", c: 3, r: 0, label: "02 Contract", tone: "good" },
    { id: "q3", c: 3, r: 1, label: "03 Payment", tone: "good" },
    { id: "q4", c: 3, r: 2, label: "04 Contract × Pay", tone: "good" },
    { id: "q5", c: 3, r: 3, label: "05 Tenure band", tone: "good" },
    { id: "q6", c: 3, r: 4, label: "06 Tenure × Contract", tone: "good" },
    { id: "q7", c: 3, r: 5, label: "07 Internet × Support", tone: "good" },
    { id: "q8", c: 3, r: 6, label: "08 Charges band", tone: "good" },
    { id: "chi", c: 4, r: 3, label: "09 Chi-Square", tone: "form", sub: "p = 5.86e-258" },
    { id: "m1", c: 5, r: 1, label: "Drop id + leakage", tone: "admin" },
    { id: "m2", c: 5, r: 2, label: "One-hot encode", tone: "admin" },
    { id: "m3", c: 5, r: 3, label: "80/20 split", tone: "admin", sub: "seed 42" },
    { id: "m4", c: 5, r: 4, label: "Logistic Regression", tone: "admin" },
    { id: "m5", c: 5, r: 5, label: "Evaluate", tone: "admin", sub: "ROC · CM · coef" },
    { id: "o1", c: 6, r: 2, label: "metrics.txt", tone: "actor", sub: "AUC 0.86" },
    { id: "o3", c: 6, r: 4, label: "Recommendations", tone: "actor", sub: "3 programs" },
  ],
  edges: [
    { from: "raw", to: "p1" },
    { from: "p1", to: "db" },
    { from: "db", to: "q2" },
    { from: "db", to: "q3" },
    { from: "db", to: "q4" },
    { from: "db", to: "q5" },
    { from: "db", to: "q6" },
    { from: "db", to: "q7" },
    { from: "db", to: "q8" },
    { from: "q2", to: "chi" },
    { from: "q3", to: "chi" },
    { from: "q4", to: "chi" },
    { from: "q5", to: "chi" },
    { from: "q6", to: "chi" },
    { from: "q7", to: "chi" },
    { from: "q8", to: "chi" },
    { from: "chi", to: "m1" },
    { from: "db", to: "m1" },
    { from: "m1", to: "m2" },
    { from: "m2", to: "m3" },
    { from: "m3", to: "m4" },
    { from: "m4", to: "m5" },
    { from: "m5", to: "o1" },
    { from: "m5", to: "o3" },
  ],
};

const PHASES = [
  {
    icon: Database,
    n: "1 · Data Engineering",
    desc: "Convert the flat CSV into a queryable SQL database so exploration is repeatable and traceable.",
    script: "01_load_telco_to_sqlite.py",
  },
  {
    icon: Search,
    n: "2 · Exploratory SQL",
    desc: "Isolate each hypothesised churn driver as its own SQL query before combining them.",
    script: "02 through 08",
  },
  {
    icon: FlaskConical,
    n: "3 · Statistical Validation",
    desc: "Prove the contract-churn relationship is not coincidence. Chi-Square rejects the null at p < 5.86 × 10⁻²⁵⁸.",
    script: "09_stats_chi_square.py",
  },
  {
    icon: Brain,
    n: "4 · Predictive Modelling",
    desc: "Train a logistic-regression classifier so churn risk can be scored per customer, not just per segment.",
    script: "10_ml_logistic_regression.py",
  },
];

export default function TelcoMethodPage() {
  return (
    <div className="pf-page">
      <div className="pf-shell">
        <TelcoSubNav active="method" />
        <section className="pj-hero-head" style={{ marginTop: 28 }}>
          <Badge tone="violet" style={{ marginBottom: 16 }}>
            Artifact T4 · Methodology
          </Badge>
          <h1
            className="pf-page-title"
            style={{ fontSize: "clamp(30px,3.2vw,46px)" }}
          >
            Raw data in, recommendations out.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 680 }}>
            The whole pipeline in one diagram, so a reviewer sees the method,
            not just the results. Every node maps to a script. Hover a stage
            to trace what feeds it and what it produces.
          </p>
        </section>

        <section className="pj-section" style={{ marginTop: 30 }}>
          <DiagramShell title="Analysis pipeline">
            <FlowCanvas config={PIPELINE} />
          </DiagramShell>
        </section>

        <section className="pj-section">
          <Eyebrow style={{ marginBottom: 8 }}>Each phase, in one sentence</Eyebrow>
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
              <b>Descriptive, then validated, then predictive.</b> Every
              finding passes three gates: an SQL query surfaces the pattern,
              Chi-Square proves it is not random, and the model scores
              individual customers. Skipping the statistical gate is the
              difference between noticing a pattern and defending a decision.
            </p>
          </div>
        </section>

        <Link href="/work/telco-churn/doc" className="pj-next">
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
