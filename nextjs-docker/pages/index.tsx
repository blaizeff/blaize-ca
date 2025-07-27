import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import Link from 'next/link';
import Image from 'next/image';
import Hero from '../components/Hero';
import { HeroHighlight } from '../components/animations/HeroHighlight';
import { Lens } from '../components/animations/Lens';
import { motion } from 'motion/react';
import { CardBody, CardContainer, CardItem } from "../components/animations/3DCard";
import { IconArrowRight, IconBrandGithub, IconMessage } from '@tabler/icons-react';
import { getFeaturedProjects } from '../config/projects';
import { SEOHead } from '../components/ui/SEOHead';

const Home: NextPage = () => {
  const projects = getFeaturedProjects();
  const [hoveringStates, setHoveringStates] = useState<{ [key: string]: boolean }>({});

  return (
    <>
      <SEOHead />

      <Hero />
      <HeroHighlight>
      <section id="about" className="snap-section section-padding flex items-center" aria-labelledby="about-heading">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="pb-12 lg:pb-36">
            <CardContainer className="animate-slide-up animate-fade-in-up-on-scroll">
              <CardBody className="bg-primary-light/10 glass-effect backdrop-blur-md backdrop-saturate-150 rounded-[22px] p-6 sm:p-8 lg:p-12 w-full h-auto border border-white/20">
                <CardItem translateZ="50" className="text-center">
                  <h3 className="font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 lg:mb-6 text-primary font-serif">Design</h3>
                  <p className="text-primary text-sm sm:text-base lg:text-lg leading-relaxed">
                    With a keen eye for aesthetics and user experience, I create visually stunning interfaces that prioritize usability. 
                    My design philosophy centers on creating intuitive experiences that users love to interact with.
                  </p>
                </CardItem>
              </CardBody>
            </CardContainer>
            </div>
            
            <div className="pt-12 lg:pt-36">
              <CardContainer className="animate-slide-up animate-fade-in-up-on-scroll">
                <CardBody className="bg-secondary-light/10 glass-effect backdrop-blur-md backdrop-saturate-150 rounded-[22px] p-6 sm:p-8 lg:p-12 w-full h-auto border border-white/20">
                  <CardItem translateZ="50" className="text-center">
                    <h3 className="font-semibold text-3xl sm:text-4xl lg:text-5xl mb-4 lg:mb-6 font-serif text-secondary">Engineering</h3>
                    <p className="text-secondary-darker text-sm sm:text-base lg:text-lg leading-relaxed">
                      Armed with modern technologies like React, TypeScript, and Next.js, I transform creative visions into 
                      high-performance applications. My engineering background ensures scalable, maintainable code that stands the test of time.
                    </p>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="snap-section section-padding pt-8 lg:pt-14" aria-labelledby="projects-heading">
        <div className="container-custom pt-5">
          <div className="text-center mb-6 lg:mb-8">
            <h2 id="projects-heading" className="font-display text-primary text-3xl sm:text-4xl md:text-5xl font-bold mb-3 lg:mb-4">
              Featured Projects
            </h2>
            <p className="text-base lg:text-lg text-primary-dark max-w-2xl mx-auto">
              A selection of my work. See how I turn ideas into reality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-8 lg:mb-12 items-stretch">
            {projects.map((project, index) => (
              <CardContainer key={project.id} className="animate-slide-up animate-fade-in-up-on-scroll">
                <CardBody className="bg-primary-light/10 glass-effect backdrop-blur-md backdrop-saturate-150 rounded-[22px] p-4 lg:p-6 w-full h-full border border-white/20">
                  <CardItem translateZ="50" className="w-full h-full flex flex-col">
                    <div className="mb-3 lg:mb-4">
                      {project.images?.length > 0 ? (
                        <div className="flex justify-center gap-2 lg:gap-3">
                          {project.images.map((imageSrc, imgIndex) => {
                            const imageKey = `${index}-${imgIndex}`;
                            return (
                              <Lens
                                key={imgIndex}
                                hovering={hoveringStates[imageKey] || false}
                                setHovering={(hovering) => 
                                  setHoveringStates(prev => ({ ...prev, [imageKey]: hovering }))
                                }
                                zoomFactor={1.5}
                                lensSize={150}
                              >
                                <div className="relative w-20 h-36 lg:w-24 lg:h-44 rounded-lg overflow-hidden shadow-md border border-primary/20">
                                  <Image
                                    src={imageSrc}
                                    alt={`${project.title} screenshot ${imgIndex + 1}`}
                                    fill
                                    className="object-fill"
                                  />
                                </div>
                              </Lens>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="h-36 lg:h-44 rounded-lg flex items-center justify-center ">
                          <div className="text-center">
                            <span className="font-medium text-gray-500  drop-shadow-md text-sm">Images Coming Soon</span>
                            <p className="text-gray-500 font-normal text-xs mt-1">Check back later!</p>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <motion.div 
                      className="text-center flex-1 flex flex-col justify-between"
                      animate={{
                        filter: Object.keys(hoveringStates).some(key => 
                          key.startsWith(`${index}-`) && hoveringStates[key]
                        ) ? "blur(1px)" : "blur(0px)",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <div>
                        <h3 className="font-bold text-lg lg:text-xl mb-2 lg:mb-3 text-primary">{project.title}</h3>
                        
                        <p className="text-gray-600 mb-3 lg:mb-4 text-xs sm:text-sm leading-relaxed h-8 lg:h-10 overflow-hidden line-clamp-2">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-1 lg:gap-1.5 mb-3 lg:mb-4 justify-center h-12 lg:h-14 overflow-hidden">
                          {project.tech.map((tech, techIndex) => (
                            <span key={techIndex} className="px-2 lg:px-2.5 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium h-fit">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium text-xs"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <IconBrandGithub size={14} />
                          <span className="hidden sm:inline">View on GitHub</span>
                          <span className="sm:hidden">GitHub</span>
                        </a>
                      </div>
                    </motion.div>
                  </CardItem>
                </CardBody>
              </CardContainer>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/projects" className="btn btn-primary font-medium inline-flex items-center gap-2">
              View All Projects
              <IconArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      </HeroHighlight>

      <section id="contact" className="snap-section section-padding flex items-center bg-primary" aria-labelledby="contact-heading">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 id="contact-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 lg:mb-6 text-secondary">
              Let&apos;s <span className="">Build Something</span> Together
            </h2>
            <p className="text-base lg:text-lg text-white mb-6 lg:mb-8">
              Feel free to reach out if you have any questions or want to work together.
            </p>
            
            <div className="flex justify-center">
              <Link href="/contact" className="btn btn-secondary font-medium flex items-center gap-2">
                Get In Touch
                <IconMessage size={22} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home; 