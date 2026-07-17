import { Frame } from "lucide-react";
import type { ReactNode } from "react";

/**
 * Figma-style canvas frame — dotted-grid canvas, floating frame card
 * with a labelled violet badge, optional right slot, and a decorative
 * zoom control in the corner. Ports the reference `FigFrame` from
 * scratch-shared.jsx (fiit artifact sub-pages).
 */
export function FigFrame({
  name,
  sub,
  right,
  children,
}: {
  name: string;
  sub?: string;
  right?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="fig-canvas">
      <div className="fig-frame">
        <div className="fig-bar">
          <span className="fig-badge">
            <Frame size={13} aria-hidden /> {name}
          </span>
          {sub ? <span className="fig-sub">{sub}</span> : null}
          {right ? <span className="fig-bar-right">{right}</span> : null}
        </div>
        <div className="fig-frame-card">{children}</div>
      </div>
      <div className="fig-zoom" aria-hidden>
        <b>−</b>
        <span>100%</span>
        <b>+</b>
      </div>
    </div>
  );
}
