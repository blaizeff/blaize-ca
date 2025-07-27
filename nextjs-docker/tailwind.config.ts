import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        foreground: '#000000',
        primary:  {
          DEFAULT: '#354E73',
          light: '#DBECFF',
        },
        secondary: {
          DEFAULT: '#FBB05E',
          darker: '#492600',
          dark: '#F9A25D',
          light: '#FFE8D9',
        },
        muted: {
          DEFAULT: '#1a1a1a',
          foreground: '#a3a3a3',
        },
      },
      fontFamily: {
        sans: ['"Clash Grotesk"', 'system-ui', 'sans-serif'],
        display: ['"Canela Deck"', '"Clash Grotesk"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'normal': '0em',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
        'clash': '0.02em', // Custom spacing for Clash Grotesk
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'fade-in-up': 'fadeInUp 0.5s ease-in-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config 