import { Reveal } from "@/components/Reveal";
import { SystemCluster } from "@/components/home/SystemCluster";

export function OperationalFramework() {
  return (
    <Reveal
      as="section"
      className="md:hidden w-full"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "40px 0 8px",
      }}
    >
      <p
        className="text-center mb-7"
        style={{
          fontSize: "12px",
          letterSpacing: "0.45em",
          textTransform: "uppercase",
          color: "rgb(167, 139, 250)",
        }}
      >
        Operational Framework
      </p>
      <SystemCluster />
    </Reveal>
  );
}
