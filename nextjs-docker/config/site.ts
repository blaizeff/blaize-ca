export const siteConfig = {
  name: "Blaize",
  title: "Blaize - Full Stack Developer",
  description: "Passionate full stack developer specializing in React, TypeScript, and Next.js. Creating beautiful, performant web applications with excellent user experiences.",
  url: "https://blaize.ca",
  
  personal: {
    name: "Blaize",
    title: "Full Stack Developer",
    bio: "I build beautiful and reliable web applications. I specialize in turning ideas into reality with a focus on user experience and performance.",
    location: "Canada",
    email: "me@blaize.ca",
    profileImage: "/images/profile-photo.jpg",
  },

  contact: {
    email: "me@blaize.ca",
    calendar: "https://fantastical.app/blaize",
  },

  social: {
    github: {
      url: "https://github.com/blaizeff",
      username: "blaizeff",
    },
    linkedin: {
      url: "https://linkedin.com/in/blaizeff", 
      username: "blaizeff",
    },
  },

  skills: {
    frontend: ["JavaScript", "TypeScript", "React.js", "Vue.js", "Next.js", "SASS/SCSS", "Responsive Design"],
    backend: ["C#", ".NET Framework", "Node.js", "Python", "Express.js", "NestJS", "GraphQL"],
    database: ["Microsoft T-SQL", "MySQL", "PostgreSQL", "MongoDB", "Redis"],
    uiux: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research", "Accessibility (WCAG)"],
    devops: ["Docker", "CI/CD (GitHub Actions)", "Project Management"],
  },

  seo: {
    keywords: [
      "full stack developer",
      "react developer", 
      "typescript developer",
      "next.js developer",
      "web developer",
      "frontend developer",
      "backend developer",
      "javascript developer",
      "software engineer",
      "web application development",
    ],
    ogImage: "/og-image.jpg", // Add when available
    twitterCard: "summary_large_image",
  },

  analytics: {
    googleAnalytics: process.env.NEXT_PUBLIC_GA_ID, // Add when available
    vercelAnalytics: true,
  },
} as const;

export type SiteConfig = typeof siteConfig; 