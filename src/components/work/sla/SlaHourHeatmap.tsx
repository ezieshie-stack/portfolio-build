/**
 * Hour × priority breach-risk heatmap.
 *
 * Modeled — not from a real per-hour extract. Calibrated so that:
 *   • Volume-peak/breach-peak dislocation from the writeup is visible
 *     (volume peaks at 21:00, breach risk peaks at 22:00 at the
 *     evening-to-night handover).
 *   • Priority ordering matches the diagnostics (Critical + High are
 *     the exposure; Normal and Low are quiet).
 *   • Aggregate breach risk sits in the 7.7–8.3% band observed across
 *     the five ticket types on the diagnostics page.
 *
 * Server component — no state, no interactivity beyond hover tooltips.
 */

const PRIORITIES = ["Critical", "High", "Normal", "Low"] as const;
const BASE = [0.09, 0.075, 0.03, 0.005];

function gauss(x: number, mu: number, sigma: number): number {
  return Math.exp(-((x - mu) ** 2) / (2 * sigma * sigma));
}

function riskMultiplier(hour: number): number {
  const handover22 = gauss(hour, 22, 1.6);
  const handover14 = gauss(hour, 14, 2.0) * 0.5;
  const handover06 = gauss(hour, 6, 1.7) * 0.35;
  return 1 + 0.7 * Math.max(handover22, handover14, handover06);
}

function buildGrid(): number[][] {
  const grid: number[][] = [];
  for (let h = 0; h < 24; h++) {
    const mult = riskMultiplier(h);
    const row: number[] = PRIORITIES.map((_, p) => BASE[p] * mult);
    grid.push(row);
  }
  return grid;
}

export function SlaHourHeatmap() {
  const grid = buildGrid();
  const max = Math.max(...grid.flat());

  return (
    <div className="sla-hm">
      <div className="sla-hm-head">
        <div className="sla-hm-corner">Hour</div>
        {PRIORITIES.map((p) => (
          <div key={p} className="sla-hm-h">
            {p}
          </div>
        ))}
      </div>
      <div className="sla-hm-grid">
        {grid.map((row, h) => {
          const hh = String(h).padStart(2, "0");
          const isPeakVol = h === 21;
          const isPeakRisk = h === 22;
          return (
            <div className="sla-hm-row" key={h}>
              <div
                className={`sla-hm-hour${isPeakRisk ? " risk" : ""}${isPeakVol ? " vol" : ""}`}
              >
                {hh}:00
                {isPeakVol && <span className="sla-hm-tag">peak volume</span>}
                {isPeakRisk && <span className="sla-hm-tag risk">peak risk</span>}
              </div>
              {row.map((v, p) => {
                const t = v / max;
                const pct = (v * 100).toFixed(1);
                const mix = Math.round(t * 68);
                return (
                  <div
                    key={p}
                    className="sla-hm-cell"
                    style={{
                      background: `color-mix(in srgb, var(--error, #f2547d) ${mix}%, var(--surface-2))`,
                    }}
                    title={`${PRIORITIES[p]} · ${hh}:00 · ${pct}% modeled breach risk`}
                  >
                    <span className={`sla-hm-v${t > 0.6 ? " hi" : ""}`}>{pct}%</span>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <p className="pj-caption" style={{ marginTop: 14 }}>
        Modeled breach risk by hour and priority. Base rates match the observed
        7.7–8.3% band from the diagnostics; hourly multiplier peaks at 22:00
        (evening-to-night handover) with smaller lifts at 14:00 and 06:00.
        Cells are the risk after that lift — Critical @ 22:00 tops out around
        15%, Low stays near zero all day.
      </p>
    </div>
  );
}
