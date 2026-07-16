import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { BaSubNav } from "@/components/work/ba/BaSubNav";

export const metadata = {
  title: "BA · Process Design (B2) | David Ezieshi",
  description:
    "As-is / to-be process design with gap analysis and exception handling for the operational-optimisation scenario.",
};

type PairSection = {
  id: string;
  title: string;
  brRef: string;
  pain: string;
  win: string;
  asis: string[];
  tobe: string[];
};

const PAIRS: PairSection[] = [
  {
    id: "submit",
    title: "1 · Request submission",
    brRef: "FR-01 · FR-02 · FR-03",
    pain:
      "Requests arrive via email, chat, and walk-ups. The operations lead spends the first hour of every day just sorting.",
    win:
      "One submission surface with structured fields. Routing happens automatically off the routing matrix, not off the operations lead&rsquo;s memory.",
    asis: [
      "Requester emails / messages / walks up to operations lead",
      "Operations lead reads request, guesses the right approver",
      "Forwards to approver, sometimes CCs the wrong person",
      "❌ Request may sit in an inbox for hours",
      "❌ No structured record of what was requested",
    ],
    tobe: [
      "Requester fills a structured form on the system (FR-01)",
      "System reads routing matrix and picks the approver (FR-02)",
      "Approver receives email notification within 1 minute (FR-03)",
      "Every field captured; audit log written from step 1",
    ],
  },
  {
    id: "approve",
    title: "2 · Approval decision",
    brRef: "FR-04 · FR-05 · NFR-03",
    pain:
      "The approver sees the request but has no consistent way to record a &lsquo;returned for revision.&rsquo; They usually reply-all with a comment and no state change is recorded.",
    win:
      "Approve / reject / return-for-revision are three explicit actions. Each writes a timestamped state change to the audit log.",
    asis: [
      "Approver reads the email",
      "Replies with approve, reject, or ambiguous questions",
      "Requester (and everyone CCed) parses the reply",
      "❌ &ldquo;Returned for revision&rdquo; state doesn&rsquo;t exist — it&rsquo;s a natural-language response",
      "❌ No timestamp on the decision moment",
    ],
    tobe: [
      "Approver opens the request in the system",
      "Selects Approve / Reject / Return-for-revision (FR-04)",
      "Return-for-revision requires a reason string",
      "System writes state change with timestamp + actor identity (FR-05, NFR-03)",
      "Requester sees the state update immediately (FR-06)",
    ],
  },
  {
    id: "report",
    title: "3 · Weekly operational reporting",
    brRef: "FR-07 · NFR-01",
    pain:
      "The operations lead spends Friday afternoon assembling numbers from three different mailboxes and a spreadsheet. Numbers are always &lsquo;approximately&rsquo; right.",
    win:
      "The report is a query. Numbers are exact, generated on demand, and identical for every stakeholder viewing them.",
    asis: [
      "Operations lead scrolls three inboxes on Friday",
      "Manually counts approvals, rejections, revisions",
      "Types results into a spreadsheet",
      "Emails spreadsheet to sponsor",
      "❌ Prone to counting errors",
      "❌ No historical record — spreadsheets get overwritten",
    ],
    tobe: [
      "System aggregates state-change events from the audit log",
      "Weekly report generated on demand (FR-07)",
      "Grouped by team and outcome, sub-2.5s response (NFR-01)",
      "Sponsor + ops lead see identical numbers, any time they open it",
    ],
  },
];

const EXCEPTIONS = [
  {
    trigger: "Approver is unavailable (leave, illness, travel)",
    handling:
      "System supports fixed-date delegation (FR-08 — Could). Absent that, request routes to the approver&rsquo;s manager after a documented timeout.",
  },
  {
    trigger: "Requester submits with missing required fields",
    handling:
      "Form-level validation prevents submission. No half-formed request ever reaches the approver.",
  },
  {
    trigger: "Approver rejects but requester disagrees",
    handling:
      "Requester can re-submit as a new request with a reference to the rejected one. Escalation to the sponsor is out of scope for v1 — flagged in the RAID log.",
  },
  {
    trigger: "System is unavailable during operational hours",
    handling:
      "NFR-02 governs (99.5% availability). Documented fallback: paper-based submission with same-day back-fill by the operations lead.",
  },
];

export default function ProcessPage() {
  return (
    <div className="pf-page">
      <div className="pf-shell">
        <BaSubNav active="process" />

        <section className="pj-hero-head" style={{ marginTop: 28 }}>
          <Badge tone="violet" style={{ marginBottom: 16 }}>
            Artifact B2 · Process Design · As-Is / To-Be
          </Badge>
          <h1
            className="pf-page-title"
            style={{ fontSize: "clamp(30px,3.2vw,46px)" }}
          >
            Every to-be step answers a specific as-is pain.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 700 }}>
            Three process pairs — submission, approval, reporting — with the
            documented pain in the as-is, the specific redesign in the to-be,
            and the requirement IDs each step traces back to.
          </p>
        </section>

        <section className="pj-section" style={{ marginTop: 32 }}>
          <div className="pj-process-list">
            {PAIRS.map((p) => (
              <article className="pj-process-card" key={p.id} id={p.id}>
                <header className="pj-process-head">
                  <h2>{p.title}</h2>
                  <span className="pj-process-br">{p.brRef}</span>
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
                      <strong>Pain:</strong>{" "}
                      <span dangerouslySetInnerHTML={{ __html: p.pain }} />
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
                      <strong>Win:</strong>{" "}
                      <span dangerouslySetInnerHTML={{ __html: p.win }} />
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Exception handling */}
        <section className="pj-section">
          <Eyebrow style={{ marginBottom: 8 }}>Exception handling</Eyebrow>
          <p className="pj-section-sub">
            The to-be process is only useful when it holds under stress. Four
            documented exception paths.
          </p>
          <div className="rd-rows">
            {EXCEPTIONS.map((e, i) => (
              <div className="rd-row" key={i}>
                <span className="rd-row-id">EX-{String(i + 1).padStart(2, "0")}</span>
                <span className="rd-row-t">
                  <b>{e.trigger}</b> — <span dangerouslySetInnerHTML={{ __html: e.handling }} />
                </span>
                <span className="rd-status">documented</span>
              </div>
            ))}
          </div>
        </section>

        <div className="cov-note">
          <ArrowRight size={18} aria-hidden />
          <p>
            <b>Gap analysis output.</b> Every to-be step above answers a
            specific as-is pain and closes at least one requirement in the
            BRD. Steps that don&rsquo;t serve either an as-is pain or a
            requirement are cut — no nice-to-haves survive the gap analysis.
          </p>
        </div>

        <Link href="/work/ba-process-design/bpmn" className="pj-next">
          <div>
            <span className="pj-next-lbl">Next artifact</span>
            <span className="pj-next-title">BPMN Swimlane Diagrams</span>
          </div>
          <ArrowRight size={20} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
