import Image from "next/image";
import Link from "next/link";
import {
  BarChart3,
  CheckCircle2,
  Database,
  GitBranch,
  RefreshCw,
  Settings,
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

const cardIcons: Record<string, LucideIcon> = {
  Users,
  Database,
  Settings,
  CheckCircle2,
  GitBranch,
};

function SystemCard({
  icon: Icon,
  label,
  highlight,
  className,
}: {
  icon: LucideIcon;
  label: string;
  highlight?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border px-3.5 py-3 ${className ?? ""}`}
      style={{
        background: highlight
          ? "linear-gradient(160deg, rgba(139,92,246,0.28), rgba(20,20,30,0.92))"
          : "rgba(13, 13, 13, 0.78)",
        borderColor: highlight
          ? "rgba(139, 92, 246, 0.55)"
          : "var(--glass-border)",
        backdropFilter: "blur(22px)",
        WebkitBackdropFilter: "blur(22px)",
        boxShadow: highlight
          ? "0 0 60px rgba(139, 92, 246, 0.35), inset 0 1px 0 rgba(255,255,255,0.08)"
          : "0 14px 36px rgba(0, 0, 0, 0.5), 0 0 30px rgba(139, 92, 246, 0.08)",
      }}
    >
      <div className="flex items-center gap-2.5">
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border"
          style={{
            borderColor: "rgba(139, 92, 246, 0.35)",
            background: "rgba(139, 92, 246, 0.16)",
          }}
        >
          <Icon className="text-[color:var(--primary)]" size={16} />
        </span>
        <span className="text-[11px] font-medium text-white leading-tight">
          {label}
        </span>
      </div>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex justify-center" aria-hidden>
      <div
        className="h-5 w-px"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(139,92,246,0.55) 50%, transparent 50%)",
          backgroundSize: "1px 6px",
        }}
      />
    </div>
  );
}

export function Hero() {
  const { centerLabel, centerIcon, nodes } = home.diagram;
  const CenterIcon = cardIcons[centerIcon];

  const stakeholders = nodes.find((n) => n.position === "top-left");
  const dataInputs = nodes.find((n) => n.position === "top-right");
  const outcomes = nodes.find((n) => n.position === "mid-right");
  const implementation = nodes.find((n) => n.position === "mid-bottom");

  return (
    <Reveal
      as="section"
      className="relative grid grid-cols-1 lg:grid-cols-[minmax(420px,0.95fr)_minmax(320px,0.7fr)_minmax(360px,0.85fr)] items-center gap-10 lg:gap-12 min-h-[calc(100vh-96px)] pb-12 border-b overflow-visible"
      style={{ borderColor: "var(--glass-border)" }}
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-20 pointer-events-none opacity-[0.05]"
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

      <div className="relative z-[3] max-w-[560px]">
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

        <h1 className="font-extrabold leading-[1.05] tracking-[-0.03em] text-[clamp(40px,5.5vw,68px)] mb-7">
          {home.titleStart}{" "}
          <span className="text-[color:var(--primary)]">
            {home.titleHighlight}
          </span>
        </h1>

        <p className="text-base lg:text-lg text-[color:var(--text-dim)] leading-relaxed mb-9 max-w-[480px]">
          {home.subtitle}
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
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

        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-[420px]">
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

      <div className="relative z-[2] flex items-end justify-center min-h-[640px]">
        <div
          aria-hidden
          className="absolute pointer-events-none -z-10"
          style={{
            inset: "-10% -20%",
            background:
              "radial-gradient(ellipse 55% 50% at 50% 65%, rgba(124, 58, 237, 0.34), transparent 70%)",
            filter: "blur(120px)",
          }}
        />
        <div
          aria-hidden
          className="absolute pointer-events-none -z-10"
          style={{
            inset: "0",
            background:
              "radial-gradient(ellipse 30% 25% at 50% 28%, rgba(168, 85, 247, 0.4), transparent 65%)",
            filter: "blur(50px)",
          }}
        />
        <div
          aria-hidden
          className="absolute pointer-events-none -z-10"
          style={{
            inset: "0",
            background:
              "radial-gradient(ellipse 70% 55% at 85% 45%, rgba(59, 130, 246, 0.15), transparent 75%)",
            filter: "blur(110px)",
          }}
        />

        <Image
          src="/portrait.png"
          alt={`${site.brand.name} portrait`}
          width={1040}
          height={1300}
          priority
          sizes="(min-width: 1024px) 520px, 90vw"
          className="relative w-full max-w-[520px] h-auto max-h-[680px] object-contain object-bottom"
          style={{
            filter:
              "drop-shadow(0 30px 90px rgba(124, 58, 237, 0.28)) drop-shadow(0 20px 60px rgba(0, 0, 0, 0.55))",
          }}
        />
      </div>

      <div className="relative z-[1] min-h-[640px] flex flex-col justify-center gap-2">
        <div className="grid grid-cols-2 gap-3">
          {stakeholders ? (
            <SystemCard
              icon={cardIcons[stakeholders.icon]}
              label={stakeholders.label}
            />
          ) : null}
          {dataInputs ? (
            <SystemCard
              icon={cardIcons[dataInputs.icon]}
              label={dataInputs.label}
            />
          ) : null}
        </div>

        <Connector />

        <SystemCard icon={CenterIcon} label={centerLabel} highlight />

        <Connector />

        <div className="grid grid-cols-2 gap-3">
          {outcomes ? (
            <SystemCard
              icon={cardIcons[outcomes.icon]}
              label={outcomes.label}
            />
          ) : null}
          {implementation ? (
            <SystemCard
              icon={cardIcons[implementation.icon]}
              label={implementation.label}
            />
          ) : null}
        </div>

        <Connector />

        <article
          className="rounded-2xl border px-5 py-4"
          style={{
            background: "rgba(13, 13, 13, 0.82)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderColor: "var(--glass-border)",
            boxShadow: "0 14px 36px rgba(0, 0, 0, 0.5)",
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
