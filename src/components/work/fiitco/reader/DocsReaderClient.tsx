"use client";

import { useState } from "react";
import {
  ClipboardList,
  Flag,
  FlagTriangleRight,
  Gauge,
  LayoutTemplate,
  ListChecks,
  Scale,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { DocReader, type Doc } from "./DocReader";
import { DOCS_LIBRARY } from "./docs-data";

const ICON_MAP: Record<string, LucideIcon> = {
  flag: Flag,
  gauge: Gauge,
  "clipboard-list": ClipboardList,
  users: Users,
  "layout-template": LayoutTemplate,
  "list-checks": ListChecks,
  "shield-check": ShieldCheck,
  scale: Scale,
  "flag-triangle-right": FlagTriangleRight,
};

// Reference DOC_LIB order (project-fiitco-docs.jsx). Preserved so the
// picker groups fill the phase columns in a predictable order.
const ORDERED_KEYS = [
  "charter",
  "exec",
  "brd",
  "personas",
  "pdd",
  "stories",
  "uat",
  "vendor",
  "closure",
];
const PHASE_ORDER = ["Initiate", "Analyze", "Design", "Deliver", "Close"] as const;

export function DocsReaderClient() {
  const [activeId, setActiveId] = useState<string>(ORDERED_KEYS[0]);
  const active = DOCS_LIBRARY[activeId];

  const groups = PHASE_ORDER.map((phase) => ({
    name: phase,
    items: ORDERED_KEYS.map((k) => DOCS_LIBRARY[k]).filter((d) => d.group === phase),
  })).filter((g) => g.items.length > 0);

  return (
    <>
      <div className="dr-lib">
        {groups.map((g) => (
          <div className="dr-lib-group" key={g.name}>
            <div className="dr-lib-phase">{g.name}</div>
            {g.items.map((d) => {
              const Ico = ICON_MAP[d.icon] || ClipboardList;
              const [code, name] = d.code.split(" · ");
              return (
                <button
                  type="button"
                  key={d.id}
                  className={`dr-lib-btn${activeId === d.id ? " on" : ""}`}
                  onClick={() => setActiveId(d.id)}
                >
                  <span className="dr-lib-ic">
                    <Ico size={16} aria-hidden />
                  </span>
                  <span className="dr-lib-tx">
                    <span className="dr-lib-code">{code}</span>
                    <span className="dr-lib-name">{name}</span>
                  </span>
                </button>
              );
            })}
          </div>
        ))}
      </div>

      <DocReader doc={active.doc as Doc} key={activeId} />
    </>
  );
}
