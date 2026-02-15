import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, ChevronRight, Code, Database, Brain, TrendingUp, Award, BookOpen, MessageSquare } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    'AI & Machine Learning Engineer',
    'Software Developer',
    'Trading & Financial Analyst',
    'Data Analysis'
  ];

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'strengths', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const skills = {
    'Programming': ['Python', 'Java', 'C++'],
    'Web Development': ['HTML', 'CSS', 'React'],
    'Database': ['MySQL', 'MongoDB'],
    'AI & ML': ['Machine Learning', 'Deep Learning', 'Model Training & Evaluation', 'Data Preprocessing'],
    'Trading & Analysis': ['Intraday & Swing Trading', 'Price Action Analysis', 'Support & Resistance', 'Trend & Momentum Analysis']
  };

  const projects = [
    {
      title: 'Stock Market Analysis Using AI',
      description: 'AI-based system to analyze stock data and identify trends using machine learning algorithms and predictive analytics.',
      tech: ['Python', 'Machine Learning', 'Data Analysis', 'Trading'],
      icon: TrendingUp
    },
    {
      title: 'Deepfake Detection And Anti-AI Poisoning Framework',
      description: 'Developed a deep learning–based framework to detect deepfake images and enhance model robustness by defending against AI data poisoning attacks, improving the reliability and security of media authentication systems.',
      tech: ['Deep Learning', 'CNN', 'Python', 'Computer Vision'],
      icon: Brain
    }
  ];

  const education = [
    {
      degree: 'BE in Computer Science & Engineering (AI & ML)',
      institution: 'Visvesvaraya Technological University',
      year: 'Graduating 2026',
      icon: BookOpen
    },
    {
      degree: 'PUC – PCMB',
      institution: 'SDM RESI PU College',
      year: '2022',
      icon: Award
    },
    {
      degree: 'SSLC',
      institution: 'BGS English Medium School',
      year: '2020',
      icon: Award
    }
  ];

  const strengths = [
    { title: 'Strong Analytical Skills', icon: Brain },
    { title: 'Quick Learner', icon: Award },
    { title: 'Team & Independent Working', icon: MessageSquare },
    { title: 'Good Communication', icon: MessageSquare }
  ];

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#0a0a0f] flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-cyan-400 font-mono text-sm tracking-wider animate-pulse">INITIALIZING PORTFOLIO...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0a0a0f] text-gray-100 min-h-screen font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0f]/95 backdrop-blur-lg border-b border-cyan-500/20 shadow-lg shadow-cyan-500/5' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-tight">
                NS
              </h1>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                {['Home', 'About', 'Skills', 'Projects', 'Education', 'Strengths', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeSection === item.toLowerCase()
                        ? 'bg-cyan-500/20 text-cyan-400 shadow-lg shadow-cyan-500/20'
                        : 'text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0a0a0f]/98 backdrop-blur-lg border-b border-cyan-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['Home', 'About', 'Skills', 'Projects', 'Education', 'Strengths', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all ${
                    activeSection === item.toLowerCase()
                      ? 'bg-cyan-500/20 text-cyan-400'
                      : 'text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="mb-6 inline-block">
              <span className="text-cyan-400 font-mono text-sm tracking-widest animate-pulse">AVAILABLE FOR OPPORTUNITIES</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Nishanth S
              </span>
            </h1>

            <div className="h-20 mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 transition-all duration-500">
                {roles[currentRole]}
              </h2>
            </div>

            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Final-year BE student in Computer science & Engineering specializing in AI & Machine Learning with a passion for building intelligent systems 
              and analyzing financial markets. Based in Bengaluru, India.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() => scrollToSection('projects')}
                className="group px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2"
              >
                View Projects
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                className="px-8 py-3 border-2 border-cyan-500/50 rounded-lg font-semibold hover:bg-cyan-500/10 hover:border-cyan-500 transition-all duration-300 flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-cyan-500/50 rounded-lg font-semibold hover:bg-cyan-500/10 hover:border-cyan-500 transition-all duration-300"
              >
                Contact Me
              </button>
            </div>

            <div className="flex justify-center gap-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110 duration-300">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110 duration-300">
                <Github size={24} />
              </a>
              <a href="mailto:nishanth.siddarajuk@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110 duration-300">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight size={32} className="text-cyan-400 rotate-90" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 md:p-12 shadow-xl shadow-cyan-500/10">
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  I'm a <span className="text-cyan-400 font-semibold">final-year BE student in Computer Science & Engineering (AI & ML)</span>, 
                  passionate about leveraging artificial intelligence and machine learning to solve real-world problems.
                </p>
                
                <p>
                  My expertise spans across <span className="text-cyan-400 font-semibold">AI model development, deep learning frameworks, and data analysis</span>. 
                  I thrive on building intelligent systems that make a meaningful impact, from stock market prediction models to deepfake detection systems.
                </p>
                
                <p>
                  Beyond AI, I have a keen interest in <span className="text-cyan-400 font-semibold">financial markets and trading analytics</span>. 
                  I analyze price action, support and resistance levels, and develop strategies for intraday and swing trading.
                </p>
                
                <p>
                  As a <span className="text-cyan-400 font-semibold">quick learner and adaptable team player</span>, I excel in both collaborative 
                  environments and independent projects. I'm always eager to take on new challenges and expand my skill set.
                </p>

                <div className="pt-6 flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">English</span>
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">Kannada</span>
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">Bengaluru, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Technical Arsenal
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], idx) => (
              <div
                key={category}
                className="group bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  {category === 'Programming' && <Code className="text-cyan-400" size={24} />}
                  {category === 'Web Development' && <Code className="text-cyan-400" size={24} />}
                  {category === 'Database' && <Database className="text-cyan-400" size={24} />}
                  {category === 'AI & ML' && <Brain className="text-cyan-400" size={24} />}
                  {category === 'Trading & Analysis' && <TrendingUp className="text-cyan-400" size={24} />}
                  <h3 className="text-xl font-bold text-cyan-400">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-cyan-500/20 text-gray-300 rounded-lg text-sm hover:bg-cyan-500/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={project.title}
                className="group bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-cyan-500/20 rounded-xl group-hover:bg-cyan-500/30 transition-colors">
                    <project.icon className="text-cyan-400" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-cyan-400">{project.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="flex items-center gap-2 px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 rounded-lg transition-colors">
                    <Github size={18} />
                    <span>GitHub</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 rounded-lg transition-colors">
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Education Timeline
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500"></div>

              {education.map((edu, idx) => (
                <div key={edu.degree} className="relative mb-12 ml-20">
                  {/* Timeline dot */}
                  <div className="absolute -left-[52px] top-6 w-4 h-4 bg-cyan-500 rounded-full border-4 border-[#0a0a0f]"></div>

                  <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-cyan-500/20 rounded-xl">
                        <edu.icon className="text-cyan-400" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-cyan-400 mb-2">{edu.degree}</h3>
                        <p className="text-gray-300 font-medium mb-1">{edu.institution}</p>
                        <p className="text-gray-400 text-sm">{edu.year}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section id="strengths" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Key Strengths
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((strength, idx) => (
              <div
                key={strength.title}
                className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 text-center hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex p-4 bg-cyan-500/20 rounded-full mb-4">
                  <strength.icon className="text-cyan-400" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-gray-200">{strength.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-4 text-lg">
              Interested in collaboration or have an opportunity? Let's connect!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-cyan-500/20 rounded-xl">
                    <Mail className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-400 mb-1">Email</h3>
                    <a href="mailto:nishanth@example.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                      nishanth.siddarajuk@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-cyan-500/20 rounded-xl">
                    <Phone className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-400 mb-1">Phone</h3>
                    <a href="tel:+918867433501" className="text-gray-300 hover:text-cyan-400 transition-colors">
                      +91 8867433501
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-cyan-500/20 rounded-xl">
                    <MapPin className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-400 mb-1">Location</h3>
                    <p className="text-gray-300">Bengaluru, Karnataka, India</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-cyan-500/20 rounded-xl">
                    <Linkedin className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-400 mb-1">LinkedIn</h3>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors">
                      linkedin.com/in/nishanth-s
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-[#0a0a0f]/50 border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-400 text-gray-100 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-[#0a0a0f]/50 border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-400 text-gray-100 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    rows="5"
                    className="w-full px-4 py-3 bg-[#0a0a0f]/50 border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-400 text-gray-100 transition-colors resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Send Message
                  <ChevronRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Nishanth S • Engineered for the Future
            </p>
            
            <div className="flex gap-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="mailto:nishanth@example.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      {scrolled && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/70 transition-all duration-300 z-40"
        >
          <ChevronRight size={24} className="-rotate-90" />
        </button>
      )}

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        
        * {
          font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #0a0a0f;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #22d3ee, #3b82f6);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #06b6d4, #2563eb);
        }
      `}</style>
    </div>
  );
}
