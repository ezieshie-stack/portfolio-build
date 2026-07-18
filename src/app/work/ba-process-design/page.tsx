import Link from "next/link";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  ClipboardList,
  FileText,
  GitCompare,
  HelpCircle,
  Layers,
  Network,
  Scale,
  TrendingUp,
  Users,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Chip } from "@/components/ui/Chip";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MetricStat } from "@/components/ui/MetricStat";

export const metadata = {
  title: "Business Analysis & Process Design Portfolio | David Ezieshi",
  description:
    "BABOK v3 artifact set: BRD, as-is / to-be process design, BPMN swimlanes, and use-case specifications on a representative operational scenario.",
};

type Artifact = {
  href: string;
  idx: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  meta: string;
};

const ARTIFACTS: Artifact[] = [
  {
    href: "/work/ba-process-design/brd",
    idx: "B1",
    icon: ClipboardList,
    title: "Business Requirements Document",
    desc: "Scope, stakeholder register, functional and non-functional requirements, the sponsor-signable spec.",
    meta: "BRD",
  },
  {
    href: "/work/ba-process-design/process",
    idx: "B2",
    icon: GitCompare,
    title: "Process Design (As-Is / To-Be)",
    desc: "Current-state walkthrough, gap analysis, and the redesigned to-be process with exception handling.",
    meta: "As-Is / To-Be",
  },
  {
    href: "/work/ba-process-design/bpmn",
    idx: "B3",
    icon: Network,
    title: "BPMN Swimlane Diagrams",
    desc: "Formal process notation with swimlanes, decision gateways, and message flows across actors.",
    meta: "BPMN 2.0",
  },
  {
    href: "/work/ba-process-design/use-cases",
    idx: "B4",
    icon: Workflow,
    title: "Use Case Specifications",
    desc: "Actor-system flows with pre-conditions, post-conditions, and alternate paths.",
    meta: "UML use cases",
  },
];

const FINDINGS = [
  {
    finding:
      "Operational optimisation projects that skip the requirements step ship faster but re-scope more. A signed BRD converts &lsquo;let&rsquo;s try this&rsquo; into a decision with an owner.",
    recBold: "Author the BRD before touching design.",
    rec: "Scope, stakeholders, and functional/non-functional requirements up front. Every downstream artifact traces to a numbered requirement.",
  },
  {
    finding:
      "As-is process maps get skipped because they feel like a lot of work for &lsquo;what we already know.&rsquo; The gap analysis is where the real design decisions surface.",
    recBold: "Map as-is before to-be.",
    rec: "Every to-be step should answer a specific pain in the as-is map. If it doesn&rsquo;t, it&rsquo;s a nice-to-have, not a requirement.",
  },
  {
    finding:
      "Use-case specs and BPMN diagrams look redundant to non-BAs, they answer different questions. BPMN shows what the process does; use cases show what the actor does inside it.",
    recBold: "Ship both. They&rsquo;re not duplicates.",
    rec: "Use cases feed the developer&rsquo;s user stories. BPMN feeds the operator&rsquo;s runbook. Different audience, same underlying design.",
  },
];

const CHIPS = ["BABOK v3", "BPMN 2.0", "UML", "MoSCoW", "Given/When/Then", "Lucidchart"];

