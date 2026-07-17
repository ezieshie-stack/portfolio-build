import Link from "next/link";
import {
  ArrowRight,
  Box,
  Check,
  CheckCircle2,
  GitMerge,
  Info,
  MinusCircle,
  ShieldCheck,
  Table,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MetricStat } from "@/components/ui/MetricStat";
import { FiitSubNav } from "@/components/work/fiitco/FiitSubNav";
import { FigFrame } from "@/components/work/fiitco/FigFrame";

export const metadata = {
  title: "FIIT Co. · Data & Scope Model (A2) | David Ezieshi",
  description:
    "The scope boundary agreed at kickoff plus the BA-authored 24-entity logical data model, and how it maps to the ~32-table Convex schema.",
};

// verbatim from ui_kits/portfolio/project-fiitco-data.jsx
const ENTITIES: [string, string, string[]][] = [
  ["User", "Person with any relationship to the platform", ["BR-02"]],
  ["Role", "Admin / Instructor / Member permission bundle", ["BR-02"]],
  ["RoleAssignment", "Join, user ↔ role, scoped + time-bounded", ["BR-02"]],
  ["Session", "Auth session for a signed-in user", ["BR-02"]],
  ["Instructor", "User subtype with credentials + assignments", ["BR-01", "BR-03", "BR-04"]],
  ["InstructorAvailability", "Weekly blocks an instructor can be booked into", ["BR-01"]],
  ["Member", "User subtype with membership + billing status", ["BR-06", "BR-07", "BR-08"]],
  ["Class", "Reusable offering template (e.g. ‘HIIT 45’)", ["BR-01"]],
  ["ClassSession", "An instance of a Class at a time, place, instructor", ["BR-01", "BR-03"]],
  ["Location", "Studio / room the session is held in", ["BR-01"]],
  ["AttendanceRecord", "Member checked in / marked at a session", ["BR-03", "BR-05"]],
  ["Exercise", "Item in the curated training library", ["BR-04"]],
  ["LessonPlan", "Ordered set of Exercises for a session", ["BR-04"]],
  ["LessonPlanItem", "Join, plan ↔ exercise with sets/reps", ["BR-04"]],
  ["TrainerProfile", "Public-site bio + certifications", ["BR-06"]],
  ["WebsitePage", "CMS-editable public page", ["BR-06"]],
  ["WebsiteBlock", "Modular content block within a page", ["BR-06"]],
  ["BlogPost", "TipTap-authored article on the public site", ["BR-06"]],
  ["ContactSubmission", "Inbound form submission from the site", ["BR-06"]],
  ["Referral", "Trackable link + referrer/referee pair", ["BR-07"]],
  ["Reward", "Payout / credit on a successful referral", ["BR-07"]],
  ["GuestPass", "Monthly pass issued with a quota", ["BR-08"]],
  ["Redemption", "Front-desk verification closing a GuestPass", ["BR-08"]],
  ["AuditLog", "Append-only record of every mutation", ["NFR-03"]],
];

const RELS: [string, string, string, string][] = [
  ["Class", "1 ─∞", "ClassSession", "One ‘HIIT 45’ definition generates dozens of weekly sessions."],
  ["ClassSession", "∞─ 1", "Instructor", "One instructor per session; the engine enforces no double-booking (BR-01)."],
  ["ClassSession", "1 ─∞", "AttendanceRecord", "Attendance is per-session, not per-class-definition (BR-03)."],
  ["User", "∞─∞", "Role", "Via RoleAssignment; an instructor can also hold time-bounded admin rights (BR-02)."],
  ["Referral", "1 ─ 0..1", "Reward", "A reward exists only on a qualified referral (BR-07)."],
];

const IN_SCOPE: [string, string][] = [
  ["Class Management Tool", "Scheduling, RBAC, real-time attendance, lesson library, reporting"],
  ["Customer marketing website", "Live schedule, trainer profiles, brand, CMS"],
  ["Refer-a-friend program", "Trackable links with attribution & rewards"],
  ["Guest-pass program", "Monthly passes with front-desk verification"],
];
const OUT_SCOPE: [string, string][] = [
  ["MindBody two-way sync", "Deferred to Wave 3+ (R-01); deep-link fallback shipped"],
  ["WCAG 2.1 AA audit", "Wave 3 backlog (R-07); interim contrast/alt-text pass done"],
  ["Trainerize pilot", "O3 recommendation, 30 days post-closure"],
  ["Payments & billing", "External system of record"],
];

