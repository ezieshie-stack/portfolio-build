import type { CSSProperties, ReactNode } from "react";

export type BadgeTone = "violet" | "subtle" | "outline" | "spark";

export function Badge({
  children,
  tone = "violet",
  dot = false,
  className,
  style,
}: {
  children: ReactNode;
  tone?: BadgeTone;
  dot?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <span
      className={`ds-badge ds-badge--${tone} ${className ?? ""}`.trim()}
      style={style}
    >
      {dot && <span className="ds-badge__dot" aria-hidden />}
      {children}
    </span>
  );
}
