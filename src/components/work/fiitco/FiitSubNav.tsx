import Link from "next/link";
import {
  ChevronRight,
  ClipboardList,
  FileText,
  GitBranch,
  GitCompare,
  Network,
  Scale,
  Table2,
  Users,
  type LucideIcon,
} from "lucide-react";

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

type Tab = {
  key: FiitSubNavKey;
  href: string;
  icon: LucideIcon;
  label: string;
  idx: string;
};

const TABS: Tab[] = [
  { key: "process", href: "/work/fiitco/process", icon: GitCompare, label: "Process Models", idx: "A1" },
  { key: "data", href: "/work/fiitco/data", icon: Table2, label: "Data & Scope Model", idx: "A2" },
  { key: "rules", href: "/work/fiitco/rules", icon: Scale, label: "Business Rules", idx: "A3" },
  { key: "docs", href: "/work/fiitco/docs", icon: FileText, label: "Documents", idx: "A4" },
  { key: "stakeholder", href: "/work/fiitco/stakeholder", icon: Users, label: "Stakeholder & RACI", idx: "A5" },
  { key: "rtm", href: "/work/fiitco/rtm", icon: GitBranch, label: "Traceability", idx: "A6" },
  { key: "raid", href: "/work/fiitco/raid", icon: ClipboardList, label: "RAID Log", idx: "A7" },
  { key: "diagrams", href: "/work/fiitco/diagrams", icon: Network, label: "Diagrams", idx: "A8" },
];

export function FiitSubNav({ active }: { active: FiitSubNavKey }) {
  const current = TABS.find((t) => t.key === active);
  return (
    <>
      <div className="fx-crumbs">
        <Link href="/work">Work</Link>
        <ChevronRight size={13} aria-hidden />
        <Link href="/work/fiitco">FIIT Co.</Link>
        <ChevronRight size={13} aria-hidden />
        <span className="cur">{current?.label ?? ""}</span>
      </div>
      <div className="fx-tabs">
        {TABS.map((t) => {
          const Icon = t.icon;
          return (
            <Link
              key={t.key}
              href={t.href}
              className={"fx-tab" + (t.key === active ? " on" : "")}
            >
              <Icon size={17} aria-hidden />
              <span>{t.label}</span>
              <span className="fx-tab-idx">{t.idx}</span>
            </Link>
          );
        })}
      </div>
    </>
  );
}
