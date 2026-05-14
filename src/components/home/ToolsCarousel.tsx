import {
  SiClaude,
  SiFigma,
  SiJira,
  SiLucid,
  SiMiro,
  SiPostman,
  SiRetool,
  SiSnowflake,
  SiStreamlit,
  SiZapier,
} from "@icons-pack/react-simple-icons";
import {
  BarChart2,
  BarChart3,
  Database,
  type LucideIcon,
} from "lucide-react";
import type { ComponentType } from "react";

type IconComponent = ComponentType<{ size?: number; color?: string }> | LucideIcon;

type Tool = { name: string; Icon: IconComponent };

/**
 * Mid-Level Core Toolkit — grouped (in order) by:
 *   1. Data & BI Platforms
 *   2. Workflow & UI Design
 *   3. Automation & Rapid Frontends
 *   4. Agile & AI Environments
 *
 * Slashed labels (e.g. "Snowflake / BigQuery") deliberately preserve
 * grouping from the source spec — each card represents a tool family
 * the operator works in interchangeably.
 */
const tools: Tool[] = [
  // Data & BI Platforms
  { name: "PostgreSQL / SQL Server / MySQL", Icon: Database },
  { name: "Power BI", Icon: BarChart3 },
  { name: "Tableau", Icon: BarChart2 },
  { name: "Snowflake / BigQuery", Icon: SiSnowflake },
  // Workflow & UI Design
  { name: "Lucidchart / Visio", Icon: SiLucid },
  { name: "Miro / FigJam", Icon: SiMiro },
  { name: "Figma", Icon: SiFigma },
  // Automation & Rapid Frontends
  { name: "Retool", Icon: SiRetool },
  { name: "Streamlit", Icon: SiStreamlit },
  { name: "Zapier / Make", Icon: SiZapier },
  // Agile & AI Environments
  { name: "Jira / Linear", Icon: SiJira },
  { name: "Postman", Icon: SiPostman },
  { name: "Claude / Cursor", Icon: SiClaude },
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
