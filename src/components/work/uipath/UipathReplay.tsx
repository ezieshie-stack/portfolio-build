"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  AlertTriangle,
  Play,
  RotateCcw,
  Terminal,
  Zap,
} from "lucide-react";

/**
 * UipathReplay — a native, portfolio-styled reconstruction of the
 * UiPath Supplier Price Monitor run. The bot processes seven suppliers
 * one at a time; each supplier emits a few log lines and populates its
 * row in the "Excel" table. Numbers and behaviour are taken verbatim
 * from the real run; only the UI is ours.
 */

type Supplier = {
  name: string;
  partNo: string;
  lastKnown: number;
  scraped: number;
  stock: "In Stock" | "Out of Stock";
  stockChanged?: boolean;
};

const SUPPLIERS: Supplier[] = [
  { name: "Adorama", partNo: "SONY-A7R5", lastKnown: 2500, scraped: 2909, stock: "In Stock" },
  { name: "B&H Photo Video", partNo: "PXW-A400", lastKnown: 399, scraped: 549.99, stock: "In Stock" },
  { name: "Micro Center", partNo: "M2SSD-1TB", lastKnown: 1200, scraped: 999.99, stock: "In Stock" },
  { name: "Insight", partNo: "PA503X", lastKnown: 450, scraped: 538.49, stock: "In Stock" },
  { name: "Micro Card", partNo: "1071710726", lastKnown: 600, scraped: 688.7, stock: "Out of Stock", stockChanged: true },
  { name: "Tomauri", partNo: "300250", lastKnown: 120, scraped: 114.99, stock: "In Stock" },
  { name: "Canada Computers", partNo: "MBASU00694", lastKnown: 180, scraped: 249.99, stock: "In Stock" },
];

const THRESHOLD = 5;

function deltaPct(s: Supplier): number {
  return ((s.scraped - s.lastKnown) / s.lastKnown) * 100;
}

function isAlert(s: Supplier): boolean {
  return Math.abs(deltaPct(s)) >= THRESHOLD || Boolean(s.stockChanged);
}

function fmtPct(x: number): string {
  const s = x.toFixed(2);
  return x >= 0 ? `+${s}%` : `${s}%`;
}

