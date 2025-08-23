import React from "react";

const techStacks = [
  {
    category: "Frontend",
    items: [
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "HTML",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
      },
      {
        name: "Tailwind CSS",
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "Next.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
      },
    ],
  },
  {
    category: "Database",
    items: [
      {
        name: "Supabase",
        logo: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png",
      },
    ],
  },
];

const Stack = () => {
  return (
    <section
      id="stack"
      className="relative bg-gradient-to-b from-white to-gray-50 py-28 px-6 overflow-hidden"
    >      
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        
        .animate-float {
          animation: float 2s ease-in-out infinite;
        }
        
        /* Custom scrollbar untuk mobile */
        .mobile-scroll::-webkit-scrollbar {
          height: 4px;
        }
        
        .mobile-scroll::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }
        
        .mobile-scroll::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #8b5cf6, #3b82f6);
          border-radius: 10px;
        }
        
        .mobile-scroll::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #7c3aed, #2563eb);
        }
      `}</style>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
            Our Tech Stack
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-20 max-w-2xl mx-auto">
          Teknologi yang kami gunakan untuk membangun produk digital yang cepat, aman, dan scalable.
        </p>

        {techStacks.map((stack, index) => (
          <div key={index} className="mb-24">
            <h3 className="text-2xl md:text-3xl font-semibold text-purple-700 mb-10 underline underline-offset-8 decoration-purple-300">
              {stack.category}
            </h3>

            {/* Desktop Layout - Flex wrap seperti sebelumnya */}
            <div className="hidden md:flex flex-wrap justify-center gap-10">
              {stack.items.map((tech, i) => (
                <div
                  key={i}
                  className="w-40 h-40 p-5 flex flex-col justify-center items-center bg-white border border-transparent rounded-2xl shadow-md hover:shadow-xl transform transition-all duration-500 hover:-translate-y-3 hover:scale-105 relative group"
                >
                  {/* Glow Hover */}
                  <div className="absolute -inset-[2px] bg-gradient-to-r from-purple-200 to-blue-300 opacity-0 group-hover:opacity-100 rounded-[inherit] blur-lg z-[-1] transition duration-300"></div>

                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className={`h-16 w-16 object-contain mb-3 transition-transform duration-700 ${
                      tech.name === "React"
                        ? "animate-spin-slow"
                        : "group-hover:scale-110 group-hover:animate-float"
                    }`}
                  />
                  <p className="text-gray-800 font-semibold text-center text-sm">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>

            {/* Mobile Layout - Grid 2 kolom, wrap ke baris baru */}
            <div className="md:hidden">
              <div className="flex flex-wrap justify-center gap-4 max-w-sm mx-auto">
                {stack.items.map((tech, i) => (
                  <div
                    key={i}
                    className="w-36 h-36 p-4 flex flex-col justify-center items-center bg-white border border-transparent rounded-2xl shadow-md hover:shadow-xl transform transition-all duration-500 hover:-translate-y-2 hover:scale-105 relative group"
                    style={{
                      flexBasis: 'calc(50% - 8px)'
                    }}
                  >
                    {/* Glow Hover */}
                    <div className="absolute -inset-[2px] bg-gradient-to-r from-purple-200 to-blue-300 opacity-0 group-hover:opacity-100 rounded-[inherit] blur-lg z-[-1] transition duration-300"></div>

                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className={`h-12 w-12 object-contain mb-2 transition-transform duration-700 ${
                        tech.name === "React"
                          ? "animate-spin-slow"
                          : "group-hover:scale-110 group-hover:animate-float"
                      }`}
                    />
                    <p className="text-gray-800 font-semibold text-center text-xs">
                      {tech.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stack;