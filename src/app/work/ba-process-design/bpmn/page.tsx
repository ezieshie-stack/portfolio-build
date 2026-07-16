import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { BaSubNav } from "@/components/work/ba/BaSubNav";

export const metadata = {
  title: "BA · BPMN Swimlane Diagrams (B3) | David Ezieshi",
  description:
    "Formal BPMN 2.0 process notation for the approval workflow — swimlanes, gateways, and message flows.",
};

const ELEMENTS = [
  { sym: "▶", name: "Start event", desc: "Where the process begins. On this diagram, a request submission triggers it." },
  { sym: "◻", name: "Task", desc: "A unit of work done by one actor. Each task lives in one swimlane." },
  { sym: "◇", name: "Exclusive gateway", desc: "A decision point. Exactly one outgoing path is taken based on the condition." },
  { sym: "◈", name: "Parallel gateway", desc: "Fork or join for concurrent paths." },
  { sym: "▨", name: "Message flow", desc: "Communication between swimlanes (or between the diagram and an external actor)." },
  { sym: "■", name: "End event", desc: "Where the process terminates. A well-formed BPMN diagram has at least one." },
];

const LANES = [
  {
    name: "Requester",
    steps: [
      "▶ Start · request needed",
      "◻ Fill submission form",
      "◻ Submit",
      "◻ View status update",
      "■ End · request closed",
    ],
  },
  {
    name: "System",
    steps: [
      "◻ Validate submission fields",
      "◻ Look up routing matrix",
      "◻ Send email to approver ▨",
      "◻ Record state change to audit log",
      "◻ Update status view",
    ],
  },
  {
    name: "Approver",
    steps: [
      "◻ Receive notification ▨",
      "◻ Review request",
      "◇ Decision · approve / reject / return-for-revision",
      "◻ Enter reason (if reject or revise)",
      "◻ Submit decision",
    ],
  },
  {
    name: "Operations Lead",
    steps: [
      "◇ Weekly report trigger · Friday 15:00",
      "◻ Open weekly report",
      "◻ Review outcomes by team",
      "◻ Share with sponsor ▨",
    ],
  },
];

const FLOW_EDGES = [
  { from: "Requester → Submit", to: "System → Validate", note: "Message flow across swimlane" },
  { from: "System → Send email", to: "Approver → Receive notification", note: "Message flow — email channel" },
  { from: "Approver → Decision (approve)", to: "System → Record state change", note: "Sequence flow within decision" },
  { from: "Approver → Decision (reject/revise)", to: "System → Send notification back to requester", note: "Alternate path from gateway" },
  { from: "System → Weekly aggregation", to: "Ops Lead → Weekly report trigger", note: "Timer-based sequence" },
];

export default function BpmnPage() {
  return (
    <div className="pf-page">
      <div className="pf-shell">
        <BaSubNav active="bpmn" />

        <section className="pj-hero-head" style={{ marginTop: 28 }}>
          <Badge tone="violet" style={{ marginBottom: 16 }}>
            Artifact B3 · BPMN 2.0 Swimlane Diagrams
          </Badge>
          <h1
            className="pf-page-title"
            style={{ fontSize: "clamp(30px,3.2vw,46px)" }}
          >
            The process as a formal diagram.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 700 }}>
            Four swimlanes — Requester, System, Approver, Operations Lead —
            covering the full approval workflow. Every task carries an actor,
            every decision carries a gateway, every cross-lane hand-off carries
            a message flow. This is what a developer or operator reads to build
            or run the process.
          </p>
        </section>

        {/* BPMN legend */}
        <section className="pj-section" style={{ marginTop: 32 }}>
          <Eyebrow style={{ marginBottom: 8 }}>BPMN 2.0 element legend</Eyebrow>
          <p className="pj-section-sub">
            The notation is standardised — anyone who reads BPMN reads it the
            same way.
          </p>
          <div className="ff-artifacts">
            {ELEMENTS.map((e) => (
              <div className="ff-artifact" key={e.name}>
                <span
                  className="ff-artifact-ic"
                  style={{ fontSize: 22, fontWeight: 700 }}
                >
                  {e.sym}
                </span>
                <div>
                  <strong>{e.name}</strong>
                  <span>{e.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Swimlanes */}
        <section className="pj-section">
          <Eyebrow style={{ marginBottom: 8 }}>The four swimlanes</Eyebrow>
          <p className="pj-section-sub">
            Each lane is one actor. Steps read top-down within a lane. Symbols
            match the legend above.
          </p>
          <div className="pj-data-domains">
            {LANES.map((l) => (
              <article className="pj-data-domain" key={l.name}>
                <header>
                  <h3>{l.name}</h3>
                  <span className="pj-data-count">{l.steps.length} steps</span>
                </header>
                <ol style={{ margin: 0, paddingLeft: 20, lineHeight: 1.75, color: "var(--text-body)", fontSize: 14 }}>
                  {l.steps.map((s, i) => (
                    <li key={i} style={{ fontFamily: "var(--font-mono)", fontSize: 12.5 }}>{s}</li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </section>

        {/* Cross-lane message flows */}
        <section className="pj-section">
          <Eyebrow style={{ marginBottom: 8 }}>Cross-lane message flows</Eyebrow>
          <p className="pj-section-sub">
            Message flows are what distinguish BPMN from a simple flowchart —
            they show communication across actor boundaries. Every hand-off
            below is a message flow.
          </p>
          <div className="pj-data-rel">
            {FLOW_EDGES.map((f, i) => (
              <div className="pj-data-rel-row" key={i}>
                <span className="pj-data-rel-from">
                  <code>{f.from}</code>
                </span>
                <span className="pj-data-rel-kind">→</span>
                <span className="pj-data-rel-note">
                  <code>{f.to}</code> — {f.note}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Rendering note */}
        <section className="pj-section">
          <div className="pj-note">
            The formal `.bpmn` XML files render visually as swimlane diagrams
            at{" "}
            <a
              href="https://demo.bpmn.io"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--accent-text)" }}
            >
              demo.bpmn.io
            </a>
            . Each of the four lanes above corresponds to one `bpmn:lane`
            element inside a shared `bpmn:process` block. Interactive rendering
            embedded in this page ships in a follow-up slice.
          </div>
        </section>

        <Link href="/work/ba-process-design/use-cases" className="pj-next">
          <div>
            <span className="pj-next-lbl">Next artifact</span>
            <span className="pj-next-title">Use Case Specifications</span>
          </div>
          <ArrowRight size={20} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
