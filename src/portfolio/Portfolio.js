import React, { useState, useEffect } from "react";
import "./portfolio.css";

import Footer from "./footer";
import AboutUs from "./AboutUs";
import { Experience } from "./Experience";
import Project from "./Project";
import Skills from "./Skills";
import Education from "./Education";
import ContactUs from "./ContactUs";
import { FloatingParticles, MouseGlow } from "../Utils/data";
import Header from "./Header";
import NaviagtionBar from "./NaviagtionBar";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "experience",
        "projects",
        "skills",
        "education",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white overflow-x-hidden">
      <FloatingParticles />
      <MouseGlow mousePosition={mousePosition} />

      {/* Navigation */}
      <NaviagtionBar
        scrollToSection={scrollToSection}
        isLoaded={isLoaded}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
      />

      {/* Hero Section */}
      <Header scrollToSection={scrollToSection} isLoaded={isLoaded} />

      {/* About Section */}
      <AboutUs />

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Project />

      {/* Skills Section */}
      <Skills />

      {/* Education Section */}
      <Education />

      {/* Contact Section */}
      <ContactUs />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Portfolio;
