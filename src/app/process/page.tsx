import { PageShell, SectionTag } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { StepWheel } from "@/components/process/StepWheel";
import { process as processContent } from "@/lib/content";

export const metadata = { title: "Process — Portfolio" };

export default function ProcessPage() {
  return (
    <PageShell>
      <Reveal as="section" className="pb-12">
        <SectionTag>{processContent.tag}</SectionTag>
        <h1 className="text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.05] tracking-[-0.02em] mb-6 whitespace-pre-line">
          {processContent.title}
        </h1>
        <p className="text-[color:var(--text-dim)] max-w-prose mb-12">
          {processContent.intro}
        </p>
      </Reveal>

      <Reveal as="section" className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center mb-20">
        <ol className="space-y-4">
          {processContent.steps.map((step) => (
            <li key={step.number} className="glass-card p-5 flex gap-4">
              <span className="font-mono text-sm text-[color:var(--primary)] shrink-0 w-8">
                {step.number}
              </span>
              <div>
                <h3 className="font-semibold text-base mb-1">{step.title}</h3>
                <p className="text-sm text-[color:var(--text-dim)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <StepWheel steps={processContent.steps} />
      </Reveal>

      <Reveal as="section" className="py-12">
        <SectionTag>{processContent.principlesTag}</SectionTag>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
          {processContent.principles.map((p) => (
            <article key={p.title} className="glass-card p-6">
              <div className="status-dot mb-4" />
              <h3 className="text-base font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-[color:var(--text-dim)] leading-relaxed">
                {p.description}
              </p>
            </article>
          ))}
        </div>
      </Reveal>
    </PageShell>
  );
}
