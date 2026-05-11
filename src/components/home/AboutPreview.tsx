import { ArrowUpRight } from "lucide-react";

export function AboutPreview() {
  return (
    <section className="aboutPreview">
      <div className="aboutPreviewInner">
        <p className="sectionEyebrow">About Me</p>

        <div className="aboutPreviewGrid">
          <h2>
            I turn unclear workflows into structured, measurable systems.
          </h2>

          <div className="aboutPreviewCopy">
            <p>
              I’m David Ezieshi, an emerging Operations and Business Systems
              Analyst focused on process improvement, workflow design, data
              analysis, and operational execution. I build projects that show
              how systems, people, and data can work together more clearly.
            </p>

            <a href="/about" className="aboutPreviewLink">
              More About Me <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
