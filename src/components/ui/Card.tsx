import type { ElementType, ReactNode } from "react";

export function Card({
  children,
  interactive,
  glow,
  className,
  as,
}: {
  children: ReactNode;
  interactive?: boolean;
  glow?: boolean;
  className?: string;
  as?: ElementType;
}) {
  const Tag = (as ?? "div") as ElementType;
  const cls = [
    "ds-card",
    interactive ? "ds-card--interactive" : "",
    glow ? "ds-card--glow" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");
  return <Tag className={cls}>{children}</Tag>;
}
