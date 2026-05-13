"use client";

import { useState } from "react";

type Card = { cat: string; title: string };
type Category = {
  name: string;
  featured: {
    title: string;
    body: string;
    pills: string[];
    date: string;
  };
  cards: Card[];
};

const categories: Category[] = [
  {
    name: "Process",
    featured: {
      title:
        "Operational systems are only valuable when people can actually use them.",
      body: "Good systems reduce friction, clarify ownership, and improve visibility, so teams make better decisions faster.",
      pills: ["Process", "Systems", "Analytics"],
      date: "5 min read",
    },
    cards: [
      {
        cat: "PROCESS DESIGN",
        title: "Why operational clarity starts with better workflows",
      },
      {
        cat: "ANALYTICS",
        title: "Dashboards are only useful when they support decisions",
      },
    ],
  },
  {
    name: "Systems",
    featured: {
      title:
        "Systems aren't built once. They're maintained as living infrastructure.",
      body: "Governance, documentation, and feedback loops keep systems healthy long after launch.",
      pills: ["Systems", "Governance", "Process"],
      date: "6 min read",
    },
    cards: [
      {
        cat: "PLATFORM ADMIN",
        title: "What good platform administration actually looks like",
      },
      {
        cat: "GOVERNANCE",
        title: "Documentation as a system, not an afterthought",
      },
    ],
  },
  {
    name: "Analytics",
    featured: {
      title:
        "Reporting isn't the end of the system. It's the steering wheel.",
      body: "Insight without action is just noise. Reporting should drive operating cadence, not just visualization.",
      pills: ["Analytics", "Reporting", "Metrics"],
      date: "4 min read",
    },
    cards: [
      {
        cat: "REPORTING",
        title: "Why dashboards fail without an operating rhythm",
      },
      {
        cat: "METRICS",
        title: "Picking metrics that change behavior, not just charts",
      },
    ],
  },
];

export function InsightLibrary() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = categories[activeIndex];

  return (
    <div className="insightLibrary">
      <header className="libHead">
        <span className="libEyebrow">INSIGHT LIBRARY</span>
        <span className="libCount">{categories.length * 4} articles</span>
      </header>

      <nav className="libTabs" role="tablist" aria-label="Insight category">
        {categories.map((c, i) => (
          <button
            key={c.name}
            type="button"
            role="tab"
            aria-selected={i === activeIndex}
            className={`libTab ${i === activeIndex ? "is-active" : ""}`}
            onMouseEnter={() => setActiveIndex(i)}
            onFocus={() => setActiveIndex(i)}
            onClick={() => setActiveIndex(i)}
          >
            {c.name}
          </button>
        ))}
      </nav>

      <article className="libFeatured" key={`featured-${active.name}`}>
        <span className="libBadge">FEATURED INSIGHT</span>
        <h4>{active.featured.title}</h4>
        <p>{active.featured.body}</p>
        <div className="libMetaRow">
          {active.featured.pills.map((p) => (
            <span key={p} className="libPill">
              {p}
            </span>
          ))}
          <span className="libDate">{active.featured.date}</span>
        </div>
      </article>

      <div className="libCards" key={`cards-${active.name}`}>
        {active.cards.map((c) => (
          <article key={c.title} className="libCard">
            <span className="libCardCat">{c.cat}</span>
            <p>{c.title}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
