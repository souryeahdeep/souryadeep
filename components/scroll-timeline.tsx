"use client";

import { useLayoutEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

export interface TimelineItem {
  period: string;
  title: string;
  subtitle?: string;
  description: string;
  tags?: string[];
}

export function ScrollTimeline({
  items,
  className,
}: {
  items: TimelineItem[];
  className?: string;
}) {
  const reduce = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const fractions = useRef<number[]>([]);
  const [active, setActive] = useState(0);

  // 0 when the container top reaches the middle of the screen,
  // 1 when its bottom does. The glowing tip follows the screen middle.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.5", "end 0.5"],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  const headTop = useTransform(smooth, [0, 1], ["0%", "100%"]);
  const headOpacity = useTransform(smooth, [0, 0.02, 0.98, 1], [0, 1, 1, 0]);

  // A dot lights up once the line has reached it.
  const update = () => {
    const p = smooth.get();
    setActive(fractions.current.filter((f) => p >= f).length);
  };

  const measure = () => {
    const c = containerRef.current;
    if (!c) return;
    const h = c.offsetHeight || 1;
    fractions.current = itemRefs.current.map((li) =>
      li ? (li.offsetTop + 10) / h : 1,
    );
    update();
  };

  useLayoutEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length]);

  useMotionValueEvent(smooth, "change", update);

  const lit = (i: number) => reduce || i < active;

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      {/* faint track */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-4 top-0 w-0.5 -translate-x-1/2 rounded-full bg-[#3C4044]/20 dark:bg-[#DDDCDB]/20"
      />

      {/* glowing fill */}
      <motion.div
        aria-hidden="true"
        className="absolute bottom-0 left-4 top-0 w-0.5 -translate-x-1/2 origin-top rounded-full bg-[#FD7B41] shadow-[0_0_12px_2px_rgba(253,123,65,0.7)]"
        style={{ scaleY: reduce ? 1 : smooth }}
      />

      {/* glowing tip */}
      {!reduce && (
        <motion.div
          aria-hidden="true"
          className="absolute left-4 z-10 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EDBF9B] shadow-[0_0_18px_6px_rgba(253,123,65,0.8)]"
          style={{ top: headTop, opacity: headOpacity }}
        />
      )}

      <ol className="flex flex-col gap-10">
        {items.map((item, i) => (
          <li
            key={`${item.title}-${i}`}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            className="relative pl-12 md:pl-16"
          >
            {/* dot */}
            <span
              aria-hidden="true"
              className="absolute left-4 top-1 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-[#3C4044]/30 bg-[#DDDCDB] dark:border-[#DDDCDB]/30 dark:bg-[#3C4044]"
            >
              <motion.span
                className="absolute -inset-0.5 rounded-full bg-[#FD7B41] shadow-[0_0_16px_4px_rgba(253,123,65,0.6)]"
                initial={false}
                animate={
                  lit(i) ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
                }
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </span>

            {/* card */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "rounded-2xl border bg-[#EDBF9B]/30 p-6 transition-colors duration-500 dark:bg-[#DDDCDB]/5",
                lit(i)
                  ? "border-[#FD7B41]/50"
                  : "border-[#3C4044]/15 dark:border-[#DDDCDB]/15",
              )}
            >
              <p className="font-sans text-sm font-semibold text-[#FD7B41]">
                {item.period}
              </p>
              <h3 className="instrument-serif-regular mt-1 text-2xl text-[#3C4044] dark:text-[#DDDCDB]">
                {item.title}
              </h3>
              {item.subtitle && (
                <p className="font-sans text-sm text-[#3C4044]/75 dark:text-[#DDDCDB]/75">
                  {item.subtitle}
                </p>
              )}
              <p className="mt-3 font-sans text-base leading-7 text-[#3C4044]/75 dark:text-[#DDDCDB]/75">
                {item.description}
              </p>
              {item.tags && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-[#3C4044]/20 px-2 py-0.5 font-sans text-xs font-medium text-[#3C4044] dark:border-[#DDDCDB]/20 dark:text-[#DDDCDB]"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          </li>
        ))}
      </ol>
    </div>
  );
}