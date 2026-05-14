import {
  SiAtlassian,
  SiFigma,
  SiGooglesheets,
  SiLooker,
  SiLucid,
  SiMiro,
  SiPostgresql,
  SiPython,
  SiR,
  SiRetool,
  SiStreamlit,
  SiUipath,
  SiZapier,
} from "@icons-pack/react-simple-icons";
import { BarChart2, Ticket, Zap, type LucideIcon } from "lucide-react";
import type { ComponentType } from "react";

type IconComponent = ComponentType<{ size?: number; color?: string }> | LucideIcon;

type Tool = { name: string; Icon: IconComponent };

/**
 * Operations & Process Analyst toolkit (16 cards).
 * Grouped (carousel scrolls in this order):
 *   1. Process & Workflow
 *   2. Analysis & Data
 *   3. Reporting & Build
 *   4. Prototyping
 *   5. Operations Platforms
 *   6. Working Environment
 */
const tools: Tool[] = [
  // Process & Workflow
  { name: "Lucidchart / Visio", Icon: SiLucid },
  { name: "Miro / FigJam", Icon: SiMiro },
  { name: "Figma", Icon: SiFigma },
  // Analysis & Data
  { name: "Excel / Google Sheets", Icon: SiGooglesheets },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Python / Jupyter / pandas", Icon: SiPython },
  { name: "R", Icon: SiR },
  // Reporting & Build
  { name: "Streamlit", Icon: SiStreamlit },
  { name: "Tableau", Icon: BarChart2 },
  { name: "Power BI / Looker Studio", Icon: SiLooker },
  // Prototyping
  { name: "Retool", Icon: SiRetool },
  { name: "Zapier / Make", Icon: SiZapier },
  // Operations Platforms
  { name: "UiPath", Icon: SiUipath },
  { name: "Power Automate", Icon: Zap },
  { name: "ServiceNow", Icon: Ticket },
  // Working Environment
  { name: "Jira · Notion · Claude · Cursor", Icon: SiAtlassian },
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
