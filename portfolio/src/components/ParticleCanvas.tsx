"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  alpha: number;
  color: string;
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let animFrame: number;
    let w = 0;
    let h = 0;

    function resize() {
      if (!canvas) return;
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener("resize", resize, { passive: true });

    function makeParticle(): Particle {
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 1.5 + 0.4,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.45 + 0.08,
        color: Math.random() > 0.82 ? "#8B5CF6" : "#FFFFFF",
      };
    }

    for (let i = 0; i < 150; i++) {
      particles.push(makeParticle());
    }

    function animate() {
      ctx!.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0 || p.x > w) p.speedX *= -1;
        if (p.y < 0 || p.y > h) p.speedY *= -1;
        ctx!.globalAlpha = p.alpha;
        ctx!.fillStyle = p.color;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx!.fill();
      }
      ctx!.globalAlpha = 1;
      animFrame = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -2,
        pointerEvents: "none",
      }}
    />
  );
}
