import React from 'react';
import { NextPage } from 'next';
import { IconMail, IconCalendar, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import { ContactMethod } from '../components/ui/ContactMethod';
import { SocialLink } from '../components/ui/SocialLink';
import { SEOHead } from '../components/ui/SEOHead';

const Contact: NextPage = () => {
  const contactMethods = [
    {
      icon: IconCalendar,
      title: 'Schedule a Meeting',
      detail: 'Reserve 30 minutes',
      link: 'https://fantastical.app/blaize',
      colorClasses: 'from-gray-600 to-gray-700'
    }
  ];

  const socialLinks = [
    {
      icon: IconMail,
      name: 'Email',
      url: 'mailto:me@blaize.ca',
      colorClasses: 'from-primary to-primary/80'
    },
    {
      icon: IconBrandGithub,
      name: 'GitHub',
      url: 'https://github.com/blaizeff',
      colorClasses: 'from-gray-700 to-gray-900'
    },
    {
      icon: IconBrandLinkedin,
      name: 'LinkedIn', 
      url: 'https://linkedin.com/in/blaizeff',
      colorClasses: 'from-blue-600 to-blue-700'
    }
  ];

  return (
    <>
      <SEOHead 
        title="Contact"
        description="Get in touch with Blaize via email, schedule a meeting, or connect on social media. Let's discuss your next project!"
      />

      <main className="section-padding min-h-screen pt-20 sm:pt-24 lg:pt-28">
        <div className="container-custom">
          <div className="text-center mb-12 lg:mb-16 animate-fade-in-up">
            <h1 className="font-display text-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 lg:mb-6">
              Let's Connect
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted/60 max-w-3xl mx-auto">
              I'd love to hear about what you're working on and discuss how we can work together.
            </p>
          </div>

          <div className="mb-16 lg:mb-20">
            <div className="flex flex-wrap justify-center items-center gap-3 lg:gap-4 mb-6 md:mb-8">
              {contactMethods.map((method, index) => (
                <ContactMethod
                  key={`contact-${index}`}
                  icon={method.icon}
                  title={method.title}
                  detail={method.detail}
                  link={method.link}
                  colorClasses={method.colorClasses}
                />
              ))}
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-3 lg:gap-4">
              {socialLinks.map((social, index) => (
                <SocialLink
                  key={`social-${index}`}
                  icon={social.icon}
                  name={social.name}
                  url={social.url}
                  colorClasses={social.colorClasses}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-16 lg:mt-20">
            <div className="bg-primary p-6 sm:p-8 lg:p-8 rounded-[22px] max-w-3xl mx-auto">
              <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl text-white mb-3 lg:mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-white/90 mb-4 lg:mb-6 text-sm sm:text-base lg:text-lg">
                Feel free to reach out to me via email, schedule a meeting, or connect on social media.
              </p>
              <a 
                href="mailto:me@blaize.ca"
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white text-primary rounded-lg hover:bg-white/90 transition-colors duration-200 font-semibold text-sm sm:text-base"
                aria-label="Send email to Blaize"
              >
                <IconMail size={18} />
                Send Me an Email
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact; 