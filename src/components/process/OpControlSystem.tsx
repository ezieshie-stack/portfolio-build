"use client";

import { useEffect, useRef, useState } from "react";
import {
  Check,
  GitCompare,
  Rocket,
  Search,
  Settings,
} from "lucide-react";

type Phase = {
  n: string;
  name: string;
  timeline: Array<[string, string]>;
  metrics: Array<[string, number, string]>;
};

const PHASES: Phase[] = [
  {
    n: "01",
    name: "Analyze",
    timeline: [
      ["Stakeholders Mapped", "Inputs gathered"],
      ["Current-State Documented", "As-is captured"],
      ["Gaps Quantified", "Bottlenecks identified"],
    ],
    metrics: [
      ["Visibility", 58, "%"],
      ["Throughput", 1.6, "×"],
      ["Adoption", 15, "%"],
    ],
  },
  {
    n: "02",
    name: "Design",
    timeline: [
      ["Requirements Authored", "BRD signed off"],
      ["Process & Data Modeled", "BPMN + ERD"],
      ["Acceptance Criteria Set", "Test conditions defined"],
    ],
    metrics: [
      ["Visibility", 92, "%"],
      ["Throughput", 4.2, "×"],
      ["Adoption", 100, "%"],
    ],
  },
  {
    n: "03",
    name: "Deliver",
    timeline: [
      ["Solution Configured", "Built to spec"],
      ["UAT Completed", "Validated against need"],
      ["System in Production", "Live deployment"],
    ],
    metrics: [
      ["Visibility", 96, "%"],
      ["Throughput", 5.1, "×"],
      ["Adoption", 78, "%"],
    ],
  },
  {
    n: "04",
    name: "Operate",
    timeline: [
      ["Live Performance Monitored", "Usage tracked"],
      ["Issues Resolved", "Defects closed"],
      ["Improvements Shipped", "Continuous evaluation"],
    ],
    metrics: [
      ["Visibility", 99, "%"],
      ["Throughput", 6.4, "×"],
      ["Adoption", 94, "%"],
    ],
  },
];

const NODE_ICONS = [Search, GitCompare, Rocket, Settings];

function useCountUp(target: number, duration = 600) {
  const [val, setVal] = useState(target);
  const from = useRef(target);

  useEffect(() => {
    const a = from.current;
    const b = target;
    if (a === b) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const e = 1 - Math.pow(1 - t, 3);
      setVal(a + (b - a) * e);
      if (t < 1) raf = requestAnimationFrame(tick);
      else from.current = b;
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);

  return val;
}

function OpMetric({
  label,
  value,
  unit,
}: {
  label: string;
  value: number;
  unit: string;
}) {
  const v = useCountUp(value);
  const display = unit === "×" ? v.toFixed(1) : Math.round(v).toString();
  return (
    <div className="pf-opmetric">
      <span className="lab">{label}</span>
      <span className="val">
        {display}
        {unit}
      </span>
    </div>
  );
}

function nodePos(i: number) {
  const R = 41;
  const ang = (-90 + i * 90) * (Math.PI / 180);
  return {
    left: `${50 + R * Math.cos(ang)}%`,
    top: `${50 + R * Math.sin(ang)}%`,
  };
}

export function OpControlSystem() {
  const [phase, setPhase] = useState(0);
  const p = PHASES[phase];
  const sweep = ((phase + 1) / PHASES.length) * 360;

  return (
    <div className="pf-opsystem">
      <div className="pf-ophead">
        <span className="pf-mono-h" style={{ margin: 0 }}>
          Lifecycle Control
        </span>
        <span className="pf-oplive">
          <span className="dot" /> Live
        </span>
      </div>

      <div className="pf-opbody">
        {/* Radial ring */}
        <div className="pf-opring">
          <div className="pf-ring-track" />
          <div
            className="pf-ring-prog"
            style={{
              background: `conic-gradient(var(--accent) ${sweep}deg, transparent ${sweep}deg)`,
            }}
          />
          <div className="pf-ring-inner">
            <span className="pf-ring-n">{p.n}</span>
            <span className="pf-ring-name">{p.name}</span>
            <span className="pf-ring-of">Phase {phase + 1} of 4</span>
          </div>
          {PHASES.map((ph, i) => {
            const Ico = NODE_ICONS[i];
            return (
              <button
                key={ph.name}
                type="button"
                className={`pf-ring-node${i === phase ? " on" : ""}${
                  i < phase ? " done" : ""
                }`}
                style={nodePos(i)}
                onClick={() => setPhase(i)}
                aria-label={ph.name}
              >
                <Ico size={18} aria-hidden />
                <span className="lbl">{ph.name}</span>
              </button>
            );
          })}
        </div>

        {/* Detail panel */}
        <div className="pf-oppanel">
          <div className="pf-oppanel-head">
            <span className="num">{p.n}</span>
            <h4>{p.name}</h4>
          </div>
          <div className="pf-opchecks">
            {p.timeline.map(([t, s]) => (
              <div className="pf-opcheck" key={t}>
                <span className="tick">
                  <Check size={13} aria-hidden />
                </span>
                <div>
                  <strong>{t}</strong>
                  <span>{s}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="pf-opmetrics">
            {p.metrics.map(([l, v, u]) => (
              <OpMetric key={l} label={l} value={v} unit={u} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
