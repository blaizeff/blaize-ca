import React, { forwardRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { navigationItems } from '../../config/navigation';
import { SocialLinks } from '.';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = forwardRef<HTMLDivElement, MobileMenuProps>(
  ({ isOpen, onClose }, ref) => {
    const router = useRouter();

    if (!isOpen) return null;

    return (
      <div 
        ref={ref} 
        className="mt-4 bg-muted/80 backdrop-blur-sm rounded-lg shadow-lg md:absolute md:right-0 md:w-64 md:top-full md:mt-2"
      >
        <div className="flex flex-col space-y-2 p-4">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={onClose}
              className={`font-medium py-3 px-4 rounded-md transition-colors duration-300 ${
                router.pathname === item.href
                  ? 'text-secondary bg-secondary/10'
                  : 'text-muted-foreground hover:bg-muted/50'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <SocialLinks />
        </div>
      </div>
    );
  }
);

MobileMenu.displayName = 'MobileMenu';

export default MobileMenu; 