import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { BaSubNav } from "@/components/work/ba/BaSubNav";

export const metadata = {
  title: "BA · Use Case Specifications (B4) | David Ezieshi",
  description:
    "UML use case specifications with actor-system flows, pre-conditions, post-conditions, and alternate paths.",
};

type UseCase = {
  id: string;
  title: string;
  actor: string;
  brRef: string;
  goal: string;
  precondition: string;
  postcondition: string;
  main: string[];
  alt: { trigger: string; step: string }[];
};

const USE_CASES: UseCase[] = [
  {
    id: "UC-01",
    title: "Submit an operational request",
    actor: "Requester",
    brRef: "FR-01 · FR-02 · FR-03",
    goal: "Log a request in the system so it reaches the correct approver without manual routing.",
    precondition: "Actor is authenticated and holds the Requester role.",
    postcondition:
      "Request is persisted, routed to the correct approver, notification sent, audit log entry written.",
    main: [
      "Requester opens the submission form.",
      "Requester fills all required fields (Appendix A).",
      "Requester submits.",
      "System validates every required field is present and well-formed.",
      "System looks up the correct approver in the routing matrix.",
      "System writes the request with status = Pending and an audit-log entry.",
      "System sends an email notification to the approver within one minute.",
      "System displays a confirmation with the request ID.",
    ],
    alt: [
      { trigger: "4a. Validation fails", step: "System highlights invalid fields; request is not submitted; requester stays on the form." },
      { trigger: "5a. Routing matrix has no match", step: "System routes to the default approver defined for the requester&rsquo;s team, logs the event as a routing exception." },
      { trigger: "7a. Email delivery fails", step: "System retries with exponential backoff up to 3 attempts; on final failure, requester is shown a warning and operations lead is notified out-of-band." },
    ],
  },
  {
    id: "UC-02",
    title: "Approve, reject, or return a request",
    actor: "Approver",
    brRef: "FR-04 · FR-05",
    goal: "Record an authoritative decision on a request so downstream actions can proceed.",
    precondition:
      "Actor is authenticated, holds the Approver role, and the request is assigned to them with status = Pending.",
    postcondition:
      "Request state is updated to Approved, Rejected, or Returned-for-revision; audit-log entry written; requester notified.",
    main: [
      "Approver opens the pending request from their inbox link or dashboard.",
      "Approver reviews the request fields and context.",
      "Approver selects one action: Approve, Reject, or Return-for-revision.",
      "If Reject or Return, approver enters a reason (required, min. 20 characters).",
      "Approver confirms the decision.",
      "System writes state change with timestamp and actor identity to the audit log.",
      "System notifies the requester of the outcome.",
      "System updates the request&rsquo;s visible status.",
    ],
    alt: [
      { trigger: "3a. Approver has delegation active", step: "System reroutes the request to the delegate&rsquo;s queue instead of accepting the decision from the original approver." },
      { trigger: "4a. Reason field is under 20 characters", step: "System blocks submission and highlights the reason field." },
      { trigger: "6a. Audit-log write fails", step: "System does not persist the state change; approver is shown an error and prompted to retry." },
    ],
  },
  {
    id: "UC-03",
    title: "View request status",
    actor: "Requester",
    brRef: "FR-06",
    goal: "See the current state of a request the actor previously submitted.",
    precondition: "Actor is authenticated and holds the Requester role.",
    postcondition: "Actor sees the current state and full audit trail for the requested item.",
    main: [
      "Requester navigates to &lsquo;My Requests.&rsquo;",
      "System lists all requests authored by the requester, most recent first.",
      "Requester selects a request.",
      "System displays the request&rsquo;s current state, submission timestamp, decision timestamp (if any), and reason (if any).",
      "System displays the audit-log entries for the request in chronological order.",
    ],
    alt: [
      { trigger: "3a. Requester has authored no requests", step: "System displays the empty state with a link to the submission form." },
      { trigger: "4a. Request was decided but no reason was provided", step: "System shows the state change with an empty reason placeholder; the audit log still shows the actor and timestamp." },
    ],
  },
  {
    id: "UC-04",
    title: "Run the weekly operational report",
    actor: "Operations Lead",
    brRef: "FR-07 · NFR-01",
    goal: "Get the week&rsquo;s outcomes grouped by team without manually assembling data.",
    precondition:
      "Actor is authenticated, holds the Operations Lead role, and the week has at least one closed request.",
    postcondition:
      "Report is rendered on-screen and available for share; no side effects.",
    main: [
      "Operations Lead navigates to the Weekly Report page.",
      "System reads the last 7 days of state-change events from the audit log.",
      "System groups events by team and by outcome (Approved, Rejected, Returned).",
      "System renders the report table plus per-team totals in under 2.5s (NFR-01).",
      "Operations Lead reviews the numbers.",
      "Operations Lead shares the report link with the sponsor.",
    ],
    alt: [
      { trigger: "3a. A team has zero events this week", step: "System still renders the row with zeros — absence is data." },
      { trigger: "4a. Report generation exceeds 2.5s", step: "System renders progressively (per-team rows stream in) and logs the slow query for follow-up." },
    ],
  },
];

