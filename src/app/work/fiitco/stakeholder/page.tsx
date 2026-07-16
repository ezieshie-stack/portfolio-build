import Link from "next/link";
import { ArrowRight, KeyRound } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FiitSubNav } from "@/components/work/fiitco/FiitSubNav";

export const metadata = {
  title: "FIIT Co. · Stakeholder & RACI (A5) | David Ezieshi",
  description:
    "BA-02 Stakeholder Register + RACI matrix — 8 stakeholders, 15 deliverables, one accountable owner per row.",
};

type Stakeholder = {
  id: string;
  name: string;
  role: string;
  quadrant:
    | "Manage Closely"
    | "Continuous"
    | "Keep Informed"
    | "Monitor"
    | "Keep Satisfied";
};

const STAKEHOLDERS: Stakeholder[] = [
  { id: "S1", name: "Arden", role: "Sponsor. Owns operational outcomes and sign-off on every deliverable.", quadrant: "Manage Closely" },
  { id: "S2", name: "Jason Battiste", role: "Founder & Head Coach. Brand voice, training philosophy, final aesthetic call.", quadrant: "Manage Closely" },
  { id: "S3", name: "David Ezieshi", role: "Business Analyst. Requirements, process design, UAT, admin post-handover.", quadrant: "Continuous" },
  { id: "S4", name: "Claude", role: "Development & design partner. Builds both apps against the BA specs.", quadrant: "Continuous" },
  { id: "S5", name: "Instructor Team", role: "~12 trainers, end users of the CMT; team-UAT participants.", quadrant: "Keep Informed" },
  { id: "S6", name: "Members & Community", role: "End users of the public site, guest-pass, and referral flow.", quadrant: "Monitor" },
  { id: "S7", name: "GBC Co-op Coordinator", role: "Academic oversight for the placement engagement.", quadrant: "Keep Satisfied" },
  { id: "S8", name: "External Vendors", role: "MindBody, Trainerize, Vercel, Convex — constrain API & integration.", quadrant: "Monitor" },
];

const RACI_COLS = ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8"];

const RACI: [string, string[]][] = [
  ["BA-01 Charter", ["A", "C", "R", "I", "I", "", "I", ""]],
  ["BA-02 Stakeholder Register", ["C", "C", "AR", "I", "I", "", "I", ""]],
  ["BA-03 Business Requirements Doc", ["A", "C", "R", "C", "C", "", "I", ""]],
  ["BA-04 Process Design (BPMN)", ["C", "C", "AR", "C", "C", "", "I", ""]],
  ["BA-05 Squarespace UAT", ["A", "I", "R", "", "", "C", "I", ""]],
  ["BA-06 Class Management Tool spec", ["A", "C", "R", "C", "C", "", "I", ""]],
  ["BA-07 UAT Plan & Test Cases", ["A", "I", "R", "C", "R", "", "I", ""]],
  ["BA-10 User Story Backlog", ["C", "C", "AR", "C", "C", "", "I", ""]],
  ["BA-12 Requirements Traceability", ["I", "I", "AR", "I", "", "", "I", ""]],
  ["BA-13 Vendor Comparison Matrix", ["A", "C", "R", "", "", "", "I", "C"]],
  ["BA-14 Customer Website spec", ["A", "C", "R", "C", "", "C", "I", ""]],
  ["BA-16 Closure Report", ["A", "C", "R", "I", "I", "", "I", ""]],
  ["Class Management Tool build & deploy", ["A", "I", "C", "R", "", "", "", "I"]],
  ["Customer Website build & deploy", ["A", "C", "C", "R", "", "I", "", "I"]],
  ["Ongoing platform administration", ["A", "I", "R", "I", "I", "", "", ""]],
];

const CADENCE = [
  { c: "Weekly sponsor sync", dur: "30 min", who: "S1 · S3", purpose: "Deliverable status, RAID review, sign-off asks" },
  { c: "Bi-weekly executive review", dur: "45 min", who: "S1 · S2 · S3", purpose: "Brand + roadmap decisions requiring the Founder" },
  { c: "Ad-hoc build sessions", dur: "varies", who: "S3 · S4", purpose: "Requirements clarification, spec iteration" },
  { c: "Team UAT window", dur: "1 week", who: "S3 · S5 · S1", purpose: "Instructor validation of the CMT" },
  { c: "Academic checkpoints", dur: "per calendar", who: "S3 · S7", purpose: "Coursework artefact review" },
];

