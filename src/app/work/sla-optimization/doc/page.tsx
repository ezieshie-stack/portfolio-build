import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { SlaSubNav } from "@/components/work/sla/SlaSubNav";

export const metadata = { title: "SLA · Write-up (S5) | David Ezieshi" };

const SECTIONS = [
  { id: "problem", title: "The problem" },
  { id: "flatness", title: "The flatness finding" },
  { id: "shift", title: "The 22:00 handover" },
  { id: "model", title: "A cost-sensitive Random Forest" },
  { id: "sniper", title: "The Sniper command center" },
  { id: "limits", title: "Honest limits" },
];

export default function SlaDocPage() {
  return (
    <div className="pf-page">
      <div className="pf-shell">
        <SlaSubNav active="doc" />
        <section className="pj-hero-head" style={{ marginTop: 28 }}>
          <Badge tone="violet" style={{ marginBottom: 16 }}>Artifact S5 · Write-up</Badge>
          <h1 className="pf-page-title" style={{ fontSize: "clamp(30px,3.2vw,46px)" }}>
            Intercepting the breach before it costs $500.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 680 }}>
            The full case study behind the escalation command center, for readers who want the
            story rather than the toggles.
          </p>
          <div className="pj-doc-meta">
            <span><b>Author</b> David Ezieshi</span>
            <span><b>Length</b> ~1,200 words · 6 min read</span>
            <span>
              <BrandIcon name="github" size={13} />{" "}
              <a href="https://github.com/ezieshie-stack/Customer-Support-SLA-Optimization-Project" target="_blank" rel="noopener noreferrer">
                Customer-Support-SLA-Optimization
              </a>
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
                A support operation was losing money on missed deadlines with no early warning.
                Escalation was reactive: managers saw a breach only after it happened, and no one
                could quantify the cost. Across 8,469 tickets, the baseline breach rate was 8.03%,
                Critical breaches cost $500 each and High breaches $200. The leak was continuous
                and invisible.
              </p>

              <h2 id="flatness">The flatness finding</h2>
              <p>
                The first surprise: breach rates were <em>flat</em> across ticket types
                (7.7%–8.3%) and channels. That flatness ruled out &ldquo;one team is
                underperforming.&rdquo; A chi-square test of independence confirmed priority — not
                team — drives breaches, at p &lt; 0.05. The failure is structural: the Critical
                SLA target of 4 hours is set below the ~7.7-hour average handling time.
              </p>

              <h2 id="shift">The 22:00 handover</h2>
              <p>
                Ticket <em>volume</em> peaks at 21:00. Ticket <em>breach risk</em> peaks at 22:00 —
                one hour later, at the evening-to-night shift handover. Volume-based staffing
                misses this. The fix is to overlap the shifts from 21:00–23:00 rather than adding
                headcount at peak volume.
              </p>

              <h2 id="model">A cost-sensitive Random Forest</h2>
              <p>
                A Random Forest with <code>class_weight=&lsquo;balanced&rsquo;</code> reaches 0.83
                ROC-AUC on the held-out set of 1,694 tickets. At the deployed low threshold it
                catches 100% of test-set breaches — but flags 701 safe tickets alongside the 136
                real ones, so precision is 16%. That trade-off is deliberate. A missed Critical
                breach costs $500; a review of a false-alarm costs minutes.
              </p>

              <h2 id="sniper">The Sniper command center</h2>
              <p>
                The score is only useful if a manager can act on it. The Sniper is a Streamlit tool
                that ranks the day&rsquo;s tickets by predicted breach probability, then lets the
                escalation lead pick a daily review capacity (10, 25, 50, 75, 100, or All) and see
                the ROI live: gross savings, review cost, net savings, capture percentage. At 50
                reviews per day, the tool captures the majority of preventable breach cost at a
                fraction of the effort of reviewing everything.
              </p>

              <h2 id="limits">Honest limits</h2>
              <p>
                Scores are set at intake, not re-ranked as tickets age. The model uses only four
                features (priority, type, channel, age). Ticket age at scoring and live agent
                workload would sharpen it, but were not in the source data. Ticket creation time
                is inferred from first-response as a documented assumption. And the model
                doesn&rsquo;t predict repeat breaches or upstream product issues — it optimises
                the escalation queue, nothing else.
              </p>

              <div className="pj-doc-repro">
                <FileText size={16} aria-hidden />
                <div>
                  <b>Reproduce</b>
                  <pre>{`git clone https://github.com/ezieshie-stack/Customer-Support-SLA-Optimization-Project.git
cd Customer-Support-SLA-Optimization-Project
pip install -r requirements.txt
# open notebooks/main.ipynb and run Phase 0 through 8`}</pre>
                </div>
              </div>
            </article>
          </div>
        </section>

        <Link href="/work/sla-optimization" className="pj-next">
          <div>
            <span className="pj-next-lbl">Return to</span>
            <span className="pj-next-title">SLA hub</span>
          </div>
          <ArrowRight size={20} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
