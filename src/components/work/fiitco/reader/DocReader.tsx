"use client";

import { useEffect, useState, type ReactNode } from "react";
import { ArrowRight, MousePointerClick, Sparkles } from "lucide-react";
import { DiagramRenderer } from "@/components/work/fiitco/diagrams/DiagramRenderer";
import { DIAGRAM_REGISTRY } from "@/components/work/fiitco/diagrams/data";

function DiagramSlot({ registryKey, index }: { registryKey: string; index: number }) {
  const entries = DIAGRAM_REGISTRY[registryKey];
  const entry = entries?.[index];
  if (!entry) return null;
  return (
    <div style={{ margin: "18px 0 24px" }}>
      <DiagramRenderer entry={entry} />
    </div>
  );
}

/**
 * DocReader — long-form document reader with a scroll-spy TOC.
 * Ported from deploy/portfolio/fiit-reader.jsx.
 *
 * Simplified for Next.js SSR: markdown parsing is done once at build time
 * and passed in as `blocks`. Inline formatting: **bold**, *italic*, `code`,
 * and [[label|href]] for artifact links.
 */

export type DocBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] }
  | { type: "hr" }
  | { type: "code"; text: string }
  | { type: "table"; head: string[]; rows: string[][]; center?: boolean }
  /** Emitted by the diagrams parser after each `## Diagram N —` heading.
   *  DocReader renders it as a <DiagramRenderer> at that exact position. */
  | { type: "diagram"; registryKey: string; index: number };

export type Doc = {
  id: string;
  code: string;
  title: string;
  meta: [string, string][];
  blocks: DocBlock[];
  live?: { href: string; label: string; blurb: string };
};

