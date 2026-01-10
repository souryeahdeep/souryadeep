import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "motion/react";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <div className={cn("relative p-[2px] group", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-45 group-hover:opacity-75 blur-lg transition duration-500 will-change-transform",
          " bg-[radial-gradient(circle_farthest-side_at_0_100%,#FF6B6B,transparent),radial-gradient(circle_farthest-side_at_100%_0,#F5F5F5,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#1A1A1A,transparent),radial-gradient(circle_farthest-side_at_0_0,#E63946,#1A1A1A)]"
        )} />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-65 will-change-transform",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#FF6B6B,transparent),radial-gradient(circle_farthest-side_at_100%_0,#F5F5F5,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#1A1A1A,transparent),radial-gradient(circle_farthest-side_at_0_0,#E63946,#1A1A1A)]"
        )} />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
