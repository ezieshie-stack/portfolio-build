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
  /** Column in the lg+ snake layout. 1-based. */
  col: 1 | 2 | 3 | 4;
  /** Row in the lg+ snake layout. 1-based. */
  row: 1 | 2;
};

const steps: Step[] = [
  { label: "Request Intake", icon: Inbox, next: "right", col: 1, row: 1 },
  { label: "Workflow Assignment", icon: Workflow, next: "right", col: 2, row: 1 },
  { label: "Data Validation", icon: ShieldCheck, next: "right", col: 3, row: 1 },
  { label: "Process Execution", icon: Cog, next: "down", col: 4, row: 1 },
  { label: "Performance Tracking", icon: Gauge, next: "left", col: 4, row: 2 },
  { label: "Operational Analytics", icon: BarChart3, next: "left", col: 3, row: 2 },
  { label: "Reporting & Insights", icon: FileText, next: "left", col: 2, row: 2 },
  { label: "Continuous Improvement", icon: RefreshCw, next: null, col: 1, row: 2 },
];

const colStartClass: Record<Step["col"], string> = {
  1: "lg:col-start-1",
  2: "lg:col-start-2",
  3: "lg:col-start-3",
  4: "lg:col-start-4",
};

const rowStartClass: Record<Step["row"], string> = {
  1: "lg:row-start-1",
  2: "lg:row-start-2",
};

function SnakeArrow({ direction }: { direction: Direction }) {
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
          End-to-End Workflow
        </p>

        <div
          className="relative grid grid-cols-1 lg:grid-cols-4"
          style={{ gap: "28px 32px" }}
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const stepNumber = idx + 1;
            const isLast = idx === steps.length - 1;
            return (
              <div
                key={step.label}
                className={`relative rounded-2xl border ${colStartClass[step.col]} ${rowStartClass[step.row]}`}
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
                    fontSize: "14px",
                    lineHeight: 1.35,
                    color: "white",
                    fontWeight: 500,
                  }}
                >
                  {step.label}
                </h3>

                {/* Snake-path arrows: laptop+ only */}
                <div className="hidden lg:block" aria-hidden>
                  <SnakeArrow direction={step.next} />
                </div>

                {/* Vertical-flow arrow: tablet & mobile, between consecutive cards */}
                {!isLast ? (
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
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
