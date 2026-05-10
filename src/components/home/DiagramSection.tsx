import { Reveal } from "@/components/Reveal";
import { OperationsDiagram } from "./OperationsDiagram";

export function DiagramSection() {
  return (
    <Reveal as="section" className="py-16 flex justify-center">
      <OperationsDiagram />
    </Reveal>
  );
}
