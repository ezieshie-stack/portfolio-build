import { ArrowUpRight, Hammer, Search, Workflow } from "lucide-react";

export function AboutPreview() {
  const points = [
    {
      title: "I Diagnose",
      text: "I sit with stakeholders, walk the current process, and quantify exactly where time, money, or quality is leaking.",
      icon: Search,
    },
    {
      title: "I Redesign",
      text: "I draw the to-be state in BPMN with swimlanes, gateways, and handoffs, so the fix is visual before it's built.",
      icon: Workflow,
    },
    {
      title: "I Build",
      text: "When the engineering queue can't move fast enough, I prototype the internal tool myself and hand it off when it's ready to harden.",
      icon: Hammer,
    },
  ];

  return (
    <section className="aboutPreview">
      <div className="aboutPreviewCard">
        <div className="aboutPreviewCopy">
          <p className="sectionEyebrow">About Me</p>

          <h2>I diagnose the workflow, then ship the tool that fixes it.</h2>

          <p>
            I&apos;m David Ezieshi, an early-career Operations &amp; Process
            Analyst. I diagnose operational bottlenecks, redesign workflows in
            BPMN, and prototype the internal tools that ship the fix. My
            projects show how a single analyst, with the right tools and a
            clear scope, can close gaps that usually wait for an engineering
            sprint.
          </p>

          <a href="/about" className="textLink">
            More About Me <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="aboutPreviewPoints">
          {points.map(({ title, text, icon: Icon }) => (
            <div className="aboutPoint" key={title}>
              <Icon size={20} />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
