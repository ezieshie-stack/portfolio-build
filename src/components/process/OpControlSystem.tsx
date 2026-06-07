"use client";

import { useState } from "react";

type Event = { label: string; meta: string };
type Stage = { number: string; title: string; events: Event[] };

const stages: Stage[] = [
  {
    number: "01",
    title: "Listen",
    events: [
      { label: "Stakeholders interviewed", meta: "Pain points captured" },
      { label: "Current workflow walked", meta: "Friction noted" },
      { label: "Requirements gathered", meta: "Scope agreed" },
    ],
  },
  {
    number: "02",
    title: "Map",
    events: [
      { label: "As-is drawn in BPMN", meta: "Swimlanes set" },
      { label: "Handoffs documented", meta: "Gaps made visible" },
      { label: "Process baselined", meta: "Shared with the team" },
    ],
  },
  {
    number: "03",
    title: "Diagnose",
    events: [
      { label: "Bottleneck located", meta: "Constraint named" },
      { label: "Impact quantified", meta: "Cost measured" },
      { label: "Root cause traced", meta: "Evidence logged" },
    ],
  },
  {
    number: "04",
    title: "Deliver",
    events: [
      { label: "To-be designed", meta: "New flow defined" },
      { label: "Solution delivered", meta: "Working deployment live" },
      { label: "Output validated", meta: "UAT passed" },
    ],
  },
  {
    number: "05",
    title: "Hand Off",
    events: [
      { label: "Change documented", meta: "Plain language" },
      { label: "User trained", meta: "UAT signed off" },
      { label: "Ownership transferred", meta: "Fix sticks" },
    ],
  },
];

const metrics = [
  { label: "Modules", value: "27" },
  { label: "Churn AUC", value: "0.86" },
  { label: "Records", value: "5K+" },
];

export function OpControlSystem() {
  const [activeIndex, setActiveIndex] = useState(2);
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
