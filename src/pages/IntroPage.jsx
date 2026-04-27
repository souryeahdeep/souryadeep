import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useGlobalAudio } from "@/contexts/AudioContext";
import neonCity from "/introback.png";

export default function IntroPage() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { playAudio, stopAudio } = useGlobalAudio();

  // Only stop audio if navigating back from another page, not on initial mount
  const handleReturnToIntro = () => {
    stopAudio();
  };

  const handleEnterDomain = () => {
    // Play background music when entering domain
    // Replace with your song path when ready
    playAudio("/backgroundaudio.mp3", true);
    
    // Navigate to about page
    navigate("/about");
  };

  return (
    <section
      id="intro-page"
      className="relative flex items-center justify-center w-screen h-screen bg-black overflow-hidden"
    >
      {/* Background image with vignette overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full overflow-hidden">
          {/* The actual image */}
          <img
            src={neonCity}
            alt="Neon-lit city street at night"
            className="absolute inset-0 w-full h-full object-cover animate-subtle-zoom"
          />

          {/* Dark vignette overlay around edges */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              boxShadow: "inset 0 0 150px 60px rgba(0, 0, 0, 0.85)",
            }}
          />

          {/* Subtle gradient overlay for text readability */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        </div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8 px-4">
        {/* Main heading */}
        <h1
          className="font-aclonica text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-wider text-center uppercase animate-fade-in-up animate-text-glow select-none"
          style={{ letterSpacing: "0.08em" }}
        >
          In The Mood For Code
        </h1>

        {/* CTA Button */}
        <button
          id="enter-domain-btn"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleEnterDomain}
          className="animate-fade-in-up-delay relative px-10 py-3.5 text-sm sm:text-base tracking-[0.25em] uppercase font-medium text-white/90 border border-white/20 bg-black/50 backdrop-blur-md cursor-pointer transition-all duration-500 ease-out hover:bg-white/10 hover:border-white/40 hover:text-white hover:tracking-[0.35em] hover:shadow-[0_0_30px_rgba(255,255,255,0.08)] focus:outline-none"
        >
          {/* Shimmer effect on hover */}
          <span
            className="absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none rounded-sm"
            style={{
              opacity: isHovered ? 0.15 : 0,
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
              backgroundSize: "200% 100%",
              animation: isHovered ? "shimmer 1.5s ease-in-out infinite" : "none",
            }}
          />
          <span className="relative z-10">Enter My Domain</span>
        </button>
      </div>

      {/* Bottom ambient gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none z-5" />
    </section>
  );
}
