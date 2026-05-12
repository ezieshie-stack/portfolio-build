import Link from "next/link";
import ParticleCanvas from "@/components/ParticleCanvas";
import AnimateIn from "@/components/AnimateIn";

/* ─── SVG Visuals for marquee slides ─────────────────────────── */

function SlideFlow() {
  const nodes = [
    { x: 12,  y: 30, label: "Input",    accent: false },
    { x: 72,  y: 10, label: "Map",      accent: false },
    { x: 132, y: 30, label: "Design",   accent: true  },
    { x: 192, y: 10, label: "Test",     accent: false },
    { x: 252, y: 30, label: "Deploy",   accent: false },
  ];
  return (
    <svg viewBox="0 0 290 80" width="100%" height="60" style={{ display: "block" }}>
      <defs>
        <marker id="arW" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
          <path d="M0,0 L5,2.5 L0,5 Z" fill="rgba(139,92,246,0.6)" />
        </marker>
      </defs>
      {nodes.map((n, i) => (
        <g key={n.label}>
          <rect x={n.x} y={n.y} width={52} height={22} rx="5"
            fill={n.accent ? "rgba(139,92,246,0.18)" : "rgba(255,255,255,0.04)"}
            stroke={n.accent ? "rgba(139,92,246,0.5)" : "rgba(255,255,255,0.1)"}
            strokeWidth="0.8" />
          <text x={n.x + 26} y={n.y + 13} textAnchor="middle"
            fill={n.accent ? "#c084fc" : "rgba(255,255,255,0.55)"}
            fontSize="7.5" fontFamily="sans-serif" fontWeight={n.accent ? "700" : "400"}>
            {n.label}
          </text>
          {i < nodes.length - 1 && (
            <line
              x1={n.x + 53} y1={n.y + 11}
              x2={nodes[i + 1].x - 1} y2={nodes[i + 1].y + 11}
              stroke="rgba(139,92,246,0.4)" strokeWidth="0.9" strokeDasharray="3,2"
              markerEnd="url(#arW)" />
          )}
        </g>
      ))}
    </svg>
  );
}

function SlideChart() {
  const pts = "0,52 30,42 60,34 90,22 120,14 150,8 180,5 210,3";
  return (
    <svg viewBox="0 0 220 70" width="100%" height="60" style={{ display: "block" }}>
      <defs>
        <linearGradient id="cGr" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(139,92,246,0.3)" />
          <stop offset="100%" stopColor="rgba(139,92,246,0)" />
        </linearGradient>
      </defs>
      {[18, 36, 54].map(y => (
        <line key={y} x1="0" y1={y} x2="220" y2={y}
          stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
      ))}
      <polygon points={`0,52 ${pts.slice(4)} 210,65 0,65`} fill="url(#cGr)" />
      <polyline points={pts} fill="none" stroke="rgba(139,92,246,0.9)" strokeWidth="1.8"
        strokeLinecap="round" strokeLinejoin="round" />
      {pts.split(" ").filter((_, i) => i % 2 === 0).map((pt) => {
        const [x, y] = pt.split(",");
        return <circle key={pt} cx={x} cy={y} r="2.5" fill="#8B5CF6" />;
      })}
      <text x="155" y="14" fill="#c084fc" fontSize="12" fontFamily="sans-serif" fontWeight="800">−28%</text>
    </svg>
  );
}

function SlideSQL() {
  const lines = [
    { kw: "SELECT", rest: " id, amount, risk_score" },
    { kw: "FROM  ", rest: " transactions" },
    { kw: "WHERE ", rest: " velocity > 5" },
    { kw: "  AND ", rest: " risk_score > 0.8" },
  ];
  return (
    <div style={{ padding: "4px 0" }}>
      {lines.map((l, i) => (
        <div key={i} style={{ display: "flex", fontFamily: "JetBrains Mono, monospace", fontSize: "11px", lineHeight: 1.8 }}>
          <span style={{ color: "rgba(139,92,246,0.9)", fontWeight: 700, minWidth: "52px" }}>{l.kw}</span>
          <span style={{ color: "rgba(255,255,255,0.5)" }}>{l.rest}</span>
        </div>
      ))}
      <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "10px", color: "rgba(139,92,246,0.5)", marginTop: "8px" }}>
        → 1,247 records flagged
      </p>
    </div>
  );
}

