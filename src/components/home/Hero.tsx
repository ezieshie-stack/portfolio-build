import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { OperationsDiagram } from "./OperationsDiagram";
import { home } from "@/lib/content";

export function Hero() {
  return (
    <Reveal
      as="section"
      className="grid gap-10 lg:grid-cols-[1fr_1.1fr_1fr] lg:gap-8 items-end pb-12 border-b"
      style={{ borderColor: "var(--glass-border)" }}
    >
      <div className="self-center">
        <span className="eyebrow mb-6">{home.tag}</span>
        <h1 className="font-extrabold leading-[1.05] tracking-[-0.03em] text-[clamp(36px,5vw,56px)] mb-6">
          {home.titleStart}{" "}
          <span className="text-[color:var(--primary)]">
            {home.titleHighlight}
          </span>
        </h1>
        <p className="text-base text-[color:var(--text-dim)] max-w-[460px] mb-8">
          {home.subtitle}
        </p>
        <div className="flex flex-wrap gap-3 mb-8">
          <Link href={home.primaryCta.href} className="btn-pill btn-primary">
            {home.primaryCta.label} <span aria-hidden className="ml-1">↗</span>
          </Link>
          <Link href={home.secondaryCta.href} className="btn-pill">
            {home.secondaryCta.label} <span aria-hidden className="ml-1">↗</span>
          </Link>
        </div>
        <ul className="flex flex-wrap gap-2">
          {home.pills.map((pill) => (
            <li key={pill} className="chip">
              <span className="status-dot" />
              {pill}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative aspect-[3/4] w-full max-w-[480px] mx-auto">
        <Image
          src="/portrait.png"
          alt={`${home.tag} portrait`}
          fill
          sizes="(min-width: 1024px) 480px, 100vw"
          priority
          className="object-contain object-bottom"
        />
      </div>

      <div className="self-center flex flex-col gap-5">
        <OperationsDiagram />
        <article
          className="rounded-2xl border px-5 py-4"
          style={{
            background: "rgba(13, 13, 13, 0.85)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderColor: "var(--glass-border)",
          }}
        >
          <div className="text-[10px] uppercase tracking-[0.2em] text-[color:var(--primary)] mb-2">
            {home.metricCard.label}
          </div>
          <div className="gradient-text text-3xl font-extrabold tracking-tight mb-1">
            {home.metricCard.value}
          </div>
          <div className="text-xs text-[color:var(--text-dim)]">
            {home.metricCard.sublabel}
          </div>
        </article>
      </div>
    </Reveal>
  );
}
