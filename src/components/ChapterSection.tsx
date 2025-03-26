
import React, { useRef, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Shield, File, Zap, UserCheck, DatabaseBackup, Network } from 'lucide-react';

interface ChapterSectionProps {
  id: string;
  titleKey: string;
  sections: {
    id: string;
    titleKey: string;
    subtitleKey: string;
    descriptionKey: string;
    topics: {
      titleKey: string;
      points: string[];
    }[];
  }[];
}

const ChapterSection: React.FC<ChapterSectionProps> = ({ id, titleKey, sections }) => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  // Add intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Choose the appropriate icon for each topic
  const getTopicIcon = (topicKey: string) => {
    if (topicKey.includes('topic1.title')) {
      return id.includes('chapter1') ? <Zap className="w-6 h-6 text-red-400" /> : <Shield className="w-6 h-6 text-green-400" />;
    } else {
      return id.includes('chapter1') ? <UserCheck className="w-6 h-6 text-blue-400" /> : <Network className="w-6 h-6 text-purple-400" />;
    }
  };

  // Choose the appropriate decorative image for each section
  const getSectionImage = (sectionId: string) => {
    if (sectionId.includes('chapter1-section1')) {
      return 'url(/images/hacker-dark.jpg)';
    } else if (sectionId.includes('chapter1-section2')) {
      return 'url(/images/code-matrix.jpg)';
    } else if (sectionId.includes('chapter2-section1')) {
      return 'url(/images/legal-cyber.jpg)';
    } else {
      return 'url(/images/security-lock.jpg)';
    }
  };

  return (
    <section id={id} className="py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-70"></div>
      <div className="absolute left-0 top-1/3 w-64 h-64 bg-cyber-accent/10 filter blur-[80px] rounded-full"></div>
      <div className="absolute right-0 bottom-1/3 w-64 h-64 bg-purple-700/10 filter blur-[80px] rounded-full"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Chapter title with icon */}
        <div className="animate-on-scroll opacity-0 translate-y-8 mb-16 text-center">
          <div className="inline-flex items-center justify-center bg-cyber-darker/80 p-4 rounded-full mb-6 border border-cyber-accent/20">
            <File className="w-8 h-8 text-cyber-accent" />
          </div>
          <h2 className="text-gradient mb-6 relative inline-block">
            {t(titleKey)}
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </h2>
        </div>

        {/* Sections */}
        <div className="space-y-24">
          {sections.map((section, index) => (
            <div key={section.id} id={section.id} className="space-y-16">
              {/* Section header with decorative image */}
              <div className="animate-on-scroll opacity-0 translate-y-8">
                <div className="relative mb-12 rounded-lg overflow-hidden h-64 shadow-2xl">
                  <div 
                    className="absolute inset-0 bg-cover bg-center" 
                    style={{ backgroundImage: getSectionImage(section.id) }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-cyber-darker/60 to-cyber-darker/95"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                    <span className="text-xs uppercase tracking-wider text-cyber-accent mb-2 font-mono">
                      {index === 0 ? 'Section 1' : 'Section 2'}
                    </span>
                    <h3 className="text-white mb-4 relative">
                      <span className="relative z-10">{t(section.titleKey)}</span>
                      <span className="absolute bottom-0 left-0 w-full h-1 bg-cyber-accent/30"></span>
                    </h3>
                    <p className="text-xl text-white/70 mb-6">{t(section.subtitleKey)}</p>
                    <p className="max-w-3xl text-white/80">{t(section.descriptionKey)}</p>
                  </div>
                </div>
              </div>

              {/* Topics */}
              <div className="grid md:grid-cols-2 gap-8">
                {section.topics.map((topic) => (
                  <div 
                    key={topic.titleKey} 
                    className="animate-on-scroll opacity-0 translate-y-8 glass p-6 md:p-8 rounded-xl hover:shadow-[0_0_15px_rgba(14,165,233,0.15)] transition-all duration-300 group"
                  >
                    <div className="flex items-center mb-6 border-b border-white/10 pb-3">
                      {getTopicIcon(topic.titleKey)}
                      <h4 className="text-white ml-3 group-hover:text-cyan-300 transition-colors duration-300">{t(topic.titleKey)}</h4>
                    </div>
                    <ul className="space-y-4">
                      {topic.points.map((pointKey) => (
                        <li key={pointKey} className="text-white/80 hover:text-white transition-colors duration-200">
                          {t(pointKey)}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChapterSection;
