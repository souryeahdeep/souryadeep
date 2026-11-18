import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/reveal";
import ThemeToggle from "@/components/theme-toggle";
import FloatingDockDemo from "@/components/floating-dock-demo";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/project-card";
import { projects } from "@/lib/project";

export const metadata: Metadata = {
  title: "Projects | Souryadeep",
  description:
    "Backend and full stack projects built by Souryadeep with the Spring Framework.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#DDDCDB] font-sans selection:bg-amber-500 dark:bg-[#3C4044]">
      <ThemeToggle />

      <main className="px-[clamp(14px,4vw,64px)] pt-24 pb-16">
        <div className="mx-auto w-full max-w-[860px]">
          <Reveal>
            <Link
              href="/"
              className="font-sans text-sm font-semibold text-[#3C4044]/75 transition-colors duration-500 hover:text-[#FD7B41] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FD7B41] dark:text-[#DDDCDB]/75 dark:hover:text-[#FD7B41]"
            >
              ← Back home
            </Link>

            <h1 className="instrument-serif-regular mt-8 text-6xl text-[#3C4044] dark:text-[#DDDCDB] md:text-7xl">
              Projects<span className="text-[#FD7B41]">.</span>
            </h1>
            <p className="mt-6 max-w-170 font-sans text-base leading-7 text-[#3C4044]/75 dark:text-[#DDDCDB]/75 md:text-lg md:leading-8">
              Things I have built, from backend services to full products. Open
              any project to see how it works and what I learned.
            </p>
          </Reveal>

          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((project, i) => (
              <li key={project.slug}>
                <Reveal delay={(i % 2) * 0.08} className="h-full">
                  <ProjectCard project={project} />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <FloatingDockDemo />
      <Footer />
    </div>
  );
}