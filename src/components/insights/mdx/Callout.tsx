import type { ReactNode } from "react";

type CalloutType = "story" | "note" | "warning" | "key";

const STYLES: Record<CalloutType, { border: string; label: string }> = {
  story: { border: "rgba(167, 139, 250, 0.5)", label: "STORY" },
  note: { border: "rgba(148, 163, 184, 0.4)", label: "NOTE" },
  warning: { border: "rgba(251, 191, 36, 0.55)", label: "HEADS UP" },
  key: { border: "rgba(167, 139, 250, 0.7)", label: "KEY POINT" },
};

export function Callout({
  type = "note",
  children,
}: {
  type?: CalloutType;
  children: ReactNode;
}) {
  const style = STYLES[type];
  return (
    <aside
      className="my-8 rounded-lg border-l-2 bg-white/[0.02] px-5 py-4"
      style={{ borderColor: style.border }}
    >
      <span className="block text-[10px] tracking-[0.18em] font-bold text-[color:var(--text-dim)] mb-2">
        {style.label}
      </span>
      <div className="text-[15px] leading-relaxed">{children}</div>
    </aside>
  );
}
