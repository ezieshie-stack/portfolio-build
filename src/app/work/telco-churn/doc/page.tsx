import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { TelcoSubNav } from "@/components/work/telco/TelcoSubNav";
import { TelcoDocReaderClient } from "@/components/work/telco/TelcoDocReaderClient";

export const metadata = {
  title: "Telco · Write-up (T5) | David Ezieshi",
  description:
    "The long-form case study behind the interactive Telco churn dashboard — problem, method, findings, recommendations.",
};

export default function TelcoDocPage() {
  return (
    <div className="pf-page">
      <div className="pf-shell">
        <TelcoSubNav active="doc" />
        <section className="pj-hero-head" style={{ marginTop: 28 }}>
          <Badge tone="violet" style={{ marginBottom: 16 }}>
            Artifact T5 · Write-up · Reading mode
          </Badge>
          <h1
            className="pf-page-title"
            style={{ fontSize: "clamp(30px,3.2vw,46px)" }}
          >
            The analysis, in prose.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 680 }}>
            The long-form case study behind the interactive dashboard, for
            readers who want the story rather than the toggles. A scroll-spy
            table of contents tracks where you are.
          </p>
        </section>

        <section className="pj-section" style={{ marginTop: 30 }}>
          <TelcoDocReaderClient />
        </section>

        <Link href="/work/telco-churn" className="pj-next">
          <div>
            <span className="pj-next-lbl">Back to</span>
            <span className="pj-next-title">Telco Churn overview</span>
          </div>
          <ArrowRight size={20} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
