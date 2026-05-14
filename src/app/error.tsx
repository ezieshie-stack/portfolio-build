"use client";

import Link from "next/link";
import { useEffect } from "react";
import { PageShell } from "@/components/PageShell";

/**
 * Root error boundary. Renders when any unhandled exception bubbles up
 * from a server or client component within the app. Logs to the
 * console on mount; in production this would also report to an error
 * tracker.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global error boundary caught:", error);
  }, [error]);

  return (
    <PageShell>
      <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-center min-h-[60vh]">
        <div>
          <span className="eyebrow mb-4">Something broke</span>
          <h1 className="text-[length:var(--text-4xl)] font-extrabold leading-[1.05] tracking-[-0.02em] mb-6">
            That wasn&apos;t supposed to happen.
          </h1>
          <p className="text-[color:var(--text-dim)] mb-8 max-w-prose">
            An unexpected error stopped this page from rendering. The
            issue has been logged. Try again, or head back home and pick
            another path.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={reset}
              className="btn-pill btn-primary"
            >
              Try again
            </button>
            <Link href="/" className="btn-pill">
              Back to home
            </Link>
          </div>
          {error.digest && (
            <p className="text-xs text-[color:var(--text-dim)] mt-8 font-mono">
              Reference: {error.digest}
            </p>
          )}
        </div>
      </div>
    </PageShell>
  );
}
