import { home } from "@/lib/content";

export function OperationsDiagram() {
  const { centerLabel, nodes } = home.diagram;

  return (
    <div className="relative w-full aspect-square max-w-[520px] mx-auto">
      <div className="absolute inset-[18%] rounded-full overflow-hidden border-2"
        style={{
          borderColor: "rgba(139, 92, 246, 0.4)",
          background:
            "radial-gradient(circle at 30% 30%, rgba(139,92,246,0.25), rgba(20,20,30,0.9))",
          boxShadow: "0 0 60px rgba(139, 92, 246, 0.3)",
        }}
      >
        <div className="w-full h-full flex flex-col items-center justify-center text-center px-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[color:var(--text-dim)] mb-2">
            Center
          </span>
          <span className="text-base font-semibold text-white leading-tight">
            {centerLabel}
          </span>
        </div>
      </div>

      {nodes.map((node) => {
        const positionStyle = {
          "top-left": "top-0 left-0",
          "top-right": "top-0 right-0",
          "bottom-left": "bottom-0 left-0",
          "bottom-right": "bottom-0 right-0",
        }[node.position];

        return (
          <div
            key={node.label}
            className={`absolute ${positionStyle} max-w-[40%] glass-card !rounded-2xl !p-3 text-[11px] leading-tight`}
          >
            <div className="flex items-start gap-2">
              <span className="status-dot mt-1 shrink-0" />
              <span className="text-white font-medium">{node.label}</span>
            </div>
          </div>
        );
      })}

      <svg
        aria-hidden
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <line
          x1="20"
          y1="15"
          x2="40"
          y2="35"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="0.3"
          strokeDasharray="1.5 1.5"
        />
        <line
          x1="80"
          y1="15"
          x2="60"
          y2="35"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="0.3"
          strokeDasharray="1.5 1.5"
        />
        <line
          x1="20"
          y1="85"
          x2="40"
          y2="65"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="0.3"
          strokeDasharray="1.5 1.5"
        />
        <line
          x1="80"
          y1="85"
          x2="60"
          y2="65"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="0.3"
          strokeDasharray="1.5 1.5"
        />
      </svg>
    </div>
  );
}
