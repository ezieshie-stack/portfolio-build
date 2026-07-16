import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FiitSubNav } from "@/components/work/fiitco/FiitSubNav";

export const metadata = {
  title: "FIIT Co. · Process Models (A1) | David Ezieshi",
  description:
    "Six core FIIT Co. workflows as as-is / to-be pairs — referral, guest pass, password reset, availability, CMS publish, and sign-up.",
};

type PairSection = {
  id: string;
  title: string;
  br: string;
  pain: string;
  win: string;
  asis: string[];
  tobe: string[];
};

const PAIRS: PairSection[] = [
  {
    id: "referral",
    title: "1 · Referral Flow",
    br: "BR-06 · BR-07 · BUS-04",
    pain: "Word of mouth worked, but the studio never knew a referral happened. No attribution, no reward, no incentive to keep referring.",
    win: "Every referral is attributed to an identified member. Admin has a queue. BUS-04 enforced by a two-step markCompleted → markRewarded lifecycle.",
    asis: [
      "Member wants to refer a friend",
      "Mentions FIIT in conversation",
      "Texts the friend a MindBody link",
      "Friend books via MindBody",
      "Studio sees new booking arrive with no referral tag",
      "❌ No way to attribute to the referring member",
      "❌ No reward triggered",
    ],
    tobe: [
      "Member logs in / uses link on their profile",
      "Copies personal referral link",
      "Sends link to friend",
      "Friend opens link → fills referral form",
      "referrals.create captures link-token",
      "Attribute referrer via token, not cookie",
      "Status = pending → admin queue",
      "Admin: markCompleted (after first paid class per BUS-04) → markRewarded",
    ],
  },
  {
    id: "guest-pass",
    title: "2 · Monthly Guest-Pass Tracking",
    br: "BR-06 · BR-08 · BUS-03",
    pain: "Paper roster or scattered messages. Front desk had no single, current view of who had used what.",
    win: "Quota enforced before the pass is issued. Front desk sees the pass on-screen at check-in. Monthly rollover is automatic.",
    asis: [
      "Member emails or texts Arden to ask about bringing a friend",
      "Verbal or email confirmation",
      "📄 Note on paper roster or spreadsheet",
      "Front desk may not remember previous usage",
      "❌ Overage happens OR pass refused unfairly",
    ],
    tobe: [
      "Member opens guest-pass form on fiitco.ca",
      "Enters member phone + guest phone",
      "guestPasses.monthlyUsage checks quota per member",
      "guestPasses.create → status = pending",
      "Front desk: look up pass by guest phone at check-in",
      "guestPasses.redeem → status = redeemed",
      "1st of each month: quota resets automatically",
    ],
  },
  {
    id: "password-reset",
    title: "3 · Password Reset (Self-Serve)",
    br: "BR-02 · P11 handoff",
    pain: "Every reset was a manual Arden action. Password often sent in cleartext over SMS/email; users not forced to change it.",
    win: "Zero admin time per reset. Password never travels in cleartext. Single-use 15-min token; rate limit blocks brute-force.",
    asis: [
      "User forgets password",
      "Texts or emails Arden",
      "Arden reads message, issues new temporary password",
      "Sends back by same channel (cleartext)",
      "User logs in, not forced to change password",
    ],
    tobe: [
      "Clicks 'Forgot password' on sign-in",
      "Enters email → passwordReset.requestPasswordReset",
      "Rate-limit check: 5 attempts / 15 min",
      "Issue single-use token, 15-min TTL",
      "Resend delivers email with reset link",
      "User clicks link → sets new password",
      "PBKDF2 hash + mark token used",
    ],
  },
  {
    id: "availability",
    title: "4 · Instructor Availability + Change Approval",
    br: "BR-01 · P9 handoff",
    pain: "Availability lived in multiple places; every change was a manual sync across all of them. One miss caused visible drift.",
    win: "Single source (staff portal). Pending-changes queue = auditable governance record. Denial goes back with a reason.",
    asis: [
      "Instructor's schedule changes next week",
      "Texts Arden the new hours",
      "Arden checks Google Doc / MindBody / paper",
      "Manually edits in each surface",
      "❌ Missed a surface → drift between studio schedule and public site",
    ],
    tobe: [
      "Instructor logs in to staff portal",
      "Opens Availability page → updates days + hours",
      "Submit → queued as pendingChange",
      "Admin sees pending queue → reviews submission",
      "Approve → approvePendingChange writes to availability table",
      "weeklySchedule reflects change on next generation",
      "Deny → sent back to instructor with reason",
    ],
  },
  {
    id: "cms-publish",
    title: "5 · Website Content Publish (CMS)",
    br: "BR-06 · RAID I-02",
    pain: "'I clicked Save' did not mean 'the customer sees it.' Stale content persisted for ~24h on the public site (RAID incident I-02).",
    win: "Publish actually publishes. Cache invalidation is part of the mutation. Smoke-test is in the runbook.",
    asis: [
      "Admin edits content in CMS → clicks Save",
      "Convex row updated",
      "Customer site continues serving OLD content",
      "❌ Vercel edge cache holds stale page for ~24 hours",
      "Members visit site, see old schedule",
      "🚨 Arden manually invalidates cache after complaints",
    ],
    tobe: [
      "Admin edits content in CMS",
      "Preview in staff portal",
      "Clicks Publish → Convex row updated (active = true)",
      "revalidatePath() fires on save (new — mitigation)",
      "Vercel edge cache invalidated for that route",
      "Runbook smoke-test: open incognito → see edit",
      "Any anomaly → RAID note",
    ],
  },
  {
    id: "signup",
    title: "6 · New-User Sign-Up + Admin Approval",
    br: "BR-02 · P12 handoff",
    pain: "Every new account = manual entries across multiple systems, roles assigned from memory, no audit trail.",
    win: "Self-serve sign-up ≠ self-serve access. Role is a deliberate admin action, not a default. Deactivation is soft.",
    asis: [
      "New instructor / trial member needs an account",
      "Texts Arden",
      "Arden logs into MindBody + spreadsheet + any other system",
      "Creates accounts manually in each",
      "Sends credentials by SMS / email",
      "❌ Role assignments done by memory",
    ],
    tobe: [
      "Prospect fills sign-up form",
      "auth.signupUser → role = pending",
      "User cannot sign in yet (pending admin approval)",
      "Notification via pending-user count",
      "Admin opens Manage Users → reviews",
      "Approve → auth.approveUser sets role = instructor OR member",
      "Deny → auth.deactivateUser with clear sign-in message",
    ],
  },
];

