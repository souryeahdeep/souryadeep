import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/project";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#3C4044]/15 bg-[#EDBF9B]/30 transition-[transform,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-[#FD7B41]/60 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FD7B41] dark:border-[#DDDCDB]/15 dark:bg-[#DDDCDB]/5 dark:hover:border-[#FD7B41]/60"
    >
      
      {/* text */}
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h2 className="instrument-serif-regular text-3xl text-[#3C4044] transition-colors duration-500 group-hover:text-[#FD7B41] dark:text-[#DDDCDB]">
          {project.title}
        </h2>
        <p className="font-sans text-base leading-6 text-[#3C4044]/75 dark:text-[#DDDCDB]/75">
          {project.tagline}
        </p>

        <ul className="mt-1 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((t) => (
            <li
              key={t}
              className="rounded-md border border-[#3C4044]/20 px-2 py-0.5 font-sans text-xs font-medium text-[#3C4044] dark:border-[#DDDCDB]/20 dark:text-[#DDDCDB]"
            >
              {t}
            </li>
          ))}
        </ul>

        <span className="mt-auto flex items-center gap-2 pt-2 font-sans text-sm font-semibold text-[#FD7B41]">
          View project
          <span
            aria-hidden="true"
            className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
          >
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
