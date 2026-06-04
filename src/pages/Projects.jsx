import NavbarDemo from "@/components/resizable-navbar-demo";
import { useState } from "react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    // Add your projects here
    {
      id: 1,
      title: "College Management System",
      description: "A web application to manage college operations, including student enrollment, course management, and faculty administration.",
      technologies: ["React", "Spring Boot", "PostgreSQL"],
      link: "https://youtu.be/6NYnYtlq7jg?si=-EBjEjt4-Ju-5fi1",
     },
      {
      id: 2,
      title: "BridgeOps",
      description: "BridgeOps is an extension of VS Code, that automizes everything you need for making an App. A Platform to manage your whole software development process in a single window.",
      technologies: ["NextJS", "TypeScript", "Tailwind CSS", "Python"],
      link: "https://youtu.be/zgbUp22Kb1Q?si=Q11ScJth0tSn-zX5",
     },
      {
      id: 3,
      title: "SentinelIQ",
      description: "SentinelIQ is an AI-powered forensics platform that unifies scene analysis, biometrics, audio processing, and suspect identification into a single real-time intelligence system.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Python", "FastAPI"],
      link: "#",
     },
  ];

  return (
    <div className="min-h-screen font-archivo bg-black text-white p-8 animate-fade-in">
      <NavbarDemo/>
      <h1 className="text-4xl mt-20 font-bold mb-4 animate-fade-in animation-delay-100">Projects</h1>
      <p className="text-gray-400 mb-12 animate-fade-in animation-delay-200">I struggle to get good ideas for making personal projects. But let us see what's there in future.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.length > 0 ? (
          projects.map((project, idx) => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all cursor-pointer border border-gray-800 hover:border-gray-700 animate-fade-in hover:shadow-xl shadow-lg"
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
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full hover:bg-gray-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center col-span-full py-12 animate-fade-in">
            No projects to display yet
          </p>
        )}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50 animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-gray-900 rounded-lg max-w-2xl w-full p-8 border border-gray-800 animate-fade-in"
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
                {selectedProject.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-gray-800 text-gray-300 rounded"
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
                  className="px-6 py-2 bg-white text-black rounded font-semibold hover:bg-gray-200 transition"
                >
                  View Project
                </a>
              )}
              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2 border border-gray-600 text-white rounded font-semibold hover:border-gray-400 transition"
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
