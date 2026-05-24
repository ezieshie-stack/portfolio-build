import {
  ArrowLeftRight,
  ArrowUpRight,
  Award,
  BarChart3,
  ClipboardCheck,
  Database,
  FileSpreadsheet,
  FileText,
  GraduationCap,
  MessagesSquare,
  Rocket,
  Search,
  Users,
  Waypoints,
  Workflow,
  Wrench,
} from "lucide-react";
import { LiveImage } from "@/components/cms/LiveImage";
import { LiveText } from "@/components/cms/LiveText";

export const metadata = { title: "About — David Ezieshi" };

export default function AboutPage() {
  const stats = [
    { value: "ECBA", label: "IIBA Certified", icon: Award },
    { value: "3.8", label: "GPA · Dean's List", icon: GraduationCap },
    { value: "2", label: "Live Apps Shipped", icon: Rocket },
    { value: "5,000+", label: "Records Analyzed", icon: Database },
  ];

  const experience = [
    {
      year: "Jan 2026 – Present",
      title: "Business Analyst & Platform Administrator · FIIT Co.",
      text: "Running and managing a two-application Next.js + Convex ecosystem (an internal class-management platform plus a public site) for an industry partner through my George Brown co-op. Authored the engagement's BA Report and translated it into working configuration: forms, workflows, and permissions, from requirements through deployment.",
    },
    {
      year: "Apr 2024 – Present",
      title: "Sales Ambassador · Ralph Lauren",
      text: "At Ralph Lauren I read what a client needs, build the complete outfit around it, and make every visit feel effortless. That consultative service shows in the results: I ranked among the store's top performers at 184% of sales goal and $815 in sales per hour against a $450 target.",
    },
    {
      year: "Dec 2023 – Mar 2024",
      title: "Sales Consultant · Canadian Tire Financial Services",
      text: "Reduced processing delays by escalating recurring data-quality patterns I identified during compliance-validated credit application reviews.",
    },
    {
      year: "Apr 2021 – Aug 2022",
      title: "Reporter & Programme Coordinator · Kaftan TV",
      text: "Improved broadcast operational reliability by 25% by streamlining editorial workflows and coordinating handoffs across technical and production crews under strict deadlines.",
    },
  ];

  const strengths = [
    { label: "Requirements Elicitation", icon: MessagesSquare },
    { label: "BRD / FRD Authoring", icon: FileSpreadsheet },
    { label: "BPMN Process Mapping", icon: Waypoints },
    { label: "SQL & Data Integrity", icon: Database },
    { label: "User Acceptance Testing", icon: ClipboardCheck },
    { label: "Power BI / Tableau", icon: BarChart3 },
    { label: "Workflow Configuration", icon: Workflow },
    { label: "Stakeholder Management", icon: Users },
  ];

  const drivers = [
    {
      title: "Diagnostic-First",
      text: "I map the current state before proposing a change. Redesigning the wrong thing costs more than taking the time to look.",
      icon: Search,
    },
    {
      title: "Builder's Hands",
      text: "I don't wait for an engineering sprint to validate an idea. I prototype the tool, prove it works, and hand it off clean.",
      icon: Wrench,
    },
    {
      title: "Plain-Language Documentation",
      text: "I write so the people who use a system can actually understand it, a habit carried over from my communications background.",
      icon: FileText,
    },
    {
      title: "Bridge Operator",
      text: "I translate between business stakeholders and technical implementation, speaking both languages well enough to be useful in both rooms.",
      icon: ArrowLeftRight,
    },
  ];

  const education = [
    {
      program: "ECBA — Entry Certificate in Business Analysis",
      school: "IIBA (International Institute of Business Analysis)",
      date: "Certification",
    },
    {
      program: "PG Cert., Information Systems & Business Analysis",
      school: "George Brown College · Dean's List, 3.8 / 4",
      date: "2025 – 2026",
    },
    {
      program: "PG Cert., Marketing Management & Digital Media",
      school: "George Brown College · Dean's List, 3.7 / 4",
      date: "2023 – 2024",
    },
    {
      program: "B.Sc., Mass Communication",
      school: "Mountain Top University, Nigeria · Second Class Upper",
      date: "2017 – 2021",
    },
  ];

  return (
    <div className="aboutPage">
      <section className="aboutHero">
        <div className="aboutHeroCopy">
          <LiveText
            section="about"
            field="tag"
            fallback="About Me"
            as="p"
            className="sectionEyebrow"
          />
          <h1>
            I diagnose, document, and build the systems teams{" "}
            <span>rely on.</span>
          </h1>
          <p>
            I&apos;m David Ezieshi, an early-career Operations &amp; Process
            Analyst based in Toronto. I own the full lifecycle, from
            stakeholder requirements and BRD authoring to workflow design,
            data integrity, and live administration, and I&apos;m currently
            running and managing a two-application Next.js + Convex platform
            for an industry partner through my George Brown co-op.
          </p>
        </div>

        <div className="aboutHeroImage">
          <LiveImage
            slot="about-portrait"
            fallbackSrc="/portrait-2.png"
            alt="David Ezieshi"
            width={800}
            height={1000}
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
            Systems thinking, <br /> backed by real delivery.
          </h2>
          <p>
            From a live BA co-op to luxury retail and broadcast operations, my
            experience spans requirements, workflow design, data integrity, and
            client-facing service.
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
          <p className="sectionEyebrow">Education &amp; Certifications</p>
          <h2>Grounded in business analysis and systems.</h2>
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
            Diagnose. <br />
            Redesign. <br />
            Prototype.
          </h2>
        </div>

        <div>
          <p>
            I diagnose before I design. I sit with stakeholders, map the
            current workflow, and quantify where time or quality is leaking
            before proposing a change.
          </p>

          <p>
            Then I redesign the process and, when the engineering queue
            can&apos;t move fast enough, prototype the tool that delivers it.
            The goal is always a system the team can actually use, documented
            in plain language and handed off clean.
          </p>

          <a href="/contact">
            Let&apos;s Connect <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}
