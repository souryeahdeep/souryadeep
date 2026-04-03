import { useState } from "react";
import { ChevronDown } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "VitaminG Studios",
    role: "Frontend Development Intern",
    period: "Nov 2025 – Mar 2026",
    initials: "VGS",
    color: "bg-amber-500",
    description:
      "Developed and maintained responsive user interfaces using React and TailwindCSS. Collaborated with the design team to implement pixel-perfect designs. Optimized component performance and improved page load times.",
    },
];

function ExperienceCard({ exp }) {
  const [open, setOpen] = useState(exp.id === 1);

  return (
    <div
      className="cursor-pointer rounded-xl transition-colors"
      style={{marginTop:"10px"}}
      onClick={() => setOpen((prev) => !prev)}
    >
      <div className="flex items-start gap-3 sm:gap-4 md:gap-5 p-3 sm:p-4 md:p-6">
        {/* Avatar */}
        <div
          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${exp.color} flex items-center justify-center flex-shrink-0 mt-0.5`}
        >
          <span className="text-white text-xs sm:text-sm font-bold">{exp.initials}</span>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header row */}
          <div className="flex items-start justify-between gap-2 flex-wrap md:items-center">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-white font-semibold text-sm sm:text-base md:text-lg">
                {exp.company}
              </span>
              <span className="bg-[#1e1e1e] p-10 border border-[#333] text-gray-300 text-xs sm:text-xs md:text-sm px-2.5 py-0.5 rounded-full">
                {exp.tag}
              </span>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="text-gray-400 text-xs sm:text-sm md:text-base whitespace-nowrap">
                {exp.period}
              </span>
              <ChevronDown
                className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>

          {/* Role */}
          <p className="text-gray-400 text-xs sm:text-sm md:text-base mt-1 sm:mt-0.5">{exp.role}</p>

          {/* Expandable description */}
          <div
            className={`overflow-hidden transition-all duration-400 ${
              open ? "max-h-96 opacity-100 mt-3 sm:mt-4" : "max-h-0 opacity-0"
            }`}
            style={{ transition: "max-height 0.4s ease, opacity 0.3s ease" }}
          >
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
              {exp.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <div className="bg-[#000000] w-full  max-w-4xl flex flex-col gap-8 px-4 sm:px-6 md:px-8">
      <div className="max-w-4xl mx-auto"  style={{
            marginLeft:"10px"
          }}>
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Work Experience</h2>
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} exp={exp} />
        ))}
      </div>
    </div>
  );
}