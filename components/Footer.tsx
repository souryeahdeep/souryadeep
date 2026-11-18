import { Signature } from "./ui/signature";

const columns = [
  {
    title: "Pages",
    links: [
      { label: "Ghar", href: "/" },
      { label: "What's my experience", href: "/experience" },
      { label: "About Sourya", href: "/about" },
      { label: "How to connect?", href: "/contact" },
      { label: "Memories", href: "/gallery" },
    ],
  },
  {
    title: "Socials",
    links: [
      { label: "GitHub", href: "https://github.com/souryeahdeep", external: true },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/souryadeep-ganguly-b46054240/", external: true },
      { label: "X", href: "https://x.com/jealous_caesar", external: true },
      { label: "Email", href: "mailto:souryadeep05@gmail.com" },
    ],
  },
];

export default function Footer() {
  return (
    // outer wrapper creates the gap from both screen edges
    <footer className="px-4 mb-2 pb-16 pt-10 md:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-[#3C4044]/15 bg-[#EDBF9B]/30 dark:border-[#DDDCDB]/15 dark:bg-[#DDDCDB]/5">
        <div className="grid gap-12 p-18 md:grid-cols-2 md:p-12">
          {/* brand */}
          <div className="flex flex-col gap-4">
            <a
              href="#top"
              className="flex w-fit items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FD7B41]"
            >
              <Signature text="Souryadeep" fontSize={28} duration={1.5} />
            </a>
            <p className="font-sans text-sm text-[#3C4044]/70 dark:text-[#DDDCDB]/70">
              Made By Sonnet and Sourya. Inspired by many great developers.
            </p>
          </div>

          {/* link columns */}
          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-8 sm:grid-cols-3"
          >
            {columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-3">
                <p className="font-sans text-sm font-semibold text-[#3C4044] dark:text-[#DDDCDB]">
                  {col.title}
                </p>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...(link.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="font-sans text-sm text-[#3C4044]/75 transition-colors duration-300 hover:text-[#FD7B41] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FD7B41] dark:text-[#DDDCDB]/75 dark:hover:text-[#FD7B41]"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* big faded name at the bottom */}
      </div>
    </footer>
  );
}
