import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/reveal";
import ThemeToggle from "@/components/theme-toggle";
import FloatingDockDemo from "@/components/floating-dock-demo";
import Footer from "@/components/Footer";
import { sortedStories, formatDate, readingTime } from "@/lib/stories";

export const metadata: Metadata = {
  title: "Stories | Souryadeep",
  description:
    "Notes on backend development, system design and what I am learning along the way.",
};

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-[#DDDCDB] font-sans selection:bg-amber-500 dark:bg-[#3C4044]">
      <ThemeToggle />

      <main className="px-[clamp(14px,4vw,64px)] pt-24 pb-16">
        <div className="mx-auto w-full max-w-[860px]">
          {/* HEADER */}
          <Reveal>
            <Link
              href="/"
              className="font-sans text-sm font-semibold text-[#3C4044]/75 transition-colors duration-500 hover:text-[#FD7B41] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FD7B41] dark:text-[#DDDCDB]/75 dark:hover:text-[#FD7B41]"
            >
              ← Back home
            </Link>

            <h1 className="instrument-serif-regular mt-8 text-6xl text-[#3C4044] dark:text-[#DDDCDB] md:text-7xl">
              Stories<span className="text-[#FD7B41]">.</span>
            </h1>
            <p className="mt-6 max-w-[680px] font-sans text-base leading-7 text-[#3C4044]/75 dark:text-[#DDDCDB]/75 md:text-lg md:leading-8">
              Notes on backend development, system design and what I am{" "}
              <span className="font-semibold text-[#FD7B41]">learning</span>{" "}
              along the way.
            </p>
          </Reveal>

          {/* LIST */}
          <ul className="mt-12 flex flex-col">
            {sortedStories.map((s, i) => (
              <li
                key={s.slug}
                className="border-t border-[#3C4044]/15 last:border-b dark:border-[#DDDCDB]/15"
              >
                <Reveal delay={i * 0.05}>
                  <Link
                    href={`/stories/${s.slug}`}
                    className="group flex flex-col gap-2 py-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FD7B41] md:flex-row md:items-baseline md:justify-between md:gap-8"
                  >
                    <div className="min-w-0">
                      <h2 className="instrument-serif-regular text-3xl text-[#3C4044] transition-colors duration-500 group-hover:text-[#FD7B41] dark:text-[#DDDCDB]">
                        {s.title}
                      </h2>
                      <p className="mt-2 max-w-[560px] font-sans text-base leading-6 text-[#3C4044]/75 dark:text-[#DDDCDB]/75">
                        {s.excerpt}
                      </p>
                      {s.tags.length > 0 && (
                        <ul className="mt-3 flex flex-wrap gap-2">
                          {s.tags.map((tag) => (
                            <li
                              key={tag}
                              className="rounded-md border border-[#3C4044]/20 px-2 py-0.5 font-sans text-xs font-medium text-[#3C4044] dark:border-[#DDDCDB]/20 dark:text-[#DDDCDB]"
                            >
                              {tag}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <p className="shrink-0 font-sans text-sm text-[#3C4044]/75 dark:text-[#DDDCDB]/75 md:text-right">
                      <time dateTime={s.date}>{formatDate(s.date)}</time>
                      <br />
                      {readingTime(s)} min read
                    </p>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>

          {sortedStories.length === 0 && (
            <p className="mt-12 font-sans text-base text-[#3C4044]/75 dark:text-[#DDDCDB]/75">
              No stories yet. The first one is on its way.
            </p>
          )}
        </div>
      </main>

      <FloatingDockDemo />
      <Footer />
    </div>
  );
}