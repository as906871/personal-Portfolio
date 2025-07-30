import React from "react";

import { skills } from "../Utils/data";

const Skills = () => {
  return (
    <div>
      {" "}
      <section id="skills" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-5xl  p-2  rounded-xl font-bold mb-20 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-glow">
            Technical Arsenal
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(
              ([category, { items, icon: Icon, color }], index) => (
                <div
                  key={index}
                  className={`gradient-border transform transition-all duration-700 hover:scale-105 animate-slide-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="glass-effect p-8 rounded-2xl h-full">
                    <div className="flex items-center mb-6">
                      <div
                        className={`p-3 rounded-full bg-gradient-to-r ${color} bg-opacity-20 mr-4`}
                      >
                        <Icon
                          className={`bg-gradient-to-r ${color} bg-clip-text  animate-bounce-gentle`}
                          size={28}
                        />
                      </div>
                      <h3 className="text-xl font-bold text-white leading-tight">
                        {category}
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {items.map((skill, idx) => (
                        <div
                          key={idx}
                          className="group flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:translate-x-1"
                        >
                          <span className="text-white/90 font-medium">
                            {skill}
                          </span>
                          <div
                            className={`w-3 h-3 rounded-full bg-gradient-to-r ${color} animate-pulse group-hover:animate-spin`}
                          ></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
