import AnimateIn from "@/components/AnimateIn";
import Link from "next/link";

/* ─── SVG thumbnails ─────────────────────────────────────────── */

function ThumbFlow() {
  return (
    <svg viewBox="0 0 200 90" width="100%" height="100%">
      {["Input","Map","Design","Deploy"].map((lbl, i) => {
        const x = i * 50;
        const active = i === 2;
        return (
          <g key={lbl}>
            <rect x={x} y={28} width={42} height={22} rx="5"
              fill={active ? "rgba(139,92,246,0.18)" : "rgba(255,255,255,0.04)"}
              stroke={active ? "rgba(139,92,246,0.55)" : "rgba(255,255,255,0.1)"}
              strokeWidth="0.8" />
            <text x={x + 21} y={42} textAnchor="middle"
              fill={active ? "#c084fc" : "rgba(255,255,255,0.5)"}
              fontSize="7.5" fontFamily="sans-serif">{lbl}</text>
            {i < 3 && (
              <text x={x + 44} y={42} fill="rgba(139,92,246,0.5)" fontSize="11" fontFamily="sans-serif">›</text>
            )}
          </g>
        );
      })}
      <text x="0" y="76" fill="rgba(255,255,255,0.15)" fontSize="8" fontFamily="JetBrains Mono, monospace">END-TO-END WORKFLOW</text>
    </svg>
  );
}

function ThumbChart() {
  const pts = "4,64 24,52 44,40 64,28 84,18 104,10 124,6 144,3 164,1";
  return (
    <svg viewBox="0 0 180 80" width="100%" height="100%">
      <defs>
        <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(139,92,246,0.3)" />
          <stop offset="100%" stopColor="rgba(139,92,246,0)" />
        </linearGradient>
      </defs>
      {[20,40,60].map(y => <line key={y} x1="0" y1={y} x2="180" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />)}
      <polygon points={`4,64 ${pts.slice(5)} 164,72 4,72`} fill="url(#cg)" />
      <polyline points={pts} fill="none" stroke="rgba(139,92,246,0.9)" strokeWidth="1.8"
        strokeLinecap="round" strokeLinejoin="round" />
      <text x="110" y="16" fill="#c084fc" fontSize="11" fontFamily="sans-serif" fontWeight="800">−28%</text>
    </svg>
  );
}

function ThumbSQL() {
  const lines = ["SELECT  id, amount", "FROM    transactions", "WHERE   velocity > 5", "  AND   risk > 0.8"];
  return (
    <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "10px", lineHeight: 1.9 }}>
      {lines.map((l, i) => {
        const kw = l.split(/\s/)[0];
        const rest = l.slice(kw.length);
        return (
          <div key={i} style={{ display: "flex" }}>
            <span style={{ color: "rgba(139,92,246,0.9)", fontWeight: 700, minWidth: "52px" }}>{kw}</span>
            <span style={{ color: "rgba(255,255,255,0.45)" }}>{rest}</span>
          </div>
        );
      })}
    </div>
  );
}

function ThumbAuth() {
  const steps = ["Sign Up","Verify","Login","Session","Logout"];
  return (
    <svg viewBox="0 0 200 60" width="100%" height="100%">
      {steps.map((s, i) => {
        const x = i * 38;
        const a = i === 2;
        return (
          <g key={s}>
            <rect x={x} y={14} width={30} height={18} rx="4"
              fill={a ? "rgba(139,92,246,0.18)" : "rgba(255,255,255,0.04)"}
              stroke={a ? "rgba(139,92,246,0.55)" : "rgba(255,255,255,0.1)"}
              strokeWidth="0.8" />
            <text x={x+15} y={26} textAnchor="middle"
              fill={a ? "#c084fc" : "rgba(255,255,255,0.45)"}
              fontSize="6.5" fontFamily="sans-serif">{s}</text>
            {i < 4 && <text x={x+32} y={26} fill="rgba(139,92,246,0.35)" fontSize="9" fontFamily="sans-serif">›</text>}
          </g>
        );
      })}
      <text x="0" y="52" fill="rgba(255,255,255,0.15)" fontSize="7.5" fontFamily="JetBrains Mono, monospace">5 AUTH STATES DOCUMENTED</text>
    </svg>
  );
}

/* ─── Projects data ──────────────────────────────────────────── */

