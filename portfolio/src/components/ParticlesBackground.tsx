"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return (
    // Outer wrapper guarantees absolute positioning regardless of what tsparticles renders
    <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
      <Particles
        id="tsparticles"
        style={{ width: "100%", height: "100%" }}
        options={{
          fullScreen: false,
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          particles: {
            color: { value: ["#ffffff", "#c4b5fd", "#a855f7"] },
            number: { value: 30, density: { enable: false } },
            shape: { type: "circle" },
            opacity: {
              value: { min: 0.03, max: 0.2 },
              animation: { enable: true, speed: 0.18, sync: false },
            },
            size: {
              value: { min: 0.35, max: 1.2 },
            },
            move: {
              enable: true,
              speed: 0.22,
              direction: "none",
              random: true,
              straight: false,
              outModes: { default: "out" },
            },
            links: { enable: false },
          },
          interactivity: {
            events: {
              onClick: { enable: false },
              onHover: { enable: false },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
