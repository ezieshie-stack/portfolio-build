import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { home } from "@/lib/content";

export function Hero() {
  return (
    <Reveal as="section" className="relative grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center pb-12">
      <div
        aria-hidden
        className="absolute pointer-events-none -z-10"
        style={{
          right: "-15%",
          top: "0",
          width: "70%",
          height: "120%",
          background:
            "radial-gradient(ellipse at 60% 45%, rgba(139,92,246,0.22), rgba(139,92,246,0.06) 45%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div>
        <span className="eyebrow mb-6">{home.tag}</span>
        <h1 className="font-extrabold leading-[1.05] tracking-[-0.03em] text-[clamp(40px,6vw,68px)] mb-6">
          {home.titleStart}{" "}
          <span className="text-[color:var(--primary)]">
            {home.titleHighlight}
          </span>
        </h1>
        <p className="text-lg text-[color:var(--text-dim)] max-w-[520px] mb-10">
          {home.subtitle}
        </p>
        <div className="flex flex-wrap gap-3 mb-10">
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

      <div
        className="relative aspect-[3/2] w-full max-w-[640px] mx-auto overflow-hidden"
        style={{
          maskImage:
            "radial-gradient(ellipse 88% 95% at 50% 50%, #000 60%, rgba(0,0,0,0.7) 82%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 88% 95% at 50% 50%, #000 60%, rgba(0,0,0,0.7) 82%, transparent 100%)",
        }}
      >
        <Image
          src="/portrait.png"
          alt={`${home.tag} portrait`}
          fill
          sizes="(min-width: 1024px) 640px, 100vw"
          priority
          className="object-cover"
        />
      </div>
    </Reveal>
  );
}
