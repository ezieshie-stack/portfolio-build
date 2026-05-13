import {
  BarChart3,
  Database,
  Gauge,
  Target,
  Users,
  Workflow,
} from "lucide-react";

export function CoreCapabilities() {
  const capabilities = [
    { label: "Process Optimization", icon: Gauge },
    { label: "Workflow Design", icon: Workflow },
    { label: "Operational Reporting", icon: BarChart3 },
    { label: "Systems Analysis", icon: Database },
    { label: "Cross-Functional Coordination", icon: Users },
    { label: "Performance Improvement", icon: Target },
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
