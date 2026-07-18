import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Brain,
  Crosshair,
  GitCommitHorizontal,
  Wrench,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SlaSubNav } from "@/components/work/sla/SlaSubNav";
import { DiagramShell } from "@/components/work/fiitco/diagrams/DiagramShell";
import { FlowCanvas } from "@/components/work/fiitco/diagrams/FlowCanvas";
import type { FlowConfig } from "@/components/work/fiitco/diagrams/types";

export const metadata = {
  title: "SLA · Methodology (S4) | David Ezieshi",
  description:
    "The eight-phase pipeline from raw tickets to a capacity-aware escalation plan, one stage per notebook phase.",
};

const PIPELINE: FlowConfig = {
  unit: { NW: 166, NH: 66, HG: 60, VG: 32 },
  legend: [
    ["authed", "Input"],
    ["db", "Prepared data"],
    ["good", "Analysis"],
    ["form", "Validation"],
    ["admin", "Model step"],
    ["actor", "Output"],
  ],
  groups: [
    { label: "Foundation", members: ["p1", "sla"] },
    { label: "Diagnose", members: ["eda", "chi", "tt"] },
    { label: "Model", members: ["m1", "m2", "m3"] },
    { label: "Optimize · Deploy", members: ["sim", "shift", "dash"] },
  ],
  nodes: [
    { id: "raw", c: 0, r: 3, label: "Raw tickets", tone: "authed", sub: "8,469 × 17" },
    { id: "p1", c: 1, r: 3, label: "P1 Infer creation, clean", tone: "db" },
    { id: "sla", c: 2, r: 3, label: "P1 SLA breach logic", tone: "db", sub: "targets by priority" },
    { id: "eda", c: 3, r: 1, label: "P2 EDA by type/channel", tone: "good" },
    { id: "chi", c: 3, r: 3, label: "P3 Chi-square", tone: "form", sub: "p < 0.05" },
    { id: "tt", c: 3, r: 5, label: "P3 Welch t-test", tone: "form" },
    { id: "m1", c: 4, r: 2, label: "P4 One-hot encode", tone: "admin" },
    { id: "m2", c: 4, r: 3, label: "P4 80/20 split", tone: "admin", sub: "seed 42" },
    { id: "m3", c: 4, r: 4, label: "P4 Random Forest", tone: "admin", sub: "balanced weights" },
    { id: "sim", c: 5, r: 1, label: "P5 Sniper simulation", tone: "good", sub: "capacity sweep" },
    { id: "shift", c: 5, r: 3, label: "P6 Shift analysis", tone: "good", sub: "risk by hour" },
    { id: "dash", c: 5, r: 5, label: "P7 Command center", tone: "actor" },
    { id: "rec", c: 6, r: 3, label: "P8 Recommendations", tone: "actor", sub: "3 actions" },
  ],
  edges: [
    { from: "raw", to: "p1" },
    { from: "p1", to: "sla" },
    { from: "sla", to: "eda" },
    { from: "sla", to: "chi" },
    { from: "sla", to: "tt" },
    { from: "eda", to: "chi" },
    { from: "chi", to: "m1" },
    { from: "sla", to: "m1" },
    { from: "m1", to: "m2" },
    { from: "m2", to: "m3" },
    { from: "m3", to: "sim" },
    { from: "m3", to: "shift" },
    { from: "sim", to: "dash" },
    { from: "shift", to: "dash" },
    { from: "dash", to: "rec" },
    { from: "sim", to: "rec" },
    { from: "shift", to: "rec" },
  ],
};

const PHASES = [
  {
    icon: Wrench,
    n: "0 → 1 · Foundation",
    desc: "Infer a valid creation time, clean impossible durations, and derive per-priority SLA targets so a breach can be defined at all.",
    script: "Phase 0 → 1",
  },
  {
    icon: Activity,
    n: "2 → 3 · Diagnose & validate",
    desc: "EDA locates the loss; chi-square and a Welch t-test prove the priority effect is real, not noise.",
    script: "Phase 2 → 3",
  },
  {
    icon: Brain,
    n: "4 · Predictive model",
    desc: "Encode features, split 80/20, train a Random Forest with balanced weights against a logistic-regression baseline.",
    script: "Phase 4",
  },
  {
    icon: Crosshair,
    n: "5 → 8 · Optimize & deploy",
    desc: "Sweep escalation capacity, staff to the risk hour, and package it as a command center plus three recommendations.",
    script: "Phase 5 → 8",
  },
];

export default function SlaMethodPage() {
  return (
    <div className="pf-page">
      <div className="pf-shell">
        <SlaSubNav active="method" />
        <section className="pj-hero-head" style={{ marginTop: 28 }}>
          <Badge tone="violet" style={{ marginBottom: 16 }}>
            Artifact S4 · Methodology
          </Badge>
          <h1
            className="pf-page-title"
            style={{ fontSize: "clamp(30px,3.2vw,46px)" }}
          >
            Raw tickets in, escalation plan out.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 680 }}>
            The whole pipeline in one diagram, so a reviewer sees the method,
            not just the results. Every node maps to a phase in the notebook.
            Hover a stage to trace what feeds it and what it produces.
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
              <b>Diagnose, validate, then predict.</b> The order is
              deliberate: EDA finds where the money leaks, a statistical test
              proves the pattern is structural, and only then does a model
              score individual tickets. Skipping the validation gate is the
              difference between noticing a pattern and defending a decision
              to leadership.
            </p>
          </div>
        </section>

        <Link href="/work/sla-optimization/doc" className="pj-next">
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
