"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  GitBranch,
  GitCommitHorizontal,
  Rows3,
  ShieldCheck,
  Target,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MetricStat } from "@/components/ui/MetricStat";
import { FiitSubNav } from "@/components/work/fiitco/FiitSubNav";

type Row = {
  obj: "O2" | "O4";
  stakeholder: string;
  br: string;
  text: string;
  status: "done" | "build";
  signal: string;
};

const TRACE: Row[] = [
  { obj: "O2", stakeholder: "S1 Arden + Charter", br: "BR-01", text: "A single source of truth for the weekly schedule, instructor assignments, and studio bookings so conflicts are prevented before publication.", status: "done", signal: "Delivered · in UAT · 0 failures" },
  { obj: "O2", stakeholder: "S1 Arden + S3 BA", br: "BR-02", text: "Role-based access so Admins manage the operation while Instructors see only their own schedule and roster.", status: "done", signal: "Delivered · FR-01/02/03 passed" },
  { obj: "O2", stakeholder: "S5 Instructor Team", br: "BR-03", text: "Attendance captured at the class in real time, not reconciled after the fact, so the record matches the studio.", status: "done", signal: "Delivered · tap-through + revert window" },
  { obj: "O2", stakeholder: "S2 Jason", br: "BR-04", text: "A curated exercise library and lesson-plan builder so programming stays consistent with the FIIT philosophy.", status: "done", signal: "Delivered · library + builder shipped" },
  { obj: "O2", stakeholder: "S1 Arden", br: "BR-05", text: "Operations reporting the Admin can pull without an analyst — weekly attendance and utilisation on demand.", status: "done", signal: "Delivered · weekly report live" },
  { obj: "O4", stakeholder: "S1 Arden + S2 Jason", br: "BR-06", text: "A public site reflecting the live schedule, trainer profiles, and current brand, so prospects see the studio as it operates today.", status: "build", signal: "In build · MVP in production review" },
  { obj: "O4", stakeholder: "S1 Arden", br: "BR-07", text: "Members can refer friends through a trackable link so the studio attributes sign-ups and rewards the referrer.", status: "build", signal: "In build · flow specced · UAT → Wave 3" },
  { obj: "O4", stakeholder: "S1 Arden", br: "BR-08", text: "A monthly guest-pass program with front-desk verification so trials convert without manual bookkeeping.", status: "build", signal: "In build · issuance specced · UAT → Wave 3" },
];

const DIAGNOSTIC = [
  { obj: "O1", title: "Diagnose the current Squarespace site", deliverable: "Retrospective UAT + defect log.", met: "8 defects · 13 recommendations · 82% nav health · Met" },
  { obj: "O3", title: "Recommend a client-tracking platform", deliverable: "Weighted vendor scorecard (BA-13).", met: "Trainerize 4.55/5 · pilot scoped · Met (pending sign-off)" },
  { obj: "O5", title: "Document the engagement end-to-end", deliverable: "Full BA artefact package.", met: "19 documents delivered (BA-01 → BA-19) · Met" },
];

export default function FiitRtmPage() {
  const [filter, setFilter] = useState<"all" | "O2" | "O4">("all");
  const rows = TRACE.filter((r) => filter === "all" || r.obj === filter);

  return (
    <div className="pf-page">
      <div className="pf-shell">
        <FiitSubNav active="rtm" />

        <section className="pj-hero-head" style={{ marginTop: 28 }}>
          <Badge tone="violet" style={{ marginBottom: 16 }}>
            Artifact A6 · Requirements Traceability
          </Badge>
          <h1
            className="pf-page-title"
            style={{ fontSize: "clamp(30px,3.2vw,46px)" }}
          >
            Every requirement traced to a why.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 700 }}>
            BA-12, the sponsor slice. Each row reads Charter Objective → the
            stakeholder who originated the ask → the Business Requirement → the
            closure signal. No orphan requirements; no silent scope creep.
          </p>
        </section>

        <section className="pj-section" style={{ marginTop: 34 }}>
          <Eyebrow style={{ marginBottom: 8 }}>Objective → requirement trace</Eyebrow>
          <p className="pj-section-sub">
            Filter by build objective to isolate its requirement chain.
          </p>
          <div className="rt-filters">
            <button
              type="button"
              className={`rt-filter${filter === "all" ? " on" : ""}`}
              onClick={() => setFilter("all")}
            >
              All (8)
            </button>
            <button
              type="button"
              className={`rt-filter${filter === "O2" ? " on" : ""}`}
              onClick={() => setFilter("O2")}
            >
              O2 · CMT (5)
            </button>
            <button
              type="button"
              className={`rt-filter${filter === "O4" ? " on" : ""}`}
              onClick={() => setFilter("O4")}
            >
              O4 · Website (3)
            </button>
          </div>
          <div className="rt-trace">
            {rows.map((r) => (
              <div className="rt-row" key={r.br}>
                <div>
                  <span className="rt-cell-h">Obj</span>
                  <span className="rt-obj">{r.obj}</span>
                </div>
                <div>
                  <span className="rt-cell-h">Originated by</span>
                  <span className="rt-stake">{r.stakeholder}</span>
                </div>
                <div>
                  <span className="rt-cell-h">Business requirement</span>
                  <span className="rt-br-id">{r.br}</span>
                  <span className="rt-br-txt">{r.text}</span>
                </div>
                <div>
                  <span className="rt-cell-h">Closure signal</span>
                  <span className={`rt-signal-badge ${r.status}`}>
                    {r.status === "done" ? "Delivered" : "In build"}
                  </span>
                  <span className="rt-signal-txt">{r.signal}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="pj-section">
          <Eyebrow style={{ marginBottom: 8 }}>
            Objectives that produced no BRs, by design
          </Eyebrow>
          <p className="pj-section-sub">
            Two objectives were diagnostic or research scopes, declared upfront
            in the Charter; one was documentation. All three traced through the
            RTM as recommendation packages.
          </p>
          <div className="rt-diag">
            {DIAGNOSTIC.map((d) => (
              <div className="rt-diag-card" key={d.obj}>
                <div className="rt-diag-o">{d.obj}</div>
                <div className="rt-diag-t">{d.title}</div>
                <div className="rt-diag-d">{d.deliverable}</div>
                <div className="rt-diag-met">{d.met}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="pj-section">
          <div className="pj-metrics">
            <MetricStat
              value="5"
              label="Charter objectives committed"
              icon={<Target size={22} aria-hidden />}
            />
            <MetricStat
              value="8"
              label="Business requirements traced"
              icon={<GitBranch size={22} aria-hidden />}
            />
            <MetricStat
              value="0"
              label="Requirements failed after commit"
              icon={<ShieldCheck size={22} aria-hidden />}
            />
            <MetricStat
              value="37"
              label="Rows in the full RTM"
              icon={<Rows3 size={22} aria-hidden />}
            />
          </div>
        </section>

        <div className="cov-note">
          <GitCommitHorizontal size={18} aria-hidden />
          <p>
            <b>What this proves:</b> every BR rolls up to a named objective and
            stakeholder (no orphans); objectives with no BRs were diagnostic by
            design (no silent creep); zero requirements failed or were descoped
            after commit. The full BA-12 drops each row through BR → User Story
            → FR/NFR → Test Case → UAT verdict across all 37 rows.
          </p>
        </div>

        <Link href="/work/fiitco/raid" className="pj-next">
          <div>
            <span className="pj-next-lbl">Next artifact</span>
            <span className="pj-next-title">RAID Log</span>
          </div>
          <ArrowRight size={20} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
