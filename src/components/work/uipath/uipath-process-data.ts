/**
 * BPMN 2.0 process model for the Supplier Price & Availability Monitor.
 *
 * Decomposed into six collapsed sub-processes (Init → Load → Price →
 * Avail → Consolidate → Report). Each sub-process drills into its own
 * 2- or 3-lane swimlane; the flat flow that ran 50+ columns is folded
 * away behind the collapsed-subprocess marker so no single diagram
 * stays on screen for long.
 *
 * Lane keys are shared: AN = Procurement Analyst, WB = Web Browser,
 * XL = Excel System, EM = Email System. Each sub-process only names the
 * lanes it actually uses.
 *
 * Notation:
 *   • event with kind:"start"|"end" — thin-stroked circle
 *   • task — rounded rectangle
 *   • gateway — diamond
 * Tones: pain = manual bottleneck (AS-IS); auto = bot work (TO-BE);
 * good = automated output that reaches humans.
 */

import type {
  BpmnFlow,
  BpmnNode,
  BpmnTone,
  SubProcess,
} from "@/components/work/fiitco/process/process-data";

const AN = "Procurement Analyst";
const WB = "Web Browser";
const XL = "Excel System";
const EM = "Email System";

const start = (col: number, lane: number, label: string): BpmnNode => ({
  id: "s",
  type: "event",
  kind: "start",
  col,
  lane,
  label,
});
const end = (id: string, col: number, lane: number, label: string): BpmnNode => ({
  id,
  type: "event",
  kind: "end",
  col,
  lane,
  label,
});
const task = (
  id: string,
  col: number,
  lane: number,
  label: string,
  tone?: BpmnTone,
): BpmnNode => ({
  id,
  type: "task",
  col,
  lane,
  label,
  ...(tone ? { tone } : {}),
});
const gw = (id: string, col: number, lane: number, label: string): BpmnNode => ({
  id,
  type: "gateway",
  col,
  lane,
  label,
});
const f = (from: string, to: string, label?: string): BpmnFlow =>
  label ? { from, to, label } : { from, to };

