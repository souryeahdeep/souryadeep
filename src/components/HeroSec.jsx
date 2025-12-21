import myImage from "/myImage.png";
import { motion } from "framer-motion";
import { TextAnimate } from "@/components/ui/text-animate";
import { AuroraText } from "@/components/ui/aurora-text";
import loved from "/loved.png";
import shocked from "/shocked.png";
import sleep from "/sleep.png";
import thinking from "/thinking.png";

export default function HeroSec() {
  return (
    <section
      id="home"
      className="w-full h-screen bg-black text-white flex justify-center items-center px-4 py-8 overflow-hidden relative"
    >
      {/* Gradient overlay */}

      <div className="w-full max-w-7xl h-full flex flex-col lg:flex-row gap-8 lg:gap-20 justify-center items-center relative z-10">
        <motion.div
          className="flex flex-col gap-2 lg:gap-3.5 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AuroraText>SOURYADEEP</AuroraText>
          </motion.h1>
          <motion.h2
            className="text-4xl liter-regular sm:text-5xl md:text-6xl lg:text-5xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Ganguly
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <TextAnimate
              by="word"
              delay={0.6}
              duration={1.5}
              className=""
            >
              Your friendly distant Java Developer            </TextAnimate>
            <TextAnimate by="text" delay={0.6} duration={1.5}>
             <img src={sleep} alt="sleeping emoji" className="inline-block w-6 h-6 ml-2 align-middle" aria-hidden="true" />
              <img src={shocked} alt="shocked emoji" className="inline-block w-6 h-6 ml-2 align-middle" aria-hidden="true" />
              <img src={thinking} alt="thinking emoji" className="inline-block w-6 h-6 ml-2 align-middle" aria-hidden="true" />
              <img src={loved} alt="loved emoji" className="inline-block w-6 h-6 ml-2 align-middle" aria-hidden="true" />
            </TextAnimate>
          </motion.p>
        </motion.div>
        <motion.div
          className="h-64 sm:h-80 lg:h-[60vh] max-h-[500px] shrink-0"
          initial={{ opacity: 0, x: 50, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <img
            className="h-full w-auto object-cover rounded-lg"
            src={myImage}
            alt="Souryadeep Ganguly"
          />
        </motion.div>
      </div>
    </section>
  );
}
