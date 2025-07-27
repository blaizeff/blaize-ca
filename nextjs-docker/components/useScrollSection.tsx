import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { scrollSections } from '../config/navigation';

interface UseScrollSectionReturn {
  isCompact: boolean;
  isAnimating: boolean;
  setIsAnimating: (animating: boolean) => void;
  currentSection: string;
}

export const useScrollSection = (): UseScrollSectionReturn => {
  const [isCompact, setIsCompact] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentSection, setCurrentSection] = useState('hero');
  const router = useRouter();
  const lastScrollY = useRef(0);

  // Only track scroll on homepage
  const isHomepage = router.pathname === '/';

  useEffect(() => {
    if (!isHomepage) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroSection = document.getElementById('hero');
      
      if (!heroSection) return;

      const heroHeight = heroSection.offsetHeight;
      const threshold = heroHeight * 0.4;
      
      lastScrollY.current = scrollY;
      
      // current section
      const sectionIds = scrollSections.map(section => section.id);
      let currentSectionId = 'hero';
      
      // section most visible in the viewport
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const sectionId = sectionIds[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top;
          const elementHeight = rect.height;
          
          // section is considered active if:
          // 1. Its top is above the middle of viewport, OR
          // 2. It's the first section and user is at the very top
          if (elementTop <= window.innerHeight / 2) {
            currentSectionId = sectionId;
            break;
          }
        }
      }
      
      // determine if we should show compact version (for logo and colors)
      // logo should animate (isCompact = false) in hero and contact sections (both have blue backgrounds)
      let shouldBeCompact = scrollY > threshold;
      
      // override compact state for contact section (blue background like hero)
      if (currentSectionId === 'contact') {
        shouldBeCompact = false;
      }
      
      if (shouldBeCompact !== isCompact) {
        setIsCompact(shouldBeCompact);
      }
      
      if (currentSection !== currentSectionId) {
        setCurrentSection(currentSectionId);
      }
    };

    // throttle scroll events for performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [isHomepage, isCompact, currentSection]);

  return {
    isCompact,
    isAnimating,
    setIsAnimating,
    currentSection
  };
}; 