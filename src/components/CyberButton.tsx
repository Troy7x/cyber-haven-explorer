
import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';

interface CyberButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: '3d' | 'glow' | 'default';
}

const CyberButton: React.FC<CyberButtonProps> = ({ 
  children, 
  onClick, 
  className = '',
  variant = 'default'
}) => {
  const [buttonSound] = useState<HTMLAudioElement | null>(
    typeof Audio !== 'undefined' ? new Audio('/click.mp3') : null
  );
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Function to create ripple effect
  const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add('ripple');
    
    // Remove existing ripples
    const currentRipple = button.getElementsByClassName('ripple')[0];
    if (currentRipple) {
      currentRipple.remove();
    }
    
    button.appendChild(ripple);
    
    // Create code explosion effect
    createCodeExplosion(event);
    
    // Clean up the ripple after animation completes
    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  // Function to create code explosion effect
  const createCodeExplosion = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    
    // Create 10 code particles
    for (let i = 0; i < 10; i++) {
      const particle = document.createElement('span');
      particle.classList.add('code-particle');
      
      // Set random code characters
      const codeChars = ['0', '1', '{', '}', '<', '>', '/', '$', '#', '@'];
      particle.innerText = codeChars[Math.floor(Math.random() * codeChars.length)];
      
      // Set random position and movement direction
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      
      // Random explosion direction
      const angle = Math.random() * Math.PI * 2;
      const distance = 50 + Math.random() * 50;
      const translateX = Math.cos(angle) * distance;
      const translateY = Math.sin(angle) * distance;
      
      particle.style.setProperty('--translateX', `${translateX}px`);
      particle.style.setProperty('--translateY', `${translateY}px`);
      
      const explosion = document.createElement('div');
      explosion.classList.add('code-explosion');
      explosion.appendChild(particle);
      
      button.appendChild(explosion);
      
      // Clean up after animation completes
      setTimeout(() => {
        explosion.remove();
      }, 600);
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Play sound effect
    if (buttonSound) {
      buttonSound.currentTime = 0;
      buttonSound.play().catch(e => console.log("Audio play failed:", e));
    }
    
    // Create visual effects
    createRipple(event);
    
    // Call the provided onClick handler
    if (onClick) {
      onClick();
    }
  };

  useEffect(() => {
    // Clean up audio on unmount
    return () => {
      if (buttonSound) {
        buttonSound.pause();
        buttonSound.currentTime = 0;
      }
    };
  }, [buttonSound]);

  // Determine the button class based on variant
  const getButtonClass = () => {
    switch (variant) {
      case '3d':
        return 'cyber-btn-3d';
      case 'glow':
        return 'cyber-btn-glow';
      default:
        return 'cyber-btn';
    }
  };

  return (
    <Button
      ref={buttonRef}
      className={`${getButtonClass()} relative overflow-hidden ${className}`}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default CyberButton;
