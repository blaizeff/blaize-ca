export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  images?: string[];
  featured: boolean;
  category: ProjectCategory;
  status: ProjectStatus;
  startDate?: Date;
  endDate?: Date;
}

export type ProjectCategory = 
  | 'web-app' 
  | 'mobile-app' 
  | 'desktop-app' 
  | 'api' 
  | 'library' 
  | 'other';

export type ProjectStatus = 
  | 'completed' 
  | 'in-progress' 
  | 'archived' 
  | 'planned';

export interface NavigationItem {
  name: string;
  href: string;
  external?: boolean;
}

export interface ScrollSection {
  id: string;
  label: string;
}

export interface ContactMethod {
  type: 'email' | 'phone' | 'calendar' | 'form';
  label: string;
  value: string;
  icon?: React.ComponentType<any>;
  primary?: boolean;
}

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  username?: string;
  icon?: React.ComponentType<any>;
}

export type SocialPlatform = 
  | 'github' 
  | 'linkedin' 
  | 'twitter' 
  | 'instagram' 
  | 'youtube' 
  | 'discord' 
  | 'email';

export interface Skill {
  name: string;
  level: SkillLevel;
  category: SkillCategory;
  yearsOfExperience?: number;
}

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export type SkillCategory = 
  | 'frontend' 
  | 'backend' 
  | 'database' 
  | 'devops' 
  | 'design' 
  | 'mobile' 
  | 'other';

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  phone?: string;
  website?: string;
  profileImage: string;
  resumeUrl?: string;
  languages?: string[];
}

export interface CoreValue {
  title: string;
  description: string;
  icon: string;
}

export interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  siteName?: string;
  locale?: string;
  type?: string;
}

export interface AnimationConfig {
  duration?: number;
  delay?: number;
  easing?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export interface FormValidationError {
  field: string;
  message: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    foreground: string;
    muted: string;
  };
  fonts: {
    sans: string[];
    display: string[];
  };
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type WithId<T> = T & { id: string };
export type WithTimestamps<T> = T & {
  createdAt: Date;
  updatedAt: Date;
};

export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
  'data-testid'?: string;
}

export interface IconProps {
  size?: number | string;
  className?: string;
  'aria-hidden'?: boolean;
}

export interface AppError {
  message: string;
  code?: string;
  statusCode?: number;
  stack?: string;
}

export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export const isProject = (obj: any): obj is Project => {
  return obj && 
    typeof obj.id === 'string' && 
    typeof obj.title === 'string' &&
    typeof obj.description === 'string' &&
    Array.isArray(obj.tech) &&
    typeof obj.githubUrl === 'string' &&
    typeof obj.featured === 'boolean';
};

export const isSocialLink = (obj: any): obj is SocialLink => {
  return obj && 
    typeof obj.platform === 'string' &&
    typeof obj.url === 'string';
}; 