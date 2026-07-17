import type { DocBlock } from "./DocReader";

/**
 * Lightweight markdown parser for the FIIT docs. Understands the subset
 * the source markdown actually uses:
 * - YAML-ish front-matter (`--- key: value --- `)
 * - h2 / h3 headings
 * - paragraphs
 * - unordered lists (`- `) and ordered lists (`1. `)
 * - block quotes (`> `)
 * - horizontal rules (`---` or `***` on their own line, outside front-matter)
 * - GitHub-style pipe tables
 *
 * Inline formatting (bold / italic / code / links / artifact-links) is
 * carried through as raw markdown inside DocBlock `text`/`items`/`rows`,
 * and rendered by DocReader's `parseInline` helper.
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

export function parseMarkdown(md: string, opts?: { title?: string }): ParsedDoc {
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

  let para: string[] = [];
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

    // Headings
    const h2m = line.match(/^##\s+(.*)$/);
    if (h2m) {
      flushPara(para);
      blocks.push({ type: "h2", text: h2m[1].trim() });
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
      i += 2; // skip header + separator
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

  return {
    title: opts?.title || fmTitle || "Untitled",
    meta,
    blocks,
  };
}
