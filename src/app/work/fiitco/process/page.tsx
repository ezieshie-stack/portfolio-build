import Link from "next/link";
import { ArrowRight, Search, GitCompare, CheckCheck } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FiitSubNav } from "@/components/work/fiitco/FiitSubNav";
import { ProcessClient } from "@/components/work/fiitco/process/ProcessClient";

export const metadata = {
  title: "FIIT Co. · Process Models (A1) | David Ezieshi",
  description:
    "Eleven FIIT Co. workflows as BPMN 2.0 swimlanes — each toggleable between the current (as-is) and redesigned (to-be) state.",
};

const HOW_ITEMS: [React.ComponentType<{ size?: number; "aria-hidden"?: boolean }>, string, string][] = [
  [
    Search,
    "Elicitation",
    "Each process walked end-to-end with its real actors to map how work actually happens.",
  ],
  [
    GitCompare,
    "As-Is / To-Be",
    "Paired swimlanes so the pain, and the benefit, is explicit, not implied.",
  ],
  [
    CheckCheck,
    "Validation",
    "To-be flows signed off by the sponsor before requirements were drafted.",
  ],
];

export default function FiitProcessPage() {
  return (
    <div className="pf-page fx-wide">
      <div className="pf-shell">
        <FiitSubNav active="process" />

        <section className="pj-hero-head" style={{ marginTop: 28 }}>
          <Badge tone="violet" style={{ marginBottom: 16 }}>
            Artifact A1 · Process Models
          </Badge>
          <h1
            className="pf-page-title"
            style={{ fontSize: "clamp(30px,3.2vw,46px)" }}
          >
            Eleven processes, mapped as-is and to-be.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 680 }}>
            The BA-11 process maps as BPMN swimlanes. Each was walked end-to-end
            with the people who run it, the pain named, and a future state
            designed to replace it. Pick a process, then flip between the
            current and redesigned workflow.
          </p>
        </section>

        <section className="pj-section" style={{ marginTop: 34 }}>
          <ProcessClient />
        </section>

        <section className="pj-section">
          <Eyebrow style={{ marginBottom: 8 }}>How these were produced</Eyebrow>
          <p className="pj-section-sub">
            Current-state models came from walking each process with the people
            who run it; to-be models were validated with the sponsor before the
            backlog was written against them.
          </p>
          <div className="ff-artifacts">
            {HOW_ITEMS.map(([Icon, title, desc]) => (
              <div className="ff-artifact" key={title}>
                <span className="ff-artifact-ic">
                  <Icon size={20} aria-hidden />
                </span>
                <div>
                  <strong>{title}</strong>
                  <span>{desc}</span>
                </div>
              </div>
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
