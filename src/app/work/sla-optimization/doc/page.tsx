import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { SlaSubNav } from "@/components/work/sla/SlaSubNav";
import { SlaDocReaderClient } from "@/components/work/sla/SlaDocReaderClient";

export const metadata = {
  title: "SLA · Write-up (S5) | David Ezieshi",
  description:
    "The long-form case study behind the interactive Triage Command Center, problem, method, findings, recommendations.",
};

export default function SlaDocPage() {
  return (
    <div className="pf-page">
      <div className="pf-shell">
        <SlaSubNav active="doc" />
        <section className="pj-hero-head" style={{ marginTop: 28 }}>
          <Badge tone="violet" style={{ marginBottom: 16 }}>
            Artifact S5 · Write-up · Reading mode
          </Badge>
          <h1
            className="pf-page-title"
            style={{ fontSize: "clamp(30px,3.2vw,46px)" }}
          >
            Tuned for dollars, not accuracy.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 680 }}>
            The long-form case study behind the interactive command center,
            for readers who want the story rather than the controls. A
            scroll-spy table of contents tracks where you are.
          </p>
        </section>

        <section className="pj-section" style={{ marginTop: 30 }}>
          <SlaDocReaderClient />
        </section>

        <Link href="/work/sla-optimization" className="pj-next">
          <div>
            <span className="pj-next-lbl">Back to</span>
            <span className="pj-next-title">SLA Optimization overview</span>
          </div>
          <ArrowRight size={20} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
