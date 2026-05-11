import Link from "next/link";
import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer
      className="px-6 md:px-12 py-10 mt-24 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-[color:var(--text-dim)]"
      style={{ borderColor: "var(--glass-border)" }}
    >
      <p>{site.footer.text}</p>
      <div className="flex items-center gap-5">
        {site.footer.links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="hover:text-white transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
