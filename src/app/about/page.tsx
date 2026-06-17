import Image from "next/image";
import {
  ArrowLeftRight,
  ArrowUpRight,
  Award,
  BarChart3,
  ClipboardCheck,
  Database,
  FileText,
  GitCompare,
  GraduationCap,
  MessagesSquare,
  Rocket,
  Search,
  Settings,
  Users,
  Waypoints,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata = { title: "About | David Ezieshi" };

const STATS: Array<{ icon: React.ReactNode; value: string; label: string }> = [
  { icon: <Award size={22} aria-hidden />, value: "ECBA", label: "IIBA Certified" },
  {
    icon: <GraduationCap size={22} aria-hidden />,
    value: "3.81",
    label: "GPA · Dean's List",
  },
  { icon: <Rocket size={22} aria-hidden />, value: "2", label: "Production Systems Delivered" },
  { icon: <Users size={22} aria-hidden />, value: "6", label: "Analyst Team Led" },
];

const EXPERIENCE: Array<{ date: string; role: string; body: string }> = [
  {
    date: "Feb 2026 – Present",
    role: "Business Analyst & Platform Administrator · FIIT Co.",
    body: "I led the analyst team on a two-application Next.js and Convex platform for an industry partner through my George Brown placement. The platform runs as an internal class-management system and a public site. I authored the engagement's BRD, PRD, and process design, then turned them into the working configuration. That meant the forms, workflows, permissions, and CMS. After the team rolled off, I was retained as the sole administrator. I now operate and improve the platform in production.",
  },
  {
    date: "Apr 2024 – Present",
    role: "Brand Ambassador · Ralph Lauren",
    body: "I assess what each client needs and build the complete look around it. The numbers carry the result. I hit 184% of my sales goal and $815 in sales per hour against a $450 target, among the top in the store.",
  },
  {
    date: "Dec 2023 – Mar 2024",
    role: "Sales Consultant · Canadian Tire Financial Services",
    body: "I reviewed credit-card applications under compliance validation. I identified a recurring pattern of incomplete and incorrect submissions and escalated it for follow-up.",
  },
  {
    date: "Apr 2021 – Aug 2022",
    role: "Reporter & Programme Coordinator · Kaftan TV",
    body: "I ran the daily news segment to a hard broadcast deadline. I coordinated reporters and production handoffs across the technical and editorial crews to keep it on air.",
  },
];

const DRIVES: Array<{ icon: React.ReactNode; title: string; body: string }> = [
  {
    icon: <Search size={22} aria-hidden />,
    title: "Diagnose before designing",
    body: "I map what's actually happening before I propose a change. Redesigning around the wrong problem costs more than taking the time to look.",
  },
  {
    icon: <Rocket size={22} aria-hidden />,
    title: "Own it through operation",
    body: "I carry a problem from the first interview to the live system, and I stay accountable for whether it holds up. Being retained to operate what my team delivered is what I'm proudest of, because the work held in real use.",
  },
  {
    icon: <FileText size={22} aria-hidden />,
    title: "Write it plainly",
    body: "I document so the people who run the system can understand it. Plain language is part of the deliverable.",
  },
  {
    icon: <ArrowLeftRight size={22} aria-hidden />,
    title: "Useful in both rooms",
    body: "I translate between the business side and the technical side. I know enough of each language to be credible in both.",
  },
];

const STRENGTHS: Array<{ icon: React.ReactNode; label: string }> = [
  { icon: <MessagesSquare size={16} aria-hidden />, label: "Requirements Elicitation" },
  { icon: <FileText size={16} aria-hidden />, label: "BRD / FRD Authoring" },
  { icon: <Waypoints size={16} aria-hidden />, label: "BPMN Process Modeling" },
  { icon: <GitCompare size={16} aria-hidden />, label: "Data Modeling" },
  { icon: <Database size={16} aria-hidden />, label: "SQL Analysis" },
  { icon: <ClipboardCheck size={16} aria-hidden />, label: "User Acceptance Testing" },
  { icon: <BarChart3 size={16} aria-hidden />, label: "Power BI / Tableau" },
  { icon: <Workflow size={16} aria-hidden />, label: "Workflow Configuration" },
  { icon: <Users size={16} aria-hidden />, label: "Stakeholder Engagement" },
  { icon: <Settings size={16} aria-hidden />, label: "Platform Administration" },
];

const EDUCATION: Array<{ period: string; degree: string; sub: string }> = [
  {
    period: "Certification, 2026",
    degree: "ECBA, Entry Certificate in Business Analysis",
    sub: "IIBA (International Institute of Business Analysis)",
  },
  {
    period: "2025 – 2026",
    degree: "PG Cert., Information Systems & Business Analysis",
    sub: "George Brown College. Dean's List, 3.81 / 4",
  },
  {
    period: "2023 – 2024",
    degree: "PG Cert., Marketing Management & Digital Media",
    sub: "George Brown College. Dean's List",
  },
  {
    period: "2017 – 2021",
    degree: "B.Sc., Mass Communication",
    sub: "Mountain Top University, Nigeria. Second Class Upper",
  },
];

export default function AboutPage() {
  return (
    <div className="pf-page">
      <div className="pf-shell">
        {/* Hero */}
        <section className="pf-about-hero">
          <div className="pf-about-body">
            <Eyebrow className="mb-[22px]">About</Eyebrow>
            <h1
              className="pf-page-title"
              style={{ fontSize: "clamp(38px, 4.4vw, 62px)" }}
            >
              Requirements through delivery, and the live operation after.
            </h1>
            <p>
              I&rsquo;m David Ezieshi, a business analyst in Toronto. I work the
              requirements lifecycle end to end. I sit with stakeholders, write
              what&rsquo;s actually needed, model the process and the data
              behind it, and validate through UAT before anything gets shipped.
              After delivery I stay on. On my current engagement with FIIT Co.,
              I led the analyst team through four scopes for a client, and I
              was kept on as the sole administrator after the team rolled off.
            </p>
            <div className="pf-btnrow" style={{ marginTop: 8 }}>
              <Button
                variant="primary"
                size="lg"
                pill
                href="/contact"
                iconRight={<ArrowUpRight size={16} aria-hidden />}
              >
                Let&rsquo;s Connect
              </Button>
              <Button variant="secondary" size="lg" pill href="/work">
                View My Work
              </Button>
            </div>
          </div>
          <div className="pf-about-portrait">
            <Image
              src="/portrait-2.png"
              alt="David Ezieshi portrait"
              width={800}
              height={1000}
              priority
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </section>

        {/* Stat row */}
        <div className="pf-statgrid" style={{ marginBottom: 72 }}>
          {STATS.map((s) => (
            <div className="pf-statcard" key={s.label}>
              <span className="ic" aria-hidden>
                {s.icon}
              </span>
              <span className="v">{s.value}</span>
              <span className="l">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Experience */}
        <section className="pf-exp-sec">
          <div>
            <Eyebrow className="mb-[22px]">Experience</Eyebrow>
            <h2 className="pf-exp-title">
              Four roles across business analysis, retail, financial services,
              and broadcast.
            </h2>
            <p className="pf-exp-blurb">
              A live BA engagement, a luxury retail floor, a financial services
              compliance review, and a daily news broadcast. Different work each
              time. The same instinct: read the process and the people in it,
              then make it run.
            </p>
          </div>
          <div className="pf-exp-list">
            {EXPERIENCE.map((e) => (
              <div className="pf-expitem" key={e.role}>
                <span className="date">{e.date}</span>
                <h3>{e.role}</h3>
                <p>{e.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What Drives Me */}
        <section style={{ marginBottom: 72 }}>
          <Eyebrow className="mb-[22px]">What Drives Me</Eyebrow>
          <div className="pf-drives">
            {DRIVES.map((d) => (
              <div className="pf-drivecard" key={d.title}>
                <span className="ic" aria-hidden>
                  {d.icon}
                </span>
                <h3>{d.title}</h3>
                <p>{d.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Core Strengths */}
        <section style={{ marginBottom: 72 }}>
          <Eyebrow className="mb-[22px]">Core Strengths</Eyebrow>
          <div className="pf-strengthlist">
            {STRENGTHS.map((s, i) => (
              <div className="pf-strengthrow" key={s.label}>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <span className="lbl">{s.label}</span>
                <span aria-hidden>{s.icon}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Certifications */}
        <Card glow className="pf-edu-card">
          <div className="pf-edu-grid">
            <div>
              <Eyebrow className="mb-[22px]">
                Education &amp; Certifications
              </Eyebrow>
              <h2 className="pf-edu-title">
                Grounded in business analysis and systems.
              </h2>
            </div>
            <div className="pf-edu-list">
              {EDUCATION.map((e) => (
                <div className="pf-eduitem" key={e.degree}>
                  <span className="dot" aria-hidden />
                  <div>
                    <span className="period">{e.period}</span>
                    <h3>{e.degree}</h3>
                    <span className="sub">{e.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
