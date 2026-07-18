import Link from "next/link";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Bot,
  Clock,
  HelpCircle,
  Info,
  RefreshCcw,
  Search,
  ShieldAlert,
  Table2,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Chip } from "@/components/ui/Chip";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MetricStat } from "@/components/ui/MetricStat";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { UipathReplay } from "@/components/work/uipath/UipathReplay";
import { UipathChart } from "@/components/work/uipath/UipathChart";
import { UipathSelectorStrategy } from "@/components/work/uipath/UipathSelectorStrategy";
import { UipathRunHistory } from "@/components/work/uipath/UipathRunHistory";
import { UipathProofStrip } from "@/components/work/uipath/UipathProofStrip";
import { UipathProcessFlows } from "@/components/work/uipath/UipathProcessFlows";
import { UipathDocReaderClient } from "@/components/work/uipath/UipathDocReaderClient";

export const metadata = {
  title: "UiPath Supplier Price Monitor | David Ezieshi",
  description:
    "A UiPath bot that scrapes seven supplier prices, flags anything past a ±5% threshold, and drops an Excel alert. Native replay embedded on the page.",
};

const REPO_URL = "https://github.com/ezieshie-stack/UiPath-Automation-Project";
const CHIPS = ["UiPath", "RPA", "Excel", "Web Scraping", "Windows"];

const PHASES = [
  {
    n: "1 · Read",
    icon: Table2,
    desc: "Loads the seven suppliers, their per-row thresholds, and the last known prices from the shared Excel workbook.",
    script: "Read_Input.xaml",
  },
  {
    n: "2 · Scrape",
    icon: Search,
    desc: "Opens Chrome per supplier; site-specific selectors extract the price and availability, with a reference-data fallback if a selector breaks.",
    script: "Process_Supplier.xaml",
  },
  {
    n: "3 · Compare",
    icon: Zap,
    desc: "Computes (new − old) / old, checks the ±5% threshold and any stock change, and applies the PDD's exception rules per supplier.",
    script: "Main.xaml",
  },
  {
    n: "4 · Write",
    icon: RefreshCcw,
    desc: "Appends every check to the audit log, breaches to the Alert Sheet, and refreshes the supplier list with fresh prices and timestamps.",
    script: "Write_Output.xaml",
  },
];

const FINDINGS = [
  {
    finding:
      "Manual checks take 60–90 minutes daily and skew toward the top of the supplier list, so late-list suppliers get checked less often and their breaches slip through.",
    recBold: "Automate the whole list every morning.",
    rec: "A scheduled UiPath run treats every supplier the same, ships in under 10 minutes, and frees an hour a day of procurement time for actual negotiation.",
  },
  {
    finding:
      "Site redesigns silently break single-selector scrapers, and the ops team doesn't notice until a downstream stakeholder asks about missing data.",
    recBold: "Two-tier detection with a visible fallback.",
    rec: "A primary per-site selector plus an add-to-cart availability heuristic keeps the run useful when a page redesign lands, and the log makes the fallback explicit so the selector can be fixed the same day.",
  },
  {
    finding:
      "Alert fatigue is the real risk, so every ±1% wiggle can't reach the escalation queue.",
    recBold: "Per-supplier ±5% threshold, read from the workbook.",
    rec: "The threshold lives in the Excel row, not the code, so procurement can raise or lower it per supplier without a redeploy. Six of seven suppliers alerted on the last run, one sat inside the band.",
  },
];

