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

  personas: {
    id: "personas",
    group: "Analyze",
    code: "BA-04",
    icon: "users",
    doc: {
      id: "personas",
      code: "BA-04 · Personas & Journeys",
      title: "Personas & Journey Maps",
      meta: [
        ["Sponsor", "Arden (Gym Manager)"],
        ["Prepared by", "David Ezieshi"],
        ["Version", "v1.0 · Wave 1"],
      ],
      live: {
        href: "/work/fiitco/process",
        label: "See the process models →",
        blurb: "The journeys below are formalised as [[as-is / to-be process maps|/work/fiitco/process]] — one BPMN swimlane per persona interaction.",
      },
      blocks: [
        { type: "h2", text: "Personas" },
        { type: "p", text: "Four operational personas drove the design. Each one is a real role at FIIT Co., with real friction points elicited during Wave 1 interviews." },
        {
          type: "table",
          head: ["ID", "Persona", "Primary need"],
          rows: [
            ["P1", "**Arden — Gym Manager (Admin)**", "See the whole operation on one screen; stop reconciling MindBody + Sheets by hand."],
            ["P2", "**Instructor** (~12 across the team)", "Know their week without asking; capture attendance in real time."],
            ["P3", "**Member**", "Book / rebook without friction; refer friends and see the reward."],
            ["P4", "**Front Desk / Reception**", "Verify guest passes at the door without paper rosters."],
          ],
        },
        { type: "h2", text: "Journey — Member first class" },
        { type: "list", items: [
          "**Discovery** — Instagram or word of mouth",
          "**Landing** — fiitco.ca, checks schedule + trainer bios",
          "**Booking** — deep link to MindBody with the studio's context",
          "**Arrival** — reception recognises them as a new member (P4-01)",
          "**Class** — instructor pre-briefed, warm intro (P2-05)",
          "**Follow-up** — post-class check-in offers next steps",
        ] },
        { type: "h2", text: "Journey — Referral" },
        { type: "list", items: [
          "Member copies personal referral link from their profile",
          "Friend fills the referral form on fiitco.ca",
          "referrals.create captures the link-token attribution",
          "Status = pending until Admin markCompleted after first paid class (BUS-04)",
          "markRewarded fires the credit; referrer sees the reward on their profile",
        ] },
        { type: "h2", text: "Journey — Monthly guest pass" },
        { type: "list", items: [
          "Member submits guest-pass form",
          "guestPasses.monthlyUsage checks quota (BUS-03)",
          "Pass created with status pending",
          "Guest arrives; front desk looks up by phone; verify + redeem",
          "1st of each month: quota resets automatically",
        ] },
      ],
    },
  },

  pdd: {
    id: "pdd",
    group: "Design",
    code: "PDD",
    icon: "layout-template",
    doc: {
      id: "pdd",
      code: "PDD · Product Design Document",
      title: "Product Design Document",
      meta: [
        ["Authors", "David Ezieshi, Lead BA · Emmanuel Ametepe Ofori, UX Analyst"],
        ["Version", "v1.0 Final · April 25, 2026"],
        ["Length", "42 pages"],
      ],
      live: {
        href: "/work/fiitco/data",
        label: "See the ERD →",
        blurb: "The design's data model is explorable as an interactive [[ERD|/work/fiitco/data]].",
      },
      blocks: [
        { type: "h2", text: "Purpose" },
        { type: "p", text: "The Product Design Document translates the BRD into a buildable specification: architecture, data model, screen inventory, and integration surfaces. It is the single reference during Wave 2 build." },
        { type: "h2", text: "Architecture snapshot" },
        { type: "list", items: [
          "**Frontend** — Next.js 15 (App Router) with Server Components for the public site, client-rendered dashboard for staff.",
          "**Backend** — Convex (document-oriented). ~170 functions across queries, mutations, and actions.",
          "**Auth** — Custom PBKDF2 + 32-byte session tokens; no third-party auth broker.",
          "**Deployment** — Vercel (edge cache on public routes; SSR-on-demand for the staff app).",
          "**CMS** — In-app content editor writing to Convex `websitePage` / `websiteBlock` tables with `revalidatePath()` on save.",
        ] },
        { type: "h2", text: "Data model" },
        { type: "p", text: "24 logical entities expand to ~32 physical Convex tables. See the interactive ERD for cardinalities, keys, and BR trace tags." },
        { type: "h2", text: "Screen inventory" },
        {
          type: "table",
          head: ["Surface", "Screens", "Owner"],
          rows: [
            ["Staff app — Class Management", "Weekly schedule, Attendance, Lesson library, Reports, Users, Availability queue", "Admin + Instructor"],
            ["Staff app — Ops", "Referral queue, Guest-pass queue, RAID log", "Admin only"],
            ["Public site", "Home, Schedule, Trainers, Blog, Referral form, Guest-pass form, Contact", "Anonymous + Member"],
          ],
        },
        { type: "h2", text: "Integration surfaces" },
        { type: "list", items: [
          "**MindBody deep-link** — no API sync yet (R-01). Public schedule shows FIIT-authored copy with a Book on MindBody deep-link.",
          "**Trainerize** — recommended but not integrated (O3, D-03).",
          "**Payments** — external system of record; not built.",
        ] },
      ],
    },
  },

  stories: {
    id: "stories",
    group: "Design",
    code: "BA-10",
    icon: "list-checks",
    doc: {
      id: "stories",
      code: "BA-10 · User Story Backlog",
      title: "User Story Backlog",
      meta: [
        ["Prepared by", "David Ezieshi"],
        ["Version", "v1.1 · Wave 2 build"],
        ["Length", "19 stories with Given/When/Then acceptance criteria"],
      ],
      live: {
        href: "/work/fiitco/rules",
        label: "See the business rules →",
        blurb: "The acceptance criteria below encode the [[8 business rules|/work/fiitco/rules]] as a decision table.",
      },
      blocks: [
        { type: "h2", text: "Backlog snapshot" },
        { type: "p", text: "19 user stories cover the two-application scope. Each story has a Given / When / Then acceptance criterion set that traces to a Business Requirement (BR-01 … BR-08) and a Business Rule (BUS-01 … BUS-08)." },
        {
          type: "table",
          head: ["ID", "Story", "Traces"],
          rows: [
            ["**US-01**", "As Arden, I want to see the weekly schedule at a glance so I can spot conflicts before they hit the studio.", "BR-01, BUS-06"],
            ["**US-02**", "As Arden, I want to add / suspend / remove instructor accounts so access matches the current team.", "BR-02, BUS-01"],
            ["**US-03**", "As an Instructor, I want to see only my classes and roster so I focus on my week without distraction.", "BR-02, BUS-02"],
            ["**US-04**", "As an Instructor, I want to mark attendance during class on my phone so I don't reconcile later.", "BR-03"],
            ["**US-05**", "As Arden, I want a curated exercise library so lesson plans stay on-philosophy.", "BR-04, BUS-05"],
            ["**US-06**", "As an Instructor, I want to build lesson plans from the library so I don't reinvent from memory.", "BR-04"],
            ["**US-07**", "As Arden, I want to see weekly attendance & utilisation so I can act while it still matters.", "BR-05"],
            ["**US-08**", "As a Member, I want the public site to show the real live schedule so I don't turn up to a moved class.", "BR-06"],
            ["**US-09**", "As a Member, I want a personal referral link so my friend's booking counts back to me.", "BR-07, BUS-04"],
            ["**US-10**", "As a Member, I want a monthly guest pass I can bring a friend on.", "BR-08, BUS-03"],
          ],
        },
        { type: "h2", text: "Example — Guest pass acceptance criteria (US-10)" },
        { type: "quote", text: "**Given** a Member has not used their guest pass this calendar month · **When** they submit the guest-pass form · **Then** a pass is created with status pending, quota reduced by 1, and the front desk can look it up by the guest's phone number at check-in." },
      ],
    },
  },

  uat: {
    id: "uat",
    group: "Deliver",
    code: "BA-07",
    icon: "shield-check",
    doc: {
      id: "uat",
      code: "BA-07 · UAT Plan & Test Cases",
      title: "UAT Plan & Test Cases",
      meta: [
        ["Prepared by", "David Ezieshi"],
        ["Version", "v1.0 · Wave 2 delivery"],
        ["Snapshot", "31 test cases authored"],
      ],
      live: {
        href: "/work/fiitco/rtm",
        label: "See the closure signals →",
        blurb: "Each test case below rolls up into the [[Traceability Matrix|/work/fiitco/rtm]] as a closure signal — passed / in UAT / in build / deferred.",
      },
      blocks: [
        { type: "h2", text: "Scope" },
        { type: "p", text: "UAT covers both applications (Class Management Tool + public site) at the requirement-satisfaction level. Every functional requirement (FR-01 … FR-19) has ≥ 1 test case; critical rules (BUS-03, BUS-04, BR-01) have concurrency + reset cases." },
        { type: "h2", text: "Case counts" },
        {
          type: "table",
          head: ["Domain", "Cases", "At snapshot"],
          rows: [
            ["Scheduling & conflict prevention", "6", "2 Passed · 4 In UAT"],
            ["RBAC + user management", "5", "1 Passed · 3 In UAT · 1 In build"],
            ["Attendance & reporting", "4", "1 Passed · 3 In UAT"],
            ["Lesson library + planner", "3", "0 · 2 In UAT · 1 In build"],
            ["Public site (schedule, trainers, blog)", "6", "0 · 4 In UAT · 2 In build"],
            ["Referral flow", "3", "0 · 1 In UAT · 2 In build"],
            ["Guest pass + monthly reset", "4", "0 · 4 In build (blocked on Q1 close)"],
            ["**Total**", "**31**", "**4 Passed · 17 In UAT · 13 In build (0 failures)**"],
          ],
        },
        { type: "h2", text: "Exit criteria" },
        { type: "list", items: [
          "All P1 cases Passed OR Deferred with a signed sponsor note.",
          "Zero P1 failures at snapshot.",
          "Every failure has a RAID entry with an owner and a fix ETA.",
          "Sponsor sign-off on the closure snapshot.",
        ] },
      ],
    },
  },

  vendor: {
    id: "vendor",
    group: "Deliver",
    code: "BA-13",
    icon: "scale",
    doc: {
      id: "vendor",
      code: "BA-13 · Vendor Comparison",
      title: "Vendor Comparison Matrix",
      meta: [
        ["Prepared by", "David Ezieshi"],
        ["Version", "v1.0 · Wave 2"],
        ["Scope", "Client-tracking platform (Charter O3)"],
      ],
      blocks: [
        { type: "h2", text: "Purpose" },
        { type: "p", text: "Charter Objective O3 committed to recommending a client-tracking platform. This document compares the three candidates against a weighted rubric of member journey, admin ergonomics, cost, and switching risk." },
        { type: "h2", text: "Rubric" },
        {
          type: "table",
          head: ["Criterion", "Weight", "Rationale"],
          rows: [
            ["Member-facing experience", "25%", "The tool the referred friend will actually see"],
            ["Admin workflow (Arden's time)", "20%", "Every minute Arden spends inside the tool multiplies over the year"],
            ["Pricing at studio scale", "15%", "Per-active-member vs flat-fee vs per-transaction — determines Wave 3 budget"],
            ["Data portability + export", "15%", "Guardrail against vendor lock-in (R-05)"],
            ["Onboarding + support quality", "10%", "How much of a Wave 3 backlog gets absorbed by vendor migration"],
            ["Fit with FIIT training philosophy", "15%", "Programming, progressions, and check-ins must fit"],
          ],
        },
        { type: "h2", text: "Verdict" },
        { type: "p", text: "**Trainerize** ranked highest on member journey + programming fit. **MindBody** ranked highest on ecosystem depth but weakest on member experience and admin ergonomics. Recommendation: 30-day Trainerize pilot post-closure (D-03) before commit." },
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
