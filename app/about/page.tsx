import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/reveal";
import ThemeToggle from "@/components/theme-toggle";
import FloatingDockDemo from "@/components/floating-dock-demo";
import Footer from "@/components/Footer";
import type { IconType } from "react-icons";
import {
  SiSpring,
  SiSpringboot,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiGit,
  SiRedis,
  SiApachekafka,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiReact,
  SiPython,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export const metadata: Metadata = {
  title: "About | Souryadeep",
  description:
    "Souryadeep is a backend developer who builds scalable, highly available systems with the Spring Framework.",
};

/* ---------- edit these ---------- */
const stack: { name: string; icon: IconType; color?: string }[] = [
  { name: "Java", icon: FaJava, color: "#ED8B00" },
  { name: "Javascript", icon: SiJavascript, color: "#cf9e05" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "#0799ca" },
  { name: "ReactJS", icon: SiReact, color: "#0799ca" },
  { name: "NextJS", icon: SiNextdotjs, color: "#010405" },
  { name: "Spring Framework", icon: SiSpring, color: "#6DB33F" },
  { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Redis", icon: SiRedis, color: "#FF4438" },
  { name: "Kafka", icon: SiApachekafka }, // no colour: follows the text colour
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Git", icon: SiGit, color: "#F05032" },
];

const timeline = [
  {
    period: "2024-28",
    title: "B.Tech in CS, 3rd year",
    place: "JIS College of Engineering",
    note: "DBMS, Networking, Security, OOPs",
  },
  {
    period: "2010-2024",
    title: "High School Studies",
    place: "Durgamoyee Academy",
    note: "Physics, Mathematics, CS.. blah blah",
  },
];

const whatIDo = [
  {
    title: "Backend systems",
    text: "I build APIs and services with the Spring Framework, with a focus on clean structure and reliability.",
  },
  {
    title: "Scalable architecture",
    text: "I plan for high availability from the start: how a system behaves under load and when parts fail.",
  },
  {
    title: "AI agents",
    text: "I am learning to build with AI agents and connect them to real backend services.",
  },
];
/* -------------------------------- */

const heading =
  "instrument-serif-regular text-4xl text-[#3C4044] dark:text-[#DDDCDB] md:text-5xl";
const body =
  "font-sans text-base leading-7 text-[#3C4044]/75 dark:text-[#DDDCDB]/75 md:text-lg md:leading-8";
const card =
  "rounded-2xl border border-[#3C4044]/15 bg-[#EDBF9B]/30 p-6 dark:border-[#DDDCDB]/15 dark:bg-[#DDDCDB]/5";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#DDDCDB] font-sans selection:bg-amber-500 dark:bg-[#3C4044]">
      <ThemeToggle />

      <main className="px-[clamp(14px,4vw,64px)] pt-24 pb-16">
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
                Yup that&apos;s ME<span className="text-[#FD7B41]">.</span>
              </h1>

              <p className={`${body} mt-6 max-w-[680px]`}>
                You probably wondering how I ended up in this situation. <br />
              </p>
            </Reveal>
          </section>

          {/* STORY */}
          <section>
            <Reveal className="grid gap-8 md:grid-cols-[240px_1fr] md:gap-12">
              {/* Swap this block for your photo:
                  <Image src="/me.jpg" alt="Souryadeep" width={240} height={300} className="rounded-2xl object-cover" /> */}
              <div
                role="img"
                aria-label="Photo of Souryadeep"
                className="instrument-serif-regular grid aspect-[4.5/5] w-full max-w-[240px] place-items-center rounded-2xl border border-[#3C4044]/15 bg-[#EDBF9B]/40 text-7xl text-[#FD7B41] dark:border-[#DDDCDB]/15 dark:bg-[#DDDCDB]/5"
              >
                <img src="/great_pic.png" alt="" srcSet="" />
              </div>

              <div className="flex flex-col gap-4">
                <h2 className={heading}>
                  The <span className="text-[#FD7B41]">story</span> so far
                </h2>
                <p className={body}>
                  I mostly work on the parts of a product people never see but
                  feel: the APIs, databases and services that keep it fast and
                  reliable as more people use it. In this fast changing world, I
                  consider myself to be a adaptable developer who can
                  efficiently works with AI tools.
                </p>
                <p className={body}>
                  Solving leetcode daily is my kind of therapy. It helps me to
                  understand and remind the basic of programming
                </p>
                <p className={body}>
                  When not creating softwares, I enjoy all types of board and PC
                  games, and love exploring the human nature through books and
                  movies.
                </p>
              </div>
            </Reveal>
          </section>

          {/* WHAT I DO */}
          <section>
            <Reveal>
              <h2 className={heading}>
                What I <span className="text-[#FD7B41]">do</span>
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {whatIDo.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.08}>
                  <div className={`${card} h-full`}>
                    <h3 className="instrument-serif-regular text-2xl text-[#3C4044] dark:text-[#DDDCDB]">
                      {item.title}
                    </h3>
                    <p className="mt-3 font-sans text-sm leading-6 text-[#3C4044]/75 dark:text-[#DDDCDB]/75">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* STACK */}
          <section>
            <Reveal>
              <h2 className={heading}>
                <span className="text-[#FD7B41]"> Skills</span> I possess to be
                useful.
              </h2>
              <ul className="mt-8 flex flex-wrap gap-3">
                {stack.map(({ name, icon: Icon, color }) => (
                  <li
                    key={name}
                    className="flex items-center gap-2 rounded-lg border border-[#3C4044]/20 px-3 py-1 font-sans text-sm font-medium text-[#3C4044] transition-colors duration-500 hover:border-[#FD7B41] hover:text-[#FD7B41] dark:border-[#DDDCDB]/20 dark:text-[#DDDCDB] dark:hover:border-[#FD7B41] dark:hover:text-[#FD7B41]"
                  >
                    <Icon
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0"
                      style={color ? { color } : undefined}
                    />
                    {name}
                  </li>
                ))}
              </ul>
            </Reveal>
          </section>

          {/* TIMELINE */}
          <section>
            <Reveal>
              <h2 className={heading}>
                Where I have <span className="text-[#FD7B41]">studied</span>
              </h2>
            </Reveal>
            <ol className="mt-8 flex flex-col gap-8  pl-6">
              {timeline.map((item, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <li className="relative">
                    <span
                      aria-hidden="true"
                      className="absolute -left-[31px] top-2 h-2 w-2 rounded-full bg-[#FD7B41]"
                    />
                    <p className="font-sans text-sm font-semibold text-[#FD7B41]">
                      {item.period}
                    </p>
                    <h3 className="instrument-serif-regular mt-1 text-2xl text-[#3C4044] dark:text-[#DDDCDB]">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm text-[#3C4044]/75 dark:text-[#DDDCDB]/75">
                      {item.place}
                    </p>
                    <p className={`${body} mt-2 text-base`}>{item.note}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </section>

          {/* CTA */}
          <section>
            <Reveal>
              <div className="rounded-3xl border border-[#3C4044]/15 bg-[#EDBF9B]/30 p-8 dark:border-[#DDDCDB]/15 dark:bg-[#DDDCDB]/5 md:p-12">
                <h2 className={heading}>
                  Let’s build something{" "}
                  <span className="text-[#FD7B41]">solid</span>
                </h2>
                <p className={`${body} mt-4 max-w-[560px]`}>
                  Hiring for a backend role, or have a project in mind? Send me
                  a message and I will reply as soon as I can.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="mailto:{{email}}"
                    className="rounded-lg bg-[#FD7B41] px-4 py-2 font-sans text-base font-semibold text-[#3C4044] transition-transform duration-300 hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FD7B41]"
                  >
                    Email me
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
            </Reveal>
          </section>
        </div>
      </main>

      <FloatingDockDemo />
      <Footer />
    </div>
  );
}
