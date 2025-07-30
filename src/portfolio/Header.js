import React from "react";
import { Github,
  Linkedin,
  Mail,
  Phone,
  ArrowRight,
  Sparkles,
  Rocket,
  Coffee,
  Heart,
} from "lucide-react";

const Header = ({ scrollToSection, isLoaded}) => {
  return (
    <div>
      {" "}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 animate-pulse-slow"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full filter blur-3xl animate-float"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 rounded-full filter blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <div
            className={`mb-8 px-4 sm:px-6 md:px-10 text-center ${
              isLoaded ? "animate-slide-up" : ""
            }`}
          >
            <div className="mb-6 relative inline-block">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-cyan-300 hover:via-purple-300 hover:to-pink-300 transition-all duration-700">
                Akshay Kumar Sharma
              </h1>
              <div className="absolute -top-2 -right-3 sm:-top-3 sm:-right-4 animate-bounce-gentle">
                <Rocket className="text-cyan-400" size={28} />
              </div>
            </div>

            {/* Subtitle */}
            <div className="relative">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/90 mb-6 animate-pulse-slow">
                Full-Stack Software Developer
              </p>

              <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mb-8">
                <Coffee
                  className="text-yellow-400 animate-bounce-gentle"
                  size={22}
                />
                <span className="text-base sm:text-lg text-white/70">
                  Crafting digital experiences with
                </span>
                <Heart className="text-red-400 animate-pulse" size={18} />
              </div>
            </div>

            {/* Tech Stack & Stats */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 max-w-4xl mx-auto mb-10 leading-relaxed">
              Specializing in{" "}
              <span className="text-cyan-400 font-semibold animate-pulse">
                React.js
              </span>{" "}
              •{" "}
              <span className="text-purple-400 font-semibold animate-pulse">
                Redux
              </span>{" "}
              •{" "}
              <span className="text-pink-400 font-semibold animate-pulse">
                Modern Web Applications
              </span>{" "}
              •{" "}
              <span className="text-green-400 font-semibold animate-pulse">
                API Integration
              </span>
              <br />
              <span className="mt-6 block space-y-2 sm:space-y-0 sm:space-x-4 text-lg sm:text-xl lg:text-2xl font-semibold">
                <span className="text-cyan-400 p-1 sm:p-2 rounded-xl animate-glow inline-block">
                  3+ Years Experience
                </span>
                <span className="text-purple-400 p-1 sm:p-2 rounded-xl animate-glow inline-block">
                  6+ Major Projects Delivered
                </span>
                <span className="text-green-400 p-1 sm:p-2 rounded-xl animate-glow inline-block">
                  100% Success Rate
                </span>
              </span>
            </p>
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 ${
              isLoaded ? "animate-slide-up" : ""
            }`}
            style={{ animationDelay: "0.3s" }}
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-10 py-5 rounded-full font-bold text-lg transition-all duration-500 transform hover:scale-110 animate-glow hover:shadow-2xl hover:shadow-cyan-500/50"
            >
              <span className="flex items-center">
                View My Work
                <ArrowRight
                  className="inline ml-3 transition-transform duration-300 group-hover:translate-x-2"
                  size={24}
                />
              </span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="group border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black px-10 py-5 rounded-full font-bold text-lg transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-cyan-400/30"
            >
              <span className="flex items-center">
                Let's Connect
                <Sparkles
                  className="inline ml-3 transition-transform duration-300 group-hover:rotate-180"
                  size={20}
                />
              </span>
            </button>
          </div>

          <div
            className={`flex justify-center  space-x-8 ${
              isLoaded ? "animate-slide-up" : ""
            }`}
            style={{ animationDelay: "0.6s" }}
          >
            {[
              {
                icon: Mail,
                href: "mailto:akshaysharma981996@gmail.com",
                color: "hover:text-red-400",
              },
              {
                icon: Github,
                href: "https://github.com/as906871",
                color: "hover:text-gray-400",
              },
              {
                icon: Linkedin,
                href: "https://linkedin.com/in/as906871",
                color: "hover:text-blue-400",
              },
              {
                icon: Phone,
                href: "tel:+919792313578",
                color: "hover:text-green-400",
              },
            ].map(({ icon: Icon, href, color }, index) => (
              <a
                key={href}
                href={href}
                className={`text-white/60 ${color} transition-all duration-500 transform hover:scale-125 animate-bounce-gentle`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Icon size={32} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
