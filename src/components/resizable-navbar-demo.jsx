"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalAudio } from "@/contexts/AudioContext";

export default function NavbarDemo() {
  const navItems = [
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Experiences",
      link: "/experiences",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Stories",
      link: "/stories",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMessageButtonHovered, setIsMessageButtonHovered] = useState(false);
  const navigate = useNavigate();
  const { stopAudio } = useGlobalAudio();
  const { theme, toggleTheme } = useTheme();

  const handleMobileNavigation = (link) => {
    // Stop audio only when navigating back to intro page
    if (link === "/") {
      stopAudio();
    }
    navigate(link);
    setIsMobileMenuOpen(false);
  };
  // Reusable theme toggle button
  const ThemeToggle = (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative z-50 w-10 h-10 shrink-0 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center hover:bg-green-500/20 hover:border-green-400 transition-all duration-300 hover:scale-110 cursor-pointer"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-green-400" />
      ) : (
        <Moon className="w-5 h-5 text-green-600" />
      )}
    </button>
  );
  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            {ThemeToggle}
           
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <div className="flex items-center gap-3">
              {ThemeToggle}
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <button
                key={`mobile-link-${idx}`}
                onClick={() => handleMobileNavigation(item.link)}
                className="relative text-neutral-600 dark:text-neutral-300 bg-transparent border-none cursor-pointer w-full text-left"
              >
                <span className="block">{item.name}</span>
              </button>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
