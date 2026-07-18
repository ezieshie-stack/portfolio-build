/**
 * BPMN 2.0 swimlane data for the Supplier Price & Availability Monitor.
 *
 * Redrawn from the Canva source (5 screenshots supplied by the owner).
 * Lane order top-to-bottom matches the source:
 *   0  Email System
 *   1  Procurement Analyst
 *   2  Web Browser
 *   3  Excel System
 *
 * Every task's lane assignment mirrors the Canva page — the retry loop
 * (Increment / Reload / Retry<3 / Go-back / Skip) sits with Rachel in
 * Procurement, not in the browser lane; "Return to product page" and
 * "Proceed back to product page" are also Procurement tasks that
 * hand off back to the browser.
 *
 * Notation:
 *   • `event` with kind:"start"|"end" — thin-stroked circle
 *   • `task`  — rounded rectangle, the working step
 *   • `gateway` — diamond, decision point
 * Tones: pain (red) marks manual bottlenecks in AS-IS; auto (violet)
 * marks bot work in TO-BE; good (green) marks the automated outputs
 * that reach humans in TO-BE.
 */

import type { BpmnNode, BpmnFlow } from "@/components/work/fiitco/process/process-data";

export type UipathBpmnModel = {
  caption: string;
  lanes: string[];
  nodes: BpmnNode[];
  flows: BpmnFlow[];
};

const LANES = [
  "Email System",
  "Procurement Analyst",
  "Web Browser",
  "Excel System",
];

