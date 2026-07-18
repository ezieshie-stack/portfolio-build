"use client";

import { useEffect, useState } from "react";
import { DocReader, type Doc } from "@/components/work/fiitco/reader/DocReader";
import { parseMarkdown } from "@/components/work/fiitco/reader/parse-markdown";

/**
 * Client wrapper that fetches the telco write-up markdown, normalises it for
 * the DocReader scroll-spy TOC (### section headings get promoted to ## so
 * they appear in the TOC; the design-brief tail and the top-of-page H2
 * title are trimmed since the reader supplies its own header), and
 * attaches the `live` prop that renders the "Prefer the interactive
 * version?" CTA banner linking to the T3 model card.
 */
export function TelcoDocReaderClient() {
  const [doc, setDoc] = useState<Doc | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    fetch("/docs/telco-writeup.md")
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.text();
      })
      .then((raw) => {
        if (!alive) return;
        let md = raw.split("## For the T5")[0];
        md = md.replace("## Identifying the $1.7M Revenue Leak", "");
        md = md.split("### ").join("## ");
        // Strip the preamble (# T5 heading, bold meta lines, horizontal
        // rules) that sit before the first real section — the reader
        // provides its own header via metaLine + title.
        const firstH2 = md.search(/^##\s/m);
        if (firstH2 > 0) md = md.slice(firstH2);
        const parsed = parseMarkdown(md, {
          title: "Identifying the $1.7M Revenue Leak",
          metaLine: [
            ["Author", "David Ezieshi"],
            ["Length", "~1,500 words · 7 min read"],
            ["Repo", "github.com/ezieshie-stack/telco-churn-analysis"],
          ],
        });
        setDoc({
          id: "telco-writeup",
          code: "Telco Churn · Case study",
          title: parsed.title,
          meta: parsed.meta,
          blocks: parsed.blocks,
          live: {
            href: "/work/telco-churn/model",
            label: "View Model Card (T3)",
            blurb:
              "Prefer the interactive version? The **model card** has the live threshold and confusion matrix.",
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
