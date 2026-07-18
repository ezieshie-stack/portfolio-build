"use client";

import { useState } from "react";
import type { FlowConfig, FlowNode } from "./types";

/**
 * FlowCanvas — nodes + orthogonal edges + groups + hover highlight.
 * Ported from deploy/portfolio/fiit-diagram-engine.jsx (FlowCanvas fn).
 */
export function FlowCanvas({ config }: { config: FlowConfig }) {
  const [hover, setHover] = useState<string | null>(null);
  const [pin, setPin] = useState<string | null>(null);
  const active = pin || hover;

  const U = {
    NW: 162,
    NH: 74,
    HG: 60,
    VG: 54,
    pad: 30,
    ...(config.unit || {}),
  };

  const rectOf = (n: FlowNode) => {
    const x = U.pad + n.c * (U.NW + U.HG);
    const y = U.pad + n.r * (U.NH + U.VG);
    let w = (n.cs || 1) * U.NW + ((n.cs || 1) - 1) * U.HG;
    let h = (n.rs || 1) * U.NH + ((n.rs || 1) - 1) * U.VG;
    if (n.shape === "circle" || n.shape === "process") {
      const d = n.d || 116;
      w = d;
      h = d;
    }
    if (n.shape === "entity") h = 34 + (n.rows ? n.rows.length : 0) * 22;
    return { x, y, w, h, cx: x + w / 2, cy: y + h / 2 };
  };

  const R: Record<string, ReturnType<typeof rectOf>> = {};
  config.nodes.forEach((n) => {
    R[n.id] = rectOf(n);
  });

  let W = 0;
  let H = 0;
  config.nodes.forEach((n) => {
    const r = R[n.id];
    W = Math.max(W, r.x + r.w);
    H = Math.max(H, r.y + r.h);
  });

  const groups = (config.groups || []).map((g) => {
    let l = 0;
    let t = 0;
    let r2 = 0;
    let b = 0;
    if ("members" in g && g.members) {
      const rs = g.members.map((id) => R[id]).filter(Boolean);
      if (!rs.length) return { label: g.label, x: 0, y: 0, w: 0, h: 0 };
      l = Math.min(...rs.map((r) => r.x));
      t = Math.min(...rs.map((r) => r.y));
      r2 = Math.max(...rs.map((r) => r.x + r.w));
      b = Math.max(...rs.map((r) => r.y + r.h));
    } else if ("cols" in g && g.cols && g.rows) {
      l = U.pad + g.cols[0] * (U.NW + U.HG);
      t = U.pad + g.rows[0] * (U.NH + U.VG);
      r2 = U.pad + g.cols[1] * (U.NW + U.HG) + U.NW;
      b = U.pad + g.rows[1] * (U.NH + U.VG) + U.NH;
    }
    return { label: g.label, x: l - 16, y: t - 24, w: r2 - l + 32, h: b - t + 40 };
  });

  groups.forEach((g) => {
    W = Math.max(W, g.x + g.w);
    H = Math.max(H, g.y + g.h);
  });
  W += U.pad;
  H += U.pad;

  const neigh = new Set<string>();
  if (active) {
    neigh.add(active);
    config.edges.forEach((e) => {
      if (e.from === active) neigh.add(e.to);
      if (e.to === active) neigh.add(e.from);
    });
  }
  const isAdj = (e: { from: string; to: string }) =>
    !!active && (e.from === active || e.to === active);

  // Edge geometry — orthogonal, with a sideways jog around any node
  // that sits between the endpoints. Ported verbatim from the design
  // engine's FlowCanvas so labels never land on a node.
  const between = (v: number, a: number, b: number) =>
    v > Math.min(a, b) + 2 && v < Math.max(a, b) - 2;
  const blocksV = (x: number, y0: number, y1: number) =>
    config.nodes.some((n) => {
      const r = R[n.id];
      return (
        x > r.x - 1 &&
        x < r.x + r.w + 1 &&
        (between(r.y, y0, y1) ||
          between(r.y + r.h, y0, y1) ||
          (r.y <= Math.min(y0, y1) && r.y + r.h >= Math.max(y0, y1)))
      );
    });
  const blocksH = (y: number, x0: number, x1: number) =>
    config.nodes.some((n) => {
      const r = R[n.id];
      return (
        y > r.y - 1 &&
        y < r.y + r.h + 1 &&
        (between(r.x, x0, x1) ||
          between(r.x + r.w, x0, x1) ||
          (r.x <= Math.min(x0, x1) && r.x + r.w >= Math.max(x0, x1)))
      );
    });

  const edgePath = (e: { from: string; to: string }) => {
    const s = R[e.from];
    const t = R[e.to];
    if (!s || !t) return null;
    const dx = t.cx - s.cx;
    const dy = t.cy - s.cy;
    let d: string;
    let lx: number;
    let ly: number;
    if (Math.abs(dx) >= Math.abs(dy)) {
      const sx = dx >= 0 ? s.x + s.w : s.x;
      const tx = dx >= 0 ? t.x : t.x + t.w;
      let mx = (sx + tx) / 2;
      // Multi-column edge: if the horizontal leg would cross a node
      // between s and mx, jog the vertical break into the row gutter.
      if (Math.abs(s.cy - t.cy) > 4 && blocksH(s.cy, sx, mx)) {
        mx = dx >= 0 ? sx + U.HG / 2 : sx - U.HG / 2;
      }
      d = `M ${sx} ${s.cy} L ${mx} ${s.cy} L ${mx} ${t.cy} L ${tx} ${t.cy}`;
      lx = mx;
      ly = (s.cy + t.cy) / 2;
    } else {
      const sy = dy >= 0 ? s.y + s.h : s.y;
      const ty = dy >= 0 ? t.y : t.y + t.h;
      let my = (sy + ty) / 2;
      // Same-column edge with a node sitting between s and t: route
      // out into the column gutter and back.
      if (Math.abs(s.cx - t.cx) < 4 && blocksV(s.cx, sy, ty)) {
        const mx = s.x + s.w + U.HG / 2;
        const jog = dy >= 0 ? 16 : -16;
        d =
          `M ${s.cx} ${sy} ` +
          `L ${s.cx} ${sy + jog} ` +
          `L ${mx} ${sy + jog} ` +
          `L ${mx} ${ty - jog} ` +
          `L ${t.cx} ${ty - jog} ` +
          `L ${t.cx} ${ty}`;
        lx = mx;
        ly = my;
        return { d, lx, ly };
      }
      d = `M ${s.cx} ${sy} L ${s.cx} ${my} L ${t.cx} ${my} L ${t.cx} ${ty}`;
      lx = (s.cx + t.cx) / 2;
      ly = my;
      // Multi-column edge whose horizontal midline crosses a node:
      // move the horizontal leg up/down into the row gutter.
      if (Math.abs(s.cx - t.cx) > 4 && blocksH(my, s.cx, t.cx)) {
        my = sy + (dy >= 0 ? U.VG / 2 : -U.VG / 2);
        d = `M ${s.cx} ${sy} L ${s.cx} ${my} L ${t.cx} ${my} L ${t.cx} ${ty}`;
        ly = my;
      }
    }
    return { d, lx, ly };
  };

  return (
    <div className="fc" style={{ width: W, height: H }}>
      {groups.map((g, i) => (
        <div
          className="fc-group"
          key={`g${i}`}
          style={{ left: g.x, top: g.y, width: g.w, height: g.h }}
        >
          <span className="fc-group-l">{g.label}</span>
        </div>
      ))}
      <svg className="fc-edges" width={W} height={H}>
        <defs>
          <marker
            id="fc-ah"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M0,0 L10,5 L0,10 z" fill="#8a8f9c" />
          </marker>
        </defs>
        {config.edges.map((e, i) => {
          const g = edgePath(e);
          if (!g) return null;
          const cls =
            "fc-edge" +
            (e.dashed ? " dashed" : "") +
            (active ? (isAdj(e) ? " hot" : " dim") : "");
          return <path key={i} className={cls} d={g.d} markerEnd="url(#fc-ah)" />;
        })}
      </svg>
      {config.edges.map((e, i) => {
        const g = edgePath(e);
        if (!g || !e.label) return null;
        const cls =
          "fc-elabel" + (active ? (isAdj(e) ? " hot" : " dim") : "");
        return (
          <div key={`l${i}`} className={cls} style={{ left: g.lx, top: g.ly }}>
            {e.label}
          </div>
        );
      })}
      {config.nodes.map((n) => {
        const r = R[n.id];
        const dim = active && !neigh.has(n.id);
        const hot = active === n.id;
        const cls =
          "fc-node hoverable " +
          (n.tone || "neutral") +
          (n.shape ? ` ${n.shape}` : "") +
          (n.dom ? ` dom-${n.dom}` : "") +
          (dim ? " dim" : "") +
          (hot ? " hot" : "");
        return (
          <div
            key={n.id}
            className={cls}
            style={{ left: r.x, top: r.y, width: r.w, height: r.h }}
            onMouseEnter={() => setHover(n.id)}
            onMouseLeave={() => setHover(null)}
            onClick={() => setPin((p) => (p === n.id ? null : n.id))}
          >
            {n.shape === "entity" ? (
              <>
                <div className="fc-ent-h">{n.label}</div>
                {(n.rows || []).map((row, ri) => (
                  <div className="fc-ent-r" key={ri}>
                    {row[1] ? (
                      <span className={`fc-ent-k ${row[1]}`}>{row[1]}</span>
                    ) : null}
                    <span>{row[0]}</span>
                  </div>
                ))}
              </>
            ) : (
              <>
                <span className="fc-node-l">{n.label}</span>
                {n.sub ? <span className="fc-node-s">{n.sub}</span> : null}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
