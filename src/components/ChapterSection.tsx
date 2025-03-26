
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

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

  return (
    <section id={id} className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-70"></div>
      <div className="absolute left-0 top-1/3 w-64 h-64 bg-cyber-accent/10 filter blur-[80px] rounded-full"></div>
      <div className="absolute right-0 bottom-1/3 w-64 h-64 bg-purple-700/10 filter blur-[80px] rounded-full"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Chapter title */}
        <div className="animate-on-scroll opacity-0 translate-y-8 mb-16 text-center">
          <h2 className="text-gradient mb-6">{t(titleKey)}</h2>
        </div>

        {/* Sections */}
        <div className="space-y-24">
          {sections.map((section, index) => (
            <div key={section.id} id={section.id} className="space-y-16">
              {/* Section header */}
              <div className="animate-on-scroll opacity-0 translate-y-8">
                <div className="flex flex-col items-center text-center mb-12">
                  <span className="text-xs uppercase tracking-wider text-cyber-accent mb-2">
                    {index === 0 ? 'Section 1' : 'Section 2'}
                  </span>
                  <h3 className="text-white mb-4">{t(section.titleKey)}</h3>
                  <p className="text-xl text-white/70 mb-6">{t(section.subtitleKey)}</p>
                  <p className="max-w-3xl text-white/80">{t(section.descriptionKey)}</p>
                </div>
              </div>

              {/* Topics */}
              <div className="grid md:grid-cols-2 gap-8">
                {section.topics.map((topic) => (
                  <div 
                    key={topic.titleKey} 
                    className="animate-on-scroll opacity-0 translate-y-8 glass p-6 md:p-8 rounded-xl"
                  >
                    <h4 className="text-white mb-6 border-b border-white/10 pb-3">{t(topic.titleKey)}</h4>
                    <ul className="space-y-4">
                      {topic.points.map((pointKey) => (
                        <li key={pointKey} className="text-white/80">
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
