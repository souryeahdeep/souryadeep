import { useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import ProjectsSection from "./ProjectsSection";
import ExperienceSection from "./ExperienceSection";

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedJob, setExpandedJob] = useState(null);
  
  const skills = [
    { label: "languages", value: "Java, Javascript, Python" },
    {
      label: "frontend",  
      value: "ReactJS, TailwindCSS, UI Libraries",
    },
    { label: "backend", value: "Spring Ecosystem, PostgreSQL, Kafka, Microservices" },
  ];
  

  return (
    <section
      id="about-me"
      ref={ref}
      className="min-h-screen bg-amber-50 dark:bg-black flex flex-col items-center justify-center 
             gap-12 sm:gap-16 md:gap-20 px-6 sm:px-6 md:px-10 py-12 sm:py-16 md:py-24"
    >
      {/* About Me */}
      <div className="w-full max-w-4xl flex flex-col gap-6 px-4 sm:px-6 md:px-8 bg-amber-50 dark:bg-black"
      
      >
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            marginLeft:"10px"
          }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mx-10 sm:mx-10 lg:mx-10 md:mx-10"
        >
          professional yapping
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{
            marginLeft:"10px"
          }}
          className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed"
        >
          I am a developer who loves to design and ship scalable products that
          matter. I enjoy solving coding problems and making them efficient. 
          Balancing problem-solving with real-world development is
          something I truly enjoy. Hackathons have been a huge learning
          experience, helping me collaborate and build under pressure.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            marginLeft:"10px"
          }}
          className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed"
        >
          Aside from tech, I enjoy movies, books, and introspecting into human life.
        </motion.p>
      </div>

      {/* Skills */}
      <div className="w-full max-w-4xl flex flex-col gap-8 px-4 sm:px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
           style={{
            marginLeft:"10px"
          }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
        >
          skills i posses to be useful
        </motion.h2>

        <div  style={{
            marginLeft:"10px"
          }} className="flex flex-col gap-5">
          {skills.map((s, i) => (
            <motion.p
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
              className="text-white text-base sm:text-lg md:text-xl"
            >
              <span className="font-semibold">{s.label}</span>
              <span className="text-white/70"> : {s.value}</span>
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-sm text-white/50 italic self-start sm:self-end text-left sm:text-right"
        >
          <p  style={{
            marginLeft:"10px"
          }}>does VibeCoding count? ;)</p>
        </motion.div>
      </div>

      {/* Projects */}

      <ProjectsSection />

          <ExperienceSection/>
      <section  style={{
            marginLeft:"10px",
            marginRight:"10px"
          }} className="w-full h-[300px] max-w-4xl flex flex-col gap-6 sm:gap-8 px-4 sm:px-6 md:px-8 pb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-center">
            GET IN TOUCH
          </h1>
          <p className="text-white/80 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-center">
            I'm always excited to connect with fellow developers, collaborators and potential employers. Whether you have a project in mind, want to chat about tech, or just want to say hi, feel free to reach out!
          </p>

      </section>
    </section>
  );
}
