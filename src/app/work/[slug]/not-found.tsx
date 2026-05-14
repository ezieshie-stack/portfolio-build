import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export default function ProjectNotFound() {
  return (
    <PageShell>
      <div className="py-16 max-w-prose">
        <span className="eyebrow mb-4">Project not found</span>
        <h1 className="text-[length:var(--text-3xl)] font-bold mb-4 tracking-[-0.02em]">
          Can&apos;t find that case study.
        </h1>
        <p className="text-[color:var(--text-dim)] mb-6">
          The project slug doesn&apos;t match anything in the work catalog.
          It may have been renamed or removed.
        </p>
        <Link href="/work" className="btn-pill btn-primary">
          See all work
        </Link>
      </div>
    </PageShell>
  );
}