export default function FiitProcessPage() {
  return (
    <div className="pf-page">
      <div className="pf-shell">
        <FiitSubNav active="process" />

        <section className="pj-hero-head" style={{ marginTop: 28 }}>
          <Badge tone="violet" style={{ marginBottom: 16 }}>
            Artifact A1 · Process Models · As-Is / To-Be
          </Badge>
          <h1
            className="pf-page-title"
            style={{ fontSize: "clamp(30px,3.2vw,46px)" }}
          >
            Six workflows, each shown before and after the redesign.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 700 }}>
            Every to-be process traces back to a Business Requirement and a
            documented pain point from the persona journey maps or the RAID
            log. The pattern that runs through all six: stop asking a human to
            remember to do the thing the system should do automatically.
          </p>
        </section>

        <section className="pj-section" style={{ marginTop: 32 }}>
          <div className="pj-process-list">
            {PAIRS.map((p) => (
              <article className="pj-process-card" key={p.id} id={p.id}>
                <header className="pj-process-head">
                  <h2>{p.title}</h2>
                  <span className="pj-process-br">{p.br}</span>
                </header>

                <div className="pj-process-panels">
                  <div className="pj-process-panel asis">
                    <span className="pj-process-tag">As-Is</span>
                    <ol>
                      {p.asis.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ol>
                    <p className="pj-process-pain">
                      <strong>Pain:</strong> {p.pain}
                    </p>
                  </div>

                  <div className="pj-process-arrow" aria-hidden>
                    <ArrowRight size={22} />
                  </div>

                  <div className="pj-process-panel tobe">
                    <span className="pj-process-tag">To-Be</span>
                    <ol>
                      {p.tobe.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ol>
                    <p className="pj-process-win">
                      <strong>Win:</strong> {p.win}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <Link href="/work/fiitco/data" className="pj-next">
          <div>
            <span className="pj-next-lbl">Next artifact</span>
            <span className="pj-next-title">Data &amp; Scope Model</span>
          </div>
          <ArrowRight size={20} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
