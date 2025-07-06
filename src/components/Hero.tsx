import AnimatedName from './AnimatedName';

const Hero = () => {
  return (
    <section id="hero-section" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    {/* Animated coding background */}
    <div className="absolute inset-0 pointer-events-none z-0">
        {/* Subtle animated code lines */}
        <div className="absolute inset-0 flex flex-col justify-center space-y-2 opacity-10 animate-[background-move_12s_linear_infinite]">
            <pre className="text-teal-400 font-mono text-xs sm:text-sm select-none px-4">
                {`const developer = {
        name: "Udai Senevirathne",
        role: "Student &  Developer",
        stack: ["React", "TypeScript", "Node.js", "Python"],
        passion: "Building user-friendly apps"
    };`}
            </pre>
            <pre className="text-teal-300 font-mono text-xs sm:text-sm select-none px-8">
                {`function greet() {
        console.log("Welcome to my portfolio!");
    }`}
            </pre>
            <pre className="text-teal-500 font-mono text-xs sm:text-sm select-none px-12">
                {`// Let's build something great together 🚀`}
            </pre>
        </div>

        {/* Subtle animated ML code lines - repositioned to bottom right */}
        <div className="absolute bottom-8 right-8 flex flex-col items-end space-y-2 opacity-10 animate-[background-move_12s_linear_infinite] pointer-events-none z-10">
          <pre className="text-teal-400 font-mono text-xs sm:text-sm select-none px-4 text-right">
    {`import numpy as np
    from sklearn.linear_model import LinearRegression

    # Sample data
    X = np.array([[1], [2], [3], [4]])
    y = np.array([2, 4, 6, 8])

    model = LinearRegression()
    model.fit(X, y)
    `}
          </pre>
          <pre className="text-teal-300 font-mono text-xs sm:text-sm select-none px-8 text-right">
    {`prediction = model.predict([[5]])
    print(f"Prediction for 5: {prediction[0]:.2f}")`}
          </pre>
          <pre className="text-teal-500 font-mono text-xs sm:text-sm select-none px-12 text-right">
    {`# Simple ML, endless possibilities`}
          </pre>
        </div>
            
    
        {/* Animated floating code symbols */}
        <div className="absolute inset-0">
            <span className="absolute left-10 top-24 text-teal-400 text-2xl opacity-30 animate-float-slow">{'{'}</span>
            <span className="absolute right-16 top-40 text-teal-300 text-xl opacity-20 animate-float">{'<'}</span>
            <span className="absolute left-1/3 bottom-32 text-teal-500 text-3xl opacity-20 animate-float-reverse">{'/'}</span>
            <span className="absolute right-1/4 bottom-20 text-teal-400 text-xl opacity-20 animate-float">{';'}</span>
            <span className="absolute left-1/2 top-1/2 text-teal-300 text-2xl opacity-10 animate-float">{'>'}</span>
            <span className="absolute left-20 bottom-10 text-teal-300 text-xl opacity-20 animate-float-reverse">{'('}</span>
            <span className="absolute right-24 top-10 text-teal-400 text-2xl opacity-20 animate-float">{')'}</span>
            <span className="absolute left-1/4 top-1/3 text-teal-500 text-3xl opacity-10 animate-float-slow">{'['}</span>
            <span className="absolute right-1/3 bottom-1/4 text-teal-300 text-xl opacity-20 animate-float">{']'}</span>
            <span className="absolute left-1/2 bottom-10 text-teal-400 text-2xl opacity-20 animate-float-reverse">{'='}</span>
            <span className="absolute right-1/2 top-1/4 text-teal-500 text-3xl opacity-10 animate-float">{':'}</span>
            <span className="absolute left-12 top-1/2 text-teal-300 text-xl opacity-20 animate-float-slow">{'"'}</span>
            <span className="absolute right-10 bottom-1/3 text-teal-400 text-2xl opacity-20 animate-float">{','}</span>
        </div>
        {/* Grid overlay for subtle effect */}
        <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
                backgroundImage:
                    'radial-gradient(circle at 1px 1px, rgba(45,212,191,0.25) 1px, transparent 0)',
                backgroundSize: '40px 40px',
            }}
        ></div>
        {/* Keyframes for floating animation */}
        <style>
            {`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-16px); }
                }
                @keyframes float-reverse {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(16px); }
                }
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-8px); }
                }
                @keyframes background-move {
                    0% { background-position: 0 0; }
                    100% { background-position: 40px 40px; }
                }
                .animate-float { animation: float 6s ease-in-out infinite; }
                .animate-float-reverse { animation: float-reverse 7s ease-in-out infinite; }
                .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
                .animate-[background-move_12s_linear_infinite] { animation: background-move 12s linear infinite; }
            `}
        </style>
    </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <AnimatedName 
          name="UDAI SENEVIRATHNE"
          animationType="typingInfinite"
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-teal-400 mb-6 tracking-tight"
        />
        
        <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 font-light animate-fade-in-up animation-delay-300">
           UNDERGRADUATE & ASPIRING DEVELOPER
        </h2>
        
        <div className="mb-8 animate-fade-in-up animation-delay-500">
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">
            LEARNING & BUILDING
          </p>
          <div className="flex flex-wrap justify-center gap-6 opacity-50">
            {/* Placeholder for tech stack logos */}
            <div className="w-16 h-8 bg-gray-600 rounded flex items-center justify-center">
              <span className="text-xs text-white">React</span>
            </div>
            <div className="w-16 h-8 bg-gray-600 rounded flex items-center justify-center">
              <span className="text-xs text-white">Flutter</span>
            </div>
            <div className="w-16 h-8 bg-gray-600 rounded flex items-center justify-center">
              <span className="text-xs text-white">Python</span>
            </div>
            <div className="w-16 h-8 bg-gray-600 rounded flex items-center justify-center">
              <span className="text-xs text-white">Firebase</span>
            </div>
            
          </div>
        </div>
        
        <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up animation-delay-700">
          Software Engineering undergraduate at the National Institute of Business Management with a strong focus on mobile application and Web Development. Proficient in designing and implementing scalable, cross-platform solutions using modern frameworks. Passionate about crafting intuitive user interfaces, optimizing performance, and applying software engineering 
          principles to solve real-world challenges through mobile technologies.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-1000">
          <a
            href="#work"
            className="inline-flex items-center px-8 py-3 border border-gray-500 text-gray-300 hover:bg-white hover:text-gray-900 transition-all duration-300 text-sm font-medium uppercase tracking-wider hover:transform hover:scale-105"
          >
            View My Projects
          </a>
          
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 text-sm font-medium uppercase tracking-wider hover:transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>

        
        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16 animate-fade-in-up animation-delay-1200">
          <div className="relative flex flex-col items-center space-y-2">
            <svg
              className="w-6 h-6 text-teal-400 animate-bounce drop-shadow-md transition-all duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
            <span className="text-sm text-teal-300 opacity-80 animate-fade-in-up animation-delay-1400">
              Scroll Down
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
