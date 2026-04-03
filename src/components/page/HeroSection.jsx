import { motion as Motion } from "framer-motion";
import { FlipWords } from "../ui/flip-words";
import lovedEmo from "../../../public/loved.png";
import thinkingEmo from "../../../public/thinking.png";
import nerdyEmo from "../../../public/nerdy.png";
import shockedEmo from "../../../public/shocked.png";

export default function HeroSection() {
  const words = [
    {
      text: "Your friendly distant Java Developer",
      image: lovedEmo,
      alt: "loved",
    },
    {
      text: "Currently learning Docker",
      image: thinkingEmo,
      alt: "thinking",
    },
    {
      text: "Peeking into Codebases",
      image: nerdyEmo,
      alt: "nerdy",
    },
    {
      text: "Ask me about Spring, Microservices!",
      image: shockedEmo,
      alt: "shocked",
    },
  ];
  return (
    <section
      id="hero"
      className="min-h-screen bg-black flex items-center justify-center px-6 sm:px-10 overflow-hidden"
    >
      <div className="w-full max-w-6xl flex flex-col items-center text-center -mt-8 sm:-mt-2 overflow-hidden">
        <Motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-[3.6rem] leading-[0.98] sm:text-[6rem] md:text-[7.2rem] lg:text-[9rem]  text-white tracking-tight"
        >
          hi, i'm souryadeep.
        </Motion.h1>
        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="mt-6 sm:mt-8 text-[0.7rem] sm:text-[0.36rem] md:text-[1.35rem] text-white/95 max-w-[90vw]"
        >
          <FlipWords words={words} duration={3000} className="text-white break-all" />
        </Motion.p>
      </div>
    </section>
  );
}
