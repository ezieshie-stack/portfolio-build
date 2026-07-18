import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { FiitSubNav } from "@/components/work/fiitco/FiitSubNav";
import { DocsReaderClient } from "@/components/work/fiitco/reader/DocsReaderClient";

export const metadata = {
  title: "FIIT Co. · Documents (A4) | David Ezieshi",
  description:
    "Reading-mode library, Charter, BRD, Executive Summary, and Closure Report, with a scroll-spy table of contents.",
};

export default function FiitDocsPage() {
  return (
    <div className="pf-page fx-wide">
      <div className="pf-shell">
        <FiitSubNav active="docs" />

        <section className="pj-hero-head" style={{ marginTop: 28 }}>
          <Badge tone="violet" style={{ marginBottom: 16 }}>
            Artifact A4 · Documents · Reading mode
          </Badge>
          <h1
            className="pf-page-title"
            style={{ fontSize: "clamp(30px,3.2vw,46px)" }}
          >
            Read the documents. Jump to the live artifact.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 700 }}>
            The written BA deliverables, Charter, BRD, Executive Summary,
            Closure Report, in a proper reading mode: a scroll-spy table of
            contents, faithful tables and lists, and inline links that take you
            straight to the interactive artifact each document powers.
          </p>
        </section>

        <section className="pj-section" style={{ marginTop: 32 }}>
          <DocsReaderClient />
        </section>

        <Link href="/work/fiitco/stakeholder" className="pj-next">
          <div>
            <span className="pj-next-lbl">Next artifact</span>
            <span className="pj-next-title">Stakeholder Map &amp; RACI</span>
          </div>
          <ArrowRight size={20} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
