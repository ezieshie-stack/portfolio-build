import type { DocBlock } from "./DocReader";

/**
 * Lightweight markdown parser for the FIIT docs.
 *
 * Regular mode understands the subset the source markdown uses:
 * - YAML-ish front-matter (`--- key: value --- `)
 * - h2 / h3 headings
 * - paragraphs
 * - unordered lists (`- `) and ordered lists (`1. `)
 * - block quotes (`> `)
 * - horizontal rules (`---` or `***` on their own line, outside front-matter)
 * - GitHub-style pipe tables
 *
 * `pdftext` mode is the special path for the PDD file. That file is a
 * pdftotext extract wrapped in a triple-backtick code block. We strip
 * the fence + extract header lines and translate:
 *   `1. Title`           -> h2 "Title"
 *   `2.1 Sub`            -> h3 "Sub"
 *   `   •  item`         -> list item
 *   column rows          -> paragraph, columns joined by " — "
 * so it renders like normal editorial content.
 */

const stripCellFmt = (s: string) => s.replace(/^\s*\*\*\s*|\s*\*\*\s*$/g, "").trim();

const KEY_LABEL: Record<string, string> = {
  client: "Client",
  sponsor: "Sponsor",
  prepared_by: "Prepared by",
  development_partner: "Development partner",
  authors: "Authors",
  version: "Version",
  version_date: "Version",
  project: "Project",
  id: "ID",
  title: "Title",
  snapshot: "Snapshot",
  scope: "Scope",
  length: "Length",
  "sign-off": "Sign-off",
  author: "Author",
  source: "Source",
};

export type ParsedDoc = {
  title: string;
  meta: [string, string][];
  blocks: DocBlock[];
};

export type ParseOpts = {
  title?: string;
  pdftext?: boolean;
  metaLine?: [string, string][];
  /** When set, `## Diagram N — Title` headings in the source markdown
   *  emit a `{ type: "diagram", registryKey, index: N-1 }` block after
   *  the heading, so the reader inlines the SVG diagram in place. */
  diagramKey?: string;
};

// -----------------------------------------------------------------
// pdftotext helpers
// -----------------------------------------------------------------

