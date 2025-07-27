import React from 'react';

interface SocialLinkProps {
  icon: React.ComponentType<{ className?: string; size?: string | number }>;
  name: string;
  url: string;
  colorClasses: string;
  className?: string;
  'aria-label'?: string;
}

export const SocialLink: React.FC<SocialLinkProps> = ({
  icon: Icon,
  name,
  url,
  colorClasses,
  className = "",
  'aria-label': ariaLabel,
}) => {
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`block group ${className}`}
      aria-label={ariaLabel || `Visit ${name} profile`}
    >
      <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r ${colorClasses} flex items-center justify-center transition-transform duration-200 group-hover:scale-105 shadow-lg`}>
        <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" aria-hidden="true" />
      </div>
    </a>
  );
}; 