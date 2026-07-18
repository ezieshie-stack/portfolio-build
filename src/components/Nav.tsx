"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const orig = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = orig;
    };
  }, [menuOpen]);

  // close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Auto-hide the nav when scrolling down, reveal on scroll up, so
  // a long diagram or write-up gets the full viewport height for
  // reading. Menu open keeps the nav pinned.
  useEffect(() => {
    if (menuOpen) return;
    let last = typeof window !== "undefined" ? window.scrollY : 0;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const y = window.scrollY;
        const dy = y - last;
        // small hysteresis so tiny jitters don't toggle
        if (Math.abs(dy) > 6) {
          if (y > 80 && dy > 0) setHidden(true);
          else if (dy < 0) setHidden(false);
          last = y;
        } else if (y <= 4) {
          setHidden(false);
          last = y;
        }
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  return (
    <header className={`pf-nav${hidden ? " pf-nav-hidden" : ""}`}>
      <div className="pf-shell pf-navrow">
        <Link href="/" className="pf-brand">
          <span className="pf-tile">{site.brand.initials}</span>
          <span className="pf-brandtext">
            <span className="pf-name">{site.brand.name}</span>
            <span className="pf-role">{site.brand.role}</span>
          </span>
        </Link>

        <nav className="pf-navlinks">
          {site.navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={active ? "on" : ""}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="pf-navactions">
          <ThemeToggle />
          <Button variant="primary" size="sm" pill href={site.cta.href}>
            {site.cta.label}
          </Button>
        </div>

        <button
          type="button"
          className="pf-burger"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((m) => !m)}
        >
          {menuOpen ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
        </button>
      </div>

      <div className={`pf-mobilemenu${menuOpen ? " open" : ""}`}>
        <nav className="pf-mobilelinks">
          {site.navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={active ? "on" : ""}
                onClick={() => setMenuOpen(false)}
              >
                <span>{link.label}</span>
                <ArrowUpRight size={16} aria-hidden />
              </Link>
            );
          })}
        </nav>
        <div className="pf-mobilefoot">
          <ThemeToggle />
          <Button
            variant="primary"
            size="md"
            pill
            href={site.cta.href}
            className="grow"
          >
            {site.cta.label}
          </Button>
        </div>
      </div>
    </header>
  );
}