function SlideAuth() {
  const steps = ["Sign Up", "Verify", "Login", "Session", "Logout"];
  return (
    <svg viewBox="0 0 290 60" width="100%" height="60" style={{ display: "block" }}>
      {steps.map((s, i) => {
        const x = i * 56;
        const active = i === 2;
        return (
          <g key={s}>
            <rect x={x} y={14} width={46} height={28} rx="6"
              fill={active ? "rgba(139,92,246,0.18)" : "rgba(255,255,255,0.04)"}
              stroke={active ? "rgba(139,92,246,0.55)" : "rgba(255,255,255,0.1)"}
              strokeWidth="0.8" />
            <text x={x + 23} y={31} textAnchor="middle"
              fill={active ? "#c084fc" : "rgba(255,255,255,0.5)"}
              fontSize="7.5" fontFamily="sans-serif" fontWeight={active ? "700" : "400"}>{s}</text>
            {i < steps.length - 1 && (
              <text x={x + 49} y={31} fill="rgba(139,92,246,0.4)" fontSize="12" fontFamily="sans-serif">›</text>
            )}
          </g>
        );
      })}
      <text x="0" y="56" fill="rgba(255,255,255,0.18)" fontSize="8" fontFamily="sans-serif">5 auth states documented</text>
    </svg>
  );
}

