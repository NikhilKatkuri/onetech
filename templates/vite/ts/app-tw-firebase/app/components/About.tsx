import React from "react";
import Navbar from "./Navbar"; 

const About = () => {
  const features = [
    {
      title: "⚡ Lightning Fast",
      description:
        "Built with Vite for instant hot module replacement and blazing fast builds.",
    },
    {
      title: "⚛️ Modern React",
      description:
        "Latest React features with hooks, context, and functional components.",
    },
    {
      title: "🔷 TypeScript",
      description:
        "Full TypeScript support for better development experience and type safety.",
    },
    {
      title: "🎨 Tailwind CSS",
      description:
        "Utility-first CSS framework for rapid and responsive UI development.",
    },
    {
      title: "🔥 Firebase Ready",
      description:
        "Pre-configured Firebase integration for authentication and database.",
    },
    {
      title: "🌙 Dark Mode",
      description: "Built-in dark mode support with smooth theme switching.",
    },
  ];

  const techStack = [
    { name: "Vite", url: "https://vite.dev", color: "text-yellow-500" },
    { name: "React", url: "https://react.dev", color: "text-blue-500" },
    {
      name: "TypeScript",
      url: "https://typescriptlang.org",
      color: "text-blue-600",
    },
    {
      name: "Tailwind CSS",
      url: "https://tailwindcss.com",
      color: "text-cyan-500",
    },
    {
      name: "Firebase",
      url: "https://firebase.google.com",
      color: "text-orange-500",
    },
    {
      name: "React Router",
      url: "https://reactrouter.com",
      color: "text-red-500",
    },
  ];

  return (
    <React.Fragment>
      <div className="min-h-screen w-full  dark:bg-neutral-950 relative">
        <Navbar />

        <div className="pt-36 pb-12 px-4 max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl mb-6 dark:text-white">
              About This Project
            </h1>
            <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
              A modern, production-ready React template built with cutting-edge
              technologies to accelerate your development workflow and deliver
              exceptional user experiences.
            </p>
          </div>

          {/* Features Grid */}
          <div className="mb-16">
            <h2 className="font-semibold text-2xl sm:text-3xl mb-8 text-center dark:text-white">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800 hover:shadow-md shadow-black/5 transition-shadow duration-200"
                >
                  <h3 className="font-semibold text-lg mb-3 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-16">
            <h2 className="font-semibold text-2xl sm:text-3xl mb-8 text-center dark:text-white">
              Technology Stack
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech, index) => (
                <a
                  key={index}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:shadow-md shadow-black/5 transition-all duration-200 hover:scale-105 ${tech.color} font-medium`}
                >
                  {tech.name}
                </a>
              ))}
            </div>
          </div>

          {/* Project Info */}
          <div className="bg-gray-100 dark:bg-white/5 rounded-2xl p-8 text-center">
            <h2 className="font-semibold text-2xl sm:text-3xl mb-4 dark:text-white">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-2xl mx-auto">
              This template provides everything you need to start building
              modern web applications. From authentication to responsive design,
              we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/NikhilKatkuri/onetech"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors duration-200"
              >
                View on GitHub
              </a>
              <a
                href="https://onetech-templates.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 rounded-lg font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200"
              >
                Live Demo
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 text-center">
            <p className="text-sm text-neutral-500 dark:text-neutral-500">
              Built with ❤️ by the{" "}
              <a
                href="https://github.com/NikhilKatkuri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Onetech
              </a>{" "}
              team
            </p>
          </div>
          
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
