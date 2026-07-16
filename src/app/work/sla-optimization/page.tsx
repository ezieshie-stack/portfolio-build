import Link from "next/link";
import {
  Activity,
  AlertCircle,
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  FileText,
  GitFork,
  HelpCircle,
  ShieldCheck,
  Table2,
  Target,
  Ticket,
  TrendingUp,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Chip } from "@/components/ui/Chip";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MetricStat } from "@/components/ui/MetricStat";

export const metadata = {
  title: "Customer Support SLA Optimization | David Ezieshi",
  description:
    "A cost-sensitive Random Forest predicting SLA breaches on 8,469 tickets — 0.83 ROC-AUC, 100% breach recall.",
};

type Artifact = { href: string; idx: string; icon: LucideIcon; title: string; desc: string; meta: string };

const ARTIFACTS: Artifact[] = [
  { href: "/work/sla-optimization/diagnostics", idx: "S1", icon: Activity, title: "Diagnostics", desc: "Where the money leaks, and the test that proved it is systemic.", meta: "8,469 tickets" },
  { href: "/work/sla-optimization/data", idx: "S2", icon: Table2, title: "Data Dictionary", desc: "Every column, and the ones engineered for the model.", meta: "17 + 6 fields" },
  { href: "/work/sla-optimization/model", idx: "S3", icon: Target, title: "Model Card", desc: "The cost-sensitive Random Forest, real numbers, a live threshold.", meta: "0.83 ROC-AUC" },
  { href: "/work/sla-optimization/method", idx: "S4", icon: GitFork, title: "Methodology", desc: "The 8-phase pipeline as an interactive diagram.", meta: "Phase 0 → 8" },
  { href: "/work/sla-optimization/doc", idx: "S5", icon: FileText, title: "Write-up", desc: "The full case study in reading mode.", meta: "6 min read" },
];

const COHORTS = [
  { k: "Cancellation request", rate: 8.3, n: 1695 },
  { k: "Refund request", rate: 8.2, n: 1752 },
  { k: "Technical issue", rate: 8.1, n: 1747 },
  { k: "Product inquiry", rate: 7.7, n: 1641 },
  { k: "Billing inquiry", rate: 7.7, n: 1634 },
];

const FINDINGS = [
  { finding: "Breach rates are flat across ticket types (7.7% to 8.3%) and channels, yet average handling sits near 8h against a 4h Critical target. A chi-square test confirms priority, not team, drives breaches.", rec: "Reset the Critical SLA target to match real handling capacity, and stand up a dedicated response lane for the highest-scored tickets. Stop coaching teams for a structural problem." },
  { finding: "Financial exposure is concentrated: Critical breaches cost $500, High $200, and roughly 80% of breach cost sits in the top 20% of tickets by predicted risk.", rec: "Deploy the model to score every ticket at creation so the queue self-sorts by risk. Escalate a fixed daily kill-list rather than reviewing the whole queue." },
  { finding: "Ticket volume peaks at 21:00 but breach risk peaks at 22:00 — at the evening-to-night shift handover, not at peak volume.", rec: "Staff to the risk, not the volume: overlap the evening and night shifts from 21:00 to 23:00 to close the handover gap that volume-based rostering misses." },
  { finding: "A cost-sensitive Random Forest reaches 0.83 ROC-AUC and, at the deployed threshold, catches 100% of test-set breaches at 16% precision.", rec: "Accept the low precision deliberately: a false alarm costs minutes, a missed Critical costs $500. Wrap the score in a capacity-aware tool the escalation lead opens each morning." },
];

const CHIPS = ["Python", "pandas", "scikit-learn", "SciPy", "Random Forest", "Streamlit"];
const MAX_RATE = 10;

