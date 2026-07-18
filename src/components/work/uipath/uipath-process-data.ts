/**
 * BPMN 2.0 swimlane data for the Supplier Price & Availability Monitor.
 * Node labels and lane assignments follow the detailed Current-State
 * and Future-State process flows drawn on Canva (link on the project
 * page), so the site view matches the PDD one-to-one.
 *
 * Notation:
 *   • `event` with kind:"start"|"end" — thin-stroked circle
 *   • `task`  — rounded rectangle, the working step
 *   • `gateway` — diamond, decision point
 * Tones colour-code intent: pain (red) marks a manual bottleneck,
 * auto (violet) marks bot work, good (green) marks the success path,
 * normal (white) is neutral.
 */

import type { BpmnNode, BpmnFlow } from "@/components/work/fiitco/process/process-data";

export type UipathBpmnModel = {
  caption: string;
  lanes: string[];
  nodes: BpmnNode[];
  flows: BpmnFlow[];
};

/* ── AS-IS · Current State ────────────────────────────────────────
   Rachel drives the whole loop by hand across four systems: her own
   attention, Excel (workbook + Log Sheet), the browser, and Outlook.
   Every red task is a bottleneck the automation replaces.
*/
export const AS_IS: UipathBpmnModel = {
  caption:
    "60–90 minutes end-to-end for 15–50 items across 3–6 suppliers. Every task in Rachel's lane is a copy-paste; pop-ups and currency formats add friction; the summary email closes the loop at ~09:30.",
  lanes: [
    "Procurement Analyst",
    "Excel System",
    "Web Browser",
    "Email System",
  ],
  nodes: [
    { id: "s", type: "event", kind: "start", col: 0, lane: 0, label: "08:00" },
    { id: "e1", type: "task", col: 1, lane: 1, label: "Open Supplier List", tone: "pain" },
    { id: "a1", type: "task", col: 2, lane: 0, label: "Copy product URL", tone: "pain" },
    { id: "w1", type: "task", col: 3, lane: 2, label: "Launch browser", tone: "pain" },
    { id: "a2", type: "task", col: 4, lane: 0, label: "Paste URL · load page", tone: "pain" },
    { id: "g1", type: "gateway", col: 5, lane: 2, label: "Page loaded?" },
    { id: "w2", type: "task", col: 6, lane: 2, label: "Retry · reload", tone: "pain" },
    { id: "g2", type: "gateway", col: 7, lane: 2, label: "Region pop-up?" },
    { id: "w3", type: "task", col: 8, lane: 2, label: "Close region banner", tone: "pain" },
    { id: "g3", type: "gateway", col: 9, lane: 2, label: "Cookie pop-up?" },
    { id: "w4", type: "task", col: 10, lane: 2, label: "Accept cookies", tone: "pain" },
    { id: "a3", type: "task", col: 11, lane: 0, label: "Copy product name", tone: "pain" },
    { id: "e2", type: "task", col: 12, lane: 1, label: "Record name + supplier fields", tone: "pain" },
    { id: "a4", type: "task", col: 13, lane: 0, label: "Copy current price", tone: "pain" },
    { id: "e3", type: "task", col: 14, lane: 1, label: "Standardize + record price", tone: "pain" },
    { id: "e4", type: "task", col: 15, lane: 1, label: "Formula: (new−old)/old", tone: "pain" },
    { id: "g4", type: "gateway", col: 16, lane: 1, label: "|Δ| ≥ 5%?" },
    { id: "e5", type: "task", col: 17, lane: 1, label: "Highlight row red", tone: "pain" },
    { id: "g5", type: "gateway", col: 18, lane: 2, label: "Availability text found?" },
    { id: "w5", type: "task", col: 19, lane: 2, label: "Add-to-cart heuristic", tone: "pain" },
    { id: "g6", type: "gateway", col: 20, lane: 2, label: "Cart accepted?" },
    { id: "e6", type: "task", col: 21, lane: 1, label: "Record availability + timestamp", tone: "pain" },
    { id: "g7", type: "gateway", col: 22, lane: 0, label: "More suppliers?" },
    { id: "e7", type: "task", col: 23, lane: 1, label: "Filter + copy alert rows", tone: "pain" },
    { id: "e8", type: "task", col: 24, lane: 1, label: "Build Alerts Sheet", tone: "pain" },
    { id: "a5", type: "task", col: 25, lane: 0, label: "Write daily summary", tone: "pain" },
    { id: "m1", type: "task", col: 26, lane: 3, label: "Attach workbook · email procurement", tone: "pain" },
    { id: "e", type: "event", kind: "end", col: 27, lane: 0, label: "~09:30" },
  ],
  flows: [
    { from: "s", to: "e1" },
    { from: "e1", to: "a1" },
    { from: "a1", to: "w1" },
    { from: "w1", to: "a2" },
    { from: "a2", to: "g1" },
    { from: "g1", to: "w2", label: "no · retry" },
    { from: "w2", to: "a2" },
    { from: "g1", to: "g2", label: "yes" },
    { from: "g2", to: "w3", label: "yes" },
    { from: "g2", to: "g3", label: "no" },
    { from: "w3", to: "g3" },
    { from: "g3", to: "w4", label: "yes" },
    { from: "g3", to: "a3", label: "no" },
    { from: "w4", to: "a3" },
    { from: "a3", to: "e2" },
    { from: "e2", to: "a4" },
    { from: "a4", to: "e3" },
    { from: "e3", to: "e4" },
    { from: "e4", to: "g4" },
    { from: "g4", to: "e5", label: "yes" },
    { from: "g4", to: "g5", label: "no" },
    { from: "e5", to: "g5" },
    { from: "g5", to: "e6", label: "yes" },
    { from: "g5", to: "w5", label: "no" },
    { from: "w5", to: "g6" },
    { from: "g6", to: "e6" },
    { from: "e6", to: "g7" },
    { from: "g7", to: "a1", label: "next" },
    { from: "g7", to: "e7", label: "done" },
    { from: "e7", to: "e8" },
    { from: "e8", to: "a5" },
    { from: "a5", to: "m1" },
    { from: "m1", to: "e" },
  ],
};

