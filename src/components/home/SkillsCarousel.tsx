import {
  Activity,
  ArrowLeftRight,
  BarChart2,
  BookOpen,
  ClipboardCheck,
  Compass,
  FileCode,
  FileText,
  Filter,
  GitBranch,
  GitCompare,
  Kanban,
  Layers,
  ListChecks,
  Network,
  RefreshCw,
  Scale,
  Sparkles,
  Timer,
  TrendingDown,
  type LucideIcon,
} from "lucide-react";

type Skill = { name: string; Icon: LucideIcon };

/**
 * Skills carousel — the methodologies and competencies behind the tool stack.
 * Grouped (in order) by specialty per the BA matrix:
 *   1. Operations
 *   2. Business Systems (BSA)
 *   3. Process
 *   4. Data / BI
 *   5. Agile Product
 */
const skills: Skill[] = [
  // Operations
  { name: "Capacity Modeling", Icon: Activity },
  { name: "Bottleneck Identification", Icon: Filter },
  { name: "Cost-Benefit Analysis", Icon: Scale },
  { name: "SLA Tracking", Icon: Timer },
  // Business Systems Analyst (BSA)
  { name: "API & Data Mapping", Icon: ArrowLeftRight },
  { name: "System Architecture", Icon: Network },
  { name: "Technical User Stories", Icon: FileText },
  { name: "User Acceptance Testing", Icon: ClipboardCheck },
  // Process
  { name: "As-Is / To-Be Mapping", Icon: GitCompare },
  { name: "BPMN 2.0", Icon: GitBranch },
  { name: "Lean / Six Sigma", Icon: TrendingDown },
  { name: "Change Management", Icon: RefreshCw },
  // Data / BI
  { name: "Data Cleaning & Wrangling", Icon: Sparkles },
  { name: "Statistical Analysis", Icon: BarChart2 },
  { name: "Data Storytelling", Icon: BookOpen },
  { name: "Data Modeling", Icon: Layers },
  // Agile Product
  { name: "Backlog Grooming", Icon: ListChecks },
  { name: "Scrum / Kanban", Icon: Kanban },
  { name: "Gherkin Syntax", Icon: FileCode },
  { name: "Competitor Benchmarking", Icon: Compass },
];

export function SkillsCarousel() {
  return (
    <section className="toolsSection skillsSection">
      <div className="toolsTrack">
        {[...skills, ...skills].map(({ name, Icon }, index) => (
          <div className="toolCard" key={`${name}-${index}`}>
            <span className="toolIcon">
              <Icon size={22} />
            </span>
            <span>{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
