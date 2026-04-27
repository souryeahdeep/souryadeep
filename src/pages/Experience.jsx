import { ChevronRight } from "lucide-react";
import NavbarDemo from "@/components/resizable-navbar-demo";

const workexperiences = [
  {
    date: "Oct' 2025 - Dec' 2025",
    location: "Remote",
    company: "VitaminG Studios",
    position: "Frontend Developement Intern",
    description:
      "Worked on the frontend of the Tactical Hive project, built with React, TypeScript, and Tailwind CSS. Implemented responsive UI components, integrated APIs, and collaborated with the design team to create an intuitive user experience.",
  },
];
const hackathonexperiences = [
  {
    date: "March 2026",
    location: "Kalyani, WestBengal, India",
    hackathon: "Binary v2",
    badge: "⭐ Winner of Judge's and Mentor's Favorite Team",
    project: "SentinelIQ",
    description:
      "SentinelIQ is an AI-powered forensics platform that unifies scene analysis, biometrics, audio processing, and suspect identification into a single real-time intelligence system. It transforms fragmented, slow investigations into rapid, data-driven decision-making by instantly synthesizing evidence into actionable insights.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Python", "FastAPI"],
    link: "#",
  },
  {
    date: "January 2026",
    location: "Kolkata, India",
    hackathon: "IEM Diversion 2k26",
    project: "BridgeOps",
    description:
     "BridgeOps is an extension of VS Code, that automizes everything you need for making an App. Better to call it a B2B Platform. Want to make a change in the code using AI Chat and inform other? Need to create team of developers and communicate? Need to generate issues and assign to developers? Wanna explain the whole codebases to junior developers? Want to assign tasks to users? Our platform helps you to do all that in a single window. "
        ,
    tags: ["NextJS", "TypeScript", "Tailwind CSS", "Python"],
    link: "#",
  },
];

export default function Experience() {
  return (
    <div
      className="min-h-screen font-archivo text-white"
      style={{ background: "" }}
    >
      {/* Universal Navbar */}
      <NavbarDemo />

      {/* Work Container */}
      <div className="max-w-4xl mx-auto px-9 py-10 pt-32 animate-fade-in">
        <div className="flex flex-col gap-3 animate-fade-in animation-delay-100">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white animate-fade-in animation-delay-200">
            Work EXPERIENCE
          </h1>
          <h3 className="text-sm sm:text-base md:text-lg font-light text-gray-300 animate-fade-in animation-delay-300">
            I have just started my journey in the world of software development,
            and I am eager to gain hands-on experience and contribute to
            real-world projects. I am actively seeking internships and
            entry-level positions where I can apply my skills, learn from
            experienced professionals, and grow as a developer.
          </h3>
        </div>
        <div className="pt-10 space-y-12">
            {workexperiences.map((experience, idx) => (
              <div key={idx} className="space-y-4 animate-fade-in animation-delay-400 hover:translate-x-2 transition-transform duration-300">
                <div className="flex items-center gap-4 text-xs sm:text-sm text-green-400">
                    <span>{experience.date}</span>
                    <span>•</span>
                    <span>{experience.location}</span>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base md:text-lg font-medium text-white">
                    <span>{experience.position}</span>
                    <span className="text-green-400">@</span>
                    <span>{experience.company}</span>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
                    {experience.description}
                </p>
              </div>
            ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-9 py-10 pt-32 animate-fade-in animation-delay-500">
        <div className="flex flex-col gap-3 animate-fade-in animation-delay-600">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white animate-fade-in animation-delay-700">
            Hackathon EXPERIENCE
          </h1>
          <h3 className="text-sm sm:text-base md:text-lg font-light text-gray-300 animate-fade-in animation-delay-800">
            Hackathons are meant to teach us how to build under pressure, collaborate with tech geeks and I have participated in a few of them. 
            I am excited to continue participating in hackathons to learn, grow, and connect with other developers.
          </h3>
        </div>
        <div className="pt-10 space-y-12">
            {hackathonexperiences.map((experience, idx) => (
              <div key={idx} className="space-y-4 animate-fade-in animation-delay-100 hover:translate-x-2 transition-transform duration-300">
                <div className="flex items-center gap-4 text-xs sm:text-sm text-green-400">
                    <span>{experience.date}</span>
                    <span>•</span>
                    <span>{experience.location}</span>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base md:text-lg font-medium text-white">
                    <span>{experience.project}</span>  
                    <span className="text-green-400">@</span>
                    <span>{experience.hackathon}</span>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
                    {experience.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {experience.tags.map((tag, idx) => (
                        <span key={idx} className="text-xs text-green-400 border border-green-400 rounded-full px-2 py-1 hover:bg-green-400/10 transition-all duration-300">
                            {tag}
                        </span>
                    ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
