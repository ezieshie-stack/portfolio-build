"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { Expand, Maximize2, Minus, Plus, X } from "lucide-react";
import { TONE_PALETTE, type Tone } from "./types";

/**
 * DiagramShell — pan / zoom / fullscreen wrapper for any diagram.
 *
 * Structure per PROCESS_PAGE_UPDATE.md:
 *   .mm-viewport (overflow:auto, drag-to-pan)
 *     > .mm-sizer  (width = natW*scale, height = natH*scale, overflow:hidden)
 *       > .mm-inner (transform: scale(scale), origin top-left)
 *
 * Refits synchronously on: mount, `resetKey` change (process/mode swap),
 * and window resize. No async gates, no visibility flags — the sizer
 * itself absorbs the intermediate frame because it's derived from state
 * that useLayoutEffect flushes before paint.
 */

const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

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
  const sizerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [natSize, setNatSize] = useState<{ w: number; h: number }>({ w: 0, h: 0 });
  const [fs, setFs] = useState(false);
  const drag = useRef({ on: false, x: 0, y: 0, l: 0, t: 0 });

  const fit = useCallback(() => {
    const vp = vpRef.current;
    const inner = innerRef.current;
    const sizer = sizerRef.current;
    if (!vp || !inner) return;
    // Strip the current transform + sizer clamps so we measure the SVG
    // at its natural, un-transformed size.
    inner.style.transform = "scale(1)";
    if (sizer) {
      sizer.style.width = "auto";
      sizer.style.height = "auto";
      sizer.style.overflow = "visible";
    }
    // Force layout so offsetWidth reflects the natural state.
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    inner.offsetWidth;
    const natW = inner.offsetWidth;
    const natH = inner.offsetHeight;
    const avail = vp.clientWidth - 40;
    const s = avail >= natW ? 1 : Math.max(0.25, avail / natW);
    // Snap the pan back to origin so the fitted diagram is actually
    // visible (otherwise a manual zoom-in + pan leaves the viewport
    // scrolled onto empty space after the fit shrinks the content).
    vp.scrollLeft = 0;
    vp.scrollTop = 0;
    setNatSize({ w: natW, h: natH });
    setScale(s);
  }, []);

  // Synchronous refit before paint whenever the diagram content changes.
  useIsoLayoutEffect(() => {
    fit();
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

  // Once natSize is known: sizer holds the scaled diagram footprint so
  // the parent viewport can scroll it end-to-end.
  const measured = natSize.w > 0 && natSize.h > 0;
  const sizerStyle: React.CSSProperties = measured
    ? { width: natSize.w * scale, height: natSize.h * scale, overflow: "hidden" }
    : { width: "auto", height: "auto", overflow: "visible" };

  // Viewport height: hug the scaled diagram (16px slack), min 200, max 520,
  // so tall diagrams don't blow up the page and short ones don't leave a
  // huge empty band on mobile. Falls back to the caller's prop (or the
  // CSS default) until the first measurement.
  const vpStyle: React.CSSProperties | undefined = fs
    ? undefined
    : measured
      ? { height: Math.max(200, Math.min(natSize.h * scale + 16, 520)) }
      : viewportHeight !== undefined
        ? { height: viewportHeight }
        : undefined;

  const innerStyle: React.CSSProperties = {
    transform: `scale(${scale})`,
    transformOrigin: "top left",
  };

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
        style={vpStyle}
      >
        <div className="mm-sizer" ref={sizerRef} style={sizerStyle}>
          <div className="mm-inner" ref={innerRef} style={innerStyle}>
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
