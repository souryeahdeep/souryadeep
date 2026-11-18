import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Reveal from "@/components/reveal";
import ThemeToggle from "@/components/theme-toggle";
import FloatingDockDemo from "@/components/floating-dock-demo";
import Footer from "@/components/Footer";
import { projects, getProject, getAdjacent } from "@/lib/project";

type Props = { params: Promise<{ slug: string }> };

// Builds one page per project ahead of time
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.title} | Souryadeep`,
    description: project.tagline,
  };
}

const heading =
  "instrument-serif-regular text-3xl text-[#3C4044] dark:text-[#DDDCDB] md:text-4xl";
const body =
  "font-sans text-base leading-7 text-[#3C4044]/75 dark:text-[#DDDCDB]/75 md:text-lg md:leading-8";
const linkBtn =
  "rounded-lg border border-[#3C4044]/30 px-4 py-2 font-sans text-base font-semibold text-[#3C4044] transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-[#3C4044]/10 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FD7B41] dark:border-[#DDDCDB]/30 dark:text-[#DDDCDB] dark:hover:bg-[#DDDCDB]/10";

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { next } = getAdjacent(slug);

  const meta = [
    { label: "Role", value: project.role },
    { label: "Year", value: project.year },
    { label: "Status", value: project.status },
  ];

  return (
    <div className="min-h-screen bg-[#DDDCDB] font-sans selection:bg-amber-500 dark:bg-[#3C4044]">
      <ThemeToggle />

      <main className="px-[clamp(14px,4vw,64px)] pt-24 pb-16">
        <div className="mx-auto flex w-full max-w-[860px] flex-col gap-16">
          {/* HEADER */}
          <section>
            <Reveal>
              <Link
                href="/projects"
                className="font-sans text-sm font-semibold text-[#3C4044]/75 transition-colors duration-500 hover:text-[#FD7B41] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FD7B41] dark:text-[#DDDCDB]/75 dark:hover:text-[#FD7B41]"
              >
                ← All projects
              </Link>

              <p className="mt-8 font-sans text-sm font-semibold text-[#FD7B41]">
                {project.category}
              </p>
              <h1 className="instrument-serif-regular mt-2 text-5xl text-[#3C4044] dark:text-[#DDDCDB] md:text-7xl">
                {project.title}
              </h1>
              <p className={`${body} mt-4 max-w-[680px]`}>{project.tagline}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-[#FD7B41] px-4 py-2 font-sans text-base font-semibold text-[#3C4044] transition-transform duration-300 hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FD7B41]"
                  >
                    Visit live site
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkBtn}
                  >
                    View
                  </a>
                )}
              </div>
            </Reveal>
          </section>

          {/* COVER */}
          <Reveal>
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-[#3C4044]/15 bg-[#EDBF9B]/40 dark:border-[#DDDCDB]/15 dark:bg-[#DDDCDB]/5">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.imageAlt ?? `${project.title} preview`}
                  fill
                  priority
                  sizes="(min-width: 900px) 860px, 100vw"
                  className="object-cover"
                />
              ) : (
                <div
                  aria-hidden="true"
                  className="instrument-serif-regular grid h-full w-full place-items-center text-8xl text-[#FD7B41]"
                >
                  {project.title.replace(/[{}]/g, "").trim().charAt(0) || "P"}
                </div>
              )}
            </div>
          </Reveal>

          {/* META */}
          <Reveal>
            <dl className="grid gap-4 sm:grid-cols-3">
              {meta.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl border border-[#3C4044]/15 bg-[#EDBF9B]/30 p-5 dark:border-[#DDDCDB]/15 dark:bg-[#DDDCDB]/5"
                >
                  <dt className="font-sans text-sm font-semibold text-[#FD7B41]">
                    {m.label}
                  </dt>
                  <dd className="mt-1 font-sans text-base text-[#3C4044] dark:text-[#DDDCDB]">
                    {m.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* OVERVIEW */}
          <section>
            <Reveal className="flex flex-col gap-4">
              <h2 className={heading}>
                The <span className="text-[#FD7B41]">overview</span>
              </h2>
              {project.overview.map((p, i) => (
                <p key={i} className={body}>
                  {p}
                </p>
              ))}
            </Reveal>
          </section>

          {/* FEATURES */}
          <section>
            <Reveal>
              <h2 className={heading}>
                Key <span className="text-[#FD7B41]">features</span>
              </h2>
              <ul className="mt-6 flex flex-col gap-3">
                {project.features.map((f, i) => (
                  <li key={i} className={`${body} flex gap-3`}>
                    <span aria-hidden="true" className="text-[#FD7B41]">
                      →
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          </section>

          {/* STACK */}
          <section>
            <Reveal>
              <h2 className={heading}>
                Built <span className="text-[#FD7B41]">with</span>
              </h2>
              <ul className="mt-6 flex flex-wrap gap-3">
                {project.stack.map((t) => (
                  <li
                    key={t}
                    className="rounded-lg border border-[#3C4044]/20 px-3 py-1 font-sans text-sm font-medium text-[#3C4044] transition-colors duration-500 hover:border-[#FD7B41] hover:text-[#FD7B41] dark:border-[#DDDCDB]/20 dark:text-[#DDDCDB] dark:hover:border-[#FD7B41] dark:hover:text-[#FD7B41]"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </section>

          {/* NEXT PROJECT */}
          {next.slug !== project.slug && (
            <section>
              <Reveal>
                <Link
                  href={`/projects/${next.slug}`}
                  className="group block rounded-3xl border border-[#3C4044]/15 bg-[#EDBF9B]/30 p-8 transition-[transform,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-[#FD7B41]/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FD7B41] dark:border-[#DDDCDB]/15 dark:bg-[#DDDCDB]/5 md:p-12"
                >
                  <p className="font-sans text-sm font-semibold text-[#FD7B41]">
                    Next project
                  </p>
                  <p className="instrument-serif-regular mt-2 text-4xl text-[#3C4044] transition-colors duration-500 group-hover:text-[#FD7B41] dark:text-[#DDDCDB] md:text-5xl">
                    {next.title}{" "}
                    <span
                      aria-hidden="true"
                      className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2"
                    >
                      →
                    </span>
                  </p>
                  <p className={`${body} mt-3`}>{next.tagline}</p>
                </Link>
              </Reveal>
            </section>
          )}
        </div>
      </main>

      <FloatingDockDemo />
      <Footer />
    </div>
  );
}