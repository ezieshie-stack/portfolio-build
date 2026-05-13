import {
  BarChart3,
  CheckCircle2,
  Database,
  GitBranch,
  Settings,
  Users,
  type LucideIcon,
} from "lucide-react";
import { home as homeDefault } from "@/lib/content";

const cardIcons: Record<string, LucideIcon> = {
  Users,
  Database,
  Settings,
  CheckCircle2,
  GitBranch,
  BarChart3,
};

type DiagramData = {
  centerLabel: string;
  centerIcon: string;
  nodes: ReadonlyArray<{
    label: string;
    position: string;
    icon: string;
  }>;
};

type MetricCardData = {
  label: string;
  value: string;
  sublabel: string;
};

function SystemCard({
  icon: Icon,
  label,
  highlight,
}: {
  icon: LucideIcon;
  label: string;
  highlight?: boolean;
}) {
  return (
    <div
      className="rounded-2xl border px-3.5 py-3"
      style={{
        background: highlight
          ? "linear-gradient(160deg, rgba(139,92,246,0.28), rgba(20,20,30,0.92))"
          : "rgba(13, 13, 13, 0.78)",
        borderColor: highlight
          ? "rgba(139, 92, 246, 0.55)"
          : "var(--glass-border)",
        backdropFilter: "blur(22px)",
        WebkitBackdropFilter: "blur(22px)",
        boxShadow: highlight
          ? "0 0 60px rgba(139, 92, 246, 0.35), inset 0 1px 0 rgba(255,255,255,0.08)"
          : "0 14px 36px rgba(0, 0, 0, 0.5), 0 0 30px rgba(139, 92, 246, 0.08)",
      }}
    >
      <div className="flex items-center gap-2.5">
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border"
          style={{
            borderColor: "rgba(139, 92, 246, 0.35)",
            background: "rgba(139, 92, 246, 0.16)",
          }}
        >
          <Icon className="text-[color:var(--primary)]" size={16} />
        </span>
        <span className="text-xs font-medium text-white leading-tight">
          {label}
        </span>
      </div>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex justify-center" aria-hidden>
      <div
        className="h-5 w-px"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(139,92,246,0.55) 50%, transparent 50%)",
          backgroundSize: "1px 6px",
        }}
      />
    </div>
  );
}

export function SystemCluster({
  diagram = homeDefault.diagram,
  metricCard = homeDefault.metricCard,
}: {
  diagram?: DiagramData;
  metricCard?: MetricCardData;
} = {}) {
  const { centerLabel, centerIcon, nodes } = diagram;
  const CenterIcon = cardIcons[centerIcon] ?? GitBranch;

  const stakeholders = nodes.find((n) => n.position === "top-left");
  const dataInputs = nodes.find((n) => n.position === "top-right");
  const outcomes = nodes.find((n) => n.position === "mid-right");
  const implementation = nodes.find((n) => n.position === "mid-bottom");

  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-2 gap-3">
        {stakeholders ? (
          <SystemCard
            icon={cardIcons[stakeholders.icon] ?? Users}
            label={stakeholders.label}
          />
        ) : null}
        {dataInputs ? (
          <SystemCard
            icon={cardIcons[dataInputs.icon] ?? Database}
            label={dataInputs.label}
          />
        ) : null}
      </div>

      <Connector />

      <SystemCard icon={CenterIcon} label={centerLabel} highlight />

      <Connector />

      <div className="grid grid-cols-2 gap-3">
        {outcomes ? (
          <SystemCard icon={cardIcons[outcomes.icon] ?? CheckCircle2} label={outcomes.label} />
        ) : null}
        {implementation ? (
          <SystemCard
            icon={cardIcons[implementation.icon] ?? Settings}
            label={implementation.label}
          />
        ) : null}
      </div>

      <Connector />

      <article
        className="rounded-2xl border px-5 py-4"
        style={{
          background: "rgba(13, 13, 13, 0.82)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderColor: "var(--glass-border)",
          boxShadow: "0 14px 36px rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--primary)] mb-2">
          {metricCard.label}
        </div>
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="gradient-text text-3xl font-extrabold tracking-tight">
              {metricCard.value}
            </div>
            <div className="text-xs text-[color:var(--text-dim)] mt-1">
              {metricCard.sublabel}
            </div>
          </div>
          <svg
            aria-hidden
            viewBox="0 0 80 30"
            className="h-9 w-24 shrink-0 opacity-90"
          >
            <polyline
              points="0,22 12,18 24,20 36,12 48,14 60,7 72,9 80,4"
              fill="none"
              stroke="rgb(139, 92, 246)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="80" cy="4" r="2" fill="rgb(139, 92, 246)" />
          </svg>
        </div>
      </article>
    </div>
  );
}
