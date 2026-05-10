import { home } from "@/lib/content";

const cardPosition: Record<string, string> = {
  "top-left": "top-0 left-0",
  "top-right": "top-0 right-0",
  "bottom-left": "bottom-0 left-0",
  "bottom-right": "bottom-0 right-0",
};

const lineEnds: Record<string, { x1: number; y1: number; x2: number; y2: number }> = {
  "top-left": { x1: 18, y1: 10, x2: 33, y2: 33 },
  "top-right": { x1: 82, y1: 10, x2: 67, y2: 33 },
  "bottom-left": { x1: 18, y1: 90, x2: 33, y2: 67 },
  "bottom-right": { x1: 82, y1: 90, x2: 67, y2: 67 },
};

export function OperationsDiagram() {
  const { centerLabel, nodes } = home.diagram;

  return (
    <div className="relative w-full aspect-square max-w-[520px] mx-auto">
      <svg
        aria-hidden
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {nodes.map((node) => {
          const ends = lineEnds[node.position];
          return (
            <line
              key={`line-${node.position}`}
              x1={ends.x1}
              y1={ends.y1}
              x2={ends.x2}
              y2={ends.y2}
              stroke="rgba(139, 92, 246, 0.45)"
              strokeWidth="0.4"
              strokeDasharray="1.4 1.4"
              vectorEffect="non-scaling-stroke"
            />
          );
        })}
      </svg>

      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[42%] aspect-square rounded-full flex flex-col items-center justify-center text-center px-4"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(139,92,246,0.3), rgba(20,20,30,0.92))",
          border: "1px solid rgba(139, 92, 246, 0.4)",
          boxShadow: "0 0 60px rgba(139, 92, 246, 0.3)",
        }}
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-[color:var(--text-dim)] mb-2">
          Center
        </span>
        <span className="text-[13px] font-semibold text-white leading-tight">
          {centerLabel}
        </span>
      </div>

      {nodes.map((node) => (
        <div
          key={node.label}
          className={`absolute ${cardPosition[node.position]} w-[42%] rounded-2xl px-3 py-2 text-[11px] leading-tight border`}
          style={{
            background: "rgba(13, 13, 13, 0.85)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderColor: "var(--glass-border)",
          }}
        >
          <div className="flex items-start gap-2">
            <span className="status-dot mt-1 shrink-0" />
            <span className="text-white font-medium">{node.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
