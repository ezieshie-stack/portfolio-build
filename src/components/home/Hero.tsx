import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { OperationsDiagram } from "./OperationsDiagram";
import { home } from "@/lib/content";

export function Hero() {
  return (
    <Reveal as="section" className="grid lg:grid-cols-2 gap-12 items-start pb-12">
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

      <div className="flex flex-col gap-6">
        <div
          className="relative aspect-[4/5] max-w-[480px] mx-auto w-full rounded-3xl overflow-hidden border"
          style={{
            borderColor: "var(--glass-border)",
            background:
              "linear-gradient(160deg, rgba(139,92,246,0.18), rgba(10,10,15,0.95))",
          }}
        >
          <Image
            src="/portrait.jpg"
            alt={`${home.tag} portrait`}
            fill
            sizes="(min-width: 1024px) 480px, 100vw"
            priority
            className="object-cover"
          />
        </div>
        <OperationsDiagram />
      </div>
    </Reveal>
  );
}
