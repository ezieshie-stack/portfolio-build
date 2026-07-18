"use client";

import { useState, type ReactNode } from "react";
import { FigFrame } from "@/components/work/fiitco/FigFrame";

const band = (s: number): "high" | "mid" | "low" =>
  s >= 12 ? "high" : s >= 9 ? "mid" : "low";

type Risk = [string, ReactNode, number, number, number, string, string];
type Row = [string, ReactNode, string, string];

const RISKS: Risk[] = [
  ["R-01", <>MindBody API deprecates legacy auth mid-engagement, blocking two-way sync</>, 2, 4, 8, "closed", "Transferred"],
  ["R-02", <>Vercel edge cache serves stale content after CMS publish, causing drift on fiitco.ca</>, 4, 3, 12, "mitigated", "Realised → Mitigated"],
  ["R-03", <>Instructor team fails to complete UAT in the 1-week window due to shift overlap</>, 3, 3, 9, "mitigated", "Mitigated"],
  ["R-04", <>Sponsor unavailable for weekly sign-off (travel), delaying acceptance</>, 2, 3, 6, "closed", "Closed"],
  ["R-05", <>Convex free-tier cap breached at go-live traffic, forcing emergency upgrade</>, 2, 4, 8, "open", "Open"],
  ["R-06", <>Sole-administrator model creates a bus-factor of 1 post-handover</>, 3, 4, 12, "open", "Open"],
  ["R-07", <>WCAG 2.1 AA non-compliance surfaces post-launch (NFR-04 deferred)</>, 3, 3, 9, "open", "Open"],
];

const ASSUMPTIONS: Row[] = [
  ["A-01", <><b>Sponsor has sign-off authority</b> without Board escalation</>, "confirmed", "Confirmed"],
  ["A-02", <><b>Instructors accept a single-tool workflow</b> (no parallel spreadsheets)</>, "confirmed", "Confirmed · 4.6/5"],
  ["A-03", <><b>GBC placement calendar aligns</b> with the Wave-1→2→Closure cadence</>, "confirmed", "Confirmed"],
  ["A-04", <><b>Convex + Vercel free tiers cover</b> build + first 3 months of ops</>, "confirmed", "Confirmed · 34%"],
  ["A-05", <><b>Squarespace has an exportable inventory</b> (needed for O1)</>, "partially", "Partially, manual"],
  ["A-06", <><b>Trainer bios + certs are photograph-ready</b></>, "partially", "Partially, 8 of 12"],
];

const ISSUES: Row[] = [
  ["I-01", <><b>Broken external footer link</b> on the legacy Squarespace site, surfaced in Scope 1 UAT</>, "closed", "Wave 1"],
  ["I-02", <><b>Stale Vercel edge cache</b> served ~24h-old schedule after a mid-week update</>, "closed", "Same day"],
  ["I-03", <><b>N+1 query</b> on the instructor &lsquo;My Classes&rsquo; view, 4.2s vs 2.5s NFR</>, "closed", "Wave 2 · p95 830ms"],
  ["I-04", <><b>Role-based redirect leaked the admin URL</b> to Instructors via 302 flash</>, "closed", "Wave 2 · TC-042"],
  ["I-05", <><b>Referral attribution failed</b> in incognito, moved cookie → link-token</>, "closed", "Wave 2 · FR-16"],
];

const DEPS: Row[] = [
  ["D-01", <><b>CMT go-live</b> ← sponsor sign-off of team UAT</>, "met", "Met · Wave 2"],
  ["D-02", <><b>Customer website go-live</b> ← 4 remaining trainer bios (A-06)</>, "blocked", "Blocked, reassigned"],
  ["D-03", <><b>Trainerize pilot</b> ← sponsor pilot sign-off (O3)</>, "pending", "Pending, 30-day clock"],
  ["D-04", <><b>WCAG 2.1 AA audit</b> ← Wave 3 scoping</>, "pending", "Deferred → R-07"],
  ["D-05", <><b>Convex plan upgrade</b> ← traffic at 70% of free tier</>, "pending", "Trigger, at 34%"],
  ["D-06", <><b>Instructor onboarding</b> ← RBAC role assignments (BR-02)</>, "met", "Met, 12 provisioned"],
  ["D-07", <><b>Public-site publishing</b> ← TipTap CMS + Convex live-content</>, "met", "Met, Wave 2"],
];

