import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShootingStars } from './animations/ShootingStars';
import { StarsBackground } from './animations/StarsBackground';
import { IconArrowRight, IconMessage } from '@tabler/icons-react';

const Hero: React.FC = () => {
  const scrollToNext = (): void => {
    const nextSection = document.querySelector('#about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="hero-section relative flex items-center justify-center overflow-hidden bg-primary"
      aria-labelledby="hero-heading"
    >
      <ShootingStars />
      <StarsBackground />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" aria-hidden="true"></div>
      
      <div className="container-custom relative z-10">  
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-3 animate-fade-in-up text-center lg:text-left">
            <h1 
              id="hero-heading" 
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold my-4 lg:my-6"
            >
              <span className="block text-secondary">Full Stack Developer</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-white max-w-2xl mb-6 lg:mb-10 mx-auto lg:mx-0">
              I build beautiful and reliable web applications. I specialize in turning ideas into reality with a focus on user experience and performance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 items-center lg:items-start">
              <Link 
                href="/contact" 
                className="btn btn-secondary font-medium flex items-center gap-2 w-full sm:w-auto justify-center"
                aria-label="Navigate to contact page"
              >
                Get In Touch
                <IconMessage size={22} aria-hidden="true" />
              </Link>
              <Link 
                href="/projects" 
                className="btn btn-secondary font-medium flex items-center gap-2 w-full sm:w-auto justify-center"
                aria-label="Navigate to projects page"
              >
                View My Work
                <IconArrowRight size={22} aria-hidden="true" />
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-2 flex justify-center lg:justify-end animate-fade-in overflow-visible order-first lg:order-last">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 overflow-visible">
              <div 
                className="absolute rounded-full inset-0 bg-gradient-to-br from-primary to-secondary animate-pulse-slow" 
                aria-hidden="true"
              ></div>
              <div className="absolute rounded-full inset-2 overflow-hidden">
                <Image
                  src="/profile-photo.jpg"
                  alt="Blaize - Full Stack Developer"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-6 lg:bottom-10 left-1/2 -translate-x-1/2 z-10">
        <button 
          onClick={scrollToNext} 
          className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-50 rounded-lg p-2"
          aria-label="Scroll down to about section"
        >
          <div className="text-secondary text-xs sm:text-sm flex items-center flex-col animate-bounce-slow hover:scale-110 transition-transform">
            <span>Scroll Down</span>
            <svg 
              className="w-3 h-3 sm:w-4 sm:h-4 mt-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero; 