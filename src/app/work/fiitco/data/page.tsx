import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FiitSubNav } from "@/components/work/fiitco/FiitSubNav";

export const metadata = {
  title: "FIIT Co. · Data & Scope Model (A2) | David Ezieshi",
  description:
    "The 28-table Convex schema grouped into 4 domains, with soft-FK relationships and scope-boundary reasoning.",
};

type Domain = { name: string; count: number; tables: string[]; blurb: string };

const DOMAINS: Domain[] = [
  {
    name: "Operational",
    count: 15,
    tables: [
      "categories",
      "subcategories",
      "classes",
      "instructors",
      "tiers",
      "equipment",
      "pathways",
      "exercises",
      "weeklySchedule",
      "classPrograms",
      "deliveryLog",
      "clientJourneys",
      "availability",
      "availabilityExceptions",
      "pendingChanges",
    ],
    blurb:
      "The real ops record. Staff-only. Every class, every attendance mark, every instructor availability block lands here.",
  },
  {
    name: "Website content",
    count: 12,
    tables: [
      "trainers",
      "collaborators",
      "classFormats",
      "pricingPlans",
      "blogPosts",
      "locations",
      "testimonials",
      "faqEntries",
      "promoVideos",
      "websiteImages",
      "websiteSchedule",
      "legalDocs",
    ],
    blurb:
      "Everything the public site reads anonymously. CMS-curated, soft-deleted (active: false) so nothing is ever lost from the UI.",
  },
  {
    name: "Auth & security",
    count: 4,
    tables: ["users", "sessions", "passwordResetTokens", "rateLimits"],
    blurb:
      "Staff-only. 32-byte hex session tokens with 14-day sliding TTL. PBKDF2-SHA256 password hashes, 600k iterations. Rate limits on login + reset.",
  },
  {
    name: "Customer forms",
    count: 2,
    tables: ["referrals", "guestPasses"],
    blurb:
      "The only two tables the public can write to. Both are pending-status inserts that the admin queue picks up.",
  },
];

type Relationship = { from: string; to: string; kind: string; note: string };

const REL: Relationship[] = [
  {
    from: "categories",
    to: "subcategories",
    kind: "1 : many",
    note: "Two-level catalogue hierarchy",
  },
  {
    from: "classes",
    to: "weeklySchedule",
    kind: "1 : many",
    note: "One class definition, dozens of weekly sessions",
  },
  {
    from: "instructors",
    to: "weeklySchedule",
    kind: "1 : many",
    note: "Scheduling engine enforces no double-booking (BR-01)",
  },
  {
    from: "classes",
    to: "deliveryLog",
    kind: "1 : many",
    note: "Attendance is per-session, not per-class-definition (BR-03)",
  },
  {
    from: "users ⇄ instructors",
    to: "",
    kind: "1 : 0..1",
    note: "Not every user is an instructor; not every instructor has a login yet",
  },
  {
    from: "pathways",
    to: "clientJourneys",
    kind: "1 : many",
    note: "A pathway is the template; a journey is an instance",
  },
];

export default function FiitDataPage() {
  return (
    <div className="pf-page">
      <div className="pf-shell">
        <FiitSubNav active="data" />

        <section className="pj-hero-head" style={{ marginTop: 28 }}>
          <Badge tone="violet" style={{ marginBottom: 16 }}>
            Artifact A2 · Data &amp; Scope Model · ERD
          </Badge>
          <h1
            className="pf-page-title"
            style={{ fontSize: "clamp(30px,3.2vw,46px)" }}
          >
            28 tables, 4 domains, one line separating public from operational.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 700 }}>
            Convex is a document-flavoured backend. It does not enforce
            foreign-key constraints — relationships are encoded as string IDs
            in indexed columns and maintained by the application code. That
            trade-off is explicit and worth pointing at during any walkthrough.
          </p>
        </section>

        {/* Four domains */}
        <section className="pj-section" style={{ marginTop: 32 }}>
          <Eyebrow style={{ marginBottom: 8 }}>Four domains</Eyebrow>
          <p className="pj-section-sub">
            The 28 tables cluster into four business-meaningful groups.
            Permissions map cleanly onto domain lines.
          </p>
          <div className="pj-data-domains">
            {DOMAINS.map((d) => (
              <article className="pj-data-domain" key={d.name}>
                <header>
                  <h3>{d.name}</h3>
                  <span className="pj-data-count">{d.count} tables</span>
                </header>
                <p className="pj-data-blurb">{d.blurb}</p>
                <ul className="pj-data-tables">
                  {d.tables.map((t) => (
                    <li key={t}>
                      <code>{t}</code>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Cardinality highlights */}
        <section className="pj-section">
          <Eyebrow style={{ marginBottom: 8 }}>Cardinality highlights</Eyebrow>
          <p className="pj-section-sub">
            The joins worth explaining when someone asks how the data holds
            together.
          </p>
          <div className="pj-data-rel">
            {REL.map((r, i) => (
              <div className="pj-data-rel-row" key={i}>
                <span className="pj-data-rel-from">
                  <code>{r.from}</code>
                  {r.to && (
                    <>
                      {" → "}
                      <code>{r.to}</code>
                    </>
                  )}
                </span>
                <span className="pj-data-rel-kind">{r.kind}</span>
                <span className="pj-data-rel-note">{r.note}</span>
              </div>
            ))}
          </div>
        </section>

        {/* The two-schedule story */}
        <section className="pj-section">
          <Eyebrow prefix="" style={{ marginBottom: 8 }}>
            The two-schedule story
          </Eyebrow>
          <p className="pj-section-sub">
            There are two schedule tables. That is intentional, not
            duplication.
          </p>
          <div className="pj-data-callout">
            <div className="pj-data-callout-row">
              <strong>weeklySchedule</strong> · Operational domain
              <span>
                The real ops schedule with dates, capacity, and
                buffer-conflict flags. Staff-only.
              </span>
            </div>
            <div className="pj-data-callout-row">
              <strong>websiteSchedule</strong> · Website content domain
              <span>
                A curated recurring template for what the public sees. Arden
                edits it separately so a mid-week ops change doesn&rsquo;t
                leak to visitors.
              </span>
            </div>
          </div>
        </section>

        {/* Interactive ERD placeholder */}
        <section className="pj-section">
          <div className="pj-note">
            The fully interactive ERD (hover-highlight, filter by domain,
            click a table to see its indexed columns and soft-FK ins/outs)
            renders on a later slice — the engine that drives it is being
            ported from the prototype.
          </div>
        </section>

        <Link href="/work/fiitco/rules" className="pj-next">
          <div>
            <span className="pj-next-lbl">Next artifact</span>
            <span className="pj-next-title">Business Rules</span>
          </div>
          <ArrowRight size={20} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
