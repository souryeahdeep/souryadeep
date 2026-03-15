import { TextAnimate } from "@/components/ui/text-animate";
import { AuroraText } from "@/components/ui/aurora-text";
import loved from "/loved.png";
import shocked from "/shocked.png";
import sleep from "/sleep.png";
import thinking from "/thinking.png";
import { FlipWords } from "../components/ui/flip-words";
import profileImageUrl from "/great_pic.png";

export default function HeroSec() {
  const words = [
    "Your friendly distant Java Developer",
    "Currently learning Docker",
    "Peeking into Codebases",
    "Ask me about Spring, Microservices!",
  ];

  return (
    <section
      id="home"
      className="w-full h-screen bg-black text-white flex justify-center items-center px-4 py-8 overflow-hidden relative"
    >
      {/* Gradient overlay */}

      <div className="w-full max-w-7xl h-full flex flex-col lg:flex-row gap-8 lg:gap-20 justify-center items-center relative z-10">
        <div className="flex flex-col gap-2 lg:gap-3.5 text-center lg:text-left">
          <h1 className="text-4xl  font-bold sm:text-5xl md:text-6xl lg:text-6xl">
            <AuroraText>SOURYADEEP</AuroraText>
          </h1>
          <h2 className="text-4xl liter-regular sm:text-5xl md:text-6xl lg:text-5xl font-bold">
            Ganguly
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl mt-2">
            <FlipWords words={words} duration={3000} className="text-white" />
            <TextAnimate by="text" delay={0.6} duration={1.5}>
              <img
                src={sleep}
                alt="sleeping emoji"
                className="inline-block w-6 h-6 ml-2 align-middle"
                aria-hidden="true"
              />
              <img
                src={shocked}
                alt="shocked emoji"
                className="inline-block w-6 h-6 ml-2 align-middle"
                aria-hidden="true"
              />
              <img
                src={thinking}
                alt="thinking emoji"
                className="inline-block w-6 h-6 ml-2 align-middle"
                aria-hidden="true"
              />
              <img
                src={loved}
                alt="loved emoji"
                className="inline-block w-6 h-6 ml-2 align-middle"
                aria-hidden="true"
              />
            </TextAnimate>
          </p>
        </div>
        <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 shrink-0">
          <img
            className="h-full w-full object-cover rounded-full border-4 border-red-300/70 shadow-2xl"
            src={profileImageUrl}
            alt="Souryadeep Ganguly"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
}
