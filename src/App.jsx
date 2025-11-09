
import './App.css'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import HeroSec from './components/HeroSec'
import EducationContact from './components/LastPart'
import Projects from './components/Projects'
import SkillsShowcase from './components/Skill'
import FloatingNavbar from './components/Navbar'
import {LightRays} from './components/ui/light-rays'
import { SmoothCursor } from "./components/ui/smooth-cursor"
function App() {

  return (
    <main className="w-full overflow-x-hidden relative">
      <HeroSec/>
     <AboutMe/>
     <SkillsShowcase/>
     <Projects/>
     <Experience/>
     <EducationContact/>
     
     {/* Global gradient overlay above all content but below navbar */}
     <div className="fixed inset-0 bg-linear-to-br from-red-100/20 via-transparent to-white/10 pointer-events-none z-40"></div>
     <FloatingNavbar />
    </main>
  )
}

export default App
