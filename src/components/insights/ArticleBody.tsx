import type { Block } from "@/data/insights-articles";

/**
 * Renders an insight entry's body from the block format. Server-safe so
 * both the overlay reader (client) and the /insights/[slug] page (server)
 * can share it.
 *
 * Block types:
 *   { p: string }              paragraph
 *   { h: string }              subhead (h2)
 *   { q: string }              block quote (violet left border)
 *   { img, cap? }              full-width figure with mono caption
 *   { ul: string[] }           bullet list (violet dot markers)
 */
export function ArticleBody({ blocks }: { blocks: Block[] }) {
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
