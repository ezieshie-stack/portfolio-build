import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Clock,
  Info,
  ShieldAlert,
  Table2,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Chip } from "@/components/ui/Chip";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MetricStat } from "@/components/ui/MetricStat";
import { BrandIcon } from "@/components/ui/BrandIcon";

export const metadata = {
  title: "UiPath Supplier Price Monitor | David Ezieshi",
  description:
    "A UiPath bot that scrapes supplier prices, flags anything past a ±5% threshold, and drops an Excel alert. Live browser replay embedded on the page.",
};

const DEMO_URL = "https://ezieshie-stack.github.io/UiPath-Automation-Project/";
const REPO_URL = "https://github.com/ezieshie-stack/UiPath-Automation-Project";

const CHIPS = ["UiPath", "RPA", "Excel", "Web Scraping", "Windows"];

export default function UipathProjectPage() {
  return (
    <div className="pf-page">
      <div className="pf-shell">
        <Link href="/work" className="pj-back">
          <ArrowLeft size={14} aria-hidden /> Back to All Projects
        </Link>

        <section className="pj-hero-head">
          <Badge tone="violet" style={{ marginBottom: 18 }}>
            RPA &middot; Automation &middot; Live demo
          </Badge>
          <h1
            className="pf-page-title"
            style={{ fontSize: "clamp(34px,3.6vw,52px)" }}
          >
            Watch the bot check every supplier.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 720 }}>
            The demo below is a faithful browser replay of a real UiPath run,
            real supplier data, real alert logic, streamed exactly as the bot
            executes it. UiPath cannot run in a browser, so this reconstruction
            lets you watch the workflow instead of reading about it.
          </p>
        </section>

        {/* interactive demo — the marquee */}
        <section className="pj-section" style={{ marginTop: 24 }}>
          <div className="upath-demo">
            <div className="upath-demo-bar">
              <span className="upath-demo-title">
                <Bot size={14} aria-hidden /> Supplier Price Monitor
                &middot; run replay
              </span>
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="upath-demo-open"
                aria-label="Open the replay in a new tab"
              >
                Open in new tab <ArrowUpRight size={13} aria-hidden />
              </a>
            </div>
            <div className="upath-demo-frame">
              <iframe
                src={DEMO_URL}
                title="UiPath Supplier Price Monitor, interactive run replay"
                loading="lazy"
                allow="autoplay"
              />
            </div>
          </div>
          <p className="cs-caption">
            <Info size={13} aria-hidden />
            Browser re-enactment, real supplier data, real alert logic. The
            underlying <code>UiPath-Automation-Project</code> workflow ships in
            the{" "}
            <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
              GitHub repo
            </a>
            .
          </p>
        </section>

        {/* what the bot does, in one row */}
        <section className="pj-section">
          <Eyebrow prefix="" style={{ marginBottom: 8 }}>
            What the bot does
          </Eyebrow>
          <p className="pj-section-sub">
            A single scheduled run replaces a manual, error-prone hour of
            copy-paste across seven supplier sites, and every alert ships with
            the exact percentage delta so procurement acts on numbers, not
            hunches.
          </p>
          <div className="sla-brief">
            <div className="sla-brief-card">
              <span className="sla-brief-k">
                <Table2 size={15} aria-hidden /> Read the list
              </span>
              <p>
                Opens the supplier workbook, iterates the seven part numbers,
                and pulls the current price from each supplier&rsquo;s product
                page.
              </p>
            </div>
            <div className="sla-brief-card">
              <span className="sla-brief-k">
                <ShieldAlert size={15} aria-hidden /> Compare + decide
              </span>
              <p>
                Compares scraped price to the last known price, computes the
                percentage delta, and flags anything outside &plusmn;5% with an
                ALERT badge on the row.
              </p>
            </div>
            <div className="sla-brief-card">
              <span className="sla-brief-k">
                <Clock size={15} aria-hidden /> Log the run
              </span>
              <p>
                Writes the new price, delta, and status back to the workbook,
                stamps the run time, and hands the result to whoever owns
                procurement.
              </p>
            </div>
          </div>
        </section>

        {/* metrics */}
        <section className="pj-section">
          <div className="pj-metrics">
            <MetricStat
              value="7"
              label="Suppliers checked"
              icon={<Table2 size={22} aria-hidden />}
            />
            <MetricStat
              value="6"
              label="Alerts on the last run"
              icon={<ShieldAlert size={22} aria-hidden />}
            />
            <MetricStat
              value="±5%"
              label="Alert threshold"
              icon={<Zap size={22} aria-hidden />}
            />
            <MetricStat
              value="<10 min"
              label="Run time (vs. 60–90 manual)"
              icon={<Clock size={22} aria-hidden />}
            />
          </div>
        </section>

        {/* under the hood */}
        <section className="pj-section">
          <Eyebrow prefix="" style={{ marginBottom: 8 }}>
            Under the hood
          </Eyebrow>
          <p className="pj-section-sub">
            A UiPath Studio workflow drives Excel and the browser through
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
        <section className="pj-section">
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="pj-next"
          >
            <div>
              <span className="pj-next-lbl">Source &amp; PDD</span>
              <span className="pj-next-title">
                <BrandIcon name="github" size={16} />{" "}
                UiPath-Automation-Project on GitHub
              </span>
            </div>
            <ArrowRight size={20} aria-hidden />
          </a>
        </section>

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
