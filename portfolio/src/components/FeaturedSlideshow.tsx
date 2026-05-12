"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

/* ─── Per-project workflow visuals ───────────────────────────── */

function FitcoWorkflow() {
  const top = ["User\nRegistration", "Workout\nSelection", "Payment\nProcessing", "Plan\nActivation"];
  const bot = ["Progress\nTracking", "Performance\nAnalytics", "Reporting &\nInsights", "Continuous\nImprovement"];
  const bw = 88; const gap = 8; const stride = bw + gap;

  return (
    <div style={{ width: "100%" }}>
      <p style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "12px" }}>
        End-to-End Workflow
      </p>
      <svg viewBox="0 0 384 120" width="100%" style={{ overflow: "visible", display: "block" }}>
        <defs>
          <marker id="arrowT" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
            <path d="M0,0 L5,2.5 L0,5 Z" fill="rgba(139,92,246,0.6)" />
          </marker>
          <marker id="arrowB" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
            <path d="M0,0 L5,2.5 L0,5 Z" fill="rgba(139,92,246,0.4)" />
          </marker>
        </defs>
        {/* Top row */}
        {top.map((label, i) => {
          const x = i * stride;
          return (
            <g key={i}>
              <rect x={x} y={0} width={bw} height={44} rx="6"
                fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
              {label.split("\n").map((l, li) => (
                <text key={li} x={x + bw / 2} y={17 + li * 13} textAnchor="middle"
                  fill="rgba(255,255,255,0.65)" fontSize="8" fontFamily="sans-serif">{l}</text>
              ))}
              {i < 3 && (
                <line x1={x + bw + 1} y1={22} x2={x + bw + gap - 1} y2={22}
                  stroke="rgba(139,92,246,0.55)" strokeWidth="0.9" markerEnd="url(#arrowT)" />
              )}
              <line x1={x + bw / 2} y1={44} x2={x + bw / 2} y2={76}
                stroke="rgba(139,92,246,0.25)" strokeWidth="0.7" strokeDasharray="3,2" />
            </g>
          );
        })}
        {/* Bottom row */}
        {bot.map((label, i) => {
          const x = i * stride;
          return (
            <g key={i}>
              <rect x={x} y={76} width={bw} height={44} rx="6"
                fill="rgba(139,92,246,0.07)" stroke="rgba(139,92,246,0.22)" strokeWidth="0.8" />
              {label.split("\n").map((l, li) => (
                <text key={li} x={x + bw / 2} y={93 + li * 12} textAnchor="middle"
                  fill="rgba(192,132,252,0.75)" fontSize="7.5" fontFamily="sans-serif">{l}</text>
              ))}
              {i < 3 && (
                <line x1={x + bw + 1} y1={98} x2={x + bw + gap - 1} y2={98}
                  stroke="rgba(139,92,246,0.4)" strokeWidth="0.9" markerEnd="url(#arrowB)" />
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function SLAWorkflow() {
  const pts = "0,62 32,55 64,47 96,38 128,28 160,20 192,14 224,9 256,5";
  return (
    <div style={{ width: "100%" }}>
      <p style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "12px" }}>
        Escalation Rate Trend
      </p>
      <svg viewBox="0 0 260 80" width="100%" style={{ display: "block" }}>
        <defs>
          <linearGradient id="slaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(139,92,246,0.3)" />
            <stop offset="100%" stopColor="rgba(139,92,246,0)" />
          </linearGradient>
        </defs>
        {[20, 40, 60].map(y => (
          <line key={y} x1="0" y1={y} x2="260" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
        ))}
        <polygon points={`0,62 ${pts.slice(3)} 256,75 0,75`} fill="url(#slaGrad)" />
        <polyline points={pts} fill="none" stroke="rgba(139,92,246,0.9)" strokeWidth="1.8"
          strokeLinecap="round" strokeLinejoin="round" />
        {pts.split(" ").filter((_, i) => i % 2 === 0).map((pt) => {
          const [x, y] = pt.split(",");
          return <circle key={pt} cx={x} cy={y} r="2.5" fill="#8B5CF6" />;
        })}
        <text x="210" y="4" fill="#c084fc" fontSize="11" fontFamily="sans-serif" fontWeight="800">−28%</text>
        <text x="2" y="76" fill="rgba(255,255,255,0.25)" fontSize="7" fontFamily="sans-serif">Before</text>
        <text x="210" y="76" fill="rgba(255,255,255,0.25)" fontSize="7" fontFamily="sans-serif">After</text>
      </svg>
    </div>
  );
}

function FraudWorkflow() {
  const lines = [
    { kw: "SELECT", rest: "  id, amount, risk_score" },
    { kw: "FROM", rest: "    transactions" },
    { kw: "WHERE", rest: "   velocity > 5" },
    { kw: "  AND", rest: "   risk_score > 0.8" },
    { kw: "  AND", rest: "   geo_flag = 1" },
  ];
  return (
    <div style={{ width: "100%" }}>
      <p style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "12px" }}>
        Detection Query
      </p>
      <div style={{
        background: "rgba(0,0,0,0.4)", borderRadius: "8px",
        border: "1px solid rgba(255,255,255,0.06)", padding: "14px 16px",
      }}>
        <svg viewBox="0 0 240 80" width="100%" style={{ display: "block" }}>
          {lines.map((l, i) => (
            <g key={i}>
              <text x={0} y={14 + i * 14} fontFamily="monospace" fontSize="8.5"
                fill="rgba(139,92,246,0.95)" fontWeight="700">{l.kw}</text>
              <text x={l.kw.trimEnd().length * 5.6} y={14 + i * 14} fontFamily="monospace"
                fontSize="8.5" fill="rgba(255,255,255,0.5)">{l.rest}</text>
            </g>
          ))}
          <text x={0} y={78} fontFamily="monospace" fontSize="7.5" fill="rgba(139,92,246,0.55)">
            → 1,247 high-risk records flagged
          </text>
        </svg>
      </div>
    </div>
  );
}

function AuthWorkflow() {
  const steps = ["Sign Up", "Verify", "Login", "Session", "Logout"];
  return (
    <div style={{ width: "100%" }}>
      <p style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "12px" }}>
        Authentication Flow
      </p>
      <svg viewBox="0 0 280 80" width="100%" style={{ display: "block" }}>
        {steps.map((s, i) => {
          const x = i * 54;
          const active = i === 2;
          return (
            <g key={s}>
              <rect x={x} y={24} width={44} height={32} rx="6"
                fill={active ? "rgba(139,92,246,0.18)" : "rgba(255,255,255,0.04)"}
                stroke={active ? "rgba(139,92,246,0.5)" : "rgba(255,255,255,0.1)"}
                strokeWidth="0.8" />
              <text x={x + 22} y={44} textAnchor="middle"
                fill={active ? "#c084fc" : "rgba(255,255,255,0.55)"}
                fontSize="7.5" fontFamily="sans-serif" fontWeight={active ? "700" : "400"}>{s}</text>
              {i < steps.length - 1 && (
                <text x={x + 47} y={43} fill="rgba(139,92,246,0.5)" fontSize="12"
                  fontFamily="sans-serif">›</text>
              )}
            </g>
          );
        })}
        <text x="0" y="74" fill="rgba(255,255,255,0.2)" fontSize="7.5" fontFamily="sans-serif">
          5 authentication states documented
        </text>
      </svg>
    </div>
  );
}

