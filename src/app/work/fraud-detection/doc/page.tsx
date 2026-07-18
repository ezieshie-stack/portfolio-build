import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { FraudSubNav } from "@/components/work/fraud/FraudSubNav";
import { FraudDocReaderClient } from "@/components/work/fraud/FraudDocReaderClient";

export const metadata = {
  title: "Fraud · Write-up (F5) | David Ezieshi",
  description:
    "The long-form case study behind the interactive scoring sandbox, problem, method, findings, recommendations.",
};

export default function FraudDocPage() {
  return (
    <div className="pf-page">
      <div className="pf-shell">
        <FraudSubNav active="doc" />
        <section className="pj-hero-head" style={{ marginTop: 28 }}>
          <Badge tone="violet" style={{ marginBottom: 16 }}>
            Artifact F5 · Write-up · Reading mode
          </Badge>
          <h1
            className="pf-page-title"
            style={{ fontSize: "clamp(30px,3.2vw,46px)" }}
          >
            What a GROUP BY can&rsquo;t see.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 680 }}>
            The full case study behind the scoring sandbox, for readers who
            want the story rather than the controls. A scroll-spy table of
            contents tracks where you are.
          </p>
        </section>

        <section className="pj-section" style={{ marginTop: 30 }}>
          <FraudDocReaderClient />
        </section>

        <Link href="/work/fraud-detection" className="pj-next">
          <div>
            <span className="pj-next-lbl">Back to</span>
            <span className="pj-next-title">Fraud Detection overview</span>
          </div>
          <ArrowRight size={20} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
