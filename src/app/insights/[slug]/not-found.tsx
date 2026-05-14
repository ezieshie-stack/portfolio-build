import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export default function InsightNotFound() {
  return (
    <PageShell>
      <div className="py-16 max-w-prose">
        <span className="eyebrow mb-4">Article not found</span>
        <h1 className="text-[length:var(--text-3xl)] font-bold mb-4 tracking-[-0.02em]">
          Can&apos;t find that insight.
        </h1>
        <p className="text-[color:var(--text-dim)] mb-6">
          Either the slug changed or the article was never published. The
          rest of the writing is still here.
        </p>
        <Link href="/insights" className="btn-pill btn-primary">
          See all insights
        </Link>
      </div>
    </PageShell>
  );
}
