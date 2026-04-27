"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "@/components/ui/resizable-navbar";

export function AppNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About", link: "/about" },
    {name: "Projects", link: "/projects" },
    {name:"Experiences", link: "/experiences"},
  ];

  return (
    <Navbar>
      {/* Desktop Navbar */}
      <NavBody className="bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md">
        <div className="flex w-full items-center justify-center gap-20 px-8">
          {/* Logo */}
          <a href="/" className="text-white font-bold text-lg absolute left-8">
            Souryadeep
          </a>

          {/* Nav Items - Centered */}
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </NavBody>

      {/* Mobile Navbar */}
      <MobileNav>
        <MobileNavHeader>
          <a href="/" className="text-white font-bold text-lg">
            Souryadeep
          </a>
          <MobileNavToggle
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors w-full"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
