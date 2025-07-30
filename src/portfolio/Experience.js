import React from "react";
import { experiences } from "../Utils/data";
import { Briefcase, CheckCircle, Calendar, MapPin } from "lucide-react";

export const Experience = () => {
  return (
    <div>
      {" "}
      <section id="experience" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-5xl  p-2 rounded-xl font-bold mb-20 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-glow">
            Professional Journey
          </h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`gradient-border transform transition-all duration-700 hover:scale-105 animate-slide-up`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="glass-effect p-10 rounded-2xl">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <h3
                          className={`text-3xl font-bold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent mr-4`}
                        >
                          {exp.role}
                        </h3>
                        <Briefcase
                          className="text-purple-400 animate-bounce-gentle"
                          size={32}
                        />
                      </div>
                      <h4 className="text-2xl text-white/90 mb-4 font-semibold">
                        {exp.company}
                      </h4>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-white/60 text-lg">
                        <div className="flex items-center mb-2 sm:mb-0">
                          <Calendar size={20} className="mr-3 text-cyan-400" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={20} className="mr-3 text-green-400" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {exp.achievements.map((achievement, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:translate-x-2"
                      >
                        <CheckCircle
                          className="text-green-400 mt-1 flex-shrink-0 animate-pulse"
                          size={20}
                        />
                        <p className="text-white/90 text-lg leading-relaxed">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