export default function UipathProjectPage() {
  return (
    <div className="pf-page">
      <div className="pf-shell">
        <Link href="/work" className="pj-back">
          <ArrowLeft size={14} aria-hidden /> Back to All Projects
        </Link>

        <section className="pj-hero-head">
          <div className="up-eyebrow">
            <Bot size={12} aria-hidden /> UiPath RPA · Attended Automation
          </div>
          <h1
            className="pf-page-title"
            style={{ fontSize: "clamp(34px,3.6vw,52px)" }}
          >
            Supplier Price &amp; Availability Monitor.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 720 }}>
            A procurement bot that checks seven retail suppliers every
            morning, compares live prices against the last known price, and
            raises alerts on ≥5% moves or stock changes, replacing a 60–90
            minute manual routine. Hit replay to watch a verified run.
          </p>
        </section>

        {/* the marquee replay */}
        <section
          id="replay"
          className="pj-section"
          style={{ marginTop: 24, scrollMarginTop: 90 }}
        >
          <UipathReplay />
        </section>

        {/* metric row */}
        <section className="pj-section">
          <div className="pj-metrics">
            <MetricStat
              value="7"
              label="Supplier pages checked"
              icon={<Table2 size={22} aria-hidden />}
            />
            <MetricStat
              value="6"
              label="Alerts raised on the last run"
              icon={<ShieldAlert size={22} aria-hidden />}
            />
            <MetricStat
              value="±5%"
              label="Alert threshold, read per-supplier"
              icon={<Zap size={22} aria-hidden />}
            />
            <MetricStat
              value="<10 min"
              label="Bot runtime vs 60–90 min manual"
              icon={<Clock size={22} aria-hidden />}
            />
          </div>
        </section>

        {/* diverging chart */}
        <section className="pj-section">
          <UipathChart />
        </section>

        {/* analyst's brief */}
        <section className="pj-section">
          <Eyebrow prefix="" style={{ marginBottom: 8 }}>
            The analyst&rsquo;s brief
          </Eyebrow>
          <p className="pj-section-sub">
            Before the automation, the framing: why the manual routine hurts,
            the operational question the bot answers, and the payoff.
          </p>
          <div className="sla-brief">
            <div className="sla-brief-card">
              <span className="sla-brief-k">
                <AlertCircle size={15} aria-hidden /> Why it matters
              </span>
              <p>
                Procurement can only negotiate the movements it sees. Late
                catches on price hikes cost margin; missed stock outs cost
                delivery dates. An hour of daily copy-paste is also a bad use
                of a buyer&rsquo;s time.
              </p>
            </div>
            <div className="sla-brief-card">
              <span className="sla-brief-k">
                <HelpCircle size={15} aria-hidden /> The question
              </span>
              <p>
                Can a bot check every supplier every morning, apply a
                threshold the buyer controls per-supplier, and land the
                report on their desk before the first meeting?
              </p>
            </div>
            <div className="sla-brief-card">
              <span className="sla-brief-k">
                <TrendingUp size={15} aria-hidden /> Business benefit
              </span>
              <p>
                A ranked alert sheet plus an audit log turns reactive
                firefighting into a same-day negotiation surface, and the
                buyer gets an hour back to work upstream deals instead of
                copy-pasting prices.
              </p>
            </div>
          </div>
          <div className="sla-approach">
            <div className="sla-approach-row">
              <span className="sla-approach-k">Data source</span>
              <span className="sla-approach-v">
                Shared Excel workbook (<code>supplier_list_template.xlsx</code>)
                with one row per supplier: URL, part number, selector, last
                known price, per-supplier threshold, and last check timestamp.
              </span>
            </div>
            <div className="sla-approach-row">
              <span className="sla-approach-k">Analysis type</span>
              <span className="sla-approach-v">
                Attended automation. UiPath Studio drives Chrome per supplier,
                extracts price + availability, computes the delta vs. the
                workbook row, and writes back to two tabs.
              </span>
            </div>
            <div className="sla-approach-row">
              <span className="sla-approach-k">Scope &amp; caveats</span>
              <span className="sla-approach-v">
                Seven suppliers in the demo run; the same workflow scales to
                dozens with no code change (one row per supplier). Selectors
                are site-specific; a page redesign triggers the add-to-cart
                fallback, and the run log makes the fallback explicit.
              </span>
            </div>
            <div className="sla-approach-row">
              <span className="sla-approach-k">Tooling</span>
              <span className="sla-approach-v">
                UiPath Studio + Community, Excel activities, Windows Task
                Scheduler for the daily run, plain <code>.csv</code> audit log
                for portability.
              </span>
            </div>
          </div>
        </section>

        {/* findings + recommendations */}
        <section className="pj-section">
          <Eyebrow prefix="" style={{ marginBottom: 8 }}>
            Findings, and what to do about them
          </Eyebrow>
          <p className="pj-section-sub">
            Each finding is a fact from the operational data; each
            recommendation is the specific rule the bot enforces to act on it.
          </p>
          <div className="sla-frec">
            {FINDINGS.map((f, i) => (
              <div className="sla-frec-row" key={i}>
                <div className="sla-frec-f">
                  <span className="sla-frec-tag find">Finding</span>
                  <p>{f.finding}</p>
                </div>
                <div className="sla-frec-arrow">
                  <ArrowRight size={22} aria-hidden />
                </div>
                <div className="sla-frec-r">
                  <span className="sla-frec-tag rec">Recommendation</span>
                  <p>
                    <b>{f.recBold}</b> {f.rec}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AS-IS vs TO-BE process flows */}
        <section className="pj-section">
          <Eyebrow prefix="" style={{ marginBottom: 8 }}>
            AS-IS vs TO-BE process
          </Eyebrow>
          <p className="pj-section-sub">
            Both flows drawn from the Manual and Automated Process Walkthroughs
            in the PDD pack. Toggle between the two to see where the 60–90
            minute manual routine collapses into a bot loop plus a five-minute
            review.
          </p>
          <UipathProcessFlows />
          <p className="cs-caption">
            <Info size={13} aria-hidden />
            High-fidelity swimlanes live on Canva:{" "}
            <a
              href="https://www.canva.com/design/DAG4m3zkiyE/sYm2Qo6dXMYLzJOb6gpGSQ/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              open the process design
            </a>
            .
          </p>
        </section>

        {/* selector strategy */}
        <section className="pj-section">
          <Eyebrow prefix="" style={{ marginBottom: 8 }}>
            Selector strategy
          </Eyebrow>
          <p className="pj-section-sub">
            The bot survives site redesigns because it never trusts a single
            selector. A primary path is fast when the page hasn&rsquo;t
            moved; a fallback path keeps the run honest when it has.
          </p>
          <UipathSelectorStrategy />
        </section>

        {/* run history */}
        <section className="pj-section">
          <Eyebrow prefix="" style={{ marginBottom: 8 }}>
            Run history
          </Eyebrow>
          <p className="pj-section-sub">
            The bot runs on a Windows Task Scheduler cron at 09:00 every
            weekday. This strip is the last 14 executions, each a real
            morning run against the same workbook.
          </p>
          <UipathRunHistory />
        </section>

        {/* proof strip */}
        <section className="pj-section">
          <Eyebrow prefix="" style={{ marginBottom: 8 }}>
            What the workbook looks like after a run
          </Eyebrow>
          <p className="pj-section-sub">
            Two artifacts land after every run: the Alert Sheet (rows the
            buyer opens) and the audit log CSV (rows for anyone running
            downstream analytics). The values below match the replay above.
          </p>
          <UipathProofStrip />
        </section>

        {/* how the bot works */}
        <section className="pj-section">
          <Eyebrow prefix="" style={{ marginBottom: 8 }}>
            How the bot works
          </Eyebrow>
          <p className="pj-section-sub">
            Four sequential UiPath workflows, each with its own XAML file, so
            a reviewer can open the repo and follow the automation stage by
            stage.
          </p>
          <div className="ff-artifacts">
            {PHASES.map((p) => {
              const Ico = p.icon;
              return (
                <div className="ff-artifact" key={p.n}>
                  <span className="ff-artifact-ic">
                    <Ico size={20} aria-hidden />
                  </span>
                  <div>
                    <strong>{p.n}</strong>
                    <span>{p.desc}</span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        color: "var(--accent-text)",
                        marginTop: 4,
                        display: "block",
                      }}
                    >
                      {p.script}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* stack */}
        <section className="pj-section">
          <Eyebrow prefix="" style={{ marginBottom: 8 }}>
            Under the hood
          </Eyebrow>
          <p className="pj-section-sub">
            A UiPath Studio workflow drives Excel and Chrome through per-site
            selectors, with an add-to-cart availability heuristic as the
            fallback signal when a price element is missing.
          </p>
          <div className="pj-chips">
            {CHIPS.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
        </section>

        {/* long-form case study drawn from the PDD */}
        <section className="pj-section">
          <Eyebrow prefix="" style={{ marginBottom: 8 }}>
            The write-up, in prose
          </Eyebrow>
          <p className="pj-section-sub">
            The case study distilled from the Process Design Document, the AS-IS survey, the objectives that shaped the TO-BE, and the exception rules the team agreed on before a line of UiPath was authored.
          </p>
          <UipathDocReaderClient />
        </section>

        {/* source */}
        <a
          href={REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="pj-next"
        >
          <div>
            <span className="pj-next-lbl">Source &amp; PDD</span>
            <span className="pj-next-title">
              <BrandIcon name="github" size={16} /> UiPath-Automation-Project
              on GitHub
            </span>
          </div>
          <ArrowRight size={20} aria-hidden />
        </a>

        <Link href="/work" className="pj-next">
          <div>
            <span className="pj-next-lbl">Back to</span>
            <span className="pj-next-title">All Projects</span>
          </div>
          <ArrowRight size={20} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
