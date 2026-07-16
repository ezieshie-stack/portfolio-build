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

const ORDERED_KEYS = ["charter", "exec", "brd", "closure"];
const PHASE_ORDER = ["Initiate", "Analyze", "Design", "Deliver", "Close"] as const;

export function DocsReaderClient() {
  const [activeId, setActiveId] = useState<string>(ORDERED_KEYS[0]);
  const active = DOCS_LIBRARY[activeId];

  const groups = PHASE_ORDER.map((phase) => ({
    name: phase,
    items: ORDERED_KEYS.map((k) => DOCS_LIBRARY[k]).filter((d) => d.group === phase),
  })).filter((g) => g.items.length > 0);

  return (
    <div className="dr-lib" style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 32, alignItems: "start" }}>
      <div className="dr-lib-sidebar">
        {groups.map((g) => (
          <div className="dr-lib-group" key={g.name}>
            <div className="dr-lib-phase">{g.name}</div>
            {g.items.map((d) => {
              const Ico = ICON_MAP[d.icon] || ClipboardList;
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
                    <span className="dr-lib-code">{d.code.split(" · ")[0]}</span>
                    <span className="dr-lib-name">{d.code.split(" · ")[1]}</span>
                  </span>
                </button>
              );
            })}
          </div>
        ))}
      </div>

      <DocReader doc={active.doc as Doc} />
    </div>
  );
}
