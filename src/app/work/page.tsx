import Link from "next/link";
import { PageShell, SectionTag } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { WorkGrid } from "@/components/work/WorkGrid";
import { work, projects } from "@/lib/content";

export const metadata = { title: "Work — Portfolio" };

export default function WorkPage() {
  return (
    <PageShell>
      <Reveal as="section" className="pb-12">
        <SectionTag>{work.tag}</SectionTag>
        <h1 className="text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.05] tracking-[-0.02em] mb-6 whitespace-pre-line">
          {work.title}
        </h1>
        <p className="text-[color:var(--text-dim)] max-w-prose mb-10">
          {work.intro}
        </p>
        <WorkGrid filters={[...work.filters]} projects={projects} />
      </Reveal>

      <Reveal as="section" className="mt-16">
        <div className="glass-card p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">{work.cta.title}</h2>
            <p className="text-[color:var(--text-dim)]">{work.cta.body}</p>
          </div>
          <Link href={work.cta.href} className="btn-pill btn-primary shrink-0">
            {work.cta.label} <span aria-hidden className="ml-1">↗</span>
          </Link>
        </div>
      </Reveal>
    </PageShell>
  );
}
