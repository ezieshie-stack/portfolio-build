import Link from "next/link";
import { ArrowUpRight, GitCompare, MessagesSquare, Rocket } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Eyebrow";

const POINTS: Array<{ title: string; body: string; icon: React.ReactNode }> = [
  {
    title: "Requirements",
    body: "I sit with stakeholders, walk the current process, and write requirements that are testable, traceable, and tied to the business need.",
    icon: <MessagesSquare size={20} aria-hidden />,
  },
  {
    title: "Modeling",
    body: "I model the process in BPMN and the data underneath. The design and the system line up before anything gets built.",
    icon: <GitCompare size={20} aria-hidden />,
  },
  {
    title: "Delivery & Operation",
    body: "I take the work from design through UAT into production. I'm accountable for whether it works once it's live.",
    icon: <Rocket size={20} aria-hidden />,
  },
];

export function AboutPreview() {
  return (
    <section className="pf-section">
      <div className="pf-shell">
        <Card glow padding="44px" className="pf-about-card">
          <div className="pf-about-grid">
            <div>
              <Eyebrow className="mb-[18px]">About</Eyebrow>
              <h2 className="pf-about-title">
                I work the requirement, model it, deliver it, and run it live.
              </h2>
              <p className="pf-about-body">
                I&rsquo;m David Ezieshi, a business analyst in Toronto. I work
                the requirements lifecycle end to end. I sit with stakeholders
                and write down what&rsquo;s actually needed. I model the process
                and the data behind it. I validate the build against the
                business need through UAT. I deliver it into production, and I
                stay accountable for whether it holds in real use.
              </p>
              <Link href="/about" className="pf-textlink">
                More About Me <ArrowUpRight size={16} aria-hidden />
              </Link>
            </div>
            <div className="pf-about-points">
              {POINTS.map((p) => (
                <div className="pf-about-point" key={p.title}>
                  <span className="pf-point-ic" aria-hidden>
                    {p.icon}
                  </span>
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
