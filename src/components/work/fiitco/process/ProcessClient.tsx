"use client";

import { useState } from "react";
import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { DiagramShell } from "@/components/work/fiitco/diagrams/DiagramShell";
import { BpmnPool } from "./BpmnPool";
import { BpmnLegend } from "./BpmnLegend";
import { SUBPROCS } from "./process-data";

type Mode = "asis" | "tobe";

export function ProcessClient() {
  const [spIdx, setSpIdx] = useState(0);
  const [mode, setMode] = useState<Mode>("asis");
  const sp = SUBPROCS[spIdx];
  const model = sp[mode];
  const vpHeight = model.lanes.length * 112 + 76;

  return (
    <div className="fx-proc">
      <div className="fx-splist">
        {SUBPROCS.map((s, i) => (
          <button
            key={s.key}
            type="button"
            className={"fx-spcard" + (i === spIdx ? " on" : "")}
            onClick={() => setSpIdx(i)}
          >
            <div className="fx-spcard-top">
              <span className="fx-spcard-n">{s.n}</span>
            </div>
            <span className="fx-spcard-t">{s.name}</span>
            <span className="fx-spcard-d">{s.desc}</span>
          </button>
        ))}
      </div>

      <div>
        <div className="fx-proc-head">
          <div>
            <div className="fx-stage-title">{sp.name}</div>
            <div className="fx-stage-sub">{sp.n} · BPMN 2.0 swimlane</div>
          </div>
          <div className="fx-toggle">
            <button
              type="button"
              className={"fx-toggle-btn asis" + (mode === "asis" ? " on" : "")}
              onClick={() => setMode("asis")}
            >
              As-Is
            </button>
            <button
              type="button"
              className={"fx-toggle-btn tobe" + (mode === "tobe" ? " on" : "")}
              onClick={() => setMode("tobe")}
            >
              To-Be
            </button>
          </div>
        </div>

        <DiagramShell
          title={sp.name + " · " + (mode === "asis" ? "As-Is" : "To-Be")}
          viewportHeight={vpHeight}
          resetKey={`${sp.key}-${mode}`}
        >
          <div className="fx-bpmn">
            <BpmnPool lanes={model.lanes} nodes={model.nodes} flows={model.flows} />
          </div>
        </DiagramShell>

        <div className="fx-bpmn-cap" style={{ padding: "18px 2px 0" }}>
          <span className={"fx-verdict " + mode}>
            {mode === "asis" ? (
              <>
                <AlertTriangle size={14} aria-hidden /> Current state, manual and error-prone
              </>
            ) : (
              <>
                <CheckCircle2 size={14} aria-hidden /> Redesigned, one tool in real time
              </>
            )}
          </span>
          <p>{model.caption}</p>
        </div>

        <BpmnLegend />
      </div>
    </div>
  );
}
