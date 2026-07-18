import type { CSSProperties, ElementType, ReactNode } from "react";

/** Mono uppercase section label. Maps to .pf-eyebrow from portfolio.css.
 *  Optional `prefix` renders inline before children — pass "" to suppress
 *  the default `// ` marker that the design system stamps on eyebrows. */
export function Eyebrow({
  children,
  className,
  as,
  style,
  prefix = "// ",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  style?: CSSProperties;
  prefix?: string;
}) {
  const Tag = (as ?? "p") as ElementType;
  return (
    <Tag className={`pf-eyebrow ${className ?? ""}`.trim()} style={style}>
      {prefix && <span className="pf-eyebrow__prefix">{prefix}</span>}
      {children}
    </Tag>
  );
}
