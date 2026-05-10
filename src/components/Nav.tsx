import Link from "next/link";
import { site } from "@/lib/content";

export function Nav() {
  return (
    <nav
      className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-[800px] h-14 flex items-center justify-between px-6 rounded-full border z-50"
      style={{
        background: "rgba(10, 10, 15, 0.6)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderColor: "var(--glass-border)",
      }}
    >
      <Link
        href="/"
        className="logo-gradient font-extrabold text-sm tracking-[0.1em] uppercase"
      >
        {site.brand}
      </Link>
      <div className="hidden sm:flex gap-6">
        {site.navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[13px] font-medium text-[color:var(--text-dim)] hover:text-white transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <Link
        href="#contact"
        className="btn-pill"
        style={{ padding: "8px 20px", fontSize: "12px" }}
      >
        HIRE
      </Link>
    </nav>
  );
}
