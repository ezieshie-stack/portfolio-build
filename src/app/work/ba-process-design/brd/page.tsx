import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { BaSubNav } from "@/components/work/ba/BaSubNav";

export const metadata = {
  title: "BA · Business Requirements Document (B1) | David Ezieshi",
  description:
    "BRD sections: scope, stakeholder register, functional and non-functional requirements, MoSCoW prioritisation.",
};

type Req = { id: string; text: string; moscow: "Must" | "Should" | "Could" | "Won't" };

const FUNCTIONAL: Req[] = [
  { id: "FR-01", text: "The system shall allow an authorised user to submit an operational request with the fields defined in Appendix A.", moscow: "Must" },
  { id: "FR-02", text: "The system shall route each submitted request to the correct approver based on the routing matrix (Section 4.3).", moscow: "Must" },
  { id: "FR-03", text: "The system shall notify the approver by email within one minute of submission.", moscow: "Must" },
  { id: "FR-04", text: "The system shall allow the approver to approve, reject with reason, or return for revision.", moscow: "Must" },
  { id: "FR-05", text: "The system shall record every state change with a timestamp and the identity of the actor.", moscow: "Must" },
  { id: "FR-06", text: "The system shall let the submitter view the current status of any request they authored.", moscow: "Should" },
  { id: "FR-07", text: "The system shall produce a weekly operational report grouped by team and outcome.", moscow: "Should" },
  { id: "FR-08", text: "The system shall support delegation of approver authority for a fixed date range.", moscow: "Could" },
];

const NON_FUNCTIONAL: Req[] = [
  { id: "NFR-01", text: "95th percentile page load under 2.5 seconds on a standard broadband connection.", moscow: "Must" },
  { id: "NFR-02", text: "The system shall be available 99.5% during operational hours.", moscow: "Must" },
  { id: "NFR-03", text: "All mutations shall write to an append-only audit log.", moscow: "Must" },
  { id: "NFR-04", text: "The user interface shall meet WCAG 2.1 AA on public routes.", moscow: "Should" },
  { id: "NFR-05", text: "The system shall support browsers released within the last 24 months.", moscow: "Should" },
  { id: "NFR-06", text: "Handover documentation shall be delivered alongside the production release.", moscow: "Must" },
];

const STAKEHOLDERS = [
  { id: "S1", name: "Sponsor", role: "Owns operational outcomes and signs off deliverables.", quadrant: "Manage Closely" },
  { id: "S2", name: "Operations Lead", role: "Owns the current process and the team affected by change.", quadrant: "Manage Closely" },
  { id: "S3", name: "Business Analyst", role: "Author of every artifact; runs elicitation + traceability.", quadrant: "Continuous" },
  { id: "S4", name: "Development Partner", role: "Delivers the technical solution against the specs.", quadrant: "Continuous" },
  { id: "S5", name: "End Users", role: "Submitters and approvers who exercise the system daily.", quadrant: "Keep Informed" },
  { id: "S6", name: "Compliance / Audit", role: "Reviews the audit trail and data handling posture.", quadrant: "Keep Satisfied" },
];

const SCOPE_IN = [
  "Request submission and approval workflow for the operational-optimisation scenario",
  "Role-based access control (submitter, approver, admin)",
  "Audit logging of every state change",
  "Weekly reporting to the operations lead",
];

const SCOPE_OUT = [
  "Financial reconciliation and general ledger integration",
  "Mobile-native applications (responsive web only)",
  "Multi-tenant hosting",
  "Automated escalation to third-party systems",
];