/* ─── Marquee slide card ──────────────────────────────────────── */
function Slide({
  tag, title, sysId, children,
}: {
  tag: string; title: string; sysId: string; children: React.ReactNode;
}) {
  return (
    <div className="project-slide">
      <div style={{ padding: "24px 24px 16px", display: "flex", flexDirection: "column", height: "100%" }}>
        {/* Top */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
          <span style={{
            fontSize: "9px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
            padding: "3px 10px", borderRadius: "4px",
            background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.3)",
            color: "#c084fc",
          }}>{tag}</span>
        </div>
        {/* Visual */}
        <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
          {children}
        </div>
        {/* Title */}
        <div style={{ marginTop: "12px" }}>
          <p style={{ fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.7)" }}>{title}</p>
        </div>
      </div>
      <div className="metadata">{sysId}</div>
    </div>
  );
}

/* ─── Marquee strip (duplicated for infinite loop) ────────────── */
const slideData = [
  { tag: "Process Design",   title: "Fitco Operations Platform",        sysId: "SYS_001 // 2024", Visual: SlideFlow  },
  { tag: "Workflow Analysis", title: "SLA & Escalation Optimization",   sysId: "SYS_002 // 2024", Visual: SlideChart },
  { tag: "Data Analysis",    title: "Fraud Detection Analysis (SQL)",   sysId: "SYS_003 // 2024", Visual: SlideSQL   },
  { tag: "System Design",    title: "User Flow & Auth Design",          sysId: "SYS_004 // 2024", Visual: SlideAuth  },
];

/* ─── Featured project (split card) ──────────────────────────── */
function FeaturedProjectCard() {
  return (
    <div
      className="glass-card"
      style={{
        padding: 0,
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        borderRadius: "32px",
        minHeight: "360px",
      }}
    >
      {/* Left — content */}
      <div style={{ padding: "56px 48px", display: "flex", flexDirection: "column", gap: "20px", justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <span style={{
            display: "inline-block", width: "fit-content",
            padding: "4px 12px", borderRadius: "6px",
            background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.28)",
            color: "#c084fc", fontSize: "10px", fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase",
          }}>Process Design</span>

          <h3 style={{ fontSize: "clamp(22px, 2.5vw, 30px)", fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.03em" }}>
            Fitco Operations Platform
          </h3>

          <p style={{ fontSize: "14px", lineHeight: 1.75, color: "var(--text-dim)", maxWidth: "400px" }}>
            Redesigned end-to-end workflows, implemented role-based access, and built operational
            reporting that improved efficiency by 28% and saved 20+ hours monthly.
          </p>

          <div style={{ display: "flex", gap: "40px" }}>
            {[{ val: "28%", lbl: "Efficiency Gain" }, { val: "20+", lbl: "Hrs Saved / Mo" }].map((m) => (
              <div key={m.lbl}>
                <span className="metric-value" style={{ fontSize: "32px" }}>{m.val}</span>
                <span className="metric-label">{m.lbl}</span>
              </div>
            ))}
          </div>
        </div>

        <Link href="/projects/fitco-operations-platform" className="btn-pill" style={{ alignSelf: "flex-start" }}>
          READ CASE STUDY
        </Link>
      </div>

      {/* Right — visual */}
      <div style={{
        background: "linear-gradient(135deg, #0d0d1a 0%, #050508 100%)",
        borderLeft: "1px solid var(--glass-border)",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
      }}>
        <div className="zone-marker" />
        {/* SVG workflow */}
        <svg viewBox="0 0 320 200" width="100%" style={{ maxWidth: "320px", position: "relative", zIndex: 1 }}>
          <defs>
            <marker id="arr" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
              <path d="M0,0 L5,2.5 L0,5 Z" fill="rgba(139,92,246,0.7)" />
            </marker>
          </defs>
          {/* Top row */}
          {["User Reg.", "Payment", "Activation", "Analytics"].map((lbl, i) => {
            const x = i * 80;
            return (
              <g key={lbl}>
                <rect x={x} y={20} width={68} height={34} rx="7"
                  fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
                <text x={x + 34} y={41} textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="8.5" fontFamily="sans-serif">{lbl}</text>
                {i < 3 && (
                  <line x1={x + 69} y1={37} x2={x + 79} y2={37}
                    stroke="rgba(139,92,246,0.55)" strokeWidth="1" markerEnd="url(#arr)" />
                )}
                <line x1={x + 34} y1={54} x2={x + 34} y2={90}
                  stroke="rgba(139,92,246,0.2)" strokeWidth="0.8" strokeDasharray="3,2" />
              </g>
            );
          })}
          {/* Bottom row */}
          {["Tracking", "Reporting", "Insights", "Improvement"].map((lbl, i) => {
            const x = i * 80;
            return (
              <g key={lbl}>
                <rect x={x} y={90} width={68} height={34} rx="7"
                  fill="rgba(139,92,246,0.08)" stroke="rgba(139,92,246,0.25)" strokeWidth="0.8" />
                <text x={x + 34} y={110} textAnchor="middle" fill="rgba(192,132,252,0.8)" fontSize="8" fontFamily="sans-serif">{lbl}</text>
                {i < 3 && (
                  <line x1={x + 69} y1={107} x2={x + 79} y2={107}
                    stroke="rgba(139,92,246,0.4)" strokeWidth="1" markerEnd="url(#arr)" />
                )}
              </g>
            );
          })}
          {/* Label */}
          <text x="160" y="158" textAnchor="middle" fill="rgba(255,255,255,0.15)" fontSize="9"
            fontFamily="JetBrains Mono, monospace" textDecoration="none" letterSpacing="0.15em">
            END-TO-END WORKFLOW
          </text>
        </svg>
        <div className="metadata">SYS_001 // 2024</div>
      </div>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <ParticleCanvas />

      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "120px",
        paddingBottom: "80px",
      }}>
        <div className="section-container">
          <AnimateIn delay={0}>
            <span className="section-tag">// ARCHITECTING OPERATIONS</span>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <h1 style={{
              fontSize: "clamp(44px, 7.5vw, 82px)",
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              marginBottom: "28px",
              maxWidth: "860px",
            }}>
              Systems Built for<br />
              Operational{" "}
              <span style={{
                background: "linear-gradient(135deg, #c084fc 0%, #8B5CF6 60%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>Precision.</span>
            </h1>
          </AnimateIn>

          <AnimateIn delay={0.18}>
            <p style={{
              fontSize: "18px",
              color: "var(--text-dim)",
              maxWidth: "560px",
              marginBottom: "44px",
              lineHeight: 1.7,
            }}>
              Operations &amp; Business Systems Analyst specializing in process design,
              workflow optimization, and data-informed decision making.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.24}>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <Link href="/projects" className="btn-pill btn-primary">VIEW SYSTEMS</Link>
              <Link href="/about" className="btn-pill">LEARN MORE</Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ══ FEATURED PROJECT ════════════════════════════════ */}
      <section style={{ padding: "0 0 96px" }}>
        <div className="section-container">
          <AnimateIn>
            <span className="section-tag">// FEATURED OUTPUT</span>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <FeaturedProjectCard />
          </AnimateIn>
        </div>
      </section>

      {/* ══ MARQUEE STRIP ═══════════════════════════════════ */}
      <div className="marquee-container" style={{ padding: "48px 0" }}>
        <div className="marquee-track">
          {/* First set */}
          {slideData.map((s) => (
            <Slide key={s.sysId} tag={s.tag} title={s.title} sysId={s.sysId}>
              <s.Visual />
            </Slide>
          ))}
          {/* Duplicate for seamless loop */}
          {slideData.map((s) => (
            <Slide key={`${s.sysId}-b`} tag={s.tag} title={s.title} sysId={s.sysId}>
              <s.Visual />
            </Slide>
          ))}
        </div>
      </div>

      {/* ══ PHILOSOPHY / METRICS ════════════════════════════ */}
      <section style={{ padding: "96px 0" }}>
        <div className="section-container">
          <AnimateIn>
            <span className="section-tag">// CORE PHILOSOPHY</span>
          </AnimateIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            {[
              {
                val: "28%",
                label: "Efficiency Improvement",
                desc: "Process redesign that eliminates bottlenecks before they surface. Measurable gains, not estimates.",
              },
              {
                val: "100%",
                label: "Process Visibility",
                desc: "Every workflow mapped, every handoff documented. No dark corners in the operation.",
              },
              {
                val: "4+",
                label: "Years of Experience",
                desc: "Systems designed to scale with the business. Infrastructure that adapts to growth.",
              },
            ].map((m, i) => (
              <AnimateIn key={m.label} delay={i * 0.1}>
                <div className="glass-card">
                  <div className="zone-marker" />
                  <div style={{ position: "relative", zIndex: 1 }}>
                    <span className="metric-value">{m.val}</span>
                    <span className="metric-label" style={{ marginBottom: "16px", display: "block" }}>{m.label}</span>
                    <p style={{ fontSize: "13px", color: "var(--text-dim)", lineHeight: 1.7, marginTop: "16px" }}>
                      {m.desc}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
