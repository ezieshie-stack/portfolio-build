import AnimateIn from "@/components/AnimateIn";

const contactInfo = [
  { icon: "✉", label: "Email", value: "ezieshie@gmail.com", href: "mailto:ezieshie@gmail.com" },
  { icon: "in", label: "LinkedIn", value: "linkedin.com/in/davidezieshi", href: "https://linkedin.com/in/davidezieshi" },
  { icon: "◎", label: "Location", value: "Calgary, Alberta, Canada", href: null },
  { icon: "◈", label: "Availability", value: "Open to full-time opportunities", href: null },
];

export default function ContactPage() {
  return (
    <div style={{ paddingTop: "120px", paddingBottom: "96px" }}>
      <div className="section-container">

        {/* ── Header ── */}
        <div style={{ maxWidth: "600px", marginBottom: "64px" }}>
          <AnimateIn>
            <span className="section-tag">// INITIATE CONNECTION</span>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1 style={{ fontSize: "clamp(38px, 5.5vw, 68px)", fontWeight: 800, lineHeight: 0.95, letterSpacing: "-0.04em" }}>
              Ready to{" "}
              <span style={{
                background: "linear-gradient(135deg, #c084fc, #8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>Refactor?</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.16}>
            <p style={{ fontSize: "16px", color: "var(--text-dim)", lineHeight: 1.75, marginTop: "20px" }}>
              I&apos;m currently open to new opportunities and collaborations. Whether you have
              a project in mind or just want to connect, I&apos;d love to hear from you.
            </p>
          </AnimateIn>
        </div>

        {/* ── Two-column layout ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "24px", alignItems: "start" }}>

          {/* Left — contact info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {contactInfo.map((c, i) => (
              <AnimateIn key={c.label} delay={i * 0.07}>
                {c.href ? (
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="glass-card"
                    style={{ display: "flex", alignItems: "center", gap: "16px", padding: "20px 24px", borderRadius: "20px", textDecoration: "none" }}
                  >
                    <div style={{
                      width: "40px", height: "40px", borderRadius: "12px", flexShrink: 0,
                      background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.3)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "14px", color: "#c084fc",
                    }}>{c.icon}</div>
                    <div>
                      <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "3px" }}>{c.label}</p>
                      <p style={{ fontSize: "14px", fontWeight: 500, color: "rgba(255,255,255,0.75)" }}>{c.value}</p>
                    </div>
                    <span style={{ marginLeft: "auto", color: "var(--primary)", fontSize: "14px" }}>↗</span>
                  </a>
                ) : (
                  <div
                    className="glass-card"
                    style={{ display: "flex", alignItems: "center", gap: "16px", padding: "20px 24px", borderRadius: "20px" }}
                  >
                    <div style={{
                      width: "40px", height: "40px", borderRadius: "12px", flexShrink: 0,
                      background: "rgba(255,255,255,0.04)", border: "1px solid var(--glass-border)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "14px", color: "rgba(255,255,255,0.4)",
                    }}>{c.icon}</div>
                    <div>
                      <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "3px" }}>{c.label}</p>
                      <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.65)" }}>{c.value}</p>
                    </div>
                  </div>
                )}
              </AnimateIn>
            ))}
          </div>

          {/* Right — form */}
          <AnimateIn delay={0.15}>
            <div className="glass-card" style={{ padding: "48px 40px", borderRadius: "32px" }}>
              <div className="zone-marker" />
              <div style={{ position: "relative", zIndex: 1 }}>
                <h2 style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "8px" }}>
                  Send a Signal
                </h2>
                <p style={{ fontSize: "13px", color: "var(--text-dim)", marginBottom: "32px" }}>
                  I&apos;ll get back to you within 24 hours.
                </p>

                <form style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                    <input className="form-input" type="text" placeholder="Identity / Name" />
                    <input className="form-input" type="email" placeholder="Communication / Email" />
                  </div>
                  <input className="form-input" type="text" placeholder="Subject / Project Scope" />
                  <textarea className="form-input" rows={5} placeholder="Brief / Message" style={{ resize: "none" }} />
                  <button
                    type="submit"
                    className="btn-pill btn-primary"
                    style={{ width: "100%", padding: "18px", borderRadius: "16px", fontSize: "13px" }}
                  >
                    SEND SIGNAL
                  </button>
                </form>
              </div>
            </div>
          </AnimateIn>

        </div>
      </div>
    </div>
  );
}
