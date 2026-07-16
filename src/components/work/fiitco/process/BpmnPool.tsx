"use client";

import { useState } from "react";
import type { BpmnNode, BpmnFlow, BpmnNodeType, BpmnTone } from "./process-data";

const LABEL_W = 124;
const COL_W = 188;
const LANE_H = 112;

const HALF: Record<BpmnNodeType, [number, number]> = {
  task: [76, 28],
  event: [23, 23],
  gateway: [27, 27],
};

const TONE: Record<BpmnTone, { fill: string; stroke: string; sw: number }> = {
  normal: { fill: "#ffffff", stroke: "#b8c0d4", sw: 1.6 },
  pain: { fill: "#fde0e0", stroke: "#dc4b4b", sw: 1.9 },
  auto: { fill: "#f2e7ff", stroke: "#8a4fe0", sw: 1.9 },
  good: { fill: "#d9f7e6", stroke: "#17a463", sw: 1.9 },
};

function wrapLabel(text: string, max: number): string[] {
  const words = String(text).split(" ");
  const lines: string[] = [];
  let cur = "";
  words.forEach((w) => {
    if ((cur + " " + w).trim().length > max) {
      if (cur) lines.push(cur);
      cur = w;
    } else {
      cur = (cur + " " + w).trim();
    }
  });
  if (cur) lines.push(cur);
  return lines.slice(0, 3);
}

function roundedPath(pts: number[][], r: number): string {
  if (pts.length < 3)
    return `M ${pts[0][0]} ${pts[0][1]} L ${pts[pts.length - 1][0]} ${pts[pts.length - 1][1]}`;
  const dist = (a: number[], b: number[]) => Math.hypot(a[0] - b[0], a[1] - b[1]);
  const unit = (a: number[], b: number[]) => {
    const d = dist(a, b) || 1;
    return [(b[0] - a[0]) / d, (b[1] - a[1]) / d];
  };
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 1; i < pts.length - 1; i++) {
    const p = pts[i - 1];
    const c = pts[i];
    const n = pts[i + 1];
    const rr = Math.min(r, dist(p, c) / 2, dist(n, c) / 2);
    const u1 = unit(c, p);
    const u2 = unit(c, n);
    d += ` L ${c[0] + u1[0] * rr} ${c[1] + u1[1] * rr} Q ${c[0]} ${c[1]} ${c[0] + u2[0] * rr} ${c[1] + u2[1] * rr}`;
  }
  const last = pts[pts.length - 1];
  return d + ` L ${last[0]} ${last[1]}`;
}

