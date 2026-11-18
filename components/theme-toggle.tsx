"use client";

import { useTheme } from "@/lib/use-theme";

export default function ThemeToggle({
  isDark,
  onToggle,
}: {
  isDark?: boolean;
  onToggle?: () => void;
}) {
  // Pages that don't pass props (About, Projects...) get their own state
  const own = useTheme();
  const dark = isDark ?? own.isDark;
  const toggle = onToggle ?? own.toggle;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
      className="fixed top-6 right-6 z-50 grid h-10 w-10 place-items-center rounded-full border border-[#3C4044]/20 bg-[#E1D5CB]/70 text-[#3C4044] backdrop-blur-md transition-colors duration-500 hover:border-[#FD7B41] hover:text-[#FD7B41] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FD7B41] dark:border-[#DDDCDB]/20 dark:bg-[#4C5053]/70 dark:text-[#DDDCDB] dark:hover:border-[#FD7B41] dark:hover:text-[#FD7B41]"
    >
      {/* Moon: shown in light mode */}
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="col-start-1 row-start-1 h-5 w-5 rotate-0 scale-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] dark:rotate-90 dark:scale-0"
      >
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
      </svg>

      {/* Sun: shown in dark mode */}
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="col-start-1 row-start-1 h-5 w-5 -rotate-90 scale-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] dark:rotate-0 dark:scale-100"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    </button>
  );
}