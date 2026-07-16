import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FiitSubNav } from "@/components/work/fiitco/FiitSubNav";

export const metadata = {
  title: "FIIT Co. · Business Rules (A3) | David Ezieshi",
  description:
    "The 8 business rules that govern the FIIT Co. platform — plus the booking decision table.",
};

type BusinessRule = { id: string; text: string; enforced: string; test: string };

const RULES: BusinessRule[] = [
  {
    id: "BUS-01",
    text: "Only administrators may add, suspend, or remove instructor accounts.",
    enforced:
      "requireAdmin gate on auth.approveUser, changeUserRole, deactivateUser.",
    test: "TC-041 · Direct URL as instructor → 302 to /login",
  },
  {
    id: "BUS-02",
    text: "Administrators may view and edit all records; instructors may only view other instructors' records in read-only form.",
    enforced:
      "Role-based query filtering + read-only render mode when role='instructor' and target != self.",
    test: "TC-013 · Instructor cannot edit another instructor's classPrograms",
  },
  {
    id: "BUS-03",
    text: "Guest passes reset on the first day of each calendar month.",
    enforced:
      "monthKey column on guestPasses row. guestPasses.monthlyUsage query filters by current month.",
    test: "TC-022 · Redemption in previous monthKey does not count against current quota",
  },
  {
    id: "BUS-04",
    text: "A member referral is considered successful only after the referred person completes their first paid class.",
    enforced:
      "Two-step admin action: referrals.markCompleted (paid class recorded) → referrals.markRewarded.",
    test: "TC-020 · markRewarded cannot fire without prior markCompleted",
  },
  {
    id: "BUS-05",
    text: "Exercise library entries must be categorised by category, subcategory, and tier before they can be used in a lesson plan.",
    enforced:
      "Schema validators require all three foreign keys on exercises rows; classPrograms.addLessonPlanItem checks tier compatibility.",
    test: "TC-030 · Add exercise missing tier → validation error at write time",
  },
  {
    id: "BUS-06",
    text: "A class cannot be scheduled without an assigned instructor.",
    enforced:
      "weeklySchedule.addScheduleSlot requires instructorId; conflict check runs before commit.",
    test: "TC-010 · Add slot with null instructor → rejected",
  },
  {
    id: "BUS-07",
    text: "All pricing, membership structure, and class format information displayed on the customer website must match the canonical pricing sheet maintained by the sponsor.",
    enforced:
      "pricingPlans table is the canonical source; both admin CMS and public site read from it. No duplicated pricing elsewhere.",
    test: "TC-web-004 · Update pricingPlans → public site reflects same day",
  },
  {
    id: "BUS-08",
    text: "Every mutation touching user or operational data must pass through requireAuth (any role) or requireAdmin (admin only).",
    enforced:
      "Every mutation exported from convex/mutations.ts + convex/websiteContent.ts calls requireAuth/requireAdmin in its handler.",
    test: "TC-040 · Unauthenticated call to any admin mutation → throws",
  },
];

type DecisionRow = {
  slotAvailable: string;
  instructorAvailable: string;
  bufferOK: string;
  result: "Book" | "Warn" | "Reject";
  note: string;
};

const BOOKING_DECISIONS: DecisionRow[] = [
  {
    slotAvailable: "Yes",
    instructorAvailable: "Yes",
    bufferOK: "Yes",
    result: "Book",
    note: "Happy path — commit to weeklySchedule",
  },
  {
    slotAvailable: "Yes",
    instructorAvailable: "Yes",
    bufferOK: "No",
    result: "Warn",
    note: "Buffer < 15 min between classes → admin can override with acknowledgement",
  },
  {
    slotAvailable: "Yes",
    instructorAvailable: "No",
    bufferOK: "—",
    result: "Reject",
    note: "Instructor already booked this slot",
  },
  {
    slotAvailable: "No",
    instructorAvailable: "—",
    bufferOK: "—",
    result: "Reject",
    note: "Room/slot conflict — another class already scheduled",
  },
];

export default function FiitRulesPage() {
  return (
    <div className="pf-page">
      <div className="pf-shell">
        <FiitSubNav active="rules" />

        <section className="pj-hero-head" style={{ marginTop: 28 }}>
          <Badge tone="violet" style={{ marginBottom: 16 }}>
            Artifact A3 · Business Rules
          </Badge>
          <h1
            className="pf-page-title"
            style={{ fontSize: "clamp(30px,3.2vw,46px)" }}
          >
            Eight rules, one decision table. Every one enforced in code and
            covered by a test case.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 700 }}>
            Business rules aren&rsquo;t documentation — they&rsquo;re
            promises. Each of the eight below traces to a specific
            enforcement point in the platform and a specific UAT test case
            that validates it.
          </p>
        </section>

        {/* Rules list */}
        <section className="pj-section" style={{ marginTop: 32 }}>
          <Eyebrow style={{ marginBottom: 8 }}>The 8 rules</Eyebrow>
          <p className="pj-section-sub">
            Sourced from BA-03 BRD § Assumptions &amp; Constraints. Each rule
            is stated once, enforced once, tested once.
          </p>
          <div className="pj-rules-list">
            {RULES.map((r) => (
              <article className="pj-rules-card" key={r.id}>
                <header>
                  <span className="pj-rules-id">{r.id}</span>
                </header>
                <p className="pj-rules-text">{r.text}</p>
                <div className="pj-rules-meta">
                  <div>
                    <span className="pj-rules-meta-k">Enforced by</span>
                    <span className="pj-rules-meta-v">{r.enforced}</span>
                  </div>
                  <div>
                    <span className="pj-rules-meta-k">Test</span>
                    <span className="pj-rules-meta-v">
                      <CheckCircle2 size={14} aria-hidden /> {r.test}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Booking decision table */}
        <section className="pj-section">
          <Eyebrow prefix="" style={{ marginBottom: 8 }}>
            Booking decision table
          </Eyebrow>
          <p className="pj-section-sub">
            The conflict-check gateway from process A1 · Booking Flow, as a
            decision table. Every schedule mutation walks these rows.
          </p>
          <div className="pj-decision-table-wrap">
            <table className="pj-decision-table">
              <thead>
                <tr>
                  <th>Slot free?</th>
                  <th>Instructor free?</th>
                  <th>Buffer OK?</th>
                  <th>Result</th>
                  <th>Note</th>
                </tr>
              </thead>
              <tbody>
                {BOOKING_DECISIONS.map((d, i) => (
                  <tr key={i} data-result={d.result.toLowerCase()}>
                    <td>{d.slotAvailable}</td>
                    <td>{d.instructorAvailable}</td>
                    <td>{d.bufferOK}</td>
                    <td>
                      <span className={`pj-decision-badge ${d.result.toLowerCase()}`}>
                        {d.result}
                      </span>
                    </td>
                    <td>{d.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <Link href="/work/fiitco/docs" className="pj-next">
          <div>
            <span className="pj-next-lbl">Next artifact</span>
            <span className="pj-next-title">Documents (Reading Mode)</span>
          </div>
          <ArrowRight size={20} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