export default function UseCasesPage() {
  return (
    <div className="pf-page">
      <div className="pf-shell">
        <BaSubNav active="use-cases" />

        <section className="pj-hero-head" style={{ marginTop: 28 }}>
          <Badge tone="violet" style={{ marginBottom: 16 }}>
            Artifact B4 · Use Case Specifications
          </Badge>
          <h1
            className="pf-page-title"
            style={{ fontSize: "clamp(30px,3.2vw,46px)" }}
          >
            Four use cases, every path documented.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 700 }}>
            Where the BPMN diagram shows the process shape, use cases show the
            actor-system interaction step by step — with pre-conditions, main
            flow, alternate paths, and post-conditions. This is what feeds a
            developer&rsquo;s user-story backlog.
          </p>
        </section>

        <section className="pj-section" style={{ marginTop: 32 }}>
          <div className="pj-docs-library">
            {USE_CASES.map((uc) => (
              <div className="pj-docs-group" key={uc.id}>
                <h2 className="pj-docs-phase">
                  {uc.id} · {uc.title}
                </h2>
                <div className="pj-docs-cards">
                  <article className="pj-docs-card" style={{ gridColumn: "1 / -1" }}>
                    <header>
                      <span className="pj-docs-ic">
                        <CheckCircle2 size={20} aria-hidden />
                      </span>
                      <div className="pj-docs-code">
                        <span className="pj-docs-code-id">
                          Actor: {uc.actor} · Requirements: {uc.brRef}
                        </span>
                        <span className="pj-docs-code-title">Goal: {uc.goal}</span>
                      </div>
                    </header>

                    <div className="pj-diagram-source">
                      <Eyebrow prefix="" style={{ marginBottom: 4 }}>
                        Pre-condition
                      </Eyebrow>
                      <span>{uc.precondition}</span>
                    </div>

                    <div>
                      <Eyebrow style={{ marginBottom: 8 }}>Main flow</Eyebrow>
                      <ol style={{ margin: 0, paddingLeft: 22, lineHeight: 1.75, color: "var(--text-body)", fontSize: 14 }}>
                        {uc.main.map((step, i) => (
                          <li key={i}>{step}</li>
                        ))}
                      </ol>
                    </div>

                    <div>
                      <Eyebrow style={{ marginBottom: 8 }}>Alternate paths</Eyebrow>
                      <div className="rd-rows">
                        {uc.alt.map((a, i) => (
                          <div className="rd-row" key={i}>
                            <span className="rd-row-id">{a.trigger.split(".")[0]}</span>
                            <span className="rd-row-t">
                              <b>{a.trigger.split(". ")[1]}</b> —{" "}
                              <span dangerouslySetInnerHTML={{ __html: a.step }} />
                            </span>
                            <span className="rd-status">alt</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pj-diagram-source">
                      <Eyebrow prefix="" style={{ marginBottom: 4 }}>
                        Post-condition
                      </Eyebrow>
                      <span>{uc.postcondition}</span>
                    </div>
                  </article>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="cov-note">
          <CheckCircle2 size={18} aria-hidden />
          <p>
            <b>Downstream artifact.</b> Every step in every main flow above
            maps to one user story with Given/When/Then acceptance criteria in
            the delivery backlog. Every alternate path maps to a test case.
            That&rsquo;s how the BRD &rarr; process design &rarr; use cases
            &rarr; user stories &rarr; test cases chain is preserved end to
            end.
          </p>
        </div>

        <Link href="/work/ba-process-design" className="pj-next">
          <div>
            <span className="pj-next-lbl">Return to</span>
            <span className="pj-next-title">BA Portfolio hub</span>
          </div>
          <ArrowRight size={20} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
