
import React, { useState, useEffect } from 'react';
import { Menu, Shield, Terminal, Database, User, Lock, Zap } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const CyberRadialMenu: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const { language } = useLanguage();
  const [buttonSound] = useState<HTMLAudioElement | null>(typeof Audio !== 'undefined' ? new Audio('/click.mp3') : null);
  
  const menuItems = [
    { icon: Shield, position: 'transform translate-y-[-60px]', label: language === 'en' ? 'Defense' : 'دفاع' },
    { icon: Terminal, position: 'transform translate-x-[-45px] translate-y-[-45px]', label: language === 'en' ? 'Terminal' : 'طرفية' },
    { icon: Database, position: 'transform translate-x-[-60px]', label: language === 'en' ? 'Data' : 'بيانات' },
    { icon: User, position: 'transform translate-x-[-45px] translate-y-[45px]', label: language === 'en' ? 'Users' : 'مستخدمين' },
    { icon: Lock, position: 'transform translate-y-[60px]', label: language === 'en' ? 'Security' : 'أمان' },
    { icon: Zap, position: 'transform translate-x-[45px] translate-y-[45px]', label: language === 'en' ? 'Attack' : 'هجوم' },
  ];

  const toggleMenu = () => {
    setIsActive(!isActive);
    if (buttonSound) {
      buttonSound.currentTime = 0;
      buttonSound.play().catch(e => console.log("Audio play failed:", e));
    }
  };

  const handleMenuItemClick = (label: string) => {
    console.log(`Menu item clicked: ${label}`);
    if (buttonSound) {
      buttonSound.currentTime = 0;
      buttonSound.play().catch(e => console.log("Audio play failed:", e));
    }
    
    // Close menu after clicking an item
    setTimeout(() => setIsActive(false), 500);
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

  return (
    <div className={`cyber-radial-menu ${isActive ? 'active' : ''}`}>
      <div
        className="cyber-radial-trigger"
        onClick={toggleMenu}
        role="button"
        aria-expanded={isActive}
        aria-label="Menu"
      >
        <Menu className="w-6 h-6 text-white" />
      </div>
      <div className="cyber-radial-items">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`cyber-radial-item ${item.position} opacity-0`}
            style={{
              transform: isActive ? item.position.replace('transform ', '') : 'translate(0, 0)',
              opacity: isActive ? 1 : 0,
              transitionDelay: isActive ? `${index * 0.05}s` : '0s',
            }}
            onClick={() => handleMenuItemClick(item.label)}
            aria-label={item.label}
          >
            <item.icon className="w-5 h-5 text-cyber-accent" />
            <span className="absolute text-xs text-white bg-cyber-darker px-2 py-1 rounded-md -top-8 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CyberRadialMenu;
