import {
  ClipboardCheck,
  GitCompare,
  MessagesSquare,
  Rocket,
  Settings,
  Waypoints,
} from "lucide-react";
import { CapabilityCard } from "@/components/ui/CapabilityCard";
import { Eyebrow } from "@/components/ui/Eyebrow";

const CAPS: Array<{ label: string; icon: React.ReactNode }> = [
  { label: "Requirements Elicitation", icon: <MessagesSquare size={22} aria-hidden /> },
  { label: "Process & Data Modeling", icon: <GitCompare size={22} aria-hidden /> },
  { label: "BPMN Diagramming", icon: <Waypoints size={22} aria-hidden /> },
  { label: "User Acceptance Testing", icon: <ClipboardCheck size={22} aria-hidden /> },
  { label: "Solution Delivery", icon: <Rocket size={22} aria-hidden /> },
  { label: "Platform Administration", icon: <Settings size={22} aria-hidden /> },
];

export function CoreCapabilities() {
  return (
    <section className="pf-section">
      <div className="pf-shell">
        <Eyebrow>Core Capabilities</Eyebrow>
        <div className="pf-capgrid">
          {CAPS.map((c) => (
            <CapabilityCard key={c.label} icon={c.icon} label={c.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
