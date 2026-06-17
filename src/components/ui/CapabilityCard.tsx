import type { ReactNode } from "react";

export function CapabilityCard({
  icon,
  label,
  className,
}: {
  icon: ReactNode;
  label: string;
  className?: string;
}) {
  return (
    <div className={`ds-capability ${className ?? ""}`.trim()}>
      <span className="ds-capability__ic" aria-hidden>
        {icon}
      </span>
      <span className="ds-capability__label">{label}</span>
    </div>
  );
}