/* ── AS-IS · Current State ─────────────────────────────────────
   Rachel drives every task by hand. Retry sub-flow lives with her
   in the Procurement lane, pop-up cascade + availability check
   live in the browser lane, all recording sits in Excel, and the
   final summary email lives in Email System at the top.
*/
export const AS_IS: UipathBpmnModel = {
  caption:
    "60–90 minutes end to end for 15–50 items. Every retry is a manual page reload; every pop-up is a manual dismissal; the summary email is composed step by step in Outlook. Every red task is a bottleneck the automation replaces.",
  lanes: LANES,
  nodes: [
    { id: "s", type: "event", kind: "start", col: 0, lane: 1, label: "08:00" },
    { id: "t1", type: "task", col: 1, lane: 1, label: "Open Supplier List", tone: "pain" },
    { id: "t2", type: "task", col: 2, lane: 1, label: "Copy product URL", tone: "pain" },
    { id: "t3", type: "task", col: 3, lane: 2, label: "Launch web browser", tone: "pain" },
    { id: "t4", type: "task", col: 4, lane: 2, label: "Paste URL", tone: "pain" },
    { id: "t5", type: "task", col: 5, lane: 2, label: "Load web page", tone: "pain" },
    { id: "g1", type: "gateway", col: 6, lane: 2, label: "Page loaded?" },

    // retry sub-flow — Procurement lane
    { id: "t6", type: "task", col: 7, lane: 1, label: "Increment retry counter", tone: "pain" },
    { id: "t7", type: "task", col: 8, lane: 1, label: "Reload / refresh page", tone: "pain" },
    { id: "g2", type: "gateway", col: 9, lane: 1, label: "Retry < 3?" },
    { id: "t8", type: "task", col: 10, lane: 1, label: "Go back to Step 5", tone: "pain" },
    { id: "t9", type: "task", col: 11, lane: 1, label: "Skip supplier", tone: "pain" },

    // pop-up cascade — Web Browser lane
    { id: "t10", type: "task", col: 7, lane: 2, label: "Proceed to region pop-up checks", tone: "pain" },
    { id: "g3", type: "gateway", col: 8, lane: 2, label: "Region pop-up visible?" },
    { id: "t11", type: "task", col: 9, lane: 2, label: "Close region pop-up", tone: "pain" },
    { id: "t12", type: "task", col: 10, lane: 2, label: "Proceed to cookie pop-up checks", tone: "pain" },
    { id: "g4", type: "gateway", col: 11, lane: 2, label: "Cookie pop-up visible?" },
    { id: "t13", type: "task", col: 12, lane: 2, label: "Accept cookies", tone: "pain" },
    { id: "t14", type: "task", col: 13, lane: 2, label: "Locate product name", tone: "pain" },
    { id: "t15", type: "task", col: 14, lane: 2, label: "Copy product name", tone: "pain" },

    // Excel · record product name + supplier fields
    { id: "t16", type: "task", col: 15, lane: 3, label: "Open Log Sheet", tone: "pain" },
    { id: "t17", type: "task", col: 16, lane: 3, label: "Record product name (D3)", tone: "pain" },
    { id: "t18", type: "task", col: 17, lane: 3, label: "Open Supplier sheet", tone: "pain" },
    { id: "t19", type: "task", col: 18, lane: 3, label: "Select supplier + threshold + URL + last known price", tone: "pain" },
    { id: "t20", type: "task", col: 19, lane: 3, label: "Copy selected cells", tone: "pain" },
    { id: "t21", type: "task", col: 20, lane: 3, label: "Record data (B3, C3, F3, G3)", tone: "pain" },

    // price capture
    { id: "t22", type: "task", col: 21, lane: 1, label: "Return to product page", tone: "pain" },
    { id: "t23", type: "task", col: 22, lane: 2, label: "Highlight current price", tone: "pain" },
    { id: "t24", type: "task", col: 23, lane: 2, label: "Copy current price", tone: "pain" },
    { id: "t25", type: "task", col: 24, lane: 3, label: "Record as new price (H3)", tone: "pain" },
    { id: "t26", type: "task", col: 25, lane: 3, label: "Calculate price difference (I3)", tone: "pain" },
    { id: "t27", type: "task", col: 26, lane: 3, label: "Enter formula (H3-F3)/F3", tone: "pain" },
    { id: "g5", type: "gateway", col: 27, lane: 3, label: "|Δ| ≥ 5%?" },
    { id: "t28", type: "task", col: 28, lane: 3, label: "Highlight row red", tone: "pain" },

    // availability check
    { id: "t29", type: "task", col: 29, lane: 1, label: "Proceed back to product page", tone: "pain" },
    { id: "t30", type: "task", col: 30, lane: 2, label: "Browse for availability text", tone: "pain" },
    { id: "g6", type: "gateway", col: 31, lane: 2, label: "Availability text found?" },
    { id: "t31", type: "task", col: 32, lane: 2, label: "Copy availability text", tone: "pain" },
    { id: "t32", type: "task", col: 33, lane: 3, label: "Record availability text", tone: "pain" },
    { id: "t33", type: "task", col: 33, lane: 2, label: "Click Add to Cart", tone: "pain" },
    { id: "g7", type: "gateway", col: 34, lane: 2, label: "Cart accepted?" },
    { id: "t34", type: "task", col: 35, lane: 3, label: "Record In Stock", tone: "pain" },
    { id: "t35", type: "task", col: 36, lane: 3, label: "Record Out of Stock", tone: "pain" },

    // timestamp + supplier loop
    { id: "t36", type: "task", col: 37, lane: 1, label: "Note current time / date", tone: "pain" },
    { id: "t37", type: "task", col: 38, lane: 3, label: "Record timestamp (A3)", tone: "pain" },
    { id: "g8", type: "gateway", col: 39, lane: 1, label: "More suppliers?" },
    { id: "t38", type: "task", col: 40, lane: 1, label: "Filter workbook", tone: "pain" },

    // alert-sheet build (Excel)
    { id: "t39", type: "task", col: 41, lane: 3, label: "Select rows highlighted in red", tone: "pain" },
    { id: "t40", type: "task", col: 42, lane: 3, label: "Copy highlighted rows", tone: "pain" },
    { id: "t41", type: "task", col: 43, lane: 3, label: "Create Alert Sheet", tone: "pain" },
    { id: "t42", type: "task", col: 44, lane: 3, label: "Paste copied cells in Alert Sheet", tone: "pain" },

    // summary + save (Procurement)
    { id: "t43", type: "task", col: 45, lane: 1, label: "Write summary report", tone: "pain" },
    { id: "t44", type: "task", col: 46, lane: 1, label: "Save workbook", tone: "pain" },
    { id: "t45", type: "task", col: 47, lane: 1, label: "Copy summary report", tone: "pain" },

    // Email
    { id: "t46", type: "task", col: 48, lane: 0, label: "Open email platform", tone: "pain" },
    { id: "t47", type: "task", col: 49, lane: 0, label: "Paste into email", tone: "pain" },
    { id: "t48", type: "task", col: 50, lane: 0, label: "Attach workbook to email", tone: "pain" },
    { id: "t49", type: "task", col: 51, lane: 0, label: "Send to Procurement Manager", tone: "pain" },
    { id: "end", type: "event", kind: "end", col: 52, lane: 0, label: "~09:30" },
  ],
  flows: [
    { from: "s", to: "t1" },
    { from: "t1", to: "t2" },
    { from: "t2", to: "t3" },
    { from: "t3", to: "t4" },
    { from: "t4", to: "t5" },
    { from: "t5", to: "g1" },
    // retry sub-flow
    { from: "g1", to: "t6", label: "no" },
    { from: "t6", to: "t7" },
    { from: "t7", to: "g2" },
    { from: "g2", to: "t8", label: "yes" },
    { from: "t8", to: "t5" },
    { from: "g2", to: "t9", label: "no" },
    { from: "t9", to: "g8" },
    // pop-up cascade
    { from: "g1", to: "t10", label: "yes" },
    { from: "t10", to: "g3" },
    { from: "g3", to: "t11", label: "yes" },
    { from: "t11", to: "t12" },
    { from: "g3", to: "t12", label: "no" },
    { from: "t12", to: "g4" },
    { from: "g4", to: "t13", label: "yes" },
    { from: "t13", to: "t14" },
    { from: "g4", to: "t14", label: "no" },
    { from: "t14", to: "t15" },
    // excel record + supplier
    { from: "t15", to: "t16" },
    { from: "t16", to: "t17" },
    { from: "t17", to: "t18" },
    { from: "t18", to: "t19" },
    { from: "t19", to: "t20" },
    { from: "t20", to: "t21" },
    // price capture
    { from: "t21", to: "t22" },
    { from: "t22", to: "t23" },
    { from: "t23", to: "t24" },
    { from: "t24", to: "t25" },
    { from: "t25", to: "t26" },
    { from: "t26", to: "t27" },
    { from: "t27", to: "g5" },
    { from: "g5", to: "t28", label: "yes" },
    { from: "t28", to: "t29" },
    { from: "g5", to: "t29", label: "no" },
    // availability
    { from: "t29", to: "t30" },
    { from: "t30", to: "g6" },
    { from: "g6", to: "t31", label: "yes" },
    { from: "t31", to: "t32" },
    { from: "t32", to: "t36" },
    { from: "g6", to: "t33", label: "no" },
    { from: "t33", to: "g7" },
    { from: "g7", to: "t34", label: "yes" },
    { from: "t34", to: "t36" },
    { from: "g7", to: "t35", label: "no" },
    { from: "t35", to: "t36" },
    // timestamp + supplier loop
    { from: "t36", to: "t37" },
    { from: "t37", to: "g8" },
    { from: "g8", to: "t2", label: "yes · next" },
    { from: "g8", to: "t38", label: "no · done" },
    { from: "t38", to: "t39" },
    { from: "t39", to: "t40" },
    { from: "t40", to: "t41" },
    { from: "t41", to: "t42" },
    { from: "t42", to: "t43" },
    { from: "t43", to: "t44" },
    { from: "t44", to: "t45" },
    { from: "t45", to: "t46" },
    { from: "t46", to: "t47" },
    { from: "t47", to: "t48" },
    { from: "t48", to: "t49" },
    { from: "t49", to: "end" },
  ],
};

