type Step = { number: string; title: string; description: string };

export function StepWheel({ steps }: { steps: readonly Step[] }) {
  const radius = 38;
  const cx = 50;
  const cy = 50;
  const positions = steps.map((_, i) => {
    const angle = (i / steps.length) * 2 * Math.PI - Math.PI / 2;
    return {
      x: cx + radius * Math.cos(angle),
      y: cy + radius * Math.sin(angle),
    };
  });

  return (
    <div className="relative w-full aspect-square max-w-[480px] mx-auto">
      <svg
        aria-hidden
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
      >
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          fill="none"
          stroke="rgba(139,92,246,0.25)"
          strokeWidth="0.4"
          strokeDasharray="1.5 1.5"
        />
      </svg>

      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[34%] aspect-square rounded-full flex flex-col items-center justify-center text-center"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(139,92,246,0.35), rgba(20,20,30,0.95))",
          border: "1px solid rgba(139,92,246,0.4)",
          boxShadow: "0 0 60px rgba(139, 92, 246, 0.3)",
        }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-[color:var(--text-dim)] mb-1">
          Process
        </span>
        <span className="text-base font-semibold text-white">5 Steps</span>
      </div>

      {positions.map((pos, i) => (
        <div
          key={steps[i].number}
          className="absolute -translate-x-1/2 -translate-y-1/2 w-[20%] aspect-square rounded-full flex flex-col items-center justify-center text-center glass-card"
          style={{ left: `${pos.x}%`, top: `${pos.y}%`, padding: 0 }}
        >
          <span className="text-[10px] text-[color:var(--primary)] font-mono mb-1">
            {steps[i].number}
          </span>
          <span className="text-xs font-semibold leading-tight px-1">
            {steps[i].title}
          </span>
        </div>
      ))}
    </div>
  );
}
