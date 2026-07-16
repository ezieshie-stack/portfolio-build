"use client";

import type { SeqConfig, SeqMessage } from "./types";

/**
 * SequenceDiagram — actor lanes + ordered messages + notes.
 * Ported from deploy/portfolio/fiit-diagram-engine.jsx (SequenceDiagram fn).
 */
export function SequenceDiagram({ config }: { config: SeqConfig }) {
  const LANE = config.laneW || 172;
  const TOP = 28;
  const STEP = config.step || 46;
  const PAD = 30;
  const actors = config.actors;
  const n = actors.length;
  const W = LANE * n;
  const laneX = (i: number) => LANE * i + LANE / 2;
  const idx: Record<string, number> = {};
  actors.forEach((a, i) => {
    idx[a.id] = i;
  });

  let y = TOP;
  const rows = config.messages.map((m: SeqMessage) => {
    const row = { y, ...m };
    y += m.kind === "note" ? STEP + 8 : STEP;
    return row;
  });
  const H = y + PAD;

  return (
    <div className="seq" style={{ width: W }}>
      <div className="seq-head" style={{ width: W }}>
        {actors.map((a) => (
          <div className="seq-actor" key={a.id} style={{ width: LANE }}>
            <span className="seq-actor-box">{a.label}</span>
          </div>
        ))}
      </div>
      <div className="seq-body" style={{ width: W, height: H }}>
        {actors.map((a, i) => (
          <div
            className="seq-life"
            key={a.id}
            style={{ left: laneX(i), height: H }}
          />
        ))}
        {rows.map((m, k) => {
          if (m.kind === "note") {
            const c = idx[m.from];
            return (
              <div
                className="seq-note"
                key={k}
                style={{
                  left: laneX(c) - LANE * 0.42,
                  top: m.y - 4,
                  width: LANE * 0.84,
                }}
              >
                {m.text}
              </div>
            );
          }
          const a = idx[m.from];
          const b = idx[(m as { to: string }).to];
          const x1 = laneX(a);
          const x2 = laneX(b);
          if (a === b) {
            return (
              <div
                key={k}
                style={{
                  position: "absolute",
                  left: x1,
                  top: m.y,
                  width: 46,
                  height: 20,
                }}
              >
                <div className="seq-line" style={{ left: 0, width: 46 }} />
                <div
                  className="seq-lbl"
                  style={{
                    left: 52,
                    bottom: -2,
                    position: "absolute",
                    whiteSpace: "nowrap",
                  }}
                >
                  {m.text}
                </div>
              </div>
            );
          }
          const left = Math.min(x1, x2);
          const w = Math.abs(x2 - x1);
          const toRight = x2 > x1;
          return (
            <div
              key={k}
              style={{
                position: "absolute",
                left,
                top: m.y,
                width: w,
                height: 18,
              }}
            >
              <div
                className={`seq-line${m.kind === "return" ? " ret" : ""}`}
                style={{ left: 0, width: w }}
              />
              <div
                className="seq-arrow"
                style={
                  toRight
                    ? { right: 0, borderLeft: "6px solid #8a8f9c" }
                    : { left: 0, borderRight: "6px solid #8a8f9c" }
                }
              />
              <div
                className="seq-lbl"
                style={{
                  left: toRight ? 4 : "auto",
                  right: toRight ? "auto" : 4,
                }}
              >
                {m.text}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
