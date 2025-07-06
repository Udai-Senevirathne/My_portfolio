import { useState, useEffect } from 'react';

interface AnimatedNameProps {
  name: string;
  animationType?: 'typing' | 'typingInfinite' | 'glow' | 'letterSpacing' | 'scaleIn' | 'rainbow' | 'wave' | 'letterBounce';
  className?: string;
}

const AnimatedName = ({ 
  name, 
  animationType = 'scaleIn', 
  className = '' 
}: AnimatedNameProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Reset states when animation type changes
    setDisplayText('');
    setCurrentIndex(0);
    setShowCursor(true);
  }, [animationType]);

  useEffect(() => {
    if (animationType === 'typing') {
      if (currentIndex < name.length) {
        const timeout = setTimeout(() => {
          setDisplayText(prev => prev + name[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, 100); // Typing speed

        return () => clearTimeout(timeout);
      } else {
        // Hide cursor after typing is complete
        const timeout = setTimeout(() => {
          setShowCursor(false);
        }, 1000);
        return () => clearTimeout(timeout);
      }
    } else {
      setDisplayText(name);
      setShowCursor(false);
    }
  }, [currentIndex, name, animationType]);

  const getAnimationClass = () => {
    switch (animationType) {
      case 'typing':
        return '';
      case 'typingInfinite':
        return 'animate-typing-infinite';
      case 'glow':
        return 'animate-text-glow';
      case 'letterSpacing':
        return 'animate-letter-spacing';
      case 'scaleIn':
        return 'animate-scale-in';
      case 'rainbow':
        return 'animate-rainbow';
      case 'wave':
        return 'animate-wave';
      case 'letterBounce':
        return 'animate-letter-bounce';
      default:
        return 'animate-scale-in';
    }
  };

  const renderLetters = () => {
    if (animationType === 'letterSpacing') {
      return name.split('').map((letter, index) => (
        <span
          key={index}
          className="inline-block"
          style={{ 
            animationDelay: `${index * 0.1}s`,
            animation: 'letterSpacing 2s ease-out forwards'
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ));
    }

    if (animationType === 'wave' || animationType === 'letterBounce') {
      return name.split('').map((letter, index) => (
        <span
          key={index}
          className="letter"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ));
    }

    return displayText;
  };

  if (animationType === 'typing') {
    return (
      <h1 className={`${className} hover-name-glow cursor-pointer`}>
        {displayText}
        {showCursor && (
          <span className="border-r-3 border-teal-400 animate-pulse ml-1">|</span>
        )}
      </h1>
    );
  }

  if (animationType === 'typingInfinite') {
    return (
      <h1 
        className={`${className} animate-typing-infinite cursor-pointer`}
        data-text={name}
      >
        <span style={{ opacity: 0 }}>{name}</span>
      </h1>
    );
  }

  return (
    <h1 className={`${className} ${getAnimationClass()} hover-name-glow cursor-pointer relative group`}>
      {renderLetters()}
      
      {/* Add floating particles effect for glow animation */}
      {animationType === 'glow' && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
                animation: `float 2s ease-in-out infinite ${i * 0.3}s`,
              }}
            />
          ))}
        </div>
      )}
    </h1>
  );
};

export default AnimatedName;
