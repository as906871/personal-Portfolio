import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Code,
  Database,
  Globe,
  User,
  Briefcase,
  GraduationCap,
  ChevronRight,
  Star,
  Award,
  Zap,
  Target,
  CheckCircle,
  Calendar,
  MapPin,
  ArrowRight,
  Sparkles,
  Rocket,
  Coffee,
  Heart,
} from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
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

  const projects = [
    {
      title: "Akouo Acoustics Design Tool",
      description:
        "Interactive acoustic design tool with real-time canvas editing and professional-grade visualization for acoustics professionals.",
      tech: ["React.js", "Redux Toolkit", "Konva.js", "Material-UI"],
      link: "https://designtool.akouo-acoustics.com/",
      highlights: [
        "Canvas editor with dynamic rendering",
        "Group drag-drop functionality",
        "Real-time visualization",
      ],
      period: "Aug 2024 – Oct 2024",
      category: "Professional Tool",
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "Orbit Welding Admin",
      description:
        "Comprehensive welding application with custom web admin panel featuring RBAC and real-time operational dashboards.",
      tech: ["React.js", "Material-UI", "Redux Toolkit"],
      link: "https://orbitadmin.ovaloqualitygroup.com/",
      highlights: [
        "Role-based access control",
        "Real-time graphs",
        "Dynamic admin panel",
      ],
      period: "Oct 2024 – Jan 2025",
      category: "Enterprise Dashboard",
      color: "from-purple-500 to-pink-400",
    },
    {
      title: "Eduasis Learning Platform",
      description:
        "AI-powered learning application with GPT integration and Supabase backend for modern educational experiences.",
      tech: ["React.js", "Tailwind CSS", "Supabase", "ChatGPT API"],
      highlights: [
        "ChatGPT function calling",
        "Real-time data handling",
        "Secure authentication",
      ],
      period: "Jan 2025 – May 2025",
      category: "AI-Powered Platform",
      color: "from-green-500 to-emerald-400",
    },
    {
      title: "Crocs E-commerce",
      description:
        "High-performance online store for Crocs footwear with seamless checkout and advanced analytics integration.",
      tech: ["React.js", "Redux-Thunk", "Material-UI"],
      link: "https://www.crocs.in/",
      highlights: [
        "Google Data Layer integration",
        "Chatbot with HRMS",
        "Performance optimization",
      ],
      period: "Feb 2022 – Sep 2022",
      category: "E-commerce",
      color: "from-orange-500 to-red-400",
    },
    {
      title: "Soch Fashion Platform",
      description:
        "Elegant platform for Indian ethnic wear with advanced order tracking and payment integrations.",
      tech: ["PWA", "Tailwind CSS"],
      link: "https://www.soch.com/in/",
      highlights: [
        "PayPal integration",
        "Google Maps API",
        "Mobile optimization",
      ],
      period: "Oct 2022 – Mar 2023",
      category: "Fashion E-commerce",
      color: "from-violet-500 to-purple-400",
    },
    {
      title: "SF-Cable B2B Platform",
      description:
        "Specialized B2B platform for electronic accessories with dynamic pricing and bulk order management.",
      tech: ["PWA", "Tailwind CSS", "OAuth 2.0"],
      link: "https://www.sfcable.com/",
      highlights: [
        "B2B module development",
        "Dynamic packages",
        "Real-time pricing",
      ],
      period: "Apr 2023 – Jan 2024",
      category: "B2B Platform",
      color: "from-teal-500 to-blue-400",
    },
  ];

  const experiences = [
    {
      company: "Appventurez Mobitech Pvt. Ltd",
      role: "Software Developer",
      period: "Aug 2024 – Present",
      location: "Noida",
      achievements: [
        "Developed scalable, modular frontend apps using React.js & Redux",
        "Integrated REST APIs with performance-oriented architecture",
        "Delivered full client-facing solutions independently",
        "Built two complete projects from scratch with optimized code",
      ],
      color: "from-cyan-400 to-blue-500",
    },
    {
      company: "Hindi Commerce & Associates",
      role: "Web Developer",
      period: "Oct 2022 – Apr 2024",
      location: "Noida",
      achievements: [
        "Developed dynamic web pages with payment and Google API integration",
        "Implemented Google Data Layer for advanced analytics",
        "Created dynamic packages and provided team mentorship",
        "Trained and guided new associates",
      ],
      color: "from-purple-400 to-pink-500",
    },
    {
      company: "Kiwitech Technologies Pvt. Ltd",
      role: "Associate Software Engineer",
      period: "Jan 2022 – Sep 2022",
      location: "Noida",
      achievements: [
        "Built responsive, role-based dynamic web pages",
        "Integrated user authentication with interactive dashboards",
        "Implemented comprehensive form validation and error handling",
        "Reduced page load time through performance optimizations",
      ],
      color: "from-green-400 to-emerald-500",
    },
  ];

  const skills = {
    "Programming Languages": {
      items: [
        "JavaScript",
        "TypeScript",
        "C/C++",
        "HTML",
        "CSS",
        "Core Java",
        "Bash",
      ],
      icon: Code,
      color: "from-blue-400 to-cyan-500",
    },
    "Frontend Frameworks": {
      items: ["React.js", "Redux (Thunk, Saga, Toolkit)", "PWA", "Vanilla JS"],
      icon: Globe,
      color: "from-purple-400 to-pink-500",
    },
    "UI Frameworks": {
      items: [
        "Tailwind CSS",
        "Material-UI",
        "Bootstrap",
        "Shadcn-UI",
        "Semantic-UI",
      ],
      icon: Sparkles,
      color: "from-green-400 to-emerald-500",
    },
    "Tools & Technologies": {
      items: [
        "GitHub",
        "Supabase",
        "MongoDB",
        "MySQL",
        "REST APIs",
        "Docker",
        "Firebase",
      ],
      icon: Database,
      color: "from-orange-400 to-red-500",
    },
  };

  const FloatingParticles = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-20 animate-float`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );

  const MouseGlow = () => (
    <div
      className="fixed w-96 h-96 pointer-events-none z-10 transition-all duration-300 ease-out"
      style={{
        left: mousePosition.x - 192,
        top: mousePosition.y - 192,
        background:
          "radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, rgba(168, 85, 247, 0.05) 50%, transparent 70%)",
        filter: "blur(1px)",
      }}
    />
  );

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex(
      (prev) => (prev - 1 + projects.length) % projects.length
    );
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // Auto-rotate projects
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white overflow-x-hidden">
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(120deg);
          }
          66% {
            transform: translateY(10px) rotate(240deg);
          }
        }
        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(6, 182, 212, 0.5);
          }
          50% {
            box-shadow: 0 0 40px rgba(168, 85, 247, 0.8),
              0 0 60px rgba(6, 182, 212, 0.3);
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
        }
        @keyframes slide-up {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes slide-in-left {
          from {
            transform: translateX(-50px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slide-in-right {
          from {
            transform: translateX(50px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes bounce-gentle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
        }
        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }
        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .gradient-border {
          position: relative;
          background: linear-gradient(
            45deg,
            transparent,
            rgba(6, 182, 212, 0.4),
            transparent
          );
          padding: 2px;
          border-radius: 16px;
        }
        .gradient-border > div {
          background: rgba(15, 23, 42, 0.8);
          border-radius: 14px;
        }
      `}</style>

      <FloatingParticles />
      <MouseGlow />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
              <div className={`relative group cursor-pointer ${isLoaded ? 'animate-slide-in-left' : ''}`}>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg blur-md group-hover:blur-lg transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              <div className="relative text-3xl font-black tracking-wider bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text hover:from-cyan-300 hover:via-blue-300 hover:to-purple-300 transition-all duration-700 transform group-hover:scale-110 group-hover:tracking-widest">
                <span className="inline-block text-yellow-400 transform transition-all duration-300 group-hover:rotate-3 group-hover:translate-y-[-2px]">A</span>
                <span className="inline-block text-red-400 transform transition-all duration-300 delay-75 group-hover:-rotate-2 group-hover:translate-y-[2px]">K</span>
                <span className="inline-block text-sky-400 transform transition-all duration-300 delay-150 group-hover:rotate-1 group-hover:translate-y-[-1px]">S</span>
                <span className="inline-block text-violet-400 transform transition-all duration-300 delay-75 group-hover:-rotate-2 group-hover:translate-y-[2px]">H</span>
                <span className="inline-block text-pink-400 transform transition-all duration-300 delay-150 group-hover:rotate-1 group-hover:translate-y-[-1px]">A</span>
                <span className="inline-block text-blue-200 transform transition-all duration-300 delay-75 group-hover:-rotate-2 group-hover:translate-y-[2px]">Y</span>
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

      {/* Hero Section */}
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

      {/* About Section */}
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

      {/* Experience Section */}
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

      {/* Projects Section */}
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

      {/* Skills Section */}
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

      {/* Education Section */}
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

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-5xl p-3 rounded-xl font-bold mb-20 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-glow">
            Let's Create Something Amazing
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="gradient-border transform transition-all duration-700 hover:scale-105">
              <div className="glass-effect p-12 rounded-3xl text-center">
                <div className="mb-8">
                  <Rocket
                    className="mx-auto text-cyan-400 animate-bounce-gentle mb-6"
                    size={64}
                  />
                  <h3 className="text-4xl font-bold text-white mb-6">
                    Ready to Launch Your Project?
                  </h3>
                  <p className="text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                    I'm available for{" "}
                    <span className="text-cyan-400 font-bold">
                      freelance projects
                    </span>{" "}
                    and would love to help transform your
                    <span className="text-purple-400 font-bold">
                      {" "}
                      innovative ideas
                    </span>{" "}
                    into
                    <span className="text-green-400 font-bold">
                      {" "}
                      stunning web applications
                    </span>
                    .
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10">
                  {[
                    {
                      icon: Phone,
                      label: "Phone",
                      value: "+91-9792313578",
                      href: "tel:+919792313578",
                      color: "from-green-400 to-emerald-500",
                    },
                    {
                      icon: Mail,
                      label: "Email",
                      value: "akshaysharma981996@gmail.com",
                      href: "mailto:akshaysharma981996@gmail.com",
                      color: "from-red-400 to-pink-500",
                    },
                  ].map(({ icon: Icon, label, value, href, color }, index) => (
                    <a
                      key={label}
                      href={href}
                      className={`group flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 p-4 sm:p-4 w-full bg-gradient-to-r ${color} bg-opacity-10 rounded-2xl glass-effect border border-white/10 hover:bg-opacity-20 transition-all duration-500 transform hover:scale-105 animate-slide-up`}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <span
                        className={`bg-gradient-to-r ${color} bg-clip-text group-hover:animate-bounce`}
                      >
                        <Icon size={32} />
                      </span>

                      <div className="text-left flex-1 min-w-0">
                        <p className="text-white/70 text-sm font-semibold">
                          {label}
                        </p>
                        <p className="text-white font-bold text-base sm:text-lg leading-snug break-words whitespace-normal">
                          {value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a
                    href="tel:+919792313578"
                    className="group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 px-10 py-5 rounded-full font-bold text-xl transition-all duration-500 transform hover:scale-110 animate-glow hover:shadow-2xl hover:shadow-green-500/50"
                  >
                    <span className="flex items-center justify-center">
                      <Phone
                        className="mr-3 group-hover:animate-bounce-gentle"
                        size={24}
                      />
                      Call Now
                    </span>
                  </a>
                  <a
                    href="mailto:akshay@email.com"
                    className="group border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black px-10 py-5 rounded-full font-bold text-xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-cyan-400/50"
                  >
                    <span className="flex items-center justify-center">
                      <Mail
                        className="mr-3 group-hover:animate-bounce-gentle"
                        size={24}
                      />
                      Send Email
                    </span>
                  </a>
                </div>

                <div className="mt-10 pt-8 border-t border-white/20">
                  <p className="text-white/60 text-lg mb-6">
                    Connect with me on social platforms
                  </p>
                  <div className="flex justify-center space-x-6">
                    {[
                      {
                        icon: Github,
                        href: "https://github.com/as906871",
                        color: "hover:text-gray-400",
                        label: "GitHub",
                      },
                      {
                        icon: Linkedin,
                        href: "https://linkedin.com/in/as906871",
                        color: "hover:text-blue-400",
                        label: "LinkedIn",
                      },
                    ].map(({ icon: Icon, href, color, label }, index) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-white/60 ${color} transition-all duration-500 transform hover:scale-125 animate-bounce-gentle`}
                        style={{ animationDelay: `${index * 0.2}s` }}
                        title={label}
                      >
                        <Icon size={36} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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

export default Portfolio;