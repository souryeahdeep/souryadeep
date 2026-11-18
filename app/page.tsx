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

      <div className="min-h-screen bg-[#DDDCDB] font-sans selection:bg-amber-500 dark:bg-[#3C4044]">
        <button
          type="button"
          onClick={toggleTheme}
          className="fixed top-6 right-6 z-50 rounded-full border border-[#3C4044]/20 bg-[#E1D5CB]/70 px-4 py-2 text-sm text-[#3C4044] backdrop-blur-md transition-colors hover:bg-[#E1D5CB] dark:border-[#DDDCDB]/20 dark:bg-[#4C5053]/70 dark:text-[#DDDCDB] dark:hover:bg-[#4C5053]"
          aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        >
          {isDark ? "Light mode" : "Dark mode"}
        </button>

        {/* HERO */}
        <main
          id="top"
          className="instrument-serif-regular relative flex min-h-[70svh] flex-col items-center justify-center gap-6 px-6 pb-10 pt-14 text-center"
        >
          {/* Background: fills the hero and fades out at the bottom */}
          {!reduceMotion && (
            <div
              aria-hidden="true"
              className="absolute inset-0 z-0 overflow-hidden [-webkit-mask-image:linear-gradient(to_bottom,black_65%,transparent)] [mask-image:linear-gradient(to_bottom,black_65%,transparent)]"
            >
              <MoltenMetal
                colors={["#9a3412", "#fb923c"]}
                coreColor="#FFFFFF"
                speed={0.35}
                scale={4}
                detail={3}
                glow={1.6}
                thickness={1}
                haze={0.75}
                mouseInteraction
                flareOnClick
                lightMode={false}
                swirl={1}
                turbulence={0.2}
                brightness={1.3}
                colorMode="molten"
                rotation={0}
                offsetX={0}
                offsetY={0}
                grain={0.05}
                opacity={1}
                drift={0.3}
                intro
                mouseStrength={0.5}
                paused={false}
                style={undefined}
              />
            </div>
          )}

          {/* Title only. The subtitle lives outside the h1 so it keeps its own size and spacing. */}
          <h1
            className="intro pointer-events-none relative z-10 text-[#FD7B41]"
            aria-label={`${LINE_1} ${LINE_2}`}
          >
            <span className="line">
              <Letters text={LINE_1} start={0} />
            </span>
            <span className="line name">
              <Letters text={LINE_2} start={Array.from(LINE_1).length} />
            </span>
          </h1>

          <div
            className="fade-up pointer-events-none relative z-10 flex max-w-[680px] flex-col items-center gap-6"
            style={{ animationDelay: `${SUBTITLE_DELAY_MS}ms` }}
          >
            <p className="text-lg leading-7 text-[#3C4044]/75 md:text-2xl md:leading-8 dark:text-[#DDDCDB]/75">
              I build the APIs, databases and services behind products.
              <br />
              1+ years building systems with{" "}
              <AnnotatedText variant="box" delay={0.56}>
                Spring Framework
              </AnnotatedText>
              .
            </p>

            {/* Buttons need to be clickable again, so re-enable the mouse here */}
            <div className="pointer-events-auto flex flex-wrap items-center justify-center gap-3">
              <a
                href="#work"
                className="rounded-lg bg-[#FD7B41] px-4 py-2 font-sans text-base font-semibold text-[#3C4044] transition-transform duration-300 hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FD7B41]"
              >
                See my work
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-[#3C4044]/30 px-4 py-2 font-sans text-base font-semibold text-[#3C4044] transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-[#3C4044]/10 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FD7B41] dark:border-[#DDDCDB]/30 dark:text-[#DDDCDB] dark:hover:bg-[#DDDCDB]/10"
              >
                Check my resume
              </a>
            </div>
          </div>

          <FloatingDockDemo />
        </main>

        <About />

        {/* PRODUCTS */}
        <section id="work" className="w-full">
          {/* same side padding as the card stack */}
          <div className="px-[clamp(14px,4vw,64px)]">
            {/* same max width and centring as the card */}
            <div className="mx-auto w-full max-w-[860px]">
              <h2 className="instrument-serif-regular text-5xl text-[#3C4044] dark:text-[#DDDCDB]">
                <Link
                  href="/projects"
                  className="instrument-serif-regular text-[#3C4044] dark:text-[#DDDCDB]"
                >
                  <Tooltip
                    containerClassName=""
                    content="Click for more products"
                  >
                    Products
                  </Tooltip>{" "}
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
