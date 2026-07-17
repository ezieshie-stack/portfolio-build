"use client";

import { useEffect, useState } from "react";
import {
  ClipboardList,
  Flag,
  FlagTriangleRight,
  Gauge,
  GitFork,
  LayoutTemplate,
  ListChecks,
  Network,
  Scale,
  ShieldCheck,
  Table,
  Users,
  type LucideIcon,
} from "lucide-react";
import { DocReader, type Doc } from "./DocReader";
import { DOC_MANIFEST, type DocManifestEntry } from "./docs-manifest";
import { parseMarkdown } from "./parse-markdown";

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
  network: Network,
  table: Table,
  "git-fork": GitFork,
};

const DEFAULT_PHASE_ORDER = ["Initiate", "Analyze", "Design", "Deliver", "Close"];

type FetchState =
  | { kind: "loading" }
  | { kind: "ready"; doc: Doc }
  | { kind: "error"; message: string };

export function DocsReaderClient({
  manifest = DOC_MANIFEST,
  phaseOrder = DEFAULT_PHASE_ORDER,
  loadingLabel = "Loading document…",
  errorLabel = "Could not load this document",
}: {
  manifest?: DocManifestEntry[];
  phaseOrder?: readonly string[];
  loadingLabel?: string;
  errorLabel?: string;
} = {}) {
  const [activeId, setActiveId] = useState<string>(manifest[0].id);
  const [state, setState] = useState<FetchState>({ kind: "loading" });

  useEffect(() => {
    const entry = manifest.find((d) => d.id === activeId);
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
          pdftext: entry.pdftext,
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
  }, [activeId, manifest]);

  const groups = phaseOrder.map((phase) => ({
    name: phase,
    items: manifest.filter((d) => d.group === phase),
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
        <div className="dr-loading">{loadingLabel}</div>
      ) : state.kind === "error" ? (
        <div className="dr-loading">{errorLabel} ({state.message}).</div>
      ) : (
        <DocReader doc={state.doc} key={state.doc.id} />
      )}
    </>
  );
}
