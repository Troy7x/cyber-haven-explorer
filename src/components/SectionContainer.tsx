
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

  useEffect(() => {
    // Create animated particles for visual effect
    const createParticles = () => {
      if (!particlesRef.current) return;
      
      particlesRef.current.innerHTML = '';
      
      for (let i = 0; i < 15; i++) {
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
        
        particlesRef.current.appendChild(particle);
      }
    };
    
    createParticles();

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
    
    // Recreate particles on window resize
    window.addEventListener('resize', createParticles);

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
      {/* Animated particles effect */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none z-0"></div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
