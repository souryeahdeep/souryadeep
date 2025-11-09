import vitaminGImage from '/vitaminmain.png';
export default function Experience() {
  const experiences = [
    {
      id: 1,
      image: vitaminGImage,
      title: "Frontend Developement Intern",
      subtitle: "Vitamin G Studios | Oct, '25 - Dec, '25",
      description: "Led development of scalable web applications using React, Node.js, and cloud technologies. Improved performance by 40% and mentored junior developers."
    },
    
  ];

  return (
    <section id="experience" className="min-h-screen bg-black text-white flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <h1 className="text-4xl md:text-4xl font-bold mb-16 text-center">
          Looking for my Experiences I suppose?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 p-[25px] bg-gray-100 flex items-center justify-center">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full "
                  onError={(e) => {
                    e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNDQ0Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZTwvdGV4dD48L3N2Zz4=";
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-white">{exp.title}</h3>
                <h4 className="text-sm text-gray-400 mb-3">{exp.subtitle}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}