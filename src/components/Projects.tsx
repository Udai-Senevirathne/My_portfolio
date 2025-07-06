import { useScrollAnimation, useScrollAnimationMultiple } from '../hooks/useScrollAnimation';

const Projects = () => {
  const featuredProject = {
    title: "SafeCom - Emergency Incident Reporting App",
    description: "SafeCom is a comprehensive Flutter-based mobile application designed to enhance community safety through real-time reporting, weather monitoring, and emergency response coordination. The app empowers users to report incidents, access safety tips, and stay informed about local safety conditions.",
    image: "/images/donut.png",
    technologies: ["Flutter", "Dart", "Firebase", "Clean Architecture", "Responsive Design","Real-time Weather Monitoring","Emergency Reporting","Location Tracking","User Authentication"],
    githubLink: "https://github.com/Udai-Senevirathne/safecom_final",

  };

  const otherProjects = [
    {
      title: "Weather App",
      description: "A weather application that displays current conditions and forecasts using OpenWeather API.",
      technologies: ["Flutter", "API Integration", "Bloc"],
      githubLink: "https://github.com/Udai-Senevirathne/weather_app",
      
    },
    {
      title: "Service Provider App",
      description: "A service provider application that helps users find service providers for various tasks (electricians, plumbers, etc.).",
      technologies: ["Kotlin", "Firebase"],
      githubLink: "https://github.com/Udai-Senevirathne/ServicePro"
    },
    {
      title: "Smart Hub App",
      description: "A half build application for the smart phone shop that allows users to select their favourite smart devices.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Node.js"],
      githubLink: "https://github.com/Udai-Senevirathne/Items-App"
    },
    {
      title: "Loan Prediction",
      description: "A machine learning project that predicts loan approval based on user data.",
      technologies: ["Python", "Flask", "TensorFlow", "Pandas","Numpy"],
      githubLink: "https://github.com/Udai-Senevirathne/Loan_Prediction"
    },
    {
      title: "RestAPI Node.js + Express",
      description: "User Registration and Login with Full CRUD operations for a product model using MySQL and Postman suitable for Flutter.",
      technologies: ["Node.js", "Postman", "MySQL", "Express"],
      githubLink: "https://github.com/Udai-Senevirathne/Flutter_Node_restAPI"
    },
    {
      title: "Gym Management System",
      description: "A comprehensive gym management system built for user, trainer registration, memberships, and attendance tracking.",
      technologies: ["Springboot", "React", "Postman", " Microservices"],
      githubLink: "https://github.com/Udai-Senevirathne/gym_management_system"
    ,
  },
  {
      title: "Curteeze - Donut Shop Latest Mobile App",
      description: "A comprehensive mobile application for a donut shop featuring user authentication, product catalog, Built with modern Flutter architecture and Firebase integration  and user management.",
      technologies: ["Flutter", "Dart", "Firebase", "BLoC Pattern", "Responsive Design"],
      githubLink: "https://github.com/Udai-Senevirathne/Donut-App"
    },
  ];

  const [headerRef, headerVisible] = useScrollAnimation<HTMLDivElement>();
  const [featuredRef, featuredVisible] = useScrollAnimation<HTMLDivElement>();
  const [otherProjectsHeaderRef, otherProjectsHeaderVisible] = useScrollAnimation<HTMLHeadingElement>();
  const [setProjectRef, visibleProjects] = useScrollAnimationMultiple<HTMLDivElement>();

  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
    {/* Enhanced background: layered gradients and subtle teal glow */}
    <div className="absolute inset-0 z-0">
      {/* Main dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] via-[#112240] to-[#0a192f]"></div>
      {/* Subtle teal radial glow */}
      <div
        className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
        width: '80vw',
        height: '60vw',
        background: 'radial-gradient(ellipse at center, rgba(100,255,218,0.10) 0%, rgba(10,25,47,0.0) 70%)',
        filter: 'blur(8px)',
        }}
      />
    </div>
      
      {/* Floating coding elements for Projects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
        {/* Project-related code symbols */}
        {['npm', 'git', 'API', 'UI', 'UX', 'DB'].map((term, i) => (
          <div
            key={i}
            className="absolute text-teal-400/15 font-mono text-sm font-bold code-drift"
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
        
        {/* Frontend frameworks and tools */}
        {['<React/>', '<Vue/>', '<HTML>', '</div>', 'useState', 'useEffect'].map((code, i) => (
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
        
        {/* File extensions and commands */}
        {['.js', '.css', '.html', '.json', '.md', 'build'].map((file, i) => (
          <div
            key={`file-${i}`}
            className="absolute text-teal-400/18 font-mono text-xs floating-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            {file}
          </div>
        ))}
        
        {/* Git commands */}
        {['commit', 'push', 'pull', 'merge'].map((git, i) => (
          <div
            key={`git-${i}`}
            className="absolute text-teal-400/10 font-mono text-xs binary-flow"
            style={{
              left: `${100 + Math.random() * 20}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${15 + Math.random() * 5}s`
            }}
          >
            git {git}
          </div>
        ))}
      </div>
      
      {/* Geometric pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, rgba(45,212,191,0.1) 0px, rgba(45,212,191,0.1) 1px, transparent 1px, transparent 20px)',
      }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            My Work
          </h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents a learning journey
            and demonstrates different aspects of web development.
          </p>
        </div>

        {/* Featured Project */}
        <div 
          ref={featuredRef}
          className={`mb-20 transition-all duration-1000 ${
            featuredVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Featured Project</h3>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700 hover:border-teal-400 transition-all duration-300 hover-lift max-w-5xl mx-auto">
            <div className="md:flex md:items-center">
              <div className="md:w-2/5 flex justify-center items-center p-4">
                <img 
                  src={featuredProject.image} 
                  alt={featuredProject.title}
                  className="w-full max-w-xs h-64 md:h-72 object-contain bg-gray-900/30 rounded-lg"
                />
              </div>
              <div className="md:w-3/5 p-6 md:p-8">
                <h4 className="text-xl font-bold text-white mb-4">{featuredProject.title}</h4>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {featuredProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-teal-400/10 text-teal-400 rounded-full text-sm border border-teal-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={featuredProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-teal-400 transition-colors duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 
            ref={otherProjectsHeaderRef}
            className={`text-2xl font-bold text-white mb-8 text-center transition-all duration-1000 ${
              otherProjectsHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={project.title}
                ref={setProjectRef(index)}
                className={`bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-teal-400 transition-all duration-300 hover-lift ${
                  visibleProjects.has(index) ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <h4 className="text-lg font-bold text-white mb-3">{project.title}</h4>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-teal-400/10 text-teal-400 rounded text-xs border border-teal-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
