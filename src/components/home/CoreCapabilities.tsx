import {
  Filter,
  GitCompare,
  MessagesSquare,
  Rocket,
  Waypoints,
  Workflow,
} from "lucide-react";

export function CoreCapabilities() {
  const capabilities = [
    { label: "Process Diagnosis", icon: Workflow },
    { label: "Workflow Redesign", icon: GitCompare },
    { label: "BPMN Mapping", icon: Waypoints },
    { label: "Bottleneck Analysis", icon: Filter },
    { label: "Requirements Elicitation", icon: MessagesSquare },
    { label: "Solution Delivery", icon: Rocket },
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
