import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { IconTarget, IconBolt, IconTool, IconRocket } from '@tabler/icons-react'
import { SEOHead } from '../components/ui/SEOHead'

const About: NextPage = () => {
  const iconMap = {
    IconTarget,
    IconBolt, 
    IconTool,
    IconRocket,
  };

  const values = [
    {
      title: "User-Centric Design",
      description: "Every line of code I write starts with the user in mind. I believe technology should be seamless and intuitive.",
      icon: "IconTarget",
    },
    {
      title: "Performance First", 
      description: "Waiting for a page to load is the worst. I optimize for performance from day one, ensuring lightning-fast load times and smooth interactions.",
      icon: "IconBolt",
    },
    {
      title: "Clean Architecture",
      description: "I build with the future in mind. Scalable, maintainable code that grows with your business needs.",
      icon: "IconTool",
    },
    {
      title: "Continuous Learning",
      description: "Technology evolves rapidly, and as developers, we must evolve with it. I'm always exploring new tools and methodologies to stay ahead.",
      icon: "IconRocket",
    },
  ];

  return (
    <>
      <SEOHead 
        title="About Me"
        description="Learn more about Blaize's journey, skills, and experience as a Full Stack Developer. Discover the values that drive exceptional web development."
      />

      <main className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10">
        <section className="section-padding pt-20 sm:pt-24 lg:pt-28">
          <div className="container-custom">
            <div className="text-center mb-12 lg:mb-20 animate-fade-in-up">
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 lg:mb-6 text-primary">
                About Me
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted/80 max-w-3xl mx-auto leading-relaxed">
                I'm a passionate full stack developer who transforms complex challenges into 
                elegant solutions. Here's my journey in building the digital future.
              </p>
            </div>

            <div className="max-w-5xl mx-auto mb-12 lg:mb-20">
              <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl animate-fade-in-up">
                <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-2xl">
                      <Image
                        src="/images/profile-photo.jpg"
                        alt="Blaize - Full Stack Developer"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4 lg:mb-6 text-primary text-center lg:text-left">
                      Hi, I'm Blaize! 👋
                    </h2>
                    <p className="text-muted/80 mb-4 lg:mb-6 leading-relaxed text-sm sm:text-base">
                      I started playing around with HTML and CSS at a young age and have loved building for the web ever since. Now, with almost 5 years of experience as a full stack developer, I specialize in creating scalable web applications that blend technical excellence with user-centered design.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12 lg:mb-20">
              <div className="text-center mb-10 lg:mb-16">
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-3 lg:mb-4 text-primary">
                  My Core Values
                </h2>
                <p className="text-base lg:text-lg text-muted/80 max-w-2xl mx-auto">
                  The principles that guide every project I work on
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
                {values.map((value, index) => {
                  const IconComponent = iconMap[value.icon as keyof typeof iconMap];
                  return (
                    <article
                      key={index}
                      className="bg-white/40 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-primary/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="mb-3 lg:mb-4">
                        <IconComponent size={32} className="text-primary sm:size-10" />
                      </div>
                      <h3 className="font-display text-lg sm:text-xl font-bold mb-3 lg:mb-4 text-foreground">
                        {value.title}
                      </h3>
                      <p className="text-muted/80 leading-relaxed text-sm sm:text-base">
                        {value.description}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 lg:p-12 shadow-2xl text-white animate-fade-in-up">
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4 lg:mb-6">
                  Let's Work Together
                </h2>
                <p className="text-base lg:text-lg mb-6 lg:mb-8 opacity-90 max-w-2xl mx-auto">
                  I'm always looking for new opportunities to work on interesting projects and collaborate with amazing people.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="btn bg-white text-primary hover:bg-white/90 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    Get In Touch
                  </Link>
                  <Link
                    href="/projects"
                    className="btn border-2 border-white text-white hover:bg-white hover:text-primary font-semibold transition-all duration-300 hover:-translate-y-1"
                  >
                    View My Work
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default About 