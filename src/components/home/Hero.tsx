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
      className="hero relative pb-0 border-b overflow-hidden"
      style={{ borderColor: "var(--glass-border)" }}
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-30 pointer-events-none opacity-[0.06] hero-grid-pulse"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="hero-text relative z-[20]">
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

        <h1 className="hero-title font-extrabold mb-7">
          {home.titleStart}{" "}
          <span className="text-[color:var(--primary)]">
            {home.titleHighlight}
          </span>
        </h1>

        <p className="hero-subtitle text-base lg:text-lg text-[color:var(--text-dim)] leading-relaxed mb-9 max-w-[480px]">
          {home.subtitle}
        </p>

        <div className="hero-cta-row flex flex-wrap gap-3 mb-10">
          <Link
            href={home.primaryCta.href}
            className="rounded-2xl px-7 py-3.5 font-medium text-white transition hover:brightness-110"
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

        <ul className="hero-competencies grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-[420px]">
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
                  <Icon className="text-[color:var(--primary)]" size={18} />
                </span>
                <span className="text-[11px] leading-tight text-[color:var(--text-dim)]">
                  {c.label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        className="hero-portrait-column relative flex items-end justify-center pointer-events-none"
        style={{ zIndex: 10 }}
      >
        <div
          aria-hidden
          className="hero-portrait-glow absolute pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(124,58,237,0.28), transparent 68%)",
            filter: "blur(70px)",
            zIndex: -1,
          }}
        />
        <Image
          src="/portrait.png"
          alt={`${site.brand.name} portrait`}
          width={1040}
          height={1300}
          priority
          sizes="(min-width: 1440px) 560px, (min-width: 1024px) 480px, (min-width: 768px) 380px, 90vw"
          className="hero-portrait object-contain"
          style={{
            objectPosition: "center bottom",
            filter: "drop-shadow(0 30px 90px rgba(124,58,237,0.25))",
            maskImage:
              "linear-gradient(to bottom, black 78%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 78%, transparent 100%)",
          }}
        />
      </div>

    </Reveal>
  );
}
