
import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowDown, Shield, Lock, Code } from 'lucide-react';

const Hero: React.FC = () => {
  const { t, language } = useLanguage();
  const textContainerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

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

    // Create animated particles
    const createParticles = () => {
      if (!particlesRef.current) return;
      
      particlesRef.current.innerHTML = '';
      
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('cyber-particle');
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Random size
        const size = Math.floor(Math.random() * 4) + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random opacity
        particle.style.opacity = `${Math.random() * 0.5 + 0.3}`;
        
        // Random animation duration
        const duration = Math.random() * 20 + 10;
        particle.style.animation = `float ${duration}s linear infinite`;
        
        // Random delay
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        particlesRef.current.appendChild(particle);
      }
    };
    
    createParticles();
    
    // Recreate particles on window resize
    window.addEventListener('resize', createParticles);
    
    return () => {
      window.removeEventListener('resize', createParticles);
    };
  }, [language]); // Re-run when language changes
  
  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center pt-16">
      {/* Particles background */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none z-0 overflow-hidden"></div>
      
      {/* Matrix-like code rain effect */}
      <div className="absolute inset-0 bg-cyber-darker opacity-80 z-0">
        <div className="code-rain"></div>
      </div>
      
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30 z-0"></div>
      
      {/* Background gradient effects */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-0 -right-1/3 w-1/2 h-1/2 bg-cyber-accent/10 rounded-full filter blur-[120px] animate-float"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-700/10 rounded-full filter blur-[120px] animate-float-delay"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 pt-16 md:pt-24 lg:pt-32 z-10 relative">
        <div className="flex flex-col items-center justify-center text-center" ref={textContainerRef}>
          {/* Small Eyebrow Text */}
          <div 
            className="animate-on-load mb-4 px-4 py-1.5 rounded-full bg-cyber-accent/10 border border-cyber-accent/20 inline-flex items-center text-sm text-cyber-accent transition-all duration-500 opacity-0 transform translate-y-6"
          >
            <Shield className="w-4 h-4 mr-2" />
            {t('hero.subtitle')}
          </div>
          
          {/* Title with glitch effect */}
          <h1 
            className="animate-on-load cyber-glitch-text text-gradient font-bold mb-6 max-w-5xl transition-all duration-500 opacity-0 transform translate-y-6"
            data-text={t('hero.title')}
          >
            {t('hero.title')}
          </h1>
          
          {/* Description */}
          <p 
            className="animate-on-load text-lg md:text-xl text-white/80 max-w-3xl mb-10 transition-all duration-500 opacity-0 transform translate-y-6"
          >
            {t('hero.description')}
          </p>
          
          {/* Floating icon elements */}
          <div className="absolute top-1/4 -left-20 opacity-20 hidden lg:block">
            <Lock className="w-32 h-32 text-cyber-accent animate-float" />
          </div>
          <div className="absolute bottom-1/3 -right-16 opacity-20 hidden lg:block">
            <Code className="w-24 h-24 text-purple-400 animate-float-delay" />
          </div>
          
          {/* CTA Button */}
          <div className="animate-on-load transition-all duration-500 opacity-0 transform translate-y-6 relative z-10">
            <Button 
              variant="default"
              className="cyber-btn px-8 py-6 text-lg bg-gradient-to-r from-cyber-accent to-blue-500 hover:from-cyber-accent-light hover:to-blue-400 border-none shadow-[0_0_15px_rgba(14,165,233,0.4)] hover:shadow-[0_0_25px_rgba(14,165,233,0.6)] transition-all duration-300"
              onClick={() => {
                document.getElementById('introduction')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('hero.cta')}
              <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
            </Button>
          </div>
          
          {/* Visual Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-70">
            <ArrowDown className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
