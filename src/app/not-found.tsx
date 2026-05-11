import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { notFound as content } from "@/lib/content";

export const metadata = { title: "Page Not Found — Portfolio" };

export default function NotFound() {
  return (
    <PageShell>
      <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-center min-h-[60vh]">
        <div>
          <div className="gradient-text text-[clamp(96px,18vw,200px)] font-extrabold leading-none tracking-tight mb-6">
            {content.code}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {content.title}
          </h1>
          <p className="text-[color:var(--text-dim)] max-w-prose mb-8">
            {content.description}
          </p>
          <Link href={content.cta.href} className="btn-pill btn-primary">
            {content.cta.label} <span aria-hidden className="ml-1">↗</span>
          </Link>
        </div>

        <div className="relative aspect-square max-w-[420px] mx-auto w-full">
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full"
            aria-hidden
            fill="none"
          >
            <defs>
              <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(139,92,246,0.4)" />
                <stop offset="100%" stopColor="rgba(139,92,246,0)" />
              </radialGradient>
            </defs>
            <circle cx="100" cy="100" r="80" fill="url(#glow)" />
            <circle cx="60" cy="55" r="1.5" fill="#fff" />
            <circle cx="135" cy="40" r="1.2" fill="#fff" />
            <circle cx="160" cy="80" r="1" fill="#fff" />
            <circle cx="40" cy="120" r="1.3" fill="#fff" />
            <circle cx="170" cy="150" r="1.2" fill="#fff" />
            <circle cx="80" cy="160" r="1" fill="#fff" />

            <g
              stroke="rgba(139,92,246,0.7)"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            >
              <line x1="100" y1="120" x2="100" y2="155" />
              <line x1="85" y1="160" x2="115" y2="160" />
              <line x1="115" y1="115" x2="155" y2="75" />
              <circle cx="155" cy="75" r="14" />
              <circle
                cx="155"
                cy="75"
                r="9"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="1"
              />
            </g>
          </svg>
        </div>
      </div>
    </PageShell>
  );
}