/* ── TO-BE · Future State ─────────────────────────────────────
   Bot lives in Procurement lane at trigger, walks the browser
   through the same gateways, writes into Excel via API. Rachel
   only enters at "Review Alerts tab".
*/
export const TO_BE: UipathBpmnModel = {
  caption:
    "Task Scheduler triggers the bot at 08:00. Same gateway structure as AS-IS — retry counter, pop-up cascade, add-to-cart fallback, threshold check, supplier loop — but every step is a bot action. Rachel enters at ~08:15 to review a ranked Alerts tab; procurement acts same-day.",
  lanes: LANES,
  nodes: [
    { id: "s", type: "event", kind: "start", col: 0, lane: 1, label: "08:00 · Scheduler" },
    { id: "b1", type: "task", col: 1, lane: 1, label: "Start automation", tone: "auto" },
    { id: "b2", type: "task", col: 2, lane: 1, label: "Monitor bot execution", tone: "auto" },
    { id: "b3", type: "task", col: 3, lane: 1, label: "Load file paths", tone: "auto" },

    // Excel · read supplier list
    { id: "e1", type: "task", col: 4, lane: 3, label: "Open Supplier List file", tone: "auto" },
    { id: "e2", type: "task", col: 5, lane: 3, label: "Read Supplier List sheet", tone: "auto" },

    // Procurement · supplier loop control
    { id: "b4", type: "task", col: 6, lane: 1, label: "Start supplier loop", tone: "auto" },
    { id: "e3", type: "task", col: 7, lane: 3, label: "Read supplier row", tone: "auto" },
    { id: "e4", type: "task", col: 8, lane: 3, label: "Extract supplier data", tone: "auto" },
    { id: "b5", type: "task", col: 9, lane: 1, label: "Set retry count = 0", tone: "auto" },
    { id: "b6", type: "task", col: 10, lane: 1, label: "Launch browser", tone: "auto" },

    // Web Browser · navigate + wait
    { id: "w1", type: "task", col: 11, lane: 2, label: "Navigate to URL", tone: "auto" },
    { id: "w2", type: "task", col: 12, lane: 2, label: "Wait for page load", tone: "auto" },
    { id: "g1", type: "gateway", col: 13, lane: 2, label: "Page loaded?" },

    // retry sub-flow (Procurement)
    { id: "b7", type: "task", col: 14, lane: 1, label: "Increment retry count", tone: "auto" },
    { id: "g2", type: "gateway", col: 15, lane: 1, label: "Retry < 3?" },
    { id: "b8", type: "task", col: 16, lane: 1, label: "Reload page", tone: "auto" },
    { id: "b9", type: "task", col: 17, lane: 1, label: "Log \"Page load fail\"", tone: "auto" },

    // pop-up cascade (Web Browser)
    { id: "g3", type: "gateway", col: 14, lane: 2, label: "Region pop-up visible?" },
    { id: "w3", type: "task", col: 15, lane: 2, label: "Close region pop-up", tone: "auto" },
    { id: "g4", type: "gateway", col: 16, lane: 2, label: "Cookie pop-up visible?" },
    { id: "w4", type: "task", col: 17, lane: 2, label: "Accept cookies", tone: "auto" },
    { id: "w5", type: "task", col: 18, lane: 2, label: "Locate + extract product name", tone: "auto" },

    // Excel · write name + fields
    { id: "e5", type: "task", col: 19, lane: 3, label: "Open Log Sheet · record name", tone: "auto" },
    { id: "e6", type: "task", col: 20, lane: 3, label: "Record supplier fields", tone: "auto" },

    // Price
    { id: "w6", type: "task", col: 21, lane: 2, label: "Locate + extract price", tone: "auto" },
    { id: "w7", type: "task", col: 22, lane: 2, label: "Convert price to numeric", tone: "auto" },
    { id: "e7", type: "task", col: 23, lane: 3, label: "Record new price", tone: "auto" },
    { id: "e8", type: "task", col: 24, lane: 3, label: "Compute + record ΔPct", tone: "auto" },
    { id: "g5", type: "gateway", col: 25, lane: 3, label: "|Δ| ≥ 5%?" },
    { id: "e9", type: "task", col: 26, lane: 3, label: "Apply conditional formatting", tone: "good" },

    // Availability
    { id: "w8", type: "task", col: 27, lane: 2, label: "Locate availability text", tone: "auto" },
    { id: "g6", type: "gateway", col: 28, lane: 2, label: "Availability text found?" },
    { id: "w9", type: "task", col: 29, lane: 2, label: "Extract availability", tone: "auto" },
    { id: "e10", type: "task", col: 30, lane: 3, label: "Record availability", tone: "auto" },
    { id: "w10", type: "task", col: 30, lane: 2, label: "Click Add to Cart", tone: "auto" },
    { id: "g7", type: "gateway", col: 31, lane: 2, label: "Cart accepted?" },
    { id: "e11", type: "task", col: 32, lane: 3, label: "Record In Stock", tone: "auto" },
    { id: "e12", type: "task", col: 33, lane: 3, label: "Record Unavailable", tone: "auto" },

    // Timestamp + loop
    { id: "b10", type: "task", col: 34, lane: 1, label: "Get + record timestamp", tone: "auto" },
    { id: "g8", type: "gateway", col: 35, lane: 1, label: "More suppliers?" },

    // Alert sheet
    { id: "e13", type: "task", col: 36, lane: 3, label: "Filter red rows · copy", tone: "good" },
    { id: "e14", type: "task", col: 37, lane: 3, label: "Paste into Alert Sheet", tone: "good" },
    { id: "e15", type: "task", col: 38, lane: 3, label: "Write summary · save + close", tone: "good" },
    { id: "b11", type: "task", col: 39, lane: 1, label: "Close browser", tone: "auto" },

    // Email
    { id: "m1", type: "task", col: 40, lane: 0, label: "Open email · paste summary", tone: "good" },
    { id: "m2", type: "task", col: 41, lane: 0, label: "Attach workbook · send", tone: "good" },

    // Human review
    { id: "u1", type: "task", col: 42, lane: 1, label: "Review Alerts tab (~08:15)", tone: "good" },
    { id: "u2", type: "task", col: 43, lane: 1, label: "Procurement acts same-day", tone: "good" },
    { id: "end", type: "event", kind: "end", col: 44, lane: 1, label: "~09:00" },
  ],
  flows: [
    { from: "s", to: "b1" },
    { from: "b1", to: "b2" },
    { from: "b2", to: "b3" },
    { from: "b3", to: "e1" },
    { from: "e1", to: "e2" },
    { from: "e2", to: "b4" },
    { from: "b4", to: "e3" },
    { from: "e3", to: "e4" },
    { from: "e4", to: "b5" },
    { from: "b5", to: "b6" },
    { from: "b6", to: "w1" },
    { from: "w1", to: "w2" },
    { from: "w2", to: "g1" },
    // retry sub-flow
    { from: "g1", to: "b7", label: "no" },
    { from: "b7", to: "g2" },
    { from: "g2", to: "b8", label: "yes" },
    { from: "b8", to: "w2" },
    { from: "g2", to: "b9", label: "no" },
    { from: "b9", to: "g8" },
    // pop-up cascade
    { from: "g1", to: "g3", label: "yes" },
    { from: "g3", to: "w3", label: "yes" },
    { from: "w3", to: "g4" },
    { from: "g3", to: "g4", label: "no" },
    { from: "g4", to: "w4", label: "yes" },
    { from: "w4", to: "w5" },
    { from: "g4", to: "w5", label: "no" },
    { from: "w5", to: "e5" },
    { from: "e5", to: "e6" },
    // price
    { from: "e6", to: "w6" },
    { from: "w6", to: "w7" },
    { from: "w7", to: "e7" },
    { from: "e7", to: "e8" },
    { from: "e8", to: "g5" },
    { from: "g5", to: "e9", label: "yes" },
    { from: "e9", to: "w8" },
    { from: "g5", to: "w8", label: "no" },
    // availability
    { from: "w8", to: "g6" },
    { from: "g6", to: "w9", label: "yes" },
    { from: "w9", to: "e10" },
    { from: "e10", to: "b10" },
    { from: "g6", to: "w10", label: "no" },
    { from: "w10", to: "g7" },
    { from: "g7", to: "e11", label: "yes" },
    { from: "e11", to: "b10" },
    { from: "g7", to: "e12", label: "no" },
    { from: "e12", to: "b10" },
    // supplier loop
    { from: "b10", to: "g8" },
    { from: "g8", to: "b4", label: "yes · next" },
    { from: "g8", to: "e13", label: "no · done" },
    { from: "e13", to: "e14" },
    { from: "e14", to: "e15" },
    { from: "e15", to: "b11" },
    { from: "b11", to: "m1" },
    { from: "m1", to: "m2" },
    { from: "m2", to: "u1" },
    { from: "u1", to: "u2" },
    { from: "u2", to: "end" },
  ],
};
