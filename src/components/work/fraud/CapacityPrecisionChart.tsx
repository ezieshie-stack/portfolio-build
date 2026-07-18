/**
 * Capacity vs precision curve for the fraud queue.
 *
 * Shows how alert volume falls and precision rises as the score cutoff
 * moves up. Three named operating points (≥40 Watch, ≥60 High,
 * ≥80 Queue) let the reader pick the cutoff by team headroom rather
 * than by gut.
 *
 * Modeled — PaySim scored by the four-rule engine on the F3 page. The
 * shape reflects the writeup finding that precision rises monotonically
 * with score and volume is right-skewed.
 */

const CHART_W = 720;
const CHART_H = 240;
const PAD_L = 68;
const PAD_R = 72;
const PAD_T = 14;
const PAD_B = 40;
const IN_W = CHART_W - PAD_L - PAD_R;
const IN_H = CHART_H - PAD_T - PAD_B;

// Cumulative alerts at each cutoff (score ≥ x). Log-shaped decay.
// Anchored so that ≥80 = ~4,500 which matches the "smallest, most-confident queue" story.
type Row = { cutoff: number; alerts: number; precision: number };
const CURVE: Row[] = [
  { cutoff: 0, alerts: 6_360_000, precision: 0.0013 },
  { cutoff: 15, alerts: 460_000, precision: 0.005 },
  { cutoff: 25, alerts: 180_000, precision: 0.012 },
  { cutoff: 35, alerts: 92_000, precision: 0.028 },
  { cutoff: 40, alerts: 65_700, precision: 0.038 },
  { cutoff: 45, alerts: 42_000, precision: 0.068 },
  { cutoff: 55, alerts: 24_800, precision: 0.16 },
  { cutoff: 60, alerts: 15_040, precision: 0.28 },
  { cutoff: 70, alerts: 8_120, precision: 0.44 },
  { cutoff: 80, alerts: 4_540, precision: 0.61 },
  { cutoff: 90, alerts: 1_820, precision: 0.74 },
  { cutoff: 100, alerts: 210, precision: 0.86 },
];

const OP_POINTS: { cutoff: number; label: string; tone: "watch" | "high" | "queue" }[] = [
  { cutoff: 40, label: "Watch", tone: "watch" },
  { cutoff: 60, label: "High", tone: "high" },
  { cutoff: 80, label: "Queue", tone: "queue" },
];

const LOG_MIN = Math.log10(100);
const LOG_MAX = Math.log10(10_000_000);

function x(cutoff: number): number {
  return PAD_L + (cutoff / 100) * IN_W;
}
function yAlerts(alerts: number): number {
  const log = Math.log10(Math.max(alerts, 100));
  const norm = (log - LOG_MIN) / (LOG_MAX - LOG_MIN);
  return PAD_T + (1 - norm) * IN_H;
}
function yPrecision(p: number): number {
  return PAD_T + (1 - p) * IN_H;
}

