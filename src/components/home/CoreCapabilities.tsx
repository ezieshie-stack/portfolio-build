import {
  BarChart3,
  ClipboardList,
  Database,
  Settings,
  Target,
  Workflow,
} from "lucide-react";

export function CoreCapabilities() {
  const capabilities = [
    { label: "Business Analysis", icon: Database },
    { label: "Process Design", icon: Workflow },
    { label: "Workflow Optimization", icon: Target },
    { label: "Platform Administration", icon: Settings },
    { label: "Operational Analytics", icon: BarChart3 },
    { label: "Requirements Engineering", icon: ClipboardList },
  ];

  return (
    <section className="coreCapabilities">
      <p className="sectionEyebrow">Core Capabilities</p>

      <div className="capabilityGrid">
        {capabilities.map(({ label, icon: Icon }) => (
          <div className="capabilityCard" key={label}>
            <Icon size={22} />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
