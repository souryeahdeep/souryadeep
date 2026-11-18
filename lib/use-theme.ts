"use client";

import { useCallback, useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { withThemeTransition } from "@/lib/theme-transition";

export function useTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("theme");
    const dark =
      saved === "dark" ||
      (saved === null &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", dark);
    setIsDark(dark);
  }, []);

  const toggle = useCallback(() => {
    const next = !document.documentElement.classList.contains("dark");

    withThemeTransition(() => {
      document.documentElement.classList.toggle("dark", next);
      // flushSync makes React update before the browser takes the "after" snapshot
      flushSync(() => setIsDark(next));
    });

    window.localStorage.setItem("theme", next ? "dark" : "light");
  }, []);

  return { isDark, toggle };
}