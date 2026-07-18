"use client";

import { useEffect, useState } from "react";
import { DocReader, type Doc } from "@/components/work/fiitco/reader/DocReader";
import { parseMarkdown } from "@/components/work/fiitco/reader/parse-markdown";

/**
 * Client wrapper that fetches the SLA write-up, promotes ### section
 * headings to ## so the scroll-spy TOC picks them up, and attaches the
 * `live` prop that renders the "Prefer the interactive version?" CTA
 * banner linking back to the Triage Command Center on the hub.
 */
export function SlaDocReaderClient() {
  const [doc, setDoc] = useState<Doc | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    fetch("/docs/sla-writeup.md")
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.text();
      })
      .then((raw) => {
        if (!alive) return;
        let md = raw.split("### ").join("## ");
        // Strip the top-level # title — the reader supplies its own header.
        md = md.replace(/^#\s+.+\n?/, "");
        const parsed = parseMarkdown(md, {
          title: "Stopping SLA Breaches Before They Happen",
          metaLine: [
            ["Author", "David Ezieshi"],
            ["Length", "~1,300 words · 6 min read"],
            ["Repo", "github.com/ezieshie-stack/Customer-Support-SLA-Optimization-Project"],
          ],
        });
        setDoc({
          id: "sla-writeup",
          code: "SLA Optimization · Case study",
          title: parsed.title,
          meta: parsed.meta,
          blocks: parsed.blocks,
          live: {
            href: "/work/sla-optimization",
            label: "Open the Triage Command Center",
            blurb:
              "Prefer the interactive version? The **command center** lets you set capacity and watch the breach cost caught.",
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
