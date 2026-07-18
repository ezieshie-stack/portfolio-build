import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  Clock,
  Layers,
  RefreshCcw,
  Search,
  ShieldAlert,
  Table2,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Chip } from "@/components/ui/Chip";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MetricStat } from "@/components/ui/MetricStat";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { UipathReplay } from "@/components/work/uipath/UipathReplay";
import { UipathChart } from "@/components/work/uipath/UipathChart";

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
        <section className="pj-section" style={{ marginTop: 24 }}>
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
