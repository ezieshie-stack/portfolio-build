export type BpmnNodeType = "event" | "task" | "gateway";
export type BpmnTone = "normal" | "pain" | "auto" | "good";

export type BpmnNode = {
  id: string;
  type: BpmnNodeType;
  kind?: "start" | "end";
  col: number;
  lane: number;
  label: string;
  tone?: BpmnTone;
};

export type BpmnFlow = {
  from: string;
  to: string;
  label?: string;
};

export type BpmnModel = {
  caption: string;
  lanes: string[];
  nodes: BpmnNode[];
  flows: BpmnFlow[];
};

export type SubProcess = {
  key: string;
  n: string;
  name: string;
  desc: string;
  asis: BpmnModel;
  tobe: BpmnModel;
};

export const SUBPROCS: SubProcess[] = [
  {
    key: "sched",
    n: "P1",
    name: "Class scheduling",
    desc: "Building next week's class slots and getting them to the team.",
    asis: {
      caption:
        "Two systems of record, a spreadsheet and MindBody, drift out of sync; scheduling depends on synchronous chat replies; the team has no single live source. Arden spends roughly 90 minutes a week on the loop.",
      lanes: ["Arden", "Instructors"],
      nodes: [
        { id: "s", type: "event", kind: "start", col: 0, lane: 0, label: "Schedule due" },
        { id: "a1", type: "task", col: 1, lane: 0, label: "Open MindBody + Sheets", tone: "pain" },
        { id: "a2", type: "task", col: 2, lane: 0, label: "Draft slots in spreadsheet", tone: "pain" },
        { id: "a3", type: "task", col: 3, lane: 0, label: "Message instructors", tone: "pain" },
        { id: "a4", type: "task", col: 4, lane: 1, label: "Reply with availability" },
        { id: "a5", type: "task", col: 5, lane: 0, label: "Re-enter into MindBody", tone: "pain" },
        { id: "a6", type: "task", col: 6, lane: 0, label: "Email screenshot to team", tone: "pain" },
        { id: "a7", type: "task", col: 7, lane: 1, label: "Save screenshot on phone" },
        { id: "e", type: "event", kind: "end", col: 8, lane: 1, label: "Schedule shared" },
      ],
      flows: [
        { from: "s", to: "a1" },
        { from: "a1", to: "a2" },
        { from: "a2", to: "a3" },
        { from: "a3", to: "a4" },
        { from: "a4", to: "a5" },
        { from: "a5", to: "a6" },
        { from: "a6", to: "a7" },
        { from: "a7", to: "e" },
      ],
    },
    tobe: {
      caption:
        "One source of truth, zero manual re-entry, and conflict prevention at the moment of save. Arden's weekly scheduling time drops from ninety minutes to under twenty.",
      lanes: ["Arden", "Class Mgmt Tool", "Instructors"],
      nodes: [
        { id: "s", type: "event", kind: "start", col: 0, lane: 0, label: "Schedule due" },
        { id: "b1", type: "task", col: 1, lane: 0, label: "Create classes in tool", tone: "auto" },
        { id: "g", type: "gateway", col: 2, lane: 1, label: "Conflict-free?" },
        { id: "b2", type: "task", col: 3, lane: 1, label: "Publish to team on save", tone: "auto" },
        { id: "c1", type: "task", col: 3, lane: 0, label: "Suggest next valid slot", tone: "auto" },
        { id: "e2", type: "event", kind: "end", col: 4, lane: 0, label: "Re-slotted, no clash" },
        { id: "b3", type: "task", col: 4, lane: 2, label: "See week in My Classes", tone: "good" },
        { id: "b4", type: "task", col: 5, lane: 2, label: "Raise change request" },
        { id: "b5", type: "task", col: 6, lane: 0, label: "Approve / adjust inline", tone: "good" },
        { id: "e", type: "event", kind: "end", col: 7, lane: 0, label: "Schedule published" },
      ],
      flows: [
        { from: "s", to: "b1" },
        { from: "b1", to: "g" },
        { from: "g", to: "b2", label: "pass" },
        { from: "g", to: "c1", label: "conflict" },
        { from: "c1", to: "e2" },
        { from: "b2", to: "b3" },
        { from: "b3", to: "b4" },
        { from: "b4", to: "b5" },
        { from: "b5", to: "e" },
      ],
    },
  },
  {
    key: "attend",
    n: "P2",
    name: "Attendance & check-in",
    desc: "Capturing who actually showed up to each class.",
    asis: {
      caption:
        "Data entry happens twice; handwriting is illegible on roughly one sheet in ten; no-show tracking is effectively absent; month-end reconciliation takes half a day and still misses entries.",
      lanes: ["Instructor", "Members", "Arden"],
      nodes: [
        { id: "s", type: "event", kind: "start", col: 0, lane: 0, label: "Class starts" },
        { id: "a1", type: "task", col: 1, lane: 0, label: "Open paper sign-in sheet", tone: "pain" },
        { id: "a2", type: "task", col: 2, lane: 1, label: "Members write names", tone: "pain" },
        { id: "a3", type: "task", col: 3, lane: 0, label: "Confirm walk-ins (memory)", tone: "pain" },
        { id: "a4", type: "task", col: 4, lane: 0, label: "Photo sheet, text Arden", tone: "pain" },
        { id: "a5", type: "task", col: 5, lane: 2, label: "Enter counts in Sheets", tone: "pain" },
        { id: "a6", type: "task", col: 6, lane: 2, label: "Reconcile monthly", tone: "pain" },
        { id: "e", type: "event", kind: "end", col: 7, lane: 2, label: "Attendance filed" },
      ],
      flows: [
        { from: "s", to: "a1" },
        { from: "a1", to: "a2" },
        { from: "a2", to: "a3" },
        { from: "a3", to: "a4" },
        { from: "a4", to: "a5" },
        { from: "a5", to: "a6" },
        { from: "a6", to: "e" },
      ],
    },
    tobe: {
      caption:
        "No double entry, no paper, no month-end reconciliation. Attendance flows directly from the instructor's phone into the admin dashboard in real time.",
      lanes: ["Instructor", "Class Mgmt Tool", "Arden"],
      nodes: [
        { id: "s", type: "event", kind: "start", col: 0, lane: 0, label: "Class starts" },
        { id: "b1", type: "task", col: 1, lane: 0, label: "Tap members Present", tone: "auto" },
        { id: "b2", type: "task", col: 2, lane: 1, label: "Auto No-Show after end", tone: "auto" },
        { id: "b3", type: "task", col: 3, lane: 1, label: "Write to real-time DB", tone: "auto" },
        { id: "b4", type: "task", col: 4, lane: 2, label: "Open live weekly report", tone: "good" },
        { id: "e", type: "event", kind: "end", col: 5, lane: 2, label: "Attendance synced" },
      ],
      flows: [
        { from: "s", to: "b1" },
        { from: "b1", to: "b2" },
        { from: "b2", to: "b3" },
        { from: "b3", to: "b4" },
        { from: "b4", to: "e" },
      ],
    },
  },
  {
    key: "lesson",
    n: "P3",
    name: "Lesson plan preparation",
    desc: "How instructors build and share what they teach.",
    asis: {
      caption:
        "Every instructor reinvents plans individually; there is no shared library; Jason's training philosophy is not uniformly reflected; Arden cannot see what is being taught.",
      lanes: ["Instructor", "Arden / Jason"],
      nodes: [
        { id: "s", type: "event", kind: "start", col: 0, lane: 0, label: "Class needs a plan" },
        { id: "a1", type: "task", col: 1, lane: 0, label: "Draft from memory", tone: "pain" },
        { id: "a2", type: "task", col: 2, lane: 0, label: "Search IG / YouTube", tone: "pain" },
        { id: "a3", type: "task", col: 3, lane: 0, label: "Bring private notes", tone: "pain" },
        { id: "a4", type: "task", col: 4, lane: 1, label: "No shared library or QA", tone: "pain" },
        { id: "e", type: "event", kind: "end", col: 5, lane: 1, label: "Fragmented pedagogy" },
      ],
      flows: [
        { from: "s", to: "a1" },
        { from: "a1", to: "a2" },
        { from: "a2", to: "a3" },
        { from: "a3", to: "a4" },
        { from: "a4", to: "e" },
      ],
    },
    tobe: {
      caption:
        "Consistent pedagogy across the team, visible quality assurance for Arden and Jason, reduced prep time, and a training corpus that grows instead of leaving with each instructor.",
      lanes: ["Instructor", "Arden / Jason"],
      nodes: [
        { id: "s", type: "event", kind: "start", col: 0, lane: 0, label: "Class needs a plan" },
        { id: "b1", type: "task", col: 1, lane: 1, label: "Curate exercise library", tone: "auto" },
        { id: "b2", type: "task", col: 2, lane: 0, label: "Pick from library in builder", tone: "auto" },
        { id: "b3", type: "task", col: 3, lane: 0, label: "Save plan to class", tone: "auto" },
        { id: "b4", type: "task", col: 4, lane: 1, label: "Review plans across week", tone: "good" },
        { id: "e", type: "event", kind: "end", col: 5, lane: 0, label: "Growing corpus" },
      ],
      flows: [
        { from: "s", to: "b1" },
        { from: "b1", to: "b2" },
        { from: "b2", to: "b3" },
        { from: "b3", to: "b4" },
        { from: "b4", to: "e" },
      ],
    },
  },
  {
    key: "onboard",
    n: "P4",
    name: "New member onboarding",
    desc: "A prospect's first journey from Instagram to first class.",
    asis: {
      caption:
        "Booking requires account creation before the prospect has even met the studio; the front desk has no profile or history when the member walks in; the first experience feels impersonal.",
      lanes: ["Prospect", "Front Desk", "Instructor"],
      nodes: [
        { id: "s", type: "event", kind: "start", col: 0, lane: 0, label: "Discovered on Instagram" },
        { id: "a1", type: "task", col: 1, lane: 0, label: "Visit Squarespace site" },
        { id: "a2", type: "task", col: 2, lane: 0, label: "Redirected to MindBody", tone: "pain" },
        { id: "a3", type: "task", col: 3, lane: 0, label: "Create acct, waiver, book", tone: "pain" },
        { id: "a4", type: "task", col: 4, lane: 1, label: "Greet with no context", tone: "pain" },
        { id: "a5", type: "task", col: 5, lane: 1, label: "Ask waiver + class" },
        { id: "a6", type: "task", col: 6, lane: 2, label: "Introduce at warm-up" },
        { id: "e", type: "event", kind: "end", col: 7, lane: 0, label: "Impersonal first visit" },
      ],
      flows: [
        { from: "s", to: "a1" },
        { from: "a1", to: "a2" },
        { from: "a2", to: "a3" },
        { from: "a3", to: "a4" },
        { from: "a4", to: "a5" },
        { from: "a5", to: "a6" },
        { from: "a6", to: "e" },
      ],
    },
    tobe: {
      caption:
        "The first touchpoint becomes recognisable. The front desk and the instructor both know who is new, and Arden has a follow-up surface built in.",
      lanes: ["Prospect", "Class Mgmt Tool", "Front Desk", "Instructor"],
      nodes: [
        { id: "s", type: "event", kind: "start", col: 0, lane: 0, label: "Ready to try FIIT" },
        { id: "b1", type: "task", col: 1, lane: 0, label: "Book trial (deep-link pay)" },
        { id: "b2", type: "task", col: 2, lane: 1, label: "Create 'new' member record", tone: "auto" },
        { id: "b3", type: "task", col: 3, lane: 2, label: "See in Today's arrivals", tone: "good" },
        { id: "b4", type: "task", col: 4, lane: 3, label: "New member flagged on screen", tone: "good" },
        { id: "e", type: "event", kind: "end", col: 5, lane: 0, label: "Recognised at the door" },
      ],
      flows: [
        { from: "s", to: "b1" },
        { from: "b1", to: "b2" },
        { from: "b2", to: "b3" },
        { from: "b3", to: "b4" },
        { from: "b4", to: "e" },
      ],
    },
  },
  {
    key: "review",
    n: "P5",
    name: "Monthly operations review",
    desc: "Turning a month of activity into decisions.",
    asis: {
      caption:
        "Half a day every month consumed by reconciliation; decisions are reactive because the data is always a month stale; no visibility into class-level health while it still matters.",
      lanes: ["Arden", "Jason"],
      nodes: [
        { id: "s", type: "event", kind: "start", col: 0, lane: 0, label: "Month ends" },
        { id: "a1", type: "task", col: 1, lane: 0, label: "Export from MindBody", tone: "pain" },
        { id: "a2", type: "task", col: 2, lane: 0, label: "Pull WhatsApp photos", tone: "pain" },
        { id: "a3", type: "task", col: 3, lane: 0, label: "Reconcile in Sheets", tone: "pain" },
        { id: "a4", type: "task", col: 4, lane: 0, label: "Calc utilisation by hand", tone: "pain" },
        { id: "a5", type: "task", col: 5, lane: 1, label: "Summary email to Jason" },
        { id: "e", type: "event", kind: "end", col: 6, lane: 1, label: "Stale, reactive" },
      ],
      flows: [
        { from: "s", to: "a1" },
        { from: "a1", to: "a2" },
        { from: "a2", to: "a3" },
        { from: "a3", to: "a4" },
        { from: "a4", to: "a5" },
        { from: "a5", to: "e" },
      ],
    },
    tobe: {
      caption:
        "Decisions become weekly instead of monthly. The half-day reconciliation disappears. Arden and Jason spend their joint time deciding what to do, not reconstructing what happened.",
      lanes: ["Class Mgmt Tool", "Arden", "Jason"],
      nodes: [
        { id: "s", type: "event", kind: "start", col: 0, lane: 1, label: "Any week" },
        { id: "b1", type: "task", col: 1, lane: 0, label: "Serve live reports", tone: "auto" },
        { id: "b2", type: "task", col: 2, lane: 1, label: "Open ops dashboard", tone: "good" },
        { id: "b3", type: "task", col: 3, lane: 1, label: "Review live KPIs" },
        { id: "b4", type: "task", col: 4, lane: 2, label: "Share dashboard link" },
        { id: "e", type: "event", kind: "end", col: 5, lane: 2, label: "Weekly decisions" },
      ],
      flows: [
        { from: "s", to: "b1" },
        { from: "b1", to: "b2" },
        { from: "b2", to: "b3" },
        { from: "b3", to: "b4" },
        { from: "b4", to: "e" },
      ],
    },
  },
  {
    key: "referral",
    n: "P6",
    name: "Referral flow",
    desc: "How a member refers a friend and earns a reward.",
    asis: {
      caption:
        "Word of mouth worked, but the studio never knew a referral happened. No attribution, no reward, and no incentive to keep referring.",
      lanes: ["Member", "Friend", "Studio"],
      nodes: [
        { id: "s", type: "event", kind: "start", col: 0, lane: 0, label: "Wants to refer" },
        { id: "a1", type: "task", col: 1, lane: 0, label: "Mention FIIT in conversation", tone: "pain" },
        { id: "a2", type: "task", col: 2, lane: 0, label: "Text friend a MindBody link", tone: "pain" },
        { id: "a3", type: "task", col: 3, lane: 1, label: "Friend books on MindBody" },
        { id: "a4", type: "task", col: 4, lane: 2, label: "Booking has no referral tag", tone: "pain" },
        { id: "a5", type: "task", col: 5, lane: 2, label: "Can't attribute to member", tone: "pain" },
        { id: "e", type: "event", kind: "end", col: 6, lane: 2, label: "No reward, no incentive" },
      ],
      flows: [
        { from: "s", to: "a1" },
        { from: "a1", to: "a2" },
        { from: "a2", to: "a3" },
        { from: "a3", to: "a4" },
        { from: "a4", to: "a5" },
        { from: "a5", to: "e" },
      ],
    },
    tobe: {
      caption:
        "Every referral is attributed to an identified member via a link-token (the I-05 fix). A reward can only fire after a two-step admin check that the friend completed a paid class.",
      lanes: ["Member", "Friend", "System", "Admin"],
      nodes: [
        { id: "s", type: "event", kind: "start", col: 0, lane: 0, label: "Wants to refer" },
        { id: "b1", type: "task", col: 1, lane: 0, label: "Copy personal referral link" },
        { id: "b2", type: "task", col: 2, lane: 0, label: "Send link to friend" },
        { id: "b3", type: "task", col: 3, lane: 1, label: "Friend fills referral form" },
        { id: "b4", type: "task", col: 4, lane: 2, label: "Attribute via link-token", tone: "auto" },
        { id: "b5", type: "task", col: 5, lane: 2, label: "Status = pending", tone: "auto" },
        { id: "a1", type: "task", col: 6, lane: 3, label: "Admin reviews queue" },
        { id: "g", type: "gateway", col: 7, lane: 3, label: "First paid class?" },
        { id: "a2", type: "task", col: 8, lane: 3, label: "markCompleted, markRewarded", tone: "good" },
        { id: "e", type: "event", kind: "end", col: 9, lane: 0, label: "Referrer rewarded" },
        { id: "e2", type: "event", kind: "end", col: 8, lane: 2, label: "Held until paid" },
      ],
      flows: [
        { from: "s", to: "b1" },
        { from: "b1", to: "b2" },
        { from: "b2", to: "b3" },
        { from: "b3", to: "b4" },
        { from: "b4", to: "b5" },
        { from: "b5", to: "a1" },
        { from: "a1", to: "g" },
        { from: "g", to: "a2", label: "yes" },
        { from: "a2", to: "e" },
        { from: "g", to: "e2", label: "not yet" },
      ],
    },
  },
  {
    key: "guestpass",
    n: "P7",
    name: "Monthly guest pass",
    desc: "Issuing and redeeming monthly guest passes.",
    asis: {
      caption:
        "Paper roster or scattered messages. The front desk had no single current view of who had used what, so passes were over-issued or refused unfairly.",
      lanes: ["Member", "Studio / Front Desk"],
      nodes: [
        { id: "s", type: "event", kind: "start", col: 0, lane: 0, label: "Wants to bring a guest" },
        { id: "a1", type: "task", col: 1, lane: 0, label: "Email / text Arden" },
        { id: "a2", type: "task", col: 2, lane: 1, label: "Confirm verbally", tone: "pain" },
        { id: "a3", type: "task", col: 3, lane: 1, label: "Note on paper / spreadsheet", tone: "pain" },
        { id: "g", type: "gateway", col: 4, lane: 1, label: "Used this month?" },
        { id: "a4", type: "task", col: 5, lane: 1, label: "Front desk unsure", tone: "pain" },
        { id: "e", type: "event", kind: "end", col: 6, lane: 1, label: "Overage or unfair refusal" },
        { id: "e2", type: "event", kind: "end", col: 5, lane: 0, label: "Guest admitted" },
      ],
      flows: [
        { from: "s", to: "a1" },
        { from: "a1", to: "a2" },
        { from: "a2", to: "a3" },
        { from: "a3", to: "g" },
        { from: "g", to: "a4", label: "unsure" },
        { from: "a4", to: "e" },
        { from: "g", to: "e2", label: "knows" },
      ],
    },
    tobe: {
      caption:
        "Quota is enforced before the pass is issued, the front desk sees it on-screen at check-in, and the monthly reset happens automatically.",
      lanes: ["Member", "System", "Front Desk", "Automatic"],
      nodes: [
        { id: "s", type: "event", kind: "start", col: 0, lane: 0, label: "Wants to bring a guest" },
        { id: "b1", type: "task", col: 1, lane: 0, label: "Submit guest-pass form" },
        { id: "b2", type: "task", col: 2, lane: 1, label: "Check monthly quota", tone: "auto" },
        { id: "g", type: "gateway", col: 3, lane: 1, label: "Under quota?" },
        { id: "b3", type: "task", col: 4, lane: 1, label: "Create pass, status pending", tone: "auto" },
        { id: "f1", type: "task", col: 5, lane: 2, label: "Guest arrives for class" },
        { id: "f2", type: "task", col: 6, lane: 2, label: "Look up pass by phone" },
        { id: "f3", type: "task", col: 7, lane: 2, label: "Verify + redeem", tone: "good" },
        { id: "e", type: "event", kind: "end", col: 8, lane: 2, label: "Admitted, fully tracked" },
        { id: "e2", type: "event", kind: "end", col: 4, lane: 0, label: "Rejected: quota reached" },
        { id: "au", type: "event", kind: "start", col: 1, lane: 3, label: "1st of the month" },
        { id: "au1", type: "task", col: 2, lane: 3, label: "Quota resets (monthKey)", tone: "auto" },
        { id: "aue", type: "event", kind: "end", col: 3, lane: 3, label: "Fresh quota" },
      ],
      flows: [
        { from: "s", to: "b1" },
        { from: "b1", to: "b2" },
        { from: "b2", to: "g" },
        { from: "g", to: "b3", label: "yes" },
        { from: "b3", to: "f1" },
        { from: "f1", to: "f2" },
        { from: "f2", to: "f3" },
        { from: "f3", to: "e" },
        { from: "g", to: "e2", label: "no" },
        { from: "au", to: "au1" },
        { from: "au1", to: "aue" },
      ],
    },
  },
  {
    key: "pwreset",
    n: "P8",
    name: "Password reset",
    desc: "Resetting a forgotten password without an admin.",
    asis: {
      caption:
        "Every reset was a manual Arden action, often sent as a cleartext temporary password, and users were never forced to change it.",
      lanes: ["User", "Arden"],
      nodes: [
        { id: "s", type: "event", kind: "start", col: 0, lane: 0, label: "Forgets password" },
        { id: "a1", type: "task", col: 1, lane: 0, label: "Text / email Arden" },
        { id: "a2", type: "task", col: 2, lane: 1, label: "Read the message", tone: "pain" },
        { id: "a3", type: "task", col: 3, lane: 1, label: "Issue temp password", tone: "pain" },
        { id: "a4", type: "task", col: 4, lane: 1, label: "Send back in cleartext", tone: "pain" },
        { id: "a5", type: "task", col: 5, lane: 0, label: "Log in" },
        { id: "e", type: "event", kind: "end", col: 6, lane: 0, label: "Change not enforced" },
      ],
      flows: [
        { from: "s", to: "a1" },
        { from: "a1", to: "a2" },
        { from: "a2", to: "a3" },
        { from: "a3", to: "a4" },
        { from: "a4", to: "a5" },
        { from: "a5", to: "e" },
      ],
    },
    tobe: {
      caption:
        "Self-serve, single-use, time-boxed reset link. Zero admin time, the password never travels in cleartext, and the endpoint is rate-limited.",
      lanes: ["User", "System"],
      nodes: [
        { id: "s", type: "event", kind: "start", col: 0, lane: 0, label: "Forgot password" },
        { id: "b1", type: "task", col: 1, lane: 0, label: "Enter email" },
        { id: "b2", type: "task", col: 2, lane: 1, label: "Rate-limit check (5 / 15 min)", tone: "auto" },
        { id: "b3", type: "task", col: 3, lane: 1, label: "Issue single-use token (15 min)", tone: "auto" },
        { id: "b4", type: "task", col: 4, lane: 1, label: "Resend emails the link", tone: "auto" },
        { id: "b5", type: "task", col: 5, lane: 0, label: "Click link" },
        { id: "g", type: "gateway", col: 6, lane: 1, label: "Link valid?" },
        { id: "b6", type: "task", col: 7, lane: 0, label: "Set new password" },
        { id: "b7", type: "task", col: 8, lane: 1, label: "PBKDF2 hash, token used", tone: "auto" },
        { id: "e", type: "event", kind: "end", col: 9, lane: 0, label: "Log in, zero admin time" },
        { id: "e2", type: "event", kind: "end", col: 7, lane: 1, label: "Expired: request again" },
      ],
      flows: [
        { from: "s", to: "b1" },
        { from: "b1", to: "b2" },
        { from: "b2", to: "b3" },
        { from: "b3", to: "b4" },
        { from: "b4", to: "b5" },
        { from: "b5", to: "g" },
        { from: "g", to: "b6", label: "valid" },
        { from: "b6", to: "b7" },
        { from: "b7", to: "e" },
        { from: "g", to: "e2", label: "expired" },
      ],
    },
  },
  {
    key: "availapprove",
    n: "P9",
    name: "Availability approval",
    desc: "Instructors propose hours; admins approve them.",
    asis: {
      caption:
        "Availability lived in several places; every change was a manual sync across all of them, and one miss caused visible drift on the public site.",
      lanes: ["Instructor", "Arden"],
      nodes: [
        { id: "s", type: "event", kind: "start", col: 0, lane: 0, label: "Schedule changes" },
        { id: "a1", type: "task", col: 1, lane: 0, label: "Text Arden new hours" },
        { id: "a2", type: "task", col: 2, lane: 1, label: "Check Doc / MindBody / paper", tone: "pain" },
        { id: "a3", type: "task", col: 3, lane: 1, label: "Edit each surface by hand", tone: "pain" },
        { id: "g", type: "gateway", col: 4, lane: 1, label: "Missed a surface?" },
        { id: "e", type: "event", kind: "end", col: 5, lane: 1, label: "Drift on public site" },
        { id: "e2", type: "event", kind: "end", col: 5, lane: 0, label: "Consistent, by luck" },
      ],
      flows: [
        { from: "s", to: "a1" },
        { from: "a1", to: "a2" },
        { from: "a2", to: "a3" },
        { from: "a3", to: "g" },
        { from: "g", to: "e", label: "yes" },
        { from: "g", to: "e2", label: "no" },
      ],
    },
    tobe: {
      caption:
        "One source of truth. The instructor submits, it queues as a pending change, and an admin approves or denies with a reason, leaving an auditable record.",
      lanes: ["Instructor", "System", "Admin"],
      nodes: [
        { id: "s", type: "event", kind: "start", col: 0, lane: 0, label: "Availability changed" },
        { id: "b1", type: "task", col: 1, lane: 0, label: "Update days + hours" },
        { id: "b2", type: "task", col: 2, lane: 0, label: "Submit" },
        { id: "b3", type: "task", col: 3, lane: 1, label: "Queue as pendingChange", tone: "auto" },
        { id: "a1", type: "task", col: 4, lane: 2, label: "Admin reviews queue" },
        { id: "g", type: "gateway", col: 5, lane: 2, label: "Approve?" },
        { id: "b4", type: "task", col: 6, lane: 1, label: "Write to availability", tone: "good" },
        { id: "b5", type: "task", col: 7, lane: 1, label: "weeklySchedule reflects it", tone: "auto" },
        { id: "e", type: "event", kind: "end", col: 8, lane: 0, label: "Published, audited" },
        { id: "a2", type: "task", col: 6, lane: 2, label: "Deny with reason" },
        { id: "e2", type: "event", kind: "end", col: 7, lane: 2, label: "Returned to revise" },
      ],
      flows: [
        { from: "s", to: "b1" },
        { from: "b1", to: "b2" },
        { from: "b2", to: "b3" },
        { from: "b3", to: "a1" },
        { from: "a1", to: "g" },
        { from: "g", to: "b4", label: "yes" },
        { from: "b4", to: "b5" },
        { from: "b5", to: "e" },
        { from: "g", to: "a2", label: "no" },
        { from: "a2", to: "e2" },
      ],
    },
  },
  {
    key: "cmspublish",
    n: "P10",
    name: "Website content publish",
    desc: "Getting a content change live on the public site.",
    asis: {
      caption:
        "Clicking Save did not mean the customer saw it. The edge cache held stale content for about a day, and members arrived for moved or cancelled classes.",
      lanes: ["Admin", "System", "Member"],
      nodes: [
        { id: "s", type: "event", kind: "start", col: 0, lane: 0, label: "Content change needed" },
        { id: "a1", type: "task", col: 1, lane: 0, label: "Edit + save in CMS" },
        { id: "a2", type: "task", col: 2, lane: 1, label: "Convex row updated" },
        { id: "a3", type: "task", col: 3, lane: 1, label: "Edge cache stale ~24h", tone: "pain" },
        { id: "a4", type: "task", col: 4, lane: 2, label: "Member sees old schedule", tone: "pain" },
        { id: "a5", type: "task", col: 5, lane: 2, label: "Arrives for moved class", tone: "pain" },
        { id: "a6", type: "task", col: 6, lane: 0, label: "Purge cache manually", tone: "pain" },
        { id: "e", type: "event", kind: "end", col: 7, lane: 0, label: "Stale content shipped" },
      ],
      flows: [
        { from: "s", to: "a1" },
        { from: "a1", to: "a2" },
        { from: "a2", to: "a3" },
        { from: "a3", to: "a4" },
        { from: "a4", to: "a5" },
        { from: "a5", to: "a6" },
        { from: "a6", to: "e" },
      ],
    },
    tobe: {
      caption:
        "Cache invalidation is baked into the publish action, with a runbook smoke-test after, so a save is actually visible. Anomalies get logged straight to the RAID.",
      lanes: ["Admin", "System"],
      nodes: [
        { id: "s", type: "event", kind: "start", col: 0, lane: 0, label: "Content change needed" },
        { id: "b1", type: "task", col: 1, lane: 0, label: "Edit + preview content" },
        { id: "b2", type: "task", col: 2, lane: 0, label: "Click Publish" },
        { id: "b3", type: "task", col: 3, lane: 1, label: "Update row, active = true", tone: "auto" },
        { id: "b4", type: "task", col: 4, lane: 1, label: "revalidatePath() on save", tone: "good" },
        { id: "b5", type: "task", col: 5, lane: 1, label: "Edge cache invalidated", tone: "auto" },
        { id: "a1", type: "task", col: 6, lane: 0, label: "Smoke-test in incognito" },
        { id: "g", type: "gateway", col: 7, lane: 0, label: "Looks right?" },
        { id: "e", type: "event", kind: "end", col: 8, lane: 0, label: "Change live, verified" },
        { id: "e2", type: "event", kind: "end", col: 7, lane: 1, label: "Anomaly logged" },
      ],
      flows: [
        { from: "s", to: "b1" },
        { from: "b1", to: "b2" },
        { from: "b2", to: "b3" },
        { from: "b3", to: "b4" },
        { from: "b4", to: "b5" },
        { from: "b5", to: "a1" },
        { from: "a1", to: "g" },
        { from: "g", to: "e", label: "normal" },
        { from: "g", to: "e2", label: "anomaly" },
      ],
    },
  },
  {
    key: "signup",
    n: "P11",
    name: "Sign-up & approval",
    desc: "New accounts and the admin approval gate.",
    asis: {
      caption:
        "Every new account meant manual entries across multiple systems, credentials sent over SMS, and roles assigned from memory with no audit trail.",
      lanes: ["User", "Arden"],
      nodes: [
        { id: "s", type: "event", kind: "start", col: 0, lane: 0, label: "Needs an account" },
        { id: "a1", type: "task", col: 1, lane: 0, label: "Text Arden" },
        { id: "a2", type: "task", col: 2, lane: 1, label: "Create in MindBody + sheet", tone: "pain" },
        { id: "a3", type: "task", col: 3, lane: 1, label: "Send credentials by SMS", tone: "pain" },
        { id: "a4", type: "task", col: 4, lane: 0, label: "Log in" },
        { id: "e", type: "event", kind: "end", col: 5, lane: 0, label: "Roles from memory" },
      ],
      flows: [
        { from: "s", to: "a1" },
        { from: "a1", to: "a2" },
        { from: "a2", to: "a3" },
        { from: "a3", to: "a4" },
        { from: "a4", to: "e" },
      ],
    },
    tobe: {
      caption:
        "Self-serve sign-up does not mean self-serve access. The account is created as pending and an admin approval sets the role; deactivation is soft, so the record persists.",
      lanes: ["User", "System", "Admin"],
      nodes: [
        { id: "s", type: "event", kind: "start", col: 0, lane: 0, label: "Needs an account" },
        { id: "su", type: "task", col: 1, lane: 0, label: "Fill sign-up form" },
        { id: "b1", type: "task", col: 2, lane: 1, label: "Create user, role = pending", tone: "auto" },
        { id: "b2", type: "task", col: 3, lane: 1, label: "Sign-in blocked till approved", tone: "auto" },
        { id: "a1", type: "task", col: 4, lane: 2, label: "Admin opens Manage Users" },
        { id: "g", type: "gateway", col: 5, lane: 2, label: "Approve?" },
        { id: "b3", type: "task", col: 6, lane: 1, label: "approveUser sets role", tone: "good" },
        { id: "e", type: "event", kind: "end", col: 7, lane: 0, label: "User can sign in" },
        { id: "a2", type: "task", col: 6, lane: 2, label: "deactivateUser (soft)" },
        { id: "e2", type: "event", kind: "end", col: 7, lane: 2, label: "Blocked with a clear reason" },
      ],
      flows: [
        { from: "s", to: "su" },
        { from: "su", to: "b1" },
        { from: "b1", to: "b2" },
        { from: "b2", to: "a1" },
        { from: "a1", to: "g" },
        { from: "g", to: "b3", label: "yes" },
        { from: "b3", to: "e" },
        { from: "g", to: "a2", label: "no" },
        { from: "a2", to: "e2" },
      ],
    },
  },
];
