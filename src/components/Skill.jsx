import reactStick from "/react.com.png";
import tailwind from "/tailwind.png";
import microservices from "/microservices-5.svg";
import springBoot from "/spring-boot.svg";
import java from "/java.png";

const skills = {
  Frontend: [
    { name: "ReactJS", icon: reactStick },
    { name: "TailwindCSS", icon: tailwind },
  ],
  Backend: [
    { name: "Java", icon: java },
    { name: "Spring Frameworks", icon: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg" },
    { name: "Microservices", icon: microservices },
  ],
  Databases: [
    { name: "PostgreSQL", icon: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg" },
  ],
  Tools: [
    { name: "Git", icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
    { name: "Docker", icon: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg" },
        { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },

  ],
};

const SkillCard = ({ name, icon }) => (
  <div
    className="flex items-center gap-4 p-4 border border-gray-800 rounded-lg bg-gray-900"
  >
    <img src={icon} alt={name} className="w-8 h-8 object-contain" />
    <span className="text-lg font-semibold">{name}</span>
  </div>
);

export default function SkillsShowcase() {
  return (
    <section id="skills" className="min-h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-red-300">
          Fine, here are my skills!
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-16">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category}>
              <h2 className="text-2xl font-bold mb-6 text-red-300">{category}</h2>
              <div className="space-y-4">
                {skillList.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}