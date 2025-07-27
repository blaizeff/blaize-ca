import React from 'react';
import { useRouter } from 'next/router';
import { IconMenu4, IconX } from '@tabler/icons-react';
import { useScrollSection } from '../useScrollSection';

interface MenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ isOpen, onToggle }) => {
  const router = useRouter();
  const { isCompact } = useScrollSection();
  const isHomepage = router.pathname === '/';
  
  // On homepage: use dynamic color based on scroll position
  // On other pages: always use primary color
  const menuIconColor = isHomepage 
    ? (isCompact ? 'text-primary' : 'text-secondary')
    : 'text-primary';

  return (
    <button
      onClick={onToggle}
      className={`p-2 rounded-md hover:bg-muted/50 transition-all duration-500 ${menuIconColor}`}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      {isOpen ? (
        <IconX className="w-6 h-6" />
      ) : (
        <IconMenu4 className="w-6 h-6" />
      )}
    </button>
  );
};

export default MenuButton; 