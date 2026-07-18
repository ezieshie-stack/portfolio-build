import Link from "next/link";
import {
  ArrowRight,
  CalendarClock,
  Globe,
  IdCard,
  ShieldCheck,
  GitCommitHorizontal,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FiitSubNav } from "@/components/work/fiitco/FiitSubNav";
import { FigFrame } from "@/components/work/fiitco/FigFrame";

export const metadata = {
  title: "FIIT Co. · Business Rules Model (A3) | David Ezieshi",
  description:
    "Business rules catalogue, constraints, derivations, and computations, plus the decision table governing booking flow.",
};

type RuleType = "constraint" | "derivation" | "computation";
type Rule = [string, ReactNode, RuleType];
type RuleGroup = { icon: LucideIcon; title: string; rules: Rule[] };

const RULE_GROUPS: RuleGroup[] = [
  {
    icon: CalendarClock,
    title: "Scheduling & buffer",
    rules: [
      [
        "BR-01",
        <>A booking is <b>rejected</b> if it starts before the instructor&apos;s previous class end time plus their travel <b>buffer</b>.</>,
        "constraint",
      ],
      [
        "BR-02",
        <>The applied buffer is <b>derived</b> from the instructor&apos;s <b>home studio</b> and the class type.</>,
        "derivation",
      ],
      ["BR-03", <>A class cannot be booked beyond its defined <b>capacity</b>.</>, "constraint"],
    ],
  },
  {
    icon: IdCard,
    title: "Membership & eligibility",
    rules: [
      [
        "BR-04",
        <>A member may only book classes their <b>membership tier</b> grants access to.</>,
        "constraint",
      ],
      [
        "BR-05",
        <>Eligible classes shown to a member are <b>derived</b> from tier access rules at browse time.</>,
        "derivation",
      ],
      [
        "BR-06",
        <>Remaining slots are <b>computed</b> as capacity minus confirmed bookings.</>,
        "computation",
      ],
    ],
  },
  {
    icon: ShieldCheck,
    title: "Access & approval",
    rules: [
      [
        "BR-07",
        <>A schedule change flagged <b>sensitive</b> stays <b>pending</b> until an owner approves it.</>,
        "constraint",
      ],
      [
        "BR-08",
        <>Whether approval is required is <b>derived</b> from the actor&apos;s <b>role</b> and the change type.</>,
        "derivation",
      ],
      [
        "BR-09",
        <>Every privileged action <b>must</b> be written to the audit log with actor and timestamp.</>,
        "constraint",
      ],
    ],
  },
  {
    icon: Globe,
    title: "Publishing",
    rules: [
      [
        "BR-10",
        <>A class page is <b>public</b> only when its <code>published</code> flag is true.</>,
        "constraint",
      ],
      [
        "BR-11",
        <>The public timetable is <b>derived</b> from published class pages, ordered by start time.</>,
        "derivation",
      ],
    ],
  },
];

const TYPE_LABEL: Record<RuleType, string> = {
  constraint: "Constraint",
  derivation: "Derivation",
  computation: "Computation",
};

const DT_COLS = ["Tier eligible?", "Buffer OK?", "Capacity left?", "Needs approval?"];

type Cell = [string, string];
type Row = [Cell, Cell, Cell, Cell, Cell];

const DT_ROWS: Row[] = [
  [["n", "No"], ["any", "-"], ["any", "-"], ["any", "-"], ["block", "Reject, not eligible"]],
  [["y", "Yes"], ["n", "No"], ["any", "-"], ["any", "-"], ["block", "Block, buffer conflict"]],
  [["y", "Yes"], ["y", "Yes"], ["n", "No"], ["any", "-"], ["block", "Reject, class full"]],
  [["y", "Yes"], ["y", "Yes"], ["y", "Yes"], ["y", "Yes"], ["allow", "Hold for approval"]],
  [["y", "Yes"], ["y", "Yes"], ["y", "Yes"], ["n", "No"], ["allow", "Confirm booking"]],
];

export default function FiitRulesPage() {
  return (
    <div className="pf-page fx-wide">
      <div className="pf-shell">
        <FiitSubNav active="rules" />

        <section className="pj-hero-head" style={{ marginTop: 28 }}>
          <Badge tone="violet" style={{ marginBottom: 16 }}>
            Artifact A3 · Business Rules Model
          </Badge>
          <h1 className="pf-page-title" style={{ fontSize: "clamp(30px,3.2vw,46px)" }}>
            The rules the system has to enforce.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 680 }}>
            Extracted from the process work and written as testable business
            rules, constraints, derivations, and computations, then folded into
            a decision table so the booking logic is unambiguous.
          </p>
        </section>

        <section className="pj-section" style={{ marginTop: 34 }}>
          <Eyebrow style={{ marginBottom: 18 }}>Rules catalogue</Eyebrow>
          {RULE_GROUPS.map((g) => {
            const Ico = g.icon;
            return (
              <div className="fx-rulegroup" key={g.title}>
                <div className="fx-rg-head">
                  <Ico size={18} aria-hidden />
                  <span className="fx-rg-title">{g.title}</span>
                  <span className="fx-rg-count">{g.rules.length} rules</span>
                </div>
                <div className="fx-rules">
                  {g.rules.map(([id, txt, type]) => (
                    <div className="fx-rule" key={id}>
                      <span className="fx-rule-id">{id}</span>
                      <span className="fx-rule-txt">{txt}</span>
                      <span className={"fx-rule-type " + type}>{TYPE_LABEL[type]}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        <section className="pj-section">
          <Eyebrow style={{ marginBottom: 8 }}>Decision table · Can this booking proceed?</Eyebrow>
          <p className="pj-section-sub">
            The scheduling and eligibility rules resolved into one deterministic
            decision. Conditions are evaluated left to right; the first matching
            row wins.
          </p>
          <FigFrame name="decision · booking_allowed" sub="first-hit policy">
            <div className="fig-scroll">
              <table className="fx-dtable">
                <thead>
                  <tr>
                    {DT_COLS.map((c) => (
                      <th key={c} className="cond">
                        {c}
                      </th>
                    ))}
                    <th className="act">Outcome</th>
                  </tr>
                </thead>
                <tbody>
                  {DT_ROWS.map((row, i) => (
                    <tr key={i}>
                      {row.slice(0, 4).map(([k, v], j) => (
                        <td key={j}>
                          <span className={"fx-dcell " + k}>{v}</span>
                        </td>
                      ))}
                      <td>
                        <span className={"fx-dact " + row[4][0]}>{row[4][1]}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FigFrame>
          <p className="pj-caption" style={{ marginTop: 14 }}>
            <GitCommitHorizontal size={13} aria-hidden /> Each outcome traces back to the rules above and forward to the scheduling process model.
          </p>
        </section>

        <Link href="/work/fiitco/docs" className="pj-next">
          <div>
            <span className="pj-next-lbl">Next artifact</span>
            <span className="pj-next-title">Documents · BRD, PRD, Stories, UAT</span>
          </div>
          <ArrowRight size={20} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
