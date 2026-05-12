"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/projects", label: "Work" },
  { href: "/about", label: "Philosophy" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "calc(100% - 48px)",
        maxWidth: "820px",
        height: "56px",
        background: scrolled || menuOpen
          ? "rgba(8, 8, 14, 0.88)"
          : "rgba(8, 8, 14, 0.55)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        zIndex: 1000,
        transition: "background 0.3s ease",
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        style={{
          fontWeight: 800,
          fontSize: "13px",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          background: "linear-gradient(to right, #fff, #8B5CF6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textDecoration: "none",
          flexShrink: 0,
        }}
      >
        DAVID EZIESHI
      </Link>

      {/* Desktop nav */}
      <nav style={{ display: "flex", alignItems: "center", gap: "28px" }} className="hidden md:flex">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`nav-link ${pathname === href ? "active" : ""}`}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* CTA */}
      <Link
        href="/contact"
        className="btn-pill btn-primary hidden md:inline-flex"
        style={{ padding: "8px 20px", fontSize: "12px" }}
      >
        HIRE
      </Link>

      {/* Mobile hamburger */}
      <button
        style={{ display: "flex", flexDirection: "column", gap: "5px", padding: "8px", background: "none", border: "none", cursor: "pointer" }}
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{
              display: "block",
              width: "20px",
              height: "1.5px",
              background: "#fff",
              borderRadius: "2px",
              transition: "all 0.3s ease",
              transformOrigin: "center",
              transform: menuOpen
                ? i === 0 ? "translateY(6.5px) rotate(45deg)"
                : i === 2 ? "translateY(-6.5px) rotate(-45deg)"
                : "scaleX(0)"
                : "none",
              opacity: menuOpen && i === 1 ? 0 : 1,
            }}
          />
        ))}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "absolute",
              top: "calc(100% + 8px)",
              left: 0,
              right: 0,
              background: "rgba(8, 8, 14, 0.96)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "24px",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  padding: "12px 16px",
                  borderRadius: "12px",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: pathname === href ? "#fff" : "rgba(255,255,255,0.6)",
                  background: pathname === href ? "rgba(139,92,246,0.1)" : "transparent",
                  transition: "all 0.2s ease",
                }}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="btn-pill btn-primary"
              style={{ marginTop: "8px", borderRadius: "16px", justifyContent: "center" }}
            >
              HIRE
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
