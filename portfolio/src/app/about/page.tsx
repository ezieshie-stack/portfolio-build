import AnimateIn from "@/components/AnimateIn";
import Link from "next/link";

const philosophy = [
  {
    val: "0.1×",
    label: "Complexity Tax",
    desc: "Every system I design eliminates unnecessary steps. If a process can't be explained simply, it needs to be redesigned.",
  },
  {
    val: "100%",
    label: "Process Visibility",
    desc: "No dark corners in the stack. Every workflow mapped, every handoff documented, every metric tracked.",
  },
  {
    val: "4.2×",
    label: "Adoption Rate",
    desc: "Systems only work when people use them. I design for the humans in the loop, not just the architecture.",
  },
];

const values = [
  {
    tag: "01",
    title: "Clarity in Complexity",
    desc: "I break down complex systems and workflows into simple, actionable solutions that teams can actually execute on.",
  },
  {
    tag: "02",
    title: "People & Process",
    desc: "The best systems enable people to do their best work. Technology should reduce friction, not create it.",
  },
  {
    tag: "03",
    title: "Data-Informed Decisions",
    desc: "Every recommendation is backed by evidence. I use data to uncover insights and validate operational improvements.",
  },
  {
    tag: "04",
    title: "Impact & Growth",
    desc: "I build solutions that create measurable, lasting impact — not just quick fixes that fade within a quarter.",
  },
];

const education = [
  {
    degree: "Bachelor of Management",
    school: "Bow Valley College",
    period: "Mar 2020 – Apr 2022",
    detail: "Focus on business operations, strategy, and organizational systems.",
  },
  {
    degree: "Business Administration Diploma",
    school: "Bow Valley College",
    period: "Jan 2019 – Dec 2019",
    detail: "Core business disciplines including finance, operations, and management.",
  },
];

const tools = [
  "Excel", "SQL", "Python", "Power BI", "Looker Studio",
  "Jira", "Notion", "Figma", "Confluence", "Miro",
];

export default function AboutPage() {
  return (
    <div style={{ paddingTop: "120px", paddingBottom: "96px" }}>
      <div className="section-container" style={{ display: "flex", flexDirection: "column", gap: "96px" }}>

        {/* ── Hero ── */}
        <div style={{ maxWidth: "780px" }}>
          <AnimateIn>
            <span className="section-tag">// ABOUT THE ANALYST</span>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1 style={{
              fontSize: "clamp(38px, 5.5vw, 68px)",
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              marginBottom: "28px",
            }}>
              Analytical mind.{" "}
              <span style={{
                background: "linear-gradient(135deg, #c084fc, #8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>Operational focus.</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.16}>
            <p style={{ fontSize: "17px", lineHeight: 1.8, color: "var(--text-dim)", maxWidth: "580px" }}>
              I&apos;m an Operations &amp; Business Systems Analyst with a passion for building
              structure, improving processes, and enabling teams to execute more effectively.
              I enjoy solving complex problems, mapping workflows, and turning requirements
              into systems that drive real business value.
            </p>
          </AnimateIn>
        </div>

        {/* ── Philosophy metrics ── */}
        <div>
          <AnimateIn>
            <span className="section-tag">// CORE PHILOSOPHY</span>
          </AnimateIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            {philosophy.map((p, i) => (
              <AnimateIn key={p.label} delay={i * 0.1}>
                <div className="glass-card" style={{ height: "100%" }}>
                  <div className="zone-marker" />
                  <div style={{ position: "relative", zIndex: 1 }}>
                    <span className="metric-value">{p.val}</span>
                    <span className="metric-label" style={{ display: "block", marginBottom: "16px" }}>{p.label}</span>
                    <p style={{ fontSize: "13px", color: "var(--text-dim)", lineHeight: 1.7 }}>{p.desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>

        {/* ── What drives me ── */}
        <div>
          <AnimateIn>
            <span className="section-tag">// WHAT DRIVES ME</span>
          </AnimateIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
            {values.map((v, i) => (
              <AnimateIn key={v.title} delay={i * 0.08}>
                <div className="glass-card" style={{ height: "100%" }}>
                  <div className="zone-marker" />
                  <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: "12px" }}>
                    <span style={{
                      fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                      fontSize: "11px", color: "var(--primary)", letterSpacing: "0.2em",
                    }}>{v.tag}</span>
                    <h3 style={{ fontSize: "16px", fontWeight: 700, letterSpacing: "-0.02em" }}>{v.title}</h3>
                    <p style={{ fontSize: "13px", color: "var(--text-dim)", lineHeight: 1.7 }}>{v.desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>

        {/* ── Education ── */}
        <div>
          <AnimateIn>
            <span className="section-tag">// EDUCATION</span>
          </AnimateIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }}>
            {education.map((e, i) => (
              <AnimateIn key={e.degree} delay={i * 0.1}>
                <div className="glass-card">
                  <div className="zone-marker" />
                  <div style={{ position: "relative", zIndex: 1 }}>
                    <p style={{
                      fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                      fontSize: "10px", color: "var(--primary)", letterSpacing: "0.2em",
                      textTransform: "uppercase", marginBottom: "12px",
                    }}>{e.period}</p>
                    <h3 style={{ fontSize: "17px", fontWeight: 700, marginBottom: "6px" }}>{e.degree}</h3>
                    <p style={{ fontSize: "13px", color: "var(--primary)", marginBottom: "10px" }}>{e.school}</p>
                    <p style={{ fontSize: "13px", color: "var(--text-dim)", lineHeight: 1.6 }}>{e.detail}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>

        {/* ── Tools ── */}
        <div>
          <AnimateIn>
            <span className="section-tag">// TOOLS & TECHNOLOGIES</span>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {tools.map((t) => (
                <span key={t} style={{
                  padding: "10px 20px", borderRadius: "100px",
                  background: "var(--glass)", border: "1px solid var(--glass-border)",
                  fontSize: "13px", color: "rgba(255,255,255,0.65)", fontWeight: 500,
                  backdropFilter: "blur(8px)",
                }}>{t}</span>
              ))}
            </div>
          </AnimateIn>
        </div>

        {/* ── CTA ── */}
        <AnimateIn>
          <div className="glass-card" style={{ textAlign: "center", padding: "64px 40px" }}>
            <div className="zone-marker" />
            <div style={{ position: "relative", zIndex: 1 }}>
              <span className="section-tag" style={{ textAlign: "center" }}>INITIATE CONNECTION</span>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "32px" }}>
                Have a project in mind?
              </h2>
              <Link href="/contact" className="btn-pill btn-primary">
                LET&apos;S CONNECT
              </Link>
            </div>
          </div>
        </AnimateIn>

      </div>
    </div>
  );
}
