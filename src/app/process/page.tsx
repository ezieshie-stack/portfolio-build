import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { OpControlSystem } from "@/components/process/OpControlSystem";
import { Chip } from "@/components/ui/Chip";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata = { title: "Process | David Ezieshi" };

const STEPS: Array<{
  num: string;
  sub: string;
  title: string;
  desc: string;
  tags: string[];
}> = [
  {
    num: "01",
    sub: "Stakeholder discovery",
    title: "Elicit",
    desc: "I interview the people who run the process and walk it end to end. The objective is the underlying problem, not the surface complaint.",
    tags: [
      "Stakeholder Interviews",
      "Requirements Elicitation",
      "Current-State Walkthrough",
    ],
  },
  {
    num: "02",
    sub: "Process and data",
    title: "Model",
    desc: "I model the current state in BPMN and the data behind it. The picture lines up before any change is proposed.",
    tags: ["BPMN 2.0", "Data Modeling", "As-Is Mapping"],
  },
  {
    num: "03",
    sub: "To-be and requirements",
    title: "Design",
    desc: "I define the to-be process, the data structure, and the requirements. Each one is testable and tied to the business need.",
    tags: ["To-Be Design", "BRD / FRD", "Acceptance Criteria"],
  },
  {
    num: "04",
    sub: "Solution into production",
    title: "Deliver",
    desc: "I take the design through UAT and into production, with the documentation that makes it operable.",
    tags: [
      "User Acceptance Testing",
      "Solution Delivery",
      "Documentation",
    ],
  },
  {
    num: "05",
    sub: "Live evaluation",
    title: "Operate",
    desc: "I administer the live system, evaluate performance against the requirement, and improve what doesn't hold up.",
    tags: [
      "Platform Administration",
      "Performance Evaluation",
      "Continuous Improvement",
    ],
  },
];

const RESULTS: Array<{ val: string; label: string }> = [
  { val: "27", label: "Modules in production (FIIT Co.)" },
  { val: "0.86", label: "Churn model ROC-AUC (Telco)" },
  { val: "5,000+", label: "Records analyzed (Movies)" },
];

export default function ProcessPage() {
  return (
    <div className="pf-page">
      <div className="pf-shell">
        {/* Hero */}
        <section className="pf-proc-hero">
          <div className="pf-proc-herotext">
            <Eyebrow className="mb-[22px]">Process Framework</Eyebrow>
            <h1
              className="pf-page-title"
              style={{ fontSize: "clamp(40px, 4.6vw, 68px)" }}
            >
              Five phases from requirement to <em>live operation.</em>
            </h1>
            <p className="pf-page-intro" style={{ maxWidth: 620 }}>
              I run the same lifecycle on every engagement. Elicit what&rsquo;s
              needed. Model the process and the data. Deliver the solution.
              Operate it through evaluation. Click through the phases to see
              what happens at each one.
            </p>
          </div>
        </section>

        {/* Lifecycle Ring */}
        <section style={{ paddingBottom: 56 }}>
          <OpControlSystem />
        </section>

        {/* Execution Model */}
        <section style={{ paddingBottom: 24 }}>
          <Eyebrow className="mb-[22px]">Execution Model</Eyebrow>
          <div className="pf-steps">
            {STEPS.map((s) => (
              <article className="pf-stepblock" key={s.num}>
                <span className="num">{s.num}</span>
                <span className="div" />
                <div>
                  <p className="sub">{s.sub}</p>
                  <h2>{s.title}</h2>
                  <p>{s.desc}</p>
                  <div className="pf-steptags">
                    {s.tags.map((t) => (
                      <Chip key={t}>{t}</Chip>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Recent Results */}
        <section style={{ paddingTop: 24, paddingBottom: 8 }}>
          <Eyebrow className="mb-[22px]">Recent Results</Eyebrow>
          <div className="pf-resultgrid">
            {RESULTS.map((r) => (
              <article className="pf-resultcard" key={r.label}>
                <div className="top">
                  <span className="val">{r.val}</span>
                </div>
                <div className="div" />
                <span className="lab">{r.label}</span>
              </article>
            ))}
          </div>
          <Link
            href="/work"
            className="pf-textlink"
            style={{ marginTop: 28, display: "inline-flex" }}
          >
            See these phases applied. View Work.{" "}
            <ArrowRight size={15} aria-hidden />
          </Link>
        </section>
      </div>
    </div>
  );
}
