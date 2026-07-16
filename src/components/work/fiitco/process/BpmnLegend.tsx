const BPMN_LEGEND: [string, string][] = [
  ["event", "Start / end event"],
  ["task", "Task"],
  ["gateway", "Gateway (decision)"],
  ["pain", "Manual / failure point"],
  ["auto", "Automated by system"],
];

export function BpmnLegend() {
  return (
    <div className="fx-legend">
      {BPMN_LEGEND.map(([kind, label]) => (
        <span className="fx-leg" key={label}>
          <svg className="fx-leg-mk" viewBox="0 0 26 18">
            {kind === "event" && (
              <>
                <circle
                  cx="8"
                  cy="9"
                  r="6"
                  fill="#7bc043"
                  stroke="#4e9226"
                  strokeWidth="1.5"
                />
                <circle
                  cx="19"
                  cy="9"
                  r="6"
                  fill="#e8663d"
                  stroke="#b0472a"
                  strokeWidth="1.8"
                />
              </>
            )}
            {kind === "task" && (
              <rect
                x="3"
                y="3"
                width="20"
                height="12"
                rx="3"
                fill="var(--surface)"
                stroke="var(--border-strong)"
                strokeWidth="1.5"
              />
            )}
            {kind === "gateway" && (
              <path
                d="M13 2 L21 9 L13 16 L5 9 Z"
                fill="var(--surface)"
                stroke="var(--accent)"
                strokeWidth="1.5"
              />
            )}
            {kind === "pain" && (
              <rect
                x="3"
                y="3"
                width="20"
                height="12"
                rx="3"
                fill="color-mix(in srgb, var(--error, #f2547d) 16%, var(--surface))"
                stroke="var(--error, #f2547d)"
                strokeWidth="1.5"
              />
            )}
            {kind === "auto" && (
              <rect
                x="3"
                y="3"
                width="20"
                height="12"
                rx="3"
                fill="var(--violet-fill)"
                stroke="var(--accent)"
                strokeWidth="1.5"
              />
            )}
          </svg>
          <b>{label}</b>
        </span>
      ))}
    </div>
  );
}
