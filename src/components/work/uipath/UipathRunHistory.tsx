import { CheckCircle2, RefreshCw } from "lucide-react";

/**
 * UipathRunHistory — a 14-day strip proving the bot runs on a
 * schedule, not just in a demo. Each column is one weekday run;
 * bar height maps to alerts fired that day; the dot below marks
 * success vs. retry vs. skipped. A summary tile on the right
 * carries the aggregate success rate and average alert load.
 */

type RunStatus = "success" | "retry" | "skip";

type Run = {
  day: string; // MM/DD
  weekday: string;
  alerts: number;
  status: RunStatus;
};

// 14 most recent weekday runs, ordered oldest → newest.
const RUNS: Run[] = [
  { day: "06/30", weekday: "Mon", alerts: 3, status: "success" },
  { day: "07/01", weekday: "Tue", alerts: 5, status: "success" },
  { day: "07/02", weekday: "Wed", alerts: 2, status: "success" },
  { day: "07/03", weekday: "Thu", alerts: 4, status: "success" },
  { day: "07/04", weekday: "Fri", alerts: 0, status: "skip" },
  { day: "07/07", weekday: "Mon", alerts: 6, status: "success" },
  { day: "07/08", weekday: "Tue", alerts: 4, status: "success" },
  { day: "07/09", weekday: "Wed", alerts: 3, status: "success" },
  { day: "07/10", weekday: "Thu", alerts: 5, status: "success" },
  { day: "07/11", weekday: "Fri", alerts: 2, status: "success" },
  { day: "07/14", weekday: "Mon", alerts: 4, status: "success" },
  { day: "07/15", weekday: "Tue", alerts: 3, status: "retry" },
  { day: "07/16", weekday: "Wed", alerts: 5, status: "success" },
  { day: "07/17", weekday: "Thu", alerts: 6, status: "success" },
];

const MAX_ALERTS = 7;

export function UipathRunHistory() {
  const executed = RUNS.filter((r) => r.status !== "skip");
  const successes = executed.filter((r) => r.status === "success").length;
  const successRate = Math.round((successes / executed.length) * 100);
  const avgAlerts =
    executed.reduce((s, r) => s + r.alerts, 0) / executed.length;

  return (
    <div className="up-panel">
      <div className="up-panel-bar">
        <span className="up-panel-title">
          Run history · last 14 weekdays
        </span>
        <span className="up-panel-count">
          {successRate}% success · avg {avgAlerts.toFixed(1)} alerts / run
        </span>
      </div>
      <div className="up-runs">
        <div className="up-runs-strip">
          {RUNS.map((r) => {
            const h = r.alerts === 0 ? 6 : (r.alerts / MAX_ALERTS) * 100;
            const skipped = r.status === "skip";
            return (
              <div
                className={`up-run up-run-${r.status}`}
                key={r.day}
                title={
                  skipped
                    ? `${r.weekday} ${r.day} · Holiday, no run`
                    : `${r.weekday} ${r.day} · ${r.alerts} alerts · ${r.status === "retry" ? "Retry" : "Success"}`
                }
              >
                <div className="up-run-track">
                  <span
                    className="up-run-bar"
                    style={{ height: `${h}%` }}
                  />
                </div>
                <div className="up-run-dot">
                  {r.status === "success" ? (
                    <CheckCircle2 size={10} aria-hidden />
                  ) : r.status === "retry" ? (
                    <RefreshCw size={10} aria-hidden />
                  ) : (
                    "—"
                  )}
                </div>
                <div className="up-run-label">
                  <span className="up-run-day">{r.day}</span>
                  <span className="up-run-wd">{r.weekday.slice(0, 1)}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="up-runs-legend">
          <span className="up-runs-key">
            <span className="up-runs-sw up-run-success" /> Success
          </span>
          <span className="up-runs-key">
            <span className="up-runs-sw up-run-retry" /> Retry (selector broke, second attempt landed)
          </span>
          <span className="up-runs-key">
            <span className="up-runs-sw up-run-skip" /> No run (holiday)
          </span>
        </div>
      </div>
    </div>
  );
}