const slug = (s: string) =>
  String(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

function parseInline(text: string, keyBase: string): ReactNode[] {
  if (typeof text !== "string") return [text];
  const out: ReactNode[] = [];
  const re = /\[\[([^\]|]+)\|([^\]]+)\]\]|\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*|`([^`]+)`|<br\s*\/?>/gi;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1] !== undefined) {
      const ext = /^https?:/.test(m[2]);
      out.push(
        <a
          key={`${keyBase}-${k}`}
          className="dr-xlink"
          href={m[2]}
          target={ext ? "_blank" : undefined}
          rel={ext ? "noopener noreferrer" : undefined}
        >
          {m[1]}
          <ArrowRight size={12} aria-hidden />
        </a>
      );
    } else if (m[3] !== undefined) {
      out.push(
        <a
          key={`${keyBase}-${k}`}
          href={m[4]}
          target="_blank"
          rel="noopener noreferrer"
        >
          {m[3]}
        </a>
      );
    } else if (m[5] !== undefined) {
      out.push(<b key={`${keyBase}-${k}`}>{m[5]}</b>);
    } else if (m[6] !== undefined) {
      out.push(<em key={`${keyBase}-${k}`}>{m[6]}</em>);
    } else if (m[7] !== undefined) {
      out.push(<code key={`${keyBase}-${k}`}>{m[7]}</code>);
    } else if (m[0].toLowerCase().startsWith("<br")) {
      out.push(<br key={`${keyBase}-${k}`} />);
    }
    k++;
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function Cell({ v, ki }: { v: string; ki: string }) {
  const t = typeof v === "string" ? v.trim() : v;
  if (t === "A/R") return <span className="dr-raci AR">A/R</span>;
  if (["R", "A", "C", "I"].includes(t)) return <span className={`dr-raci ${t}`}>{t}</span>;
  if (t === "–" || t === "-" || t === "—" || t === "") return <span className="dr-raci dash">–</span>;
  return <>{parseInline(v, ki)}</>;
}

function BlockNode({ b, idx }: { b: DocBlock; idx: number }) {
  switch (b.type) {
    case "h2":
      return <h2 className="dr-h2" id={slug(b.text)}>{b.text}</h2>;
    case "h3":
      return <h3 className="dr-h3">{parseInline(b.text, `h3${idx}`)}</h3>;
    case "p":
      return <p className="dr-p">{parseInline(b.text, `p${idx}`)}</p>;
    case "quote":
      return <blockquote className="dr-quote">{parseInline(b.text, `q${idx}`)}</blockquote>;
    case "list":
      return (
        <ul className="dr-ul">
          {b.items.map((it, i) => (
            <li className="dr-li" key={i}>
              {parseInline(it, `l${idx}-${i}`)}
            </li>
          ))}
        </ul>
      );
    case "hr":
      return <hr className="dr-hr" />;
    case "code":
      return <pre className="dr-ascii">{b.text}</pre>;
    case "diagram":
      return <DiagramSlot registryKey={b.registryKey} index={b.index} />;
    case "table":
      return (
        <div className="dr-twrap">
          <table className={`dr-table${b.center ? " center" : ""}`}>
            <thead>
              <tr>
                {b.head.map((h, i) => (
                  <th key={i}>{parseInline(h, `th${idx}-${i}`)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {b.rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((c, ci) =>
                    ci === 0 ? (
                      <th key={ci} scope="row">
                        {parseInline(c, `rt${idx}-${ri}`)}
                      </th>
                    ) : (
                      <td key={ci}>
                        <Cell v={c} ki={`c${idx}-${ri}-${ci}`} />
                      </td>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
}

export function DocReader({ doc }: { doc: Doc }) {
  const [active, setActive] = useState("");
  const toc = doc.blocks
    .filter((b): b is Extract<DocBlock, { type: "h2" }> => b.type === "h2")
    .map((b) => ({ id: slug(b.text), label: b.text }));

  useEffect(() => {
    if (!active) return;
    const el = document.querySelector<HTMLButtonElement>(
      `[data-toc-target="${active}"]`
    );
    if (el) el.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [active]);

  useEffect(() => {
    const heads = toc
      .map((t) => document.getElementById(t.id))
      .filter((el): el is HTMLElement => !!el);
    if (!heads.length) return;

    // Track the set of headings currently inside the "reading zone" (the
    // top slice of viewport defined by rootMargin). The observer only
    // reports state changes, so we accumulate; each tick we pick the
    // topmost element still in the zone as the active TOC item.
    const inZone = new Set<string>();
    const pickActive = () => {
      if (inZone.size > 0) {
        const topmost = heads
          .filter((h) => inZone.has(h.id))
          .sort(
            (a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top
          )[0];
        if (topmost) setActive(topmost.id);
        return;
      }
      // Nothing in the zone — highlight the last heading the reader
      // has scrolled past, so the trace still moves as they read
      // between headings.
      const above = heads
        .filter((h) => h.getBoundingClientRect().top < 80)
        .sort((a, b) => b.getBoundingClientRect().top - a.getBoundingClientRect().top);
      setActive(above[0]?.id ?? heads[0].id);
    };

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) inZone.add(e.target.id);
          else inZone.delete(e.target.id);
        });
        pickActive();
      },
      { rootMargin: "-80px 0px -68% 0px", threshold: 0 }
    );
    heads.forEach((h) => obs.observe(h));
    pickActive();
    return () => obs.disconnect();
  }, [doc.id, toc]);

  const jump = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="dr-wrap">
      <nav className="dr-toc" aria-label="Contents">
        <div className="dr-toc-h">On this page</div>
        {toc.map((t) => (
          <button
            key={t.id}
            type="button"
            data-toc-target={t.id}
            className={`dr-toc-item${active === t.id ? " on" : ""}`}
            onClick={() => jump(t.id)}
          >
            {t.label}
          </button>
        ))}
        {doc.live ? (
          <div className="dr-toc-progress">
            <a className="dr-toc-live" href={doc.live.href}>
              <MousePointerClick size={14} aria-hidden /> {doc.live.label}
            </a>
          </div>
        ) : null}
      </nav>

      <article className="dr-art">
        <header className="dr-doc-hd">
          <div className="dr-doc-code">
            <span>{doc.code}</span>
          </div>
          <h1 className="dr-doc-title">{doc.title}</h1>
          <div className="dr-doc-meta">
            {doc.meta.map(([k, v], i) => (
              <div key={i}>
                <b>{k}:</b> {v}
              </div>
            ))}
          </div>
          {doc.live ? (
            <div className="dr-livebar">
              <span className="dr-livebar-ic">
                <Sparkles size={20} aria-hidden />
              </span>
              <span className="dr-livebar-tx">
                {parseInline(doc.live.blurb, "lb")}
              </span>
              <a className="dr-livebar-go" href={doc.live.href}>
                {doc.live.label} <ArrowRight size={15} aria-hidden />
              </a>
            </div>
          ) : null}
        </header>
        {doc.blocks.map((b, i) => (
          <BlockNode b={b} idx={i} key={i} />
        ))}
      </article>
    </div>
  );
}
