import type { ElementType, ReactNode } from "react";

/** Mono uppercase section label. Maps to .pf-eyebrow from portfolio.css. */
export function Eyebrow({
  children,
  className,
  as,
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  const Tag = (as ?? "p") as ElementType;
  return <Tag className={`pf-eyebrow ${className ?? ""}`.trim()}>{children}</Tag>;
}
