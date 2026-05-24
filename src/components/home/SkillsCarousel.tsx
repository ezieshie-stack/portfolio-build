import {
  ArrowLeftRight,
  Bot,
  BookOpen,
  ClipboardCheck,
  Database,
  FileText,
  GitCompare,
  Hammer,
  MessagesSquare,
  Recycle,
  Scale,
  Search,
  Sparkles,
  Timer,
  TrendingUp,
  Waypoints,
  type LucideIcon,
} from "lucide-react";

type Skill = { name: string; Icon: LucideIcon };

/**
 * Operations & Process Analyst skillset (16 cards).
 * Grouped (carousel scrolls in this order):
 *   1. Process Analysis
 *   2. Business Analysis Practice
 *   3. Operations Practice
 *   4. Analytical
 *   5. Prototyping & Build
 */
const skills: Skill[] = [
  // Process Analysis
  { name: "As-Is / To-Be Workflow Mapping", Icon: GitCompare },
  { name: "BPMN 2.0 Diagramming", Icon: Waypoints },
  { name: "SLA & Bottleneck Diagnostics", Icon: Timer },
  { name: "Stakeholder Interviews", Icon: MessagesSquare },
  // Business Analysis Practice
  { name: "Requirements Elicitation", Icon: FileText },
  { name: "User Acceptance Testing (UAT)", Icon: ClipboardCheck },
  { name: "Process Improvement", Icon: TrendingUp },
  // Operations Practice
  { name: "RPA Workflow Design", Icon: Bot },
  { name: "Standard Operating Procedures (SOPs)", Icon: BookOpen },
  { name: "Root Cause Analysis", Icon: Search },
  { name: "Continuous Improvement (Lean)", Icon: Recycle },
  // Analytical
  { name: "SQL Analysis (Window Functions, Aggregations)", Icon: Database },
  { name: "Risk Scoring & Feature Engineering", Icon: Scale },
  { name: "ETL Pipeline Design", Icon: ArrowLeftRight },
  // Prototyping & Build
  { name: "AI-Accelerated Prototyping", Icon: Sparkles },
  { name: "Internal Tool Prototyping", Icon: Hammer },
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
