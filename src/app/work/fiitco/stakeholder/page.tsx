import Link from "next/link";
import { ArrowRight, KeyRound } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FiitSubNav } from "@/components/work/fiitco/FiitSubNav";
import { FigFrame } from "@/components/work/fiitco/FigFrame";

export const metadata = {
  title: "FIIT Co. · Stakeholder & RACI (A5) | David Ezieshi",
  description:
    "BA-02 stakeholder register, power/interest grid, RACI matrix, comms cadence, and the post-handover operating model.",
};

type Stakeholder = [string, string, string, string, boolean];

const STAKEHOLDERS: Stakeholder[] = [
  ["S1", "Arden", "Sponsor, owns operational outcomes and sign-off on every deliverable", "Manage Closely", true],
  ["S2", "Jason Battiste", "Founder & Head Coach, brand voice, training philosophy, final aesthetic call", "Manage Closely", true],
  ["S3", "David Ezieshi", "Business Analyst, requirements, process design, UAT, admin post-handover", "Continuous", true],
  ["S4", "Claude", "Development & design partner, builds both apps against the BA specs", "Continuous", true],
  ["S5", "Instructor Team", "~12 trainers, end users of the CMT; team-UAT participants", "Keep Informed", false],
  ["S6", "Members & Community", "End users of the public site, guest-pass, and referral flow", "Monitor", false],
  ["S7", "GBC Co-op Coordinator", "Academic oversight for the placement engagement", "Keep Satisfied", false],
  ["S8", "External Vendors", "MindBody, Trainerize, Vercel, Convex, constrain API & integration", "Monitor", false],
];

const RACI_COLS = ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8"];

const RACI: [string, string[]][] = [
  ["BA-01 Charter", ["A", "C", "R", "I", "I", "", "I", ""]],
  ["BA-02 Stakeholder Register", ["C", "C", "AR", "I", "I", "", "I", ""]],
  ["BA-03 Business Requirements Doc", ["A", "C", "R", "C", "C", "", "I", ""]],
  ["BA-04 Process Design (BPMN)", ["C", "C", "AR", "C", "C", "", "I", ""]],
  ["BA-05 Squarespace UAT (diagnostic)", ["A", "I", "R", "", "", "C", "I", ""]],
  ["BA-06 Class Management Tool spec", ["A", "C", "R", "C", "C", "", "I", ""]],
  ["BA-07 UAT Plan & Test Cases", ["A", "I", "R", "C", "R", "", "I", ""]],
  ["BA-10 User Story Backlog", ["C", "C", "AR", "C", "C", "", "I", ""]],
  ["BA-12 Requirements Traceability Matrix", ["I", "I", "AR", "I", "", "", "I", ""]],
  ["BA-13 Vendor Comparison Matrix", ["A", "C", "R", "", "", "", "I", "C"]],
  ["BA-14 Customer Website spec", ["A", "C", "R", "C", "", "C", "I", ""]],
  ["BA-16 Closure Report", ["A", "C", "R", "I", "I", "", "I", ""]],
  ["Class Management Tool, build & deploy", ["A", "I", "C", "R", "", "", "", "I"]],
  ["Customer Website, build & deploy", ["A", "C", "C", "R", "", "I", "", "I"]],
  ["Ongoing platform administration", ["A", "I", "R", "I", "I", "", "", ""]],
];

const CADENCE: [string, string, string, string][] = [
  ["Weekly sponsor sync", "30 min", "S1 · S3", "Deliverable status, RAID review, sign-off asks"],
  ["Bi-weekly executive review", "45 min", "S1 · S2 · S3", "Brand + roadmap decisions requiring the Founder"],
  ["Ad-hoc build sessions", "varies", "S3 · S4", "Requirements clarification, spec iteration"],
  ["Team UAT window", "1 week", "S3 · S5 · S1", "Instructor validation of the CMT"],
  ["Academic checkpoints", "per calendar", "S3 · S7", "Coursework artefact review"],
];

const cell = (v: string) => (v === "AR" ? "A/R" : v || "·");

