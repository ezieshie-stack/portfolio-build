"use client";

import { TONE_PALETTE, type FishConfig } from "./types";

/**
 * FishboneDiagram — spine + 6 category bones (Ishikawa 6M).
 * Ported from deploy/portfolio/fiit-diagram-engine.jsx (FishboneDiagram fn).
 */
export function FishboneDiagram({ config }: { config: FishConfig }) {
  const W = config.w || 1080;
  const H = config.h || 520;
  const spineY = H / 2;
  const headX = W - 236;
  const x0 = 46;
  const tops = config.cats.filter((c) => c.side === "top");
  const bots = config.cats.filter((c) => c.side === "bottom");
  const posX = (arr: unknown[], i: number) =>
    x0 + 90 + ((headX - x0 - 120) * (i + 0.5)) / arr.length;

  type Bone = (typeof config.cats)[number] & { bx: number; by: number; up: boolean };
  const bones: Bone[] = [];
  tops.forEach((c, i) => bones.push({ ...c, bx: posX(tops, i), by: 40, up: true }));
  bots.forEach((c, i) => bones.push({ ...c, bx: posX(bots, i), by: H - 40, up: false }));

  return (
    <div className="fish" style={{ width: W, height: H }}>
      <svg className="fish-svg" width={W} height={H}>
        <defs>
          <marker
            id="fish-ah"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="8"
            markerHeight="8"
            orient="auto"
          >
            <path d="M0,0 L10,5 L0,10 z" fill="#b02a37" />
          </marker>
        </defs>
        <line
          x1={x0}
          y1={spineY}
          x2={headX}
          y2={spineY}
          stroke="#b02a37"
          strokeWidth={3}
          markerEnd="url(#fish-ah)"
        />
        {bones.map((b, i) => (
          <line
            key={i}
            x1={b.bx}
            y1={b.up ? b.by + 24 : b.by - 24}
            x2={b.bx + 70}
            y2={spineY}
            stroke={(TONE_PALETTE[b.tone] || TONE_PALETTE.neutral)[1]}
            strokeWidth={2}
          />
        ))}
      </svg>
      <div className="fish-head" style={{ left: headX + 8, top: spineY }}>
        {config.problem}
      </div>
      {bones.map((b, i) => {
        const [bg, bd] = TONE_PALETTE[b.tone] || TONE_PALETTE.neutral;
        return (
          <div key={i}>
            <div
              className="fish-cat"
              style={{
                left: b.bx - 40,
                top: b.up ? b.by - 14 : b.by - 14,
                background: bg,
                borderColor: bd,
                color: "#1a1a1a",
              }}
            >
              {b.label}
            </div>
            <div
              className="fish-cause"
              style={{
                left: b.bx - 178,
                top: b.up ? b.by + 18 : b.by - 18 - b.causes.length * 26,
              }}
            >
              {b.causes.map((c, ci) => (
                <div key={ci} style={{ marginBottom: 5 }}>
                  • {c}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
