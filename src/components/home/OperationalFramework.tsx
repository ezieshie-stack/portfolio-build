import { Reveal } from "@/components/Reveal";
import { SystemCluster } from "@/components/home/SystemCluster";

export function OperationalFramework() {
  return (
    <Reveal as="section" className="operational-framework">
      <p className="operational-framework__eyebrow">Operational Framework</p>
      <div className="operational-framework__cluster">
        <SystemCluster />
      </div>
    </Reveal>
  );
}
