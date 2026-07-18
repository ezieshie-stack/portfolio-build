import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export type FraudSubNavKey = "hub" | "sql" | "data" | "rules" | "method" | "doc";

const TABS: { key: FraudSubNavKey; label: string; href: string }[] = [
  { key: "sql", label: "F1 · SQL", href: "/work/fraud-detection/sql" },
  { key: "data", label: "F2 · Data", href: "/work/fraud-detection/data" },
  { key: "rules", label: "F3 · Rules", href: "/work/fraud-detection/rules" },
  { key: "method", label: "F4 · Method", href: "/work/fraud-detection/method" },
  { key: "doc", label: "F5 · Write-up", href: "/work/fraud-detection/doc" },
];

export function FraudSubNav({ active }: { active: FraudSubNavKey }) {
  return (
    <div className="pj-subnav">
      <Link href="/work/fraud-detection" className="pj-back">
        <ArrowLeft size={14} aria-hidden /> Back to Fraud Detection hub
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
