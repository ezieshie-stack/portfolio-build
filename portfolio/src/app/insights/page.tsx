import AnimateIn from "@/components/AnimateIn";
import Link from "next/link";

const articles = [
  {
    slug: "5-ways-to-improve-operational-efficiency",
    tag: "Process Improvement",
    title: "5 Ways to Improve Operational Efficiency Without Adding More Resources",
    excerpt: "Practical strategies to eliminate process bottlenecks, reduce waste, and improve outcomes — without growing headcount.",
    date: "May 2, 2024",
    readTime: "6 min",
    sysId: "INS_001",
  },
  {
    slug: "how-to-map-a-process-that-gets-used",
    tag: "Operations",
    title: "How to Map a Process That Actually Gets Used",
    excerpt: "A step-by-step guide to creating process diagrams that drive clarity and action — not ones that sit in a drawer.",
    date: "Apr 10, 2024",
    readTime: "7 min",
    sysId: "INS_002",
  },
  {
    slug: "using-data-to-identify-bottlenecks",
    tag: "Data & Analytics",
    title: "Using Data to Identify Bottlenecks in Workflows",
    excerpt: "How to leverage data to uncover hidden issues and implement targeted improvements that actually stick.",
    date: "May 18, 2024",
    readTime: "5 min",
    sysId: "INS_003",
  },
  {
    slug: "sla-design-best-practices",
    tag: "Systems",
    title: "SLA Design Best Practices for Support Teams",
    excerpt: "Key considerations for designing SLAs that drive accountability, reduce escalations, and improve customer experience.",
    date: "Feb 25, 2024",
    readTime: "5 min",
    sysId: "INS_004",
  },
];

export default function InsightsPage() {
  return (
    <div style={{ paddingTop: "120px", paddingBottom: "96px" }}>
      <div className="section-container" style={{ display: "flex", flexDirection: "column", gap: "64px" }}>

        {/* ── Header ── */}
        <div style={{ maxWidth: "640px" }}>
          <AnimateIn>
            <span className="section-tag">// TRANSMITTED KNOWLEDGE</span>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <h1 style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 800, lineHeight: 0.95, letterSpacing: "-0.04em", marginBottom: "20px" }}>
              Thoughts on{" "}
              <span style={{
                background: "linear-gradient(135deg, #c084fc, #8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>Operations & Systems.</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.14}>
            <p style={{ fontSize: "16px", color: "var(--text-dim)", lineHeight: 1.7 }}>
              Sharing ideas on operations, process improvement, systems design, and data-informed
              decision making — distilled from real-world projects.
            </p>
          </AnimateIn>
        </div>

        {/* ── Articles ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {articles.map((a, i) => (
            <AnimateIn key={a.slug} delay={i * 0.08}>
              <Link href={`/insights/${a.slug}`} style={{ display: "block" }}>
                <div className="glass-card" style={{ padding: "0", overflow: "hidden", borderRadius: "24px", cursor: "pointer" }}>
                  <div style={{ padding: "32px 36px", display: "flex", flexDirection: "column", gap: "12px" }}>
                    {/* Top row */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span style={{
                        fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
                        padding: "3px 10px", borderRadius: "4px",
                        background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.28)",
                        color: "#c084fc",
                      }}>{a.tag}</span>
                      <span style={{
                        fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                        fontSize: "9px", color: "rgba(255,255,255,0.16)", textTransform: "uppercase", letterSpacing: "0.1em",
                      }}>{a.sysId}</span>
                    </div>

                    {/* Title */}
                    <h2 style={{ fontSize: "clamp(16px, 2vw, 19px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.3 }}>
                      {a.title}
                    </h2>

                    {/* Excerpt */}
                    <p style={{ fontSize: "13px", color: "var(--text-dim)", lineHeight: 1.7 }}>{a.excerpt}</p>

                    {/* Footer row */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "4px" }}>
                      <span style={{
                        fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                        fontSize: "10px", color: "rgba(255,255,255,0.25)", letterSpacing: "0.1em",
                      }}>{a.date} · {a.readTime} read</span>
                      <span style={{ fontSize: "12px", color: "var(--primary)", fontWeight: 600 }}>READ ↗</span>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>

      </div>
    </div>
  );
}
