"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { ArrowRight, ClipboardList } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { FiitSubNav } from "@/components/work/fiitco/FiitSubNav";

type Row = { id: string; text: ReactNode; cls: string; label: string };
type Risk = { id: string; text: ReactNode; p: number; i: number; score: number; cls: string; label: string };

const band = (s: number) => (s >= 12 ? "high" : s >= 9 ? "mid" : "low");

const RISKS: Risk[] = [
  { id: "R-01", text: <>MindBody API deprecates legacy auth mid-engagement, blocking two-way sync</>, p: 2, i: 4, score: 8, cls: "closed", label: "Transferred" },
  { id: "R-02", text: <>Vercel edge cache serves stale content after CMS publish, causing drift on fiitco.ca</>, p: 4, i: 3, score: 12, cls: "mitigated", label: "Realised → Mitigated" },
  { id: "R-03", text: <>Instructor team fails to complete UAT in the 1-week window due to shift overlap</>, p: 3, i: 3, score: 9, cls: "mitigated", label: "Mitigated" },
  { id: "R-04", text: <>Sponsor unavailable for weekly sign-off (travel), delaying acceptance</>, p: 2, i: 3, score: 6, cls: "closed", label: "Closed" },
  { id: "R-05", text: <>Convex free-tier cap breached at go-live traffic, forcing emergency upgrade</>, p: 2, i: 4, score: 8, cls: "open", label: "Open" },
  { id: "R-06", text: <>Sole-administrator model creates a bus-factor of 1 post-handover</>, p: 3, i: 4, score: 12, cls: "open", label: "Open" },
  { id: "R-07", text: <>WCAG 2.1 AA non-compliance surfaces post-launch (NFR-04 deferred)</>, p: 3, i: 3, score: 9, cls: "open", label: "Open" },
];

const ASSUMPTIONS: Row[] = [
  { id: "A-01", text: <><b>Sponsor has sign-off authority</b> without Board escalation</>, cls: "confirmed", label: "Confirmed" },
  { id: "A-02", text: <><b>Instructors accept a single-tool workflow</b> (no parallel spreadsheets)</>, cls: "confirmed", label: "Confirmed · 4.6/5" },
  { id: "A-03", text: <><b>GBC placement calendar aligns</b> with the Wave-1→2→Closure cadence</>, cls: "confirmed", label: "Confirmed" },
  { id: "A-04", text: <><b>Convex + Vercel free tiers cover</b> build + first 3 months of ops</>, cls: "confirmed", label: "Confirmed · 34%" },
  { id: "A-05", text: <><b>Squarespace has an exportable inventory</b> (needed for O1)</>, cls: "partially", label: "Partially — manual" },
  { id: "A-06", text: <><b>Trainer bios + certs are photograph-ready</b></>, cls: "partially", label: "Partially — 8 of 12" },
];

const ISSUES: Row[] = [
  { id: "I-01", text: <><b>Broken external footer link</b> on the legacy Squarespace site, surfaced in Scope 1 UAT</>, cls: "closed", label: "Wave 1" },
  { id: "I-02", text: <><b>Stale Vercel edge cache</b> served ~24h-old schedule after a mid-week update</>, cls: "closed", label: "Same day" },
  { id: "I-03", text: <><b>N+1 query</b> on the instructor &lsquo;My Classes&rsquo; view, 4.2s vs 2.5s NFR</>, cls: "closed", label: "Wave 2 · p95 830ms" },
  { id: "I-04", text: <><b>Role-based redirect leaked the admin URL</b> to Instructors via 302 flash</>, cls: "closed", label: "Wave 2 · TC-042" },
  { id: "I-05", text: <><b>Referral attribution failed</b> in incognito, moved cookie → link-token</>, cls: "closed", label: "Wave 2 · FR-16" },
];

const DEPS: Row[] = [
  { id: "D-01", text: <><b>CMT go-live</b> ← sponsor sign-off of team UAT</>, cls: "met", label: "Met · Wave 2" },
  { id: "D-02", text: <><b>Customer website go-live</b> ← 4 remaining trainer bios (A-06)</>, cls: "blocked", label: "Blocked — reassigned" },
  { id: "D-03", text: <><b>Trainerize pilot</b> ← sponsor pilot sign-off (O3)</>, cls: "pending", label: "Pending — 30-day clock" },
  { id: "D-04", text: <><b>WCAG 2.1 AA audit</b> ← Wave 3 scoping</>, cls: "pending", label: "Deferred → R-07" },
  { id: "D-05", text: <><b>Convex plan upgrade</b> ← traffic at 70% of free tier</>, cls: "pending", label: "Trigger — at 34%" },
  { id: "D-06", text: <><b>Instructor onboarding</b> ← RBAC role assignments (BR-02)</>, cls: "met", label: "Met — 12 provisioned" },
  { id: "D-07", text: <><b>Public-site publishing</b> ← TipTap CMS + Convex live-content</>, cls: "met", label: "Met — Wave 2" },
];

