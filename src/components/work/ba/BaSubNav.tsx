import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export type BaSubNavKey = "hub" | "brd" | "process" | "bpmn" | "use-cases";

const TABS: { key: BaSubNavKey; label: string; href: string }[] = [
  { key: "brd", label: "B1 · BRD", href: "/work/ba-process-design/brd" },
  { key: "process", label: "B2 · Process Design", href: "/work/ba-process-design/process" },
  { key: "bpmn", label: "B3 · BPMN Flows", href: "/work/ba-process-design/bpmn" },
  { key: "use-cases", label: "B4 · Use Cases", href: "/work/ba-process-design/use-cases" },
];

export function BaSubNav({ active }: { active: BaSubNavKey }) {
  return (
    <div className="pj-subnav">
      <Link href="/work/ba-process-design" className="pj-back">
        <ArrowLeft size={14} aria-hidden /> Back to BA Portfolio hub
      </Link>
      <div className="pj-subnav-tabs">
        {TABS.map((t) => (
          <Link
            key={t.key}
            href={t.href}
            className={`pj-subnav-tab${active === t.key ? " on" : ""}`}
          >
            {t.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
