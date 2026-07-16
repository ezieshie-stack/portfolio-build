// Diagram engine — shared types
// Ported from deploy/portfolio/fiit-diagram-engine.jsx + fiit-diagram-data.jsx

export type Tone =
  | "actor" | "platform" | "pub" | "authed" | "admin" | "db" | "ext"
  | "web" | "auth" | "form" | "good" | "warn" | "abstract" | "neutral";

export const TONE_PALETTE: Record<Tone, [string, string]> = {
  actor: ["#eef3ff", "#6d8ad6"],
  platform: ["#fff5e0", "#e08a12"],
  pub: ["#d9f7e6", "#17a463"],
  authed: ["#fdefcb", "#e0a020"],
  admin: ["#fde0e0", "#dc4b4b"],
  db: ["#e2e7ff", "#5257d6"],
  ext: ["#f1f1f3", "#9299a6"],
  web: ["#d9f7e6", "#17a463"],
  auth: ["#f2e7ff", "#8a4fe0"],
  form: ["#fce3f0", "#e061a0"],
  good: ["#d9f7e6", "#17a463"],
  warn: ["#fde0e0", "#dc4b4b"],
  abstract: ["#f1f1f3", "#9299a6"],
  neutral: ["#eef1f8", "#b8c0d4"],
};

export type FlowNode = {
  id: string;
  c: number; // column
  r: number; // row
  label: string;
  tone?: Tone | null;
  sub?: string;
  cs?: number; // colspan
  rs?: number; // rowspan
  shape?: "circle" | "process" | "entity" | "store" | "pill";
  d?: number; // diameter for circle/process
  rows?: [string, string?][]; // for entity shape
  dom?: string; // domain for entity coloring
};

export type FlowEdge = {
  from: string;
  to: string;
  label?: string;
  dashed?: boolean;
};

export type FlowGroup =
  | { label: string; members: string[]; cols?: never; rows?: never }
  | { label: string; cols: [number, number]; rows: [number, number]; members?: never };

export type FlowConfig = {
  unit?: { NW?: number; NH?: number; HG?: number; VG?: number; pad?: number };
  legend?: [Tone, string][];
  groups?: FlowGroup[];
  nodes: FlowNode[];
  edges: FlowEdge[];
};

export type SeqActor = { id: string; label: string };
export type SeqMessage =
  | { kind?: "" | "return"; from: string; to: string; text: string }
  | { kind: "note"; from: string; text: string };

export type SeqConfig = {
  actors: SeqActor[];
  messages: SeqMessage[];
  step?: number;
  laneW?: number;
  legend?: [Tone, string][];
};

export type FishCategory = {
  label: string;
  tone: Tone;
  side: "top" | "bottom";
  causes: string[];
};

export type FishConfig = {
  w?: number;
  h?: number;
  problem: string;
  cats: FishCategory[];
  legend?: [Tone, string][];
};

export type DiagramEntry =
  | { kind: "flow"; title: string; config: FlowConfig }
  | { kind: "seq"; title: string; config: SeqConfig }
  | { kind: "fish"; title: string; config: FishConfig };

// Helpers matching the source engine's `N` and `E` shorthand
export const N = (
  id: string,
  c: number,
  r: number,
  label: string,
  tone: Tone | null,
  extra: Partial<FlowNode> = {}
): FlowNode => ({ id, c, r, label, tone, ...extra });

export const E = (from: string, to: string, label?: string, dashed?: boolean): FlowEdge => ({
  from, to, label, dashed,
});
