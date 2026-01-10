import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section id="aboutme" className="w-full min-h-screen bg-black text-white flex justify-center items-center px-6 sm:px-8 py-16 overflow-hidden relative">
      {/* Gradient overlay */}

      <motion.div
        className="max-w-3xl w-full relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-5xl text-red-300 sm:text-5xl md:text-4xl font-semibold mb-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Some yapping
        </motion.h2>

        <motion.p
          className="text-xl sm:text-2xl md:text-2xl leading-relaxed font-medium mb-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Hi, I am Souryadeep. A passionate developer with a knack for
          crafting efficient and scalable software solutions. I thrive on
          turning complex problems into elegant code. I love collaborating with
          cross-functional teams to bring innovative ideas to life. 
        </motion.p>

        <motion.p
          className="text-xl md:text-2xl sm:text-3xl leading-relaxed font-medium"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          Other than that, I love movies, books, and introspecting into human
          life. Ain't much of a sports guy but some matches interest me.
        </motion.p>
      </motion.div>
    </section>
  );
}
