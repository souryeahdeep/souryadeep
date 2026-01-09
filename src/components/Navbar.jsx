
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandMailgun,
  IconBrandX,
  IconClock,
  IconExchange,
  IconExposure,
  IconHammer,
  IconHome,
  IconNewSection,
  IconPackage,
  IconTerminal2,
  IconTimeDuration45,
  IconUser,
} from "@tabler/icons-react";

export default function FloatingNavbar() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#home",
    },

    {
      title: "About Me",
      icon: (
        <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#aboutme",
    },
    {
      title: "Skills",
      icon: (
        <IconHammer className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#skills",
    },
    {
      title: "Projects",
       icon: (
        <IconPackage className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "Experience",
      icon: (
        <IconClock className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#experience",
    },
    {
      title: "Contact",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contact",
    },
  ];
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-4 pb-[env(safe-area-inset-bottom)]">
      <div className="pointer-events-auto">
        <FloatingDock
          desktopClassName="shadow-2xl border border-white/10 bg-transparent backdrop-blur-xl dark:bg-neutral-900/90 px-2 py-2"
          items={links} />
      </div>
    </div>
  );
}

