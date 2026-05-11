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

type CardPos = {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
};

const cardPositions: Record<string, CardPos> = {
  "top-left": { top: "6%", right: "38%" },
  "top-right": { top: "10%", right: "0%" },
  center: { top: "42%", right: "16%" },
  "bottom-left": { bottom: "30%", right: "36%" },
  "bottom-right": { bottom: "22%", right: "-2%" },
};

function FloatingCard({
  position,
  icon: Icon,
  label,
  highlight,
}: {
  position: CardPos;
  icon: LucideIcon;
  label: string;
  highlight?: boolean;
}) {
  return (
    <div
      className="absolute z-30 rounded-2xl border px-3.5 py-3 max-w-[180px]"
      style={{
        ...position,
        background: highlight
          ? "linear-gradient(160deg, rgba(139,92,246,0.22), rgba(20,20,30,0.92))"
          : "rgba(13, 13, 13, 0.78)",
        borderColor: highlight
          ? "rgba(139, 92, 246, 0.45)"
          : "var(--glass-border)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: highlight
          ? "0 0 50px rgba(139, 92, 246, 0.25)"
          : "0 10px 30px rgba(0, 0, 0, 0.45), 0 0 30px rgba(139, 92, 246, 0.08)",
      }}
    >
      <div className="flex items-center gap-2.5">
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border"
          style={{
            borderColor: "rgba(139, 92, 246, 0.3)",
            background: "rgba(139, 92, 246, 0.14)",
          }}
        >
          <Icon className="text-[color:var(--primary)]" size={15} />
        </span>
        <span className="text-[11px] font-medium text-white leading-tight">
          {label}
        </span>
      </div>
    </div>
  );
}

export function Hero() {
  const { centerLabel, centerIcon, nodes } = home.diagram;
  const CenterIcon = cardIcons[centerIcon];

  return (
    <Reveal
      as="section"
      className="relative grid grid-cols-1 lg:grid-cols-[1fr_1.45fr] gap-10 lg:gap-6 items-center min-h-[88vh] pb-12 border-b"
      style={{ borderColor: "var(--glass-border)" }}
    >
      <div className="self-center max-w-[560px] z-10">
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

      <div className="relative h-[640px] lg:h-[760px] w-full">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 38% 58%, rgba(139, 92, 246, 0.42), transparent 65%)",
            filter: "blur(70px)",
          }}
        />

        <div
          className="absolute bottom-0 left-[-6%] lg:left-[-4%] w-[68%] lg:w-[62%] max-w-[640px] aspect-[3/4] z-10"
          style={{
            filter: "drop-shadow(0 30px 60px rgba(139, 92, 246, 0.35))",
          }}
        >
          <Image
            src="/portrait.png"
            alt={`${site.brand.name} portrait`}
            fill
            sizes="(min-width: 1024px) 600px, 80vw"
            priority
            className="object-contain object-bottom"
          />
        </div>

        <FloatingCard
          position={cardPositions.center}
          icon={CenterIcon}
          label={centerLabel}
          highlight
        />
        {nodes.map((node) => (
          <FloatingCard
            key={node.label}
            position={cardPositions[node.position]}
            icon={cardIcons[node.icon]}
            label={node.label}
          />
        ))}

        <article
          className="absolute bottom-0 right-0 z-30 rounded-2xl border px-5 py-4 w-[260px]"
          style={{
            background: "rgba(13, 13, 13, 0.82)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderColor: "var(--glass-border)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.45)",
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
