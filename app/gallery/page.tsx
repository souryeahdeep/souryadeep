import type { Metadata } from "next";
import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";
import GalleryBoard from "@/components/gallery-board";

export const metadata: Metadata = {
  title: "Gallery | Souryadeep",
  description: "A drag and drop gallery of photos by Souryadeep.",
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#DDDCDB] font-sans selection:bg-amber-500 dark:bg-[#3C4044]">
      <ThemeToggle />

      {/* fixed, so the cards can't cover it */}
      <Link
        href="/"
        className="fixed top-6 left-6 z-50 rounded-full border border-[#3C4044]/20 bg-[#E1D5CB]/70 px-4 py-2 text-sm text-[#3C4044] backdrop-blur-md transition-colors duration-500 hover:border-[#FD7B41] hover:text-[#FD7B41] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FD7B41] dark:border-[#DDDCDB]/20 dark:bg-[#4C5053]/70 dark:text-[#DDDCDB] dark:hover:border-[#FD7B41] dark:hover:text-[#FD7B41]"
      >
        ← Back home
      </Link>

      <main>
        <h1 className="sr-only">Gallery</h1>
        <GalleryBoard />
      </main>
    </div>
  );
}