import { motion } from "motion/react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import vitaminGImage from "/vitaminmain.png";
import { BackgroundGradient } from "./ui/background-gradient";
import { Tooltip } from "./ui/tooltip-card";
export default function Experience() {
  const experiences = [
    {
      id: 1,
      image: vitaminGImage,
      title: "Frontend Development Intern",
      subtitle: "Vitamin G Studios · Oct '25 - Dec '25",
      description:
        "Worked on a landing page of the Project Named HiveMind using React.js and Tailwind CSS, ensuring a responsive and engaging user experience.",
      link: "https://www.tacticalhive.live/hiveeyes",
    },
  ];

  // Show fallback text if there are no experiences to display
  if (!experiences.length) {
    return (
      <section
        id="experience"
        className="min-h-screen bg-black text-white flex items-center justify-center p-8"
      >
        <div className="text-2xl font-bold text-center">
          Oops No Experience till now
        </div>
      </section>
    );
  }
  const TooltipCard = () => {
    return (
      <div className="">
        <img
          src="https://media.tenor.com/rOoqECIVI4kAAAAi/stop-this-madness-blue-emoji.gif"
          alt="Tyler Durden"
          className="aspect-auto  w-full rounded-sm"
        />
        <div className="my-4 flex flex-col">
          <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
            help me increase it!!
          </p>
        </div>
      </div>
    );
  };
  return (
    <section
      id="experience"
      className="min-h-screen bg-black text-white flex items-center justify-center p-4 md:p-8"
    >
      <div className="flex flex-col items-center gap-6 md:gap-8">
        <Tooltip
          containerClassName="text-neutral-600 dark:text-neutral-400"
          content={<TooltipCard />}
        >
          {" "}
          <h1 className="text-2xl text-red-100">
            Give me somesunshine, and some{" "}
            <span className="cursor-pointer font-serif text-4xl text-red-800">Experience</span>
          </h1>
        </Tooltip>{" "}
        {/* // Experience Cards */}
        <BackgroundGradient>
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
                delay: index * 0.12,
              }}
              className="w-full flex justify-center"
            >
              <article className="group relative border-2 border-fuchsia-500/10 flex h-full w-full max-w-xl flex-col overflow-hidden rounded-3xl">
                {/* hover glow */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-[28px] bg-linear-to-br from-cyan-500/30 via-fuchsia-500/25 to-amber-400/25 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100"
                />

                <div className="relative z-10 flex flex-1 flex-col gap-3 rounded-[22px] bg-[#0f0f0f] p-5 shadow-2xl ring-1 ring-white/5 overflow-hidden">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-gray-400">
                    {experience.subtitle}
                  </p>
                  <h2 className="text-2xl font-semibold text-white">
                    {experience.title}
                  </h2>
                  <p className="text-[13px] leading-relaxed text-gray-300">
                    {experience.description}
                  </p>
                  <p className="text-[13px] leading-relaxed text-gray-300">
                    <a
                      href={experience.link}
                      className="relative z-20 font-semibold underline decoration-red-400/60 underline-offset-4 hover:text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Check out
                    </a>
                  </p>
                </div>
              </article>
            </motion.div>
          ))}
        </BackgroundGradient>
      </div>
    </section>
  );
}
