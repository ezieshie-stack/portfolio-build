import type { CSSProperties, ElementType, ReactNode } from "react";

export function Card({
  children,
  interactive,
  glow,
  className,
  padding = "32px",
  style,
  as,
}: {
  children: ReactNode;
  interactive?: boolean;
  glow?: boolean;
  className?: string;
  padding?: string | number;
  style?: CSSProperties;
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
  return (
    <Tag className={cls} style={{ padding, ...style }}>
      {children}
    </Tag>
  );
}
