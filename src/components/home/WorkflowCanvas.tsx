import {
  CheckCircle2,
  Database,
  GitBranch,
  Settings,
  Users,
  type LucideIcon,
} from "lucide-react";
import { home } from "@/lib/content";

const iconMap: Record<string, LucideIcon> = {
  Users,
  Database,
  Settings,
  CheckCircle2,
  GitBranch,
};

const cardPosition: Record<string, string> = {
  "top-left": "top-0 left-0",
  "top-right": "top-0 right-0",
  "bottom-left": "bottom-0 left-0",
  "bottom-right": "bottom-0 right-0",
};

const lineEnds: Record<
  string,
  { x1: number; y1: number; x2: number; y2: number }
> = {
  "top-left": { x1: 22, y1: 13, x2: 37, y2: 35 },
  "top-right": { x1: 78, y1: 13, x2: 63, y2: 35 },
  "bottom-left": { x1: 22, y1: 87, x2: 37, y2: 65 },
  "bottom-right": { x1: 78, y1: 87, x2: 63, y2: 65 },
};

export function WorkflowCanvas() {
  const { centerLabel, centerIcon, nodes } = home.diagram;
  const CenterIcon = iconMap[centerIcon];

  return (
    <div className="relative w-full aspect-square max-w-[440px] mx-auto">
      <svg
        aria-hidden
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {nodes.map((node) => {
          const ends = lineEnds[node.position];
          return (
            <line
              key={`line-${node.position}`}
              {...ends}
              stroke="rgba(139, 92, 246, 0.5)"
              strokeWidth="0.4"
              strokeDasharray="1.2 1.4"
              vectorEffect="non-scaling-stroke"
            />
          );
        })}
      </svg>

      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[44%] aspect-square rounded-2xl flex flex-col items-center justify-center text-center px-3 border"
        style={{
          background:
            "linear-gradient(160deg, rgba(139,92,246,0.22), rgba(20,20,30,0.92))",
          borderColor: "rgba(139, 92, 246, 0.45)",
          boxShadow:
            "0 0 50px rgba(139, 92, 246, 0.25), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        <CenterIcon className="text-[color:var(--primary)] mb-2" size={20} />
        <span className="text-[12px] font-semibold text-white leading-tight">
          {centerLabel}
        </span>
      </div>

      {nodes.map((node) => {
        const NodeIcon = iconMap[node.icon];
        return (
          <div
            key={node.label}
            className={`absolute ${cardPosition[node.position]} w-[44%] rounded-2xl px-3 py-2.5 text-[11px] leading-tight border`}
            style={{
              background: "rgba(13, 13, 13, 0.82)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              borderColor: "var(--glass-border)",
              boxShadow: "0 0 30px rgba(139, 92, 246, 0.08)",
            }}
          >
            <div className="flex items-center gap-2">
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border"
                style={{
                  borderColor: "rgba(139, 92, 246, 0.3)",
                  background: "rgba(139, 92, 246, 0.12)",
                }}
              >
                <NodeIcon
                  className="text-[color:var(--primary)]"
                  size={14}
                />
              </span>
              <span className="text-white font-medium">{node.label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
