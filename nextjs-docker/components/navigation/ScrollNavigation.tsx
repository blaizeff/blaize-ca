import React from 'react';
import { useRouter } from 'next/router';
import { useScrollSection } from '../useScrollSection';
import { scrollSections } from '../../config/navigation';

const ScrollNavigation: React.FC = () => {
  const { currentSection, isCompact } = useScrollSection();
  const router = useRouter();

  // Only show scroll navigation on homepage
  if (router.pathname !== '/') return null;

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="scroll-nav hidden lg:flex">
      {scrollSections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className={`scroll-nav-dot transition-all duration-500 ${
            currentSection === section.id ? 'active' : ''
          }`}
          title={section.label}
          aria-label={`Scroll to ${section.label}`}
          style={{
            borderColor: isCompact 
              ? currentSection === section.id 
                ? '#354E73' 
                : 'rgba(53, 78, 115, 0.3)'
              : currentSection === section.id 
                ? '#F9AF5F' 
                : 'rgba(249, 175, 95, 0.3)',
            backgroundColor: currentSection === section.id 
              ? (isCompact ? '#354E73' : '#F9AF5F')
              : 'transparent'
          }}
        />
      ))}
    </div>
  );
};

export default ScrollNavigation; 