// Curated document library for A4. Content extracted from the split
// FIIT Documentations- repo (fiitco-docs-md in scratchpad) and shaped
// into DocReader blocks with real content — no lorem ipsum.

import type { Doc } from "./DocReader";

export const DOCS_LIBRARY: Record<
  string,
  {
    id: string;
    group: "Initiate" | "Analyze" | "Design" | "Deliver" | "Close";
    code: string;
    icon: string;
    doc: Doc;
  }
> = {
  charter: {
    id: "charter",
    group: "Initiate",
    code: "BA-01",
    icon: "flag",
    doc: {
      id: "charter",
      code: "BA-01 · Project Charter",
      title: "FIIT Co. — Project Charter",
      meta: [
        ["Client", "FIIT Co."],
        ["Sponsor", "Arden (Gym Manager)"],
        ["Prepared by", "David Ezieshi — Business Analyst"],
        ["Version", "v1.0 · Feb 2026"],
      ],
      live: {
        href: "/work/fiitco/rtm",
        label: "See the full trace →",
        blurb: "Every objective below rolls up through the [[Requirements Traceability Matrix|/work/fiitco/rtm]] with a closure signal for each.",
      },
      blocks: [
        { type: "h2", text: "Purpose" },
        { type: "p", text: "This charter authorises the FIIT Co. Operations Platform engagement — a fixed-scope, three-wave engagement to replace the studio's manual, disconnected operational workflow with a two-application platform (staff portal + public website) on a shared Convex backend." },
        { type: "h2", text: "Business Objectives" },
        {
          type: "table",
          head: ["ID", "Objective", "Success criterion"],
          rows: [
            ["**O1**", "Diagnose the current Squarespace site", "UAT report + defect log + navigation health baseline"],
            ["**O2**", "Deliver an internal Class Management Tool", "Tool deployed to production; team UAT complete; RBAC documented"],
            ["**O3**", "Recommend a client-tracking platform", "Vendor comparison + cost-benefit + sponsor sign-off"],
            ["**O4**", "Design and build a customer-facing website", "Website deployed; content inventory + go-live checklist + runbook"],
            ["**O5**", "Document the engagement end-to-end", "Nineteen BA artefacts delivered in a consistent portfolio package"],
          ],
        },
        { type: "h2", text: "Stakeholders" },
        { type: "p", text: "Eight formal stakeholders. See the full stakeholder register and RACI matrix as an interactive artifact." },
        { type: "list", items: [
          "**S1 · Arden** — Sponsor, owns operational outcomes",
          "**S2 · Jason Battiste** — Founder & Head Coach",
          "**S3 · David Ezieshi** — Business Analyst",
          "**S4 · Claude** — Development & Design Partner",
          "**S5 · Instructor Team** — ~12 trainers, end users of the CMT",
          "**S6 · Members & Community** — End users of the public site",
          "**S7 · GBC Co-op Coordinator** — Academic oversight",
          "**S8 · Vendors** — MindBody, Trainerize, Vercel, Convex",
        ] },
        { type: "h2", text: "Scope" },
        { type: "h3", text: "In scope" },
        { type: "list", items: [
          "Staff operations application with role-based access (Admin + Instructor)",
          "Public marketing website (fiitco.ca) with live schedule, trainer bios, blog",
          "Shared Convex backend with 28 tables across 4 domains",
          "UAT execution against 31 test cases",
          "19-document BA artifact package",
        ] },
        { type: "h3", text: "Out of scope" },
        { type: "list", items: [
          "Live MindBody API integration (deferred to Wave 3+)",
          "Mobile-native apps (responsive web only)",
          "WCAG 2.1 AA audit (deferred to Wave 3+)",
          "Data-retention policy formalisation (deferred to Wave 3+)",
        ] },
        { type: "h2", text: "Timeline" },
        { type: "p", text: "Wave 1 (Foundations, ~4 weeks) → Wave 2 (Build + team UAT, ~8 weeks) → Closure. Snapshot April 14, 2026." },
      ],
    },
  },

  exec: {
    id: "exec",
    group: "Initiate",
    code: "BA-05",
    icon: "gauge",
    doc: {
      id: "exec",
      code: "BA-05 · Executive Summary",
      title: "Executive Summary — What shipped",
      meta: [
        ["Author", "David Ezieshi"],
        ["Snapshot", "April 14, 2026 (closure)"],
        ["Length", "One page"],
      ],
      live: {
        href: "/work/fiitco",
        label: "Return to hub →",
        blurb: "This is the one-page distillation of the whole engagement. Every claim below is traced through the [[RTM|/work/fiitco/rtm]] and the [[RAID log|/work/fiitco/raid]].",
      },
      blocks: [
        { type: "h2", text: "Headline" },
        { type: "p", text: "**Four of five Charter Objectives fully met; one partially met.** Zero requirements failed after commit. Zero requirements descoped after commit. Retained as sole platform administrator post-handover." },
        { type: "h2", text: "By the numbers" },
        {
          type: "table",
          head: ["Signal", "Value"],
          rows: [
            ["Charter Objectives committed", "5"],
            ["Charter Objectives Met at closure", "**4 fully · 1 partially** (O4 customer website — MVP live, UAT deferred)"],
            ["Stakeholders formally identified", "8"],
            ["Business Requirements", "8"],
            ["Functional Requirements", "19"],
            ["Non-Functional Requirements", "10"],
            ["Total requirements in RTM", "37"],
            ["User Stories with Given-When-Then acceptance criteria", "19"],
            ["Test Cases authored", "31"],
            ["Requirements Passed at snapshot", "4"],
            ["Requirements In UAT / In Build at snapshot", "31"],
            ["Requirements Failed / Rejected", "**0**"],
            ["BA documents delivered", "19 (BA-01 → BA-19)"],
          ],
        },
        { type: "h2", text: "What shipped to production" },
        { type: "list", items: [
          "Class Management Tool at staff.fiitco.ca — schedule, attendance, lesson library, reporting",
          "Public site at fiitco.ca — brand, trainer bios, live schedule, blog",
          "Shared Convex backend with 28 tables and ~170 functions",
          "Referral flow with link-token attribution",
          "Guest-pass workflow with monthly quota enforcement",
          "Self-serve password reset with PBKDF2 + 15-min single-use tokens",
        ] },
        { type: "h2", text: "What was deferred (and why)" },
        {
          type: "table",
          head: ["Item", "Reason", "Deferred to"],
          rows: [
            ["MindBody two-way sync", "Vendor API risk (R-01)", "Wave 3+"],
            ["Customer-website UAT completion", "Content dependencies (D-02)", "Sponsor-owned, 14 days"],
            ["WCAG 2.1 AA audit (NFR-04)", "Scope + budget", "Wave 3+"],
            ["Data-retention policy (NFR-09)", "Scope + legal review", "Wave 3+"],
            ["Trainerize pilot kickoff (O3)", "Sponsor sign-off pending", "30 days post-closure"],
          ],
        },
        { type: "h2", text: "Post-handover posture" },
        { type: "p", text: "**S3 (David Ezieshi) retained as sole platform administrator** after Claude and the analyst team rolled off. S1 (Arden) remains sponsor and escalation. Change requests filed via S3, decided by S1. RAID items R-05 (Convex usage), R-06 (bus-factor of 1), R-07 (WCAG deferral), D-03 (Trainerize pilot), D-05 (Convex upgrade trigger) all carried into ongoing operations." },
      ],
    },
  },

  brd: {
    id: "brd",
    group: "Analyze",
    code: "BA-03",
    icon: "clipboard-list",
    doc: {
      id: "brd",
      code: "BA-03 · Business Requirements Document",
      title: "Business Requirements Document",
      meta: [
        ["Sponsor", "Arden (Gym Manager)"],
        ["Prepared by", "David Ezieshi"],
        ["Version", "v1.2 · Wave 1"],
      ],
      live: {
        href: "/work/fiitco/rules",
        label: "See the 8 rules →",
        blurb: "Every requirement below is enforced by one or more [[business rules|/work/fiitco/rules]] in the platform.",
      },
      blocks: [
        { type: "h2", text: "Business Objectives" },
        { type: "p", text: "The BRD serves the five Charter objectives. Each Business Requirement below rolls up to a named objective." },
        {
          type: "table",
          head: ["BO", "Objective"],
          rows: [
            ["BO-01", "Deliver an internal Class Management Tool as the operational master record"],
            ["BO-02", "Design and build a customer-facing marketing website"],
            ["BO-03", "Recommend a client-tracking platform aligned to member journey and budget"],
            ["BO-04", "Rebuild the customer-facing website to reflect brand and support first-class discovery, referrals, and guest passes"],
            ["BO-05", "Document the engagement end-to-end as a reusable asset"],
          ],
        },
        { type: "h2", text: "Business Requirements" },
        { type: "p", text: "Business requirements express what the business needs the solution to achieve — without prescribing how. Each requirement is traced from a business objective." },
        {
          type: "table",
          head: ["ID", "Requirement", "Trace"],
          rows: [
            ["BR-01", "Single source of truth for the weekly schedule, instructor assignments, and studio bookings so that conflicts are prevented before publication.", "BO-01"],
            ["BR-02", "Role-based access so Admins manage the operation while Instructors see only their own schedule and roster.", "BO-01"],
            ["BR-03", "Attendance captured at the class in real time — not reconciled after — so the operational record matches the studio.", "BO-01"],
            ["BR-04", "Curated exercise library and lesson-plan builder so programming stays consistent with the FIIT training philosophy.", "BO-01"],
            ["BR-05", "Operations reporting available to Admin on demand — weekly attendance and utilisation.", "BO-01"],
            ["BR-06", "Public site reflects live brand + schedule and supports a referral flow + monthly guest-pass tracking that does not disrupt the MindBody booking experience.", "BO-04"],
            ["BR-07", "Members can refer friends through a trackable link so the studio can attribute sign-ups and reward the referrer.", "BO-04"],
            ["BR-08", "Monthly guest-pass program with front-desk verification so trials convert without manual bookkeeping.", "BO-04"],
          ],
        },
        { type: "h2", text: "Business rules (governance constraints)" },
        { type: "list", items: [
          "**BUS-01** — Only administrators may add, suspend, or remove instructor accounts.",
          "**BUS-02** — Administrators may view and edit all records; instructors may only view other instructors' records read-only.",
          "**BUS-03** — Guest passes reset on the first day of each calendar month.",
          "**BUS-04** — A member referral is considered successful only after the referred person completes their first paid class.",
          "**BUS-05** — Exercise library entries must be categorised by category, subcategory, and tier before use in a lesson plan.",
          "**BUS-06** — A class cannot be scheduled without an assigned instructor.",
          "**BUS-07** — Only administrators may add, suspend, or remove instructor accounts.",
          "**BUS-08** — All pricing, membership structure, and class format information displayed on the customer website must match the canonical pricing sheet maintained by the sponsor.",
        ] },
      ],
    },
  },

  closure: {
    id: "closure",
    group: "Close",
    code: "BA-16",
    icon: "flag-triangle-right",
    doc: {
      id: "closure",
      code: "BA-16 · Closure Report",
      title: "Closure Report",
      meta: [
        ["Author", "David Ezieshi"],
        ["Snapshot", "April 14, 2026"],
        ["Sign-off", "Sponsor (Arden) + BA (S3)"],
      ],
      live: {
        href: "/work/fiitco/raid",
        label: "See the RAID log →",
        blurb: "Every item deferred at closure is carried into the [[RAID log|/work/fiitco/raid]] for ongoing tracking.",
      },
      blocks: [
        { type: "h2", text: "Verdict" },
        { type: "p", text: "**4 of 5 Charter Objectives fully met.** O4 (customer website) partially met — MVP live in production review, UAT deferred to Wave 3+. Zero requirements failed after commit. Zero requirements descoped after commit." },
        { type: "h2", text: "What we shipped" },
        { type: "list", items: [
          "Class Management Tool live at staff.fiitco.ca",
          "Public site live at fiitco.ca",
          "Shared Convex backend — 28 tables, ~170 functions",
          "31 test cases authored, 4 formally Passed at snapshot, 17 In UAT (0 failures), 13 In Build, 2 deferred",
          "19-document BA portfolio (BA-01 through BA-19)",
        ] },
        { type: "h2", text: "Deferred at closure" },
        {
          type: "table",
          head: ["Item", "Owner", "Deferred to"],
          rows: [
            ["MindBody two-way sync", "Wave 3+ scope", "Signed change note"],
            ["Customer-website UAT completion", "Sponsor + Claude", "14 days post-closure"],
            ["WCAG 2.1 AA audit (NFR-04)", "Wave 3+ scope", "TBD"],
            ["Data-retention policy (NFR-09)", "Wave 3+ scope", "TBD"],
            ["Trainerize pilot sign-off (O3)", "Sponsor", "30 days post-closure"],
          ],
        },
        { type: "h2", text: "Post-handover posture" },
        { type: "p", text: "**S3 (David Ezieshi) retained as sole administrator.** S1 (Arden) remains sponsor and escalation. Change requests filed via S3, decided by S1. Five RAID items carried into operations." },
        { type: "h2", text: "Lessons captured" },
        { type: "list", items: [
          "Two-schedule tables (weeklySchedule vs. websiteSchedule) is a design decision to explain up-front — it looks like duplication until you read it.",
          "Vercel edge cache invalidation on CMS publish was the single biggest operational trap (RAID I-02). Runbook + smoke-test now baked in.",
          "Manual deploys — kept intentionally, at this scale. Auto-CI is on the 'when a second developer joins' list.",
          "Sole-admin post-handover carries a bus-factor of 1 (R-06). Sponsor-accepted trade-off, but documented.",
        ] },
      ],
    },
  },
};

export const DOCS_MANIFEST: {
  id: string;
  group: string;
  code: string;
  icon: string;
}[] = Object.values(DOCS_LIBRARY).map((d) => ({
  id: d.id,
  group: d.group,
  code: d.code,
  icon: d.icon,
}));
