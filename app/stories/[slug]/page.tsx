import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/reveal";
import ThemeToggle from "@/components/theme-toggle";
import FloatingDockDemo from "@/components/floating-dock-demo";
import Footer from "@/components/Footer";
import {
  stories,
  getStory,
  getNeighbours,
  formatDate,
  readingTime,
  type Block,
} from "@/lib/stories";

type Props = { params: Promise<{ slug: string }> };

// Builds one page per story ahead of time
export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) return { title: "Story not found" };
  return {
    title: `${story.title} | Souryadeep`,
    description: story.excerpt,
  };
}

const body =
  "font-sans text-base leading-8 text-[#3C4044]/85 dark:text-[#DDDCDB]/85 md:text-lg md:leading-9";

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          key={i}
          className="instrument-serif-regular mt-6 text-3xl text-[#3C4044] dark:text-[#DDDCDB] md:text-4xl"
        >
          {block.text}
        </h2>
      );
    case "quote":
      return (
        <blockquote
          key={i}
          className="my-2 border-l-2 border-[#FD7B41] pl-6"
        >
          <p className="instrument-serif-regular text-2xl leading-9 text-[#3C4044] dark:text-[#DDDCDB] md:text-3xl md:leading-10">
            {block.text}
          </p>
          {block.cite && (
            <footer className="mt-2 font-sans text-sm text-[#3C4044]/75 dark:text-[#DDDCDB]/75">
              {block.cite}
            </footer>
          )}
        </blockquote>
      );
    case "list":
      return (
        <ul key={i} className="flex flex-col gap-3">
          {block.items.map((item, j) => (
            <li key={j} className={`${body} flex gap-3`}>
              <span aria-hidden="true" className="text-[#FD7B41]">
                →
              </span>
              {item}
            </li>
          ))}
        </ul>
      );
    case "code":
      return (
        <figure key={i} className="my-2">
          {block.label && (
            <figcaption className="mb-2 font-sans text-sm font-semibold text-[#FD7B41]">
              {block.label}
            </figcaption>
          )}
          <pre className="overflow-x-auto rounded-2xl bg-[#3C4044] p-5 font-mono text-sm leading-6 text-[#DDDCDB] dark:bg-[#2D3033]">
            <code>{block.code}</code>
          </pre>
        </figure>
      );
    default:
      return (
        <p key={i} className={body}>
          {block.text}
        </p>
      );
  }
}

export default async function StoryPage({ params }: Props) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();

  const { newer, older } = getNeighbours(slug);
  const minutes = readingTime(story);

  const navCard =
    "group block h-full rounded-2xl border border-[#3C4044]/15 bg-[#EDBF9B]/30 p-6 transition-[transform,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-[#FD7B41]/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FD7B41] dark:border-[#DDDCDB]/15 dark:bg-[#DDDCDB]/5";

  return (
    <div className="min-h-screen bg-[#DDDCDB] font-sans selection:bg-amber-500 dark:bg-[#3C4044]">
      <ThemeToggle />

      <main className="px-[clamp(14px,4vw,64px)] pt-24 pb-16">
        <article className="mx-auto flex w-full max-w-[860px] flex-col gap-14">
          {/* HEADER */}
          <header>
            <Reveal>
              <Link
                href="/stories"
                className="font-sans text-sm font-semibold text-[#3C4044]/75 transition-colors duration-500 hover:text-[#FD7B41] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FD7B41] dark:text-[#DDDCDB]/75 dark:hover:text-[#FD7B41]"
              >
                ← All stories
              </Link>

              <p className="mt-8 font-sans text-sm font-semibold text-[#FD7B41]">
                <time dateTime={story.date}>{formatDate(story.date)}</time>
                <span aria-hidden="true"> · </span>
                {minutes} min read
              </p>

              <h1 className="instrument-serif-regular mt-3 text-5xl leading-[1.05] text-[#3C4044] dark:text-[#DDDCDB] md:text-7xl">
                {story.title}
              </h1>

              <p className={`${body} mt-5 max-w-[680px]`}>{story.excerpt}</p>

              {story.tags.length > 0 && (
                <ul className="mt-6 flex flex-wrap gap-2">
                  {story.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-[#3C4044]/20 px-2 py-0.5 font-sans text-xs font-medium text-[#3C4044] dark:border-[#DDDCDB]/20 dark:text-[#DDDCDB]"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          </header>

          {/* BODY: a narrower column keeps lines easy to read */}
          <Reveal>
            <div className="flex max-w-[680px] flex-col gap-6">
              {story.content.map(renderBlock)}
            </div>
          </Reveal>

          {/* NEWER / OLDER */}
          {(newer || older) && (
            <nav
              aria-label="More stories"
              className="grid gap-4 border-t border-[#3C4044]/15 pt-10 dark:border-[#DDDCDB]/15 sm:grid-cols-2"
            >
              {older ? (
                <Link href={`/stories/${older.slug}`} className={navCard}>
                  <p className="font-sans text-sm font-semibold text-[#FD7B41]">
                    ← Older
                  </p>
                  <p className="instrument-serif-regular mt-2 text-2xl text-[#3C4044] transition-colors duration-500 group-hover:text-[#FD7B41] dark:text-[#DDDCDB]">
                    {older.title}
                  </p>
                </Link>
              ) : (
                <span />
              )}
              {newer && (
                <Link
                  href={`/stories/${newer.slug}`}
                  className={`${navCard} sm:text-right`}
                >
                  <p className="font-sans text-sm font-semibold text-[#FD7B41]">
                    Newer →
                  </p>
                  <p className="instrument-serif-regular mt-2 text-2xl text-[#3C4044] transition-colors duration-500 group-hover:text-[#FD7B41] dark:text-[#DDDCDB]">
                    {newer.title}
                  </p>
                </Link>
              )}
            </nav>
          )}
        </article>
      </main>

      <FloatingDockDemo />
      <Footer />
    </div>
  );
}