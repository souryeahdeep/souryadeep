"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();

  // a light spring makes the fill glide instead of jumping
  const smooth = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed right-6 top-1/2 z-40 hidden h-[40vh] w-1.5 -translate-y-1/2 md:block"
    >
      {/* track */}
      <div className="absolute inset-0 rounded-full bg-[#3C4044]/20 dark:bg-[#DDDCDB]/20" />

      {/* fill: grows from the top down */}
      <motion.div
        className="absolute inset-0 origin-top rounded-full bg-[#FD7B41] shadow-[0_0_10px_2px_rgba(253,123,65,0.6)]"
        style={{ scaleY: reduce ? scrollYProgress : smooth }}
      />
    </div>
  );
}