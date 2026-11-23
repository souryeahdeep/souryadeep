/* eslint-disable @next/next/no-img-element */
"use client";

import { Fragment, useEffect, useState, type CSSProperties } from "react";
import dynamic from "next/dynamic";
import { useReducedMotion } from "framer-motion";
import { UseSmoothScroll } from "smooth-motion";
import FloatingDockDemo from "../components/floating-dock-demo";
import { AnnotatedText } from "@/components/ui/annotated-text";
import Footer from "@/components/Footer";
import { CaseStudyFlipStack } from "@/components/ui/case-study-flip-stack";
import About from "@/components/About";
import MoltenMetal from "@/components/MoltenMetal";
import { Tooltip } from "@/components/ui/tooltip-card";
import Link from "next/link";
import { Sunflower } from "next/font/google";
import { SmoothCursorDemo } from "@/components/smooth-cursor-demo";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import Image from "next/image";
const FluxLines = dynamic(() => import("@/components/FluxLines"), {
  ssr: false,
});

const LINE_1 = "Heyya!! It’s your friendly Backend Dev.";
const LINE_2 = "Souryadeep";

// Must match the CSS: 90ms per letter, 400ms before the first letter.
const LETTER_STEP_MS = 50;
const START_DELAY_MS = 200;
const TOTAL_LETTERS = Array.from(LINE_1 + LINE_2).length;
// Subtitle appears just after the last letter has landed.
const SUBTITLE_DELAY_MS = START_DELAY_MS + TOTAL_LETTERS * LETTER_STEP_MS + 300;

