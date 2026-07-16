import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export type FiitSubNavKey =
  | "hub"
  | "process"
  | "data"
  | "rules"
  | "docs"
  | "stakeholder"
  | "rtm"
  | "raid"
  | "diagrams";

const TABS: { key: FiitSubNavKey; label: string; href: string }[] = [
  { key: "process", label: "A1 · Process", href: "/work/fiitco/process" },
  { key: "data", label: "A2 · Data & Scope", href: "/work/fiitco/data" },
  { key: "rules", label: "A3 · Rules", href: "/work/fiitco/rules" },
  { key: "docs", label: "A4 · Documents", href: "/work/fiitco/docs" },
];

export function FiitSubNav({ active }: { active: FiitSubNavKey }) {
  return (
    <div className="pj-subnav">
      <Link href="/work/fiitco" className="pj-back">
        <ArrowLeft size={14} aria-hidden /> Back to FIIT Co. hub
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
