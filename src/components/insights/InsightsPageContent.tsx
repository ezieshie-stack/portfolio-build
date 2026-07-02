"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Feather,
  Quote,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Constellation } from "@/components/insights/Constellation";
import {
  FEATURED,
  PULLQUOTES,
  type Block,
  type Entry,
} from "@/data/insights-articles";

function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="pf-article-body">
      {blocks.map((b, i) => {
        if ("h" in b) return <h2 key={i}>{b.h}</h2>;
        if ("q" in b)
          return (
            <blockquote key={i} className="pf-article-q">
              {b.q}
            </blockquote>
          );
        if ("img" in b)
          return (
            <figure key={i} className="pf-article-fig">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={b.img} alt={b.cap ?? ""} loading="lazy" />
              {b.cap && <figcaption>{b.cap}</figcaption>}
            </figure>
          );
        if ("ul" in b)
          return (
            <ul key={i}>
              {b.ul.map((li, j) => (
                <li key={j}>{li}</li>
              ))}
            </ul>
          );
        return <p key={i}>{b.p}</p>;
      })}
    </div>
  );
}

function InsightReader({
  entry,
  onClose,
}: {
  entry: Entry;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      className="pf-reader"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={entry.title}
    >
      <div className="pf-reader-panel" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="pf-reader-close"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={20} aria-hidden />
        </button>
        <article className="pf-reader-inner">
          <button
            type="button"
            className="pf-reader-back"
            onClick={onClose}
          >
            <ArrowLeft size={14} aria-hidden /> All Insights
          </button>
          <p className="pf-reader-cat">{entry.tag}</p>
          <h1 className="pf-reader-title">{entry.title}</h1>
          {entry.sub && <p className="pf-reader-sub">{entry.sub}</p>}
          <div className="pf-reader-meta">
            <span>{entry.date}</span>
            <span aria-hidden>·</span>
            <span>{entry.read}</span>
          </div>
          <ArticleBody blocks={entry.body} />
          <div className="pf-reader-foot">
            <span>Written by David Ezieshi</span>
            <Button variant="secondary" size="sm" pill onClick={onClose}>
              Back to Insights
            </Button>
          </div>
        </article>
      </div>
    </div>
  );
}

export function InsightsPageContent() {
  const [open, setOpen] = useState<Entry | null>(null);
  const [q, setQ] = useState(0);

  return (
    <>
      <Constellation paused={open !== null} />
      <div className="pf-page">
        <div className="pf-shell">
          <section className="pf-pagehead" style={{ marginBottom: 40 }}>
            <Eyebrow className="mb-[22px]">The Notebook</Eyebrow>
            <h1 className="pf-page-title">
              A working journal, kept in the open.
            </h1>
            <p className="pf-page-intro">
              Some of this is about the work. A lot of it isn&rsquo;t. It&rsquo;s
              where I write down what I&rsquo;m figuring out, what a hard year
              taught me, and the things I want to remember. I write when
              something&rsquo;s worth keeping, so entries come when they come.
            </p>
          </section>

          <Card
            padding="0"
            glow
            className="pf-entry"
            style={{ marginBottom: 40, overflow: "hidden" }}
          >
            <div className="pf-entry-grid">
              <div className="pf-entry-copy">
                <div className="pf-entry-tags">
                  <Badge tone="spark" dot>
                    Latest entry
                  </Badge>
                  <span className="pf-entry-tag">{FEATURED.tag}</span>
                </div>
                <h2 className="pf-entry-title">{FEATURED.title}</h2>
                <p className="pf-entry-sub">{FEATURED.sub}</p>
                <div className="pf-entry-meta">
                  <span>{FEATURED.date}</span>
                  <span aria-hidden>·</span>
                  <span>{FEATURED.read}</span>
                </div>
                <Button
                  variant="primary"
                  iconRight={<ArrowUpRight size={16} aria-hidden />}
                  onClick={() => setOpen(FEATURED)}
                >
                  {FEATURED.cta}
                </Button>
              </div>
              <div
                className="pf-entry-quote"
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(5,5,9,0.82), rgba(5,5,9,0.35)), url(${FEATURED.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center 20%",
                }}
              >
                <Quote size={26} aria-hidden />
                <p className="pf-entry-q">{PULLQUOTES[q]}</p>
                <div className="pf-entry-dots">
                  {PULLQUOTES.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      className={`pf-entry-dot${i === q ? " on" : ""}`}
                      aria-label={`Quote ${i + 1}`}
                      onClick={() => setQ(i)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Card>

          <div className="pf-entry-note">
            <Feather size={16} aria-hidden />
            <span>
              One entry so far. This notebook is just getting started, more will
              land here as I write them.
            </span>
          </div>
        </div>
      </div>

      {open && <InsightReader entry={open} onClose={() => setOpen(null)} />}
    </>
  );
}
