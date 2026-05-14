import { PageShell } from "@/components/PageShell";

/**
 * Generic page-level skeleton used as Next.js loading.tsx fallback while
 * server components stream. Renders a tag + headline block + 2-3
 * paragraph lines + a grid placeholder so the layout shape matches the
 * real page closely enough to avoid a visible jump.
 */
export function PageSkeleton() {
  return (
    <PageShell>
      <div className="grid gap-6 mb-12">
        <div className="skeleton h-4 w-32" />
        <div className="skeleton h-16 w-3/4" />
        <div className="skeleton h-4 w-2/3" />
        <div className="skeleton h-4 w-1/2" />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="skeleton h-56" />
        <div className="skeleton h-56" />
        <div className="skeleton h-56" />
      </div>
    </PageShell>
  );
}
