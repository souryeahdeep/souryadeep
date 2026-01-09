import reactStick from "/react.com.png";
import tailwind from "/tailwind.png";
import microservices from "/microservices-5.svg";
import springBoot from "/spring-boot.svg";
import java from "/java.png";
import { motion } from "framer-motion";

import nerdy from "/nerdy.png";
export default function SkillsShowcase() {
  return (
    <section id="skills" className="min-h-screen bg-black text-white flex items-center justify-center p-8">
      <motion.div className="max-w-3xl w-full">
        <motion.h1 className="text-4xl text-red-300 md:text-4xl font-bold mb-16">
          Fine, here are my skills :
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6">
            <motion.div className="text-3xl md:text-3xl font-bold flex items-center gap-3"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.05 }}
                        viewport={{ once: true }}>
              ReactJS 
              <img src={reactStick} alt="React" className="w-8 h-8 object-contain" />
            </motion.div>
            <motion.div className="text-3xl md:text-3xl font-bold flex items-center gap-3"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        viewport={{ once: true }}>
              TailwindCSS 
              <img src={tailwind} alt="Tailwind CSS" className="w-8 h-8 object-contain" />
            </motion.div>
            <motion.div className="text-3xl md:text-3xl font-bold flex items-center gap-1"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        viewport={{ once: true }}>
              PostgreSQL
              <img src="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg" alt="PostgreSQL" className="w-20 h-8 object-contain" />
            </motion.div>
          </div>
          
          <div className="space-y-6 text-right">
            <motion.div className="text-3xl md:text-3xl font-bold flex items-center justify-end gap-3"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.05 }}
                        viewport={{ once: true }}>
              <img src={java} alt="Java" className="w-12 h-12 object-contain" />
              Java
            </motion.div>
            <motion.div className="text-3xl md:text-3xl font-bold flex items-center justify-end gap-3"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        viewport={{ once: true }}>
              <img src={springBoot} alt="Spring Boot" className="w-8 h-8 object-contain" />
              SpringBoot
            </motion.div>
            <motion.div className="text-3xl md:text-3xl font-bold flex items-center justify-end gap-3"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        viewport={{ once: true }}>
              <img src={microservices} alt="Microservices" className="text-green-400 w-12 h-12 object-contain" />
              Microservices
            </motion.div>
          </div>
        </div>
        
        <div className="text-2xl md:text-2xl font-bold">
          Does VibeCoding count?
           <img src={nerdy} alt="Microservices" className="text-green-400 w-12 h-12 object-contain" />
        </div>
      </motion.div>
    </section>
  );
}