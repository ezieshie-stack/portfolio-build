"use client";

import { useState } from "react";

type Event = { label: string; meta: string };
type Stage = { number: string; title: string; events: Event[] };

const stages: Stage[] = [
  {
    number: "01",
    title: "Analyze",
    events: [
      { label: "Intake mapped", meta: "Requirements captured" },
      { label: "Stakeholders aligned", meta: "Pain points identified" },
      { label: "Workflow audit", meta: "Gaps documented" },
    ],
  },
  {
    number: "02",
    title: "Design",
    events: [
      { label: "Process drafted", meta: "Architecture defined" },
      { label: "Workflow built", meta: "Process architecture set" },
      { label: "KPIs framed", meta: "Success metrics agreed" },
    ],
  },
  {
    number: "03",
    title: "Deploy",
    events: [
      { label: "System launched", meta: "Configuration live" },
      { label: "Rollout started", meta: "Teams onboarded" },
      { label: "Docs shipped", meta: "Knowledge captured" },
    ],
  },
  {
    number: "04",
    title: "Improve",
    events: [
      { label: "Feedback collected", meta: "Real usage tracked" },
      { label: "Metrics reviewed", meta: "Performance assessed" },
      { label: "Workflows refined", meta: "Iteration shipped" },
    ],
  },
];

const metrics = [
  { label: "Visibility", value: "92%" },
  { label: "Efficiency", value: "4.2×" },
  { label: "Adoption", value: "100%" },
];

export function OpControlSystem() {
  const [activeIndex, setActiveIndex] = useState(1);
  const active = stages[activeIndex];

  return (
    <div className="opControlSystem">
      <header className="opControlHead">
        <span className="opEyebrow">OPERATIONAL CONTROL SYSTEM</span>
        <span className="opStatus">
          <span className="opStatusDot" aria-hidden /> Live
        </span>
      </header>

      <div className="opControlBody">
        <div className="opStepRail" role="tablist" aria-label="Operating stage">
          {stages.map((s, i) => (
            <button
              key={s.number}
              type="button"
              role="tab"
              aria-selected={i === activeIndex}
              className={`opStep ${i === activeIndex ? "is-active" : ""}`}
              onMouseEnter={() => setActiveIndex(i)}
              onFocus={() => setActiveIndex(i)}
              onClick={() => setActiveIndex(i)}
            >
              <span>{s.number}</span>
              <strong>{s.title}</strong>
            </button>
          ))}
        </div>

        <div className="opWorkflow" key={active.number}>
          <span className="opWorkflowTrack" aria-hidden />
          <span className="opWorkflowPulse" aria-hidden />
          {active.events.map((e) => (
            <div key={e.label} className="opEvent">
              <p className="opEventLabel">{e.label}</p>
              <p className="opEventMeta">{e.meta}</p>
            </div>
          ))}
        </div>

        <aside className="opMetricRail">
          {metrics.map((m) => (
            <div key={m.label} className="opMetric">
              <span>{m.label}</span>
              <strong>{m.value}</strong>
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
}
