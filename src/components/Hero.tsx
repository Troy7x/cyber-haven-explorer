
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowDown, Shield, Lock, Code, Terminal, Eye, Cpu } from 'lucide-react';
import CyberButton from './CyberButton';
import HexagonNetwork from './HexagonNetwork';

const Hero: React.FC = () => {
  const { t, language } = useLanguage();
  const textContainerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // Typing effect for code display
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    
    const startTypingEffect = () => {
      setTimeout(() => {
        setIsTypingComplete(true);
      }, 3000);
    };
    
    startTypingEffect();
    
    return () => {
      clearTimeout(timeout);
    };
  }, [language]);

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

    // Create animated particles with a more complex behavior
    const createParticles = () => {
      if (!particlesRef.current) return;
      
      particlesRef.current.innerHTML = '';
      
      for (let i = 0; i < 50; i++) {
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
        
        // Random color variation
        const colors = ['#0ea5e9', '#38bdf8', '#0284c7', '#7dd3fc'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.backgroundColor = randomColor;
        
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

  // Matrix code rain effect
  const Matrix = () => {
    return (
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="code-rain"></div>
      </div>
    );
  };

  // Floating icons for visual interest
  const FloatingIcons = () => {
    return (
      <>
        <div className="absolute top-1/4 -left-10 opacity-20 hidden lg:block animate-float" style={{animationDuration: '15s'}}>
          <Lock className="w-32 h-32 text-cyber-accent" />
        </div>
        <div className="absolute bottom-1/3 -right-16 opacity-20 hidden lg:block animate-float-delay" style={{animationDuration: '18s'}}>
          <Code className="w-24 h-24 text-purple-400" />
        </div>
        <div className="absolute top-2/3 left-20 opacity-20 hidden lg:block animate-float" style={{animationDuration: '12s', animationDelay: '2s'}}>
          <Terminal className="w-20 h-20 text-emerald-400" />
        </div>
        <div className="absolute top-1/3 right-1/4 opacity-20 hidden lg:block animate-float-delay" style={{animationDuration: '20s', animationDelay: '4s'}}>
          <Shield className="w-16 h-16 text-orange-400" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 opacity-20 hidden lg:block animate-float" style={{animationDuration: '17s', animationDelay: '1s'}}>
          <Eye className="w-18 h-18 text-red-400" />
        </div>
      </>
    );
  };
  
  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center pt-16">
      {/* Advanced particles background with more particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none z-0 overflow-hidden"></div>
      
      {/* Hexagon network background */}
      <HexagonNetwork nodeCount={30} />
      
      {/* Matrix-like code rain effect */}
      <div className="absolute inset-0 bg-cyber-darker opacity-80 z-0">
        <Matrix />
      </div>
      
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30 z-0"></div>
      
      {/* Background gradient effects - more vibrant */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-0 -right-1/3 w-1/2 h-1/2 bg-cyber-accent/15 rounded-full filter blur-[120px] animate-float"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-700/15 rounded-full filter blur-[120px] animate-float-delay"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1/3 h-1/3 bg-emerald-700/10 rounded-full filter blur-[100px]" style={{animation: 'float 15s infinite ease-in-out 2s'}}></div>
      </div>
      
      {/* Floating Icons for visual interest */}
      <FloatingIcons />
      
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
            className="animate-on-load cyber-glitch-text text-gradient font-bold mb-6 max-w-5xl transition-all duration-500 opacity-0 transform translate-y-6 cyber-heading"
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
          
          {/* Terminal window effect */}
          <div className="animate-on-load opacity-0 transform translate-y-6 max-w-2xl w-full bg-cyber-darker p-4 rounded-md border border-cyber-accent/30 mb-10 shadow-[0_0_20px_rgba(14,165,233,0.1)] overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <div className="flex">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-white/50 text-xs">hack.sh</div>
            </div>
            
            <div className="text-left font-mono">
              <div className="flex">
                <span className="text-green-400 mr-2">$</span>
                <div className={`text-cyan-400 overflow-hidden whitespace-nowrap ${!isTypingComplete ? 'border-r-2 border-white/50 animate-[typing_3s_steps(40,end),blink-caret_0.75s_step-end_infinite]' : ''}`} style={{ width: isTypingComplete ? 'auto' : '0' }}>
                  sudo ./exploit -t target.com -p 443 --force
                </div>
              </div>
              
              {isTypingComplete && (
                <>
                  <p className="text-yellow-400 mt-1">[*] Scanning target for vulnerabilities...</p>
                  <p className="text-yellow-400 mt-1">[*] Multiple entry points detected</p>
                  <p className="text-red-400 mt-1">[!] WARNING: Intrusion Detection System active</p>
                  <p className="text-green-400 mt-1">[+] Bypassing security measures...</p>
                  <p className="text-white mt-1">Press any key to continue or CTRL+C to abort</p>
                </>
              )}
            </div>
          </div>
          
          {/* CTA Button - Now using our new 3D Button component */}
          <div className="animate-on-load transition-all duration-500 opacity-0 transform translate-y-6 relative z-10">
            <CyberButton 
              variant="3d"
              className="px-8 py-6 text-lg"
              onClick={() => {
                document.getElementById('introduction')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('hero.cta')}
              <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
            </CyberButton>
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
