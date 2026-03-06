"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    const isDark = stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  if (!mounted) return <div className="h-9 w-9" />;

  return (
    <button
      onClick={toggle}
      className="cursor-pointer flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-glass)] transition-colors hover:bg-[var(--bg-card)]"
      aria-label="Toggle theme"
    >
      {dark ? (
        <Sun className="h-4 w-4 text-[var(--text-secondary)]" />
      ) : (
        <Moon className="h-4 w-4 text-[var(--text-secondary)]" />
      )}
    </button>
  );
}
