"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Expand, Maximize2, Minus, Plus, X } from "lucide-react";
import { TONE_PALETTE, type Tone } from "./types";

/**
 * DiagramShell — pan / zoom / fullscreen wrapper for any diagram.
 * Ported from deploy/portfolio/fiit-diagram-engine.jsx (DiagramShell fn).
 */
export function DiagramShell({
  title,
  legend,
  children,
}: {
  title?: string;
  legend?: [Tone, string][];
  children: ReactNode;
}) {
  const vpRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [fs, setFs] = useState(false);
  const drag = useRef({ on: false, x: 0, y: 0, l: 0, t: 0 });

  const fit = () => {
    if (!vpRef.current || !innerRef.current) return;
    const n = innerRef.current.offsetWidth;
    const a = vpRef.current.clientWidth - 40;
    setScale(n > a ? Math.max(0.3, a / n) : 1);
  };

  useEffect(() => {
    const t = setTimeout(fit, 60);
    return () => clearTimeout(t);
  }, []);

  const zoom = (f: number) =>
    setScale((s) => Math.min(3, Math.max(0.25, +(s * f).toFixed(2))));

  const down = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest(".fc-node,.fish-cat,.seq-actor-box")) return;
    const vp = vpRef.current;
    if (!vp) return;
    drag.current = { on: true, x: e.clientX, y: e.clientY, l: vp.scrollLeft, t: vp.scrollTop };
    vp.classList.add("grabbing");
  };
  const move = (e: React.MouseEvent) => {
    if (!drag.current.on || !vpRef.current) return;
    vpRef.current.scrollLeft = drag.current.l - (e.clientX - drag.current.x);
    vpRef.current.scrollTop = drag.current.t - (e.clientY - drag.current.y);
  };
  const up = () => {
    drag.current.on = false;
    vpRef.current?.classList.remove("grabbing");
  };

  const fig = (
    <div className={`mm-figure${fs ? " mm-fs" : ""}`}>
      <div className="mm-bar">
        <span className="mm-bar-t">
          {title || "Interactive diagram"} · hover to trace · drag to pan
        </span>
        <div className="mm-btns">
          <button className="mm-btn" type="button" title="Zoom out" onClick={() => zoom(0.8)} aria-label="Zoom out">
            <Minus size={15} aria-hidden />
          </button>
          <button className="mm-btn" type="button" title="Fit" onClick={fit} aria-label="Fit to viewport">
            <Maximize2 size={14} aria-hidden />
          </button>
          <button className="mm-btn" type="button" title="Zoom in" onClick={() => zoom(1.25)} aria-label="Zoom in">
            <Plus size={15} aria-hidden />
          </button>
          <button
            className="mm-btn"
            type="button"
            title={fs ? "Close" : "Fullscreen"}
            onClick={() => setFs((v) => !v)}
            aria-label={fs ? "Close fullscreen" : "Open fullscreen"}
          >
            {fs ? <X size={15} aria-hidden /> : <Expand size={15} aria-hidden />}
          </button>
        </div>
      </div>
      <div
        className="mm-viewport"
        ref={vpRef}
        onMouseDown={down}
        onMouseMove={move}
        onMouseUp={up}
        onMouseLeave={up}
      >
        <div className="mm-inner" ref={innerRef} style={{ transform: `scale(${scale})` }}>
          {children}
        </div>
      </div>
      {legend && legend.length ? (
        <div className="fc-legend">
          {legend.map(([tone, label], i) => {
            const [bg, bd] = TONE_PALETTE[tone] || TONE_PALETTE.neutral;
            return (
              <span className="fc-leg" key={i}>
                <span
                  className="fc-leg-sw"
                  style={{ background: bg, borderColor: bd }}
                />
                {label}
              </span>
            );
          })}
        </div>
      ) : null}
    </div>
  );

  return fs ? (
    <>
      <div className="mm-fs-back" onClick={() => setFs(false)} />
      {fig}
    </>
  ) : (
    fig
  );
}
