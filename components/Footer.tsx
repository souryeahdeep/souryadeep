import { Signature } from "./ui/signature";

const columns = [
  {
    title: "Pages",
    links: [
      { label: "Ghar", href: "/" },
      { label: "Experience", href: "/experience" },
      { label: "About Sourya", href: "/about" },
      { label: "Memories", href: "/gallery" },
    ],
  },
  {
    title: "Socials",
    links: [
      { label: "GitHub", href: "https://github.com/souryeahdeep", external: true },
      {label:"Leetcode", href:"https://leetcode.com/u/dp0zbY2vFL/",external:true},
      { label: "LinkedIn", href: "https://www.linkedin.com/in/souryadeep-ganguly-b46054240/", external: true },
      { label: "X", href: "https://x.com/jealous_caesar", external: true },
      { label: "Email", href: "mailto:souryadeep05@gmail.com" },
    ],
  },
];

export default function Footer() {
  return (
    // outer wrapper creates the gap from both screen edges
    <footer className="mb-2 px-4 pb-16 pt-10 md:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-[#3C4044]/15 bg-[#EDBF9B]/30 dark:border-[#DDDCDB]/15 dark:bg-[#DDDCDB]/5">
        <div className="grid gap-10 p-6 sm:p-8 md:grid-cols-2 md:gap-12 md:p-12">
          {/* brand */}
          <div className="flex min-w-0 flex-col gap-4">
            <a
              href="#top"
              aria-label="Souryadeep, back to top"
              className="block w-full max-w-[280px] rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FD7B41]"
            >
              {/* h-auto + max-w-full: the signature scales down to fit the card */}
              <Signature
                text="Souryadeep"
                fontSize={28}
                duration={1.5}
                className="h-auto w-full max-w-full"
              />
            </a>
            <p className="font-sans text-sm text-[#3C4044]/70 dark:text-[#DDDCDB]/70">
              Made By Sonnet and Sourya. Inspired by many great developers.
            </p>
          </div>

          {/* link columns */}
          <nav
            aria-label="Footer"
            className="grid min-w-0 grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3"
          >
            {columns.map((col) => (
              <div key={col.title} className="flex min-w-0 flex-col gap-3">
                <p className="font-sans text-sm font-semibold text-[#3C4044] dark:text-[#DDDCDB]">
                  {col.title}
                </p>
                <ul className="flex flex-col gap-1.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...(link.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="wrap-break-word py-1 font-sans text-sm text-[#3C4044]/75 transition-colors duration-300 hover:text-[#FD7B41] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FD7B41] dark:text-[#DDDCDB]/75 dark:hover:text-[#FD7B41]"
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
      </div>
    </footer>
  );
}