export default function FiitStakeholderPage() {
  return (
    <div className="pf-page fx-wide">
      <div className="pf-shell">
        <FiitSubNav active="stakeholder" />

        <section className="pj-hero-head" style={{ marginTop: 28 }}>
          <Badge tone="violet" style={{ marginBottom: 16 }}>
            Artifact A5 · Stakeholder Map &amp; RACI
          </Badge>
          <h1 className="pf-page-title" style={{ fontSize: "clamp(30px,3.2vw,46px)" }}>
            Who mattered, and who owned what.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 680 }}>
            BA-02. Eight stakeholders, plotted by power and interest, with one
            accountable owner for every deliverable, the register every
            requirement in the RTM traces back to.
          </p>
        </section>

        {/* power / interest grid */}
        <section className="pj-section" style={{ marginTop: 34 }}>
          <Eyebrow style={{ marginBottom: 8 }}>Power / interest grid</Eyebrow>
          <p className="pj-section-sub">
            Engagement strategy follows position: the top-right quadrant is
            managed closely; the rest are kept informed or monitored.
          </p>
          <FigFrame name="power_interest.grid" sub="BA-02 · 8 stakeholders">
            <div className="fig-pad">
              <div className="sk-pigrid">
                <div style={{ gridColumn: 1, gridRow: 1 }}></div>
                <div className="sk-axis-x">
                  <span>Low interest</span>
                  <span>High interest</span>
                </div>
                <div className="sk-axis-y">
                  <span>High power</span>
                  <span>Low power</span>
                </div>
                <div className="sk-quad sk-top sk-left" style={{ gridColumn: 2, gridRow: 2 }}>
                  <span className="sk-quad-lbl">Keep satisfied</span>
                </div>
                <div className="sk-quad hot sk-top" style={{ gridColumn: 3, gridRow: 2 }}>
                  <span className="sk-quad-lbl">Manage closely</span>
                  {STAKEHOLDERS.filter(
                    (s) => s[3] === "Manage Closely" || s[3] === "Continuous"
                  ).map((s) => (
                    <span className="sk-chip" key={s[0]}>
                      <b>{s[0]}</b>
                      {s[1]}
                    </span>
                  ))}
                </div>
                <div className="sk-quad sk-left" style={{ gridColumn: 2, gridRow: 3 }}>
                  <span className="sk-quad-lbl">Monitor</span>
                  <span className="sk-chip">
                    <b>S8</b>Vendors
                  </span>
                </div>
                <div className="sk-quad" style={{ gridColumn: 3, gridRow: 3 }}>
                  <span className="sk-quad-lbl">Keep informed</span>
                  <span className="sk-chip">
                    <b>S5</b>Instructors
                  </span>
                  <span className="sk-chip">
                    <b>S6</b>Members
                  </span>
                  <span className="sk-chip">
                    <b>S7</b>Coordinator
                  </span>
                </div>
              </div>
            </div>
          </FigFrame>
        </section>

        {/* register */}
        <section className="pj-section">
          <Eyebrow style={{ marginBottom: 8 }}>Stakeholder register</Eyebrow>
          <p className="pj-section-sub">
            Each stakeholder carries an ID used across every downstream artifact.
          </p>
          <div className="sk-reg">
            {STAKEHOLDERS.map(([id, name, role, quad]) => (
              <div className="sk-row" key={id}>
                <span className="sk-row-id">{id}</span>
                <span className="sk-row-name">{name}</span>
                <span className="sk-row-role">{role}</span>
                <span
                  className={
                    "sk-quadtag" +
                    (quad === "Manage Closely" || quad === "Continuous"
                      ? " manage"
                      : "")
                  }
                >
                  {quad}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* RACI */}
        <section className="pj-section">
          <Eyebrow style={{ marginBottom: 8 }}>RACI matrix</Eyebrow>
          <p className="pj-section-sub">
            One row per deliverable, one accountable owner each. Hover a row to
            trace it.
          </p>
          <FigFrame name="raci_matrix" sub="BA-02 · 15 deliverables">
            <div className="fig-scroll">
              <table className="raci">
                <thead>
                  <tr>
                    <th style={{ textAlign: "left" }}>Deliverable</th>
                    {RACI_COLS.map((c) => (
                      <th key={c}>{c}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {RACI.map(([label, cells]) => (
                    <tr key={label}>
                      <th>{label}</th>
                      {cells.map((v, i) => (
                        <td key={i}>
                          <span className={"raci-c " + (v || "")}>{cell(v)}</span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FigFrame>
          <div className="raci-legend">
            <span>
              <b style={{ color: "var(--accent)" }}>R</b> Responsible
            </span>
            <span>
              <b style={{ color: "var(--spark)" }}>A</b> Accountable
            </span>
            <span>
              <b>C</b> Consulted
            </span>
            <span>
              <b style={{ color: "var(--text-faint)" }}>I</b> Informed
            </span>
          </div>
        </section>

        {/* cadence */}
        <section className="pj-section">
          <Eyebrow style={{ marginBottom: 8 }}>Communication cadence</Eyebrow>
          <div className="rd-rows">
            {CADENCE.map(([c, dur, who, purpose]) => (
              <div className="rd-row" key={c}>
                <span className="sk-row-id" style={{ minWidth: 0 }}>
                  {dur}
                </span>
                <span className="rd-row-t">
                  <b>{c}</b>, {purpose}
                </span>
                <span className="rd-status">{who}</span>
              </div>
            ))}
          </div>
        </section>

        {/* post-handover */}
        <section className="pj-section">
          <div
            className="cov-note"
            style={{
              borderColor: "var(--violet-border)",
              background: "var(--violet-fill)",
            }}
          >
            <KeyRound size={18} style={{ color: "var(--accent)" }} aria-hidden />
            <p>
              <b>Post-handover (Apr 14 2026):</b> the RACI collapses.{" "}
              <b>S3 (David Ezieshi)</b> was retained as sole platform
              administrator after Claude and the analyst team rolled off;{" "}
              <b>S1 (Arden)</b> remains sponsor and escalation. Change requests
              are filed via S3 and decided by S1.
            </p>
          </div>
        </section>

        <Link href="/work/fiitco/rtm" className="pj-next">
          <div>
            <span className="pj-next-lbl">Next artifact</span>
            <span className="pj-next-title">Requirements Traceability</span>
          </div>
          <ArrowRight size={20} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
