const steps = [
  "User Registration",
  "Data & System Inputs",
  "Process & Workflow Design",
  "Implementation & Coordination",
  "Operational Outcomes",
  "Continuous Improvement",
];

export function WorkflowDiagram() {
  return (
    <section
      className="w-full"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "56px 0 72px",
      }}
    >
      <div className="max-w-[1240px] mx-auto px-6 lg:px-16 flex flex-col items-center">
        <p
          className="mb-8 text-center"
          style={{
            fontSize: "12px",
            letterSpacing: "0.42em",
            textTransform: "uppercase",
            color: "rgb(167, 139, 250)",
          }}
        >
          End-to-End Workflow
        </p>

        <div className="w-full max-w-[1120px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-7">
          {steps.map((step, index) => (
            <div
              key={step}
              className="rounded-[22px] border flex flex-col justify-center p-[22px] text-left relative"
              style={{
                minHeight: "132px",
                borderColor: "rgba(255,255,255,0.1)",
                background:
                  "linear-gradient(180deg, rgba(139,92,246,0.08), rgba(255,255,255,0.025))",
              }}
            >
              <div
                className="grid place-items-center"
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "10px",
                  background: "rgba(139,92,246,0.14)",
                  border: "1px solid rgba(139,92,246,0.35)",
                  color: "rgb(167, 139, 250)",
                  marginBottom: "14px",
                  fontSize: "12px",
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3
                style={{
                  fontSize: "15px",
                  lineHeight: 1.3,
                  color: "white",
                }}
              >
                {step}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
