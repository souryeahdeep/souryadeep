import { useRef } from "react";
import { motion as Motion, useInView } from "framer-motion";

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  

  return (
    <section
      id="about-me-skills"
      ref={ref}
      className="min-h-screen bg-[#0d0d0d] flex flex-col justify-center px-10 md:px-20 py-24"
    >
      
    </section>
  );
}