function fmtUsd(x: number): string {
  return x.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

type LogKind = "info" | "warn";
type Step =
  | { kind: "log"; type: LogKind; text: string }
  | { kind: "row"; idx: number };

function buildSteps(): Step[] {
  const steps: Step[] = [];
  const t = "09:01:18";
  SUPPLIERS.forEach((s, i) => {
    steps.push({ kind: "log", type: "info", text: `${t} [INFO] Processing supplier: ${s.name} · ${s.partNo}` });
    steps.push({ kind: "log", type: "info", text: `${t} [INFO] Chrome → selector matched · raw price "${fmtUsd(s.scraped)}" → clean ${s.scraped}` });
    steps.push({ kind: "row", idx: i });
    const d = deltaPct(s);
    if (isAlert(s)) {
      const stockNote = s.stockChanged ? " + stock change → Out of Stock" : "";
      steps.push({ kind: "log", type: "warn", text: `${t} [WARN] Breach: ${fmtPct(d)} vs 5.00% threshold${stockNote} → Alert Sheet` });
      if (s.stockChanged) {
        steps.push({ kind: "log", type: "info", text: `${t} [INFO]   › availability change detected` });
      }
    } else {
      steps.push({ kind: "log", type: "info", text: `${t} [INFO] ${fmtPct(d)} inside threshold, logged, no alert` });
    }
  });
  steps.push({ kind: "log", type: "info", text: "09:01:20 [INFO] Write_Output.xaml, 7 log rows · 6 alert rows → workbook saved" });
  steps.push({ kind: "log", type: "info", text: "09:01:20 [INFO] Execution ended, status: Successful" });
  return steps;
}

export function UipathReplay() {
  const STEPS = useMemo(buildSteps, []);
  const [playing, setPlaying] = useState(true);
  const [speed, setSpeed] = useState<1 | 2>(1);
  const [cursor, setCursor] = useState(0);
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!playing) return;
    if (cursor >= STEPS.length) {
      setPlaying(false);
      return;
    }
    const step = STEPS[cursor];
    // log lines are quick, row updates get a longer beat so the reader
    // can register the row filling in.
    const base = step.kind === "row" ? 460 : 220;
    const interval = base / speed;
    const t = window.setTimeout(() => setCursor((c) => c + 1), interval);
    return () => window.clearTimeout(t);
  }, [playing, cursor, speed, STEPS]);

  // scroll log to bottom on new lines
  useEffect(() => {
    const el = logRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [cursor]);

  const rowsRevealed = STEPS.slice(0, cursor).filter(
    (s): s is Extract<Step, { kind: "row" }> => s.kind === "row"
  ).length;
  const shownLog = STEPS.slice(0, cursor).filter(
    (s): s is Extract<Step, { kind: "log" }> => s.kind === "log"
  );
  const done = cursor >= STEPS.length;
  const progress = Math.round((cursor / STEPS.length) * 100);

  const replay = () => {
    setCursor(0);
    setPlaying(true);
  };

  return (
    <div className="up-replay">
      {/* controls */}
      <div className="up-controls">
        <button type="button" className="up-btn up-btn-primary" onClick={replay}>
          {done ? <RotateCcw size={14} aria-hidden /> : <Play size={14} aria-hidden />}
          {done ? "Replay run" : playing ? "Playing…" : "Resume"}
        </button>
        <div className="up-speed" role="radiogroup" aria-label="Playback speed">
          {[1, 2].map((s) => (
            <button
              key={s}
              type="button"
              role="radio"
              aria-checked={speed === s}
              className={`up-speed-btn${speed === s ? " on" : ""}`}
              onClick={() => setSpeed(s as 1 | 2)}
            >
              {s}×
            </button>
          ))}
        </div>
        <div className="up-progress" aria-hidden>
          <div className="up-progress-bar" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <p className="up-caption-pill">
        <Zap size={12} aria-hidden />
        Browser re-enactment, real supplier data, real alert logic, re-played from a verified run.
      </p>

      {/* log panel */}
      <div className="up-panel">
        <div className="up-panel-bar">
          <span className="up-panel-title">
            <Terminal size={13} aria-hidden /> UiPath · Execution log — Main.xaml
          </span>
          <span className="up-panel-dot" aria-hidden />
          <span className="up-panel-dot" aria-hidden />
          <span className="up-panel-dot" aria-hidden />
        </div>
        <div className="up-log" ref={logRef}>
          {shownLog.length === 0 ? (
            <div className="up-log-empty">Waiting for the bot…</div>
          ) : (
            shownLog.map((s, i) => (
              <div className={`up-log-row${s.type === "warn" ? " warn" : ""}`} key={i}>
                {s.text}
              </div>
            ))
          )}
        </div>
      </div>

      {/* table panel */}
      <div className="up-panel">
        <div className="up-panel-bar">
          <span className="up-panel-title">
            supplier_list_template.xlsx · live view
          </span>
          <span className="up-panel-count">
            {rowsRevealed} / {SUPPLIERS.length}
          </span>
        </div>
        <div className="up-tblwrap">
          <table className="up-tbl">
            <thead>
              <tr>
                <th>Supplier</th>
                <th className="num">Last known</th>
                <th className="num">Scraped</th>
                <th className="num">Δ%</th>
                <th>Stock</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {SUPPLIERS.map((s, i) => {
                const revealed = i < rowsRevealed;
                const d = deltaPct(s);
                const alert = isAlert(s);
                return (
                  <tr key={s.name} className={revealed ? "on" : "off"}>
                    <th scope="row">{s.name}</th>
                    <td className="num">{revealed ? fmtUsd(s.lastKnown) : "—"}</td>
                    <td className="num">{revealed ? fmtUsd(s.scraped) : "—"}</td>
                    <td className={`num${revealed ? (d > 0 ? " up" : d < 0 ? " dn" : "") : ""}`}>
                      {revealed ? fmtPct(d) : "—"}
                    </td>
                    <td>{revealed ? s.stock : "—"}</td>
                    <td>
                      {revealed ? (
                        <span className={`up-status ${alert ? "alert" : "safe"}`}>
                          {alert ? (
                            <>
                              <AlertTriangle size={10} aria-hidden /> Alert
                            </>
                          ) : (
                            "within 5%"
                          )}
                        </span>
                      ) : (
                        "—"
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
