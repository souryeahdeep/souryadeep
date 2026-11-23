"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Tooltip } from "./ui/tooltip-card";
import { useCanHover } from "@/lib/use-can-hover";
import Link from "next/link";

// Dotted underline used for the highlighted words and links
const link =
  "font-semibold text-[#3C4044] underline decoration-[#FD7B41] decoration-dashed decoration-2 underline-offset-4 transition-colors duration-300 hover:text-[#FD7B41] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FD7B41] dark:text-[#DDDCDB] dark:hover:text-[#FD7B41]";

export default function About() {
  const reduce = useReducedMotion();
  const canHover = useCanHover();
  const title = (
    <>
      About<span className="text-[#FD7B41]">.</span>
    </>
  );

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

        
          
        </motion.div>
      </div>
    </section>
  );
}
