import Link from "next/link";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CircleDot,
  ClipboardList,
  FileText,
  GitBranch,
  GitCompare,
  Globe,
  HelpCircle,
  LayoutDashboard,
  LayoutGrid,
  Network,
  Rocket,
  Scale,
  Table,
  TrendingUp,
  UserCheck,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Chip } from "@/components/ui/Chip";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MetricStat } from "@/components/ui/MetricStat";

export const metadata = {
  title: "FIIT Co. Operations Platform | David Ezieshi",
  description:
    "The BA work behind a two-application fitness operations platform delivered on Next.js and Convex.",
};

type LiveProduct = {
  href: string;
  icon: LucideIcon;
  title: string;
  host: string;
  desc: string;
};

const LIVE_PRODUCT: LiveProduct[] = [
  {
    href: "https://www.fiitco.ca",
    icon: Globe,
    title: "Public marketing site",
    host: "fiitco.ca",
    desc: "Customer-facing site: live schedule, trainer profiles, blog, referrals.",
  },
  {
    href: "https://fiit-ops-kappa.vercel.app",
    icon: LayoutDashboard,
    title: "Class Management Tool",
    host: "fiit-ops-kappa.vercel.app",
    desc: "Staff operations app: scheduling, attendance, lesson library, reporting.",
  },
];

type Artifact = {
  href: string;
  idx: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  meta: string;
};

const LIVE_ARTIFACTS: Artifact[] = [
  {
    href: "/work/fiitco/process",
    idx: "A1",
    icon: GitCompare,
    title: "Process Models",
    desc: "As-is vs to-be, five core workflows.",
    meta: "5 processes",
  },
  {
    href: "/work/fiitco/data",
    idx: "A2",
    icon: Table,
    title: "Data & Scope Model",
    desc: "The scope boundary and the entity model.",
    meta: "24 entities",
  },
  {
    href: "/work/fiitco/rules",
    idx: "A3",
    icon: Scale,
    title: "Business Rules",
    desc: "The rules and the booking decision table.",
    meta: "11 rules",
  },
  {
    href: "/work/fiitco/docs",
    idx: "A4",
    icon: FileText,
    title: "Documents",
    desc: "Charter, BRD, PDD and UAT in a reading mode.",
    meta: "9 documents",
  },
  {
    href: "/work/fiitco/stakeholder",
    idx: "A5",
    icon: Users,
    title: "Stakeholder & RACI",
    desc: "Power and interest grid, plus the RACI matrix.",
    meta: "8 stakeholders",
  },
  {
    href: "/work/fiitco/rtm",
    idx: "A6",
    icon: GitBranch,
    title: "Traceability",
    desc: "Objective to requirement to closure signal.",
    meta: "8 requirements",
  },
  {
    href: "/work/fiitco/raid",
    idx: "A7",
    icon: ClipboardList,
    title: "RAID Log",
    desc: "Risks, assumptions, issues, dependencies.",
    meta: "5 categories",
  },
  {
    href: "/work/fiitco/diagrams",
    idx: "A8",
    icon: Network,
    title: "Diagrams",
    desc: "Architecture, ERD, data flow, use case and more.",
    meta: "11 diagrams",
  },
];

type FindingRec = { finding: string; rec: string; recBold: string };

const FINDINGS: FindingRec[] = [
  {
    finding:
      "Scheduling had no conflict check. A trainer or room could be booked twice for the same slot, and the clash surfaced only when someone noticed, so double-bookings were routine.",
    recBold: "A conflict gateway in the to-be booking flow.",
    rec: "The redesigned process checks availability at save and blocks any overlap before it is committed, so a clash can no longer reach the calendar.",
  },
  {
    finding:
      "Public content was edited out of band, so the schedule, pricing, and blog on the site drifted from reality. Stale pages met members at the exact moment they were deciding to book.",
    recBold: "CMS-driven content off the shared model.",
    rec: "Staff edits publish to the live site the same day from one source, so what a member sees is always what the studio actually offers.",
  },
  {
    finding:
      "Work spanned 27 modules with no shared data model. The same facts were re-entered in several places, which is exactly how the double-bookings and stale content took hold.",
    recBold: "One 32-table model as the single source of truth.",
    rec: "Every requirement traces to it, so scheduling, attendance, and the public site all read and write the same records instead of their own copies.",
  },
];