// Split a fixed-width pdftotext row into columns wherever it hits
// 2+ consecutive spaces. Empty cells drop out.
function splitPdftextRow(line: string): string[] {
  return line
    .split(/\s{2,}/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function parsePdftextBody(body: string): DocBlock[] {
  const lines = body.split(/\r?\n/);
  const blocks: DocBlock[] = [];
  let listBuf: string[] = [];
  const flushList = () => {
    if (listBuf.length) {
      blocks.push({ type: "list", items: [...listBuf] });
      listBuf = [];
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const t = raw.trim();
    if (!t) {
      flushList();
      continue;
    }

    // "1. Section" -> h2 (top-level)
    let m = t.match(/^(\d+)\.\s+(.+)$/);
    if (m) {
      flushList();
      blocks.push({ type: "h2", text: m[2].trim() });
      continue;
    }

    // "2.1 Sub" -> h3
    m = t.match(/^(\d+\.\d+)\s+(.+)$/);
    if (m) {
      flushList();
      blocks.push({ type: "h3", text: m[2].trim() });
      continue;
    }

    // Bullet
    if (t.startsWith("•") || t.startsWith("·")) {
      listBuf.push(t.replace(/^[•·]\s*/, "").trim());
      continue;
    }

    // Fallback: treat as a paragraph, joining column-y rows with " — "
    flushList();
    const cols = splitPdftextRow(raw);
    const text = cols.length > 1 ? cols.join(" — ") : t;
    blocks.push({ type: "p", text });
  }
  flushList();
  return blocks;
}

// -----------------------------------------------------------------
// main parser
// -----------------------------------------------------------------

export function parseMarkdown(md: string, opts?: ParseOpts): ParsedDoc {
  // Regular markdown ----------------------------------------------
  if (!opts?.pdftext) {
    return parseStandard(md, opts);
  }

  // pdftext ------------------------------------------------------------
  // Pull out everything inside the triple-backtick block. Drop the
  // pdftotext preamble lines (title, subtitle, meta) — they came from
  // the PDF, we render our own from `opts.metaLine`. Then hand the
  // remainder to parsePdftextBody.
  const fence = md.match(/```[a-zA-Z]*\n([\s\S]*?)```/);
  const body = (fence ? fence[1] : md)
    .split(/\r?\n/)
    .filter((line, idx, arr) => {
      // Trim off the top block that pdftotext puts above section 1.
      // Everything before the first "1. " line is header noise.
      if (idx > 0 && /^\s*1\.\s+\S/.test(arr[idx])) return true;
      // Look ahead: if any earlier index already saw a `1.`, keep this line.
      for (let j = 0; j < idx; j++) {
        if (/^\s*1\.\s+\S/.test(arr[j])) return true;
      }
      // Otherwise this is preamble — drop it.
      return false;
    })
    .join("\n");

  return {
    title: opts.title || "Untitled",
    meta: opts.metaLine ?? [],
    blocks: parsePdftextBody(body),
  };
}

function parseStandard(md: string, opts?: ParseOpts): ParsedDoc {
  const lines = md.split(/\r?\n/);
  let i = 0;

  // Front-matter -----------------------------------------------------
  let fmTitle = "";
  const meta: [string, string][] = [];
  if (lines[0]?.trim() === "---") {
    i = 1;
    while (i < lines.length && lines[i].trim() !== "---") {
      const m = lines[i].match(/^([a-zA-Z_-]+)\s*:\s*(.*)$/);
      if (m) {
        const key = m[1].toLowerCase();
        const val = m[2].trim();
        if (key === "title") fmTitle = val;
        else if (key !== "id" && key !== "project" && KEY_LABEL[key]) {
          meta.push([KEY_LABEL[key], val]);
        }
      }
      i++;
    }
    i++; // skip closing ---
  }

  // Body -------------------------------------------------------------
  const blocks: DocBlock[] = [];
  const flushPara = (buf: string[]) => {
    if (!buf.length) return;
    const text = buf.join(" ").trim();
    if (text) blocks.push({ type: "p", text });
    buf.length = 0;
  };

  const para: string[] = [];
  while (i < lines.length) {
    const raw = lines[i];
    const line = raw.trimEnd();

    // Blank line -> paragraph break
    if (line.trim() === "") {
      flushPara(para);
      i++;
      continue;
    }

    // Horizontal rule
    if (/^\s*(---|\*\*\*|___)\s*$/.test(line)) {
      flushPara(para);
      blocks.push({ type: "hr" });
      i++;
      continue;
    }

    // Triple-backtick code fence — swallow the fenced block silently
    // for now (mermaid and other diagram syntaxes render as walls of
    // ASCII in a plain reader; we drop them and let the surrounding
    // talking-points paragraphs carry the meaning).
    if (/^```/.test(line.trim())) {
      flushPara(para);
      i++;
      while (i < lines.length && !/^```/.test(lines[i].trim())) i++;
      if (i < lines.length) i++; // consume closing fence
      continue;
    }

    // Headings
    const h2m = line.match(/^##\s+(.*)$/);
    if (h2m) {
      flushPara(para);
      const text = h2m[1].trim();
      blocks.push({ type: "h2", text });
      // Diagram slot injection — `## Diagram N — Title` inlines the
      // corresponding entry from DIAGRAM_REGISTRY[opts.diagramKey].
      if (opts?.diagramKey) {
        const dm = text.match(/^Diagram\s+(\d+)\b/i);
        if (dm) {
          blocks.push({
            type: "diagram",
            registryKey: opts.diagramKey,
            index: parseInt(dm[1], 10) - 1,
          });
        }
      }
      i++;
      continue;
    }
    const h3m = line.match(/^###\s+(.*)$/);
    if (h3m) {
      flushPara(para);
      blocks.push({ type: "h3", text: h3m[1].trim() });
      i++;
      continue;
    }

    // Blockquote
    if (line.startsWith(">")) {
      flushPara(para);
      const q: string[] = [line.replace(/^>\s?/, "")];
      i++;
      while (i < lines.length && lines[i].startsWith(">")) {
        q.push(lines[i].replace(/^>\s?/, ""));
        i++;
      }
      blocks.push({ type: "quote", text: q.join(" ").trim() });
      continue;
    }

    // Unordered / ordered list
    if (/^(-|\*|\+|\d+\.)\s+/.test(line)) {
      flushPara(para);
      const items: string[] = [];
      while (
        i < lines.length &&
        /^(-|\*|\+|\d+\.)\s+/.test(lines[i].trim())
      ) {
        items.push(lines[i].replace(/^(-|\*|\+|\d+\.)\s+/, "").trim());
        i++;
      }
      blocks.push({ type: "list", items });
      continue;
    }

    // Pipe table
    if (line.startsWith("|") && i + 1 < lines.length && /^\|[\s:|-]+\|\s*$/.test(lines[i + 1])) {
      flushPara(para);
      const head = line
        .replace(/^\||\|$/g, "")
        .split("|")
        .map((c) => stripCellFmt(c));
      i += 2;
      const rows: string[][] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        rows.push(
          lines[i].replace(/^\||\|$/g, "").split("|").map((c) => c.trim())
        );
        i++;
      }
      blocks.push({ type: "table", head, rows });
      continue;
    }

    // Default: collect into paragraph buffer
    para.push(line.trim());
    i++;
  }
  flushPara(para);

  // Fallback: if the caller asked for a diagramKey but the source
  // markdown didn't carry `## Diagram N —` markers, prepend every
  // diagram in the registry so the reader still shows the SVGs.
  const finalBlocks =
    opts?.diagramKey && !blocks.some((b) => b.type === "diagram")
      ? [
          ...enumerateDiagramSlots(opts.diagramKey),
          ...blocks,
        ]
      : blocks;

  return {
    title: opts?.title || fmTitle || "Untitled",
    meta,
    blocks: finalBlocks,
  };
}

// Injected at the top when the markdown has no explicit slots.
// Kept as its own helper so the parser doesn't need to import the
// registry directly — the caller can override this if needed.
function enumerateDiagramSlots(registryKey: string): DocBlock[] {
  // Match DIAGRAM_REGISTRY counts (arch:5, erd:2, dfd:2, fdd:1,
  // usecase:1, fishbone:1) via a static map so parse-markdown stays
  // pure and free of runtime data imports.
  const COUNTS: Record<string, number> = {
    arch: 5,
    erd: 2,
    dfd: 2,
    fdd: 1,
    usecase: 1,
    fishbone: 1,
  };
  const n = COUNTS[registryKey] ?? 1;
  return Array.from({ length: n }, (_, i) => ({
    type: "diagram" as const,
    registryKey,
    index: i,
  }));
}
