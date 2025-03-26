
import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface SectionContainerProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ id, className, children }) => {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const backgroundEffectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create animated particles for visual effect
    const createParticles = () => {
      if (!particlesRef.current) return;
      
      particlesRef.current.innerHTML = '';
      
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.classList.add('cyber-particle');
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Random size
        const size = Math.floor(Math.random() * 3) + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random opacity
        particle.style.opacity = `${Math.random() * 0.3 + 0.1}`;
        
        // Random animation duration
        const duration = Math.random() * 25 + 15;
        particle.style.animation = `float ${duration}s linear infinite`;
        
        // Random delay
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        // Random color variations for particles
        const colors = ['#0ea5e9', '#38bdf8', '#0284c7', '#7dd3fc', '#7e22ce'];
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        particlesRef.current.appendChild(particle);
      }
    };
    
    // Create glowing background elements
    const createBackgroundEffects = () => {
      if (!backgroundEffectsRef.current) return;
      
      backgroundEffectsRef.current.innerHTML = '';
      
      // Add 3-4 glowing orbs
      for (let i = 0; i < 4; i++) {
        const orb = document.createElement('div');
        
        // Random position
        orb.style.position = 'absolute';
        orb.style.left = `${Math.random() * 100}%`;
        orb.style.top = `${Math.random() * 100}%`;
        
        // Random size
        const size = Math.floor(Math.random() * 150) + 100;
        orb.style.width = `${size}px`;
        orb.style.height = `${size}px`;
        
        // Random color and opacity
        const colors = [
          'rgba(14, 165, 233, 0.05)',  // cyan
          'rgba(99, 102, 241, 0.05)',  // indigo
          'rgba(139, 92, 246, 0.05)',  // purple
          'rgba(16, 185, 129, 0.05)',  // emerald
        ];
        orb.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        orb.style.borderRadius = '50%';
        orb.style.filter = 'blur(60px)';
        
        // Animation
        orb.style.animation = `float ${20 + Math.random() * 10}s infinite ease-in-out ${Math.random() * 5}s`;
        
        backgroundEffectsRef.current.appendChild(orb);
      }
    };
    
    createParticles();
    createBackgroundEffects();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation classes when section is visible
            const animatedElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
            animatedElements?.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add('animate-fade-in');
                element.classList.remove('opacity-0', 'translate-y-8');
              }, 100 * index);
            });
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    // Recreate particles and effects on window resize
    window.addEventListener('resize', () => {
      createParticles();
      createBackgroundEffects();
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener('resize', createParticles);
    };
  }, [language]);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`py-16 md:py-24 relative overflow-hidden ${className || ''}`}
    >
      {/* Background glowing orbs */}
      <div ref={backgroundEffectsRef} className="absolute inset-0 pointer-events-none z-0 overflow-hidden"></div>
      
      {/* Animated particles effect */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none z-0"></div>
      
      {/* Binary code background */}
      <div className="absolute inset-0 binary-bg opacity-10 pointer-events-none z-0"></div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
