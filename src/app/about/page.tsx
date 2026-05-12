import Image from "next/image";
import {
  ArrowUpRight,
  BarChart3,
  Clock,
  Database,
  FileText,
  Gauge,
  Layers3,
  LineChart,
  Repeat,
  Target,
  Users,
  Workflow,
} from "lucide-react";
import { site } from "@/lib/content";

export const metadata = { title: "About — Portfolio" };

export default function AboutPage() {
  const stats = [
    { value: "12+", label: "Operational Workflows Improved", icon: Workflow },
    { value: "25%", label: "Data Accuracy Improvement", icon: Database },
    { value: "20+", label: "Hours Saved Monthly", icon: Clock },
    { value: "4+", label: "Core Systems Platforms", icon: Layers3 },
  ];

  const experience = [
    {
      year: "2024 — Present",
      title: "Operations & Business Systems",
      text: "Focused on workflow redesign, operational visibility, reporting systems, and cross-functional process alignment.",
    },
    {
      year: "2023 — Present",
      title: "Workflow Optimization Projects",
      text: "Built operational structures that reduced reporting delays, improved accountability, and streamlined execution.",
    },
    {
      year: "2023 — Present",
      title: "Systems Analysis & Reporting",
      text: "Created reporting frameworks, dashboard systems, and process documentation for operational clarity.",
    },
  ];

  const strengths = [
    { label: "Workflow Design", icon: Workflow },
    { label: "Operational Reporting", icon: BarChart3 },
    { label: "Systems Analysis", icon: Database },
    { label: "Process Optimization", icon: Gauge },
    { label: "Cross-Functional Coordination", icon: Users },
    { label: "Dashboard Systems", icon: LineChart },
    { label: "Documentation Frameworks", icon: FileText },
    { label: "Continuous Improvement", icon: Repeat },
  ];

  const drivers = [
    {
      title: "Clarity in Complexity",
      text: "I enjoy breaking unclear workflows into structured, understandable systems.",
      icon: Layers3,
    },
    {
      title: "People & Process",
      text: "I believe better systems should help teams work with more alignment and less friction.",
      icon: Users,
    },
    {
      title: "Data-Informed Decisions",
      text: "I use data and evidence to uncover insights and guide operational improvements.",
      icon: BarChart3,
    },
    {
      title: "Impact & Growth",
      text: "I’m driven by measurable improvement, continuous learning, and practical execution.",
      icon: Target,
    },
  ];

  const education = [
    {
      school: "Bow Valley College",
      program: "Business Administration Diploma",
      date: "Jan 2019 — Dec 2019",
    },
    {
      school: "Bow Valley College",
      program: "Bachelor of Management",
      date: "Mar 2020 — Apr 2022",
    },
  ];

  return (
    <div className="aboutPage">
      <section className="aboutHero">
        <div className="aboutHeroCopy">
          <p className="sectionEyebrow">About Me</p>
          <h1>
            Building operational systems that create <span>clarity.</span>
          </h1>
          <p>
            I’m David Ezieshi, an Operations & Business Systems Analyst focused
            on process improvement, workflow optimization, systems thinking,
            and operational execution.
          </p>
        </div>

        <div
          className="hero-portrait-column relative flex items-end justify-center pointer-events-none"
          style={{ zIndex: 10 }}
        >
          <div
            aria-hidden
            className="hero-portrait-glow absolute pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(124,58,237,0.28), transparent 68%)",
              filter: "blur(70px)",
              zIndex: -1,
            }}
          />
          <Image
            src="/portrait.png"
            alt={`${site.brand.name} portrait`}
            width={1040}
            height={1300}
            priority
            sizes="(min-width: 1440px) 560px, (min-width: 1024px) 480px, (min-width: 768px) 380px, 90vw"
            className="hero-portrait object-contain"
            style={{
              objectPosition: "center bottom",
              filter: "drop-shadow(0 30px 90px rgba(124,58,237,0.25))",
              maskImage:
                "linear-gradient(to bottom, black 78%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 78%, transparent 100%)",
            }}
          />
        </div>
      </section>

      <section className="statsGrid">
        {stats.map(({ value, label, icon: Icon }) => (
          <div className="statCard" key={label}>
            <Icon size={28} />
            <h3>{value}</h3>
            <p>{label}</p>
          </div>
        ))}
      </section>

      <section className="aboutSplit">
        <div>
          <p className="sectionEyebrow">Experience</p>
          <h2>
            Systems thinking <br /> backed by execution.
          </h2>
          <p>
            My work focuses on operational analysis, workflow redesign,
            reporting systems, and cross-functional collaboration.
          </p>
        </div>

        <div className="timeline">
          {experience.map((item) => (
            <div className="timelineItem" key={item.title}>
              <span>{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="drivesMe">
        <p className="sectionEyebrow">What Drives Me</p>

        <div className="drivesGrid">
          {drivers.map(({ title, text, icon: Icon }) => (
            <div className="driveCard" key={title}>
              <Icon size={24} />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="strengthsSection">
        <p className="sectionEyebrow">Core Strengths</p>

        <div className="strengthsGrid">
          {strengths.map(({ label, icon: Icon }) => (
            <div className="strengthCard" key={label}>
              <Icon size={24} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="educationSection">
        <div>
          <p className="sectionEyebrow">Education</p>
          <h2>Learning shaped by business, systems, and execution.</h2>
        </div>

        <div className="educationTimeline">
          {education.map((item) => (
            <div className="educationItem" key={item.program}>
              <div className="educationDot" />
              <span>{item.date}</span>
              <h3>{item.program}</h3>
              <p>{item.school}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="approachSection">
        <div>
          <p className="sectionEyebrow">My Approach</p>
          <h2>
            Structure. <br />
            Clarity. <br />
            Execution.
          </h2>
        </div>

        <div>
          <p>
            I approach operational systems with a balance of analytical
            thinking and practical execution. My focus is not only on
            identifying inefficiencies, but on designing systems that teams can
            actually use.
          </p>

          <p>
            Whether it’s process documentation, dashboard reporting, workflow
            optimization, or operational redesign, I aim to create systems that
            improve visibility, simplify collaboration, and drive measurable
            business outcomes.
          </p>

          <a href="/contact">
            Let’s Connect <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}
