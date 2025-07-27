import type { Project, ProjectCategory, ProjectStatus } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: "Focus Shift",
    description: "Advanced React Native app for tracking and limiting screen time.",
    tech: ["React Native", "TypeScript", "Tailwind CSS", "Expo", "Kotlin"],
    images: [
      "/images/focus-shift/home.jpg",
      "/images/focus-shift/settings.jpg",
      "/images/focus-shift/conditions.jpg"
    ],
    githubUrl: "https://github.com/blaizeff/focus-shift",
    featured: true,
    category: 'mobile-app',
    status: 'completed'
  },
  {
    id: '2',
    title: "Word Surgery",
    description: "A word puzzle game where you rearrange letters to form new words.",
    tech: ["React Native", "Typescript"],
    images: [
      "/images/word-surgery/home.jpg",
      "/images/word-surgery/game.png",
      "/images/word-surgery/gameover.jpeg"
    ],
    githubUrl: "https://github.com/blaizeff/WordSurgery",
    featured: true,
    category: "mobile-app",
    status: 'completed'
  },
  {
    id: '3',
    title: "Real-time Bus Tracking",
    description: "Real-time large GTFS-RT data pipeline to track bus locations on a map and display buses that are idle.",
    tech: ["Apache Storm", "Mosquitto (MQTT)", "Java", "Typescript", "Node.js", "Redis", "Docker"],
    images: [],
    githubUrl: "https://github.com/blaizeff/realtime-transit-gtfs-tracking",
    featured: true,
    category: "web-app",
    status: 'completed'
  },
];

// Helper function to get featured projects (first 3 for homepage)
export const getFeaturedProjects = (): Project[] => {
  return projects.slice(0, 3);
};

// Helper function to get all projects
export const getAllProjects = (): Project[] => {
  return projects;
}; 