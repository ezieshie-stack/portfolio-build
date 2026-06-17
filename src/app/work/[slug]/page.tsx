import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MetricStat } from "@/components/ui/MetricStat";
import { publishedProjects } from "@/data/projects";

export function generateStaticParams() {
  return publishedProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = publishedProjects.find((x) => x.slug === slug);
  return { title: p ? `${p.title} | David Ezieshi` : "Project | David Ezieshi" };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = publishedProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  const meta: Array<{ label: string; value: string }> = [
    { label: "Client", value: project.client },
    { label: "Timeline", value: project.timeline },
    { label: "My Role", value: project.role },
    { label: "Team", value: project.team },
    { label: "Tools", value: project.tools.join(" · ") },
  ];

  return (
    <div className="pf-page">
      <div className="pf-shell">
        {/* Back link */}
        <Link
          href="/work"
          className="pf-textlink"
          style={{ marginBottom: 24 }}
        >
          <ArrowLeft size={14} aria-hidden /> Back to All Projects
        </Link>

        {/* Title + lede + actions */}
        <section className="pf-pagehead" style={{ marginTop: 16, marginBottom: 40 }}>
          <Eyebrow className="mb-[14px]">{project.category}</Eyebrow>
          <h1 className="pf-page-title">{project.title}</h1>
          <p className="pf-page-intro" style={{ maxWidth: 720 }}>
            {project.summary}
          </p>
          {project.links.length > 0 && (
            <div className="pf-btnrow" style={{ marginTop: 28 }}>
              {project.links.map((link, i) => (
                <Button
                  key={link.href}
                  href={link.href}
                  variant={i === 0 ? "primary" : "secondary"}
                  size="md"
                  iconRight={<ArrowUpRight size={16} aria-hidden />}
                >
                  {link.label}
                </Button>
              ))}
            </div>
          )}
        </section>

        {/* Meta strip — auto-fit on desktop, collapses to 1 col ≤760px */}
        <section className="pf-meta-strip" style={{ marginBottom: 64 }}>
          {meta.map((m) => (
            <Card key={m.label} padding="22px">
              <div
                className="pf-mono-h"
                style={{ marginBottom: 10 }}
              >
                {m.label}
              </div>
              <div
                style={{
                  color: "var(--text-heading)",
                  fontSize: 15,
                  fontWeight: 500,
                  lineHeight: 1.4,
                }}
              >
                {m.value}
              </div>
            </Card>
          ))}
        </section>

        {/* Body — Challenge + Approach (2-col, collapses ≤980px) */}
        <section className="pf-case-body" style={{ marginBottom: 56 }}>
          <div>
            <Eyebrow className="mb-[14px]">The Challenge</Eyebrow>
            <p
              style={{
                color: "var(--text-body)",
                fontSize: 15.5,
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              {project.challenge}
            </p>
          </div>
          <div>
            <Eyebrow className="mb-[14px]">My Approach</Eyebrow>
            <ul className="pf-article-body" style={{ margin: 0, padding: 0 }}>
              {project.approach.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Outcomes — MetricStat grid */}
        {project.metrics.length > 0 && (
          <section style={{ marginBottom: 56 }}>
            <Eyebrow className="mb-[22px]">The Impact</Eyebrow>
            <div className="pf-metrics">
              {project.metrics.map((m) => (
                <MetricStat key={m.label} value={m.value} label={m.label} />
              ))}
            </div>
          </section>
        )}

        {/* Deliverables */}
        {project.deliverables.length > 0 && (
          <section style={{ marginBottom: 8 }}>
            <Eyebrow className="mb-[22px]">Deliverables</Eyebrow>
            <ul className="pf-article-body" style={{ margin: 0, padding: 0 }}>
              {project.deliverables.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
