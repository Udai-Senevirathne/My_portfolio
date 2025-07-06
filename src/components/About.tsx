import { useScrollAnimation, useScrollAnimationMultiple } from '../hooks/useScrollAnimation';

const About = () => {
  const frontendSkills = [
    'Flutter / Dart',
    'TypeScript ',
    'React',
    'HTML/CSS',
    'Tailwind CSS',
    'Kotlin'
  ];

  const backendSkills = [
    'Node.js',
    'Python',
    'REST APIs',
    'Firebase',
    'MySQL',
    'Java (SpringBoot)',
  ];

  const [headerRef, headerVisible] = useScrollAnimation<HTMLDivElement>();
  const [leftSectionRef, leftSectionVisible] = useScrollAnimation<HTMLDivElement>();
  const [rightSectionRef, rightSectionVisible] = useScrollAnimation<HTMLDivElement>();
  const [skillsHeaderRef, skillsHeaderVisible] = useScrollAnimation<HTMLHeadingElement>();
  const [setSkillRef, visibleSkills] = useScrollAnimationMultiple<HTMLDivElement>();

  return (
    <section
      id="expertise"
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0a192f]"
    >
      {/* Modern animated background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Animated teal lines */}
        <svg
          className="absolute inset-0 w-full h-full"
          style={{ minHeight: 600 }}
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="line" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#64ffda" stopOpacity="0.15" />
              <stop offset="1" stopColor="#64ffda" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g>
            {[...Array(8)].map((_, i) => (
              <line
                key={i}
                x1={0}
                y1={i * 80 + 40}
                x2="100%"
                y2={i * 80 + 40}
                stroke="url(#line)"
                strokeWidth="2"
                style={{
                  animation: `moveLine 12s linear infinite`,
                  animationDelay: `${i * 1.2}s`,
                }}
              />
            ))}
          </g>
        </svg>
        <style>
          {`
            @keyframes moveLine {
              0% { opacity: 0.2; transform: translateX(-40px);}
              50% { opacity: 0.4; transform: translateX(40px);}
              100% { opacity: 0.2; transform: translateX(-40px);}
            }
          `}
        </style>
      </div>

      {/* Floating coding elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
        {/* Code symbols for About section */}
        {['{}', '[]', '()', '<>', '==', '!=', '&&', '||'].map((symbol, i) => (
          <div
            key={i}
            className="absolute text-teal-400/15 font-mono text-lg code-drift"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${10 + Math.random() * 5}s`
            }}
          >
            {symbol}
          </div>
        ))}
        
        {/* Programming concepts */}
        {['class', 'const', 'let', 'var', 'async', 'await'].map((keyword, i) => (
          <div
            key={`keyword-${i}`}
            className="absolute text-teal-400/12 font-mono text-sm code-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          >
            {keyword}
          </div>
        ))}
        
        {/* Tech stack indicators */}
        {['React', 'JS', 'TS', 'Node', 'CSS'].map((tech, i) => (
          <div
            key={`tech-${i}`}
            className="absolute text-teal-400/20 font-mono text-xs font-bold floating-particle"
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
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div
            ref={leftSectionRef}
            className={`transition-all duration-1000 delay-200 ${
              leftSectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <h3 className="text-xl font-semibold text-white mb-6">Get to know me!</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I’m a dedicated <strong className='text-white'>Software Engineering undergraduate </strong> at National Institute of Business Management with a strong interest in mobile application development and full-stack software engineering. I actively build mobile apps, focusing on performance, 
                scalability, and intuitive UI/UX design using modern frameworks and architectural patterns.
              </p>
              <p>
                I thrive on solving complex technical problems and translating requirements into clean, maintainable code. My experience includes both frontend and backend development, and I’m passionate about
                 building impactful applications that deliver real value to clients.
              </p>
              <p>
                I'm always open to collaborating on innovative projects, contributing to open-source, or connecting with like-minded developers 
                to exchange ideas and grow together in the tech space.
                Feel free to reach out if you'd like to work together or just have a chat about technology!
              </p>
            </div>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900 transition-all duration-300 text-sm font-medium uppercase tracking-wider hover:transform hover:scale-105"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div
            ref={rightSectionRef}
            className={`transition-all duration-1000 delay-400 ${
              rightSectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <h3 className="text-xl font-semibold text-white mb-6">My Skills</h3>
            
            {/* Frontend Skills */}
            <div className="mb-8">
              <h4 className="text-lg font-medium text-teal-400 mb-4">Frontend Development</h4>
              <div className="grid grid-cols-2 gap-3">
                {frontendSkills.map((skill, index) => (
                  <div
                    key={skill}
                    ref={setSkillRef(index)}
                    className={`bg-gray-800/50 backdrop-blur-sm px-4 py-3 rounded-lg text-center text-gray-300 border border-gray-700 hover:border-teal-400 hover:bg-gray-700/50 transition-all duration-300 hover-zoom-large ${
                      visibleSkills.has(index) ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div>
              <h4 className="text-lg font-medium text-teal-400 mb-4">Backend Development</h4>
              <div className="grid grid-cols-2 gap-3">
                {backendSkills.map((skill, index) => (
                  <div
                    key={skill}
                    ref={setSkillRef(index + frontendSkills.length)}
                    className={`bg-gray-800/50 backdrop-blur-sm px-4 py-3 rounded-lg text-center text-gray-300 border border-gray-700 hover:border-teal-400 hover:bg-gray-700/50 transition-all duration-300 hover-zoom-large ${
                      visibleSkills.has(index + frontendSkills.length) ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                    style={{ transitionDelay: `${(index + frontendSkills.length) * 100}ms` }}
                  >
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          ref={skillsHeaderRef}
          className={`text-center transition-all duration-1000 ${
            skillsHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-2xl font-bold text-white mb-8">Technologies I Work With</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {[
              { name: 'React', icon: (
                <svg className="w-8 h-8 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.85-1.87 1.85-1.87-.82-1.87-1.85.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.37 1.95-1.47-.84-1.63-3.05-1.01-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1.01-5.63 1.46-.84 3.45.12 5.37 1.95 1.92-1.83 3.91-2.79 5.37-1.95z"/>
                </svg>
              )},
              { name: 'TypeScript', icon: (
                <svg className="w-8 h-8 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
                </svg>
              )},
              { name: 'Kotlin', icon: (
                <svg className="w-8 h-8 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 24V0h24L12 12L24 24H0Z"/>
                </svg>
              )},
              { name: 'HTML', icon: (
                <svg className="w-8 h-8 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
                </svg>
              )},
              { name: 'Dart', icon: (
                <svg className="w-8 h-8 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.105 4.105S9.158 1.58 11.684.316a3.079 3.079 0 0 1 1.481-.315c.766.047 1.677.788 1.677.788L24 9.948v9.789h-4.263V24H9.789l-9.473-9.474a2.718 2.718 0 0 1-.316-1.481C.047 12.325.842 11.368.842 11.368S3.368 6.368 4.105 4.105Z"/>
                </svg>
              )},
              { name: 'CSS', icon: (
                <svg className="w-8 h-8 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
                </svg>
              )},
              { name: 'Node.js', icon: (
                <svg className="w-8 h-8 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
                </svg>
              )},
              { name: 'Python', icon: (
                <svg className="w-8 h-8 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05L0 11.97l.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
                </svg>
              )},
              { name: 'Firebase', icon: (
                <svg className="w-8 h-8 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5.229 4.016l4.264 7.885-4.264-7.885zm-.002-.025L14.158 0l-2.122 4.016zM8.91 12.196L6.614 7.442l3.47 6.177zM.001 15.064L8.91 12.196l-2.31-4.754z"/>
                </svg>
              )},
              { name: 'MySQL', icon: (
                <svg className="w-8 h-8 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H.017c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 1.72.384 3.564.438 5.53zM9.26 18.695h-.926a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H5.94l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41h-.83c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 1.72.384 3.564.438 5.53zM12.615 18.695c-.08-1.928-.222-3.878-.43-5.821h.925c.138 1.207.218 2.55.244 4.018h.015c.226-1.323.45-2.66.644-4.018h.905c.188 1.362.402 2.786.64 4.018h.013c.044-1.468.138-2.811.28-4.018h.88c-.218 1.943-.36 3.893-.44 5.821h-1.04c-.196-1.27-.383-2.54-.588-3.95h-.015c-.21 1.41-.404 2.68-.6 3.95h-1.033zM18.81 15.03c-.226-.087-.358-.14-.358-.433 0-.226.131-.432.411-.432.785 0 .774.562.774.562h.844c0-.226-.052-.46-.131-.639-.249-.467-.688-.656-1.093-.656-.699 0-1.268.432-1.268 1.066 0 .669.424.809 1.132 1.132.473.226.618.307.618.618 0 .31-.211.551-.562.551-.762 0-.762-.755-.762-.755h-.844c0 .145.031.291.082.432.249.662.819.977 1.457.977.737 0 1.268-.432 1.268-1.221 0-.827-.62-.997-1.566-1.202zM21.404 10.972c-.104-.022-.17-.04-.25-.04-.329 0-.329.414-.329.518v1.811h-.859v-2.53c0-.718.016-1.359.016-2.077h.859v.518h.014c.105-.226.329-.518.664-.518.079 0 .159.014.227.027v.781h-.014c-.2-.039-.278-.06-.428-.02z"/>
                </svg>
              )},
              { name: 'Flutter', icon: (
                <svg className="w-8 h-8 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.37zm.159 11.871L11.91 14.456l-4.615-4.614L21.025 6.13 14.473 11.87z"/>
                </svg>
              )},
              { name: 'VS Code', icon: (
                <svg className="w-8 h-8 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
                </svg>
              )},
              { name: 'Figma', icon: (
                <svg className="w-8 h-8 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.02s-1.354-3.02-3.019-3.02h-3.117v6.04zm0 1.471H8.148c-2.476 0-4.49-2.015-4.49-4.491S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.02s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.354-3.019 3.019s1.354 3.019 3.019 3.019h3.117v-6.038H8.148zm4.587 1.471v4.49c0 2.476 2.014 4.49 4.49 4.49s4.49-2.014 4.49-4.49-2.014-4.49-4.49-4.49zm4.49 1.471c1.665 0 3.019 1.354 3.019 3.019s-1.354 3.019-3.019 3.019-3.019-1.354-3.019-3.019 1.354-3.019 3.019-3.019zm0-1.471h-4.49V0h4.49c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zm-1.471-7.51v6.04h1.471c1.665 0 3.019-1.355 3.019-3.02s-1.354-3.02-3.019-3.02h-1.471z"/>
                </svg>
              )},
              { name: 'Postman', icon: (
                <svg className="w-8 h-8 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zM6.874 16.85c-1.845-1.694-2.87-3.978-2.87-6.4 0-2.422 1.025-4.706 2.87-6.4l6.4 6.4-6.4 6.4zm.525-13.6c1.694-1.845 3.978-2.87 6.4-2.87s4.706 1.025 6.4 2.87L13.8 9.65 7.399 3.25zm12.8 6.925c0 2.422-1.025 4.706-2.87 6.4l-6.4-6.4 6.4-6.4c1.845 1.694 2.87 3.978 2.87 6.4z"/>
                </svg>
              )},
              { name: 'GitHub', icon: (
                <svg className="w-8 h-8 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              )},
              { name: 'Spring Boot', icon: (
                <svg className="w-8 h-8 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.8537 1.4158a10.4504 10.4504 0 0 1-1.284 2.2471A11.9666 11.9666 0 1 0 3.1699 20.7398l.0002-.0002a11.9543 11.9543 0 0 0 5.2759 1.2577c.384-.0045.7674-.0215 1.1497-.0519a6.5778 6.5778 0 0 1-.0633-.6856c0-.8174.1617-1.9725.9308-2.7417.769-.769 1.9243-.9308 2.7417-.9308.2342 0 .4545.0211.6856.0633a11.9543 11.9543 0 0 0 7.1131-16.2346zM11.35 6.0761a5.1756 5.1756 0 0 1 2.9878.9098c.3253.2182.8067.1307 1.0249-.1946.2182-.3253.1307-.8067-.1946-1.0249a6.5934 6.5934 0 0 0-3.8181-1.1605.6667.6667 0 0 0 0 1.3333v.0769zm5.0231 7.8308-.002.0769a.6667.6667 0 0 0 1.3333 0c0-1.2987-.4293-2.5336-1.2134-3.4924-.2319-.2848-.6468-.3253-.9316-.0934-.2848.2319-.3253.6468-.0934.9316.5846.7144.9051 1.6344.9051 2.5773z"/>
                </svg>
              )},
              
              { name: 'Spring Boot', icon: (
                <svg className="w-8 h-8 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.205 16.392c-2.469 3.289-7.741 2.179-11.122 2.338 0 0-.599.034-1.201.133 0 0 .228-.097.519-.198 2.374-.821 3.496-.986 4.939-1.727 2.71-1.388 5.408-4.413 5.957-7.555-1.032 3.022-4.17 5.623-7.027 6.679-1.955.722-5.492 1.424-5.493 1.424a5.28 5.28 0 0 1-.143-.076c-2.405-1.17-2.475-6.38 1.894-8.059 1.916-.736 3.747-.332 5.818-.825 2.208-.525 4.766-2.18 5.805-4.344 1.165 3.458 2.565 8.866.054 12.21zm.042-13.28a9.212 9.212 0 0 1-1.065 1.89 9.982 9.982 0 0 0-7.167-3.031C6.492 1.971 2 6.463 2 11.985a9.983 9.983 0 0 0 3.205 7.334l.22.194a10.001 10.001 0 0 0 6.560 2.462c5.522 0 10.015-4.492 10.015-10.014 0-3.5-1.797-6.584-4.527-8.36l-.026.001z"/>
                </svg>
              )}
            ].map((tech, index) => (
              <div
                key={tech.name}
                className="flex flex-col items-center hover-zoom group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gray-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center mb-2 border border-gray-700 group-hover:border-teal-400 group-hover:bg-gray-700/50 transition-all duration-300">
                  {tech.icon}
                </div>
                <span className="text-gray-400 text-xs text-center group-hover:text-white transition-colors duration-300">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
