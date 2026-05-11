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

const cardLayout: Record<
  string,
  { pos: CardPos; anchor: { x: number; y: number } }
> = {
  "top-left": { pos: { top: "2%", left: "-2%" }, anchor: { x: 12, y: 7 } },
  "top-right": { pos: { top: "2%", right: "-2%" }, anchor: { x: 88, y: 7 } },
  center: { pos: { top: "42%", left: "-3%" }, anchor: { x: 11, y: 48 } },
  "mid-right": { pos: { top: "42%", right: "-3%" }, anchor: { x: 89, y: 48 } },
  "mid-bottom": {
    pos: { bottom: "20%", left: "8%" },
    anchor: { x: 22, y: 76 },
  },
};

const analyticsAnchor = { x: 87, y: 93 };

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
      className="absolute z-30 rounded-2xl border px-3.5 py-3 w-[200px]"
      style={{
        ...position,
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

export function Hero() {
  const { centerLabel, centerIcon, nodes } = home.diagram;
  const CenterIcon = cardIcons[centerIcon];
  const centerAnchor = cardLayout.center.anchor;

  const inboundNodes = nodes.filter(
    (n) => n.position === "top-left" || n.position === "top-right",
  );
  const outboundRight = nodes.find((n) => n.position === "mid-right");
  const outboundBottom = nodes.find((n) => n.position === "mid-bottom");

  return (
    <Reveal
      as="section"
      className="relative grid grid-cols-1 lg:grid-cols-[0.72fr_1fr] gap-10 lg:gap-2 items-center min-h-[92vh] pb-12 border-b overflow-visible"
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

      <div className="relative h-[680px] lg:h-[820px] w-full">
        <div
          aria-hidden
          className="absolute pointer-events-none -z-10"
          style={{
            inset: "0",
            background:
              "radial-gradient(ellipse 55% 45% at 58% 68%, rgba(124, 58, 237, 0.34), transparent 70%)",
            filter: "blur(130px)",
          }}
        />
        <div
          aria-hidden
          className="absolute pointer-events-none -z-10"
          style={{
            inset: "0",
            background:
              "radial-gradient(ellipse 28% 22% at 55% 26%, rgba(168, 85, 247, 0.42), transparent 65%)",
            filter: "blur(55px)",
          }}
        />
        <div
          aria-hidden
          className="absolute pointer-events-none -z-10"
          style={{
            inset: "0",
            background:
              "radial-gradient(ellipse 65% 50% at 88% 42%, rgba(59, 130, 246, 0.16), transparent 75%)",
            filter: "blur(120px)",
          }}
        />
        <div
          aria-hidden
          className="absolute pointer-events-none -z-10"
          style={{
            inset: "0",
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.42) 0%, transparent 22%, transparent 78%, rgba(0,0,0,0.55) 100%)",
          }}
        />

        <svg
          aria-hidden
          className="absolute inset-0 w-full h-full pointer-events-none z-[5]"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {inboundNodes.map((node) => {
            const start = cardLayout[node.position].anchor;
            return (
              <line
                key={`connector-in-${node.position}`}
                x1={start.x}
                y1={start.y}
                x2={centerAnchor.x}
                y2={centerAnchor.y}
                stroke="rgba(139, 92, 246, 0.5)"
                strokeWidth="0.35"
                strokeDasharray="0.8 1.4"
                vectorEffect="non-scaling-stroke"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="-4.4"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </line>
            );
          })}
          {outboundRight ? (
            <line
              x1={centerAnchor.x}
              y1={centerAnchor.y}
              x2={cardLayout[outboundRight.position].anchor.x}
              y2={cardLayout[outboundRight.position].anchor.y}
              stroke="rgba(139, 92, 246, 0.5)"
              strokeWidth="0.35"
              strokeDasharray="0.8 1.4"
              vectorEffect="non-scaling-stroke"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="-4.4"
                dur="3s"
                repeatCount="indefinite"
              />
            </line>
          ) : null}
          {outboundBottom ? (
            <line
              x1={centerAnchor.x}
              y1={centerAnchor.y}
              x2={cardLayout[outboundBottom.position].anchor.x}
              y2={cardLayout[outboundBottom.position].anchor.y}
              stroke="rgba(139, 92, 246, 0.5)"
              strokeWidth="0.35"
              strokeDasharray="0.8 1.4"
              vectorEffect="non-scaling-stroke"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="-4.4"
                dur="3s"
                repeatCount="indefinite"
              />
            </line>
          ) : null}
          {outboundBottom ? (
            <line
              x1={cardLayout[outboundBottom.position].anchor.x}
              y1={cardLayout[outboundBottom.position].anchor.y}
              x2={analyticsAnchor.x}
              y2={analyticsAnchor.y}
              stroke="rgba(139, 92, 246, 0.4)"
              strokeWidth="0.3"
              strokeDasharray="0.6 1.6"
              vectorEffect="non-scaling-stroke"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="-4.4"
                dur="3.4s"
                repeatCount="indefinite"
              />
            </line>
          ) : null}
        </svg>

        <div
          className="absolute z-10"
          style={{
            top: "6%",
            left: "34%",
            width: "48%",
            height: "90%",
            maskImage:
              "radial-gradient(ellipse 78% 88% at 50% 42%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 78% 88% at 50% 42%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)",
            filter:
              "drop-shadow(0 0 60px rgba(124, 58, 237, 0.28)) drop-shadow(0 30px 80px rgba(0, 0, 0, 0.6))",
          }}
        >
          <Image
            src="/portrait.png"
            alt={`${site.brand.name} portrait`}
            fill
            sizes="(min-width: 1024px) 480px, 90vw"
            priority
            className="object-cover"
            style={{ objectPosition: "center 18%" }}
          />
        </div>

        <FloatingCard
          position={cardLayout.center.pos}
          icon={CenterIcon}
          label={centerLabel}
          highlight
        />
        {nodes.map((node) => (
          <FloatingCard
            key={node.label}
            position={cardLayout[node.position].pos}
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
