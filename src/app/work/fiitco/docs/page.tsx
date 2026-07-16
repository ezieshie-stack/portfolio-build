import Link from "next/link";
import {
  ArrowRight,
  ClipboardList,
  FileText,
  Flag,
  FlagTriangleRight,
  Gauge,
  LayoutTemplate,
  ListChecks,
  Scale,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FiitSubNav } from "@/components/work/fiitco/FiitSubNav";

export const metadata = {
  title: "FIIT Co. · Documents (A4) | David Ezieshi",
  description:
    "The nine BA deliverables from the FIIT Co. engagement — Charter, BRD, PDD, UAT and more, each linked to the live interactive artifact they power.",
};

type DocEntry = {
  id: string;
  group: "Initiate" | "Analyze" | "Design" | "Deliver" | "Close";
  code: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  live?: { href: string; label: string; blurb: string };
};

const DOCS: DocEntry[] = [
  {
    id: "charter",
    group: "Initiate",
    code: "BA-01",
    title: "Project Charter",
    icon: Flag,
    summary:
      "Five business objectives, engagement scope, and governance. The document every other artifact traces back to.",
    live: {
      href: "/work/fiitco#hub",
      label: "Back to artifact index",
      blurb: "Objectives O1–O5 and stakeholders live in the hub view.",
    },
  },
  {
    id: "exec",
    group: "Initiate",
    code: "BA-05",
    title: "Executive Summary",
    icon: Gauge,
    summary:
      "One-page distillation of the whole engagement: what was scoped, what shipped, what was deferred to Wave 3.",
  },
  {
    id: "brd",
    group: "Analyze",
    code: "BA-03",
    title: "Business Requirements Document",
    icon: ClipboardList,
    summary:
      "Eight Business Requirements (BR-01 – BR-08) mapped to the five Charter Objectives, plus eight business rules and the assumptions register.",
    live: {
      href: "/work/fiitco/rules",
      label: "See the 8 business rules",
      blurb: "The BRD's rules are the source for the A3 · Rules artifact.",
    },
  },
  {
    id: "personas",
    group: "Analyze",
    code: "BA-04",
    title: "Personas &amp; Journey Maps",
    icon: Users,
    summary:
      "Five personas (Arden, Jason, Heather, Maya, Sam) and the four journey maps that surfaced the referral, guest-pass, availability, and CMS pain points.",
    live: {
      href: "/work/fiitco/process",
      label: "See the process pairs these journeys drove",
      blurb:
        "Each persona pain has a corresponding as-is / to-be process pair in A1.",
    },
  },
  {
    id: "pdd",
    group: "Design",
    code: "PDD",
    title: "Product Design Document",
    icon: LayoutTemplate,
    summary:
      "The design's data model, page inventory, and interaction spec. Ports directly into the ERD on A2.",
    live: {
      href: "/work/fiitco/data",
      label: "See the ERD",
      blurb:
        "The 28-table Convex schema documented in the PDD is explorable on A2.",
    },
  },
  {
    id: "stories",
    group: "Design",
    code: "BA-10",
    title: "User Story Backlog",
    icon: ListChecks,
    summary:
      "22 user stories with Given/When/Then acceptance criteria. Each ties to a BR and each closes with one or more test cases.",
    live: {
      href: "/work/fiitco/rules",
      label: "See the business rules the ACs encode",
      blurb:
        "Acceptance criteria are the enforceable form of the business rules on A3.",
    },
  },
  {
    id: "uat",
    group: "Deliver",
    code: "BA-07",
    title: "UAT Plan &amp; Test Cases",
    icon: ShieldCheck,
    summary:
      "31 test cases across the 22 stories. At closure snapshot: 4 formally Passed, 17 In UAT, 13 In Build. Zero failures.",
  },
  {
    id: "vendor",
    group: "Deliver",
    code: "BA-13",
    title: "Vendor Comparison Matrix",
    icon: Scale,
    summary:
      "Weighted scorecard that produced the Trainerize recommendation (4.55 / 5) with TrueCoach as documented fallback.",
  },
  {
    id: "closure",
    group: "Close",
    code: "BA-16",
    title: "Closure Report",
    icon: FlagTriangleRight,
    summary:
      "Final rollup: 4 objectives fully met, 1 partially (O4 customer website MVP). Zero descoped. Wave 3 backlog logged in RAID.",
  },
];

function groupOrder(g: DocEntry["group"]): number {
  return ["Initiate", "Analyze", "Design", "Deliver", "Close"].indexOf(g);
}

const GROUPED = ["Initiate", "Analyze", "Design", "Deliver", "Close"].map(
  (g) => ({
    name: g,
    items: DOCS.filter((d) => d.group === g),
  })
);

export default function FiitDocsPage() {
  return (
    <div className="pf-page">
      <div className="pf-shell">
        <FiitSubNav active="docs" />

        <section className="pj-hero-head" style={{ marginTop: 28 }}>
          <Badge tone="violet" style={{ marginBottom: 16 }}>
            Artifact A4 · Documents · Library
          </Badge>
          <h1
            className="pf-page-title"
            style={{ fontSize: "clamp(30px,3.2vw,46px)" }}
          >
            Nine documents. Every one a link into an interactive artifact.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 700 }}>
            The written BA deliverables — Charter, BRD, PDD, personas, user
            stories, UAT, closure — grouped by phase. Each card summarises the
            document and points at the live artifact the document powers.
          </p>
        </section>

        <section className="pj-section" style={{ marginTop: 32 }}>
          <div className="pj-docs-library">
            {GROUPED.map((g) =>
              g.items.length > 0 ? (
                <div className="pj-docs-group" key={g.name}>
                  <h2 className="pj-docs-phase">{g.name}</h2>
                  <div className="pj-docs-cards">
                    {g.items.map((d) => {
                      const Ico = d.icon;
                      return (
                        <article className="pj-docs-card" key={d.id} id={d.id}>
                          <header>
                            <span className="pj-docs-ic">
                              <Ico size={20} aria-hidden />
                            </span>
                            <div className="pj-docs-code">
                              <span className="pj-docs-code-id">{d.code}</span>
                              <span
                                className="pj-docs-code-title"
                                dangerouslySetInnerHTML={{ __html: d.title }}
                              />
                            </div>
                          </header>
                          <p className="pj-docs-summary">{d.summary}</p>
                          {d.live && (
                            <Link href={d.live.href} className="pj-docs-live">
                              <span className="pj-docs-live-blurb">
                                {d.live.blurb}
                              </span>
                              <span className="pj-docs-live-cta">
                                {d.live.label}{" "}
                                <ArrowRight size={14} aria-hidden />
                              </span>
                            </Link>
                          )}
                        </article>
                      );
                    })}
                  </div>
                </div>
              ) : null
            )}
          </div>
        </section>

        <section className="pj-section">
          <div className="pj-note">
            Full reading-mode (scroll-spy table of contents, faithful table +
            list rendering, inline callouts) ships in a follow-up slice — the
            markdown parser + reader engine is being ported from the
            prototype.
          </div>
        </section>

        <Link href="/work/fiitco" className="pj-next">
          <div>
            <span className="pj-next-lbl">Return to</span>
            <span className="pj-next-title">FIIT Co. hub</span>
          </div>
          <ArrowRight size={20} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
