"use client";

import { useEffect, useState } from "react";
import { DocReader, type Doc } from "@/components/work/fiitco/reader/DocReader";
import { parseMarkdown } from "@/components/work/fiitco/reader/parse-markdown";

/**
 * Client wrapper that fetches the UiPath write-up markdown, promotes
 * ### section headings to ## so the scroll-spy TOC picks them up, and
 * attaches the `live` prop that renders the "Prefer the interactive
 * version?" CTA banner linking back to the replay at the top of the
 * page.
 */
export function UipathDocReaderClient() {
  const [doc, setDoc] = useState<Doc | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    fetch("/docs/uipath-writeup.md")
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.text();
      })
      .then((raw) => {
        if (!alive) return;
        let md = raw.split("### ").join("## ");
        // Strip the top-level # title so the reader's own header wins.
        md = md.replace(/^#\s+.+\n?/, "");
        const parsed = parseMarkdown(md, {
          title: "Automating the morning price check",
          metaLine: [
            ["Author", "David Ezieshi"],
            ["Length", "~1,500 words · 7 min read"],
            ["Repo", "github.com/ezieshie-stack/UiPath-Automation-Project"],
          ],
        });
        setDoc({
          id: "uipath-writeup",
          code: "UiPath Automation · Case study",
          title: parsed.title,
          meta: parsed.meta,
          blocks: parsed.blocks,
          live: {
            href: "#replay",
            label: "Watch the replay",
            blurb:
              "Prefer the interactive version? The **replay** streams the run's log and populates the workbook row by row.",
          },
        });
      })
      .catch((e: unknown) => {
        if (!alive) return;
        setErr(e instanceof Error ? e.message : String(e));
      });
    return () => {
      alive = false;
    };
  }, []);

  if (err) return <div className="dr-loading">Could not load the write-up ({err}).</div>;
  if (!doc) return <div className="dr-loading">Loading…</div>;
  return <DocReader doc={doc} />;
}
