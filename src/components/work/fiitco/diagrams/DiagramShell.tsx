"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { Expand, Maximize2, Minus, Plus, X } from "lucide-react";
import { TONE_PALETTE, type Tone } from "./types";

/**
 * DiagramShell — pan / zoom / fullscreen wrapper for any diagram.
 *
 * Ports the reference `fiit-diagram-engine.jsx` DiagramShell:
 * - .mm-viewport (scroll area, drag-to-pan)
 *   > .mm-sizer   (width/height = natW*scale × natH*scale — the scroll
 *                  content is sized to the SCALED diagram so the whole
 *                  thing is reachable at any width)
 *     > .mm-inner (transform: scale(scale), origin top-left — the
 *                  un-transformed diagram)
 *
 * Refits on: mount, `resetKey` change (process + mode), and window resize.
 */
export function DiagramShell({
  title,
  legend,
  viewportHeight,
  resetKey,
  children,
}: {
  title?: string;
  legend?: [Tone, string][];
  viewportHeight?: number | string;
  resetKey?: string | number;
  children: ReactNode;
}) {
  const vpRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [natSize, setNatSize] = useState<{ w: number; h: number }>({ w: 0, h: 0 });
  const [fs, setFs] = useState(false);
  const drag = useRef({ on: false, x: 0, y: 0, l: 0, t: 0 });

  const fit = useCallback(() => {
    const vp = vpRef.current;
    const inner = innerRef.current;
    if (!vp || !inner) return;
    // Reset scale to 1 first so we can measure the natural (un-transformed) size.
    inner.style.transform = "scale(1)";
    const natW = inner.offsetWidth;
    const natH = inner.offsetHeight;
    setNatSize({ w: natW, h: natH });
    const avail = vp.clientWidth - 40;
    const s = avail >= natW ? 1 : Math.max(0.25, avail / natW);
    setScale(s);
  }, []);

  // Refit on mount + resetKey change (process/mode swap).
  useEffect(() => {
    const t = setTimeout(fit, 60);
    return () => clearTimeout(t);
  }, [fit, resetKey]);

  // Refit on window resize.
  useEffect(() => {
    const onResize = () => fit();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [fit]);

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

  const sizerStyle: React.CSSProperties =
    natSize.w > 0
      ? { width: natSize.w * scale, height: natSize.h * scale, overflow: "hidden" }
      : { overflow: "hidden" };

  const fig = (
    <div className={`mm-figure${fs ? " mm-fs" : ""}`}>
      <div className="mm-bar">
        <span className="mm-bar-t">{title || "Interactive diagram"}</span>
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
        style={
          viewportHeight !== undefined && !fs
            ? { height: viewportHeight }
            : undefined
        }
      >
        <div className="mm-sizer" style={sizerStyle}>
          <div
            className="mm-inner"
            ref={innerRef}
            style={{ transform: `scale(${scale})`, transformOrigin: "top left" }}
          >
            {children}
          </div>
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
