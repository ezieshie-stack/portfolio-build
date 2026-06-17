import {
  ClipboardCheck,
  Database,
  Search,
  Users,
} from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";

const PRINCIPLES: Array<{
  num: string;
  icon: React.ReactNode;
  claim: string;
  body: string;
}> = [
  {
    num: "01",
    icon: <Search size={22} aria-hidden />,
    claim: "The stated problem is rarely the real one.",
    body: "I dig past the first complaint to what's actually wrong. Redesigning around the wrong problem is the most expensive mistake an analyst can make.",
  },
  {
    num: "02",
    icon: <Users size={22} aria-hidden />,
    claim: "You learn a process from the people who run it.",
    body: "The real workflow isn't in the documentation. It's in the heads of the people doing the work every day. That's where I start, not with assumptions.",
  },
  {
    num: "03",
    icon: <Database size={22} aria-hidden />,
    claim: "Data modeling matters as much as process modeling.",
    body: "Most problems that look like broken workflows are broken data underneath. I model both. Fixing the steps without fixing the data just moves the problem.",
  },
  {
    num: "04",
    icon: <ClipboardCheck size={22} aria-hidden />,
    claim: "A requirement isn't done until it's testable.",
    body: "If you can't check whether the solution met it, it wasn't a requirement. It was a wish. I write requirements so anyone can tell, later, whether the work delivered.",
  },
];

export function MyApproach() {
  return (
    <section className="pf-section">
      <div className="pf-shell">
        <div className="pf-approach-head">
          <Eyebrow>My Approach</Eyebrow>
          <h2 className="pf-approach-title">
            What I hold to on every engagement.
          </h2>
          <p className="pf-approach-sub">
            Four things I work by. They&rsquo;re the difference between analysis
            that looks finished and a solution that holds up in production.
          </p>
        </div>

        <div className="pf-principles">
          {PRINCIPLES.map((p) => (
            <div className="pf-principle" key={p.num}>
              <div className="pf-principle-top">
                <span className="pf-principle-ic" aria-hidden>
                  {p.icon}
                </span>
                <span className="pf-principle-num">{p.num}</span>
              </div>
              <h3>{p.claim}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