export default function BaProjectHubPage() {
  return (
    <div className="pf-page">
      <div className="pf-shell">
        <Link href="/work" className="pj-back">
          <ArrowLeft size={14} aria-hidden /> Back to All Projects
        </Link>

        <section className="pj-hero-head">
          <Badge tone="violet" style={{ marginBottom: 18 }}>
            Business Analysis Methodology
          </Badge>
          <h1
            className="pf-page-title"
            style={{ fontSize: "clamp(34px,3.6vw,52px)" }}
          >
            The BA toolkit, end to end.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 700 }}>
            A representative BABOK v3 artifact set, Business Requirements
            Document, as-is / to-be process design, BPMN swimlane diagrams, and
            use-case specifications, demonstrating the methodology a business
            analyst runs on an operational-optimisation engagement.
          </p>
        </section>

        {/* analyst's brief */}
        <section className="pj-section" style={{ marginTop: 36 }}>
          <Eyebrow prefix="" style={{ marginBottom: 8 }}>
            The analyst&rsquo;s brief
          </Eyebrow>
          <p className="pj-section-sub">
            Business analysis gets judged on artifacts. This portfolio shows
            the ones a hiring team will actually ask to see.
          </p>
          <div className="sla-brief">
            <div className="sla-brief-card">
              <span className="sla-brief-k">
                <AlertCircle size={15} aria-hidden /> Why it matters
              </span>
              <p>
                Every operational-optimisation project fails at one of three
                seams: unclear scope, undocumented as-is, or ambiguous
                acceptance criteria. The four artifacts below cover all three.
              </p>
            </div>
            <div className="sla-brief-card">
              <span className="sla-brief-k">
                <HelpCircle size={15} aria-hidden /> The question
              </span>
              <p>
                Can the analyst scope a business problem, model the process
                and data behind it, and specify the solution well enough that
                a developer, a compliance reviewer, and an operator can each
                pick up their part without asking follow-up questions?
              </p>
            </div>
            <div className="sla-brief-card">
              <span className="sla-brief-k">
                <TrendingUp size={15} aria-hidden /> Business benefit
              </span>
              <p>
                A signed BRD kills scope creep. A gap-analysed to-be process
                cuts rework. BPMN + use cases together shorten hand-off
                friction. The artifacts are the deliverable, but the
                traceability between them is the point.
              </p>
            </div>
          </div>
          <div className="sla-approach">
            <div className="sla-approach-row">
              <span className="sla-approach-k">Practice framework</span>
              <span className="sla-approach-v">
                BABOK v3 knowledge areas, Business Analysis Planning,
                Elicitation, Requirements Life Cycle Management, Strategy
                Analysis, and Solution Evaluation.
              </span>
            </div>
            <div className="sla-approach-row">
              <span className="sla-approach-k">Notation</span>
              <span className="sla-approach-v">
                BPMN 2.0 for process modelling, UML use cases for actor-system
                interactions, MoSCoW for requirements prioritisation,
                Given/When/Then for acceptance criteria.
              </span>
            </div>
            <div className="sla-approach-row">
              <span className="sla-approach-k">Traceability</span>
              <span className="sla-approach-v">
                Every requirement in the BRD carries an ID. Every process step
                and use case references those IDs, so a single row in a
                traceability matrix links business objective → requirement →
                process step → use case → acceptance criterion.
              </span>
            </div>
            <div className="sla-approach-row">
              <span className="sla-approach-k">Scope of this portfolio</span>
              <span className="sla-approach-v">
                A representative operational-optimisation scenario chosen to
                exercise every BABOK knowledge area without depending on any
                specific domain. The methodology is the deliverable, not the
                domain.
              </span>
            </div>
          </div>
        </section>

        {/* findings → recommendations */}
        <section className="pj-section">
          <Eyebrow prefix="" style={{ marginBottom: 8 }}>
            Practice notes, and what to do about them
          </Eyebrow>
          <p className="pj-section-sub">
            The three habits that separate BA work that ships from BA work
            that stalls.
          </p>
          <div className="sla-frec">
            {FINDINGS.map((f, i) => (
              <div className="sla-frec-row" key={i}>
                <div className="sla-frec-f">
                  <span className="sla-frec-tag find">Note</span>
                  <p dangerouslySetInnerHTML={{ __html: f.finding }} />
                </div>
                <div className="sla-frec-arrow">
                  <ArrowRight size={22} aria-hidden />
                </div>
                <div className="sla-frec-r">
                  <span className="sla-frec-tag rec">Practice</span>
                  <p>
                    <b
                      dangerouslySetInnerHTML={{ __html: f.recBold }}
                    />{" "}
                    <span dangerouslySetInnerHTML={{ __html: f.rec }} />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* artifact index */}
        <section className="pj-section">
          <Eyebrow prefix="" style={{ marginBottom: 8 }}>
            The four artifacts
          </Eyebrow>
          <p className="pj-section-sub">
            Each stands alone, but each references the others through a shared
            requirements register.
          </p>
          <div className="fx-index">
            {ARTIFACTS.map((a) => {
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

        {/* metrics */}
        <section className="pj-section">
          <div className="pj-metrics">
            <MetricStat
              value="4"
              label="Core BA artifacts"
              icon={<Layers size={22} aria-hidden />}
            />
            <MetricStat
              value="BRD"
              label="Sponsor-signable spec"
              icon={<ClipboardList size={22} aria-hidden />}
            />
            <MetricStat
              value="BPMN 2.0"
              label="Process notation"
              icon={<Network size={22} aria-hidden />}
            />
            <MetricStat
              value="As-Is/To-Be"
              label="Gap analysis"
              icon={<Scale size={22} aria-hidden />}
            />
          </div>
        </section>

        {/* under the hood */}
        <details className="pj-hood">
          <summary>
            <Wrench size={16} aria-hidden /> Under the hood{" "}
            <span className="pj-hood-hint">practice &amp; framework</span>
          </summary>
          <div className="pj-hood-body">
            <p>
              Requirements elicited through stakeholder analysis and
              current-state walkthroughs, prioritised with MoSCoW, and
              validated through use-case walkthroughs. Process modelled in
              BPMN 2.0 with swimlanes per actor. Acceptance criteria written
              in Given/When/Then form so each requirement is testable.
            </p>
            <div className="pj-chips">
              {CHIPS.map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>
          </div>
        </details>

        <Link href="/work/ba-process-design/brd" className="pj-next">
          <div>
            <span className="pj-next-lbl">Start with</span>
            <span className="pj-next-title">
              Business Requirements Document
            </span>
          </div>
          <ArrowRight size={20} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
