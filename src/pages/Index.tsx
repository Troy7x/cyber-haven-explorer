
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SectionContainer from '@/components/SectionContainer';
import ChapterSection from '@/components/ChapterSection';
import { useLanguage } from '@/context/LanguageContext';
import { LanguageProvider } from '@/context/LanguageContext';

const Index = () => {
  const { t } = useLanguage();

  // Chapter 1 data structure
  const chapter1Data = {
    id: 'chapter1',
    titleKey: 'chapter1.title',
    sections: [
      {
        id: 'chapter1-section1',
        titleKey: 'chapter1.section1.title',
        subtitleKey: 'chapter1.section1.subtitle',
        descriptionKey: 'chapter1.section1.p1',
        topics: [
          {
            titleKey: 'chapter1.section1.topic1.title',
            points: [
              'chapter1.section1.topic1.p1',
              'chapter1.section1.topic1.p2',
              'chapter1.section1.topic1.p3',
              'chapter1.section1.topic1.p4'
            ]
          },
          {
            titleKey: 'chapter1.section1.topic2.title',
            points: [
              'chapter1.section1.topic2.p1',
              'chapter1.section1.topic2.p2',
              'chapter1.section1.topic2.p3'
            ]
          }
        ]
      },
      {
        id: 'chapter1-section2',
        titleKey: 'chapter1.section2.title',
        subtitleKey: 'chapter1.section2.subtitle',
        descriptionKey: 'chapter1.section2.p1',
        topics: [
          {
            titleKey: 'chapter1.section2.topic1.title',
            points: [
              'chapter1.section2.topic1.p1',
              'chapter1.section2.topic1.p2',
              'chapter1.section2.topic1.p3',
              'chapter1.section2.topic1.p4'
            ]
          },
          {
            titleKey: 'chapter1.section2.topic2.title',
            points: [
              'chapter1.section2.topic2.p1',
              'chapter1.section2.topic2.p2',
              'chapter1.section2.topic2.p3',
              'chapter1.section2.topic2.p4'
            ]
          }
        ]
      }
    ]
  };

  // Chapter 2 data structure
  const chapter2Data = {
    id: 'chapter2',
    titleKey: 'chapter2.title',
    sections: [
      {
        id: 'chapter2-section1',
        titleKey: 'chapter2.section1.title',
        subtitleKey: 'chapter2.section1.subtitle',
        descriptionKey: 'chapter2.section1.p1',
        topics: [
          {
            titleKey: 'chapter2.section1.topic1.title',
            points: [
              'chapter2.section1.topic1.p1',
              'chapter2.section1.topic1.p2',
              'chapter2.section1.topic1.p3',
              'chapter2.section1.topic1.p4'
            ]
          },
          {
            titleKey: 'chapter2.section1.topic2.title',
            points: [
              'chapter2.section1.topic2.p1',
              'chapter2.section1.topic2.p2',
              'chapter2.section1.topic2.p3',
              'chapter2.section1.topic2.p4'
            ]
          }
        ]
      },
      {
        id: 'chapter2-section2',
        titleKey: 'chapter2.section2.title',
        subtitleKey: 'chapter2.section2.subtitle',
        descriptionKey: 'chapter2.section2.p1',
        topics: [
          {
            titleKey: 'chapter2.section2.topic1.title',
            points: [
              'chapter2.section2.topic1.p1',
              'chapter2.section2.topic1.p2',
              'chapter2.section2.topic1.p3',
              'chapter2.section2.topic1.p4'
            ]
          },
          {
            titleKey: 'chapter2.section2.topic2.title',
            points: [
              'chapter2.section2.topic2.p1',
              'chapter2.section2.topic2.p2',
              'chapter2.section2.topic2.p3',
              'chapter2.section2.topic2.p4'
            ]
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-cyber-dark overflow-x-hidden">
      <Navbar />
      <Hero />

      {/* Introduction Section */}
      <SectionContainer id="introduction" className="grid-bg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8">
            <h2 className="text-gradient mb-4">{t('intro.title')}</h2>
            <p className="text-xl text-white/70">{t('intro.subtitle')}</p>
          </div>
          
          <div className="space-y-6 glass p-8 rounded-2xl animate-on-scroll opacity-0 translate-y-8">
            <p className="text-white/80 leading-relaxed">{t('intro.p1')}</p>
            <p className="text-white/80 leading-relaxed">{t('intro.p2')}</p>
            <p className="text-white/80 leading-relaxed">{t('intro.p3')}</p>
          </div>
        </div>
      </SectionContainer>

      {/* Chapter 1: Hacking Strategies */}
      <ChapterSection {...chapter1Data} />

      {/* Chapter 2: Legal Framework */}
      <ChapterSection {...chapter2Data} />

      {/* Conclusion Section */}
      <SectionContainer id="conclusion" className="bg-cyber-darker">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          <div className="animate-on-scroll opacity-0 translate-y-8">
            <h2 className="text-gradient mb-4">{t('conclusion.title')}</h2>
            <p className="text-xl text-white/70 mb-8">{t('conclusion.subtitle')}</p>
          </div>
          
          <div className="glass p-8 rounded-2xl animate-on-scroll opacity-0 translate-y-8 text-left">
            <div className="space-y-6">
              <p className="text-white/80 leading-relaxed">{t('conclusion.p1')}</p>
              <p className="text-white/80 leading-relaxed">{t('conclusion.p2')}</p>
              <p className="text-white/80 leading-relaxed">{t('conclusion.p3')}</p>
              <p className="text-white/80 leading-relaxed">{t('conclusion.p4')}</p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* References Section */}
      <SectionContainer id="references">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8">
            <h2 className="text-gradient mb-4">{t('references.title')}</h2>
            <p className="text-xl text-white/70">{t('references.subtitle')}</p>
          </div>
          
          <div className="space-y-12">
            {/* Arabic Sources */}
            <div className="glass p-8 rounded-2xl animate-on-scroll opacity-0 translate-y-8">
              <h3 className="text-white mb-6 pb-3 border-b border-white/10">{t('references.arabic')}</h3>
              <ul className="list-disc list-inside space-y-3 text-white/80">
                <li>القانون رقم 18-07 المتعلق بحماية الأشخاص الطبيعيين في مجال معالجة المعطيات ذات الطابع الشخصي</li>
                <li>الأمن السيبراني وحماية المعلومات - د. محمد الألفي</li>
                <li>قانون العقوبات الجزائري - المواد المتعلقة بالجرائم المعلوماتية</li>
                <li>الأمن الرقمي والجرائم الإلكترونية - المجلة الجزائرية للدراسات القانونية</li>
              </ul>
            </div>
            
            {/* International Sources */}
            <div className="glass p-8 rounded-2xl animate-on-scroll opacity-0 translate-y-8">
              <h3 className="text-white mb-6 pb-3 border-b border-white/10">{t('references.international')}</h3>
              <ul className="list-disc list-inside space-y-3 text-white/80">
                <li>NIST Cybersecurity Framework (2023)</li>
                <li>Stuttard, D., & Pinto, M. (2021). The Web Application Hacker's Handbook: Finding and Exploiting Security Flaws</li>
                <li>Seitz, J. (2021). Black Hat Python: Python Programming for Hackers and Pentesters</li>
                <li>SANS Institute (2022). Security Awareness Training Reports</li>
                <li>European Union Agency for Cybersecurity (ENISA) Reports</li>
              </ul>
            </div>
            
            {/* Online Sources */}
            <div className="glass p-8 rounded-2xl animate-on-scroll opacity-0 translate-y-8">
              <h3 className="text-white mb-6 pb-3 border-b border-white/10">{t('references.online')}</h3>
              <ul className="list-disc list-inside space-y-3 text-white/80">
                <li>OWASP Top 10 Web Application Security Risks</li>
                <li>Kali Linux Documentation and Tools</li>
                <li>Metasploit Framework Documentation</li>
                <li>Wireshark Network Analysis Guide</li>
                <li>Kaspersky Global Research and Analysis Team (GReAT) Reports</li>
                <li>Symantec Internet Security Threat Reports</li>
              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Footer */}
      <footer className="py-10 border-t border-white/10 bg-cyber-darker">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60 text-sm">
            &copy; 2023 {t('footer.rights')} • {t('footer.disclaimer')}
          </p>
        </div>
      </footer>
    </div>
  );
};

const IndexWithLanguage = () => {
  return (
    <LanguageProvider>
      <Index />
    </LanguageProvider>
  );
};

export default IndexWithLanguage;
