import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "40px 0", textAlign: "center" }}>
      <div className="section-container" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
        <p style={{
          fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
          fontSize: "11px",
          color: "rgba(255,255,255,0.2)",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
        }}>
          © {year} David Ezieshi Analytics. All rights reserved.
        </p>
        <div style={{ display: "flex", gap: "28px", alignItems: "center" }}>
          {[
            { label: "Work", href: "/projects" },
            { label: "Philosophy", href: "/about" },
            { label: "Insights", href: "/insights" },
            { label: "Contact", href: "/contact" },
          ].map(({ label, href }) => (
            <Link key={href} href={href} className="nav-link" style={{ fontSize: "12px" }}>
              {label}
            </Link>
          ))}
          <a
            href="https://linkedin.com/in/davidezieshi"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
            style={{ fontSize: "12px" }}
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
