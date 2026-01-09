
import './App.css'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import HeroSec from './components/HeroSec'
import EducationContact from './components/LastPart'
import Projects from './components/Projects'
import SkillsShowcase from './components/Skill'
import FloatingNavbar from './components/Navbar'
import { ScrollProgress } from './components/ui/scroll-progress'

function App() {

  return (
    <main className="w-full overflow-x-hidden relative">
      <ScrollProgress className="h-1" />
      {/* Gradient Background with Pattern */}
      <div className="fixed inset-0 z-0">
        {/* Main Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0f0a] via-[#2d1810] to-[#0f0a08]"></div>
        
        {/* Hexagonal Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        ></div>
        
        {/* Radial Gradient Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <HeroSec/>
        <AboutMe/>
        <SkillsShowcase/>
        <Projects/>
        <Experience/>
        <EducationContact/>
      </div>
     
     {/* Global gradient overlay above all content but below navbar */}
     <div className="fixed inset-0 bg-linear-to-br from-red-100/20 via-transparent to-white/10 pointer-events-none z-40"></div>
     <FloatingNavbar />
    </main>
  )
}

export default App
