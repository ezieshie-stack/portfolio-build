"use client";

import { useEffect, useState } from "react";
import { DocReader, type Doc } from "@/components/work/fiitco/reader/DocReader";
import { parseMarkdown } from "@/components/work/fiitco/reader/parse-markdown";

/**
 * Client wrapper that fetches the fraud write-up markdown, promotes
 * ### section headings to ## so the scroll-spy TOC picks them up, and
 * attaches the `live` prop that renders the "Prefer the interactive
 * version?" CTA banner linking back to the scoring sandbox on the hub.
 */
export function FraudDocReaderClient() {
  const [doc, setDoc] = useState<Doc | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    fetch("/docs/fraud-writeup.md")
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.text();
      })
      .then((raw) => {
        if (!alive) return;
        const md = raw.split("### ").join("## ");
        const parsed = parseMarkdown(md, {
          title: "Catching Fraud Without Drowning the Analysts",
          metaLine: [
            ["Author", "David Ezieshi"],
            ["Length", "~950 words · 6 min read"],
            ["Repo", "github.com/ezieshie-stack/Fraud-Detection-SQL-Window-Functions"],
          ],
        });
        setDoc({
          id: "fraud-writeup",
          code: "Fraud Detection · Case study",
          title: parsed.title,
          meta: parsed.meta,
          blocks: parsed.blocks,
          live: {
            href: "/work/fraud-detection",
            label: "Open the scoring sandbox",
            blurb:
              "Prefer the interactive version? The **case-study hub** lets you toggle the rules and watch the score move.",
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
