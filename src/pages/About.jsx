import { Mail, Linkedin, Github, Twitter, User, Code, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import NavbarDemo from "@/components/resizable-navbar-demo";

export default function About() {
  const navigate = useNavigate();
  const [isProfileHovered, setIsProfileHovered] = useState(false);

  const handleGalleryClick = () => {
    navigate("/gallery");
  };

  const handleResumeClick = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <div className="min-h-screen font-archivo text-white" style={{background: ""}}>
      
      {/* Universal Navbar */}
      <NavbarDemo/>
      
      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 md:px-9 py-10 pt-32">
        <div className="">
         
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12 animate-fade-in">
            {/* Profile Section */}
            <div className="space-y-6 animate-fade-in animation-delay-100">
              {/* Profile Image */}
              <div 
                className="w-full h-64 rounded-2xl border border-green-500/20 overflow-hidden relative cursor-pointer transition-all duration-300 hover:border-green-400 hover:scale-105 transform animate-fade-in"
                onMouseEnter={() => setIsProfileHovered(true)}
                onMouseLeave={() => setIsProfileHovered(false)}
              >
                <img 
                  src="/download.gif" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
                {isProfileHovered && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-2xl animate-in fade-in duration-200">
                    <p className="text-green-400 text-center px-6 italic font-light text-sm md:text-base leading-relaxed">
                      "It gets easier. Every day it gets a little easier. But you gotta do it every day — that's the hard part. But it does get easier"
                    </p>
                  </div>
                )}
              </div>

              {/* Main Heading */}
              <div className="space-y-2 animate-fade-in animation-delay-200">
                <h1 className="text-4xl font-light md:text-5xl font-bold text-white animate-fade-in animation-delay-300">
                  HELLO, I'M SOURYADEEP
                </h1>
                <p className="text-lg text-green-400 italic font-light animate-fade-in animation-delay-400">
                  your friendly distant Backend Dev 
                </p>
              </div>

              {/* Bio */}
              <p className="text-gray-300 leading-relaxed max-w-3xl animate-fade-in animation-delay-500">
I love building products that solve real problems at scale. Whether it's tackling algorithmic challenges or developing full-stack applications, I'm driven by the process of turning complex ideas into simple, effective solutions. DSA has sharpened my analytical thinking, while development gives me the opportunity to bring those ideas to life. Hackathons have further shaped my journey, teaching me teamwork, rapid execution, and how to thrive under pressure.              </p>
              <p className="text-gray-300 leading-relaxed max-w-3xl animate-fade-in animation-delay-600">
                Aside from tech, I enjoy movies, books, and introspecting into human life.
              </p>

              {/* CTA Buttons */}
              <div className="flex gap-4 pt-4 animate-fade-in animation-delay-700">
                <button onClick={handleGalleryClick} className="px-6 py-2 border border-green-500/50 text-green-400 rounded-full hover:bg-green-500/10 transition-all duration-300 hover:border-green-400 hover:scale-110 transform">
                  Gallery
                </button>
                <button onClick={handleResumeClick} className="px-6 py-2 border border-green-500/50 text-green-400 rounded-full hover:bg-green-500/10 transition-all duration-300 hover:border-green-400 hover:scale-110 transform">
                  Resume
                </button>
              </div>
            </div>

            {/* Skills Section */}
            <div className="space-y-6 pt-2 animate-fade-in animation-delay-800">
              <h2 className="text-2xl font-bold text-white italic animate-fade-in">
                Skills I possess to be useful
              </h2>

              <div className="space-y-4 text-gray-300">
                <div className="hover:translate-x-2 transition-transform duration-300 animate-fade-in animation-delay-100">
                  <span className="text-green-400 font-semibold">Languages : </span>
                  <span>Java, Javascript, Python</span>
                </div>
                <div className="hover:translate-x-2 transition-transform duration-300 animate-fade-in animation-delay-200">
                  <span className="text-green-400 font-semibold">Frontend : </span>
                  <span>React.JS, Tailwind CSS, UI Libraries</span>
                </div>
                <div className="hover:translate-x-2 transition-transform duration-300 animate-fade-in animation-delay-300">
                  <span className="text-green-400 font-semibold">Backend : </span>
                  <span>Spring Ecosystem, Kafka, Redis, PostgreSQL</span>
                </div>
              </div>
            </div>

            {/* Get in Touch Section */}
            <div className="space-y-6 pt-2 animate-fade-in animation-delay-900">
              <h2 className="text-2xl font-bold text-white italic animate-fade-in">
                Get in Touch
              </h2>
              <p className="text-gray-300 leading-relaxed max-w-3xl animate-fade-in animation-delay-100">
                I'm always excited to connect with fellow developers, collaborators and potential employers. Whether you have a project in mind, want to chat about tech, or just want to say hi, feel free to reach out at <span className="text-blue-300"> souryadeep05@gmail.com </span> or through my social media channels below!
              </p>

              {/* Social Icons */}
              <div className="flex gap-6 pt-4 animate-fade-in animation-delay-200">
                
                <a
                  href="https://www.linkedin.com/in/souryadeep-ganguly-b46054240"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center hover:bg-green-500/20 hover:border-green-400 transition-all duration-300 hover:scale-125 hover:-translate-y-1 transform"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-green-400" />
                </a>
                <a
                  href="https://github.com/souryeahdeep"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center hover:bg-green-500/20 hover:border-green-400 transition-all duration-300 hover:scale-125 hover:-translate-y-1 transform"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-green-400" />
                </a>
                <a
                  href="https://x.com/jealous_caesar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center hover:bg-green-500/20 hover:border-green-400 transition-all duration-300 hover:scale-125 hover:-translate-y-1 transform"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-green-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
