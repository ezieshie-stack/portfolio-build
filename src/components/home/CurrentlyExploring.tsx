import {
  Award,
  BarChart3,
  Bot,
  Database,
  Workflow,
} from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";

const ITEMS: Array<{ label: string; icon: React.ReactNode }> = [
  {
    label: "Advanced SQL & Window Functions",
    icon: <Database size={18} aria-hidden />,
  },
  {
    label: "RPA with UiPath & Power Automate",
    icon: <Bot size={18} aria-hidden />,
  },
  { label: "ServiceNow Workflows", icon: <Workflow size={18} aria-hidden /> },
  {
    label: "BI Dashboards (Power BI / Tableau)",
    icon: <BarChart3 size={18} aria-hidden />,
  },
  { label: "CTFL (ISTQB Foundation)", icon: <Award size={18} aria-hidden /> },
];

export function CurrentlyExploring() {
  return (
    <section className="pf-section">
      <div className="pf-shell">
        <Eyebrow className="mb-[22px]">Currently Exploring</Eyebrow>
        <div className="pf-explore-list">
          {ITEMS.map((item) => (
            <div className="pf-explore-row" key={item.label}>
              <span className="pf-explore-ic" aria-hidden>
                {item.icon}
              </span>
              <span className="lbl">{item.label}</span>
              <span className="tag">In progress</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
