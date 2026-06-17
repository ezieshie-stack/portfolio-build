import {
  BarChart2,
  Bot,
  Braces,
  Database,
  Frame,
  GitFork,
  LayoutDashboard,
  PieChart,
  Sheet,
  Sigma,
  SquareKanban,
  Ticket,
  Workflow,
  Wrench,
  Zap,
} from "lucide-react";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { Marquee } from "@/components/ui/Marquee";

const TOOLS = [
  { label: "Lucidchart / Visio", icon: <GitFork size={20} /> },
  { label: "Miro / FigJam", icon: <Frame size={20} /> },
  { label: "Figma", icon: <BrandIcon name="figma" size={20} /> },
  { label: "Excel / Google Sheets", icon: <Sheet size={20} /> },
  { label: "PostgreSQL", icon: <Database size={20} /> },
  { label: "Python / pandas", icon: <Braces size={20} /> },
  { label: "R", icon: <Sigma size={20} /> },
  { label: "Streamlit", icon: <LayoutDashboard size={20} /> },
  { label: "Tableau", icon: <BarChart2 size={20} /> },
  { label: "Power BI / Looker", icon: <PieChart size={20} /> },
  { label: "Retool", icon: <Wrench size={20} /> },
  { label: "Zapier / Make", icon: <Zap size={20} /> },
  { label: "UiPath", icon: <Bot size={20} /> },
  { label: "Power Automate", icon: <Workflow size={20} /> },
  { label: "ServiceNow", icon: <Ticket size={20} /> },
  { label: "Jira · Notion · Cursor", icon: <SquareKanban size={20} /> },
];

export function ToolsCarousel() {
  return <Marquee items={TOOLS} title="Tools & Technologies" />;
}
