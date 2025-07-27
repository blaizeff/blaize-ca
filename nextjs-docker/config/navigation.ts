import type { NavigationItem, SocialLink, ScrollSection } from '../types';

export const navigationItems: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/blaizeff',
    icon: 'github',
    ariaLabel: 'GitHub Profile'
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/blaizeff',
    icon: 'linkedin',
    ariaLabel: 'LinkedIn Profile'
  },
  {
    name: 'Email',
    href: 'mailto:me@blaize.ca',
    icon: 'mail',
    ariaLabel: 'Send Email'
  }
];

export const scrollSections: ScrollSection[] = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
]; 