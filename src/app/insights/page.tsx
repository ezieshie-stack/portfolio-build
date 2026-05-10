import Link from "next/link";
import { PageShell, SectionTag } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { InsightsGrid } from "@/components/insights/InsightsGrid";
import { insights } from "@/lib/content";

export const metadata = { title: "Insights — Portfolio" };

export default function InsightsPage() {
  return (
    <PageShell>
      <Reveal as="section" className="pb-12">
        <SectionTag>{insights.tag}</SectionTag>
        <h1 className="text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.05] tracking-[-0.02em] mb-6 whitespace-pre-line">
          {insights.title}
        </h1>
        <p className="text-[color:var(--text-dim)] max-w-prose mb-10">
          {insights.intro}
        </p>
        <InsightsGrid filters={[...insights.filters]} articles={insights.articles} />
      </Reveal>

      <div className="mt-12">
        <Link
          href={insights.viewAll.href}
          className="text-[13px] font-semibold text-[color:var(--primary)] hover:text-white transition-colors"
        >
          {insights.viewAll.label} <span aria-hidden>↗</span>
        </Link>
      </div>
    </PageShell>
  );
}