/* ── TO-BE · Future State ─────────────────────────────────────────
   The bot owns the loop. Rachel enters only at the review step which
   lands ~08:15 with a ranked Alerts tab already prepared; procurement
   acts the same day. Retry-3 and add-to-cart fallback are drawn as
   real BPMN gateways, not comments.
*/
export const TO_BE: UipathBpmnModel = {
  caption:
    "Task Scheduler triggers the bot at 08:00. It reads the workbook, drives Chrome per supplier through pop-up handling, extracts price + availability with the add-to-cart fallback, applies the ±5% threshold, and writes the log + Alerts tab. Rachel reviews at 08:15; procurement acts by 09:00.",
  lanes: [
    "Procurement Analyst",
    "Excel System",
    "Web Browser",
    "Email System",
  ],
  nodes: [
    { id: "s", type: "event", kind: "start", col: 0, lane: 0, label: "08:00 · Task Scheduler" },
    { id: "e1", type: "task", col: 1, lane: 1, label: "Read Supplier List", tone: "auto" },
    { id: "b1", type: "task", col: 2, lane: 2, label: "Launch Chrome", tone: "auto" },
    { id: "b2", type: "task", col: 3, lane: 2, label: "Loop: for each supplier", tone: "auto" },
    { id: "b3", type: "task", col: 4, lane: 2, label: "Navigate to URL", tone: "auto" },
    { id: "g1", type: "gateway", col: 5, lane: 2, label: "Page loaded?" },
    { id: "b4", type: "task", col: 6, lane: 2, label: "Retry (≤3) · else skip", tone: "auto" },
    { id: "g2", type: "gateway", col: 7, lane: 2, label: "Region pop-up?" },
    { id: "b5", type: "task", col: 8, lane: 2, label: "Close region banner", tone: "auto" },
    { id: "g3", type: "gateway", col: 9, lane: 2, label: "Cookie pop-up?" },
    { id: "b6", type: "task", col: 10, lane: 2, label: "Accept cookies", tone: "auto" },
    { id: "b7", type: "task", col: 11, lane: 2, label: "Extract product name", tone: "auto" },
    { id: "b8", type: "task", col: 12, lane: 2, label: "Extract price + normalize", tone: "auto" },
    { id: "e2", type: "task", col: 13, lane: 1, label: "Compute ΔPct", tone: "auto" },
    { id: "g4", type: "gateway", col: 14, lane: 1, label: "|Δ| ≥ 5% or stock flip?" },
    { id: "e3", type: "task", col: 15, lane: 1, label: "Flag row for Alerts tab", tone: "good" },
    { id: "g5", type: "gateway", col: 16, lane: 2, label: "Availability found?" },
    { id: "b9", type: "task", col: 17, lane: 2, label: "Add-to-cart heuristic", tone: "auto" },
    { id: "g6", type: "gateway", col: 18, lane: 2, label: "Cart accepted?" },
    { id: "e4", type: "task", col: 19, lane: 1, label: "Record availability + timestamp", tone: "auto" },
    { id: "g7", type: "gateway", col: 20, lane: 2, label: "More suppliers?" },
    { id: "e5", type: "task", col: 21, lane: 1, label: "Refresh Alerts tab", tone: "good" },
    { id: "e6", type: "task", col: 22, lane: 1, label: "Save + close workbook", tone: "good" },
    { id: "m1", type: "task", col: 23, lane: 3, label: "Email summary + attachment", tone: "good" },
    { id: "u1", type: "task", col: 24, lane: 0, label: "Review Alerts tab (~08:15)", tone: "good" },
    { id: "u2", type: "task", col: 25, lane: 0, label: "Procurement acts same-day", tone: "good" },
    { id: "e", type: "event", kind: "end", col: 26, lane: 0, label: "~09:00" },
  ],
  flows: [
    { from: "s", to: "e1" },
    { from: "e1", to: "b1" },
    { from: "b1", to: "b2" },
    { from: "b2", to: "b3" },
    { from: "b3", to: "g1" },
    { from: "g1", to: "b4", label: "no" },
    { from: "b4", to: "b3", label: "retry" },
    { from: "g1", to: "g2", label: "yes" },
    { from: "g2", to: "b5", label: "yes" },
    { from: "g2", to: "g3", label: "no" },
    { from: "b5", to: "g3" },
    { from: "g3", to: "b6", label: "yes" },
    { from: "g3", to: "b7", label: "no" },
    { from: "b6", to: "b7" },
    { from: "b7", to: "b8" },
    { from: "b8", to: "e2" },
    { from: "e2", to: "g4" },
    { from: "g4", to: "e3", label: "yes" },
    { from: "g4", to: "g5", label: "no" },
    { from: "e3", to: "g5" },
    { from: "g5", to: "e4", label: "yes" },
    { from: "g5", to: "b9", label: "no" },
    { from: "b9", to: "g6" },
    { from: "g6", to: "e4" },
    { from: "e4", to: "g7" },
    { from: "g7", to: "b2", label: "next" },
    { from: "g7", to: "e5", label: "done" },
    { from: "e5", to: "e6" },
    { from: "e6", to: "m1" },
    { from: "m1", to: "u1" },
    { from: "u1", to: "u2" },
    { from: "u2", to: "e" },
  ],
};
