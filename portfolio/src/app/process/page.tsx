import AnimateIn from "@/components/AnimateIn";
import Link from "next/link";

const steps = [
  { num: "01", title: "Understand", desc: "Gather requirements, engage stakeholders, and map the current state of operations through interviews and data review." },
  { num: "02", title: "Analyse", desc: "Identify gaps, bottlenecks, and opportunities using data-driven process analysis and root cause investigation." },
  { num: "03", title: "Design", desc: "Create process maps, workflows, and structured solutions that address root issues with clarity and precision." },
  { num: "04", title: "Implement", desc: "Support execution, provide training, and ensure smooth stakeholder adoption with minimal disruption." },
  { num: "05", title: "Evaluate", desc: "Measure outcomes, gather feedback, and drive continuous operational improvement with quantifiable metrics." },
];

const principles = [
  { tag: "01", title: "User-Centred", desc: "Solutions built for the people using the system — not just the architecture." },
  { tag: "02", title: "Data-Driven", desc: "Every recommendation backed by evidence and measurable, trackable results." },
  { tag: "03", title: "Clear & Structured", desc: "Documentation that prioritises clarity and operational consistency at scale." },
  { tag: "04", title: "Impact Focused", desc: "Committed to delivering meaningful, measurable results — not just activity." },
];

export default function ProcessPage() {
  return (
    <div style={{ paddingTop: "120px", paddingBottom: "96px" }}>
      <div className="section-container" style={{ display: "flex", flexDirection: "column", gap: "96px" }}>

        {/* ── Header ── */}
        <div style={{ maxWidth: "680px" }}>
          <AnimateIn>
            <span className="section-tag">// OPERATIONAL METHODOLOGY</span>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <h1 style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 800, lineHeight: 0.95, letterSpacing: "-0.04em", marginBottom: "20px" }}>
              A Structured Approach to{" "}
              <span style={{
                background: "linear-gradient(135deg, #c084fc, #8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>Complex Problems.</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.14}>
            <p style={{ fontSize: "16px", color: "var(--text-dim)", lineHeight: 1.75 }}>
              I follow a proven five-phase process that ensures every solution is grounded
              in clarity, stakeholder alignment, and measurable outcomes.
            </p>
          </AnimateIn>
        </div>

        {/* ── Steps ── */}
        <div>
          <AnimateIn>
            <span className="section-tag">// FIVE-PHASE PROCESS</span>
          </AnimateIn>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {steps.map((s, i) => (
              <AnimateIn key={s.num} delay={i * 0.07}>
                <div className="glass-card" style={{ padding: "28px 36px", borderRadius: "20px", display: "flex", alignItems: "flex-start", gap: "24px" }}>
                  <div style={{
                    flexShrink: 0,
                    width: "48px", height: "48px", borderRadius: "14px",
                    background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.3)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                    fontSize: "13px", fontWeight: 700, color: "#c084fc", letterSpacing: "0.05em",
                  }}>
                    {s.num}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <h3 style={{ fontSize: "17px", fontWeight: 700, letterSpacing: "-0.02em" }}>{s.title}</h3>
                    <p style={{ fontSize: "14px", color: "var(--text-dim)", lineHeight: 1.7 }}>{s.desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>

        {/* ── Core principles ── */}
        <div>
          <AnimateIn>
            <span className="section-tag">// CORE PRINCIPLES</span>
          </AnimateIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
            {principles.map((p, i) => (
              <AnimateIn key={p.title} delay={i * 0.08}>
                <div className="glass-card" style={{ height: "100%" }}>
                  <div className="zone-marker" />
                  <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: "12px" }}>
                    <span style={{
                      fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                      fontSize: "11px", color: "var(--primary)", letterSpacing: "0.2em",
                    }}>{p.tag}</span>
                    <h3 style={{ fontSize: "17px", fontWeight: 700, letterSpacing: "-0.02em" }}>{p.title}</h3>
                    <p style={{ fontSize: "13px", color: "var(--text-dim)", lineHeight: 1.7 }}>{p.desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <AnimateIn>
          <div className="glass-card" style={{ textAlign: "center", padding: "64px 40px" }}>
            <div className="zone-marker" />
            <div style={{ position: "relative", zIndex: 1 }}>
              <span className="section-tag" style={{ textAlign: "center" }}>INITIATE CONNECTION</span>
              <h2 style={{ fontSize: "clamp(26px, 3.5vw, 42px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "28px" }}>
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
