
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import LanguageToggle from '@/components/LanguageToggle';

const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Track scrolling for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Close menu when clicking a link
  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#introduction', label: t('nav.introduction') },
    { href: '#chapter1', label: t('nav.chapter1') },
    { href: '#chapter2', label: t('nav.chapter2') },
    { href: '#conclusion', label: t('nav.conclusion') },
    { href: '#references', label: t('nav.references') }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 glass shadow-lg' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            className="text-xl font-bold text-gradient flex items-center gap-2"
            onClick={handleNavLinkClick}
          >
            <div className="w-9 h-9 flex items-center justify-center bg-cyber-accent/20 rounded-full">
              <span className="text-cyber-accent">🔐</span>
            </div>
            <span className="hidden sm:inline">CyberHaven</span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <a 
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-cyber-accent after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                onClick={handleNavLinkClick}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Section (Language Toggle) */}
          <div className="flex items-center gap-3">
            <LanguageToggle />
            
            {/* Mobile Menu Button */}
            <button 
              className="p-2 lg:hidden text-white hover:text-cyber-accent transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 glass bg-cyber-darker/95 backdrop-blur-lg transition-all duration-300 ease-in-out flex flex-col pt-24 px-4 ${
          isMenuOpen 
            ? 'opacity-100 visible transform translate-y-0' 
            : 'opacity-0 invisible transform -translate-y-full'
        }`}
      >
        <div className="flex flex-col gap-4">
          {navLinks.map(link => (
            <a 
              key={link.href}
              href={link.href}
              className="text-lg font-medium text-white/80 hover:text-white py-3 border-b border-white/10 transition-colors duration-300 flex items-center justify-between"
              onClick={handleNavLinkClick}
            >
              {link.label}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                className="w-4 h-4 text-cyber-accent"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
