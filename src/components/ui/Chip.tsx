import type { ReactNode } from "react";

export function Chip({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={`ds-chip ${className ?? ""}`.trim()}>{children}</span>;
}
