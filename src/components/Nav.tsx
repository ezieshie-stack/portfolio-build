import Link from "next/link";
import { site } from "@/lib/content";

export function Nav() {
  return (
    <nav
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-[1280px] flex items-center justify-between gap-6 px-4 py-3 rounded-2xl border z-50"
      style={{
        background: "rgba(10, 10, 15, 0.65)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderColor: "var(--glass-border)",
      }}
    >
      <Link href="/" className="flex items-center gap-3 min-w-0">
        <span
          className="flex h-9 w-9 items-center justify-center rounded-lg font-extrabold text-sm tracking-tight"
          style={{
            background: "rgba(139, 92, 246, 0.15)",
            border: "1px solid var(--primary)",
            color: "#fff",
          }}
        >
          {site.brand.initials}
        </span>
        <span className="hidden sm:flex flex-col leading-tight min-w-0">
          <span className="font-semibold text-sm text-white truncate">
            {site.brand.name}
          </span>
          <span className="text-[11px] text-[color:var(--text-dim)] truncate">
            {site.brand.role}
          </span>
        </span>
      </Link>

      <div className="hidden md:flex items-center gap-1">
        {site.navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="px-3 py-2 text-[13px] font-medium text-[color:var(--text-dim)] hover:text-white transition-colors rounded-lg"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <Link
        href={site.cta.href}
        className="btn-pill"
        style={{ padding: "8px 18px", fontSize: "12px" }}
      >
        {site.cta.label} <span aria-hidden className="ml-1">↗</span>
      </Link>
    </nav>
  );
}
