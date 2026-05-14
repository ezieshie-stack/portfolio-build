import {
  ChevronDown,
  ChevronRight,
  Ear,
  Hammer,
  Map,
  Search,
  Send,
  type LucideIcon,
} from "lucide-react";

type Step = {
  label: string;
  body: string;
  icon: LucideIcon;
};

const steps: Step[] = [
  {
    label: "Listen",
    body: "Sit with stakeholders. Walk the current process. Note where they wince.",
    icon: Ear,
  },
  {
    label: "Map",
    body: "Draw the as-is state in BPMN. Swimlanes, gateways, handoffs.",
    icon: Map,
  },
  {
    label: "Diagnose",
    body: "Quantify the bottleneck. Time, cost, quality, or volume.",
    icon: Search,
  },
  {
    label: "Prototype",
    body: "Build the tool or workflow that fixes it. Internal-tools platforms, AI-accelerated.",
    icon: Hammer,
  },
  {
    label: "Hand Off",
    body: "Document the change. Train the user. Transition ownership.",
    icon: Send,
  },
];

export function WorkflowDiagramSection() {
  return (
    <section
      className="w-full section-spacing"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
        <p
          className="text-center mb-8"
          style={{
            fontSize: "12px",
            letterSpacing: "0.45em",
            textTransform: "uppercase",
            color: "rgb(167, 139, 250)",
          }}
        >
          Anatomy of an Engagement
        </p>

        <div
          className="relative grid grid-cols-1 lg:grid-cols-5"
          style={{ gap: "28px 24px" }}
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const stepNumber = idx + 1;
            const isLast = idx === steps.length - 1;
            return (
              <div
                key={step.label}
                className="relative rounded-2xl border"
                style={{
                  minHeight: "168px",
                  padding: "20px 22px",
                  background:
                    "linear-gradient(180deg, rgba(139,92,246,0.10), rgba(255,255,255,0.025))",
                  borderColor: "rgba(255,255,255,0.10)",
                  boxShadow: "0 0 40px rgba(139,92,246,0.08)",
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="inline-grid place-items-center shrink-0"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "var(--radius-sm)",
                      background: "rgba(139,92,246,0.16)",
                      border: "1px solid rgba(139,92,246,0.35)",
                      color: "rgb(167, 139, 250)",
                      fontSize: "11px",
                      fontWeight: 600,
                    }}
                  >
                    {String(stepNumber).padStart(2, "0")}
                  </span>
                  <Icon
                    size={16}
                    style={{ color: "rgba(167,139,250,0.85)" }}
                  />
                </div>
                <h3
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.3,
                    color: "white",
                    fontWeight: 600,
                    marginBottom: "8px",
                  }}
                >
                  {step.label}
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.5,
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  {step.body}
                </p>

                {!isLast ? (
                  <>
                    <ChevronRight
                      aria-hidden
                      size={20}
                      className="hidden lg:block"
                      style={{
                        position: "absolute",
                        right: "-18px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: "rgba(167,139,250,0.9)",
                        pointerEvents: "none",
                        filter: "drop-shadow(0 0 6px rgba(139,92,246,0.4))",
                      }}
                    />
                    <ChevronDown
                      aria-hidden
                      size={18}
                      className="lg:hidden"
                      style={{
                        position: "absolute",
                        left: "50%",
                        bottom: "-22px",
                        transform: "translateX(-50%)",
                        color: "rgba(167,139,250,0.9)",
                        pointerEvents: "none",
                        filter: "drop-shadow(0 0 6px rgba(139,92,246,0.4))",
                      }}
                    />
                  </>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
