import {
  LayoutDashboard,
  Sparkles,
  FileText,
  Workflow,
  type LucideIcon,
} from "lucide-react";

type Item = { label: string; icon: LucideIcon };

const items: Item[] = [
  { label: "Workflow Automation Systems", icon: Workflow },
  { label: "Operational Dashboards", icon: LayoutDashboard },
  { label: "AI-Assisted Operations", icon: Sparkles },
  { label: "Process Documentation Frameworks", icon: FileText },
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
