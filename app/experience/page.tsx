import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/reveal";
import ThemeToggle from "@/components/theme-toggle";
import FloatingDockDemo from "@/components/floating-dock-demo";
import Footer from "@/components/Footer";
import {
  ScrollTimeline,
  type TimelineItem,
} from "@/components/scroll-timeline";

export const metadata: Metadata = {
  title: "Experience | Souryadeep",
  description:
    "Education, work and projects of Souryadeep, a backend developer who builds with the Spring Framework.",
};

/* ---------- edit these ---------- */
// Newest first. Add or remove items freely.
const worktimeline: TimelineItem[] = [
  {
    period: "Oct'25 to Dec'25",
    title: "Frontend Development Intern",
    subtitle: "VitaminG Studios Pvt.",
    description:
      "Worked on the frontend of the Tactical Hive project, built with React, TypeScript, and Tailwind CSS. Implemented responsive UI components, integrated APIs, and collaborated with the design team to create an intuitive user experience.",
    tags: ["NextJS", "ReactJS", "MagicUI", "TailwindCSS"],
  },
];
const hackathontimeline: TimelineItem[] = [
  {
    period: "Jan'26",
    title: "Diversion2k26",
    subtitle: "BridgeOps",
    description:
      "Developed a Orchestration Toolkit that basically provides communication, system understanding and code fixation.",
    tags: ["NextJS", "ReactJS", "Python"],
  },
  {
    period: "Mar'26",
    title: "Binaryv2",
    subtitle: "SentinelIQ",
    description:
      "SentinelIQ is an AI-powered forensics analysis platform for immersive crime scene investigation. Users can upload evidence files, and the tool performs a comprehensive analysis using advanced machine learning techniques. ",
    tags: ["Python", "ReactJS", "Gemini"],
  },
  {
    period: "Sept'26",
    title: "Innovocon'26",
    subtitle: "IceCream",
    description:
      "Test your AI models like production services — before you ship them. It reads your actual hardware, calculates what fits arithmetically, benchmarks what it can genuinely call, and uses providers' own published traffic statistics for cloud models.",
    tags: ["Python", "Ollama"],
  },
];
const highlights = [
  { label: "Focus", value: "Scalable, highly available backend systems" },
  { label: "Main tool", value: "Spring Framework" },
  { label: "Currently", value: "Open to full time backend roles" },
];
/* -------------------------------- */

const heading =
  "instrument-serif-regular text-4xl text-[#3C4044] dark:text-[#DDDCDB] md:text-5xl";
const body =
  "font-sans text-base leading-7 text-[#3C4044]/75 dark:text-[#DDDCDB]/75 md:text-lg md:leading-8";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-[#DDDCDB] font-sans selection:bg-amber-500 dark:bg-[#3C4044]">
      <ThemeToggle />

      <main className="px-[clamp(14px,4vw,64px)] pt-24 pb-16">
        {/* one shared column keeps every section aligned */}
        <div className="mx-auto flex w-full max-w-[860px] flex-col gap-20">
          {/* INTRO */}
          <section>
            <Reveal>
              <Link
                href="/"
                className="font-sans text-sm font-semibold text-[#3C4044]/75 transition-colors duration-500 hover:text-[#FD7B41] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FD7B41] dark:text-[#DDDCDB]/75 dark:hover:text-[#FD7B41]"
              >
                ← Back home
              </Link>

              <h1 className="instrument-serif-regular mt-8 text-6xl text-[#3C4044] dark:text-[#DDDCDB] md:text-7xl">
                Experience<span className="text-[#FD7B41]">.</span>
              </h1>

              <p className={`${body} mt-6 max-w-[680px]`}>
                A short record of where I have studied, worked and built. I
                focus on backend systems that stay{" "}
                <span className="font-semibold text-[#FD7B41]">
                  fast and reliable
                </span>{" "}
                as they grow.
              </p>
            </Reveal>
          </section>

          {/* HIGHLIGHTS */}
          <section>
            <Reveal>
              <ul className="grid gap-4 md:grid-cols-3">
                {highlights.map((item) => (
                  <li
                    key={item.label}
                    className="rounded-2xl border border-[#3C4044]/15 bg-[#EDBF9B]/30 p-6 dark:border-[#DDDCDB]/15 dark:bg-[#DDDCDB]/5"
                  >
                    <p className="font-sans text-sm font-semibold text-[#FD7B41]">
                      {item.label}
                    </p>
                    <p className="mt-2 font-sans text-base leading-6 text-[#3C4044] dark:text-[#DDDCDB]">
                      {item.value}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </section>

          {/* TIMELINE */}
          <section>
            <Reveal>
              <h2 className={heading}>
                Work <span className="text-[#FD7B41]">Experience.</span>
              </h2>
            </Reveal>
            <p className="text-2xl instrument-serif-regular mt-3">
              I have barely worked in the industry but can easily pick up if you have any oppurtunity for me.
            </p>

            <ScrollTimeline items={worktimeline} className="mt-10" />
          </section>
          {/* HIGHLIGHTS */}

          {/* TIMELINE */}
          <section>
            <Reveal>
              <h2 className={heading}>
                Hackathon <span className="text-[#FD7B41]">Experience.</span>
              </h2>
            </Reveal>
            <p className="text-2xl instrument-serif-regular mt-3">
              Hackathons taught to me deliver a product as fast as possible.
              Also got to collaborate with excellent mates.
            </p>
            <ScrollTimeline items={hackathontimeline} className="mt-10" />
          </section>
        </div>
      </main>

      <FloatingDockDemo />
      <Footer />
    </div>
  );
}
