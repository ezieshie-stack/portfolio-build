import Link from "next/link";
import { Activity, ArrowRight, Brain, Crosshair, GitCommitHorizontal, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SlaSubNav } from "@/components/work/sla/SlaSubNav";

export const metadata = { title: "SLA · Methodology (S4) | David Ezieshi" };

const PHASES = [
  { icon: Wrench, t: "0–1 · Foundation", d: "Infer a valid creation time, clean impossible durations, and derive per-priority SLA targets so a breach can be defined at all.", s: "Phase 0 to 1" },
  { icon: Activity, t: "2–3 · Diagnose & validate", d: "EDA locates the loss; chi-square and a Welch t-test prove the priority effect is real, not noise.", s: "Phase 2 to 3" },
  { icon: Brain, t: "4 · Predictive model", d: "Encode features, split 80/20, train a Random Forest with balanced weights against a logistic-regression baseline.", s: "Phase 4" },
  { icon: Crosshair, t: "5–8 · Optimize & deploy", d: "Sweep escalation capacity, staff to the risk hour, and package it as a command center plus three recommendations.", s: "Phase 5 to 8" },
];

const PHASE_LIST = [
  { code: "P0", name: "Bootstrap", desc: "Requirements, data audit, guardrails" },
  { code: "P1", name: "Foundation", desc: "Infer creation time, derive SLA_Target_Hours + Is_SLA_Breach" },
  { code: "P2", name: "EDA", desc: "Breach rate by type / channel / priority" },
  { code: "P3", name: "Statistical validation", desc: "Chi-square + Welch t-test" },
  { code: "P4", name: "Model", desc: "One-hot encode → 80/20 split → RF + LR baseline" },
  { code: "P5", name: "Simulation", desc: "Sniper capacity sweep — cost vs. review load" },
  { code: "P6", name: "Shift analysis", desc: "Risk-by-hour, hand-over gap at 22:00" },
  { code: "P7", name: "Command center", desc: "Streamlit tool the escalation lead runs each morning" },
  { code: "P8", name: "Recommendations", desc: "Reset Critical SLA, deploy score, overlap shifts" },
];

export default function SlaMethodPage() {
  return (
    <div className="pf-page">
      <div className="pf-shell">
        <SlaSubNav active="method" />
        <section className="pj-hero-head" style={{ marginTop: 28 }}>
          <Badge tone="violet" style={{ marginBottom: 16 }}>Artifact S4 · Methodology</Badge>
          <h1 className="pf-page-title" style={{ fontSize: "clamp(30px,3.2vw,46px)" }}>
            Raw tickets in, escalation plan out.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 700 }}>
            The whole pipeline in eight phases, so a reviewer sees the method, not just the
            results. Every phase maps to a section of the notebook.
          </p>
        </section>

        <section className="pj-section" style={{ marginTop: 30 }}>
          <Eyebrow style={{ marginBottom: 8 }}>The 9 phases</Eyebrow>
          <div className="mv-seg">
            {PHASE_LIST.map((p) => (
              <div key={p.code} className="mv-seg-row" style={{ gridTemplateColumns: "60px 200px 1fr" }}>
                <code style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--accent-text)" }}>{p.code}</code>
                <span className="mv-seg-name">{p.name}</span>
                <span className="mv-genre-why">{p.desc}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="pj-section">
          <Eyebrow style={{ marginBottom: 8 }}>Each phase group, in one sentence</Eyebrow>
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
              <b>Diagnose, validate, then predict.</b> The order is deliberate: EDA finds where the
              money leaks, a statistical test proves the pattern is structural, and only then does
              a model score individual tickets. Skipping the validation gate is the difference
              between noticing a pattern and defending a decision to leadership.
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
