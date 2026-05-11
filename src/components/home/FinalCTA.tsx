import { ArrowUpRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="finalCTA">
      <h2>Let’s Build Better Operational Systems.</h2>

      <p>
        I’m open to opportunities in operations, systems analysis, process
        improvement, and business analysis.
      </p>

      <div className="ctaActions">
        <a href="/contact">
          Let’s Connect <ArrowUpRight size={16} />
        </a>
        <a href="/resume.pdf">View Resume</a>
      </div>
    </section>
  );
}
