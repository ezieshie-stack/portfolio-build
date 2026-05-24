"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import {
  FeaturedProjectCard,
  projects,
} from "@/components/home/FeaturedProjectCard";

const SWIPE_THRESHOLD = 50;

export function FeaturedProjectsSlider() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const total = projects.length;
  const goTo = (i: number) => setCurrent(((i % total) + total) % total);
  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(diff) < SWIPE_THRESHOLD) return;
    if (diff > 0) prev();
    else next();
  };

  return (
    <section className="featuredProjectSection">
      <div className="featuredProjectHeader">
        <h2 className="featuredTitle">Featured Projects</h2>
      </div>

      <div
        className="slider-viewport"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="slider-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="slider-slide"
              aria-hidden={i !== current}
            >
              <FeaturedProjectCard project={project} />
            </div>
          ))}
        </div>

        <button
          type="button"
          aria-label="Previous project"
          onClick={prev}
          className="slider-arrow slider-arrow--prev"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          aria-label="Next project"
          onClick={next}
          className="slider-arrow slider-arrow--next"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="slider-dots" role="tablist" aria-label="Projects">
        {projects.map((project, i) => (
          <button
            key={project.title}
            type="button"
            role="tab"
            aria-label={`Show project ${i + 1}`}
            aria-current={i === current ? "true" : undefined}
            onClick={() => goTo(i)}
            className="slider-dot"
          />
        ))}
      </div>

      <Link href="/work" className="viewAllButton">
        View All Projects <ArrowUpRight size={16} />
      </Link>
    </section>
  );
}
