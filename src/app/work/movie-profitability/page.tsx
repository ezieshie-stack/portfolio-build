import Link from "next/link";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Clapperboard,
  DollarSign,
  FileText,
  Filter,
  GitFork,
  HelpCircle,
  Scale,
  Table2,
  ThumbsUp,
  TrendingUp,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Chip } from "@/components/ui/Chip";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MetricStat } from "@/components/ui/MetricStat";

export const metadata = {
  title: "Movie Industry Profitability | David Ezieshi",
  description:
    "5,009 films tracked through an 8-stage investment-to-profitability funnel — where the money dies and which levers actually work.",
};

type Artifact = { href: string; idx: string; icon: LucideIcon; title: string; desc: string; meta: string };

const ARTIFACTS: Artifact[] = [
  { href: "/work/movie-profitability/genre", idx: "M1", icon: Clapperboard, title: "Genre & Budget", desc: "Which genres and budget tiers actually pay back.", meta: "Risk levers" },
  { href: "/work/movie-profitability/data", idx: "M2", icon: Table2, title: "Data Dictionary", desc: "42 columns across two sources, and what feeds the analysis.", meta: "42 columns" },
  { href: "/work/movie-profitability/funnel", idx: "M3", icon: Filter, title: "Funnel Model", desc: "The 8-segment funnel with profit and rating per stage.", meta: "8 segments" },
  { href: "/work/movie-profitability/method", idx: "M4", icon: GitFork, title: "Methodology", desc: "EDA, ETL, and funnel pipeline as an interactive diagram.", meta: "3 phases" },
  { href: "/work/movie-profitability/doc", idx: "M5", icon: FileText, title: "Write-up", desc: "The full case study in reading mode.", meta: "7 min read" },
];

const TIERS = [
  { k: "Low (<$15M)", rate: 71.7, n: 1277, note: "High variance. Most fail quietly; the rare hit returns thousands of percent." },
  { k: "Mid ($15M–$40M)", rate: 68.5, n: 1319, best: true, note: "Best risk-adjusted: consistent returns, limited downside. The sweet spot." },
  { k: "High ($40M–$100M)", rate: 72.9, n: 988, note: "Solid performers, but capital-intensive per bet." },
  { k: "Mega ($100M+)", rate: 90.6, n: 310, note: "Highest success rate, but a single failure wipes out multiple wins." },
];

const FINDINGS = [
  { finding: "The biggest capital leak is the 576 films that earned box office revenue but recovered under 50% of their budget. The failure is at the cost line, not the demand line.", recBold: "Break-even analysis before every greenlight.", rec: "Lowering the break-even threshold by 20% converts hundreds of almost-profitable films into profitable ones. Tighter upfront cost modeling is the highest-leverage intervention." },
  { finding: "Horror and Mystery deliver the highest ROI on the lowest budgets. Weighted toward those genres, a slate's success rate runs 84.6 to 85.7% against the 72.5% industry average.", recBold: "Weight capital toward Horror and Mystery.", rec: "Treat genre as an investment decision, not just a creative one. On a 100-film portfolio the genre tilt is worth 12 fewer losses per cycle." },
  { finding: "Mega-budget films succeed 90.6% of the time but cost $100M+ each, so one failure erases several wins. Mid-budget films are the most consistent at 68.5%. Proven directors beat the average on both revenue and ROI.", recBold: "Anchor the slate on mid-budget, attach proven directors to the big bets.", rec: "Reserve nine-figure budgets for titles hedged by a track-record director. Model director history as a greenlight input." },
];

const CHIPS = ["Python", "Pandas", "Matplotlib", "Seaborn", "Streamlit", "Plotly"];

