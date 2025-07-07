import { useScrollAnimation, useScrollAnimationMultiple } from '../hooks/useScrollAnimation';

const Experience = () => {
  const experiences = [
    {
      company: "Freelance Project",
      position: "Web Developer",
      location: "Remote",
      duration: "2023",
      description: "Developed responsive web application called 'Spice Palace' using HTML, CSS and JavaScript for a Cinnamon Company to enhance their online presence.",
      technologies: [ "JavaScript", "HTML", "CSS" ],
      githubLink: "https://github.com/Udai-Senevirathne/Spice-Palace"
    },
    {
      company: "IT Society NIBM ",
      position: "Events & Logistics Coordinator",
      duration: "2024 - 2025",
      location: "National Institute of Business Management, Matara",
      description: "Create Plans and Schedule for the events :workshops, guest lectures, webinars and manage the logistics. Collaborate with other teams to ensure smooth execution of events.",
    },
    {
      company: "National Institute of Business Management",
      position: "Software Engineering Undergraduate",
      duration: "2023 - Present",
      location: "Matara, Sri Lanka",
      description: "Participating in various software development projects, gaining hands-on experience in building applications and collaborating with peers.",

    },
    {
      company: "Personal Projects",
      position: "Mobile App Developer",
      duration: "2024 - Present",
      location: "Self-Directed",
      description: "Developing some Mobile Apps to enhance my skills in Mobile Developing and to contribute to the open-source community.",
      technologies: ["Flutter", "Dart", "Kotlin", "Firebase", "RestAPI"],
    }
  ];

  const [headerRef, headerVisible] = useScrollAnimation<HTMLDivElement>();
  const [setExpRef, visibleExperiences] = useScrollAnimationMultiple<HTMLDivElement>();
  const [resumeRef, resumeVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] via-[#112240] to-[#0a192f]"></div>
      </div>

      {/* Floating coding elements for Experience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
        {/* Professional development terms */}
        {['agile', 'scrum', 'CI/CD', 'deploy', 'debug', 'test'].map((term, i) => (
          <div
            key={i}
            className="absolute text-teal-400/15 font-mono text-sm code-drift"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${10 + Math.random() * 5}s`
            }}
          >
            {term}
          </div>
        ))}
        
        {/* Work-related code snippets */}
        {['import', 'export', 'module', 'package', 'require', 'install'].map((code, i) => (
          <div
            key={`code-${i}`}
            className="absolute text-teal-400/12 font-mono text-xs code-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          >
            {code}
          </div>
        ))}
        
        {/* Experience-related tech stack */}
        {['Node', 'React', 'Docker', 'AWS', 'Git', 'API'].map((tech, i) => (
          <div
            key={`tech-${i}`}
            className="absolute text-teal-400/18 font-mono text-xs font-bold floating-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            {tech}
          </div>
        ))}
        
        {/* Professional development commands */}
        {['learn', 'grow', 'lead', 'build'].map((action, i) => (
          <div
            key={`action-${i}`}
            className="absolute text-teal-400/10 font-mono text-xs binary-flow"
            style={{
              left: `${100 + Math.random() * 20}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${15 + Math.random() * 5}s`
            }}
          >
            {action}()
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            Experience & Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            My journey in development through various projects and learning experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Experience Cards */}
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              ref={setExpRef(index)}
              className={`bg-gray-900/30 p-6 rounded-lg hover:bg-gray-900/50 transition-all duration-500 hover-lift group cursor-pointer ${
                visibleExperiences.has(index) 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-12 scale-95'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-teal-400 transition-colors duration-200">{exp.position}</h3>
                <p className="text-gray-300 font-medium">{exp.company}</p>
                <p className="text-gray-400 text-sm">{exp.duration}</p>
                <p className="text-gray-500 text-sm">{exp.location}</p>
              </div>
              
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {exp.description}
              </p>
              
              {exp.technologies && (
                <div className="flex flex-wrap gap-1 mb-4">
                  {exp.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded hover:bg-gray-700 hover:scale-105 transition-all duration-200 cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              
              {exp.githubLink && (
                <div className="mt-4">
                  <a
                    href={exp.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub
                  </a>
                </div>
              )}
            </div>
            
          ))}
        </div>

        {/* Resume Download */}
        <div 
          ref={resumeRef}
          className={`text-center transition-all duration-1000 ${
            resumeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href={`${import.meta.env.BASE_URL}Udai_Senevirathne_CV.pdf`}
            download="Udai_Senevirathne_CV.pdf"
            className="inline-flex items-center px-8 py-3 border border-gray-500 text-gray-300 hover:bg-white hover:text-gray-900 transition-all duration-300 text-sm font-medium uppercase tracking-wider hover:transform hover:scale-105"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
