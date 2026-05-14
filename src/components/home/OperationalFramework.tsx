import { Reveal } from "@/components/Reveal";
import { SystemCluster } from "@/components/home/SystemCluster";
import { home as homeDefault } from "@/lib/content";

type DiagramData = {
  centerLabel: string;
  centerIcon: string;
  nodes: ReadonlyArray<{
    label: string;
    position: string;
    icon: string;
  }>;
};

type MetricCardData = {
  label: string;
  value: string;
  sublabel: string;
};

export function OperationalFramework({
  diagram = homeDefault.diagram,
  metricCard = homeDefault.metricCard,
}: {
  diagram?: DiagramData;
  metricCard?: MetricCardData;
} = {}) {
  return (
    <Reveal as="section" className="operational-framework">
      <p className="operational-framework__eyebrow">My Approach</p>
      <div className="operational-framework__cluster">
        <SystemCluster diagram={diagram} metricCard={metricCard} />
      </div>
    </Reveal>
  );
}
