import {
  BarChart3,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Cog,
  FileText,
  Gauge,
  Inbox,
  RefreshCw,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";

type Direction = "right" | "down" | "left" | null;

type Step = {
  label: string;
  icon: LucideIcon;
  next: Direction;
};

const steps: Step[] = [
  { label: "Request Intake", icon: Inbox, next: "right" },
  { label: "Workflow Assignment", icon: Workflow, next: "right" },
  { label: "Data Validation", icon: ShieldCheck, next: "right" },
  { label: "Process Execution", icon: Cog, next: "down" },
  { label: "Performance Tracking", icon: Gauge, next: "left" },
  { label: "Operational Analytics", icon: BarChart3, next: "left" },
  { label: "Reporting & Insights", icon: FileText, next: "left" },
  { label: "Continuous Improvement", icon: RefreshCw, next: null },
];

// Visual order: row 1 = steps 1-4 left-to-right; row 2 = steps 8,7,6,5 left-to-right
const visualOrder = [...steps.slice(0, 4), ...steps.slice(4).reverse()];

function Arrow({ direction }: { direction: Direction }) {
  if (!direction) return null;

  const common = {
    position: "absolute" as const,
    color: "rgba(167,139,250,0.9)",
    pointerEvents: "none" as const,
    filter: "drop-shadow(0 0 6px rgba(139,92,246,0.4))",
  };

  if (direction === "right") {
    return (
      <ChevronRight
        size={20}
        style={{
          ...common,
          right: "-22px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />
    );
  }
  if (direction === "down") {
    return (
      <ChevronDown
        size={20}
        style={{
          ...common,
          right: "20px",
          bottom: "-22px",
        }}
      />
    );
  }
  return (
    <ChevronLeft
      size={20}
      style={{
        ...common,
        left: "-22px",
        top: "50%",
        transform: "translateY(-50%)",
      }}
    />
  );
}

export function WorkflowDiagramSection() {
  return (
    <section
      className="w-full"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "48px 0 52px",
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
          End-to-End Workflow
        </p>

        <div
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          style={{ gap: "28px 32px" }}
        >
          {visualOrder.map((step) => {
            const Icon = step.icon;
            const stepNumber = steps.indexOf(step) + 1;
            return (
              <div
                key={step.label}
                className="relative rounded-[20px] border"
                style={{
                  minHeight: "112px",
                  padding: "18px 20px",
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
                      borderRadius: "9px",
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
                    fontSize: "14px",
                    lineHeight: 1.35,
                    color: "white",
                    fontWeight: 500,
                  }}
                >
                  {step.label}
                </h3>

                <div className="hidden lg:block" aria-hidden>
                  <Arrow direction={step.next} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
