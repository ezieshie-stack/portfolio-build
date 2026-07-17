"use client";

import { useEffect, useState } from "react";
import { DocReader, type Doc } from "@/components/work/fiitco/reader/DocReader";
import { parseMarkdown } from "@/components/work/fiitco/reader/parse-markdown";

/**
 * Client wrapper that fetches the movie write-up markdown, promotes
 * ### section headings to ## so the scroll-spy TOC picks them up, and
 * attaches the `live` prop that renders the "Prefer the interactive
 * version?" CTA banner linking back to the hub funnel.
 */
export function MovieDocReaderClient() {
  const [doc, setDoc] = useState<Doc | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    fetch("/docs/movie-writeup.md")
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.text();
      })
      .then((raw) => {
        if (!alive) return;
        // ### → ## so section headings surface in the TOC.
        const md = raw.split("### ").join("## ");
        const parsed = parseMarkdown(md, {
          title: "Where Money Dies in the Movie Business",
          metaLine: [
            ["Author", "David Ezieshi"],
            ["Length", "~1,100 words · 7 min read"],
            ["Repo", "github.com/ezieshie-stack/movies-dataset"],
          ],
        });
        setDoc({
          id: "movie-writeup",
          code: "Movie Profitability · Case study",
          title: parsed.title,
          meta: parsed.meta,
          blocks: parsed.blocks,
          live: {
            href: "/work/movie-profitability",
            label: "Open the interactive funnel",
            blurb:
              "Prefer the interactive version? The **case-study hub** lets you click through the funnel stage by stage.",
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
