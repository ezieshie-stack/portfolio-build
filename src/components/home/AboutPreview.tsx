import { ArrowUpRight, Brain, Layers3, Target } from "lucide-react";

export function AboutPreview() {
  const points = [
    {
      title: "Systems Thinker",
      text: "I connect people, processes, data, and tools to create clearer operational systems.",
      icon: Layers3,
    },
    {
      title: "Problem Solver",
      text: "I break down complex workflows and turn them into practical, structured solutions.",
      icon: Brain,
    },
    {
      title: "Impact Driven",
      text: "I focus on measurable outcomes that improve clarity, efficiency, and execution.",
      icon: Target,
    },
  ];

  return (
    <section className="aboutPreview">
      <div className="aboutPreviewCard">
        <div className="aboutPreviewCopy">
          <p className="sectionEyebrow">About Me</p>

          <h2>I turn unclear workflows into structured, measurable systems.</h2>

          <p>
            I’m David Ezieshi, an emerging Operations and Business Systems
            Analyst focused on process improvement, workflow design, data
            analysis, and operational execution. I build projects that show
            how systems, people, and data can work together more clearly.
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
