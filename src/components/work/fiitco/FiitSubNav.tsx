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
  { key: "data", label: "A2 · Data", href: "/work/fiitco/data" },
  { key: "rules", label: "A3 · Rules", href: "/work/fiitco/rules" },
  { key: "docs", label: "A4 · Docs", href: "/work/fiitco/docs" },
  { key: "stakeholder", label: "A5 · Stakeholder", href: "/work/fiitco/stakeholder" },
  { key: "rtm", label: "A6 · RTM", href: "/work/fiitco/rtm" },
  { key: "raid", label: "A7 · RAID", href: "/work/fiitco/raid" },
  { key: "diagrams", label: "A8 · Diagrams", href: "/work/fiitco/diagrams" },
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
