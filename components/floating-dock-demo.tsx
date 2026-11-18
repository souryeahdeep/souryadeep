import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBasket,
  IconBasketCode,
  IconBook,
  IconBrandGithub,
  IconBrandProducthunt,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconTimeDuration0,
  IconTimeline,
  IconUser,
  IconUserCode,
} from "@tabler/icons-react";

export default function FloatingDockDemo() {
  const links = [
    {
      title: "Products",
      symbol: "P",
      href: "/projects",
    },

    {
      title: "Home",
       symbol: "H",
      href: "/",
    },
    {
      title: "About",
      symbol: "A",
      href: "/about",
    },
    
    {
      title: "Stories",
       symbol: "S",
      href: "/stories",
    },

    {
      title: "Experience",
       symbol: "E",
      href: "/experience",
    },
    
  ];
  return (
    <div className="contents">
      <FloatingDock
        desktopClassName="fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
        mobileClassName="fixed bottom-6 right-6 z-50"
        items={links}
      />
    </div>
  );
}
