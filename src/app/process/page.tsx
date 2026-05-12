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

      <Reveal as="section" className="py-12">
        <SectionTag>{processContent.thinkingTag}</SectionTag>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-2">
          {processContent.thinking.map((item, i) => (
            <article key={item} className="glass-card p-5">
              <span className="font-mono text-xs text-[color:var(--primary)] block mb-4">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-base font-semibold leading-snug">{item}</h3>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="py-12">
        <SectionTag>{processContent.systemTag}</SectionTag>
        <div className="glass-card p-6 md:p-8 mt-2">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {processContent.system.map((item, i) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[color:var(--primary)]/20 bg-[color:var(--primary)]/[0.06] p-5"
              >
                <span className="font-mono text-xs text-[color:var(--primary)]">
                  STEP {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-base font-semibold mt-3 mb-2">{item.title}</h3>
                <p className="text-sm text-[color:var(--text-dim)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="py-12">
        <SectionTag>{processContent.signalsTag}</SectionTag>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
          {processContent.signals.map((item) => (
            <article key={item.label} className="glass-card p-6">
              <span className="font-mono text-xs text-[color:var(--primary)] block mb-4 tracking-wider">
                {item.label.toUpperCase()}
              </span>
              <p className="text-sm text-[color:var(--text-dim)] leading-relaxed">
                {item.text}
              </p>
            </article>
          ))}
        </div>
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
