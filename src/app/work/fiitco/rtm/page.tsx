import Link from "next/link";
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
import { RtmClient } from "@/components/work/fiitco/RtmClient";

export const metadata = {
  title: "FIIT Co. · Requirements Traceability (A6) | David Ezieshi",
  description:
    "BA-12 sponsor slice — Charter Objective → Stakeholder → Business Requirement → closure signal.",
};

const DIAGNOSTIC: [string, string, string, string][] = [
  ["O1", "Diagnose the current Squarespace site", "Retrospective UAT + defect log.", "8 defects · 13 recommendations · 82% nav health · Met"],
  ["O3", "Recommend a client-tracking platform", "Weighted vendor scorecard (BA-13).", "Trainerize 4.55/5 · pilot scoped · Met (pending sign-off)"],
  ["O5", "Document the engagement end-to-end", "Full BA artefact package.", "19 documents delivered (BA-01 → BA-19) · Met"],
];

export default function FiitRtmPage() {
  return (
    <div className="pf-page fx-wide">
      <div className="pf-shell">
        <FiitSubNav active="rtm" />

        <section className="pj-hero-head" style={{ marginTop: 28 }}>
          <Badge tone="violet" style={{ marginBottom: 16 }}>
            Artifact A6 · Requirements Traceability
          </Badge>
          <h1 className="pf-page-title" style={{ fontSize: "clamp(30px,3.2vw,46px)" }}>
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
          <RtmClient />
        </section>

        <section className="pj-section">
          <Eyebrow style={{ marginBottom: 8 }}>Objectives that produced no BRs, by design</Eyebrow>
          <p className="pj-section-sub">
            Two objectives were diagnostic or research scopes, declared upfront
            in the Charter; one was documentation. All three traced through the
            RTM as recommendation packages.
          </p>
          <div className="rt-diag">
            {DIAGNOSTIC.map(([o, t, d, met]) => (
              <div className="rt-diag-card" key={o}>
                <div className="rt-diag-o">{o}</div>
                <div className="rt-diag-t">{t}</div>
                <div className="rt-diag-d">{d}</div>
                <div className="rt-diag-met">{met}</div>
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

        <div
          className="cov-note"
          style={{
            borderColor: "var(--violet-border)",
            background: "var(--violet-fill)",
          }}
        >
          <GitCommitHorizontal size={18} style={{ color: "var(--accent)" }} aria-hidden />
          <p>
            <b>What this proves:</b> every BR rolls up to a named objective and
            stakeholder (no orphans); objectives with no BRs were diagnostic by
            design (no silent creep); zero requirements failed or were descoped
            after commit. The full BA-12 drops each row through BR → User Story →
            FR/NFR → Test Case → UAT verdict across all 37 rows.
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
