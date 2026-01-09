const projects = [
  // {
  //   id: 1,
  //   image: "https://via.placeholder.com/600x360?text=Project+One",
  //   title: "Project One",
  //   description: "A sleek web app demonstrating interactive UI patterns and responsive layouts.",
  //   github: "https://github.com/your-handle/project-one",
  // },
  // {
  //   id: 2,
  //   image: "https://via.placeholder.com/600x360?text=Project+Two",
  //   title: "Project Two",
  //   description: "Microservice-backed API with authentication, caching, and observability hooks.",
  //   github: "https://github.com/your-handle/project-two",
  // },
  // {
  //   id: 3,
  //   image: "https://via.placeholder.com/600x360?text=Project+Three",
  //   title: "Project Three",
  //   description: "Data-driven dashboard featuring real-time charts and accessibility-first design.",
  //   github: "https://github.com/your-handle/project-three",
  // },
];

export default function Projects() {
  const hasProjects = projects.length > 0;

  return (
    <section id="projects" className="min-h-screen bg-black text-white flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <h1 className="text-4xl md:text-4xl font-bold mb-12 text-center">
          What I built with those Skills?
        </h1>

        {hasProjects ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <article key={project.id} className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-white/5">
                <div className="h-48 bg-gray-800 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-red-300 hover:text-red-200 font-semibold"
                  >
                    View on GitHub
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-300 text-lg">Uploading here soon</p>
        )}
      </div>
    </section>
  );
}