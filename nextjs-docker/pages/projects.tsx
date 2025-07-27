import React, { useState } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import { IconBrandGithub } from '@tabler/icons-react';
import { CardBody, CardContainer, CardItem } from "../components/animations/3DCard";
import { Lens } from '../components/animations/Lens';
import { motion } from 'motion/react';
import { getAllProjects } from '../config/projects';
import { SEOHead } from '../components/ui/SEOHead';
import { siteConfig } from '../config/site';

const Projects: NextPage = () => {
  const projects = getAllProjects();
  const [hoveringStates, setHoveringStates] = useState<{ [key: string]: boolean }>({});

  return (
    <>
      <SEOHead 
        title="Projects"
        description={`Explore ${siteConfig.personal.name}'s portfolio of projects. From web applications to mobile apps, see how ideas become reality through clean code and user-centered design.`}
      />

      <main className="section-padding pt-20 sm:pt-24 lg:pt-28">
        <div className="container-custom">
          <div className="text-center mb-12 lg:mb-16 animate-fade-in-up">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 lg:mb-4 text-primary">
              My Projects
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted/80 max-w-3xl mx-auto">
              Here are some of the projects I'm proud to have worked on.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            {projects.map((project) => (
              <article key={project.id} className="animate-slide-up animate-fade-in-up-on-scroll w-full">
                <CardContainer className="w-full">
                  <CardBody className="bg-primary-light/20 glass-effect rounded-[22px] p-6 lg:p-8 w-full h-full">
                    <CardItem translateZ="50" className="w-full h-full">
                      <div className="flex flex-col">
                          <div className="mb-4 lg:mb-6">
                            {project.images && project.images.length > 0 ? (
                              <div className="flex justify-center gap-3 lg:gap-4">
                                {project.images.map((imageSrc, imgIndex) => {
                                  const imageKey = `${project.id}-${imgIndex}`;
                                  return (
                                    <Lens
                                      key={imgIndex}
                                      hovering={hoveringStates[imageKey] || false}
                                      setHovering={(hovering) => 
                                        setHoveringStates(prev => ({ ...prev, [imageKey]: hovering }))
                                      }
                                      zoomFactor={1.5}
                                      lensSize={120}
                                    >
                                      <div className="relative w-24 h-44 sm:w-28 sm:h-48 lg:w-32 lg:h-56 rounded-lg overflow-hidden shadow-md border border-primary/20">
                                        <Image
                                          src={imageSrc}
                                          alt={`${project.title} screenshot ${imgIndex + 1}`}
                                          fill
                                          className="object-fit"
                                        />
                                      </div>
                                    </Lens>
                                  );
                                })}
                              </div>
                            ) : (
                              <div className="h-44 sm:h-48 lg:h-56 rounded-lg flex items-center justify-center">
                                <div className="text-center">
                                  <span className="font-medium text-gray-500 drop-shadow-md text-sm">Images Coming Soon</span>
                                  <p className="text-gray-500 font-normal text-xs mt-1">Check back later!</p>
                                </div>
                              </div>
                            )}
                          </div>
                          
                          <motion.div 
                            className="text-center flex-1 flex flex-col"
                            animate={{
                              filter: Object.keys(hoveringStates).some(key => 
                                key.startsWith(`${project.id}-`) && hoveringStates[key]
                              ) ? "blur(1px)" : "blur(0px)",
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <h2 className="font-bold text-xl sm:text-2xl mb-3 lg:mb-4 text-primary">{project.title}</h2>
                            
                            <p className="text-gray-600 mb-4 lg:mb-6 text-sm sm:text-base flex-1">
                              {project.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-1.5 lg:gap-2 mb-4 lg:mb-6 justify-center min-h-16 lg:min-h-20 items-start overflow-hidden">
                              {project.tech.map((tech, techIndex) => (
                                <span key={techIndex} className="px-2.5 lg:px-3 py-1 lg:py-1.5 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium">
                                  {tech}
                                </span>
                              ))}
                            </div>
                            
                            <div className="mt-auto">
                              <a 
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium text-sm"
                                aria-label={`View ${project.title} source code on GitHub`}
                              >
                                <IconBrandGithub size={16} />
                                <span className="hidden sm:inline">View on GitHub</span>
                                <span className="sm:hidden">GitHub</span>
                              </a>
                            </div>
                          </motion.div>
                        </div>
                      </CardItem>
                    </CardBody>
                  </CardContainer>
                </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Projects; 