const projects = [
  {
    slug: "fitco-operations-platform",
    tag: "Process Design",
    title: "Fitco Operations Platform",
    desc: "Redesigned end-to-end workflows, implemented role-based systems, and built operational reporting that improved efficiency by 28% and saved 20+ hours monthly.",
    tags: ["Process Design", "Information Architecture", "Documentation"],
    metrics: [{ val: "28%", lbl: "Efficiency" }, { val: "20+", lbl: "Hrs/Mo Saved" }],
    Thumb: ThumbFlow,
    sysId: "SYS_001",
  },
  {
    slug: "sla-escalation-optimization",
    tag: "Workflow Analysis",
    title: "SLA & Escalation Optimization",
    desc: "Analysed support workflows, SLA performance, and escalation drivers. Implemented changes that reduced escalation rates by 28% and improved first-contact resolution to 94%.",
    tags: ["Workflow Analysis", "SLA Design", "Process Improvement"],
    metrics: [{ val: "−28%", lbl: "Escalations" }, { val: "94%", lbl: "FCR Rate" }],
    Thumb: ThumbChart,
    sysId: "SYS_002",
  },
  {
    slug: "fraud-detection-analysis",
    tag: "Data Analysis",
    title: "Fraud Detection Analysis (SQL)",
    desc: "Built SQL queries to identify suspicious patterns and high-risk transactions, improving fraud detection accuracy and reducing false positives across 1,247 flagged records.",
    tags: ["SQL", "Data Analysis", "Risk Detection"],
    metrics: [{ val: "1,247", lbl: "Records Flagged" }, { val: "↓FP", lbl: "False Positives" }],
    Thumb: ThumbSQL,
    sysId: "SYS_003",
  },
  {
    slug: "user-flow-authentication-design",
    tag: "System Design",
    title: "User Flow & Authentication Design",
    desc: "Created user flows and authentication processes to streamline sign-in and session management. Documented 5 auth states with 100% edge case coverage.",
    tags: ["Process Mapping", "System Design", "Documentation"],
    metrics: [{ val: "5", lbl: "Auth States" }, { val: "100%", lbl: "Coverage" }],
    Thumb: ThumbAuth,
    sysId: "SYS_004",
  },
];

export default function ProjectsPage() {
  return (
    <div style={{ paddingTop: "120px", paddingBottom: "96px" }}>
      <div className="section-container" style={{ display: "flex", flexDirection: "column", gap: "64px" }}>

        {/* ── Header ── */}
        <div style={{ maxWidth: "640px" }}>
          <AnimateIn>
            <span className="section-tag">// FEATURED OUTPUT</span>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <h1 style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 800, lineHeight: 0.95, letterSpacing: "-0.04em", marginBottom: "20px" }}>
              Projects That Drive{" "}
              <span style={{
                background: "linear-gradient(135deg, #c084fc, #8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>Operational Impact.</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.14}>
            <p style={{ fontSize: "16px", color: "var(--text-dim)", lineHeight: 1.7 }}>
              A selection of projects focused on improving workflows, optimizing processes,
              and building systems that support better business outcomes.
            </p>
          </AnimateIn>
        </div>

        {/* ── Project cards ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {projects.map((p, i) => (
            <AnimateIn key={p.slug} delay={i * 0.08}>
              <Link href={`/projects/${p.slug}`} style={{ display: "block" }}>
                <div
                  className="glass-card"
                  style={{
                    padding: 0,
                    overflow: "hidden",
                    display: "grid",
                    gridTemplateColumns: "240px 1fr",
                    minHeight: "180px",
                    cursor: "pointer",
                  }}
                >
                  {/* Left — thumbnail */}
                  <div style={{
                    background: "rgba(8, 8, 16, 0.8)",
                    borderRight: "1px solid var(--glass-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "28px",
                  }}>
                    <p.Thumb />
                  </div>

                  {/* Right — content */}
                  <div style={{ padding: "32px 36px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <span style={{
                          fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
                          padding: "3px 10px", borderRadius: "4px",
                          background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.28)",
                          color: "#c084fc", display: "inline-block",
                        }}>{p.tag}</span>
                        <span style={{
                          fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                          fontSize: "9px", color: "rgba(255,255,255,0.18)", textTransform: "uppercase", letterSpacing: "0.1em",
                        }}>{p.sysId}</span>
                      </div>
                      <h2 style={{ fontSize: "clamp(16px, 2vw, 20px)", fontWeight: 700, letterSpacing: "-0.02em" }}>{p.title}</h2>
                      <p style={{ fontSize: "13px", color: "var(--text-dim)", lineHeight: 1.65 }}>{p.desc}</p>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "16px", flexWrap: "wrap", gap: "12px" }}>
                      {/* Metrics */}
                      <div style={{ display: "flex", gap: "28px" }}>
                        {p.metrics.map((m) => (
                          <div key={m.lbl}>
                            <span style={{
                              display: "block", fontSize: "20px", fontWeight: 800,
                              letterSpacing: "-0.03em",
                              background: "linear-gradient(135deg, #fff 40%, #8B5CF6)",
                              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                              backgroundClip: "text",
                            }}>{m.val}</span>
                            <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{m.lbl}</span>
                          </div>
                        ))}
                      </div>
                      {/* Tags + CTA */}
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                        {p.tags.slice(0, 2).map((t) => (
                          <span key={t} style={{
                            fontSize: "11px", padding: "4px 10px", borderRadius: "6px",
                            background: "rgba(255,255,255,0.04)", border: "1px solid var(--glass-border)",
                            color: "rgba(255,255,255,0.4)",
                          }}>{t}</span>
                        ))}
                        <span style={{ fontSize: "12px", color: "var(--primary)", fontWeight: 600 }}>READ CASE STUDY ↗</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>

        {/* ── CTA ── */}
        <AnimateIn>
          <div className="glass-card" style={{ textAlign: "center", padding: "60px 40px" }}>
            <div className="zone-marker" />
            <div style={{ position: "relative", zIndex: 1 }}>
              <span className="section-tag" style={{ textAlign: "center" }}>INITIATE CONNECTION</span>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "28px" }}>
                Ready to Refactor Your Operations?
              </h2>
              <Link href="/contact" className="btn-pill btn-primary">SEND SIGNAL</Link>
            </div>
          </div>
        </AnimateIn>

      </div>
    </div>
  );
}
