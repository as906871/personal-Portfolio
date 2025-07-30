import { Code, Database, Globe, Sparkles } from "lucide-react";

export const experiences = [
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

export const projects = [
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

export const skills = {
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


export const FloatingParticles = () => (
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

export const MouseGlow = ({mousePosition}) => (
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