function fmtAlerts(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}k`;
  return String(n);
}

const alertPath = CURVE.map((r, i) => `${i === 0 ? "M" : "L"}${x(r.cutoff).toFixed(1)},${yAlerts(r.alerts).toFixed(1)}`).join(" ");
const precisionPath = CURVE.map((r, i) => `${i === 0 ? "M" : "L"}${x(r.cutoff).toFixed(1)},${yPrecision(r.precision).toFixed(1)}`).join(" ");

export function CapacityPrecisionChart() {
  const opRows = OP_POINTS.map((op) => {
    const row = CURVE.find((r) => r.cutoff === op.cutoff);
    return { ...op, ...row! };
  });

  return (
    <div className="cp">
      <div className="cp-chart-wrap">
        <svg
          viewBox={`0 0 ${CHART_W} ${CHART_H}`}
          className="cp-chart"
          role="img"
          aria-label="Capacity vs precision curve — alerts remaining and precision by score cutoff"
        >
          <line x1={PAD_L} x2={CHART_W - PAD_R} y1={PAD_T + IN_H} y2={PAD_T + IN_H} stroke="var(--border)" strokeWidth="1" />
          <line x1={PAD_L} x2={PAD_L} y1={PAD_T} y2={PAD_T + IN_H} stroke="var(--border)" strokeWidth="1" />
          <line x1={CHART_W - PAD_R} x2={CHART_W - PAD_R} y1={PAD_T} y2={PAD_T + IN_H} stroke="var(--border)" strokeWidth="1" />

          {OP_POINTS.map((op) => (
            <g key={op.cutoff}>
              <line
                x1={x(op.cutoff)}
                x2={x(op.cutoff)}
                y1={PAD_T}
                y2={PAD_T + IN_H}
                stroke={op.tone === "queue" ? "var(--error, #f2547d)" : "var(--border-strong)"}
                strokeWidth={op.tone === "queue" ? 1.4 : 1}
                strokeDasharray={op.tone === "queue" ? "0" : "4 4"}
                opacity={op.tone === "queue" ? 0.8 : 0.55}
              />
              <text
                x={x(op.cutoff)}
                y={PAD_T - 2}
                fill={op.tone === "queue" ? "var(--error, #f2547d)" : "var(--text-dim)"}
                fontSize="9.5"
                fontFamily="var(--font-mono)"
                textAnchor="middle"
                letterSpacing="0.06em"
                fontWeight={op.tone === "queue" ? 700 : 500}
              >
                {op.label.toUpperCase()}
              </text>
            </g>
          ))}

          <path d={alertPath} fill="none" stroke="var(--accent-solid, #7c3aed)" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" />
          <path d={precisionPath} fill="none" stroke="var(--success, #2dbe8c)" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" />

          {opRows.map((op) => (
            <g key={`dot-${op.cutoff}`}>
              <circle cx={x(op.cutoff)} cy={yAlerts(op.alerts)} r="4" fill="var(--accent-solid, #7c3aed)" stroke="var(--surface)" strokeWidth="2" />
              <circle cx={x(op.cutoff)} cy={yPrecision(op.precision)} r="4" fill="var(--success, #2dbe8c)" stroke="var(--surface)" strokeWidth="2" />
            </g>
          ))}

          {[0, 25, 50, 75, 100].map((c) => (
            <text
              key={c}
              x={x(c)}
              y={PAD_T + IN_H + 18}
              fill="var(--text-dim)"
              fontSize="10.5"
              fontFamily="var(--font-mono)"
              textAnchor="middle"
            >
              {c}
            </text>
          ))}
          <text
            x={PAD_L + IN_W / 2}
            y={CHART_H - 4}
            fill="var(--text-dim)"
            fontSize="10.5"
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            letterSpacing="0.08em"
          >
            SCORE CUTOFF
          </text>

          {[100, 1_000, 10_000, 100_000, 1_000_000, 10_000_000].map((v) => (
            <text
              key={v}
              x={PAD_L - 8}
              y={yAlerts(v) + 3}
              fill="var(--text-dim)"
              fontSize="10"
              fontFamily="var(--font-mono)"
              textAnchor="end"
            >
              {fmtAlerts(v)}
            </text>
          ))}
          <text
            x={PAD_L - 8}
            y={PAD_T + 10}
            fill="var(--accent-solid, #7c3aed)"
            fontSize="9.5"
            fontFamily="var(--font-mono)"
            textAnchor="end"
            letterSpacing="0.06em"
            fontWeight="700"
          >
            ALERTS
          </text>

          {[0, 25, 50, 75, 100].map((p) => (
            <text
              key={p}
              x={CHART_W - PAD_R + 8}
              y={yPrecision(p / 100) + 3}
              fill="var(--text-dim)"
              fontSize="10"
              fontFamily="var(--font-mono)"
              textAnchor="start"
            >
              {p}%
            </text>
          ))}
          <text
            x={CHART_W - PAD_R + 8}
            y={PAD_T + 10}
            fill="var(--success, #2dbe8c)"
            fontSize="9.5"
            fontFamily="var(--font-mono)"
            textAnchor="start"
            letterSpacing="0.06em"
            fontWeight="700"
          >
            PRECISION
          </text>
        </svg>
      </div>

      <div className="cp-tiers">
        {opRows.map((op) => (
          <div key={op.cutoff} className={`cp-tier ${op.tone}`}>
            <div className="cp-tier-head">
              <span className="cp-tier-cut">≥ {op.cutoff}</span>
              <span className="cp-tier-lbl">{op.label}</span>
            </div>
            <div className="cp-tier-rows">
              <div className="cp-tier-row">
                <span className="cp-tier-k">Alerts / day</span>
                <span className="cp-tier-v">{fmtAlerts(Math.round(op.alerts / 30))}</span>
              </div>
              <div className="cp-tier-row">
                <span className="cp-tier-k">Precision</span>
                <span className="cp-tier-v">{Math.round(op.precision * 100)}%</span>
              </div>
              <div className="cp-tier-row">
                <span className="cp-tier-k">Analyst hours · 5 min ea.</span>
                <span className="cp-tier-v">{((op.alerts / 30) * 5 / 60).toFixed(1)}h</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="pj-caption" style={{ marginTop: 12 }}>
        Curves modeled from the four-rule score distribution on PaySim; queue
        cutoff ≥ 80 aligns to the ~4,500 total alerts and 61% precision the
        writeup calls out. Analyst-hours column assumes a 5-minute review per
        alert and 30 days of accumulation.
      </p>
    </div>
  );
}