function Letters({ text, start }: { text: string; start: number }) {
  let index = start;
  return (
    <>
      {text.split(" ").map((word, w, words) => (
        <Fragment key={w}>
          {/* each word stays together, so it never breaks mid word on phones */}
          <span className="inline-block whitespace-nowrap">
            {Array.from(word).map((character) => {
              const i = index++;
              return (
                <span
                  key={i}
                  className="ch"
                  aria-hidden="true"
                  style={{ "--i": i } as CSSProperties}
                >
                  {character}
                </span>
              );
            })}
          </span>
          {w < words.length - 1 && " "}
        </Fragment>
      ))}
    </>
  );
}

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const shouldUseDarkTheme =
      savedTheme === "dark" ||
      (savedTheme === null &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    document.documentElement.classList.toggle("dark", shouldUseDarkTheme);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsDark(shouldUseDarkTheme);
  }, []);

  const toggleTheme = () => {
    const nextIsDark = !isDark;
    document.documentElement.classList.toggle("dark", nextIsDark);
    window.localStorage.setItem("theme", nextIsDark ? "dark" : "light");
    setIsDark(nextIsDark);
  };

  return (
    <>
      <UseSmoothScroll speed={2} />

      <div className="min-h-screen  instrument-serif-regular bg-[#DDDCDB] font-sans selection:bg-amber-500 dark:bg-[#3C4044]">
        <button
          type="button"
          onClick={toggleTheme}
          className="fixed top-6 right-6 z-50 rounded-full border border-[#3C4044]/20 bg-[#E1D5CB]/70 px-4 py-2 text-sm text-[#3C4044] backdrop-blur-md transition-colors hover:bg-[#E1D5CB] dark:border-[#DDDCDB]/20 dark:bg-[#4C5053]/70 dark:text-[#DDDCDB] dark:hover:bg-[#4C5053]"
          aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        >
          {isDark ? (
            <img alt="LIGHT MODE" className="w-5" src="/sun.png" />
          ) : (
            <img alt="MOON MODE" className="w-5" src="/moon.png" />
          )}
        </button>
        {/* HERO */}
        <main
          id="top"
          className="relative px-[clamp(14px,4vw,64px)]  pt-12"
        >
          {/* Same 860px column as every other section */}
          <div className="pointer-events-none relative z-10 mx-auto flex w-full max-w-[860px] flex-col gap-8 text-left">
            <div
              className="fade-up pointer-events-auto w-full max-w-full overflow-hidden rounded-3xl border border-[#3C4044]/15 dark:border-[#DDDCDB]/15"
              style={{ animationDelay: "0ms" }}
            >
              <img
                src="/icegif-514.gif"
                alt="Describe the GIF here"
                className="block h-[325px] w-full"
              />
            </div>
            <h1 className="relative intro text-5xl z-10 text-[#FD7B41]">
              Heyya!! I&apos;m Souryadeep.
              <p className="italic text-[1.5rem] font-stretch-90% text-[#3C4044] dark:text-[#DDDCDB] pt-2">
                your friendly distant backend dev.
              </p>
            </h1>

            <div className="fade-up flex flex-col gap-8">
              <div className="mt-6 flex flex-col gap-4 font-sans text-base leading-7 text-[#3C4044]/75 dark:text-[#DDDCDB]/75 md:text-lg md:leading-8">
                <p>
                  <span aria-hidden="true">😁 </span>
                  {
                    "Third year B.Tech student who mostly focuses on building scalable high available architecture"
                  }{" "}
                  Currently looking for full time internship oppurtunity,
                  learning System Design, practising DSA, getting comfortable
                  with AI Agents.
                  <br />
                  Any query for my site or project? Feel free to contact me by{" "}
                  <a
                    href="mailto:{{email}}"
                    className="font-bold text-[#3C4044] transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-[#FD7B41] focus-visible:text-[#FD7B41] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FD7B41] dark:text-[#DDDCDB] dark:hover:text-[#FD7B41]"
                  >
                    Email
                  </a>{" "}
                  or{" "}
                  <a
                    href="{{linkedin url}}"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#3C4044] transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-[#FD7B41] focus-visible:text-[#FD7B41] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FD7B41] dark:text-[#DDDCDB] dark:hover:text-[#FD7B41]"
                  >
                    LinkedIn
                  </a>
                  .{" "}
                </p>
              </div>

            <div className="pointer-events-auto flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
  {/* Two main buttons: equal width and side by side on phones */}
  <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center">
    <a
      href="/Souryadeep_Ganguly_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-1.5 whitespace-nowrap rounded-lg border border-[#3C4044]/30 px-3 py-2 font-sans text-sm font-semibold text-[#3C4044] transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-[#3C4044]/10 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FD7B41] dark:border-[#DDDCDB]/30 dark:text-[#DDDCDB] dark:hover:bg-[#DDDCDB]/10 sm:gap-2 sm:px-4 sm:text-base"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4 shrink-0"
      >
        <path d="M12 4v11m0 0-4-4m4 4 4-4M5 20h14" />
      </svg>
      Check my resume
    </a>

    <Link
      href="/projects"
      className="flex items-center justify-center whitespace-nowrap rounded-lg bg-[#FD7B41] px-3 py-2 font-sans text-sm font-semibold text-[#3C4044] transition-transform duration-300 hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FD7B41] sm:px-4 sm:text-base"
    >
      See my work
    </Link>
  </div>

  {/* Third button: full width underneath on phones */}
  <div className="flex sm:justify-center">
    <Link
      href="/about"
      className="flex w-full items-center justify-center whitespace-nowrap rounded-lg border border-[#3C4044]/25 px-3 py-2 font-sans text-sm font-semibold text-[#3C4044] transition-[transform,background-color,border-color,color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-[#FD7B41] hover:text-[#FD7B41] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FD7B41] dark:border-[#DDDCDB]/25 dark:text-[#DDDCDB] dark:hover:border-[#FD7B41] dark:hover:text-[#FD7B41] sm:w-auto sm:px-5 sm:text-base"
    >
      Want to know more?
    </Link>
  </div>
</div>
            </div>
          </div>

          <FloatingDockDemo />
        </main>

        <About />

        {/* PRODUCTS */}
        <section id="work" className="w-full">
          {/* same side padding as the card stack */}
          <div className="px-[clamp(14px,2vw,64px)]">
            {/* same max width and centring as the card */}
            <div className="mx-auto w-full max-w-[860px]">
              <h2 className="instrument-serif-regular text-5xl text-[#3C4044] dark:text-[#DDDCDB]">
                <Link
                  href="/projects"
                  className="instrument-serif-regular text-[#3C4044] md:text-5xl dark:text-[#DDDCDB]"
                >
                  Products
                </Link>{" "}
                I have developed
              </h2>
            </div>
          </div>

          {/* the stack stays OUTSIDE the wrapper so its sticky scrolling keeps working */}
          <CaseStudyFlipStack />
        </section>

        <Footer />
      </div>
    </>
  );
}
