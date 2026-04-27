import { Routes, Route } from "react-router-dom";
import { AudioProvider } from "./contexts/AudioContext";
import IntroPage from "./pages/IntroPage";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Gallery from "./pages/Gallery";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <AudioProvider>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/experiences" element={<Experience />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </AudioProvider>
  );
}
