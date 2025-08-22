import React from "react";

const projects = [
  {
    title: "Do-It E-Wallet",
    description:
      "A web app to manage and display insurance product data built with React and Tailwind CSS.",
    image: "/images/ss doit.jpg",
    link: "https://doit-in.vercel.app",
  },
  {
    title: "D'Andalimans Website",
    description:
      "F&B business landing page with scroll-following cart and WhatsApp checkout integration.",
    image: "/images/ss dandalimans.jpg",
    link: "https://d-andalimans.vercel.app",
  },
  {
    title: "JKT23 FC Landing Page",
    description:
      "A community football club from Jakarta, sharing our journey, matches, and passion for the game..",
    image: "/images/ss jkt.png",
    link: "https://jkt23fc.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section className="relative z-10 bg-gradient-to-b from-gray-50 to-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
            OUR PROJECTS
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col border border-gray-100"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow text-left">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed flex-grow">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block text-sm text-purple-600 font-semibold hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
