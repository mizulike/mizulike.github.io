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
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-6000"></div>
      </div>

      {/* Mouse Follower */}
      <div 
        className="fixed w-6 h-6 bg-white/20 rounded-full pointer-events-none z-50 transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${Math.sin(Date.now() * 0.001) * 0.5 + 1})`,
        }}
      ></div>

      {/* Glassmorphism Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl px-8 py-4 shadow-2xl">
        <div className="flex items-center space-x-8">
          <div className="text-white font-bold text-xl bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            TF
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-110">About</a>
            <a href="#skills" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-110">Skills</a>
            <a href="#projects" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-110">Projects</a>
            <a href="#contact" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-110">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Extreme Visual Impact */}
      <section className="relative z-10 pt-40 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Floating Avatar with Glassmorphism */}
            <div className="mb-12 relative">
              <div className="w-48 h-48 mx-auto bg-gradient-to-br from-pink-400 via-purple-500 to-blue-500 rounded-full p-1 shadow-2xl animate-pulse">
                <div className="w-full h-full bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center text-white text-8xl font-bold border border-white/20">
                  T
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full animate-ping"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-400 rounded-full animate-bounce"></div>
            </div>

            {/* Animated Typography */}
            <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
                Hey, I'm <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient">Timothy Flynn</span>
              </h1>
              
              <h2 className="text-6xl md:text-8xl font-black text-white mb-8 leading-none animate-fade-in-up animation-delay-200">
                <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                  FULL STACK
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-green-400 bg-clip-text text-transparent">
                  DEVELOPER
                </span>
              </h2>

              <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto animate-fade-in-up animation-delay-400 leading-relaxed">
                🚀 Building the future, one pixel at a time. I craft <span className="text-pink-400 font-semibold">mind-blowing</span> digital experiences 
                that make users go "WOW!" Ready to turn your wildest ideas into reality? 
                <span className="text-yellow-400 font-semibold">Let's create magic together!</span> ✨
              </p>
            </div>

            {/* Glassmorphism CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animation-delay-600">
              <a 
                href="#projects" 
                className="group relative bg-gradient-to-r from-pink-500 to-purple-600 px-12 py-6 rounded-2xl font-bold text-xl text-white shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 hover:scale-110 hover:rotate-1 transform"
              >
                <span className="relative z-10">🔥 SEE MY WORK</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a 
                href="#contact" 
                className="group bg-white/10 backdrop-blur-lg border-2 border-white/30 text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:-rotate-1 transform"
              >
                💬 LET'S CHAT
              </a>
            </div>

            {/* Floating Icons */}
            <div className="mt-16 flex justify-center space-x-8 animate-fade-in-up animation-delay-800">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center border border-white/20 hover:scale-125 transition-transform duration-300 cursor-pointer">
                <span className="text-2xl">⚡</span>
              </div>
              <div className="w-16 h-16 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center border border-white/20 hover:scale-125 transition-transform duration-300 cursor-pointer">
                <span className="text-2xl">🎨</span>
              </div>
              <div className="w-16 h-16 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center border border-white/20 hover:scale-125 transition-transform duration-300 cursor-pointer">
                <span className="text-2xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Mind-Blowing Glassmorphism */}
      <section id="about" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-5xl md:text-7xl font-black text-white mb-6">
              <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                ABOUT ME
              </span>
            </h3>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 shadow-2xl hover:bg-white/15 transition-all duration-500 transform hover:scale-105">
              <div className="space-y-6">
                <p className="text-2xl text-white/90 leading-relaxed">
                  💡 I'm a <span className="text-yellow-400 font-bold">visionary developer</span> who doesn't just write code - 
                  I craft <span className="text-pink-400 font-bold">digital masterpieces</span> that make people's jaws drop! 
                </p>
                <p className="text-xl text-white/80 leading-relaxed">
                  🚀 From mind-bending UIs to rock-solid backends, I turn wild ideas into reality. 
                  Every project is a chance to push boundaries and create something <span className="text-cyan-400 font-bold">EXTRAORDINARY</span>!
                </p>
                <p className="text-xl text-white/80 leading-relaxed">
                  🌟 When I'm not coding, I'm exploring cutting-edge tech, contributing to open source, 
                  and sharing knowledge with fellow developers. Innovation never sleeps! ⚡
                </p>
              </div>
              
              <div className="mt-10 flex flex-wrap gap-4">
                <a 
                  href="https://github.com/mizulike" 
                  className="group bg-gradient-to-r from-gray-800 to-black px-6 py-3 rounded-xl text-white font-semibold hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-gray-500/25"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="group-hover:animate-pulse">💻 GitHub</span>
                </a>
                <a 
                  href="https://linkedin.com/in/timothy-flynn" 
                  className="group bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-3 rounded-xl text-white font-semibold hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="group-hover:animate-pulse">💼 LinkedIn</span>
                </a>
                <a 
                  href="https://twitter.com/timothyflynn" 
                  className="group bg-gradient-to-r from-sky-400 to-blue-500 px-6 py-3 rounded-xl text-white font-semibold hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-sky-500/25"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="group-hover:animate-pulse">🐦 Twitter</span>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-9xl shadow-2xl animate-bounce-slow">
                  👨‍💻
                </div>
                <div className="mt-6 text-center">
                  <div className="text-white/80 text-lg font-semibold">Currently Building</div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                    The Future! 🚀
                  </div>
                </div>
              </div>
              
              {/* Floating achievement badges */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-float">
                🏆 5+ Years
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-400 text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-float animation-delay-1000">
                ✨ 50+ Projects
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Absolutely INSANE Design */}
      <section id="skills" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
          <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-5xl md:text-7xl font-black text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                SUPERPOWERS
              </span>
            </h3>
            <p className="text-2xl text-white/80 max-w-3xl mx-auto">
              🔥 The arsenal of technologies I wield to create digital magic! ⚡
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Frontend Card */}
            <div className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:rotate-1">
              <div className="text-center mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl flex items-center justify-center text-4xl mb-4 shadow-lg group-hover:animate-bounce">
                  🎨
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Frontend Magic</h4>
                <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-red-500 mx-auto rounded-full"></div>
              </div>
              
              <div className="space-y-4">
                {[
                  { name: "React & Next.js", level: 95, color: "blue" },
                  { name: "TypeScript", level: 90, color: "indigo" },
                  { name: "Tailwind CSS", level: 98, color: "cyan" },
                  { name: "JavaScript ES6+", level: 92, color: "yellow" }
                ].map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-white/90">
                      <span className="font-semibold">{skill.name}</span>
                      <span className="text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div 
                        className={`h-2 bg-gradient-to-r from-${skill.color}-400 to-${skill.color}-600 rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Card */}
            <div className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:-rotate-1">
              <div className="text-center mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-4xl mb-4 shadow-lg group-hover:animate-bounce">
                  ⚙️
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Backend Power</h4>
                <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
              </div>
              
              <div className="space-y-4">
                {[
                  { name: "Node.js", level: 88, color: "green" },
                  { name: "Express.js", level: 85, color: "emerald" },
                  { name: "PostgreSQL", level: 80, color: "blue" },
                  { name: "MongoDB", level: 82, color: "teal" }
                ].map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-white/90">
                      <span className="font-semibold">{skill.name}</span>
                      <span className="text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div 
                        className={`h-2 bg-gradient-to-r from-${skill.color}-400 to-${skill.color}-600 rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & DevOps Card */}
            <div className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:rotate-1">
              <div className="text-center mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center text-4xl mb-4 shadow-lg group-hover:animate-bounce">
                  🛠️
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">DevOps & Tools</h4>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-violet-500 mx-auto rounded-full"></div>
              </div>
              
              <div className="space-y-4">
                {[
                  { name: "Git & GitHub", level: 95, color: "gray" },
                  { name: "Docker", level: 75, color: "blue" },
                  { name: "AWS", level: 70, color: "orange" },
                  { name: "Vercel", level: 90, color: "black" }
                ].map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-white/90">
                      <span className="font-semibold">{skill.name}</span>
                      <span className="text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div 
                        className={`h-2 bg-gradient-to-r from-${skill.color}-400 to-${skill.color}-600 rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certification Badges */}
          <div className="text-center">
            <h4 className="text-3xl font-bold text-white mb-8">
              🏆 <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Achievements Unlocked</span>
            </h4>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: "🚀", title: "Full Stack Master", desc: "5+ Years Experience" },
                { icon: "⚡", title: "Performance Guru", desc: "Optimized 100+ Apps" },
                { icon: "🎯", title: "Problem Solver", desc: "1000+ Bugs Squashed" },
                { icon: "🌟", title: "Open Source Hero", desc: "50+ Contributions" }
              ].map((badge, index) => (
                <div key={badge.title} className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-110">
                  <div className="text-4xl mb-2">{badge.icon}</div>
                  <div className="text-white font-bold">{badge.title}</div>
                  <div className="text-white/70 text-sm">{badge.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - ABSOLUTELY MIND-BLOWING */}
      <section id="projects" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-900 via-purple-900 to-indigo-900"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-96 h-96 bg-rose-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-5xl md:text-7xl font-black text-white mb-6">
              <span className="bg-gradient-to-r from-rose-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                EPIC PROJECTS
              </span>
            </h3>
            <p className="text-2xl text-white/80 max-w-3xl mx-auto">
              🎯 Check out these game-changing creations that push boundaries! 💥
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-rose-500 to-purple-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden shadow-2xl hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:rotate-1">
              <div className="h-64 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <span className="relative z-10 text-white text-6xl animate-float">🚀</span>
                <div className="absolute top-4 right-4 bg-green-400 text-black px-3 py-1 rounded-full font-bold text-xs">
                  LIVE
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors">
                  🛒 E-Commerce Empire
                </h4>
                <p className="text-white/80 mb-6 leading-relaxed">
                  A jaw-dropping full-stack e-commerce platform that handles thousands of users! 
                  Features AI-powered recommendations, real-time inventory, and seamless payments. 💎
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-semibold">Next.js</span>
                  <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-semibold">Node.js</span>
                  <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-semibold">PostgreSQL</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-3 rounded-xl font-semibold text-center hover:scale-105 transition-transform duration-300">
                    🌐 Live Demo
                  </a>
                  <a href="#" className="flex-1 bg-white/20 backdrop-blur text-white px-4 py-3 rounded-xl font-semibold text-center hover:bg-white/30 transition-all duration-300">
                    💻 Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden shadow-2xl hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:-rotate-1">
              <div className="h-64 bg-gradient-to-br from-green-500 via-teal-500 to-cyan-500 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <span className="relative z-10 text-white text-6xl animate-bounce-slow">📱</span>
                <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full font-bold text-xs">
                  HOT
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                  ⚡ Task Master Pro
                </h4>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Revolutionary task management that adapts to YOUR workflow! Real-time collaboration, 
                  AI prioritization, and stunning analytics that make productivity addictive! 🎯
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-semibold">React</span>
                  <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm font-semibold">Socket.io</span>
                  <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-semibold">MongoDB</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="flex-1 bg-gradient-to-r from-green-500 to-teal-600 text-white px-4 py-3 rounded-xl font-semibold text-center hover:scale-105 transition-transform duration-300">
                    🌐 Live Demo
                  </a>
                  <a href="#" className="flex-1 bg-white/20 backdrop-blur text-white px-4 py-3 rounded-xl font-semibold text-center hover:bg-white/30 transition-all duration-300">
                    💻 Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden shadow-2xl hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:rotate-1">
              <div className="h-64 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <span className="relative z-10 text-white text-6xl animate-pulse">📊</span>
                <div className="absolute top-4 right-4 bg-purple-400 text-white px-3 py-1 rounded-full font-bold text-xs">
                  VIRAL
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  📈 Analytics Beast
                </h4>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Data visualization that makes executives weep tears of joy! Real-time insights, 
                  predictive analytics, and charts so beautiful they belong in a museum! 🎨
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm font-semibold">D3.js</span>
                  <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm font-semibold">Chart.js</span>
                  <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-semibold">Python</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="flex-1 bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-3 rounded-xl font-semibold text-center hover:scale-105 transition-transform duration-300">
                    🌐 Live Demo
                  </a>
                  <a href="#" className="flex-1 bg-white/20 backdrop-blur text-white px-4 py-3 rounded-xl font-semibold text-center hover:bg-white/30 transition-all duration-300">
                    💻 Code
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-2xl text-white/80 mb-8">
              Want to see something even MORE incredible? 👀
            </p>
            <a 
              href="https://github.com/mizulike" 
              className="group inline-block bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 px-12 py-6 rounded-2xl font-bold text-xl text-white shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 hover:scale-110 transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="group-hover:animate-pulse">🔥 EXPLORE ALL PROJECTS 🔥</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section - THE GRAND FINALE */}
      <section id="contact" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-5xl md:text-7xl font-black text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
                LET'S CREATE MAGIC
              </span>
            </h3>
            <p className="text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              🚀 Ready to build something that will blow minds and change the game? 
              Let's turn your wildest ideas into reality! ✨
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 shadow-2xl">
              <h4 className="text-3xl font-bold text-white mb-8 text-center">
                💬 <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Drop Me a Line</span>
              </h4>
              
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Amazing Name ✨" 
                    className="w-full bg-white/10 backdrop-blur border border-white/30 rounded-2xl px-6 py-4 text-white placeholder-white/60 focus:outline-none focus:border-pink-400 focus:bg-white/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="your.email@awesome.com 📧" 
                    className="w-full bg-white/10 backdrop-blur border border-white/30 rounded-2xl px-6 py-4 text-white placeholder-white/60 focus:outline-none focus:border-pink-400 focus:bg-white/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <textarea 
                    rows={5}
                    placeholder="Tell me about your incredible project! 🎯" 
                    className="w-full bg-white/10 backdrop-blur border border-white/30 rounded-2xl px-6 py-4 text-white placeholder-white/60 focus:outline-none focus:border-pink-400 focus:bg-white/20 transition-all duration-300 resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 hover:scale-105 transform"
                >
                  🚀 SEND MESSAGE 🚀
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h4 className="text-4xl font-bold text-white mb-6">
                  🌟 <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Let's Connect!</span>
                </h4>
                <p className="text-xl text-white/80 leading-relaxed mb-8">
                  Whether you need a mind-blowing website, a game-changing app, or just want to chat about the latest tech trends - I'm your guy! 💡
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <a 
                  href="mailto:timothy@example.com" 
                  className="group flex items-center space-x-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:animate-bounce">
                    📧
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">Email Me</div>
                    <div className="text-white/70">timothy@example.com</div>
                  </div>
                </a>

                <a 
                  href="https://calendly.com/timothy-flynn" 
                  className="group flex items-center space-x-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:animate-bounce">
                    📅
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">Schedule a Call</div>
                    <div className="text-white/70">Let's talk strategy!</div>
                  </div>
                </a>

                <div className="group flex items-center space-x-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                    🌍
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">Based In</div>
                    <div className="text-white/70">Everywhere (Remote Ready!)</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-6 pt-8">
                {[
                  { href: "https://github.com/mizulike", emoji: "💻", label: "GitHub", color: "gray" },
                  { href: "https://linkedin.com/in/timothy-flynn", emoji: "💼", label: "LinkedIn", color: "blue" },
                  { href: "https://twitter.com/timothyflynn", emoji: "🐦", label: "Twitter", color: "sky" }
                ].map((social, index) => (
                  <a 
                    key={social.label}
                    href={social.href}
                    className={`group w-16 h-16 bg-gradient-to-br from-${social.color}-500 to-${social.color}-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg hover:scale-125 transition-all duration-300 hover:shadow-${social.color}-500/25`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="group-hover:animate-bounce">{social.emoji}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <p className="text-3xl text-white/90 mb-8 font-bold">
              🔥 Ready to build the FUTURE together? 🔥
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl px-8 py-4 text-white font-semibold">
                ⚡ Lightning Fast Response
              </div>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl px-8 py-4 text-white font-semibold">
                🎯 100% Commitment
              </div>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl px-8 py-4 text-white font-semibold">
                ✨ Mind-Blowing Results
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Epic Footer */}
      <footer className="relative bg-black/50 backdrop-blur-lg text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
              Timothy Flynn
            </div>
            <div className="text-white/70">Full Stack Developer & Digital Magician ✨</div>
          </div>
          <p className="text-white/60 mb-4">
            © 2025 Timothy Flynn. Crafted with ❤️, powered by Next.js & Tailwind CSS.
          </p>
          <p className="text-white/40 text-sm">
            Made with passion, designed to inspire, built to last. 🚀
          </p>
        </div>
      </footer>
    </div>
  );
}
