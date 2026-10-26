import NavbarDemo from "@/components/resizable-navbar-demo";
import { useState } from "react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    // Add your projects here
    {
      id: 1,
      title: "College Management System",
      description:
        "A web application to manage college operations, including student enrollment, course management, and faculty administration.",
      technologies: ["React", "Spring Boot", "PostgreSQL"],
      link: "https://youtu.be/6NYnYtlq7jg?si=-EBjEjt4-Ju-5fi1",
    },
    {
      id: 2,
      title: "BridgeOps",
      description:
        "BridgeOps is an extension of VS Code, that automizes everything you need for making an App. A Platform to manage your whole software development process in a single window.",
      technologies: ["NextJS", "TypeScript", "Tailwind CSS", "Python"],
      link: "https://youtu.be/zgbUp22Kb1Q?si=Q11ScJth0tSn-zX5",
    },
    {
      id: 3,
      title: "APISentry",
      description:
        "APISentry automatically catches breaking API changes in Spring Boot projects before they ship. On every pull request, it generates the OpenAPI spec, diffs it against the last stable version, and flags exactly which endpoints changed — then scans your connected frontend apps to show which files will actually break.",
      technologies: ["Github", "YAML", "Command Line"],
      link: "https://github.com/souryeahdeep/apisentry-action",
    },
    {
      id: 4,
      title: "SentinelIQ",
      description:
        "SentinelIQ is an AI-powered forensics platform that unifies scene analysis, biometrics, audio processing, and suspect identification into a single real-time intelligence system.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Python",
        "FastAPI",
      ],
      link: "#",
    },
  ];

 return (
  <div className="min-h-screen font-archivo bg-amber-50 text-black dark:bg-black dark:text-white transition-colors duration-300">
    <NavbarDemo />

    <div className="max-w-6xl mx-auto px-4 md:px-9 pt-32 pb-16">
      <h1 className="text-4xl font-bold mb-4 animate-fade-in animation-delay-100">
        Projects
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-12 animate-fade-in animation-delay-200">
        I struggle to get good ideas for making personal projects. But WHEN I
        DO! Can't stop me.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.length > 0 ? (
          projects.map((project, idx) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition-all cursor-pointer border border-gray-200 hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-700 animate-fade-in hover:shadow-xl shadow-lg"
              onClick={() => setSelectedProject(project)}
              style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-300 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 dark:text-gray-400 text-center col-span-full py-12 animate-fade-in">
            No projects to display yet
          </p>
        )}
      </div>
    </div>

    {selectedProject && (
      <div
        className="fixed inset-0 bg-black/70 dark:bg-black/90 flex items-center justify-center p-4 z-50 animate-fade-in"
        onClick={() => setSelectedProject(null)}
      >
        <div
          className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg max-w-2xl w-full p-8 border border-gray-200 dark:border-gray-800 animate-fade-in"
          onClick={(e) => e.stopPropagation()}
        >
          {selectedProject.image && (
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded mb-6"
            />
          )}
          <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {selectedProject.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-300 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            {selectedProject.link && (
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gray-900 text-white dark:bg-white dark:text-black rounded font-semibold hover:opacity-80 transition"
              >
                View Project
              </a>
            )}
            <button
              onClick={() => setSelectedProject(null)}
              className="px-6 py-2 border border-gray-400 text-gray-800 dark:border-gray-600 dark:text-white rounded font-semibold hover:border-gray-600 dark:hover:border-gray-400 transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    )}
  </div>
);
}
