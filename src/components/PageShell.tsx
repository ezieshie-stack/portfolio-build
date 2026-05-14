import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function PageShell({ children, className = "" }: Props) {
  return (
    <div
      className={`max-w-[1600px] mx-auto px-6 md:px-8 lg:px-12 pt-12 pb-16 ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionTag({ children }: { children: ReactNode }) {
  return <span className="eyebrow mb-4">{children}</span>;
}
