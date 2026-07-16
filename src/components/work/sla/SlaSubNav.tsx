import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export type SlaSubNavKey = "hub" | "diag" | "data" | "model" | "method" | "doc";

const TABS: { key: SlaSubNavKey; label: string; href: string }[] = [
  { key: "diag", label: "S1 · Diagnostics", href: "/work/sla-optimization/diagnostics" },
  { key: "data", label: "S2 · Data", href: "/work/sla-optimization/data" },
  { key: "model", label: "S3 · Model", href: "/work/sla-optimization/model" },
  { key: "method", label: "S4 · Method", href: "/work/sla-optimization/method" },
  { key: "doc", label: "S5 · Write-up", href: "/work/sla-optimization/doc" },
];

export function SlaSubNav({ active }: { active: SlaSubNavKey }) {
  return (
    <div className="pj-subnav">
      <Link href="/work/sla-optimization" className="pj-back">
        <ArrowLeft size={14} aria-hidden /> Back to SLA hub
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
