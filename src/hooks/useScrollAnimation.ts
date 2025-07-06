import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = <T extends HTMLElement = HTMLDivElement>(threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: stop observing after animation triggers
          if (element) observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px' // Trigger animation 100px before element comes into view
      }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold]);

  return [ref, isVisible] as const;
};

export const useScrollAnimationMultiple = <T extends HTMLElement = HTMLDivElement>(threshold = 0.1) => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const refs = useRef<(T | null)[]>([]);

  useEffect(() => {
    const currentRefs = refs.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = currentRefs.findIndex(ref => ref === entry.target);
          if (entry.isIntersecting && index !== -1) {
            setVisibleItems(prev => new Set([...prev, index]));
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [threshold]);

  const setRef = (index: number) => (el: T | null) => {
    refs.current[index] = el;
  };

  return [setRef, visibleItems] as const;
};
