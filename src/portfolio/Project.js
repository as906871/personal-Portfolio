import React, { useEffect, useState } from "react";
import { ExternalLink, Code, Globe, ChevronRight, Star, Sparkles } from "lucide-react";
import { projects } from "../Utils/data";

const Project = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex(
      (prev) => (prev - 1 + projects.length) % projects.length
    );
  };

  // Auto-rotate projects
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <div>
      {" "}
      <section id="projects" className="py-20 bg-black/20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-5xl p-3 rounded-xl font-bold mb-20 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-glow">
            Featured Projects
          </h2>

          <div className="relative">
            <div className="gradient-border transform transition-all duration-700 hover:scale-[1.02]">
              <div className="glass-effect p-10 rounded-2xl">
                <div className="flex justify-between items-start mb-8">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <h3
                        className={`text-3xl font-bold bg-gradient-to-r ${projects[currentProjectIndex].color} bg-clip-text text-transparent`}
                      >
                        {projects[currentProjectIndex].title}
                      </h3>
                      <span
                        className={`px-4 py-2 bg-gradient-to-r ${projects[currentProjectIndex].color} bg-opacity-20 text-white rounded-full text-sm font-semibold animate-pulse`}
                      >
                        {projects[currentProjectIndex].category}
                      </span>
                    </div>
                    <p className="text-white/70 mb-4 text-lg">
                      {projects[currentProjectIndex].period}
                    </p>
                    {projects[currentProjectIndex].link && (
                      <a
                        href={projects[currentProjectIndex].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-all duration-300 text-lg font-semibold"
                      >
                        <Globe
                          className="mr-2 group-hover:animate-spin"
                          size={20}
                        />
                        View Live Project
                        <ExternalLink
                          size={18}
                          className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                        />
                      </a>
                    )}
                  </div>
                  <div className="flex space-x-3">
                    <button
                      onClick={prevProject}
                      className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full hover:from-cyan-500/40 hover:to-purple-500/40 transition-all duration-300 transform hover:scale-110 animate-glow"
                    >
                      <ChevronRight size={24} className="rotate-180" />
                    </button>
                    <button
                      onClick={nextProject}
                      className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full hover:from-cyan-500/40 hover:to-purple-500/40 transition-all duration-300 transform hover:scale-110 animate-glow"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>
                </div>

                <p className="text-white/90 mb-8 leading-relaxed text-xl">
                  {projects[currentProjectIndex].description}
                </p>

                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Star
                      className="text-yellow-400 mr-3 animate-spin"
                      size={24}
                    />
                    Key Highlights:
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    {projects[currentProjectIndex].highlights.map(
                      (highlight, idx) => (
                        <div
                          key={idx}
                          className="group flex items-center space-x-3 p-4 bg-gradient-to-r from-white/5 to-white/10 rounded-xl border border-white/10 hover:from-white/10 hover:to-white/15 transition-all duration-300 transform hover:scale-105"
                        >
                          <Sparkles
                            className="text-cyan-400 group-hover:animate-spin flex-shrink-0"
                            size={18}
                          />
                          <span className="text-white/90 font-medium">
                            {highlight}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Code
                      className="text-purple-400 mr-3 animate-pulse"
                      size={24}
                    />
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {projects[currentProjectIndex].tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-4 py-2 bg-gradient-to-r ${projects[currentProjectIndex].color} bg-opacity-20 text-white rounded-full font-semibold border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 transform hover:scale-110 animate-glow`}
                        style={{ animationDelay: `${idx * 0.1}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Project indicators */}
            <div className="flex justify-center mt-8 space-x-3">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentProjectIndex(idx)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 transform hover:scale-125 ${
                    idx === currentProjectIndex
                      ? "bg-gradient-to-r from-cyan-400 to-purple-400 animate-glow shadow-lg"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
