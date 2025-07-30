import React from "react";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  return (
    <div>
      {" "}
      <section id="education" className="py-20 bg-black/20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-5xl  p-2 rounded-xl font-bold mb-20 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-glow">
            Academic Foundation
          </h2>
          <div className="space-y-10 max-w-5xl mx-auto">
            {[
              {
                degree: "Master of Computer Applications (MCA)",
                institution: "Central University of Haryana, Mahendargarh",
                period: "2019 – 2022",
                color: "from-blue-400 to-cyan-500",
              },
              {
                degree: "Bachelor of Computer Applications (BCA)",
                institution:
                  "Dr. Virendra Swarup Institute of Computer Studies, Kanpur",
                period: "2015 – 2018",
                color: "from-purple-400 to-pink-500",
              },
            ].map((edu, index) => (
              <div
                key={index}
                className={`gradient-border transform transition-all duration-700 hover:scale-105 animate-slide-up`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="glass-effect p-10 rounded-2xl">
                  <div className="flex items-start space-x-6">
                    <div
                      className={`p-4 rounded-full bg-gradient-to-r ${edu.color} bg-opacity-20 animate-bounce-gentle`}
                    >
                      <GraduationCap
                        className={`bg-gradient-to-r ${edu.color} bg-clip-text `}
                        size={40}
                      />
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`text-3xl font-bold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent mb-3`}
                      >
                        {edu.degree}
                      </h3>
                      <p className="text-2xl text-white/90 mb-3 font-semibold">
                        {edu.institution}
                      </p>
                      <div className="flex items-center text-white/70 text-lg">
                        <Calendar className="mr-3 text-cyan-400" size={20} />
                        {edu.period}
                      </div>
                    </div>
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

export default Education;