export function BpmnPool({
  lanes,
  nodes,
  flows,
}: {
  lanes: string[];
  nodes: BpmnNode[];
  flows: BpmnFlow[];
}) {
  const [hover, setHover] = useState<string | null>(null);
  const [pin, setPin] = useState<string | null>(null);
  const active = pin || hover;
  const maxCol = Math.max(...nodes.map((n) => n.col));
  const width = LABEL_W + (maxCol + 1) * COL_W;
  const height = lanes.length * LANE_H;
  const cx = (c: number) => LABEL_W + c * COL_W + COL_W / 2;
  const cy = (l: number) => l * LANE_H + LANE_H / 2;
  const byId = Object.fromEntries(nodes.map((n) => [n.id, n])) as Record<string, BpmnNode>;

  const neigh = new Set<string>();
  if (active) {
    neigh.add(active);
    flows.forEach((f) => {
      if (f.from === active) neigh.add(f.to);
      if (f.to === active) neigh.add(f.from);
    });
  }
  const incident = (f: BpmnFlow) => Boolean(active && (f.from === active || f.to === active));

  const edgePts = (s: BpmnNode, t: BpmnNode): number[][] => {
    const sx = cx(s.col);
    const sy = cy(s.lane);
    const tx = cx(t.col);
    const ty = cy(t.lane);
    const shw = HALF[s.type][0];
    const thw = HALF[t.type][0];
    const svh = HALF[s.type][1];
    if (s.lane === t.lane) return [[sx + shw, sy], [tx - thw, ty]];
    if (s.type === "gateway") {
      const ey = sy + (t.lane > s.lane ? svh : -svh);
      return [[sx, ey], [sx, ty], [tx - thw, ty]];
    }
    const midX = (sx + shw + tx - thw) / 2;
    return [[sx + shw, sy], [midX, sy], [midX, ty], [tx - thw, ty]];
  };

  const labelPos = (s: BpmnNode, t: BpmnNode): [number, number, "start" | "middle"] => {
    const sx = cx(s.col);
    const sy = cy(s.lane);
    const tx = cx(t.col);
    const ty = cy(t.lane);
    if (s.type === "gateway" && s.lane !== t.lane) return [sx + 9, (sy + ty) / 2 - 3, "start"];
    if (s.lane === t.lane) return [(sx + tx) / 2, sy - 9, "middle"];
    return [
      (sx + HALF[s.type][0] + tx - HALF[t.type][0]) / 2,
      (sy + ty) / 2 - 5,
      "middle",
    ];
  };

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      role="img"
      style={{ minWidth: width, fontFamily: "var(--font-sans)" }}
    >
      <defs>
        <marker
          id="bpmn-arrow"
          viewBox="0 0 10 10"
          refX="8.5"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M0,0 L10,5 L0,10 z" fill="#8a8f9c" />
        </marker>
        <marker
          id="bpmn-arrow-hot"
          viewBox="0 0 10 10"
          refX="8.5"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M0,0 L10,5 L0,10 z" fill="#7c58e6" />
        </marker>
        <filter id="bpmn-shadow" x="-20%" y="-20%" width="140%" height="160%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#141428" floodOpacity="0.12" />
        </filter>
      </defs>

      {lanes.map((ln, i) => (
        <g key={ln + i}>
          <rect
            x="0"
            y={i * LANE_H}
            width={width}
            height={LANE_H}
            fill={i % 2 ? "rgba(20,20,40,0.028)" : "transparent"}
          />
          <line
            x1="0"
            y1={(i + 1) * LANE_H}
            x2={width}
            y2={(i + 1) * LANE_H}
            stroke="#e6e6ec"
            strokeWidth="1"
          />
          <rect x="0" y={i * LANE_H} width={LABEL_W} height={LANE_H} fill="#ffffff" />
          <line
            x1={LABEL_W}
            y1={i * LANE_H}
            x2={LABEL_W}
            y2={(i + 1) * LANE_H}
            stroke="#e6e6ec"
            strokeWidth="1"
          />
          <text
            x={22}
            y={i * LANE_H + LANE_H / 2}
            fill="#6b6b76"
            fontSize={ln.length > 12 ? 9 : 11}
            fontWeight="700"
            letterSpacing={ln.length > 12 ? 0.6 : 1.4}
            transform={`rotate(-90 22 ${i * LANE_H + LANE_H / 2})`}
            textAnchor="middle"
            style={{ textTransform: "uppercase", fontFamily: "var(--font-mono)" }}
          >
            {ln}
          </text>
        </g>
      ))}
      <line x1={LABEL_W} y1="0" x2={LABEL_W} y2={height} stroke="#c7c9d1" strokeWidth="1.5" />

      {flows.map((f, i) => {
        const s = byId[f.from];
        const t = byId[f.to];
        if (!s || !t) return null;
        const pts = edgePts(s, t);
        const [lx, ly, anc] = labelPos(s, t);
        const hot = incident(f);
        const dim = active && !hot;
        const col = hot ? "#7c58e6" : "#9aa1ad";
        return (
          <g key={i} style={{ opacity: dim ? 0.12 : 1, transition: "opacity .15s" }}>
            <circle cx={pts[0][0]} cy={pts[0][1]} r="3" fill={col} />
            <path
              d={roundedPath(pts, 13)}
              fill="none"
              stroke={col}
              strokeWidth={hot ? 2.4 : 1.5}
              markerEnd={hot ? "url(#bpmn-arrow-hot)" : "url(#bpmn-arrow)"}
            />
            {f.label ? (
              <>
                <rect
                  x={anc === "start" ? lx - 2 : lx - f.label.length * 3.6 - 4}
                  y={ly - 10}
                  width={f.label.length * 7.2 + 8}
                  height="16"
                  rx="4"
                  fill="#ffffff"
                  stroke="#e3e3e8"
                />
                <text
                  x={anc === "start" ? lx + 2 : lx}
                  y={ly + 2}
                  fill="#55505f"
                  fontSize="10"
                  textAnchor={anc}
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {f.label}
                </text>
              </>
            ) : null}
          </g>
        );
      })}

      {nodes.map((n) => {
        const x = cx(n.col);
        const y = cy(n.lane);
        const tone = TONE[n.tone || "normal"];
        const lines = wrapLabel(n.label, n.type === "task" ? 19 : 13);
        const startY = y - (lines.length - 1) * 6.5;
        const dim = active && !neigh.has(n.id);
        const hot = active === n.id;
        const gp = {
          style: {
            opacity: dim ? 0.26 : 1,
            cursor: "pointer",
            transition: "opacity .15s",
          },
          onMouseEnter: () => setHover(n.id),
          onMouseLeave: () => setHover(null),
          onClick: () => setPin((p) => (p === n.id ? null : n.id)),
        };
        if (n.type === "event") {
          const isEnd = n.kind === "end";
          const elines = wrapLabel(n.label, 16);
          return (
            <g key={n.id} {...gp}>
              <circle
                cx={x}
                cy={y}
                r="17"
                fill={isEnd ? "#e8663d" : "#7bc043"}
                stroke={isEnd ? "#b0472a" : "#4e9226"}
                strokeWidth={isEnd ? 2.6 : 2}
              />
              {elines.map((ln, i) => (
                <text
                  key={i}
                  x={x}
                  y={y + 17 + 15 + i * 12}
                  textAnchor="middle"
                  fill="#45414d"
                  fontSize="10.5"
                  fontWeight="600"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {ln}
                </text>
              ))}
            </g>
          );
        }
        if (n.type === "gateway") {
          const d = `M ${x} ${y - 27} L ${x + 27} ${y} L ${x} ${y + 27} L ${x - 27} ${y} Z`;
          return (
            <g key={n.id} {...gp}>
              <path d={d} fill="#fff5e0" stroke="#e08a12" strokeWidth="2" />
              <text
                x={x}
                y={y + 5}
                textAnchor="middle"
                fill="#c8790f"
                fontSize="16"
                fontWeight="700"
              >
                ×
              </text>
              {lines.map((ln, i) => (
                <text
                  key={i}
                  x={x}
                  y={y + 27 + 15 + i * 12}
                  textAnchor="middle"
                  fill="#1a1a24"
                  fontSize="10"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {ln}
                </text>
              ))}
            </g>
          );
        }
        return (
          <g key={n.id} {...gp}>
            <rect
              x={x - 78}
              y={y - 28}
              width="156"
              height="56"
              rx="12"
              fill={tone.fill}
              stroke={tone.stroke}
              strokeWidth={hot ? tone.sw + 0.8 : tone.sw}
              filter="url(#bpmn-shadow)"
            />
            {lines.map((ln, i) => (
              <text
                key={i}
                x={x}
                y={startY + i * 13 + 4}
                textAnchor="middle"
                fill="#1a1a24"
                fontSize="11.5"
                fontWeight="600"
              >
                {ln}
              </text>
            ))}
          </g>
        );
      })}
    </svg>
  );
}
