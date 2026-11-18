"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Tooltip } from "./ui/tooltip-card";

// Dotted underline used for the highlighted words and links
const link =
  "font-semibold text-[#3C4044] underline decoration-[#FD7B41] decoration-dashed decoration-2 underline-offset-4 transition-colors duration-300 hover:text-[#FD7B41] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FD7B41] dark:text-[#DDDCDB] dark:hover:text-[#FD7B41]";

export default function About() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="w-full py-10 md:py-24">
      <div className="px-[clamp(14px,4vw,64px)]">
        <motion.div
          className="mx-auto w-full max-w-[860px]"
          initial={reduce ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <a href="/about" className="instrument-serif-regular text-5xl text-[#3C4044] dark:text-[#DDDCDB] md:text-6xl">
           <Tooltip
            containerClassName=""
            content="Click to know more!!"
          >About<span className="text-[#FD7B41]">.</span></Tooltip>  
          </a>
          
          <div className="mt-6 flex flex-col gap-4 font-sans text-base leading-7 text-[#3C4044]/75 dark:text-[#DDDCDB]/75 md:text-lg md:leading-8">
            <p>
              <span aria-hidden="true">😁 </span>
              {
                "Third year B.Tech student who mostly focuses on building scalable high available architecture"
              }{" "}
              Currently looking for full time internship oppurtunity, learning
              System Design, practising DSA, getting comfortable with AI Agents.
              <br />
              Any query for my site or project? Feel free to contact me by{" "}
              <a
                href="mailto:{{email}}"
                className="font-bold text-[#3C4044] transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-[#FD7B41] focus-visible:text-[#FD7B41] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FD7B41] dark:text-[#DDDCDB] dark:hover:text-[#FD7B41]"
              >
                Email
              </a>{" "}
              or{" "}
              <a
                href="{{linkedin url}}"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#3C4044] transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-[#FD7B41] focus-visible:text-[#FD7B41] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FD7B41] dark:text-[#DDDCDB] dark:hover:text-[#FD7B41]"
              >
                LinkedIn
              </a>
              .{" "}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
