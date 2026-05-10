import Image from "next/image";
import Link from "next/link";
import {
  BarChart3,
  RefreshCw,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { WorkflowCanvas } from "./WorkflowCanvas";
import { home, site } from "@/lib/content";

const competencyIcons: Record<string, LucideIcon> = {
  Workflow,
  BarChart3,
  Users,
  RefreshCw,
};

export function Hero() {
  return (
    <Reveal
      as="section"
      className="grid gap-10 lg:gap-8 lg:grid-cols-[1.1fr_0.9fr_1fr] items-end min-h-[80vh] py-10 border-b"
      style={{ borderColor: "var(--glass-border)" }}
    >
      <div className="self-center max-w-[560px]">
        <div
          className="inline-flex rounded-full border px-4 py-2 text-[11px] tracking-[0.2em] uppercase mb-7"
          style={{
            borderColor: "rgba(139, 92, 246, 0.25)",
            background: "rgba(139, 92, 246, 0.08)",
            color: "rgb(196, 181, 253)",
          }}
        >
          {home.tag}
        </div>

        <h1 className="font-extrabold leading-[1.05] tracking-[-0.03em] text-[clamp(36px,5vw,64px)] mb-7">
          {home.titleStart}{" "}
          <span className="text-[color:var(--primary)]">
            {home.titleHighlight}
          </span>
        </h1>

        <p className="text-base lg:text-lg text-[color:var(--text-dim)] leading-relaxed mb-9">
          {home.subtitle}
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          <Link
            href={home.primaryCta.href}
            className="rounded-2xl px-7 py-3.5 font-medium text-white transition"
            style={{ background: "rgb(124, 58, 237)" }}
          >
            {home.primaryCta.label}
          </Link>
          <Link
            href={home.secondaryCta.href}
            className="rounded-2xl border px-7 py-3.5 font-medium text-white backdrop-blur-xl transition"
            style={{
              borderColor: "var(--glass-border)",
              background: "rgba(255,255,255,0.04)",
            }}
          >
            {home.secondaryCta.label}
          </Link>
        </div>

        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {home.competencies.map((c) => {
            const Icon = competencyIcons[c.icon];
            return (
              <li
                key={c.label}
                className="flex flex-col items-center text-center gap-2"
              >
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-xl border"
                  style={{
                    borderColor: "rgba(139, 92, 246, 0.3)",
                    background: "rgba(139, 92, 246, 0.1)",
                  }}
                >
                  <Icon
                    className="text-[color:var(--primary)]"
                    size={18}
                  />
                </span>
                <span className="text-[11px] leading-tight text-[color:var(--text-dim)]">
                  {c.label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="relative">
        <div
          aria-hidden
          className="absolute left-1/2 -translate-x-1/2 bottom-0 -z-10"
          style={{
            width: "85%",
            height: "70%",
            background:
              "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.28), transparent 65%)",
            filter: "blur(60px)",
          }}
        />
        <div className="relative w-full max-w-[500px] mx-auto aspect-[3/4]">
          <Image
            src="/portrait.png"
            alt={`${site.brand.name} portrait`}
            fill
            sizes="(min-width: 1024px) 500px, 100vw"
            priority
            className="object-contain object-bottom"
            style={{
              filter: "drop-shadow(0 30px 60px rgba(139, 92, 246, 0.25))",
            }}
          />
        </div>
      </div>

      <div className="self-center flex flex-col gap-5">
        <WorkflowCanvas />
        <article
          className="rounded-2xl border px-5 py-4"
          style={{
            background: "rgba(13, 13, 13, 0.82)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            borderColor: "var(--glass-border)",
          }}
        >
          <div className="text-[10px] uppercase tracking-[0.2em] text-[color:var(--primary)] mb-2">
            {home.metricCard.label}
          </div>
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="gradient-text text-3xl font-extrabold tracking-tight">
                {home.metricCard.value}
              </div>
              <div className="text-[11px] text-[color:var(--text-dim)] mt-1">
                {home.metricCard.sublabel}
              </div>
            </div>
            <svg
              aria-hidden
              viewBox="0 0 80 30"
              className="h-9 w-24 shrink-0 opacity-90"
            >
              <polyline
                points="0,22 12,18 24,20 36,12 48,14 60,7 72,9 80,4"
                fill="none"
                stroke="rgb(139, 92, 246)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="80" cy="4" r="2" fill="rgb(139, 92, 246)" />
            </svg>
          </div>
        </article>
      </div>
    </Reveal>
  );
}
