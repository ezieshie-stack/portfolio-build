"use client";

import { useEffect, useRef } from "react";

/**
 * Full-page cursor-reactive constellation. Fixed layer behind all page
 * content. Reads --accent from CSS every frame so it themes automatically.
 * Ported from insights.html inline <script> per docs/INSIGHTS_PAGE.md §3.
 */
export function Constellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

    type Pt = { x: number; y: number; vx: number; vy: number; r: number };
    let W = 0;
    let H = 0;
    let pts: Pt[] = [];
    let raf = 0;
    const mouse = { x: -9999, y: -9999 };

    function readAccent(): string {
      const raw = getComputedStyle(document.documentElement)
        .getPropertyValue("--accent")
        .trim();
      return raw || "#8b5cf6";
    }

    function seed() {
      const area = W * H;
      const target = Math.max(28, Math.min(70, Math.floor(area / 26000)));
      pts = Array.from({ length: target }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.32,
        vy: (Math.random() - 0.5) * 0.32,
        r: 1 + Math.random() * 1.4,
      }));
    }

    function resize() {
      W = window.innerWidth;
      H = window.innerHeight;
      cv!.width = Math.floor(W * dpr);
      cv!.height = Math.floor(H * dpr);
      cv!.style.width = `${W}px`;
      cv!.style.height = `${H}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    }

    function hexToRgba(hex: string, a: number): string {
      const h = hex.replace("#", "");
      const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
      const r = parseInt(full.slice(0, 2), 16);
      const g = parseInt(full.slice(2, 4), 16);
      const b = parseInt(full.slice(4, 6), 16);
      return `rgba(${r},${g},${b},${a})`;
    }

    function tick() {
      const accent = readAccent();
      ctx!.clearRect(0, 0, W, H);

      // drift
      if (!reduce) {
        for (const p of pts) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > W) p.vx *= -1;
          if (p.y < 0 || p.y > H) p.vy *= -1;
        }
      }

      // lines
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i];
          const b = pts[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d > 130) continue;
          const base = (1 - d / 130) * 0.12;
          const near =
            Math.hypot(a.x - mouse.x, a.y - mouse.y) < 190 ||
            Math.hypot(b.x - mouse.x, b.y - mouse.y) < 190;
          const alpha = near ? base * (0.5 / 0.12) : base;
          ctx!.strokeStyle = hexToRgba(accent, alpha);
          ctx!.lineWidth = 1;
          ctx!.beginPath();
          ctx!.moveTo(a.x, a.y);
          ctx!.lineTo(b.x, b.y);
          ctx!.stroke();
        }
      }

      // points + cursor lines
      for (const p of pts) {
        const dm = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        const near = dm < 190;
        const alpha = near ? 0.32 + 0.58 * (1 - dm / 190) : 0.32;
        const r = near ? p.r + 0.8 : p.r;
        ctx!.fillStyle = hexToRgba(accent, alpha);
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx!.fill();

        if (near) {
          const ca = 0.55 * (1 - dm / 190);
          ctx!.strokeStyle = hexToRgba(accent, ca);
          ctx!.lineWidth = 1;
          ctx!.beginPath();
          ctx!.moveTo(p.x, p.y);
          ctx!.lineTo(mouse.x, mouse.y);
          ctx!.stroke();
        }
      }

      raf = requestAnimationFrame(tick);
    }

    function onMove(e: PointerEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }
    function onLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    resize();
    raf = requestAnimationFrame(tick);
    window.addEventListener("resize", resize);
    // Pointer events unify mouse (desktop) + touch (mobile) + stylus.
    // On mobile, pointerdown/pointermove fire while a finger is down;
    // pointerup/pointercancel + mouseleave reset the interaction point.
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerdown", onMove);
    window.addEventListener("pointerup", onLeave);
    window.addEventListener("pointercancel", onLeave);
    window.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onMove);
      window.removeEventListener("pointerup", onLeave);
      window.removeEventListener("pointercancel", onLeave);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} id="constellation" aria-hidden />;
}
