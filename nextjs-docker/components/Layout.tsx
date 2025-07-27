import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import DynamicLogo from './DynamicLogo';
import { ScrollNavigation, MenuButton, MobileMenu } from './navigation';
import { useMenu } from '../hooks';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  const { isMenuOpen, toggleMenu, closeMenu, menuRef } = useMenu();
  const router = useRouter();
  const isHomepage = router.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Apply homepage-scroll class to HTML element for proper scroll-snap
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isHomepage) {
      htmlElement.classList.add('homepage-scroll');
    } else {
      htmlElement.classList.remove('homepage-scroll');
    }

    // Cleanup on unmount
    return () => {
      htmlElement.classList.remove('homepage-scroll');
    };
  }, [isHomepage]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed w-full z-50 transition-all duration-300 py-4 md:py-12">
        {/* Gradient blur background - only on non-home pages and mobile only */}
        {!isHomepage && (
          <div className="absolute inset-x-0 -top-2 h-24 bg-gradient-to-b from-white/80 via-white/60 to-white/20 backdrop-blur-xl backdrop-saturate-150 -z-10 md:hidden"></div>
        )}
        
        <div className="container-custom relative">
          <div className="flex justify-between items-center relative">
            {/* Logo */}
            <DynamicLogo />

            {/* Menu button */}
            <div>
              <MenuButton isOpen={isMenuOpen} onToggle={toggleMenu} />
            </div>
          </div>

          {/* Mobile Menu */}
          <MobileMenu 
            ref={menuRef}
            isOpen={isMenuOpen} 
            onClose={closeMenu} 
          />
        </div>
      </nav>

      {/* Scroll Navigation Dots */}
      <ScrollNavigation />

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary/80 py-12">
        <div className="container-custom">
          <div className="text-center mb-6">
                          <Image 
                src="/images/blaize-logo__white.svg" 
                alt="Blaize" 
                width={88.88} 
                height={30}
                className="mx-auto"
              />
          </div>
          <div className="text-center">
            <p className="text-white text-sm">
              © {new Date().getFullYear()} Blaize. All rights reserved.
              <br />
              Built using Next.js, Tailwind CSS, and TypeScript.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 