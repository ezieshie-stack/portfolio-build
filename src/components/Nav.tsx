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

  return (
    <header className="pf-nav">
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
