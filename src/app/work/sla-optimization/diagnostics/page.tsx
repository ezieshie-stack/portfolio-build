import Link from "next/link";
import { AlertTriangle, ArrowRight, TrendingUp, Users } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SlaSubNav } from "@/components/work/sla/SlaSubNav";
import type { ReactNode } from "react";

export const metadata = { title: "SLA · Diagnostics (S1) | David Ezieshi" };

type Card = { id: string; title: string; q: string; cols: string[]; rows: (string | number)[][]; unit?: string; noBars?: boolean; read: ReactNode };

const CARDS: Card[] = [
  { id: "D1", title: "Breach rate by ticket type", q: "Is one kind of ticket dragging down the SLA?",
    cols: ["Ticket type", "Volume", "Breach rate"],
    rows: [["Cancellation request", "1,695", 8.3], ["Refund request", "1,752", 8.2], ["Technical issue", "1,747", 8.1], ["Product inquiry", "1,641", 7.7], ["Billing inquiry", "1,634", 7.7]],
    read: <>The bars barely move: <b>7.7% to 8.3%</b> across every type. That flatness is the headline. No single ticket category is the culprit, so the failure is structural, not a training or staffing gap on one desk.</> },
  { id: "D2", title: "SLA target vs. the ~7.7h average", q: "Which priority tier is set up to fail?",
    cols: ["Priority", "SLA target", "Verdict"], noBars: true,
    rows: [["Critical", "4 h", "Below avg, breaches"], ["High", "8 h", "Right at the line"], ["Normal", "24 h", "Comfortable"], ["Low", "72 h", "Comfortable"]],
    read: <>Average handling across all tickets is <b>about 7.7 hours</b>. Critical tickets are held to a <b>4-hour</b> target, well under that average, so they breach structurally; High sits right at its 8-hour line.</> },
  { id: "D3", title: "Cost of a breach by priority", q: "What does a missed deadline actually cost?",
    cols: ["Priority", "Breach cost", "Carries cost"], noBars: true,
    rows: [["Critical", "$500", "Yes"], ["High", "$200", "Yes"], ["Normal", "$0", "No"], ["Low", "$0", "No"]],
    read: <>Financial exposure is concentrated in the top two tiers: a Critical breach costs <b>$500</b>, a High breach <b>$200</b>. That lopsided downside is what makes a &ldquo;catch every breach&rdquo; model worth its false alarms.</> },
  { id: "D4", title: "Optimization scenarios", q: "How much breach rate can targeted action recover?",
    cols: ["Scenario", "Breach rate", "vs. baseline"],
    rows: [["Baseline", 8.03, "—"], ["Refund focus", 7.49, "-0.54"], ["Triage optimization", 6.52, "-1.51"]], unit: "%",
    read: <>Predictive triage cuts the breach rate from <b>8.03% to 6.52%</b>, the largest simulated improvement. Assigning specialists to refund requests recovers less on its own, which is why triage became the primary recommendation.</> },
];

