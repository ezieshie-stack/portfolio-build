import type { ReactNode } from "react";

export function MetricStat({
  value,
  label,
  icon,
  spark,
  className,
}: {
  value: ReactNode;
  label: string;
  icon?: ReactNode;
  spark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`ds-metricstat ${spark ? "ds-metricstat--spark" : ""} ${className ?? ""}`.trim()}
    >
      {icon && (
        <span className="ds-metricstat__ic" aria-hidden>
          {icon}
        </span>
      )}
      <span className="ds-metricstat__val">{value}</span>
      <span className="ds-metricstat__lab">{label}</span>
    </div>
  );
}
