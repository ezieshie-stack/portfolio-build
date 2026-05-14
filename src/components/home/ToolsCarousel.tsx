import {
  SiConfluence,
  SiJira,
  SiLooker,
  SiLucid,
  SiMiro,
  SiNotion,
} from "@icons-pack/react-simple-icons";
import {
  BarChart3,
  Database,
  FileSpreadsheet,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { ComponentType } from "react";

type IconComponent = ComponentType<{ size?: number; color?: string }> | LucideIcon;

type Tool = { name: string; Icon: IconComponent };

const tools: Tool[] = [
  { name: "Excel", Icon: FileSpreadsheet },
  { name: "SQL", Icon: Database },
  { name: "Power BI", Icon: BarChart3 },
  { name: "Looker Studio", Icon: SiLooker },
  { name: "Jira", Icon: SiJira },
  { name: "Confluence", Icon: SiConfluence },
  { name: "Notion", Icon: SiNotion },
  { name: "Lucidchart", Icon: SiLucid },
  { name: "Miro", Icon: SiMiro },
  { name: "Visio", Icon: Workflow },
];

export function ToolsCarousel() {
  return (
    <section className="toolsSection">
      <div className="toolsTrack">
        {[...tools, ...tools].map(({ name, Icon }, index) => (
          <div className="toolCard" key={`${name}-${index}`}>
            <span className="toolIcon">
              <Icon size={22} color="currentColor" />
            </span>
            <span>{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
