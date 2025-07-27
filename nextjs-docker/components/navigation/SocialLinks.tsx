import React from 'react';
import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-react';
import { socialLinks } from '../../config/navigation';

const iconMap = {
  github: IconBrandGithub,
  linkedin: IconBrandLinkedin,
  mail: IconMail,
};

const SocialLinks: React.FC = () => {
  return (
    <div className="py-2">
      <div className="flex space-x-4 justify-center">
        {socialLinks.map((link) => {
          const IconComponent = iconMap[link.icon as keyof typeof iconMap];
          
          return (
            <a
              key={link.name}
              href={link.href}
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className="text-gray-400 hover:text-secondary transition-colors duration-300"
              aria-label={link.ariaLabel}
            >
              <IconComponent size={28} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialLinks; 