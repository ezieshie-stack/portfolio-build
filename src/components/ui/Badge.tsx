import type { ReactNode } from "react";

export type BadgeTone = "violet" | "subtle" | "outline" | "spark";

export function Badge({
  children,
  tone = "violet",
  dot = false,
  className,
}: {
  children: ReactNode;
  tone?: BadgeTone;
  dot?: boolean;
  className?: string;
}) {
  return (
    <span className={`ds-badge ds-badge--${tone} ${className ?? ""}`.trim()}>
      {dot && <span className="ds-badge__dot" aria-hidden />}
      {children}
    </span>
  );
}
