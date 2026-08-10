"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

function readTheme(): Theme {
  const saved = window.localStorage.getItem("aaxrp-theme");
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    queueMicrotask(() => setTheme(readTheme()));
  }, []);

  const toggleTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
    const root = document.documentElement;
    const next: Theme = root.dataset.theme === "dark" ? "light" : "dark";
    root.style.setProperty("--theme-x", `${event.clientX}px`);
    root.style.setProperty("--theme-y", `${event.clientY}px`);
    const applyTheme = () => {
      root.dataset.theme = next;
      window.localStorage.setItem("aaxrp-theme", next);
      setTheme(next);
    };
    const transitionDocument = document as Document & { startViewTransition?: (update: () => void) => void };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !transitionDocument.startViewTransition) {
      applyTheme();
      return;
    }
    transitionDocument.startViewTransition(applyTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Use ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Use ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
    </button>
  );
}