export default function BrdPage() {
  return (
    <div className="pf-page">
      <div className="pf-shell">
        <BaSubNav active="brd" />

        <section className="pj-hero-head" style={{ marginTop: 28 }}>
          <Badge tone="violet" style={{ marginBottom: 16 }}>
            Artifact B1 · Business Requirements Document
          </Badge>
          <h1
            className="pf-page-title"
            style={{ fontSize: "clamp(30px,3.2vw,46px)" }}
          >
            The sponsor-signable spec.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 700 }}>
            The BRD is the single source of truth for scope, stakeholders, and
            requirements. Every downstream artifact — process design, BPMN,
            use cases — references the requirement IDs below, so traceability
            is preserved end to end.
          </p>
        </section>

        {/* Scope */}
        <section className="pj-section" style={{ marginTop: 32 }}>
          <Eyebrow style={{ marginBottom: 8 }}>Scope</Eyebrow>
          <p className="pj-section-sub">
            &ldquo;What is in&rdquo; is only useful when paired with &ldquo;what
            is out.&rdquo; Every deferral is documented before build begins.
          </p>
          <div className="sla-frec">
            <div className="sla-frec-row">
              <div className="sla-frec-f">
                <span className="sla-frec-tag rec">In scope</span>
                <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 1.7 }}>
                  {SCOPE_IN.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
              <div className="sla-frec-arrow">
                <ArrowRight size={22} aria-hidden />
              </div>
              <div className="sla-frec-r">
                <span className="sla-frec-tag find">Out of scope</span>
                <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 1.7 }}>
                  {SCOPE_OUT.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Stakeholders */}
        <section className="pj-section">
          <Eyebrow style={{ marginBottom: 8 }}>Stakeholder register</Eyebrow>
          <p className="pj-section-sub">
            Six stakeholders, each with a role and an engagement quadrant. IDs
            (S1–S6) are the traceability keys downstream artifacts refer to.
          </p>
          <div className="sk-reg">
            {STAKEHOLDERS.map((s) => (
              <div className="sk-row" key={s.id}>
                <span className="sk-row-id">{s.id}</span>
                <span className="sk-row-name">{s.name}</span>
                <span className="sk-row-role">{s.role}</span>
                <span
                  className={`sk-quadtag${
                    s.quadrant === "Manage Closely" || s.quadrant === "Continuous"
                      ? " manage"
                      : ""
                  }`}
                >
                  {s.quadrant}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Functional requirements */}
        <section className="pj-section">
          <Eyebrow style={{ marginBottom: 8 }}>Functional requirements</Eyebrow>
          <p className="pj-section-sub">
            What the system must do, in numbered form. Each FR is testable and
            carries a MoSCoW priority.
          </p>
          <div className="pj-rules-list">
            {FUNCTIONAL.map((r) => (
              <article className="pj-rules-card" key={r.id}>
                <header>
                  <span className="pj-rules-id">{r.id}</span>
                </header>
                <p className="pj-rules-text">{r.text}</p>
                <div className="pj-rules-meta">
                  <div>
                    <span className="pj-rules-meta-k">MoSCoW</span>
                    <span className="pj-rules-meta-v">
                      <CheckCircle2 size={14} aria-hidden /> {r.moscow}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Non-functional requirements */}
        <section className="pj-section">
          <Eyebrow style={{ marginBottom: 8 }}>Non-functional requirements</Eyebrow>
          <p className="pj-section-sub">
            How the system must perform. Non-functional requirements are as
            binding as functional ones and often shape more of the delivery
            plan.
          </p>
          <div className="pj-rules-list">
            {NON_FUNCTIONAL.map((r) => (
              <article className="pj-rules-card" key={r.id}>
                <header>
                  <span className="pj-rules-id">{r.id}</span>
                </header>
                <p className="pj-rules-text">{r.text}</p>
                <div className="pj-rules-meta">
                  <div>
                    <span className="pj-rules-meta-k">MoSCoW</span>
                    <span className="pj-rules-meta-v">
                      <CheckCircle2 size={14} aria-hidden /> {r.moscow}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="cov-note">
          <CheckCircle2 size={18} aria-hidden />
          <p>
            <b>Traceability rule.</b> Every FR and NFR ID above is referenced
            by at least one process step (B2 / B3) and at least one use case
            (B4). If a requirement has no downstream reference, it is either
            un-implemented or over-scoped — both cases trigger a review with
            the sponsor.
          </p>
        </div>

        <Link href="/work/ba-process-design/process" className="pj-next">
          <div>
            <span className="pj-next-lbl">Next artifact</span>
            <span className="pj-next-title">Process Design (As-Is / To-Be)</span>
          </div>
          <ArrowRight size={20} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
