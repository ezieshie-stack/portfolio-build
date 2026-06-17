import type { ReactNode } from "react";

type Item = { label: string; icon: ReactNode };

/** Edge-masked horizontal marquee. Items are duplicated so the CSS
   translateX(-50%) loop is seamless. Hover pauses animation. */
export function Marquee({
  items,
  reverse,
  title,
}: {
  items: Item[];
  reverse?: boolean;
  title: string;
}) {
  const doubled = [...items, ...items];
  return (
    <section className="pf-marquee-section">
      <div className="pf-shell">
        <p
          className="pf-mono-h"
          style={{ textAlign: "center", marginBottom: 18 }}
        >
          {title}
        </p>
      </div>
      <div className="pf-marquee-wrap">
        <div className={`pf-marquee${reverse ? " rev" : ""}`}>
          {doubled.map((item, i) => (
            <div className="pf-toolcard" key={`${item.label}-${i}`}>
              <span className="pf-toolic" aria-hidden>
                {item.icon}
              </span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
