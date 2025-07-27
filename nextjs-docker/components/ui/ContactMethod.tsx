import React from 'react';

interface ContactMethodProps {
  icon: React.ComponentType<{ className?: string; size?: string | number }>;
  title: string;
  detail: string;
  link: string;
  colorClasses: string;
  className?: string;
}

export const ContactMethod: React.FC<ContactMethodProps> = ({
  icon: Icon,
  title,
  detail,
  link,
  colorClasses,
  className = "",
}) => {
  return (
    <a 
      href={link}
      target={link.startsWith('http') ? '_blank' : undefined}
      rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={`block group ${className}`}
      aria-label={`${title} - ${detail}`}
    >
      <div className={`h-16 sm:h-20 px-4 sm:px-6 rounded-full bg-gradient-to-r ${colorClasses} flex items-center gap-3 sm:gap-4 transition-transform duration-200 group-hover:scale-105 shadow-lg`}>
        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white flex-shrink-0" aria-hidden="true" />
        <div className="text-white mr-1 sm:mr-2">
          <div className="font-medium text-xs sm:text-sm leading-tight">
            {title}
          </div>
          <div className="text-xs opacity-90 leading-tight">
            {detail}
          </div>
        </div>
      </div>
    </a>
  );
}; 