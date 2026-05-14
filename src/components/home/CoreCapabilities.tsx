import {
  Filter,
  GitCompare,
  Sparkles,
  Waypoints,
  Workflow,
  Wrench,
} from "lucide-react";

export function CoreCapabilities() {
  const capabilities = [
    { label: "Process Diagnosis", icon: Workflow },
    { label: "Workflow Redesign", icon: GitCompare },
    { label: "BPMN Mapping", icon: Waypoints },
    { label: "Bottleneck Analysis", icon: Filter },
    { label: "Rapid Prototyping", icon: Sparkles },
    { label: "Internal Tooling", icon: Wrench },
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
