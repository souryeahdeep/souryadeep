import { motion, useScroll } from "motion/react";

import { cn } from "@/lib/utils"

export function ScrollProgress({
  className,
  ref,
  ...props
}) {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      ref={ref}
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-px origin-left bg-transparent",
        className
      )}
      style={{
        scaleX: scrollYProgress,
        background: "linear-gradient(90deg, #F5F5F5 0%,#FF6B6B 50%,  #E63946 100%)",
      }}
      {...props} />
  );
}
