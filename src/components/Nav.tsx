import Link from "next/link";
import { site } from "@/lib/content";

export function Nav() {
  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur-xl"
      style={{
        background: "rgba(5, 5, 5, 0.7)",
        borderColor: "var(--glass-border)",
      }}
    >
      <div className="mx-auto max-w-[1440px] flex items-center justify-between gap-6 px-6 lg:px-12 py-5">
        <Link href="/" className="flex items-center gap-3 min-w-0">
          <span
            className="flex h-11 w-11 items-center justify-center rounded-xl border font-bold text-sm"
            style={{
              borderColor: "rgba(139, 92, 246, 0.4)",
              background: "rgba(139, 92, 246, 0.12)",
            }}
          >
            {site.brand.initials}
          </span>
          <div className="hidden sm:flex flex-col leading-tight min-w-0">
            <span className="text-sm font-semibold text-white truncate">
              {site.brand.name}
            </span>
            <span className="text-[11px] text-[color:var(--text-dim)] truncate">
              {site.brand.role}
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-[13px]">
          {site.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[color:var(--text-dim)] hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href={site.cta.href}
          className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-[13px] font-medium text-white transition"
          style={{
            background: "rgb(124, 58, 237)",
          }}
        >
          {site.cta.label}
          <span aria-hidden>↗</span>
        </Link>
      </div>
    </header>
  );
}
