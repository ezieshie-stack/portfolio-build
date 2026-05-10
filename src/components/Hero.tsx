import Link from "next/link";
import { Reveal } from "./Reveal";
import { site } from "@/lib/content";

export function Hero() {
  return (
    <Reveal
      as="section"
      className="min-h-screen max-w-[var(--container)] mx-auto px-6 pt-32 pb-24 flex flex-col justify-center"
    >
      <span className="section-tag">{site.hero.tag}</span>
      <h1 className="font-extrabold leading-[0.95] tracking-[-0.04em] mb-8 max-w-4xl text-[clamp(48px,8vw,84px)]">
        {site.hero.title}
      </h1>
      <p className="text-xl text-[color:var(--text-dim)] max-w-[600px] mb-12">
        {site.hero.subtitle}
      </p>
      <div className="flex flex-wrap gap-4">
        <Link href={site.hero.primaryCta.href} className="btn-pill btn-primary">
          {site.hero.primaryCta.label}
        </Link>
        <Link href={site.hero.secondaryCta.href} className="btn-pill">
          {site.hero.secondaryCta.label}
        </Link>
      </div>
    </Reveal>
  );
}