const cell = (v: string) => (v === "AR" ? "A/R" : v || "·");

export default function FiitStakeholderPage() {
  const hot = STAKEHOLDERS.filter(
    (s) => s.quadrant === "Manage Closely" || s.quadrant === "Continuous"
  );
  return (
    <div className="pf-page">
      <div className="pf-shell">
        <FiitSubNav active="stakeholder" />

        <section className="pj-hero-head" style={{ marginTop: 28 }}>
          <Badge tone="violet" style={{ marginBottom: 16 }}>
            Artifact A5 · Stakeholder Map &amp; RACI
          </Badge>
          <h1
            className="pf-page-title"
            style={{ fontSize: "clamp(30px,3.2vw,46px)" }}
          >
            Who mattered, and who owned what.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 680 }}>
            BA-02. Eight stakeholders, plotted by power and interest, with one
            accountable owner for every deliverable — the register every
            requirement in the RTM traces back to.
          </p>
        </section>

        <section className="pj-section" style={{ marginTop: 34 }}>
          <Eyebrow style={{ marginBottom: 8 }}>Power / interest grid</Eyebrow>
          <p className="pj-section-sub">
            Engagement strategy follows position: the top-right quadrant is
            managed closely; the rest are kept informed or monitored.
          </p>
          <div className="sk-pigrid">
            <div className="sk-quad">
              <span className="sk-quad-lbl">Keep satisfied</span>
              <span className="sk-quad-h">High power · Low interest</span>
            </div>
            <div className="sk-quad hot">
              <span className="sk-quad-lbl">Manage closely</span>
              <span className="sk-quad-h">High power · High interest</span>
              {hot.map((s) => (
                <span className="sk-chip" key={s.id}>
                  <b>{s.id}</b>
                  {s.name}
                </span>
              ))}
            </div>
            <div className="sk-quad">
              <span className="sk-quad-lbl">Monitor</span>
              <span className="sk-quad-h">Low power · Low interest</span>
              <span className="sk-chip">
                <b>S8</b>Vendors
              </span>
            </div>
            <div className="sk-quad">
              <span className="sk-quad-lbl">Keep informed</span>
              <span className="sk-quad-h">Low power · High interest</span>
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
        </section>

        <section className="pj-section">
          <Eyebrow style={{ marginBottom: 8 }}>Stakeholder register</Eyebrow>
          <p className="pj-section-sub">
            Each stakeholder carries an ID used across every downstream
            artifact.
          </p>
          <div className="sk-reg">
            {STAKEHOLDERS.map((s) => (
              <div className="sk-row" key={s.id}>
                <span className="sk-row-id">{s.id}</span>
                <span className="sk-row-name">{s.name}</span>
                <span className="sk-row-role">{s.role}</span>
                <span
                  className={`sk-quadtag${
                    s.quadrant === "Manage Closely" || s.quadrant === "Continuous"
                      ? " manage"
                      : ""
                  }`}
                >
                  {s.quadrant}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="pj-section">
          <Eyebrow style={{ marginBottom: 8 }}>RACI matrix</Eyebrow>
          <p className="pj-section-sub">
            One row per deliverable, one accountable owner each.
          </p>
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
                        <span className={`raci-c ${v || ""}`}>{cell(v)}</span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="raci-legend">
            <span>
              <b style={{ color: "var(--accent)" }}>R</b> Responsible
            </span>
            <span>
              <b style={{ color: "var(--spark, #f59e0b)" }}>A</b> Accountable
            </span>
            <span>
              <b>C</b> Consulted
            </span>
            <span>
              <b style={{ color: "var(--text-dim)" }}>I</b> Informed
            </span>
          </div>
        </section>

        <section className="pj-section">
          <Eyebrow style={{ marginBottom: 8 }}>Communication cadence</Eyebrow>
          <div className="rd-rows">
            {CADENCE.map((c) => (
              <div className="rd-row" key={c.c}>
                <span className="rd-row-id">{c.dur}</span>
                <span className="rd-row-t">
                  <b>{c.c}</b> — {c.purpose}
                </span>
                <span className="rd-status">{c.who}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="pj-section">
          <div className="cov-note">
            <KeyRound size={18} aria-hidden />
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