const TOOL_CHIPS = [
  "BABOK v3",
  "BPMN 2.0",
  "User Stories",
  "Next.js",
  "Convex",
  "TypeScript",
];

export default function FiitcoHubPage() {
  return (
    <div className="pf-page">
      <div className="pf-shell">
        <Link href="/work" className="pj-back">
          <ArrowLeft size={14} aria-hidden /> Back to All Projects
        </Link>

        <section className="pj-hero-head">
          <Badge tone="violet" style={{ marginBottom: 18 }}>
            Operations Platform
          </Badge>
          <h1
            className="pf-page-title"
            style={{ fontSize: "clamp(34px,3.6vw,52px)" }}
          >
            The BA work behind FIIT Co.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 660 }}>
            A fitness studio running its operations on manual, disconnected
            steps. This is the business analysis that turned that into two
            connected production systems, from the problem framing through to
            the modeled solution.
          </p>
        </section>

        {/* analyst's brief */}
        <section className="pj-section" style={{ marginTop: 36 }}>
          <Eyebrow prefix="" style={{ marginBottom: 8 }}>
            The analyst&rsquo;s brief
          </Eyebrow>
          <p className="pj-section-sub">
            Before the models, the framing: why the engagement existed, the
            question it set out to answer, and the payoff of solving it.
          </p>
          <div className="sla-brief">
            <div className="sla-brief-card">
              <span className="sla-brief-k">
                <AlertCircle size={15} aria-hidden /> Why it matters
              </span>
              <p>
                Class programming, scheduling, and the public site ran on
                manual, disconnected steps. Double-bookings were routine and
                web content went stale, costing staff hours and eroding member
                trust at the moment of booking.
              </p>
            </div>
            <div className="sla-brief-card">
              <span className="sla-brief-k">
                <HelpCircle size={15} aria-hidden /> The question
              </span>
              <p>
                Which operational workflows cause the most friction, and what
                would a single connected system have to do to eliminate
                double-bookings and keep the public site current without
                manual effort?
              </p>
            </div>
            <div className="sla-brief-card">
              <span className="sla-brief-k">
                <TrendingUp size={15} aria-hidden /> Business benefit
              </span>
              <p>
                Two connected systems replacing the manual steps: conflict-
                checked scheduling that blocks double-bookings, same-day
                content publishing, and one shared data model as the single
                source of truth across all 27 modules.
              </p>
            </div>
          </div>
          <div className="sla-approach">
            <div className="sla-approach-row">
              <span className="sla-approach-k">Data source</span>
              <span className="sla-approach-v">
                Stakeholder interviews and current-state walkthroughs with
                owner, front desk, and trainers. Elicited requirements
                documented in a Charter, BRD, and PRD, and traced through to
                closure.
              </span>
            </div>
            <div className="sla-approach-row">
              <span className="sla-approach-k">Analysis type</span>
              <span className="sla-approach-v">
                Diagnostic then design. As-is process mapping located the
                friction; to-be BPMN models, a data model, business rules, and
                a user-story backlog defined the solution.
              </span>
            </div>
            <div className="sla-approach-row">
              <span className="sla-approach-k">Scope &amp; caveats</span>
              <span className="sla-approach-v">
                27 modules across a staff operations app and a public customer
                site. Payments and third-party integrations were scoped as
                dependencies, not built in this engagement.
              </span>
            </div>
            <div className="sla-approach-row">
              <span className="sla-approach-k">Tooling</span>
              <span className="sla-approach-v">
                BABOK v3 practice, BPMN 2.0 for process models, Given/When/Then
                user stories, and a 32-table logical model. Delivered on
                Next.js and Convex, validated through UAT.
              </span>
            </div>
          </div>
        </section>

        {/* live production surfaces */}
        <section className="pj-section">
          <Eyebrow style={{ marginBottom: 8 }}>The live product</Eyebrow>
          <p className="pj-section-sub">
            Two applications, shipped to production and still running.
          </p>
          <div
            className="fx-index"
            style={{ gridTemplateColumns: "repeat(2, 1fr)" }}
          >
            {LIVE_PRODUCT.map((p) => {
              const Ico = p.icon;
              return (
              <a
                key={p.host}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="fx-idxcard"
              >
                <div className="fx-idxcard-top">
                  <span className="fx-idxcard-ic">
                    <Ico size={22} aria-hidden />
                  </span>
                  <span className="fx-idxcard-idx">
                    <CircleDot size={12} aria-hidden /> LIVE
                  </span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="fx-idxcard-foot">
                  <span className="fx-idxcard-meta">{p.host}</span>
                  <span className="fx-idxcard-go">
                    Visit <ArrowUpRight size={15} aria-hidden />
                  </span>
                </div>
              </a>
              );
            })}
          </div>
        </section>

        {/* live artifact index */}
        <section className="pj-section">
          <Eyebrow style={{ marginBottom: 8 }}>Explore the artifacts</Eyebrow>
          <p className="pj-section-sub">
            Eight deliverables, each as its own interactive surface.
          </p>
          <div className="fx-index">
            {LIVE_ARTIFACTS.map((a) => {
              const Ico = a.icon;
              return (
                <Link key={a.idx} href={a.href} className="fx-idxcard">
                  <div className="fx-idxcard-top">
                    <span className="fx-idxcard-ic">
                      <Ico size={22} aria-hidden />
                    </span>
                    <span className="fx-idxcard-idx">{a.idx}</span>
                  </div>
                  <h3>{a.title}</h3>
                  <p>{a.desc}</p>
                  <div className="fx-idxcard-foot">
                    <span className="fx-idxcard-meta">{a.meta}</span>
                    <span className="fx-idxcard-go">
                      Open <ArrowRight size={15} aria-hidden />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* findings to recommendations */}
        <section className="pj-section">
          <Eyebrow prefix="" style={{ marginBottom: 8 }}>
            Findings, and what to do about them
          </Eyebrow>
          <p className="pj-section-sub">
            Each finding came out of the as-is analysis. Each recommendation is
            the to-be design decision it drove, now traceable through the
            models on the following pages.
          </p>
          <div className="sla-frec">
            {FINDINGS.map((f, i) => (
              <div className="sla-frec-row" key={i}>
                <div className="sla-frec-f">
                  <span className="sla-frec-tag find">Finding</span>
                  <p>{f.finding}</p>
                </div>
                <div className="sla-frec-arrow">
                  <ArrowRight size={22} aria-hidden />
                </div>
                <div className="sla-frec-r">
                  <span className="sla-frec-tag rec">Recommendation</span>
                  <p>
                    <b>{f.recBold}</b> {f.rec}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* metrics */}
        <section className="pj-section">
          <div className="pj-metrics">
            <MetricStat
              value="27"
              label="Modules delivered"
              icon={<LayoutGrid size={22} aria-hidden />}
            />
            <MetricStat
              value="32"
              label="Data tables modeled"
              icon={<Table size={22} aria-hidden />}
            />
            <MetricStat
              value="2"
              label="Production systems"
              icon={<Rocket size={22} aria-hidden />}
            />
            <MetricStat
              value="Sole"
              label="Retained as administrator"
              icon={<UserCheck size={22} aria-hidden />}
            />
          </div>
        </section>

        {/* under the hood */}
        <details className="pj-hood">
          <summary>
            <Wrench size={16} aria-hidden /> Under the hood{" "}
            <span className="pj-hood-hint">method &amp; stack</span>
          </summary>
          <div className="pj-hood-body">
            <p>
              Requirements elicited through stakeholder interviews and
              current-state walkthroughs; modeled in BPMN 2.0 (as-is / to-be);
              specified as a user-story backlog with Given/When/Then acceptance
              criteria traced to a 32-table data model. Delivered on Next.js
              and Convex, validated through UAT, and operated in production.
            </p>
            <div className="pj-chips">
              {TOOL_CHIPS.map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>
          </div>
        </details>

        {/* next */}
        <Link href="/work/fiitco/process" className="pj-next">
          <div>
            <span className="pj-next-lbl">Start with</span>
            <span className="pj-next-title">Process Models</span>
          </div>
          <ArrowRight size={20} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
