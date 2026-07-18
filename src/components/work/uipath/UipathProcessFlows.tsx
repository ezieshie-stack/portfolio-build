"use client";

import { useState } from "react";
import { DiagramShell } from "@/components/work/fiitco/diagrams/DiagramShell";
import { FlowCanvas } from "@/components/work/fiitco/diagrams/FlowCanvas";
import type { FlowConfig, Tone } from "@/components/work/fiitco/diagrams/types";

/**
 * UipathProcessFlows — AS-IS (manual) and TO-BE (automated) process
 * flows drawn as native FlowCanvas diagrams in the portfolio palette.
 * Nodes and lanes are lifted straight from the Manual and Automated
 * Process Walkthroughs; step times come from the same source so a
 * reader can see the routine collapse from ~60 minutes to under 10.
 */

const AS_IS: FlowConfig = {
  unit: { NW: 148, NH: 60, HG: 44, VG: 30 },
  legend: [
    ["authed", "Actor step"],
    ["good", "Manual action"],
    ["form", "Decision"],
    ["actor", "Handoff"],
  ] as [Tone, string][],
  groups: [
    {
      label: "Rachel Mensah · Purchasing Analyst · 60–90 min",
      members: ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10"],
    },
  ],
  nodes: [
    { id: "s1", c: 0, r: 0, label: "Open browser + Excel", tone: "authed", sub: "1 min" },
    { id: "s2", c: 1, r: 0, label: "Open Supplier_Price_Tracker.xlsx", tone: "good", sub: "1 min" },
    { id: "s3", c: 2, r: 0, label: "Open one tab per supplier", tone: "good", sub: "2–3 min" },
    { id: "s4", c: 3, r: 0, label: "Search each product page", tone: "good", sub: "5–10 min" },
    { id: "s5", c: 4, r: 0, label: "Read price + availability", tone: "form", sub: "5 min" },
    { id: "s6", c: 4, r: 1, label: "Copy price + stock into Excel", tone: "good", sub: "5–10 min" },
    { id: "s7", c: 3, r: 1, label: "Calculate % change manually", tone: "good", sub: "2–3 min" },
    { id: "s8", c: 2, r: 1, label: "Highlight >5% or availability flip", tone: "form", sub: "3–5 min" },
    { id: "s9", c: 1, r: 1, label: "Draft daily summary in Outlook", tone: "good", sub: "5–10 min" },
    { id: "s10", c: 0, r: 1, label: "Save + close · email sent", tone: "actor", sub: "1 min" },
  ],
  edges: [
    { from: "s1", to: "s2" },
    { from: "s2", to: "s3" },
    { from: "s3", to: "s4" },
    { from: "s4", to: "s5" },
    { from: "s5", to: "s6" },
    { from: "s6", to: "s7" },
    { from: "s7", to: "s8" },
    { from: "s8", to: "s9" },
    { from: "s9", to: "s10" },
  ],
};

const TO_BE: FlowConfig = {
  unit: { NW: 156, NH: 64, HG: 44, VG: 30 },
  legend: [
    ["authed", "Trigger / Actor"],
    ["db", "Data store"],
    ["good", "Bot action"],
    ["form", "Decision"],
    ["admin", "Loop"],
    ["actor", "Output"],
  ] as [Tone, string][],
  groups: [
    {
      label: "UiPath Bot · unattended · ~8 min",
      members: ["t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9", "t10", "t11"],
    },
    { label: "Rachel · ~5 min review", members: ["u1"] },
    { label: "Procurement team", members: ["u2"] },
  ],
  nodes: [
    { id: "t1", c: 0, r: 0, label: "Trigger at 08:00", tone: "authed", sub: "Task Scheduler" },
    { id: "t2", c: 1, r: 0, label: "Read Supplier_List.xlsx", tone: "db" },
    { id: "t3", c: 2, r: 0, label: "Open Edge · UiPath extension", tone: "good" },
    { id: "t4", c: 3, r: 0, label: "For each supplier item", tone: "admin", sub: "1–2 min / row" },
    { id: "t5", c: 4, r: 0, label: "Extract price + availability", tone: "good", sub: "selector or add-to-cart" },
    { id: "t6", c: 5, r: 0, label: "Normalize · look up baseline", tone: "good" },
    { id: "t7", c: 6, r: 0, label: "|ΔPct| ≥ 5% or stock flip?", tone: "form" },
    { id: "t8", c: 6, r: 1, label: "Append to Price Log · Data tab", tone: "db" },
    { id: "t9", c: 5, r: 1, label: "Refresh Alerts tab (breaches only)", tone: "actor" },
    { id: "t10", c: 4, r: 1, label: "Email summary + attachment", tone: "actor" },
    { id: "t11", c: 3, r: 1, label: "Write run.log", tone: "db", sub: "start · end · counts" },
    { id: "u1", c: 2, r: 1, label: "Rachel reviews Alerts tab", tone: "authed", sub: "08:15 · 5 min" },
    { id: "u2", c: 1, r: 1, label: "Procurement acts same-day", tone: "authed" },
  ],
  edges: [
    { from: "t1", to: "t2" },
    { from: "t2", to: "t3" },
    { from: "t3", to: "t4" },
    { from: "t4", to: "t5" },
    { from: "t5", to: "t6" },
    { from: "t6", to: "t7" },
    { from: "t7", to: "t8" },
    { from: "t8", to: "t9" },
    { from: "t9", to: "t10" },
    { from: "t10", to: "t11" },
    { from: "t11", to: "u1" },
    { from: "u1", to: "u2" },
    { from: "t7", to: "t4", label: "Next item", dashed: true },
  ],
};

type Mode = "as-is" | "to-be";

export function UipathProcessFlows() {
  const [mode, setMode] = useState<Mode>("to-be");
  const config = mode === "as-is" ? AS_IS : TO_BE;
  const title =
    mode === "as-is"
      ? "AS-IS · Manual routine, 60–90 minutes"
      : "TO-BE · Bot-driven routine, ~8 minutes unattended";

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

      <DiagramShell title={title} legend={config.legend} resetKey={mode}>
        <FlowCanvas config={config} />
      </DiagramShell>
    </div>
  );
}
