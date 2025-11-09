import { useState, useEffect } from "react";
import { Home, User, Contact, Hammer, File, Clock } from "lucide-react";
import { ScrollProgress } from "../components/ui/scroll-progress";
export default function FloatingNavbar() {
  const [activeSection, setActiveSection] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const navItems = [
    { icon: Home, label: "Home", href: "#home" },
    { icon: User, label: "About Me", href: "#aboutme" },
    { icon: Hammer, label: "Skills", href: "#skills" },
    { icon: File, label: "Projects", href: "#projects" },
    { icon: Clock, label: "Experience", href: "#experience" },
    { icon: Contact, label: "Contact", href: "#contact" },
  ];

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.querySelector(item.href));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (index, href) => {
    setActiveSection(index);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="font-[Aclonica] bg-linear-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
      {/* Floating Navbar */}
            <ScrollProgress className="top-0" />

      <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-linear-to-r from-gray-900 to-black backdrop-blur-lg rounded-full px-4 py-2 shadow-2xl border border-gray-800 z-50">
          <div className="flex items-center gap-1.5">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === index;
              const isHovered = hoveredIndex === index;

              return (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(index, item.href);
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative group"
                  aria-label={item.label}
                >
                  <div
                    className={`
                      p-3 rounded-full transition-all duration-300 ease-out cursor-pointer
                      ${
                        isActive
                          ? "bg-white text-black scale-110"
                          : "bg-transparent text-white hover:bg-gray-800"
                      }
                      ${isHovered && !isActive ? "scale-125" : ""}
                    `}
                    style={{
                      transform: isActive
                        ? "scale(1.1)"
                        : isHovered
                        ? "scale(1.25)"
                        : "scale(1)",
                    }}
                  >
                    <Icon
                      size={20}
                      className="transition-transform duration-300"
                      strokeWidth={isActive ? 2.5 : 2}
                    />
                  </div>

                  {/* Tooltip */}
                  <div
                    className={`
                      absolute -top-12 left-1/2 transform -translate-x-1/2
                      bg-white text-black text-xs font-medium px-3 py-1.5 rounded-lg
                      whitespace-nowrap pointer-events-none
                      transition-all duration-200
                      ${
                        isHovered
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-2"
                      }
                    `}
                  >
                    {item.label}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-white" />
                  </div>

                  {/* Active indicator dot */}
                  {isActive && (
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                    </div>
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}
