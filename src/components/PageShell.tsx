import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function PageShell({ children, className = "" }: Props) {
  return (
    <div
      className={`max-w-[var(--container)] mx-auto px-6 md:px-10 pt-32 pb-16 ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionTag({ children }: { children: ReactNode }) {
  return <span className="eyebrow mb-4">{children}</span>;
}
