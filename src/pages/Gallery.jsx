import NavbarDemo from "@/components/resizable-navbar-demo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const images = [
    "/gal1.jpg",
    "/gal3.jpg",
    "/gal5.jpg",
        "gal2.jpeg",

    "/gal6.jpg",
    "/gal4.jpg",
  ];

  return (
    <div className="min-h-screen font-archivo bg-black text-white p-8 animate-fade-in">
      
      <div className="flex items-center justify-between gap-6 mb-12 animate-fade-in animation-delay-100">
        <button 
          className="px-4 py-2 text-sm md:text-base font-extralight text-gray-400 hover:text-green-400 transition-colors duration-300 hover:scale-110 transform"
          onClick={() => navigate("/about")}
        >
          <span className="md:hidden text-2xl">←</span>
          <span className="hidden md:inline">← Back to Me</span>
        </button>
        <h1 className="text-2xl md:text-4xl font-bold animate-fade-in animation-delay-200">Gallery</h1>
        <div className="w-12 md:w-24"></div>
      </div>

      {/* Masonry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 animate-fade-in"
            onClick={() => setSelectedImage(image)}
            style={{ animationDelay: `${0.2 + index * 0.08}s` }}
          >
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:brightness-75"
            />
         
          </div>
        ))}
      </div>

      {/* Modal for full view */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center p-4 z-50 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] w-full animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Full view"
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all duration-300"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
