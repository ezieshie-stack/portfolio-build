import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  FileText,
  GitBranch,
  Layers,
  Rocket,
  Target,
  Users,
} from "lucide-react";
import { PageShell, SectionTag } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { WorkGrid } from "@/components/work/WorkGrid";
import { work } from "@/lib/content";

export const metadata = { title: "Work — Portfolio" };

const metricIconMap: Record<string, LucideIcon> = {
  Rocket,
  Layers,
  Users,
};

const philosophyIconMap: Record<string, LucideIcon> = {
  FileText,
  GitBranch,
  Layers,
  BarChart3,
  Target,
};

export default function WorkPage() {
  const { featured, philosophy } = work;

  return (
    <PageShell>
      {/* ── HERO + FEATURED CASE STUDY ───────────────── */}
      <Reveal
        as="section"
        className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start mb-16"
      >
        <div>
          <SectionTag>{work.tag}</SectionTag>
          <h1 className="text-[clamp(42px,5.5vw,76px)] font-extrabold leading-[0.98] tracking-[-0.06em] my-6">
            {work.title}
          </h1>
          <p className="text-[color:var(--text-dim)] text-[17px] leading-[1.8] max-w-[520px]">
            {work.intro}
          </p>
        </div>

        <div className="work-featured-card p-8 md:p-9">
          <span className="work-featured-pill">{featured.pill}</span>
          <h2 className="text-[clamp(28px,3vw,42px)] font-bold leading-[1.05] tracking-[-0.04em] mt-5 mb-2">
            {featured.title}
          </h2>
          <p className="text-[#c4b5fd] text-sm mb-6">{featured.meta}</p>
          <p className="text-[color:var(--text-dim)] leading-[1.75] max-w-[620px] mb-7">
            {featured.description}
          </p>

          <div className="flex flex-wrap gap-3 mb-7">
            <Link href={featured.primaryCta.href} className="btn-primary inline-flex">
              {featured.primaryCta.label} ↗
            </Link>
            <Link href={featured.secondaryCta.href} className="btn-secondary inline-flex">
              {featured.secondaryCta.label}
            </Link>
          </div>

          <div className="work-dashboard-preview">
            <div className="work-dash-sidebar" />
            <div className="work-dash-content">
              <div className="work-dash-row">
                <div /><div /><div /><div />
              </div>
              <div className="work-dash-chart" />
              <div className="work-dash-row small">
                <div /><div /><div />
              </div>
            </div>
          </div>

          <div className="work-featured-metrics">
            {featured.metrics.map((m) => {
              const Icon = metricIconMap[m.icon] ?? Rocket;
              return (
                <div key={m.title}>
                  <Icon size={20} />
                  <strong>{m.title}</strong>
                  <span>{m.sub}</span>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>

      {/* ── FILTERS + PROJECT GRID ───────────────────── */}
      <Reveal as="section" className="mb-20">
        <WorkGrid filters={work.filters} cards={work.cards} />
      </Reveal>

      {/* ── PHILOSOPHY FLOW ─────────────────────────── */}
      <Reveal as="section" className="work-philosophy-card p-8 md:p-10">
        <SectionTag>{work.philosophyTag}</SectionTag>
        <h2 className="text-[clamp(26px,3vw,36px)] font-bold tracking-[-0.04em] mb-9 mt-3">
          {work.philosophyHeading}
        </h2>

        <div className="work-philosophy-flow">
          {philosophy.map((item, i) => {
            const Icon = philosophyIconMap[item.icon] ?? Target;
            return (
              <div key={item.title} className="work-flow-item">
                <div className="work-flow-icon">
                  <Icon size={22} />
                </div>
                <strong>{item.title}</strong>
                <span>{item.desc}</span>
                {i < philosophy.length - 1 && (
                  <div className="work-flow-arrow" aria-hidden>→</div>
                )}
              </div>
            );
          })}
        </div>
      </Reveal>
    </PageShell>
  );
}
