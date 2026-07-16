import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { MovieSubNav } from "@/components/work/movie/MovieSubNav";

export const metadata = { title: "Movie · Write-up (M5) | David Ezieshi" };

const SECTIONS = [
  { id: "problem", title: "The problem" },
  { id: "leak", title: "Where the money dies" },
  { id: "levers", title: "The two levers a studio controls" },
  { id: "funnel", title: "The funnel as a decision framework" },
  { id: "recs", title: "From analysis to allocation" },
  { id: "limits", title: "Honest limits" },
];

export default function MovieDocPage() {
  return (
    <div className="pf-page">
      <div className="pf-shell">
        <MovieSubNav active="doc" />
        <section className="pj-hero-head" style={{ marginTop: 28 }}>
          <Badge tone="violet" style={{ marginBottom: 16 }}>Artifact M5 · Write-up</Badge>
          <h1 className="pf-page-title" style={{ fontSize: "clamp(30px,3.2vw,46px)" }}>
            Where does the money die?
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 680 }}>
            The full case study behind the funnel, for readers who want the story rather than the
            interactive stage picker.
          </p>
          <div className="pj-doc-meta">
            <span><b>Author</b> David Ezieshi</span>
            <span><b>Length</b> ~1,400 words · 7 min read</span>
            <span>
              <BrandIcon name="github" size={13} />{" "}
              <a href="https://github.com/ezieshie-stack/movies-dataset" target="_blank" rel="noopener noreferrer">movies-dataset</a>
            </span>
          </div>
        </section>

        <section className="pj-section" style={{ marginTop: 30 }}>
          <div className="pj-doc-grid">
            <aside className="pj-doc-toc">
              <Eyebrow style={{ marginBottom: 8 }}>Contents</Eyebrow>
              <ul>
                {SECTIONS.map((s) => (
                  <li key={s.id}><a href={`#${s.id}`}>{s.title}</a></li>
                ))}
              </ul>
            </aside>

            <article className="pj-doc-body">
              <h2 id="problem">The problem</h2>
              <p>
                A studio spends ~$35M to produce one film. There is no prototype, no beta, no soft
                launch. And nearly half of all films never recover their production cost. On 100
                greenlights, 45 return less than they cost. That is not a bad batting average —
                that is a capital-allocation problem hiding in plain sight.
              </p>
              <p>
                So the brief was: track a large cohort of films from investment to profit, find the
                stage that leaks the most, and identify which levers actually reduce that risk.
              </p>

              <h2 id="leak">Where the money dies</h2>
              <p>
                Out of 5,009 films (1970–2017), 1,058 have no budget data — a data gap that itself
                becomes a finding. Of the 3,951 with budgets, 184 earned nothing. Then the biggest
                shock: <b>576 films earned box office revenue but recovered under 50% of their
                budget</b>. That single bucket is the industry&rsquo;s largest capital leak. The
                failure is at the cost line, not the demand line. The audiences turned up. The
                budgets were still too high.
              </p>

              <h2 id="levers">The two levers a studio controls</h2>
              <p>
                A studio cannot control whether a film connects. It can control two things: how
                much it spends, and what genre it makes.
              </p>
              <p>
                <b>Budget tier</b> works against intuition. Success rate rises with budget — up to
                90.6% at the mega tier ($100M+) — but so does the cost of a single failure. The
                mid tier ($15M–$40M) delivers the best risk-adjusted return: 68.5% success on
                consistently limited downside. That is why healthy slates anchor on mid-budget
                films.
              </p>
              <p>
                <b>Genre</b> is where the most capital efficiency hides. Horror and Mystery
                produce the highest ROI on the lowest budgets — audiences show up regardless of
                whether the film cost $5M or $50M. Weighted toward those genres, a slate&rsquo;s
                success rate runs 84.6 to 85.7% against the industry&rsquo;s 72.5% overall.
              </p>

              <h2 id="funnel">The funnel as a decision framework</h2>
              <p>
                The framework is the deliverable. Any analyst can compute &ldquo;54.5% are
                profitable.&rdquo; A funnel shows exactly where the other 45.5% fall out — data
                gap, no revenue, major loss, partial recovery. Each of those has a different fix.
                The 576-film &ldquo;major loss&rdquo; segment needs cost control at greenlight,
                not marketing spend at release.
              </p>

              <h2 id="recs">From analysis to allocation</h2>
              <p>
                Three recommendations came out of the work.
              </p>
              <p>
                <b>Break-even analysis before every greenlight.</b> Lowering the break-even
                threshold by 20% converts hundreds of almost-profitable films into profitable
                ones. Tighter upfront cost modeling is the highest-leverage intervention.
              </p>
              <p>
                <b>Weight capital toward Horror and Mystery.</b> Treat genre as an investment
                decision, not just a creative one. On a 100-film portfolio the genre tilt is worth
                12 fewer losses per cycle.
              </p>
              <p>
                <b>Anchor the slate on mid-budget films, attach proven directors to the big
                bets.</b> Reserve nine-figure budgets for titles hedged by a track-record director.
                Model director history as a greenlight input.
              </p>

              <h2 id="limits">Honest limits</h2>
              <p>
                Production budget only, so true break-even (2 to 2.5× with marketing) sits higher.
                Theatrical revenue only — no streaming or merchandise, and streaming has since
                changed the economics. Data ends in 2017, not inflation-adjusted. And the funnel
                describes historical outcomes; it does not model why a specific greenlight decision
                was made.
              </p>

              <div className="pj-doc-repro">
                <FileText size={16} aria-hidden />
                <div>
                  <b>Reproduce</b>
                  <pre>{`git clone https://github.com/ezieshie-stack/movies-dataset.git
cd movies-dataset
pip install -r requirements.txt
python src/01_exploratory_data_analysis.py
python src/02_etl_tableau_prep.py
python src/03_funnel_analysis.py`}</pre>
                </div>
              </div>
            </article>
          </div>
        </section>

        <Link href="/work/movie-profitability" className="pj-next">
          <div>
            <span className="pj-next-lbl">Return to</span>
            <span className="pj-next-title">Movie Profitability hub</span>
          </div>
          <ArrowRight size={20} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
