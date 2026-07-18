"use client";

import { useState } from "react";
import { DiagramShell } from "@/components/work/fiitco/diagrams/DiagramShell";
import { BpmnPool } from "@/components/work/fiitco/process/BpmnPool";
import { BpmnLegend } from "@/components/work/fiitco/process/BpmnLegend";
import { AS_IS, TO_BE } from "./uipath-process-data";

type Mode = "as-is" | "to-be";

export function UipathProcessFlows() {
  const [mode, setMode] = useState<Mode>("to-be");
  const model = mode === "as-is" ? AS_IS : TO_BE;
  const title =
    mode === "as-is"
      ? "AS-IS · Current State · Manual routine (60–90 min)"
      : "TO-BE · Future State · UiPath bot (~8 min unattended)";

  return (
    <div className="up-proc">
      <div
        className="up-proc-toggle"
        role="radiogroup"
        aria-label="Process view"
      >
        <button
          type="button"
          role="radio"
          aria-checked={mode === "as-is"}
          className={`up-proc-btn${mode === "as-is" ? " on" : ""}`}
          onClick={() => setMode("as-is")}
        >
          AS-IS · Manual
        </button>
        <button
          type="button"
          role="radio"
          aria-checked={mode === "to-be"}
          className={`up-proc-btn${mode === "to-be" ? " on" : ""}`}
          onClick={() => setMode("to-be")}
        >
          TO-BE · Automated
        </button>
      </div>

      <DiagramShell title={title} resetKey={mode}>
        <BpmnPool lanes={model.lanes} nodes={model.nodes} flows={model.flows} />
      </DiagramShell>

      <BpmnLegend />

      <p className="up-proc-cap">{model.caption}</p>
    </div>
  );
}