/* ─── Slide data ─────────────────────────────────────────────── */

const slides = [
  {
    tag: "Process Design",
    title: "Fitco Operations Platform",
    desc: "Redesigned end-to-end workflows, implemented role-based systems, and built operational reporting that improved efficiency by 28%.",
    slug: "fitco-operations-platform",
    Visual: FitcoWorkflow,
    metrics: [
      { value: "28%", label: "Improvement in Operational Efficiency" },
      { value: "32%", label: "Reduction in Response Time" },
      { value: "25%", label: "Increase in Data Accuracy" },
      { value: "20+", label: "Hours Saved Monthly" },
    ],
  },
  {
    tag: "Workflow Analysis",
    title: "SLA & Escalation Optimization",
    desc: "Analysed support workflows, SLA performance, and escalation drivers. Implemented changes that reduced escalation rates by 28%.",
    slug: "sla-escalation-optimization",
    Visual: SLAWorkflow,
    metrics: [
      { value: "−28%", label: "Escalation Rate Reduction" },
      { value: "−19%", label: "Avg. Resolution Time" },
      { value: "94%", label: "First-Contact Resolution" },
      { value: "↑18pt", label: "CSAT Score Improvement" },
    ],
  },
  {
    tag: "Data Analysis",
    title: "Fraud Detection Analysis (SQL)",
    desc: "Built SQL queries to identify suspicious patterns and high-risk transactions, improving fraud detection accuracy and reducing false positives.",
    slug: "fraud-detection-analysis",
    Visual: FraudWorkflow,
    metrics: [
      { value: "1,247", label: "High-Risk Records Flagged" },
      { value: "↑Acc.", label: "Detection Accuracy Improved" },
      { value: "↓ FP", label: "False Positives Reduced" },
      { value: "3", label: "Query Patterns Built" },
    ],
  },
  {
    tag: "System Design",
    title: "User Flow & Authentication Design",
    desc: "Created user flows and authentication processes to streamline user sign-in and session management for secure, scalable access.",
    slug: "user-flow-authentication-design",
    Visual: AuthWorkflow,
    metrics: [
      { value: "5", label: "Auth States Documented" },
      { value: "100%", label: "Edge Case Coverage" },
      { value: "↓ Err", label: "Login Error Rate" },
      { value: "3×", label: "Faster Onboarding Flow" },
    ],
  },
];

