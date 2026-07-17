"use client";

import { useEffect, useState } from "react";
import {
  ClipboardList,
  Gauge,
  GitFork,
  ListChecks,
  Network,
  Table,
  Users,
  type LucideIcon,
} from "lucide-react";
import { DocReader, type Doc } from "@/components/work/fiitco/reader/DocReader";
import { parseMarkdown } from "@/components/work/fiitco/reader/parse-markdown";
import {
  DIAGRAM_MANIFEST,
  DIAGRAM_PHASE_ORDER,
} from "@/components/work/fiitco/reader/diagrams-manifest";

const ICON_MAP: Record<string, LucideIcon> = {
  network: Network,
  table: Table,
  "git-fork": GitFork,
  "list-checks": ListChecks,
  users: Users,
  gauge: Gauge,
};

type FetchState =
  | { kind: "loading" }
  | { kind: "ready"; doc: Doc }
  | { kind: "error"; message: string };

export function DiagramsPageClient() {
  const [activeId, setActiveId] = useState<string>(DIAGRAM_MANIFEST[0].id);
  const [state, setState] = useState<FetchState>({ kind: "loading" });

  useEffect(() => {
    const entry = DIAGRAM_MANIFEST.find((d) => d.id === activeId);
    if (!entry) return;
    let alive = true;
    setState({ kind: "loading" });
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    fetch(entry.file)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.text();
      })
      .then((md) => {
        if (!alive) return;
        // diagramKey routes DIAGRAM_REGISTRY[activeId] entries into the
        // parsed markdown at their `## Diagram N —` slots (or, if the
        // source has none, prepended at the top).
        const parsed = parseMarkdown(md, {
          title: entry.title,
          metaLine: entry.metaLine,
          diagramKey: activeId,
        });
        setState({
          kind: "ready",
          doc: {
            id: entry.id,
            code: entry.code,
            title: parsed.title,
            meta: parsed.meta,
            blocks: parsed.blocks,
            live: entry.live ?? undefined,
          },
        });
      })
      .catch((e: unknown) => {
        if (!alive) return;
        const message = e instanceof Error ? e.message : String(e);
        setState({ kind: "error", message });
      });
    return () => {
      alive = false;
    };
  }, [activeId]);

  const groups = DIAGRAM_PHASE_ORDER.map((phase) => ({
    name: phase,
    items: DIAGRAM_MANIFEST.filter((d) => d.group === phase),
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

      {state.kind === "loading" ? (
        <div className="dr-loading">Loading diagrams…</div>
      ) : state.kind === "error" ? (
        <div className="dr-loading">Could not load this diagram set ({state.message}).</div>
      ) : (
        <DocReader doc={state.doc} key={state.doc.id} />
      )}
    </>
  );
}
