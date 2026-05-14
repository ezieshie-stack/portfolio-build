import {
  ArrowLeftRight,
  Bug,
  Calculator,
  ClipboardCheck,
  Layers,
  MessagesSquare,
  Network,
  Rocket,
  Search,
  Sigma,
  Sparkles,
  Timer,
  Waypoints,
  Workflow,
  type LucideIcon,
} from "lucide-react";

type Skill = { name: string; Icon: LucideIcon };

/**
 * Mid-Level Skillset — grouped (in order) by:
 *   1. Business Intelligence Architect
 *   2. Automation & Efficiency Lead
 */
const skills: Skill[] = [
  // Business Intelligence Architect
  { name: "Common Table Expressions", Icon: Layers },
  { name: "Window Functions", Icon: Sigma },
  { name: "Semantic Layer Calculation", Icon: Calculator },
  { name: "Star Schema Navigation", Icon: Network },
  { name: "Data Lineage Auditing", Icon: Search },
  // Automation & Efficiency Lead
  { name: "To-Be Workflow Optimization", Icon: Workflow },
  { name: "BPMN 2.0 Compliance Mapping", Icon: Waypoints },
  { name: "SLA Bottleneck Diagnostics", Icon: Timer },
  { name: "User Acceptance Testing", Icon: ClipboardCheck },
  { name: "Requirements Elicitation", Icon: MessagesSquare },
  { name: "AI UI Prototyping", Icon: Sparkles },
  { name: "API Variable Mapping", Icon: ArrowLeftRight },
  { name: "Automated Error Triage", Icon: Bug },
  { name: "Independent Feature Delivery", Icon: Rocket },
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
