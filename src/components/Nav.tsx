"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/content";

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  return (
    <>
      <header
        className="sticky top-0 z-50 border-b backdrop-blur-xl"
        style={{
          background: "rgba(5, 5, 5, 0.7)",
          borderColor: "var(--glass-border)",
        }}
      >
        <div className="mx-auto max-w-[1440px] flex items-center justify-between gap-4 px-5 md:px-8 lg:px-12 py-4 lg:py-5">
          <Link href="/" className="flex items-center gap-3 min-w-0">
            <span
              className="flex h-11 w-11 items-center justify-center rounded-xl border font-bold text-sm shrink-0"
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
            {site.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`navLink text-[color:var(--text-dim)] hover:text-white${
                    isActive ? " active" : ""
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href={site.cta.href}
              className="inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 lg:px-5 lg:py-3 text-[12px] lg:text-[13px] font-medium text-white transition shrink-0"
              style={{ background: "rgb(124, 58, 237)" }}
            >
              {site.cta.label}
            </Link>

            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="lg:hidden flex items-center justify-center rounded-xl border shrink-0"
              style={{
                width: 44,
                height: 44,
                borderColor: "rgba(139, 92, 246, 0.35)",
                background: "rgba(139, 92, 246, 0.08)",
              }}
            >
              <Menu size={20} className="text-white" />
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div className="mobile-drawer lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="mobile-drawer__backdrop"
          />
          <aside
            className="mobile-drawer__panel"
            role="dialog"
            aria-modal="true"
          >
            <div className="mobile-drawer__header">
              <span className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--text-dim)]">
                Menu
              </span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center rounded-xl border"
                style={{
                  width: 40,
                  height: 40,
                  borderColor: "var(--glass-border)",
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                <X size={18} className="text-white" />
              </button>
            </div>

            <nav className="mobile-drawer__links">
              {site.navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="mobile-drawer__link"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      ) : null}
    </>
  );
}
