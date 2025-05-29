'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-white/5 rounded-full mix-blend-overlay filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/3 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/2 rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>
      </div>

      {/* Minimal Mouse Follower */}
      <div 
        className="fixed w-4 h-4 bg-white/10 rounded-full pointer-events-none z-50 transition-all duration-150 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
        }}
      ></div>      {/* Professional Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40 bg-black/20 backdrop-blur-xl border border-white/10 rounded-lg px-6 py-3 shadow-2xl">
        <div className="flex items-center space-x-8">
          <div className="text-white font-semibold text-lg">
            TF
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-white/70 hover:text-white transition-all duration-300 text-sm font-medium">About</a>
            <a href="#skills" className="text-white/70 hover:text-white transition-all duration-300 text-sm font-medium">Skills</a>
            <a href="#projects" className="text-white/70 hover:text-white transition-all duration-300 text-sm font-medium">Projects</a>
            <a href="#contact" className="text-white/70 hover:text-white transition-all duration-300 text-sm font-medium">Contact</a>
          </div>
        </div>
      </nav>      {/* Professional Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            {/* Clean Professional Avatar */}
            <div className="mb-16 relative">
              <div className="w-32 h-32 mx-auto bg-black/30 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl">
                <div className="w-full h-full rounded-full flex items-center justify-center text-white text-4xl font-light">
                  T
                </div>
              </div>
            </div>

            {/* Professional Typography */}
            <div className="space-y-8">
              <h1 className="text-2xl md:text-3xl font-light text-white/90 mb-6">
                Timothy Flynn
              </h1>
              
              <h2 className="text-4xl md:text-6xl font-light text-white mb-8 leading-tight">
                Full Stack
                <br />
                <span className="text-white/80">Developer</span>
              </h2>

              <p className="text-lg md:text-xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                Crafting exceptional digital experiences through clean code, thoughtful design, 
                and innovative solutions. Specialized in building scalable applications that drive business growth.
              </p>
            </div>            {/* Minimal Professional Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#projects" 
                className="bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-3 rounded-lg font-medium text-white hover:bg-white/15 transition-all duration-300"
              >
                View My Work
              </a>
              
              <a 
                href="#contact" 
                className="bg-black/20 backdrop-blur-xl border border-white/10 text-white/80 px-8 py-3 rounded-lg font-medium hover:bg-black/30 hover:text-white transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>      {/* Professional About Section */}
      <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
              About
            </h3>
            <div className="w-16 h-px bg-white/30 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-lg p-8 shadow-2xl">
              <div className="space-y-6">
                <p className="text-lg text-white/80 leading-relaxed font-light">
                  I'm a dedicated full-stack developer with over 5 years of experience 
                  building scalable web applications and digital solutions.
                </p>
                <p className="text-base text-white/70 leading-relaxed font-light">
                  My expertise spans modern frontend frameworks, robust backend systems, 
                  and cloud infrastructure. I focus on writing clean, maintainable code 
                  that delivers exceptional user experiences.
                </p>
                <p className="text-base text-white/70 leading-relaxed font-light">
                  I believe in continuous learning and staying current with emerging technologies 
                  to provide innovative solutions that drive business growth.
                </p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-3">
                <a 
                  href="https://github.com/mizulike" 
                  className="bg-black/30 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-lg text-white/80 font-medium hover:bg-black/40 hover:text-white transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a 
                  href="https://linkedin.com/in/timothy-flynn" 
                  className="bg-black/30 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-lg text-white/80 font-medium hover:bg-black/40 hover:text-white transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://twitter.com/timothyflynn" 
                  className="bg-black/30 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-lg text-white/80 font-medium hover:bg-black/40 hover:text-white transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-lg p-6 shadow-2xl text-center">
                <div className="w-24 h-24 mx-auto bg-white/10 rounded-full flex items-center justify-center text-white text-3xl mb-4">
                  💼
                </div>
                <div className="text-white/80 text-sm font-medium mb-2">Currently</div>
                <div className="text-lg font-medium text-white">
                  Building Solutions
                </div>
              </div>
              
              {/* Clean achievement indicators */}
              <div className="absolute -top-3 -right-3 bg-white/20 backdrop-blur-xl border border-white/30 text-white px-3 py-1 rounded-full font-medium text-sm">
                5+ Years
              </div>
              <div className="absolute -bottom-3 -left-3 bg-white/20 backdrop-blur-xl border border-white/30 text-white px-3 py-1 rounded-full font-medium text-sm">
                50+ Projects
              </div>
            </div>
          </div>
        </div>
      </section>      {/* Professional Skills Section */}
      <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
              Technical Skills
            </h3>
            <div className="w-16 h-px bg-white/30 mx-auto"></div>
          </div>          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Frontend Card */}
            <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-lg p-8 shadow-2xl hover:bg-black/30 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto bg-white/10 rounded-lg flex items-center justify-center text-2xl mb-4">
                  <span className="text-white/80">⚡</span>
                </div>
                <h4 className="text-xl font-medium text-white mb-2">Frontend</h4>
                <div className="w-12 h-px bg-white/30 mx-auto"></div>
              </div>
                <div className="space-y-4">
                {[
                  { name: "React & Next.js", level: 95 },
                  { name: "TypeScript", level: 90 },
                  { name: "Tailwind CSS", level: 98 },
                  { name: "JavaScript ES6+", level: 92 }
                ].map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-white/90">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span className="text-xs text-white/60">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1">
                      <div 
                        className="h-1 bg-white/40 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>            {/* Backend Card */}
            <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-lg p-8 shadow-2xl hover:bg-black/30 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto bg-white/10 rounded-lg flex items-center justify-center text-2xl mb-4">
                  <span className="text-white/80">⚙️</span>
                </div>
                <h4 className="text-xl font-medium text-white mb-2">Backend</h4>
                <div className="w-12 h-px bg-white/30 mx-auto"></div>
              </div>
              
              <div className="space-y-4">
                {[
                  { name: "Node.js", level: 88 },
                  { name: "Express.js", level: 85 },
                  { name: "PostgreSQL", level: 80 },
                  { name: "MongoDB", level: 82 }
                ].map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-white/90">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span className="text-xs text-white/60">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1">
                      <div 
                        className="h-1 bg-white/40 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & DevOps Card */}
            <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-lg p-8 shadow-2xl hover:bg-black/30 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto bg-white/10 rounded-lg flex items-center justify-center text-2xl mb-4">
                  <span className="text-white/80">🛠️</span>
                </div>
                <h4 className="text-xl font-medium text-white mb-2">DevOps & Tools</h4>
                <div className="w-12 h-px bg-white/30 mx-auto"></div>
              </div>
              
              <div className="space-y-4">
                {[
                  { name: "Git & GitHub", level: 95 },
                  { name: "Docker", level: 75 },
                  { name: "AWS", level: 70 },
                  { name: "Vercel", level: 90 }
                ].map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-white/90">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span className="text-xs text-white/60">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1">
                      <div 
                        className="h-1 bg-white/40 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>          {/* Professional Achievements */}
          <div className="text-center">
            <h4 className="text-2xl font-light text-white mb-8">
              Experience & Achievements
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { title: "Full Stack Expert", desc: "5+ Years Experience" },
                { title: "Performance Focus", desc: "100+ Apps Optimized" },
                { title: "Problem Solver", desc: "1000+ Issues Resolved" },
                { title: "Open Source", desc: "50+ Contributions" }
              ].map((achievement, index) => (
                <div key={achievement.title} className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-lg p-4 text-center hover:bg-black/30 transition-all duration-300">
                  <div className="text-lg font-medium text-white mb-1">{achievement.title}</div>
                  <div className="text-white/70 text-sm">{achievement.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>      {/* Professional Projects Section */}
      <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
              Featured Projects
            </h3>
            <div className="w-16 h-px bg-white/30 mx-auto"></div>
          </div>          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-lg overflow-hidden shadow-2xl hover:bg-black/30 transition-all duration-300">
              <div className="h-48 bg-white/5 flex items-center justify-center relative">
                <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-white/80 text-2xl">🛒</span>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Live
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-medium text-white mb-3">
                  E-Commerce Platform
                </h4>
                <p className="text-white/70 mb-6 leading-relaxed text-sm">
                  Full-stack e-commerce solution with advanced features including inventory management, 
                  payment processing, and analytics dashboard.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-xs">Next.js</span>
                  <span className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-xs">Node.js</span>
                  <span className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-xs">PostgreSQL</span>
                </div>
                <div className="flex space-x-3">
                  <a href="#" className="flex-1 bg-white/10 backdrop-blur-xl border border-white/20 text-white px-4 py-2 rounded-lg text-center text-sm font-medium hover:bg-white/15 transition-all duration-300">
                    Live Demo
                  </a>
                  <a href="#" className="flex-1 bg-black/20 backdrop-blur-xl border border-white/10 text-white/80 px-4 py-2 rounded-lg text-center text-sm font-medium hover:bg-black/30 hover:text-white transition-all duration-300">
                    View Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-lg overflow-hidden shadow-2xl hover:bg-black/30 transition-all duration-300">
              <div className="h-48 bg-white/5 flex items-center justify-center relative">
                <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-white/80 text-2xl">📱</span>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Demo
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-medium text-white mb-3">
                  Task Management App
                </h4>
                <p className="text-white/70 mb-6 leading-relaxed text-sm">
                  Collaborative task management platform with real-time updates, 
                  team collaboration features, and comprehensive project tracking.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-xs">React</span>
                  <span className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-xs">Socket.io</span>
                  <span className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-xs">MongoDB</span>
                </div>
                <div className="flex space-x-3">
                  <a href="#" className="flex-1 bg-white/10 backdrop-blur-xl border border-white/20 text-white px-4 py-2 rounded-lg text-center text-sm font-medium hover:bg-white/15 transition-all duration-300">
                    Live Demo
                  </a>
                  <a href="#" className="flex-1 bg-black/20 backdrop-blur-xl border border-white/10 text-white/80 px-4 py-2 rounded-lg text-center text-sm font-medium hover:bg-black/30 hover:text-white transition-all duration-300">
                    View Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-lg overflow-hidden shadow-2xl hover:bg-black/30 transition-all duration-300">
              <div className="h-48 bg-white/5 flex items-center justify-center relative">
                <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-white/80 text-2xl">📊</span>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Beta
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-medium text-white mb-3">
                  Analytics Dashboard
                </h4>
                <p className="text-white/70 mb-6 leading-relaxed text-sm">
                  Advanced data visualization platform with real-time insights, 
                  predictive analytics, and customizable reporting capabilities.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-xs">D3.js</span>
                  <span className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-xs">Chart.js</span>
                  <span className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-xs">Python</span>
                </div>
                <div className="flex space-x-3">
                  <a href="#" className="flex-1 bg-white/10 backdrop-blur-xl border border-white/20 text-white px-4 py-2 rounded-lg text-center text-sm font-medium hover:bg-white/15 transition-all duration-300">
                    Live Demo
                  </a>
                  <a href="#" className="flex-1 bg-black/20 backdrop-blur-xl border border-white/10 text-white/80 px-4 py-2 rounded-lg text-center text-sm font-medium hover:bg-black/30 hover:text-white transition-all duration-300">
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>          {/* Professional Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-white/70 mb-8">
              Interested in seeing more of my work?
            </p>
            <a 
              href="https://github.com/mizulike" 
              className="inline-block bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-3 rounded-lg font-medium text-white hover:bg-white/15 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Projects
            </a>
          </div>
        </div>
      </section>      {/* Professional Contact Section */}
      <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
              Get In Touch
            </h3>
            <div className="w-16 h-px bg-white/30 mx-auto"></div>
          </div>          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-lg p-8 shadow-2xl">
              <h4 className="text-2xl font-light text-white mb-8 text-center">
                Send a Message
              </h4>
              
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full bg-white/10 backdrop-blur border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="w-full bg-white/10 backdrop-blur border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300"
                  />
                </div>
                <div>
                  <textarea 
                    rows={5}
                    placeholder="Tell me about your project..." 
                    className="w-full bg-white/10 backdrop-blur border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300 resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-white/10 backdrop-blur-xl border border-white/20 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/15 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h4 className="text-2xl font-light text-white mb-6">
                  Let's Connect
                </h4>
                <p className="text-base text-white/70 leading-relaxed mb-8">
                  I'm always interested in discussing new opportunities, innovative projects, 
                  and potential collaborations. Feel free to reach out.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                <a 
                  href="mailto:timothy@example.com" 
                  className="flex items-center space-x-4 bg-black/20 backdrop-blur-xl border border-white/10 rounded-lg p-4 hover:bg-black/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-white/80">📧</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">Email</div>
                    <div className="text-white/60 text-sm">timothy@example.com</div>
                  </div>
                </a>

                <a 
                  href="https://calendly.com/timothy-flynn" 
                  className="flex items-center space-x-4 bg-black/20 backdrop-blur-xl border border-white/10 rounded-lg p-4 hover:bg-black/30 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-white/80">📅</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">Schedule a Call</div>
                    <div className="text-white/60 text-sm">Book a consultation</div>
                  </div>
                </a>

                <div className="flex items-center space-x-4 bg-black/20 backdrop-blur-xl border border-white/10 rounded-lg p-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-white/80">🌍</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">Location</div>
                    <div className="text-white/60 text-sm">Remote Available</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-4 pt-6">
                {[
                  { href: "https://github.com/mizulike", label: "GitHub" },
                  { href: "https://linkedin.com/in/timothy-flynn", label: "LinkedIn" },
                  { href: "https://twitter.com/timothyflynn", label: "Twitter" }
                ].map((social, index) => (
                  <a 
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 bg-black/20 backdrop-blur-xl border border-white/10 rounded-lg flex items-center justify-center text-white/80 hover:bg-black/30 hover:text-white transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-sm font-medium">{social.label[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>        </div>
      </section>      {/* Professional Footer */}
      <footer className="relative bg-black/30 backdrop-blur-xl text-white py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-4">
            <div className="text-xl font-light text-white mb-1">
              Timothy Flynn
            </div>
            <div className="text-white/60 text-sm">Full Stack Developer</div>
          </div>
          <p className="text-white/50 text-sm mb-2">
            © 2025 Timothy Flynn. Built with Next.js & Tailwind CSS.
          </p>
          <p className="text-white/40 text-xs">
            Crafted with attention to detail.
          </p>
        </div>
      </footer>
    </div>
  );
}
