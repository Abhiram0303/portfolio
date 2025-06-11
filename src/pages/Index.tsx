
import { useState } from 'react';
import { Menu, X, Download, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "Deep Learning for NICU",
      description: "Python-based application to monitor and detect neonatal conditions using advanced machine learning algorithms",
      tech: ["Python", "Deep Learning", "Machine Learning"],
      period: "07/2023 - 04/2024"
    },
    {
      title: "Face Unlock System for Vehicles",
      description: "Facial recognition-based vehicle access system using Python for secure and convenient vehicle unlocking",
      tech: ["Python", "Face Recognition", "Computer Vision"],
      period: "11/2022 - 02/2023"
    },
    {
      title: "Android Mobile Applications",
      description: "Developed multiple Android applications including Dice Roller, Currency Converter, Simple Calculator, and Quiz App using Android Studio and Java",
      tech: ["Java", "Android Studio", "Mobile Development"],
      period: "01/2023 - 04/2023"
    }
  ];

  const education = [
    {
      degree: "Bachelor Of Technology (Computer Science & IT)",
      institution: "MLR Institute of Technology",
      period: "2020 - 2024",
      score: "CGPA: 7.69",
      field: "Computer Science & Information Technology",
      location: "Hyderabad, Telangana"
    },
    {
      degree: "Intermediate",
      institution: "Sri Chaitanya Junior College",
      period: "2018 - 2020",
      score: "Percentage: 94.7%",
      field: "MPC",
      location: "Hyderabad, Telangana"
    },
    {
      degree: "Secondary Education",
      institution: "India Mission Secondary School",
      period: "2006 - 2018",
      score: "CGPA: 9.7",
      field: "",
      location: "Hyderabad, Telangana"
    }
  ];

  const technicalSkills = [
    "Java", "Python", "C", "MySQL", "HTML", "CSS", "JavaScript"
  ];

  const concepts = [
    "Object-Oriented Programming", "Operating Systems", "Database Management Systems"
  ];

  const softSkills = [
    "Public Speaking", "Problem Solving", "Critical Thinking"
  ];

  const certifications = [
    {
      title: "LEXION 2.0 Workshop",
      description: "Advanced workshop on emerging technologies and development practices"
    },
    {
      title: "MySQL Basics by HackerRank",
      description: "Database fundamentals and query optimization techniques"
    },
    {
      title: "Explore Cloud Workshop",
      description: "Cloud computing fundamentals and practical applications"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-coral-400">SUPRIYA.</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-coral-400 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-coral-400 transition-colors">About</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-coral-400 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-coral-400 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-coral-400 transition-colors">Contact</button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-coral-400"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-gray-300 hover:text-coral-400 w-full text-left">Home</button>
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-gray-300 hover:text-coral-400 w-full text-left">About</button>
              <button onClick={() => scrollToSection('projects')} className="block px-3 py-2 text-gray-300 hover:text-coral-400 w-full text-left">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="block px-3 py-2 text-gray-300 hover:text-coral-400 w-full text-left">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-gray-300 hover:text-coral-400 w-full text-left">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <p className="text-coral-400 text-lg mb-4">Hello, I'm</p>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                Supriya
                <br />
                <span className="text-coral-400">Ramidi</span>
              </h1>
              <p className="text-xl text-gray-400 mb-2">Aspiring Java Developer & Tech Enthusiast</p>
              <p className="text-lg text-gray-500 mb-8">Computer Science Graduate | Based in Hyderabad</p>
              <p className="text-base text-gray-400 mb-8">
                Passionate about solving problems and building meaningful tech solutions. I'm driven by the desire to continuously grow, contribute meaningfully to an organization, and explore innovative solutions through coding.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={() => scrollToSection('projects')}
                  className="bg-coral-500 hover:bg-coral-600 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  View My Work
                </Button>
                <Button 
                  variant="outline"
                  className="border-coral-400 text-coral-400 hover:bg-coral-400 hover:text-white px-8 py-3 rounded-lg transition-all duration-300"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/lovable-uploads/216cff74-3af4-407d-95e4-7ba5420d3fff.png';
                    link.download = 'Supriya_Ramidi_Resume.png';
                    link.click();
                  }}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </div>

              <div className="flex gap-4 mt-8 justify-center lg:justify-start">
                <a href="https://linkedin.com/in/supriya-ramidi-2610a821a" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-coral-400 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-coral-400 transition-colors">
                  <Github size={24} />
                </a>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full border-4 border-coral-400 overflow-hidden">
                  <img 
                    src="/lovable-uploads/a6468d5f-9197-4d9d-99d4-2109e50e321d.png" 
                    alt="Supriya Ramidi" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-coral-400 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-coral-400 rounded-full animate-pulse delay-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-gray-400">Get to know me better</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-coral-400">I'm Supriya, A Computer Science Graduate</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm Supriya Ramidi, a Computer Science & Information Technology graduate from MLR Institute of Technology, Hyderabad. 
                I'm driven by the desire to continuously grow, contribute meaningfully to an organization, and explore innovative solutions through coding.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                With strong foundations in Java, Python, and full-stack development, I'm passionate about solving problems and building meaningful tech solutions. 
                My goal is to achieve great heights of professional satisfaction while contributing to organizational success.
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Languages</h4>
                <div className="flex gap-3">
                  <span className="px-3 py-1 bg-coral-500 text-white rounded-full text-sm">English</span>
                  <span className="px-3 py-1 bg-coral-500 text-white rounded-full text-sm">Telugu</span>
                  <span className="px-3 py-1 bg-coral-500 text-white rounded-full text-sm">Hindi</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">Education</h4>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="bg-gray-800 border-gray-700">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="font-semibold text-coral-400">{edu.degree}</h5>
                        <span className="text-sm text-gray-400">{edu.period}</span>
                      </div>
                      <p className="text-gray-300">{edu.institution}</p>
                      <p className="text-gray-400 text-sm">{edu.location}</p>
                      {edu.field && <p className="text-gray-400 text-sm">{edu.field}</p>}
                      <p className="text-coral-400 font-medium mt-2">{edu.score}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Projects</h2>
            <p className="text-gray-400">Some of my notable work</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 hover:border-coral-400 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-coral-400">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-gray-800 text-coral-400 rounded text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-sm">{project.period}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Experience</h2>
            <p className="text-gray-400">My professional journey</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-coral-400">Java Development Intern</h3>
                    <p className="text-gray-300">Oasis Infobyte (Virtual)</p>
                  </div>
                  <span className="text-gray-400">07/2023 - 09/2023</span>
                </div>
                <p className="text-gray-300 mb-4">
                  Developed interactive Java-based applications and gained practical coding experience in real-world scenarios. 
                  Got an opportunity to develop interactive code based on given tasks with focus on Java Development.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Gained practical experience in the field of Java Development by completing assigned tasks</li>
                  <li>• Developed interactive applications and enhanced problem-solving skills</li>
                  <li>• Worked on real-world coding scenarios and project implementations</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Skills & Certifications</h2>
            <p className="text-gray-400">Technologies I work with and my achievements</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-coral-400">Programming Languages</h3>
              <div className="space-y-4">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-colors border border-gray-800">
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-coral-400">Core Concepts</h3>
              <div className="space-y-4">
                {concepts.map((concept, index) => (
                  <div key={index} className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-colors border border-gray-800">
                    <span className="text-gray-300">{concept}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-coral-400">Soft Skills</h3>
              <div className="space-y-4">
                {softSkills.map((skill, index) => (
                  <div key={index} className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-colors border border-gray-800">
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Certifications</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-gray-900 border-gray-800 hover:border-coral-400 transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-coral-400">{cert.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{cert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-400">Let's discuss your next project</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-coral-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📧</span>
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-400">supriyasudhakar01@gmail.com</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-coral-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📞</span>
                </div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-gray-400">+91 9963992761</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-coral-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🔗</span>
                </div>
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <a href="https://linkedin.com/in/supriya-ramidi-2610a821a" target="_blank" rel="noopener noreferrer" className="text-coral-400 hover:text-coral-300">
                  Connect with me
                </a>
              </div>
            </div>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-coral-400 focus:outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-coral-400 focus:outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea rows={5} className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-coral-400 focus:outline-none transition-colors resize-none"></textarea>
                  </div>
                  <Button className="w-full bg-coral-500 hover:bg-coral-600 text-white py-3 rounded-lg transition-all duration-300 hover:scale-105">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2024 Supriya Ramidi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
