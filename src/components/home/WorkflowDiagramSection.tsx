const workflowSteps = [
  "User Registration",
  "Workout Selection",
  "Payment Processing",
  "Plan Activation",
  "Progress Tracking",
  "Performance Analytics",
  "Reporting & Insights",
  "Continuous Improvement",
];

export function WorkflowDiagramSection() {
  return (
    <section
      className="w-full"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "64px 0 80px",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
        <p
          className="text-center mb-9"
          style={{
            fontSize: "12px",
            letterSpacing: "0.45em",
            textTransform: "uppercase",
            color: "rgb(167, 139, 250)",
          }}
        >
          End-to-End Workflow
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[22px]">
          {workflowSteps.map((step, index) => (
            <div
              key={step}
              className="rounded-[22px] border"
              style={{
                minHeight: "128px",
                padding: "22px",
                background:
                  "linear-gradient(180deg, rgba(139,92,246,0.10), rgba(255,255,255,0.025))",
                borderColor: "rgba(255,255,255,0.10)",
                boxShadow: "0 0 40px rgba(139,92,246,0.08)",
              }}
            >
              <span
                className="inline-grid place-items-center"
                style={{
                  width: "34px",
                  height: "34px",
                  marginBottom: "16px",
                  borderRadius: "10px",
                  background: "rgba(139,92,246,0.16)",
                  border: "1px solid rgba(139,92,246,0.35)",
                  color: "rgb(167, 139, 250)",
                  fontSize: "12px",
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
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
