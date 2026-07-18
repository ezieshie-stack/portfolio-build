import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { MovieSubNav } from "@/components/work/movie/MovieSubNav";
import { MovieDocReaderClient } from "@/components/work/movie/MovieDocReaderClient";

export const metadata = {
  title: "Movie · Write-up (M5) | David Ezieshi",
  description:
    "The long-form case study behind the interactive movie profitability funnel, problem, method, findings, recommendations.",
};

export default function MovieDocPage() {
  return (
    <div className="pf-page">
      <div className="pf-shell">
        <MovieSubNav active="doc" />
        <section className="pj-hero-head" style={{ marginTop: 28 }}>
          <Badge tone="violet" style={{ marginBottom: 16 }}>
            Artifact M5 · Write-up · Reading mode
          </Badge>
          <h1
            className="pf-page-title"
            style={{ fontSize: "clamp(30px,3.2vw,46px)" }}
          >
            The analysis, in prose.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 680 }}>
            The full case study behind the interactive funnel, for readers who
            want the story rather than the controls. A scroll-spy table of
            contents tracks where you are.
          </p>
        </section>

        <section className="pj-section" style={{ marginTop: 30 }}>
          <MovieDocReaderClient />
        </section>

        <Link href="/work/movie-profitability" className="pj-next">
          <div>
            <span className="pj-next-lbl">Back to</span>
            <span className="pj-next-title">Movie Profitability overview</span>
          </div>
          <ArrowRight size={20} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
