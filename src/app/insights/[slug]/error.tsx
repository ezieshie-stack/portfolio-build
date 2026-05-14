"use client";

import Link from "next/link";
import { useEffect } from "react";
import { PageShell } from "@/components/PageShell";

export default function InsightError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Insight slug error boundary caught:", error);
  }, [error]);

  return (
    <PageShell>
      <div className="py-16 max-w-prose">
        <span className="eyebrow mb-4">Couldn&apos;t load this insight</span>
        <h1 className="text-[length:var(--text-3xl)] font-bold mb-4 tracking-[-0.02em]">
          This article failed to load.
        </h1>
        <p className="text-[color:var(--text-dim)] mb-6">
          The article exists but something went wrong fetching it. The
          rest of the site is unaffected.
        </p>
        <div className="flex flex-wrap gap-3">
          <button type="button" onClick={reset} className="btn-pill btn-primary">
            Try again
          </button>
          <Link href="/insights" className="btn-pill">
            All insights
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
