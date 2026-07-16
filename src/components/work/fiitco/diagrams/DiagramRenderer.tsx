"use client";

import { DiagramShell } from "./DiagramShell";
import { FlowCanvas } from "./FlowCanvas";
import { SequenceDiagram } from "./SequenceDiagram";
import { FishboneDiagram } from "./FishboneDiagram";
import type { DiagramEntry } from "./types";

/**
 * DiagramRenderer — dispatches the right renderer for a diagram entry.
 * Ported from deploy/portfolio/fiit-diagram-engine.jsx (DiagramSlot fn).
 */
export function DiagramRenderer({ entry }: { entry: DiagramEntry }) {
  let inner;
  if (entry.kind === "seq") inner = <SequenceDiagram config={entry.config} />;
  else if (entry.kind === "fish") inner = <FishboneDiagram config={entry.config} />;
  else inner = <FlowCanvas config={entry.config} />;

  return (
    <DiagramShell title={entry.title} legend={entry.config.legend}>
      {inner}
    </DiagramShell>
  );
}
