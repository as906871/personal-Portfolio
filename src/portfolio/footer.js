import { Code, Heart } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div>
      {" "}
      <footer className="py-10 bg-black/40 border-t border-white/10 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 animate-pulse-slow"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Heart className="text-red-400 animate-pulse" size={20} />
            <p className="text-white/70 text-lg">
              © 2025 Akshay Kumar Sharma. Crafted with passion using React.js
            </p>
            <Code className="text-cyan-400 animate-bounce-gentle" size={20} />
          </div>
          <p className="text-white/50">
            "Turning ideas into digital reality, one line of code at a time"
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
