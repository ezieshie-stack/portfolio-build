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
import { DiagramRenderer } from "./DiagramRenderer";
import { DIAGRAM_REGISTRY } from "./data";
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
  | { kind: "ready"; doc: Doc | null }
  | { kind: "error"; message: string };

export function DiagramsPageClient() {
  const [activeId, setActiveId] = useState<string>(DIAGRAM_MANIFEST[0].id);
  const [state, setState] = useState<FetchState>({ kind: "loading" });
  const entry = DIAGRAM_MANIFEST.find((d) => d.id === activeId);
  const diagrams = DIAGRAM_REGISTRY[activeId] ?? [];

  useEffect(() => {
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
        const parsed = parseMarkdown(md, {
          title: entry.title,
          metaLine: entry.metaLine,
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
  }, [activeId, entry]);

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

      {/* The actual interactive SVG diagrams for the selected key.
          One DiagramRenderer per entry in DIAGRAM_REGISTRY[activeId]. */}
      {diagrams.length > 0 && (
        <div style={{ display: "flex", flexDirection: "column", gap: 28, marginBottom: 32 }}>
          {diagrams.map((d, i) => (
            <DiagramRenderer entry={d} key={`${activeId}-${i}`} />
          ))}
        </div>
      )}

      {/* Below the diagrams: the narrative (talking points, decisions,
          failure modes, glossary) from the source markdown. */}
      {state.kind === "loading" ? (
        <div className="dr-loading">Loading diagrams…</div>
      ) : state.kind === "error" ? (
        <div className="dr-loading">Could not load this diagram set ({state.message}).</div>
      ) : state.doc ? (
        <DocReader doc={state.doc} key={state.doc.id} />
      ) : null}
    </>
  );
}
