
import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const Hero: React.FC = () => {
  const { t, language } = useLanguage();
  const textContainerRef = useRef<HTMLDivElement>(null);

  // Animation effect for text elements
  useEffect(() => {
    const container = textContainerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll('.animate-on-load');
    
    elements.forEach((element, index) => {
      setTimeout(() => {
        (element as HTMLElement).style.opacity = '1';
        (element as HTMLElement).style.transform = 'translateY(0)';
      }, 200 + (index * 100));
    });
  }, [language]); // Re-run when language changes
  
  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center pt-16 grid-bg">
      {/* Background gradient effects */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 -right-1/3 w-1/2 h-1/2 bg-cyber-accent/10 rounded-full filter blur-[100px] animate-float"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-700/10 rounded-full filter blur-[100px] animate-float"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 pt-16 md:pt-24 lg:pt-32 z-10">
        <div className="flex flex-col items-center justify-center text-center" ref={textContainerRef}>
          {/* Small Eyebrow Text */}
          <div 
            className="animate-on-load mb-4 px-4 py-1.5 rounded-full bg-cyber-accent/10 border border-cyber-accent/20 inline-flex items-center text-sm text-cyber-accent transition-all duration-500 opacity-0 transform translate-y-6"
          >
            {t('hero.subtitle')}
          </div>
          
          {/* Title */}
          <h1 
            className="animate-on-load text-gradient font-bold mb-6 max-w-5xl transition-all duration-500 opacity-0 transform translate-y-6"
          >
            {t('hero.title')}
          </h1>
          
          {/* Description */}
          <p 
            className="animate-on-load text-lg md:text-xl text-white/80 max-w-3xl mb-10 transition-all duration-500 opacity-0 transform translate-y-6"
          >
            {t('hero.description')}
          </p>
          
          {/* CTA Button */}
          <div className="animate-on-load transition-all duration-500 opacity-0 transform translate-y-6">
            <a 
              href="#introduction" 
              className="glow-border px-6 py-3 rounded-lg bg-cyber-accent text-white font-medium hover:bg-cyber-accent-light transition-all duration-300 inline-flex items-center gap-2 animate-pulse-slow"
            >
              {t('hero.cta')}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor" 
                className="w-5 h-5"
              >
                <path 
                  fillRule="evenodd"
                  d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
          
          {/* Visual Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-70">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-white"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
