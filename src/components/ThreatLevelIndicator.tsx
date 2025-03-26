
import React, { useEffect, useState } from 'react';

interface ThreatLevelIndicatorProps {
  defaultLevel?: number;
}

const ThreatLevelIndicator: React.FC<ThreatLevelIndicatorProps> = ({ defaultLevel = 0 }) => {
  const [level, setLevel] = useState(defaultLevel);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show after a slight delay for better UX
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1000);

    // Update threat level based on scroll position
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.min(scrollPosition / maxScroll, 1);
      
      setLevel(scrollPercentage * 100);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Determine the threat status based on level
  const getThreatStatus = () => {
    if (level < 30) return { text: 'Low', color: 'text-green-400' };
    if (level < 70) return { text: 'Medium', color: 'text-yellow-400' };
    return { text: 'High', color: 'text-red-400' };
  };

  const threatStatus = getThreatStatus();

  return (
    <div className={`threat-meter ${visible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      <div 
        className="threat-level" 
        style={{ height: `${100 - level}%` }}
      ></div>
      <div 
        className="threat-indicator"
        style={{ top: `${100 - level}%` }}
      >
        <span className={`text-xs font-mono ${threatStatus.color}`}>
          {threatStatus.text}
        </span>
      </div>
    </div>
  );
};

export default ThreatLevelIndicator;
