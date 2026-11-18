"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { IconArrowLeftDashed, IconArrowRightDashed, IconArrowWaveLeftDown, IconSignLeft } from "@tabler/icons-react";

/* ---------- edit these: swap in your own photos ---------- */
const items = [
  {
    title: "best hack @Diversion",
    image:"/gal1.jpg",
    className: "absolute top-10 left-[20%] rotate-[-5deg]",
  },
  {
    title: "chicken dinner @Bin2k26",
    image:
      "/gal2.jpeg",
    className: "absolute top-40 left-[25%] rotate-[-7deg]",
  },
  {
    title: "roomful of experts!!",
    image:
      "/gal3.jpg",
    className: "absolute top-5 left-[40%] rotate-[8deg]",
  },
  {
    title: "goat pic",
    image:
      "/gal4.jpg",
    className: "absolute top-32 left-[55%] rotate-[10deg]",
  },
  {
    title: "first hack @Innvocon2k25",
    image:
      "/gal5.jpg",
    className: "absolute top-20 right-[35%] rotate-[2deg]",
  },
  {
    title: "most effortless first prize @InnvoconS2",
    image:
      "/gal7.jpeg",
    className: "absolute top-8 left-[30%] rotate-[4deg]",
  },
];
/* ---------------------------------------------------------- */

const roundBtn =
  "grid h-10 w-10 place-items-center rounded-full border border-[#3C4044]/20 font-sans text-lg text-[#3C4044] transition-colors duration-500 hover:border-[#FD7B41] hover:text-[#FD7B41] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FD7B41] dark:border-[#DDDCDB]/20 dark:text-[#DDDCDB] dark:hover:border-[#FD7B41] dark:hover:text-[#FD7B41]";

export default function GalleryBoard() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState<number | null>(null);
  const isOpen = open !== null;

  const downPos = useRef<{ x: number; y: number } | null>(null);
  const trigger = useRef<HTMLElement | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpen(null);
    trigger.current?.focus(); // give focus back to the card that was opened
  }, []);

  const step = useCallback((dir: number) => {
    setOpen((i) => (i === null ? i : (i + dir + items.length) % items.length));
  }, []);

  // keyboard, scroll lock and focus handling while the dialog is open
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);

      // keep Tab inside the dialog
      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          "button, [href], [tabindex]:not([tabindex='-1'])",
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, close, step]);

  // A drag also ends with a click, so only treat a small movement as a click
  const handlePointerDown = (e: React.PointerEvent) => {
    downPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const start = downPos.current;
    downPos.current = null;
    if (start && Math.hypot(e.clientX - start.x, e.clientY - start.y) > 6) {
      return; // it was a drag
    }
    trigger.current = e.currentTarget;
    setOpen(index);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, index: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      trigger.current = e.currentTarget;
      setOpen(index);
    }
  };

  const current = open !== null ? items[open] : null;

  return (
    <>
      <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
        <p className="instrument-serif-regular absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-3xl text-[#3C4044]/30 md:text-5xl dark:text-[#DDDCDB]/25">
            Life is about making memories
        </p>

        {items.map((item, index) => (
          <DraggableCardBody key={item.title} className={item.className}>
            <div
              role="button"
              tabIndex={0}
              aria-label={`Open ${item.title}`}
              onPointerDown={handlePointerDown}
              onClick={(e) => handleClick(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="cursor-pointer rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FD7B41]"
            >
              <div className="w-64 md:w-80">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt=""
                  draggable={false}
                  className="pointer-events-none relative z-10 block h-auto max-h-[26rem] w-full object-contain"
                />
              </div>
              <h3 className="instrument-serif-regular mt-4 text-center text-2xl text-[#3C4044] dark:text-[#DDDCDB]">
                {item.title}
              </h3>
            </div>
          </DraggableCardBody>
        ))}
      </DraggableCardContainer>

      {/* DIALOG */}
      <AnimatePresence>
        {current && open !== null && (
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={current.title}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#3C4044]/60 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => {
              if (e.target === e.currentTarget) close(); // click on the backdrop
            }}
          >
            <motion.figure
              className="relative flex max-h-full w-full max-w-4xl flex-col gap-4 rounded-3xl border border-[#3C4044]/15 bg-[#DDDCDB] p-4 dark:border-[#DDDCDB]/15 dark:bg-[#3C4044] md:p-6"
              initial={reduce ? false : { opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                aria-label="Close photo"
                className={`${roundBtn} absolute -top-3 -right-3 z-10 bg-[#DDDCDB] dark:bg-[#3C4044]`}
              >
                ✕
              </button>

              <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  key={current.image}
                  src={current.image}
                  alt={current.title}
                  className="max-h-[70vh] w-auto max-w-full object-contain"
                />
              </div>

              <figcaption className="flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous photo"
                  className={roundBtn}
                >
                  <IconArrowLeftDashed/>
                </button>
                <div className="text-center">
                  <p className="instrument-serif-regular text-2xl text-[#3C4044] dark:text-[#DDDCDB]">
                    {current.title}
                  </p>
                  <p className="font-sans text-sm text-[#3C4044]/75 dark:text-[#DDDCDB]/75">
                    {open + 1} of {items.length}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next photo"
                  className={roundBtn}
                >
                  <IconArrowRightDashed/>
                </button>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}