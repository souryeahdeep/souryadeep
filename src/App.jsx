import AboutSection from "./components/page/AboutSection";
import HeroSection from "./components/page/HeroSection";
import NavSection from "./components/page/NavSection";

export default function App() {
  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #000; font-family: 'Balsamiq Sans', sans-serif; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #000; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 2px; }
      `}</style>

      <div className="bg-black text-white">
        <NavSection />
        <HeroSection />
        <AboutSection />
      </div>
    </>
  );
}