export default function MovieHubPage() {
  return (
    <div className="pf-page">
      <div className="pf-shell">
        <Link href="/work" className="pj-back">
          <ArrowLeft size={14} aria-hidden /> Back to All Projects
        </Link>

        <section className="pj-hero-head">
          <Badge tone="violet" style={{ marginBottom: 18 }}>Profitability Analytics</Badge>
          <h1 className="pf-page-title" style={{ fontSize: "clamp(34px,3.6vw,52px)" }}>
            Where does the money die?
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 700 }}>
            Nearly half of all films lose money. This project tracks 5,009 of them from investment
            to profit, one stage at a time, and locates the biggest capital leak in the industry.
          </p>
        </section>

        <section className="pj-section" style={{ marginTop: 36 }}>
          <Eyebrow prefix="" style={{ marginBottom: 8 }}>The analyst&rsquo;s brief</Eyebrow>
          <div className="sla-brief">
            <div className="sla-brief-card">
              <span className="sla-brief-k"><AlertCircle size={15} aria-hidden /> Why it matters</span>
              <p>A studio spends ~$35M to produce one film with no prototype and no soft launch. Nearly half never recover their cost. Every misallocated greenlight is production capital that could have funded a structurally safer bet.</p>
            </div>
            <div className="sla-brief-card">
              <span className="sla-brief-k"><HelpCircle size={15} aria-hidden /> The question</span>
              <p>Where in the investment-to-profit pipeline does money get lost, and which levers — budget tier, genre, talent — actually reduce that risk rather than just raising the stakes?</p>
            </div>
            <div className="sla-brief-card">
              <span className="sla-brief-k"><TrendingUp size={15} aria-hidden /> Business benefit</span>
              <p>Reframing greenlights as a portfolio, weighted toward the mid-budget sweet spot and capital-efficient genres, lifts the slate success rate from 72.5% toward 85%. On 100 films that is 12 fewer losses per cycle.</p>
            </div>
          </div>
          <div className="sla-approach">
            <div className="sla-approach-row"><span className="sla-approach-k">Data source</span><span className="sla-approach-v">TMDB 5000 (budget, revenue, genres, ratings) merged with IMDB metadata (directors, cast, social) into a 5,009-row, 42-column master. Sourced from Kaggle, cleaned in the ETL pipeline.</span></div>
            <div className="sla-approach-row"><span className="sla-approach-k">Analysis type</span><span className="sla-approach-v">Descriptive (distributions, correlations across 16 charts), then a business-framework funnel modeled on sales-pipeline conversion to locate the leak.</span></div>
            <div className="sla-approach-row"><span className="sla-approach-k">Scope &amp; caveats</span><span className="sla-approach-v">Production budget only, so true break-even (2 to 2.5× with marketing) sits higher. Theatrical revenue only, no streaming or merchandise. Data ends 2017, not inflation-adjusted.</span></div>
            <div className="sla-approach-row"><span className="sla-approach-k">Tooling</span><span className="sla-approach-v">Python (Pandas, NumPy) for the pipeline, Matplotlib and Seaborn for the 16 static charts, Streamlit and Plotly for the live 5-page dashboard.</span></div>
          </div>
        </section>

        <section className="pj-section">
          <Eyebrow prefix="" style={{ marginBottom: 8 }}>Bigger budgets are not safer returns</Eyebrow>
          <p className="pj-section-sub">
            Success rate by budget tier. Budget correlates with revenue at 0.73, yet the mid tier — not the
            mega tier — is the best risk-adjusted bet once you weigh the cost of a single failure.
          </p>
          <div className="mv-tiers">
            {TIERS.map((t) => (
              <div key={t.k} className={`mv-tier${t.best ? " best" : ""}`}>
                <span className="mv-tier-k">{t.k}</span>
                <div className="mv-tier-rate">{t.rate}%</div>
                <div className="mv-tier-bar"><span style={{ width: `${t.rate}%` }} /></div>
                <div className="mv-tier-meta">{t.note}</div>
                <div className="mv-tier-n" style={{ marginTop: 8 }}>{t.n.toLocaleString()} films · success rate</div>
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
                <div className="sla-frec-r"><span className="sla-frec-tag rec">Recommendation</span><p><b>{f.recBold}</b> {f.rec}</p></div>
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
            <MetricStat value="5,009" label="Films analyzed" icon={<Clapperboard size={22} aria-hidden />} />
            <MetricStat value="54.5%" label="Profitable" icon={<Scale size={22} aria-hidden />} />
            <MetricStat value="0.78" label="Votes ↔ revenue" icon={<ThumbsUp size={22} aria-hidden />} />
            <MetricStat value="0.73" label="Budget ↔ revenue" icon={<DollarSign size={22} aria-hidden />} />
          </div>
        </section>

        <details className="pj-hood">
          <summary><Wrench size={16} aria-hidden /> Under the hood <span className="pj-hood-hint">method &amp; stack</span></summary>
          <div className="pj-hood-body">
            <p>Two Kaggle sources (TMDB 5000, IMDB metadata) merged into a 42-column master; JSON genre strings parsed, financial metrics derived (Profit, ROI, Is Profitable), and categorical features engineered (budget tier, ROI band, era, runtime). 16 EDA charts, then an 8-stage investment-to-profitability funnel. Packaged as a 5-page Streamlit dashboard.</p>
            <div className="pj-chips">{CHIPS.map((t) => <Chip key={t}>{t}</Chip>)}</div>
          </div>
        </details>

        <Link href="/work/movie-profitability/genre" className="pj-next">
          <div>
            <span className="pj-next-lbl">Start with</span>
            <span className="pj-next-title">Genre &amp; Budget</span>
          </div>
          <ArrowRight size={20} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