export default function FiitDataPage() {
  return (
    <div className="pf-page fx-wide">
      <div className="pf-shell">
        <FiitSubNav active="data" />

        <section className="pj-hero-head" style={{ marginTop: 28 }}>
          <Badge tone="violet" style={{ marginBottom: 16 }}>
            Artifact A2 · Data &amp; Scope Model
          </Badge>
          <h1
            className="pf-page-title"
            style={{ fontSize: "clamp(30px,3.2vw,46px)" }}
          >
            What the platform owns, and the data behind it.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 680 }}>
            The scope boundary agreed at kickoff, and the BA-authored logical
            data model the requirements traced to, 24 entities, their
            relationships, and how the logical layer maps to the ~32-table
            Convex schema.
          </p>
        </section>

        {/* scope model */}
        <section className="pj-section" style={{ marginTop: 34 }}>
          <Eyebrow style={{ marginBottom: 8 }}>Scope model</Eyebrow>
          <p className="pj-section-sub">
            The line between what this engagement delivered and what stayed
            with existing or third-party systems, agreed before a single
            requirement was written.
          </p>
          <FigFrame name="scope-boundary" sub="in / out of scope">
            <div className="fig-pad">
              <div className="fx-scope-grid">
                <div className="fx-scol in">
                  <div className="fx-scol-hd">
                    <CheckCircle2 size={16} aria-hidden /> In scope
                  </div>
                  <ul>
                    {IN_SCOPE.map(([t, d]) => (
                      <li key={t}>
                        <Check size={16} aria-hidden />
                        <span>
                          <b>{t}</b>
                          {d}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="fx-scol out">
                  <div className="fx-scol-hd">
                    <MinusCircle size={16} aria-hidden /> Out of scope
                  </div>
                  <ul>
                    {OUT_SCOPE.map(([t, d]) => (
                      <li key={t}>
                        <X size={16} aria-hidden />
                        <span>
                          <b>{t}</b>
                          {d}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FigFrame>
        </section>

        {/* ERD */}
        <section className="pj-section">
          <Eyebrow style={{ marginBottom: 8 }}>
            Logical data model · 24 entities
          </Eyebrow>
          <p className="pj-section-sub">
            The BA-authored logical model, the entities and relationships the
            requirements need the platform to hold. Built before the schema,
            iterated during the build, and now the reference for tracing any
            production issue to an owning entity. Each entity traces to the BR
            it serves.
          </p>
          <FigFrame name="fiit_co · logical model" sub="BA-08 · 24 entities">
            <div className="fig-pad">
              <div className="fx-erd">
                {ENTITIES.map(([name, purpose, trace]) => (
                  <div className="fx-ent" key={name}>
                    <div className="fx-ent-hd">
                      <Box size={15} aria-hidden />
                      <span className="fx-ent-name">{name}</span>
                    </div>
                    <div className="fx-ent-body">
                      <p className="fx-ent-purpose">{purpose}</p>
                      <div className="fx-ent-tr">
                        {trace.map((t) => (
                          <span key={t} className={t.startsWith("N") ? "nfr" : ""}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FigFrame>
        </section>

        {/* relationships */}
        <section className="pj-section">
          <Eyebrow style={{ marginBottom: 8 }}>Relationships</Eyebrow>
          <p className="pj-section-sub">
            Cardinalities the business rules and process models depend on.
          </p>
          <div className="fx-rels">
            {RELS.map(([a, card, b, note], i) => (
              <div className="fx-rel" key={i}>
                <span className="fx-rel-e" style={{ textAlign: "right" }}>
                  {a}
                </span>
                <span className="fx-rel-card">{card}</span>
                <span className="fx-rel-e">{b}</span>
                <span className="fx-rel-note">{note}</span>
              </div>
            ))}
          </div>
        </section>

        {/* metrics */}
        <section className="pj-section">
          <div className="pj-metrics">
            <MetricStat
              value="24"
              label="Logical entities"
              icon={<Box size={22} aria-hidden />}
            />
            <MetricStat
              value="~32"
              label="Physical Convex tables"
              icon={<Table size={22} aria-hidden />}
            />
            <MetricStat
              value="8"
              label="BRs traced to entities"
              icon={<GitMerge size={22} aria-hidden />}
            />
            <MetricStat
              value="100%"
              label="Mutations audit-logged"
              icon={<ShieldCheck size={22} aria-hidden />}
            />
          </div>
        </section>

        <div className="cov-note" style={{ marginTop: 8 }}>
          <Info size={18} aria-hidden />
          <p>
            <b>Logical vs. physical:</b> this 24-entity logical model is
            sponsor-readable and implementation-agnostic. The physical Convex
            schema expands to <b>~32 tables</b> through materialised views
            (attendance rollup, referral attribution), system tables, and audit
            variants (soft-delete tombstones, versioned config).
          </p>
        </div>

        <Link href="/work/fiitco/rules" className="pj-next">
          <div>
            <span className="pj-next-lbl">Next artifact</span>
            <span className="pj-next-title">Business Rules Model</span>
          </div>
          <ArrowRight size={20} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
