import {
  BarChart3,
  Bot,
  Database,
  Workflow,
  type LucideIcon,
} from "lucide-react";

type Item = { label: string; icon: LucideIcon };

const items: Item[] = [
  { label: "Advanced SQL & Window Functions", icon: Database },
  { label: "RPA with UiPath & Power Automate", icon: Bot },
  { label: "ServiceNow Workflows", icon: Workflow },
  { label: "BI Dashboards (Tableau / Power BI)", icon: BarChart3 },
];

export function CurrentlyExploring() {
  return (
    <section className="currentlyExploring">
      <p className="sectionEyebrow">Currently Exploring</p>

      <div className="exploringGrid">
        {items.map(({ label, icon: Icon }) => (
          <div className="exploringCard" key={label}>
            <Icon />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