const CHANGES: Row[] = [
  ["C-01", <><b>Refer-a-friend promoted to a first-class scope item</b> (BR-07), +3 stories, +2 FRs</>, "met", "Approved · Wave 2"],
  ["C-02", <><b>MindBody two-way sync deferred to Wave 3+</b> on R-01 risk, deep-link fallback (FR-15) added</>, "met", "Approved · signed note"],
  ["C-03", <><b>Front-desk verification added to guest-pass redemption</b> (BR-08), +1 FR, +1 test case</>, "met", "Approved · Wave 2"],
];

type TabKey = "risks" | "assumptions" | "issues" | "deps" | "changes";
const TABS: [TabKey, string, number][] = [
  ["risks", "Risks", RISKS.length],
  ["assumptions", "Assumptions", ASSUMPTIONS.length],
  ["issues", "Issues", ISSUES.length],
  ["deps", "Dependencies", DEPS.length],
  ["changes", "Changes", CHANGES.length],
];

function rowList(rows: Row[]) {
  return (
    <div className="rd-rows">
      {rows.map(([id, text, cls, label]) => (
        <div className="rd-row" key={id}>
          <span className="rd-row-id">{id}</span>
          <span className="rd-row-t">{text}</span>
          <span className={"rd-status " + cls}>{label}</span>
        </div>
      ))}
    </div>
  );
}

export function RaidClient() {
  const [tab, setTab] = useState<TabKey>("risks");

  return (
    <>
      <div className="rd-tabs">
        {TABS.map(([k, label, n]) => (
          <button
            type="button"
            key={k}
            className={"rd-tab" + (tab === k ? " on" : "")}
            onClick={() => setTab(k)}
          >
            {label} <span className="rd-tab-n">{n}</span>
          </button>
        ))}
      </div>

      <FigFrame name={"raid_log · " + tab} sub="BA-15 · closure snapshot">
        <div className="fig-pad">
          {tab === "risks" && (
            <div className="rd-risks">
              {RISKS.map(([id, text, p, i, score, cls, label]) => (
                <div className="rd-risk" key={id}>
                  <span className="rd-risk-id">{id}</span>
                  <span className="rd-risk-t">
                    {text}
                    <br />
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 10.5,
                        color: "var(--text-dim)",
                      }}
                    >
                      P{p} × I{i}
                    </span>
                  </span>
                  <span className={"rd-score " + band(score)}>
                    <span className="rd-score-v">{score}</span>
                    <span className="rd-score-l">score</span>
                  </span>
                  <span className={"rd-status " + cls}>{label}</span>
                </div>
              ))}
            </div>
          )}
          {tab === "assumptions" && rowList(ASSUMPTIONS)}
          {tab === "issues" && rowList(ISSUES)}
          {tab === "deps" && rowList(DEPS)}
          {tab === "changes" && rowList(CHANGES)}
        </div>
      </FigFrame>

      {tab === "risks" && (
        <div className="raci-legend" style={{ marginTop: 14 }}>
          <span>
            <span
              className="rd-score low"
              style={{ display: "inline-block", padding: "1px 7px" }}
            >
              <b className="rd-score-v" style={{ fontSize: 12 }}>&lt;9</b>
            </span>{" "}
            Low
          </span>
          <span>
            <span
              className="rd-score mid"
              style={{ display: "inline-block", padding: "1px 7px" }}
            >
              <b className="rd-score-v" style={{ fontSize: 12 }}>9–11</b>
            </span>{" "}
            Watch
          </span>
          <span>
            <span
              className="rd-score high"
              style={{ display: "inline-block", padding: "1px 7px" }}
            >
              <b className="rd-score-v" style={{ fontSize: 12 }}>12+</b>
            </span>{" "}
            Escalate
          </span>
        </div>
      )}
    </>
  );
}
