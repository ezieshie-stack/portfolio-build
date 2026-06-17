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
 * localStorage(`pf-theme`). Renders nothing until mounted to avoid
 * hydration mismatch — the pre-paint init script in layout.tsx handles
 * applying the theme before first paint.
 *
 * Not yet wired into the live nav (Phase 0); Phase 1 surfaces it in the
 * redesigned Nav.
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
      // localStorage unavailable (private mode) — theme still applies for the session
    }
  };

  if (!mounted) return null;

  return (
    <div
      role="group"
      aria-label="Theme"
      className={[
        "inline-flex items-center gap-0 rounded-full p-0.5",
        "border border-[color:var(--border-strong)] bg-[color:var(--surface-2)]",
        className ?? "",
      ].join(" ")}
    >
      <button
        type="button"
        aria-label="Light theme"
        aria-pressed={theme === "light"}
        onClick={() => apply("light")}
        className={[
          "h-7 w-7 inline-flex items-center justify-center rounded-full transition-colors",
          theme === "light"
            ? "bg-[color:var(--accent-solid)] text-[color:var(--text-on-accent)]"
            : "text-[color:var(--text-body)] hover:text-[color:var(--text-heading)]",
        ].join(" ")}
      >
        <Sun size={14} aria-hidden />
      </button>
      <button
        type="button"
        aria-label="Dark theme"
        aria-pressed={theme === "dark"}
        onClick={() => apply("dark")}
        className={[
          "h-7 w-7 inline-flex items-center justify-center rounded-full transition-colors",
          theme === "dark"
            ? "bg-[color:var(--accent-solid)] text-[color:var(--text-on-accent)]"
            : "text-[color:var(--text-body)] hover:text-[color:var(--text-heading)]",
        ].join(" ")}
      >
        <Moon size={14} aria-hidden />
      </button>
    </div>
  );
}
