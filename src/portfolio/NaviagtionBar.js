import React from "react";

const NaviagtionBar = ({
  scrollToSection,
  isLoaded,
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
}) => {
  return (
    <div>
      {" "}
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div
              className={`relative group cursor-pointer ${
                isLoaded ? "animate-slide-in-left" : ""
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg blur-md group-hover:blur-lg transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              <div className="relative text-3xl font-black tracking-wider bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text hover:from-cyan-300 hover:via-blue-300 hover:to-purple-300 transition-all duration-700 transform group-hover:scale-110 group-hover:tracking-widest">
                <span className="inline-block text-yellow-400 transform transition-all duration-300 group-hover:rotate-3 group-hover:translate-y-[-2px]">
                  A
                </span>
                <span className="inline-block text-red-400 transform transition-all duration-300 delay-75 group-hover:-rotate-2 group-hover:translate-y-[2px]">
                  K
                </span>
                <span className="inline-block text-sky-400 transform transition-all duration-300 delay-150 group-hover:rotate-1 group-hover:translate-y-[-1px]">
                  S
                </span>
                <span className="inline-block text-violet-400 transform transition-all duration-300 delay-75 group-hover:-rotate-2 group-hover:translate-y-[2px]">
                  H
                </span>
                <span className="inline-block text-pink-400 transform transition-all duration-300 delay-150 group-hover:rotate-1 group-hover:translate-y-[-1px]">
                  A
                </span>
                <span className="inline-block text-blue-200 transform transition-all duration-300 delay-75 group-hover:-rotate-2 group-hover:translate-y-[2px]">
                  Y
                </span>
              </div>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-500"></div>
            </div>

            {/* Desktop Menu */}
            <div
              className={`hidden md:flex space-x-8 ${
                isLoaded ? "animate-slide-up" : ""
              }`}
            >
              {["About", "Experience", "Projects", "Skills", "Contact"].map(
                (item, index) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`relative hover:text-cyan-400 transition-all duration-500 transform hover:scale-110 ${
                      activeSection === item.toLowerCase()
                        ? "text-cyan-400 animate-glow"
                        : "text-white/80"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item}
                    {activeSection === item.toLowerCase() && (
                      <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse"></div>
                    )}
                  </button>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white transform transition-transform duration-300 hover:scale-110"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="space-y-2">
                <div
                  className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-2.5" : ""
                  }`}
                ></div>
                <div
                  className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                ></div>
                <div
                  className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                  }`}
                ></div>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden glass-effect border-t border-white/10 animate-slide-up">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {["About", "Experience", "Projects", "Skills", "Contact"].map(
                  (item, index) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="block px-3 py-2 text-white/80 hover:text-cyan-400 transition-all duration-300 transform hover:translate-x-2"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {item}
                    </button>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NaviagtionBar;