export const SUBPROCS: SubProcess[] = [
  {
    key: "init",
    n: "S1",
    name: "Initialise sweep",
    desc: "Open the list and pick the first product URL.",
    asis: {
      caption:
        "Rachel opens the supplier workbook and copies the first product URL by hand.",
      lanes: [AN, XL],
      nodes: [
        start(0, 1, "08:00"),
        task("open", 1, 1, "Open supplier list", "pain"),
        task("url", 2, 1, "Copy product URL", "pain"),
        end("e", 3, 1, "URL ready"),
      ],
      flows: [f("s", "open"), f("open", "url"), f("url", "e")],
    },
    tobe: {
      caption:
        "Scheduler triggers the bot; it loads paths, reads the supplier list and picks up the first row with retry counter zeroed.",
      lanes: [AN, XL],
      nodes: [
        start(0, 0, "08:00 · Scheduler"),
        task("mon", 1, 0, "Monitor execution", "auto"),
        task("paths", 2, 1, "Load file paths", "auto"),
        task("read", 3, 1, "Open & read Supplier List", "auto"),
        task("row", 4, 1, "Read row · retry = 0", "auto"),
        end("e", 5, 1, "Row ready"),
      ],
      flows: [
        f("s", "mon"),
        f("mon", "paths"),
        f("paths", "read"),
        f("read", "row"),
        f("row", "e"),
      ],
    },
  },

  {
    key: "load",
    n: "S2",
    name: "Load product page",
    desc: "Launch, retry on failure, clear pop-ups.",
    asis: {
      caption:
        "Paste the URL and load the page. If it fails, retry up to three times, then clear the region and cookie pop-ups by hand before reading anything.",
      lanes: [AN, WB],
      nodes: [
        start(0, 1, "URL ready"),
        task("launch", 1, 1, "Launch browser", "pain"),
        task("load", 2, 1, "Paste URL · load page", "pain"),
        gw("gLoad", 3, 1, "Page loaded?"),
        task("retry", 3, 0, "Retry ≤ 3× · else skip", "pain"),
        gw("gRegion", 4, 1, "Region pop-up?"),
        task("region", 4, 0, "Close region pop-up", "pain"),
        gw("gCookie", 5, 1, "Cookie pop-up?"),
        task("cookie", 5, 0, "Accept cookies", "pain"),
        end("e", 6, 1, "Page ready"),
      ],
      flows: [
        f("s", "launch"),
        f("launch", "load"),
        f("load", "gLoad"),
        f("gLoad", "retry", "no"),
        f("gLoad", "gRegion", "yes"),
        f("retry", "gRegion"),
        f("gRegion", "region", "yes"),
        f("gRegion", "gCookie", "no"),
        f("region", "gCookie"),
        f("gCookie", "cookie", "yes"),
        f("gCookie", "e", "no"),
        f("cookie", "e"),
      ],
    },
    tobe: {
      caption:
        "Bot navigates, waits for load, retries up to three times, then auto-dismisses region and cookie pop-ups.",
      lanes: [AN, WB],
      nodes: [
        start(0, 1, "Row ready"),
        task("launch", 1, 1, "Launch browser · navigate", "auto"),
        task("wait", 2, 1, "Wait for page load", "auto"),
        gw("gLoad", 3, 1, "Page loaded?"),
        task("retry", 3, 0, "Retry ≤ 3× · else skip & log", "auto"),
        gw("gRegion", 4, 1, "Region pop-up?"),
        task("region", 4, 0, "Close region pop-up", "auto"),
        gw("gCookie", 5, 1, "Cookie pop-up?"),
        task("cookie", 5, 0, "Accept cookies", "auto"),
        end("e", 6, 1, "Page ready"),
      ],
      flows: [
        f("s", "launch"),
        f("launch", "wait"),
        f("wait", "gLoad"),
        f("gLoad", "retry", "no"),
        f("gLoad", "gRegion", "yes"),
        f("retry", "gRegion"),
        f("gRegion", "region", "yes"),
        f("gRegion", "gCookie", "no"),
        f("region", "gCookie"),
        f("gCookie", "cookie", "yes"),
        f("gCookie", "e", "no"),
        f("cookie", "e"),
      ],
    },
  },

  {
    key: "price",
    n: "S3",
    name: "Capture price",
    desc: "Record price, compute change, flag breaches.",
    asis: {
      caption:
        "Copy the product name and price into the log, compute the change against the last known price, and flag the row red when it moves 5% or more.",
      lanes: [WB, XL],
      nodes: [
        start(0, 0, "Page ready"),
        task("name", 1, 0, "Locate & copy product name", "pain"),
        task("log", 2, 1, "Record name in log (D3)", "pain"),
        task("supplier", 3, 1, "Log threshold · URL · last price", "pain"),
        task("price", 4, 0, "Highlight & copy price", "pain"),
        task("newp", 5, 1, "Record new price (H3)", "pain"),
        task("calc", 6, 1, "Enter formula (H3-F3)/F3", "pain"),
        gw("gThresh", 7, 1, "|Δ| ≥ 5%?"),
        task("red", 8, 1, "Highlight row red", "pain"),
        end("e", 9, 1, "Price captured"),
      ],
      flows: [
        f("s", "name"),
        f("name", "log"),
        f("log", "supplier"),
        f("supplier", "price"),
        f("price", "newp"),
        f("newp", "calc"),
        f("calc", "gThresh"),
        f("gThresh", "red", "yes"),
        f("gThresh", "e", "no"),
        f("red", "e"),
      ],
    },
    tobe: {
      caption:
        "Bot extracts the product name and price, writes both plus supplier fields to the log, computes the difference and conditional-formats the row when it breaches the threshold.",
      lanes: [WB, XL],
      nodes: [
        start(0, 0, "Page ready"),
        task("name", 1, 0, "Extract product name", "auto"),
        task("log", 2, 1, "Record name + supplier fields", "auto"),
        task("price", 3, 0, "Extract price", "auto"),
        task("newp", 4, 1, "Record new price", "auto"),
        task("calc", 5, 1, "Calculate price difference", "auto"),
        gw("gThresh", 6, 1, "|Δ| ≥ threshold?"),
        task("red", 7, 1, "Conditional-format row", "good"),
        end("e", 8, 1, "Price captured"),
      ],
      flows: [
        f("s", "name"),
        f("name", "log"),
        f("log", "price"),
        f("price", "newp"),
        f("newp", "calc"),
        f("calc", "gThresh"),
        f("gThresh", "red", "yes"),
        f("gThresh", "e", "no"),
        f("red", "e"),
      ],
    },
  },

  {
    key: "avail",
    n: "S4",
    name: "Capture availability",
    desc: "Stock status via text or add-to-cart check.",
    asis: {
      caption:
        "Read the availability text, use an add-to-cart click as the fallback, record stock status and stamp the time.",
      lanes: [WB, XL],
      nodes: [
        start(0, 0, "Price captured"),
        task("avail", 1, 0, "Copy availability text", "pain"),
        task("cart", 2, 0, "Click Add to Cart", "pain"),
        gw("gCart", 3, 0, "Cart accepted?"),
        task("inst", 4, 1, "Record In Stock", "pain"),
        task("oos", 4, 0, "Record Out of Stock", "pain"),
        task("time", 5, 1, "Record timestamp (A3)", "pain"),
        end("e", 6, 1, "Availability captured"),
      ],
      flows: [
        f("s", "avail"),
        f("avail", "cart"),
        f("cart", "gCart"),
        f("gCart", "inst", "yes"),
        f("gCart", "oos", "no"),
        f("inst", "time"),
        f("oos", "time"),
        f("time", "e"),
      ],
    },
    tobe: {
      caption:
        "Bot locates availability text with an add-to-cart fallback, records stock status, converts the price and stamps the time.",
      lanes: [WB, XL],
      nodes: [
        start(0, 0, "Price captured"),
        task("locate", 1, 0, "Locate availability text", "auto"),
        task("cart", 2, 0, "Add-to-cart check", "auto"),
        gw("gCart", 3, 0, "Cart accepted?"),
        task("inst", 4, 1, "Record In Stock", "auto"),
        task("unavail", 4, 0, "Record Unavailable", "auto"),
        task("time", 5, 1, "Convert price · timestamp", "auto"),
        end("e", 6, 1, "Availability captured"),
      ],
      flows: [
        f("s", "locate"),
        f("locate", "cart"),
        f("cart", "gCart"),
        f("gCart", "inst", "yes"),
        f("gCart", "unavail", "no"),
        f("inst", "time"),
        f("unavail", "time"),
        f("time", "e"),
      ],
    },
  },

  {
    key: "consol",
    n: "S5",
    name: "Consolidate alerts",
    desc: "Loop suppliers, filter, build the alert sheet.",
    asis: {
      caption:
        "Repeat for every supplier, then filter the workbook to the red rows and copy them into a dedicated alert sheet.",
      lanes: [AN, XL],
      nodes: [
        start(0, 1, "Availability captured"),
        gw("gMore", 1, 0, "More suppliers?"),
        task("repeat", 2, 0, "Repeat per supplier", "pain"),
        task("filter", 2, 1, "Filter · select red rows", "pain"),
        task("copy", 3, 1, "Copy highlighted rows", "pain"),
        task("alert", 4, 1, "Create & paste Alert Sheet", "pain"),
        end("e", 5, 1, "Alerts consolidated"),
      ],
      flows: [
        f("s", "gMore"),
        f("gMore", "repeat", "yes"),
        f("gMore", "filter", "no"),
        f("filter", "copy"),
        f("copy", "alert"),
        f("alert", "e"),
      ],
    },
    tobe: {
      caption:
        "Bot loops to the next row until every supplier is done, then filters to the red rows and pastes them into the Alert Sheet.",
      lanes: [AN, XL],
      nodes: [
        start(0, 1, "Availability captured"),
        gw("gMore", 1, 0, "More suppliers?"),
        task("next", 2, 0, "Next supplier row", "auto"),
        task("filter", 2, 1, "Select & copy red rows", "good"),
        task("paste", 3, 1, "Paste to Alert Sheet", "good"),
        end("e", 4, 1, "Alerts consolidated"),
      ],
      flows: [
        f("s", "gMore"),
        f("gMore", "next", "yes"),
        f("gMore", "filter", "no"),
        f("filter", "paste"),
        f("paste", "e"),
      ],
    },
  },

  {
    key: "report",
    n: "S6",
    name: "Report & notify",
    desc: "Summarise, save and email the manager.",
    asis: {
      caption:
        "Write the summary by hand, save the workbook, then attach it to an email and send it to the procurement manager.",
      lanes: [XL, EM],
      nodes: [
        start(0, 0, "Alerts consolidated"),
        task("summary", 1, 0, "Write summary report", "pain"),
        task("save", 2, 0, "Save workbook", "pain"),
        task("email", 3, 1, "Open email · paste · attach", "pain"),
        task("send", 4, 1, "Send to Procurement Manager", "pain"),
        end("e", 5, 1, "Report delivered"),
      ],
      flows: [
        f("s", "summary"),
        f("summary", "save"),
        f("save", "email"),
        f("email", "send"),
        f("send", "e"),
      ],
    },
    tobe: {
      caption:
        "Bot writes and saves the summary, surfaces the Alert Sheet for Rachel to review, then emails the report and workbook to the manager.",
      lanes: [AN, XL, EM],
      nodes: [
        start(0, 1, "Alerts consolidated"),
        task("summary", 1, 1, "Write summary · save · close", "auto"),
        task("review", 2, 0, "Analyst reviews alerts", "good"),
        task("email", 3, 2, "Email report + workbook", "auto"),
        end("e", 4, 2, "Report sent"),
      ],
      flows: [
        f("s", "summary"),
        f("summary", "review"),
        f("review", "email"),
        f("email", "e"),
      ],
    },
  },
];
