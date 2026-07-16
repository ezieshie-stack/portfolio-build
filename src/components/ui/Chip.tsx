import type { CSSProperties, ReactNode } from "react";

export function Chip({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <span className={`ds-chip ${className ?? ""}`.trim()} style={style}>
      {children}
    </span>
  );
}
