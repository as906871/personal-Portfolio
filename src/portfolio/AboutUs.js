import React from "react";
import { User, Award, Zap, Target } from "lucide-react";

const AboutUs = () => {
  return (
    <div>
      {" "}
      <section id="about" className="py-20 bg-black/20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-5xl  p-2 rounded-xl font-bold mb-20 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-glow">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <div className="gradient-border transform hover:scale-105 transition-all duration-500">
                <div className="glass-effect p-10 rounded-2xl">
                  <div className="flex items-center mb-6">
                    <User
                      className="text-cyan-400 mr-4 animate-bounce-gentle"
                      size={48}
                    />
                    <h3 className="text-3xl font-bold text-cyan-400">
                      Professional Developer
                    </h3>
                  </div>
                  <p className="text-white/90 leading-relaxed mb-8 text-lg">
                    Passionate Full-Stack Developer with{" "}
                    <span className="text-cyan-400 font-bold">3+ years</span> of
                    experience building
                    <span className="text-purple-400 font-semibold">
                      {" "}
                      scalable, high-performance
                    </span>{" "}
                    web applications. Expert in{" "}
                    <span className="text-green-400 font-semibold">
                      React.js ecosystem
                    </span>{" "}
                    with a proven track record of delivering
                    <span className="text-pink-400 font-semibold">
                      {" "}
                      complex projects independently
                    </span>
                    .
                  </p>
                  <p className="text-white/80 leading-relaxed text-lg">
                    I specialize in creating{" "}
                    <span className="text-yellow-400 font-semibold">
                      modern, responsive applications
                    </span>{" "}
                    that drive business value and deliver{" "}
                    <span className="text-cyan-400 font-semibold">
                      exceptional user experiences
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8 animate-slide-in-right">
              {[
                {
                  icon: Target,
                  title: "Project Success Rate",
                  desc: "100% on-time delivery",
                  color: "text-purple-400",
                  bgColor: "from-purple-500/20 to-pink-500/20",
                },
                {
                  icon: Zap,
                  title: "Performance Focus",
                  desc: "Optimized, scalable solutions",
                  color: "text-yellow-400",
                  bgColor: "from-yellow-500/20 to-orange-500/20",
                },
                {
                  icon: Award,
                  title: "Independent Delivery",
                  desc: "Full-stack project ownership",
                  color: "text-green-400",
                  bgColor: "from-green-500/20 to-emerald-500/20",
                },
              ].map(({ icon: Icon, title, desc, color, bgColor }, index) => (
                <div
                  key={title}
                  className={`group flex items-center space-x-6 p-6 bg-gradient-to-r ${bgColor} rounded-2xl glass-effect border border-white/10 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <Icon
                    className={`${color} group-hover:animate-bounce-gentle transition-all duration-300`}
                    size={32}
                  />
                  <div>
                    <h4 className="font-bold text-white text-xl mb-1">
                      {title}
                    </h4>
                    <p className="text-white/70 text-lg">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
