import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/lib/content";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return { title: p ? `${p.title} | Portfolio` : "Project | Portfolio" };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <PageShell>
      <Link
        href="/work"
        className="text-sm text-[color:var(--text-dim)] hover:text-white transition-colors mb-6 inline-block"
      >
        ← Back to All Projects
      </Link>

      <Reveal as="section" className="mb-12">
        <h1 className="text-[length:var(--text-3xl)] font-extrabold leading-[1.05] tracking-[-0.02em] mb-5">
          {project.title}
        </h1>
        <p className="text-[color:var(--text-dim)] max-w-prose mb-8">
          {project.summary}
        </p>
        <div
          className="glass-card aspect-[16/9] flex items-center justify-center text-[color:var(--text-dim)] text-xs tracking-[0.2em] uppercase"
        >
          [Process Ecosystem Diagram Placeholder]
        </div>
      </Reveal>

      <Reveal as="section" className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
        {[
          { label: "Client", value: project.client },
          { label: "Timeline", value: project.timeline },
          { label: "My Role", value: project.role },
          { label: "Team", value: project.team },
          { label: "Tools", value: project.tools.join(", ") },
        ].map((m) => (
          <div key={m.label} className="glass-card p-4">
            <div className="text-xs uppercase tracking-[0.18em] text-[color:var(--text-dim)] mb-2">
              {m.label}
            </div>
            <div className="text-sm font-medium">{m.value}</div>
          </div>
        ))}
      </Reveal>

      <Reveal as="section" className="grid lg:grid-cols-2 gap-10 mb-16">
        <div>
          <h2 className="eyebrow mb-3">The Challenge</h2>
          <p className="text-[color:var(--text-dim)] leading-relaxed">
            {project.challenge}
          </p>
        </div>
        <div>
          <h2 className="eyebrow mb-3">My Approach</h2>
          <ul className="space-y-3">
            {project.approach.map((a, i) => (
              <li key={i} className="flex items-start gap-3 text-[color:var(--text-dim)]">
                <span className="status-dot mt-2 shrink-0" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal as="section" className="mb-16">
        <h2 className="eyebrow mb-5 block">The Impact</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {project.metrics.map((m) => (
            <article key={m.label} className="glass-card p-6">
              <div className="gradient-text text-3xl font-extrabold tracking-tight mb-2">
                {m.value}
              </div>
              <div className="text-xs uppercase tracking-[0.18em] text-[color:var(--text-dim)] leading-tight">
                {m.label}
              </div>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="mb-8">
        <h2 className="eyebrow mb-5 block">Deliverables</h2>
        <ul className="space-y-3">
          {project.deliverables.map((d, i) => (
            <li key={i} className="flex items-start gap-3 text-[color:var(--text-dim)]">
              <span className="status-dot mt-2 shrink-0" />
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </PageShell>
  );
}