function DiagCard({ c }: { c: Card }) {
  const nums = c.rows.map((r) => typeof r[2] === "number" ? Number(r[2]) : 0);
  const rateMax = Math.max(...nums, 1);
  const topRate = Math.max(...nums);
  return (
    <div className="tq-card">
      <div className="tq-head">
        <div className="tq-n">{c.id}</div>
        <div className="tq-title">{c.title}</div>
        <div className="tq-q">{c.q}</div>
      </div>
      <div className="tq-body" style={{ gridTemplateColumns: "1fr" }}>
        <div className="tq-res">
          <table className="tq-table">
            <thead>
              <tr>
                {c.cols.map((h, i) => <th key={i}>{h}</th>)}
                {!c.noBars && <th className="tq-bt"></th>}
              </tr>
            </thead>
            <tbody>
              {c.rows.map((r, i) => {
                const isNum = typeof r[2] === "number";
                const isTop = !c.noBars && isNum && Number(r[2]) === topRate;
                return (
                  <tr key={i} className={isTop ? "top" : ""}>
                    <td>{r[0]}</td>
                    <td>{r[1]}</td>
                    <td>{isNum ? `${r[2]}${c.unit || "%"}` : r[2]}</td>
                    {!c.noBars && (
                      <td className="tq-bt">
                        <div className="tq-track">
                          <span className={`tq-bar${isTop ? " top" : ""}`} style={{ width: `${isNum ? (Number(r[2]) / rateMax) * 100 : 0}%` }} />
                        </div>
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="tq-read">{c.read}</div>
    </div>
  );
}

export default function SlaDiagPage() {
  return (
    <div className="pf-page">
      <div className="pf-shell">
        <SlaSubNav active="diag" />
        <section className="pj-hero-head" style={{ marginTop: 28 }}>
          <Badge tone="violet" style={{ marginBottom: 16 }}>Artifact S1 · Operational Diagnostics</Badge>
          <h1 className="pf-page-title" style={{ fontSize: "clamp(30px,3.2vw,46px)" }}>
            Find the leak before fixing the pipe.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 680 }}>
            Before building a model, the analysis had to locate where and why the SLA was failing
            across 8,469 tickets. Each card is a diagnostic question, the grouped result, and what
            the numbers mean.
          </p>
        </section>

        <section className="pj-section" style={{ marginTop: 30 }}>
          <div className="tq-grid">{CARDS.map((c) => <DiagCard key={c.id} c={c} />)}</div>
        </section>

        <section className="pj-section">
          <Eyebrow style={{ marginBottom: 8 }}>Statistical validation · Chi-square</Eyebrow>
          <p className="pj-section-sub">
            The charts suggested priority drives breaches. A chi-square test of independence
            confirmed it is real, not noise.
          </p>
          <div className="tq-card">
            <div className="tq-body" style={{ gridTemplateColumns: "1fr" }}>
              <div className="tq-res">
                <table className="tq-table">
                  <tbody>
                    <tr><td>Hypothesis</td><td>Breach status is independent of priority</td></tr>
                    <tr><td>Test</td><td>chi-square test of independence</td></tr>
                    <tr><td>Result</td><td style={{ color: "var(--accent-text)" }}>p &lt; 0.05 · reject H₀</td></tr>
                    <tr><td>Interpretation</td><td>Priority significantly affects breach rate; the failure is structural, tied to SLA design under Critical load.</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="tq-read">
              A Welch t-test also confirmed Critical and High tickets differ significantly in
              resolution time. Together these move the conversation off &ldquo;which team is
              slow&rdquo; and onto &ldquo;the Critical SLA target is set too aggressively for
              current handling speed.&rdquo;
            </div>
          </div>
        </section>

        <section className="pj-section">
          <Eyebrow style={{ marginBottom: 8 }}>The riskiest hour is a handover, not a rush</Eyebrow>
          <div className="ff-artifacts">
            <div className="ff-artifact">
              <span className="ff-artifact-ic"><TrendingUp size={20} aria-hidden /></span>
              <div><strong>Volume peaks at 21:00</strong><span>Ticket arrival is highest at 9 PM, which is where staffing intuition would add headcount.</span></div>
            </div>
            <div className="ff-artifact">
              <span className="ff-artifact-ic"><AlertTriangle size={20} aria-hidden /></span>
              <div><strong>Breach risk peaks at 22:00</strong><span>The highest breach rate is one hour later, at the 10 PM evening-to-night shift handover, not at peak volume.</span></div>
            </div>
            <div className="ff-artifact">
              <span className="ff-artifact-ic"><Users size={20} aria-hidden /></span>
              <div><strong>Overlap the shifts</strong><span>Extending the evening shift or overlapping 9 to 11 PM covers the dangerous gap that pure volume-based staffing misses.</span></div>
            </div>
          </div>
        </section>

        <Link href="/work/sla-optimization/data" className="pj-next">
          <div>
            <span className="pj-next-lbl">Next artifact</span>
            <span className="pj-next-title">Data Dictionary</span>
          </div>
          <ArrowRight size={20} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
