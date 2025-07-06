import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const [headerRef, headerVisible] = useScrollAnimation<HTMLDivElement>();
  const [leftSectionRef, leftSectionVisible] = useScrollAnimation<HTMLDivElement>();
  const [rightSectionRef, rightSectionVisible] = useScrollAnimation<HTMLDivElement>();
  const [buttonRef, buttonVisible] = useScrollAnimation<HTMLDivElement>();
  const [footerRef, footerVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
      
      {/* Floating coding elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Code symbols */}
        {['{', '}', '<', '>', '(', ')', '[', ']', ';', '=', '+', '-'].map((symbol, i) => (
          <div
            key={i}
            className="absolute text-teal-400/20 font-mono text-lg code-drift"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            {symbol}
          </div>
        ))}
        
        {/* Code snippets */}
        {['console.log()', 'function()', 'const x =', 'return', 'if ()', 'else'].map((code, i) => (
          <div
            key={`code-${i}`}
            className="absolute text-teal-400/15 font-mono text-xs code-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {code}
          </div>
        ))}
        
        {/* Binary numbers */}
        {['01001000', '01100101', '01101100', '01110000'].map((binary, i) => (
          <div
            key={`binary-${i}`}
            className="absolute text-teal-400/10 font-mono text-xs binary-flow"
            style={{
              left: `${100 + Math.random() * 20}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 5}s`
            }}
          >
            {binary}
          </div>
        ))}
        
        {/* Programming language names */}
        {['JS', 'TS', 'CSS', 'HTML', 'React'].map((lang, i) => (
          <div
            key={`lang-${i}`}
            className="absolute text-teal-400/25 font-mono text-sm font-bold floating-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${10 + Math.random() * 6}s`
            }}
          >
            {lang}
          </div>
        ))}
      </div>
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(circle at 30% 70%, rgba(45,212,191,0.05) 0%, transparent 50%)'
      }}></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(45,212,191,0.3) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 contact-bounce">
            Get In Touch
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            I'm always interested in new opportunities and collaborations. 
            Whether you have a project in mind or just want to say hello, 
            feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div 
            ref={leftSectionRef}
            className={`transition-all duration-1000 delay-200 ${
              leftSectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <h3 className="text-xl font-semibold text-white mb-6">Let's Connect</h3>
            <div className="space-y-4">
              <div className="flex items-center group hover:transform hover:translate-x-2 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-teal-400/10 flex items-center justify-center mr-4 group-hover:bg-teal-400/20 transition-all duration-300 pulse-glow">
                  <svg className="w-5 h-5 text-teal-400 group-hover:scale-110 transition-transform duration-300 icon-spin" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <a href="mailto:udaisenevirathne@gmail.com" className="text-gray-300 hover:text-teal-400 transition-colors duration-300 group-hover:text-teal-400">
                  udaisenevirathne@gmail.com
                </a>
              </div>
              
              <div className="flex items-center group hover:transform hover:translate-x-2 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-teal-400/10 flex items-center justify-center mr-4 group-hover:bg-teal-400/20 transition-all duration-300">
                  <svg className="w-5 h-5 text-teal-400 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Open to Work</span>
              </div>
            </div>
          </div>

          <div 
            ref={rightSectionRef}
            className={`transition-all duration-1000 delay-400 ${
              rightSectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <h3 className="text-xl font-semibold text-white mb-6">Follow Me</h3>
            <div className="flex space-x-6">
              <a
                href="https://github.com/Udai-Senevirathne"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center hover:bg-teal-400/10 hover:scale-110 transition-all duration-300 hover:rotate-12 relative overflow-hidden"
                aria-label="GitHub"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                <svg className="w-6 h-6 text-gray-400 group-hover:text-teal-400 transition-colors duration-300 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              
              <a
                href="https://linkedin.com/in/Udai-Senevirathne"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center hover:bg-teal-400/10 hover:scale-110 transition-all duration-300 hover:rotate-12 relative overflow-hidden"
                aria-label="LinkedIn"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                <svg className="w-6 h-6 text-gray-400 group-hover:text-teal-400 transition-colors duration-300 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              <a
                href="https://twitter.com/udai_senevirathne"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center hover:bg-teal-400/10 hover:scale-110 transition-all duration-300 hover:rotate-12 relative overflow-hidden"
                aria-label="Twitter"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                <svg className="w-6 h-6 text-gray-400 group-hover:text-teal-400 transition-colors duration-300 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>

              <a
                href="https://instagram.com/udai_senevirathne"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center hover:bg-teal-400/10 hover:scale-110 transition-all duration-300 hover:rotate-12 relative overflow-hidden"
                aria-label="Instagram"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                <svg className="w-6 h-6 text-gray-400 group-hover:text-teal-400 transition-colors duration-300 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div 
          ref={buttonRef}
          className={`text-center mb-16 transition-all duration-1000 delay-600 ${
            buttonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="mailto:udaisenevirathne@gmail.com"
            className="inline-flex items-center px-8 py-3 bg-teal-400 text-[#0a192f] hover:bg-teal-300 transition-all duration-300 text-sm font-medium uppercase tracking-wider group hover:scale-105 hover:shadow-lg hover:shadow-teal-400/20 relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center">
              Send Message
              <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </span>
          </a>
        </div>

        {/* Footer */}
        <div 
          ref={footerRef}
          className={`text-center pt-8 border-t border-gray-800 transition-all duration-1000 delay-800 ${
            footerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-gray-400 text-sm group hover:text-gray-300 transition-colors duration-300">
            I'm always open to discuss about new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <p className="text-gray-500 text-sm mt-2 hover:text-gray-400 transition-colors duration-300">
            © 2025 Udai Senevirathne. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
