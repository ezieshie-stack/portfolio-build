"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "dark" | "light";
const STORAGE_KEY = "pf-theme";

function readStoredTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "light" ? "light" : "dark";
}

/**
 * Sun/moon segmented pill. Sets `data-theme` on <html> and persists to
 * localStorage("pf-theme"). Uses .ds-toggle / .ds-toggle__btn classes
 * from components.css. Returns null pre-mount to avoid hydration
 * mismatch — the pre-paint init script in layout.tsx handles applying
 * the theme before first paint.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    setTheme(readStoredTheme());
    setMounted(true);
  }, []);

  const apply = (next: Theme) => {
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* localStorage unavailable — theme still applies for the session */
    }
  };

  if (!mounted) return null;

  return (
    <div
      role="group"
      aria-label="Theme"
      className={`ds-toggle ${className ?? ""}`.trim()}
    >
      <button
        type="button"
        aria-label="Light theme"
        aria-pressed={theme === "light"}
        onClick={() => apply("light")}
        className={`ds-toggle__btn ${theme === "light" ? "on" : ""}`.trim()}
      >
        <Sun size={14} aria-hidden />
      </button>
      <button
        type="button"
        aria-label="Dark theme"
        aria-pressed={theme === "dark"}
        onClick={() => apply("dark")}
        className={`ds-toggle__btn ${theme === "dark" ? "on" : ""}`.trim()}
      >
        <Moon size={14} aria-hidden />
      </button>
    </div>
  );
}
