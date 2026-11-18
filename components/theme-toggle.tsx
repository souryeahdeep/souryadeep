"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("theme");
    const dark =
      saved === "dark" ||
      (saved === null &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", dark);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsDark(dark);
  }, []);

  const toggle = () => {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("theme", next ? "dark" : "light");
    setIsDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="fixed top-6 right-6 z-50 rounded-full border border-[#3C4044]/20 bg-[#E1D5CB]/70 px-4 py-2 text-sm text-[#3C4044] backdrop-blur-md transition-colors hover:bg-[#E1D5CB] dark:border-[#DDDCDB]/20 dark:bg-[#4C5053]/70 dark:text-[#DDDCDB] dark:hover:bg-[#4C5053]"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? "Light mode" : "Dark mode"}
    </button>
  );
}