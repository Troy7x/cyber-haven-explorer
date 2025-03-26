
import React, { useEffect, useState } from 'react';

const InterfaceCrack: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [crackPosition, setCrackPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let timeout: ReturnType<typeof setTimeout>;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = Math.abs(currentScrollY - lastScrollY);
      
      // Only trigger the effect on significant scrolls
      if (scrollDelta > 100) {
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        
        setCrackPosition({ x: randomX, y: randomY });
        setIsVisible(true);
        
        // Clear previous timeout
        clearTimeout(timeout);
        
        // Hide the effect after a short delay
        timeout = setTimeout(() => {
          setIsVisible(false);
        }, 1000);
      }
      
      lastScrollY = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div 
      className="interface-crack"
      style={{ 
        opacity: isVisible ? 0.7 : 0,
        transformOrigin: `${crackPosition.x}% ${crackPosition.y}%`,
        transform: isVisible ? 'scale(1)' : 'scale(0)'
      }}
    ></div>
  );
};

export default InterfaceCrack;
