import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export type TelcoSubNavKey = "hub" | "sql" | "data" | "model" | "method" | "doc";

const TABS: { key: TelcoSubNavKey; label: string; href: string }[] = [
  { key: "sql", label: "T1 · SQL", href: "/work/telco-churn/sql" },
  { key: "data", label: "T2 · Data", href: "/work/telco-churn/data" },
  { key: "model", label: "T3 · Model", href: "/work/telco-churn/model" },
  { key: "method", label: "T4 · Method", href: "/work/telco-churn/method" },
  { key: "doc", label: "T5 · Write-up", href: "/work/telco-churn/doc" },
];

export function TelcoSubNav({ active }: { active: TelcoSubNavKey }) {
  return (
    <div className="pj-subnav">
      <Link href="/work/telco-churn" className="pj-back">
        <ArrowLeft size={14} aria-hidden /> Back to Telco Churn hub
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