/* ─── Slideshow ──────────────────────────────────────────────── */

export default function FeaturedSlideshow() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setCurrent(c => (c + 1) % slides.length), 4800);
    return () => clearInterval(t);
  }, [paused]);

  const slide = slides[current];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Card ── */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1.4fr 1fr",
        borderRadius: "20px",
        overflow: "hidden",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        minHeight: "260px",
      }}>

        {/* Left — title / desc / CTA */}
        <div style={{
          padding: "32px 28px",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          justifyContent: "space-between",
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <span style={{
              display: "inline-block",
              padding: "3px 10px", borderRadius: "4px",
              background: "rgba(139,92,246,0.12)",
              border: "1px solid rgba(139,92,246,0.25)",
              color: "#c084fc",
              fontSize: "9px", fontWeight: 700,
              letterSpacing: "0.06em", textTransform: "uppercase",
              width: "fit-content",
            }}>{slide.tag}</span>

            <h3 style={{ fontSize: "18px", fontWeight: 700, lineHeight: 1.25, color: "#fff" }}>
              {slide.title}
            </h3>

            <p style={{ fontSize: "13px", lineHeight: 1.65, color: "rgba(255,255,255,0.5)" }}>
              {slide.desc}
            </p>
          </div>

          <Link
            href={`/projects/${slide.slug}`}
            style={{
              display: "inline-flex", alignItems: "center", gap: "6px",
              fontSize: "13px", fontWeight: 600, color: "#8B5CF6",
              textDecoration: "none",
            }}
          >
            View Case Study ↗
          </Link>
        </div>

        {/* Center — workflow visual */}
        <div style={{
          padding: "32px 24px",
          borderLeft: "1px solid rgba(255,255,255,0.06)",
          borderRight: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          alignItems: "center",
          background: "rgba(0,0,0,0.2)",
        }}>
          <slide.Visual />
        </div>

        {/* Right — metrics */}
        <div style={{
          padding: "32px 24px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          alignContent: "center",
        }}>
          {slide.metrics.map((m) => (
            <div key={m.label} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <p style={{
                fontSize: "26px", fontWeight: 800, color: "#8B5CF6",
                letterSpacing: "-0.5px", lineHeight: 1,
              }}>{m.value}</p>
              <p style={{ fontSize: "10px", lineHeight: 1.4, color: "rgba(255,255,255,0.38)" }}>
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Progress dots ── */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "6px",
        marginTop: "20px",
      }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i); setPaused(true); }}
            style={{
              width: i === current ? "22px" : "6px",
              height: "6px",
              borderRadius: "3px",
              background: i === current ? "#8B5CF6" : "rgba(255,255,255,0.18)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "all 0.35s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}