const CHANGES: Row[] = [
  { id: "C-01", text: <><b>Refer-a-friend promoted to a first-class scope item</b> (BR-07), +3 stories, +2 FRs</>, cls: "met", label: "Approved · Wave 2" },
  { id: "C-02", text: <><b>MindBody two-way sync deferred to Wave 3+</b> on R-01 risk, deep-link fallback (FR-15) added</>, cls: "met", label: "Approved · signed note" },
  { id: "C-03", text: <><b>Front-desk verification added to guest-pass redemption</b> (BR-08), +1 FR, +1 test case</>, cls: "met", label: "Approved · Wave 2" },
];

type TabKey = "risks" | "assumptions" | "issues" | "deps" | "changes";
const TABS: { k: TabKey; label: string; n: number }[] = [
  { k: "risks", label: "Risks", n: RISKS.length },
  { k: "assumptions", label: "Assumptions", n: ASSUMPTIONS.length },
  { k: "issues", label: "Issues", n: ISSUES.length },
  { k: "deps", label: "Dependencies", n: DEPS.length },
  { k: "changes", label: "Changes", n: CHANGES.length },
];

function RowList({ rows }: { rows: Row[] }) {
  return (
    <div className="rd-rows">
      {rows.map((r) => (
        <div className="rd-row" key={r.id}>
          <span className="rd-row-id">{r.id}</span>
          <span className="rd-row-t">{r.text}</span>
          <span className={`rd-status ${r.cls}`}>{r.label}</span>
        </div>
      ))}
    </div>
  );
}

export default function FiitRaidPage() {
  const [tab, setTab] = useState<TabKey>("risks");

  return (
    <div className="pf-page">
      <div className="pf-shell">
        <FiitSubNav active="raid" />

        <section className="pj-hero-head" style={{ marginTop: 28 }}>
          <Badge tone="violet" style={{ marginBottom: 16 }}>
            Artifact A7 · RAID Log
          </Badge>
          <h1
            className="pf-page-title"
            style={{ fontSize: "clamp(30px,3.2vw,46px)" }}
          >
            The operating ledger, not a filed document.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 700 }}>
            BA-15. Risks, assumptions, issues, and dependencies, reviewed in
            every weekly sponsor sync and carried into ongoing administration.
            Snapshot at closure, April 14 2026.
          </p>
        </section>

        <section className="pj-section" style={{ marginTop: 34 }}>
          <div className="rd-tabs">
            {TABS.map((t) => (
              <button
                type="button"
                key={t.k}
                className={`rd-tab${tab === t.k ? " on" : ""}`}
                onClick={() => setTab(t.k)}
              >
                {t.label} <span className="rd-tab-n">{t.n}</span>
              </button>
            ))}
          </div>

          <div className="fig-pad">
            {tab === "risks" && (
              <div className="rd-risks">
                {RISKS.map((r) => (
                  <div className="rd-risk" key={r.id}>
                    <span className="rd-risk-id">{r.id}</span>
                    <span className="rd-risk-t">
                      {r.text}
                      <br />
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: 10.5,
                          color: "var(--text-dim)",
                        }}
                      >
                        P{r.p} × I{r.i}
                      </span>
                    </span>
                    <span className={`rd-score ${band(r.score)}`}>
                      <span className="rd-score-v">{r.score}</span>
                      <span className="rd-score-l">score</span>
                    </span>
                    <span className={`rd-status ${r.cls}`}>{r.label}</span>
                  </div>
                ))}
              </div>
            )}
            {tab === "assumptions" && <RowList rows={ASSUMPTIONS} />}
            {tab === "issues" && <RowList rows={ISSUES} />}
            {tab === "deps" && <RowList rows={DEPS} />}
            {tab === "changes" && <RowList rows={CHANGES} />}
          </div>

          {tab === "risks" && (
            <div className="raci-legend" style={{ marginTop: 14 }}>
              <span>
                <span className="rd-score low" style={{ display: "inline-block", padding: "1px 7px" }}>
                  <b className="rd-score-v" style={{ fontSize: 12 }}>&lt;9</b>
                </span>{" "}
                Low
              </span>
              <span>
                <span className="rd-score mid" style={{ display: "inline-block", padding: "1px 7px" }}>
                  <b className="rd-score-v" style={{ fontSize: 12 }}>9–11</b>
                </span>{" "}
                Watch
              </span>
              <span>
                <span className="rd-score high" style={{ display: "inline-block", padding: "1px 7px" }}>
                  <b className="rd-score-v" style={{ fontSize: 12 }}>12+</b>
                </span>{" "}
                Escalate
              </span>
            </div>
          )}
        </section>

        <div className="cov-note">
          <ClipboardList size={18} aria-hidden />
          <p>
            <b>Carried into operations:</b> R-05 Convex usage (monthly check),
            R-06 bus-factor of 1 (sponsor-accepted), R-07 WCAG (Wave 3), D-03
            Trainerize pilot (30-day clock), and D-05 Convex upgrade (trigger
            at 70%) are all still tracked by the sole administrator after
            closure.
          </p>
        </div>

        <Link href="/work/fiitco/diagrams" className="pj-next">
          <div>
            <span className="pj-next-lbl">Next artifact</span>
            <span className="pj-next-title">Diagrams</span>
          </div>
          <ArrowRight size={20} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
