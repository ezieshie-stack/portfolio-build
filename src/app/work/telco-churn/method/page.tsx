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

export const metadata = {
  title: "Telco · Methodology (T4) | David Ezieshi",
  description:
    "The full analysis pipeline from raw CSV to recommendations, one stage per script.",
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

type Node = { id: string; col: number; row: number; label: string; sub?: string; tone: string };

const NODES: Node[] = [
  { id: "raw", col: 0, row: 3, label: "Raw CSV", sub: "7,043 × 21", tone: "input" },
  { id: "p1", col: 1, row: 3, label: "01 · load to SQLite", tone: "step" },
  { id: "db", col: 2, row: 3, label: "churn.db", sub: "customers table", tone: "db" },
  { id: "q2", col: 3, row: 0, label: "02 Contract", tone: "sql" },
  { id: "q3", col: 3, row: 1, label: "03 Payment", tone: "sql" },
  { id: "q4", col: 3, row: 2, label: "04 Contract × Pay", tone: "sql" },
  { id: "q5", col: 3, row: 3, label: "05 Tenure band", tone: "sql" },
  { id: "q6", col: 3, row: 4, label: "06 Tenure × Contract", tone: "sql" },
  { id: "q7", col: 3, row: 5, label: "07 Internet × Support", tone: "sql" },
  { id: "q8", col: 3, row: 6, label: "08 Charges band", tone: "sql" },
  { id: "chi", col: 4, row: 3, label: "09 Chi-Square", sub: "p = 5.86e-258", tone: "valid" },
  { id: "m1", col: 5, row: 1, label: "Drop id + leakage", tone: "model" },
  { id: "m2", col: 5, row: 2, label: "One-hot encode", tone: "model" },
  { id: "m3", col: 5, row: 3, label: "80/20 split", sub: "seed 42", tone: "model" },
  { id: "m4", col: 5, row: 4, label: "Logistic Regression", tone: "model" },
  { id: "m5", col: 5, row: 5, label: "Evaluate", sub: "ROC · CM · coef", tone: "model" },
  { id: "o1", col: 6, row: 2, label: "metrics.txt", sub: "AUC 0.86", tone: "output" },
  { id: "o3", col: 6, row: 4, label: "Recommendations", sub: "3 programs", tone: "output" },
];

const NW = 158;
const NH = 66;
const HG = 44;
const VG = 22;

export default function TelcoMethodPage() {
  const cols = Math.max(...NODES.map((n) => n.col)) + 1;
  const rows = Math.max(...NODES.map((n) => n.row)) + 1;
  const w = cols * NW + (cols - 1) * HG + 40;
  const h = rows * NH + (rows - 1) * VG + 40;

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
            not just the results. Every node maps to a script in the repo.
          </p>
        </section>

        <section className="pj-section" style={{ marginTop: 30 }}>
          <DiagramShell title="Analysis pipeline · CSV → SQLite → SQL → Chi² → Model → Outputs">
          <div className="pj-flow-wrap">
            <svg
              className="pj-flow"
              viewBox={`0 0 ${w} ${h}`}
              width={w}
              height={h}
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <marker
                  id="arrow"
                  viewBox="0 0 10 10"
                  refX="9"
                  refY="5"
                  markerWidth="7"
                  markerHeight="7"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
                </marker>
              </defs>
              {/* edges */}
              {(
                [
                  ["raw", "p1"],
                  ["p1", "db"],
                  ...["q2", "q3", "q4", "q5", "q6", "q7", "q8"].map((q) => ["db", q]),
                  ...["q2", "q3", "q4", "q5", "q6", "q7", "q8"].map((q) => [q, "chi"]),
                  ["chi", "m1"],
                  ["db", "m1"],
                  ["m1", "m2"],
                  ["m2", "m3"],
                  ["m3", "m4"],
                  ["m4", "m5"],
                  ["m5", "o1"],
                  ["m5", "o3"],
                ] as [string, string][]
              ).map(([a, b], i) => {
                const na = NODES.find((n) => n.id === a);
                const nb = NODES.find((n) => n.id === b);
                if (!na || !nb) return null;
                const x1 = 20 + na.col * (NW + HG) + NW;
                const y1 = 20 + na.row * (NH + VG) + NH / 2;
                const x2 = 20 + nb.col * (NW + HG);
                const y2 = 20 + nb.row * (NH + VG) + NH / 2;
                return (
                  <path
                    key={i}
                    d={`M${x1},${y1} C${x1 + 20},${y1} ${x2 - 20},${y2} ${x2},${y2}`}
                    fill="none"
                    stroke="currentColor"
                    strokeOpacity={0.25}
                    strokeWidth={1.2}
                    markerEnd="url(#arrow)"
                  />
                );
              })}
              {/* nodes */}
              {NODES.map((n) => {
                const x = 20 + n.col * (NW + HG);
                const y = 20 + n.row * (NH + VG);
                return (
                  <g key={n.id} transform={`translate(${x} ${y})`}>
                    <rect
                      width={NW}
                      height={NH}
                      rx={10}
                      className={`pj-flow-node tone-${n.tone}`}
                    />
                    <text x={NW / 2} y={NH / 2 - (n.sub ? 6 : -3)} textAnchor="middle" className="pj-flow-lbl">
                      {n.label}
                    </text>
                    {n.sub && (
                      <text x={NW / 2} y={NH / 2 + 14} textAnchor="middle" className="pj-flow-sub">
                        {n.sub}
                      </text>
                    )}
                  </g>
                );
              })}
            </svg>
          </div>
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
          <div className="cov-note">
            <GitCommitHorizontal size={18} aria-hidden />
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
