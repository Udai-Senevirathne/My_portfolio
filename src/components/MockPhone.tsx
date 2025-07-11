import { useState, useEffect } from 'react';

interface MockPhoneProps {
  images: string[];
  title?: string;
  autoSlide?: boolean;
  slideInterval?: number;
  className?: string;
}

const MockPhone = ({ 
  images, 
  title = "App Preview", 
  autoSlide = true, 
  slideInterval = 3000,
  className = ""
}: MockPhoneProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!autoSlide || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, slideInterval);

    return () => clearInterval(interval);
  }, [autoSlide, images.length, slideInterval]);

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  const nextSlide = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Phone Frame */}
      <div className="relative w-64 mx-auto">
        {/* Phone Outer Frame */}
        <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-[3rem] p-3 shadow-2xl phone-glow">
          {/* Phone Inner Frame */}
          <div className="bg-black rounded-[2.5rem] p-2">
            {/* Screen Area */}
            <div className="relative bg-white rounded-[2rem] overflow-hidden w-full h-[480px] phone-reflection">
              {/* Status Bar */}
              <div className="absolute top-0 left-0 right-0 h-12 bg-black rounded-t-[2rem] z-20">
                <div className="flex justify-between items-center px-6 pt-3">
                  {/* Notch simulation */}
                  <div className="flex items-center space-x-1">
                    <div className="w-1 h-1 bg-white rounded-full opacity-60"></div>
                    <div className="w-1 h-1 bg-white rounded-full opacity-60"></div>
                    <div className="w-1 h-1 bg-white rounded-full opacity-60"></div>
                  </div>
                  {/* Time display */}
                  <div className="text-white text-xs font-mono opacity-80">9:41</div>
                  <div className="flex items-center space-x-1">
                    {/* Battery and signal indicators */}
                    <div className="w-4 h-2 border border-white rounded-sm opacity-60">
                      <div className="w-3 h-1 bg-white rounded-sm m-0.5 opacity-80"></div>
                    </div>
                    <div className="w-1 h-1 bg-white rounded-full opacity-60"></div>
                  </div>
                </div>
              </div>

              {/* Image Container */}
              <div className="relative w-full h-full pt-12">
                <div className="relative w-full h-full overflow-hidden">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                        index === currentImageIndex 
                          ? 'translate-x-0' 
                          : index < currentImageIndex 
                            ? '-translate-x-full' 
                            : 'translate-x-full'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${title} - Screen ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevSlide}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors duration-200 z-10"
                      aria-label="Previous image"
                    >
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={nextSlide}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors duration-200 z-10"
                      aria-label="Next image"
                    >
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}

                {/* Slide Indicators */}
                {images.length > 1 && (
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                          index === currentImageIndex 
                            ? 'bg-teal-400' 
                            : 'bg-white/50 hover:bg-white/70'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Home Indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full"></div>
          
          {/* Volume Buttons */}
          <div className="absolute left-0 top-20 w-1 h-8 bg-gray-700 rounded-r-md"></div>
          <div className="absolute left-0 top-32 w-1 h-6 bg-gray-700 rounded-r-md"></div>
          <div className="absolute left-0 top-40 w-1 h-6 bg-gray-700 rounded-r-md"></div>
          
          {/* Power Button */}
          <div className="absolute right-0 top-24 w-1 h-10 bg-gray-700 rounded-l-md"></div>
        </div>

        {/* Enhanced Phone Shadow */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 rounded-[3rem] -z-10 translate-y-6 blur-2xl scale-95"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-teal-400/10 rounded-[3rem] -z-10 translate-y-8 blur-3xl scale-90"></div>
      </div>

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-400">
            {currentImageIndex + 1} / {images.length}
          </span>
        </div>
      )}
    </div>
  );
};

export default MockPhone;
