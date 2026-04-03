import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      id: 1,
      title: "CollegeSaathi",
      description: "The App that controlls everything in College. Divided into multiple microservices, it provides all the basic needs that a college system required.",
      link: "https://youtu.be/6NYnYtlq7jg?si=txDQDX1jRevldigb",
    },
    {
      id: 2,
      title: "BridgeOps",
      description: "BRINGS DEVELOPER, FOUNDERS, PROJECT MANAGERS ADMIN TOGETHER",
      link: "https://youtu.be/zgbUp22Kb1Q?si=7XnE5-mbU5-e20MP",
    }
  ];

  return (
    <section
      id="projects"
      ref={ref}
       style={{
            marginLeft:"10px"
          }}
      className="min-h-6 bg-black flex flex-col items-center py-16 sm:py-24 px-4 sm:px-6 md:px-10 gap-12"
    >
      <div className="w-full max-w-4xl flex flex-col gap-6 px-2 sm:px-4">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
        >
          projects I've built
        </motion.h2>

        <div  style={{
            marginLeft:"10px",
            marginRight:"10px"
          }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.15 }}
              className="bg-black/100  border border-white/10 rounded-2xl flex flex-col gap-4 hover:border-white/30 transition-colors"
              style={{ padding: "30px" }}
            >
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed grow">
                {project.description}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-white font-medium mt-2 hover:text-white/80 transition-colors self-start"
                >
                  View Project
                  <span aria-hidden="true" className="text-xl leading-none">↗</span>
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