export default function SlaHubPage() {
  return (
    <div className="pf-page">
      <div className="pf-shell">
        <Link href="/work" className="pj-back">
          <ArrowLeft size={14} aria-hidden /> Back to All Projects
        </Link>

        <section className="pj-hero-head">
          <Badge tone="violet" style={{ marginBottom: 18 }}>Predictive Analytics</Badge>
          <h1 className="pf-page-title" style={{ fontSize: "clamp(34px,3.6vw,52px)" }}>
            Escalate the right tickets.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 680 }}>
            A cost-sensitive Random Forest that scores every incoming ticket for SLA-breach risk,
            then a capacity-aware kill-list that turns reactive firefighting into targeted prevention.
          </p>
        </section>

        <section className="pj-section" style={{ marginTop: 36 }}>
          <Eyebrow prefix="" style={{ marginBottom: 8 }}>The analyst&rsquo;s brief</Eyebrow>
          <div className="sla-brief">
            <div className="sla-brief-card">
              <span className="sla-brief-k"><AlertCircle size={15} aria-hidden /> Why it matters</span>
              <p>Every breached ticket is a direct, quantifiable loss: $500 on a Critical, $200 on a High. At an 8.03% breach rate across 8,469 tickets, the leak is continuous and invisible — escalation only reacts after the money is already gone.</p>
            </div>
            <div className="sla-brief-card">
              <span className="sla-brief-k"><HelpCircle size={15} aria-hidden /> The question</span>
              <p>Which tickets will breach their SLA, and given a fixed daily review capacity, which ones should the escalation team act on first to prevent the most financial loss per hour of effort?</p>
            </div>
            <div className="sla-brief-card">
              <span className="sla-brief-k"><TrendingUp size={15} aria-hidden /> Business benefit</span>
              <p>A ranked daily kill-list turns reactive firefighting into targeted prevention. Reviewing the top 50 highest-risk tickets recovers the majority of preventable breach cost at a fraction of the effort of reviewing everything.</p>
            </div>
          </div>
          <div className="sla-approach">
            <div className="sla-approach-row"><span className="sla-approach-k">Data source</span><span className="sla-approach-v">8,469 support tickets across email, chat, phone, and social; four priority tiers with distinct SLA targets (Critical 4h, High 8h, Normal 24h, Low 72h).</span></div>
            <div className="sla-approach-row"><span className="sla-approach-k">Analysis type</span><span className="sla-approach-v">Diagnostic (why breaches happen) into predictive (which tickets will breach) into prescriptive (which to escalate under capacity).</span></div>
            <div className="sla-approach-row"><span className="sla-approach-k">Scope &amp; limits</span><span className="sla-approach-v">Ticket creation time inferred from first-response (a documented assumption); breach cost is a priority-based flat rate, not modelled churn. Scores are set at intake, not re-ranked as tickets age.</span></div>
          </div>
        </section>

        <section className="pj-section">
          <Eyebrow prefix="" style={{ marginBottom: 8 }}>Breach rate by ticket type</Eyebrow>
          <p className="pj-section-sub">
            The bars are almost level, 7.7% to 8.3%. That flatness is the finding: no single
            ticket type is to blame, so the fix is structural, not disciplinary.
          </p>
          <div className="pj-cohorts">
            {COHORTS.map((c) => (
              <div className="pj-cohort" key={c.k}>
                <span className="pj-cohort-k">{c.k}</span>
                <div className="pj-cohort-track">
                  <span className="pj-cohort-bar" style={{ width: `${(c.rate / MAX_RATE) * 100}%` }} />
                </div>
                <span className="pj-cohort-rate">{c.rate}%</span>
                <span className="pj-cohort-n">{c.n.toLocaleString()} tickets</span>
              </div>
            ))}
          </div>
        </section>

        <section className="pj-section">
          <Eyebrow prefix="" style={{ marginBottom: 8 }}>Findings, and what to do about them</Eyebrow>
          <div className="sla-frec">
            {FINDINGS.map((f, i) => (
              <div className="sla-frec-row" key={i}>
                <div className="sla-frec-f"><span className="sla-frec-tag find">Finding</span><p>{f.finding}</p></div>
                <div className="sla-frec-arrow"><ArrowRight size={22} aria-hidden /></div>
                <div className="sla-frec-r"><span className="sla-frec-tag rec">Recommendation</span><p>{f.rec}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className="pj-section">
          <Eyebrow prefix="" style={{ marginBottom: 8 }}>Go deeper</Eyebrow>
          <div className="fx-index">
            {ARTIFACTS.map((a) => {
              const Ico = a.icon;
              return (
                <Link key={a.idx} href={a.href} className="fx-idxcard">
                  <div className="fx-idxcard-top">
                    <span className="fx-idxcard-ic"><Ico size={22} aria-hidden /></span>
                    <span className="fx-idxcard-idx">{a.idx}</span>
                  </div>
                  <h3>{a.title}</h3>
                  <p>{a.desc}</p>
                  <div className="fx-idxcard-foot">
                    <span className="fx-idxcard-meta">{a.meta}</span>
                    <span className="fx-idxcard-go">Open <ArrowRight size={15} aria-hidden /></span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="pj-section">
          <div className="pj-metrics">
            <MetricStat value="8,469" label="Tickets analyzed" icon={<Ticket size={22} aria-hidden />} />
            <MetricStat value="0.83" label="Model ROC-AUC" icon={<Target size={22} aria-hidden />} />
            <MetricStat value="100%" label="Test breaches caught" icon={<ShieldCheck size={22} aria-hidden />} />
            <MetricStat value="8.03%" label="Baseline breach rate" icon={<AlertTriangle size={22} aria-hidden />} />
          </div>
        </section>

        <details className="pj-hood">
          <summary><Wrench size={16} aria-hidden /> Under the hood <span className="pj-hood-hint">method &amp; stack</span></summary>
          <div className="pj-hood-body">
            <p>SLA breach logic derived per priority (Critical 4h, High 8h, Normal 24h, Low 72h); patterns validated with SciPy chi-square; a Random Forest with balanced class weights trained in scikit-learn and evaluated on a held-out split (ROC-AUC 0.83). The escalation simulation reruns the logic client-side, matching the Streamlit command center in the repo.</p>
            <div className="pj-chips">{CHIPS.map((t) => <Chip key={t}>{t}</Chip>)}</div>
          </div>
        </details>

        <Link href="/work/sla-optimization/diagnostics" className="pj-next">
          <div>
            <span className="pj-next-lbl">Start with</span>
            <span className="pj-next-title">Operational Diagnostics</span>
          </div>
          <ArrowRight size={20} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
