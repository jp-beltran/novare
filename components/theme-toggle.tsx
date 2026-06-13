"use client";

import { useEffect, useState } from "react";
import {
  applyTheme,
  getStoredTheme,
  nextTheme,
  type Theme,
} from "@/util/theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const storedTheme = getStoredTheme(window.sessionStorage) ?? "dark";
    applyTheme(storedTheme, document.documentElement);
    setTheme(storedTheme);
  }, []);

  function toggleTheme() {
    const newTheme = nextTheme(theme);
    applyTheme(newTheme, document.documentElement, window.sessionStorage);
    setTheme(newTheme);
  }

  const nextThemeLabel = theme === "dark" ? "claro" : "escuro";

  return (
    <button
      aria-label={`Ativar modo ${nextThemeLabel}`}
      className="rounded-full grid h-11 w-11 shrink-0 place-items-center rounded border border-outline-variant bg-surface-container text-on-surface transition hover:border-primary hover:text-primary"
      onClick={toggleTheme}
      title={`Ativar modo ${nextThemeLabel}`}
      type="button"
    >
      <span className="icon" aria-hidden="true">
        {theme === "dark" ? "light_mode" : "dark_mode"}
      </span>
    </button>
  );
}
