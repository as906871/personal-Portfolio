import React from "react";
import { Github, Linkedin, Mail, Phone, Rocket } from "lucide-react";

const ContactUs = () => {
  return (
    <div>
      {" "}
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
                    href="mailto:akshaysharma981996@gmail.com"
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
    </div>
  );
};

export default ContactUs;
