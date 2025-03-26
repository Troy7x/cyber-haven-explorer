
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="relative group">
      <button 
        className="px-3 py-1.5 rounded-full flex items-center gap-2 text-sm bg-cyber-muted hover:bg-cyber-accent transition-colors duration-300 text-white"
        aria-label={t('language')}
      >
        <span className="h-4 w-4 flex items-center justify-center">🌐</span>
        <span>{language === 'en' ? 'EN' : 'عربي'}</span>
      </button>
      
      <div className="absolute top-full right-0 mt-2 w-32 glass rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        <button 
          className={`w-full text-left px-3 py-2 text-sm hover:bg-cyber-accent/20 transition-colors duration-150 ${language === 'en' ? 'bg-cyber-accent/10' : ''}`}
          onClick={() => setLanguage('en')}
        >
          {t('language.english')}
        </button>
        <button 
          className={`w-full text-right px-3 py-2 text-sm hover:bg-cyber-accent/20 transition-colors duration-150 ${language === 'ar' ? 'bg-cyber-accent/10' : ''}`}
          onClick={() => setLanguage('ar')}
        >
          {t('language.arabic')}
        </button>
      </div>
    </div>
  );
};

export default LanguageToggle;
