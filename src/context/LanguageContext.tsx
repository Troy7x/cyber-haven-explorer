import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Our translations
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.introduction': 'Introduction',
    'nav.chapter1': 'Hacking Strategies',
    'nav.chapter2': 'Legal Framework',
    'nav.conclusion': 'Conclusion',
    'nav.references': 'References',
    
    // Hero Section
    'hero.title': 'Cyber Haven Explorer',
    'hero.subtitle': 'Understanding Cybersecurity, Ethical Hacking & Legal Protection',
    'hero.description': 'A comprehensive guide to understanding the world of cybersecurity from both offensive and defensive perspectives.',
    'hero.cta': 'Start Exploring',
    
    // Introduction Section
    'intro.title': 'Introduction to Cybersecurity',
    'intro.subtitle': 'The Digital Battlefield',
    'intro.p1': 'In today\'s interconnected world, cybersecurity has become a critical concern for individuals, organizations, and nations alike.',
    'intro.p2': 'Ethical hacking involves understanding how hackers think and operate in order to build better defenses against potential cyber threats.',
    'intro.p3': 'This comprehensive guide explores both offensive strategies (how hackers operate) and defensive measures (legal and technical protections) to create a safer digital environment.',
    
    // Chapter 1 Section
    'chapter1.title': 'Chapter 1: Hacking Strategies and Techniques',
    'chapter1.section1.title': 'Introduction to the Hacking World',
    'chapter1.section1.subtitle': 'Understanding the Cyber Threat Landscape',
    'chapter1.section1.p1': 'The hacking world is diverse, with different actors motivated by various goals - from financial gain to ideological statements.',
    
    'chapter1.section1.topic1.title': 'Hacker Classifications and Methods',
    'chapter1.section1.topic1.p1': '• White Hat: Ethical hackers who help improve security systems by finding vulnerabilities before malicious actors do',
    'chapter1.section1.topic1.p2': '• Black Hat: Malicious hackers seeking unauthorized access for personal gain, theft, or disruption',
    'chapter1.section1.topic1.p3': '• Grey Hat: Those who operate in the ethical gray area, sometimes breaking laws but without malicious intent',
    'chapter1.section1.topic1.p4': '• Their motivations range from financial gain to hacktivism, espionage, and state-sponsored activities',
    
    'chapter1.section1.topic2.title': 'The Cyber Attack Lifecycle',
    'chapter1.section1.topic2.p1': '• Phase 1: Reconnaissance - Gathering information about targets through OSINT, scanning, and social engineering',
    'chapter1.section1.topic2.p2': '• Phase 2: Weaponization & Exploitation - Preparing and deploying attack vectors to exploit identified vulnerabilities',
    'chapter1.section1.topic2.p3': '• Phase 3: Installation & Action - Gaining persistent access, lateral movement, and achieving objectives while covering tracks',
    
    'chapter1.section2.title': 'Advanced Hacking Techniques',
    'chapter1.section2.subtitle': 'Modern Attack Methodologies',
    'chapter1.section2.p1': 'Modern cyber attackers employ sophisticated techniques to breach even well-protected systems and networks.',
    
    'chapter1.section2.topic1.title': 'Exploiting Security Vulnerabilities',
    'chapter1.section2.topic1.p1': '• SQL Injection attacks targeting databases to extract sensitive information or bypass authentication',
    'chapter1.section2.topic1.p2': '• Cross-Site Scripting (XSS) for client-side attacks that can steal cookies and session data',
    'chapter1.section2.topic1.p3': '• Buffer Overflow exploits targeting memory management flaws in applications and systems',
    'chapter1.section2.topic1.p4': '• Remote Code Execution through application flaws that allow attackers to run arbitrary commands',
    
    'chapter1.section2.topic2.title': 'Social Engineering & AI in Hacking',
    'chapter1.section2.topic2.p1': '• Phishing campaigns using deceptive emails and websites to harvest credentials and personal data',
    'chapter1.section2.topic2.p2': '• Spear Phishing attacks targeting specific individuals with personalized content to increase success rates',
    'chapter1.section2.topic2.p3': '• AI-powered attacks automating reconnaissance and vulnerability discovery at unprecedented scale',
    'chapter1.section2.topic2.p4': '• Case studies of notable breaches like SolarWinds and Colonial Pipeline highlighting sophisticated methodologies',
    
    // Chapter 2 Section
    'chapter2.title': 'Chapter 2: Legal Framework for Cybercrime Prevention',
    'chapter2.section1.title': 'Cybercrime Laws in Algeria and Worldwide',
    'chapter2.section1.subtitle': 'Legal Protections Against Cyber Threats',
    'chapter2.section1.p1': 'Legal frameworks provide the foundation for cybersecurity enforcement and protection against digital crimes.',
    
    'chapter2.section1.topic1.title': 'Algerian Cybercrime Laws',
    'chapter2.section1.topic1.p1': '• Criminal Code provisions addressing cyber offenses including unauthorized access and data theft',
    'chapter2.section1.topic1.p2': '• Law 18-07 on personal data protection establishing rights and obligations for data processing',
    'chapter2.section1.topic1.p3': '• Challenges in enforcement due to technical complexity and jurisdictional limitations',
    'chapter2.section1.topic1.p4': '• Recent legal developments strengthening penalties for cybercrime and enhancing investigation powers',
    
    'chapter2.section1.topic2.title': 'Comparison with Global Regulations',
    'chapter2.section1.topic2.p1': '• Budapest Convention on Cybercrime providing international cooperation framework for investigations',
    'chapter2.section1.topic2.p2': '• GDPR in Europe setting global standards for data protection and privacy',
    'chapter2.section1.topic2.p3': '• CFAA (US) and other international legal instruments addressing various aspects of cybercrime',
    'chapter2.section1.topic2.p4': '• Opportunities for Algeria to strengthen its legal framework through international cooperation',
    
    'chapter2.section2.title': 'Strengthening Legal & Technical Cybersecurity Measures',
    'chapter2.section2.subtitle': 'Building Robust Defenses',
    'chapter2.section2.p1': 'Effective cybersecurity requires both strong legal frameworks and technical measures working in concert to protect digital assets.',
    
    'chapter2.section2.topic1.title': 'How Ethical Hacking Helps in Cybersecurity',
    'chapter2.section2.topic1.p1': '• Penetration testing methodologies for identifying vulnerabilities before they can be exploited',
    'chapter2.section2.topic1.p2': '• Bug Bounty programs creating economic incentives for responsible security research',
    'chapter2.section2.topic1.p3': '• Legal boundaries and authorization requirements for legitimate security testing',
    'chapter2.section2.topic1.p4': '• Building organizational security posture through regular assessment and improvement',
    
    'chapter2.section2.topic2.title': 'Proposed Strategies to Enhance Cybersecurity',
    'chapter2.section2.topic2.p1': '• Legislative improvements to provide clearer definitions and stronger enforcement mechanisms',
    'chapter2.section2.topic2.p2': '• Creating specialized cybersecurity units with technical expertise for investigation and response',
    'chapter2.section2.topic2.p3': '• Public-private partnerships for threat intelligence sharing and coordinated incident response',
    'chapter2.section2.topic2.p4': '• National education and awareness campaigns to develop security culture across society',
    
    // Conclusion Section
    'conclusion.title': 'Conclusion',
    'conclusion.subtitle': 'The Path Forward in Cybersecurity',
    'conclusion.p1': 'The landscape of cybersecurity continues to evolve with advancing technology and shifting threat patterns.',
    'conclusion.p2': 'Understanding both offensive techniques and defensive frameworks is essential for comprehensive protection.',
    'conclusion.p3': 'Future research should focus on AI\'s dual role in both creating and mitigating cyber threats.',
    'conclusion.p4': 'A balanced approach combining technological innovation, legal frameworks, and human awareness offers the strongest defense against cyber threats.',
    
    // References Section
    'references.title': 'References & Sources',
    'references.subtitle': 'Further Reading and Resources',
    'references.arabic': 'Arabic Sources',
    'references.international': 'International Sources',
    'references.online': 'Online Resources',
    
    // Footer
    'footer.rights': 'All Rights Reserved',
    'footer.disclaimer': 'This resource is for educational purposes only.',
    
    // Language Toggle
    'language': 'Language',
    'language.english': 'English',
    'language.arabic': 'العربية'
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.introduction': 'المقدمة',
    'nav.chapter1': 'استراتيجيات الاختراق',
    'nav.chapter2': 'الإطار القانوني',
    'nav.conclusion': 'الخاتمة',
    'nav.references': 'المراجع',
    
    // Hero Section
    'hero.title': 'مستكشف الأمن السيبراني',
    'hero.subtitle': 'فهم الأمن السيبراني والاختراق الأخلاقي والحماية القانونية',
    'hero.description': 'دليل شامل لفهم عالم الأمن السيبراني من منظور هجومي ودفاعي.',
    'hero.cta': 'ابدأ الاستكشاف',
    
    // Introduction Section
    'intro.title': 'مقدمة في الأمن السيبراني',
    'intro.subtitle': 'ساحة المعركة الرقمية',
    'intro.p1': 'في عالم اليوم المترابط، أصبح الأمن السيبراني مصدر قلق حيوي للأفراد والمؤسسات والدول على حد سواء.',
    'intro.p2': 'يتضمن الاختراق الأخلاقي فهم كيفية تفكير المخترقين وعملهم من أجل بناء دفاعات أفضل ضد التهديدات السيبرانية المحتملة.',
    'intro.p3': 'يستكشف هذا الدليل الشامل كلاً من الاستراتيجيات الهجومية (كيف يعمل المخترقون) والتدابير الدفاعية (الحماية القانونية والتقنية) لإنشاء بيئة رقمية أكثر أمانًا.',
    
    // Chapter 1 Section
    'chapter1.title': 'الفصل الأول: استراتيجيات الاختراق وأساليب القراصنة',
    'chapter1.section1.title': 'المبحث الأول: مدخل إلى عالم الاختراق الإلكتروني',
    'chapter1.section1.subtitle': 'فهم مشهد التهديدات السيبرانية',
    'chapter1.section1.p1': 'عالم الاختراق متنوع، مع وجود مختلف الجهات الفاعلة المدفوعة بأهداف مختلفة - من الكسب المالي إلى البيانات الأيديولوجية.',
    
    'chapter1.section1.topic1.title': 'المطلب الأول: تصنيف القراصنة وأساليبهم',
    'chapter1.section1.topic1.p1': '• القبعة البيضاء: المخترقون الأخلاقيون الذين يساعدون في تحسين أنظمة الأمن من خلال إيجاد نقاط الضعف قبل المهاجمين',
    'chapter1.section1.topic1.p2': '• القبعة السوداء: المخترقون الخبيثون الذين يسعون للوصول غير المصرح به للكسب الشخصي أو السرقة أو التخريب',
    'chapter1.section1.topic1.p3': '• القبعة الرمادية: أولئك الذين يعملون في المنطقة الرمادية الأخلاقية، قد يخرقون القوانين أحيانًا ولكن دون نية خبيثة',
    'chapter1.section1.topic1.p4': '• تتراوح دوافعهم من الكسب المالي إلى الهاكتيفيزم والتجسس والأنشطة التي ترعاها الدول',
    
    'chapter1.section1.topic2.title': 'المطلب الثاني: دورة حياة الهجوم السيبراني',
    'chapter1.section1.topic2.p1': '• المرحلة 1: الاستطلاع - جمع المعلومات حول الأهداف من خلال OSINT والمسح والهندسة الاجتماعية',
    'chapter1.section1.topic2.p2': '• المرحلة 2: التسليح والاستغلال - إعداد ونشر متجهات الهجوم لاستغلال نقاط الضعف المحددة',
    'chapter1.section1.topic2.p3': '• المرحلة 3: التثبيت والعمل - الحصول على وصول مستمر، والحركة الجانبية، وتحقيق الأهداف مع إخفاء الآثار',
    
    'chapter1.section2.title': 'المبحث الثاني: استراتيجيات متقدمة في الاختراق',
    'chapter1.section2.subtitle': 'منهجيات الهجوم الحديثة',
    'chapter1.section2.p1': 'يستخدم المهاجمون السيبرانيون الحديثون تقنيات متطورة لاختراق حتى الأنظمة والشبكات المحمية جيدًا.',
    
    'chapter1.section2.topic1.title': 'المطلب الأول: استغلال الثغرات الأمنية',
    'chapter1.section2.topic1.p1': '• هجمات حقن SQL التي تستهدف قواعد البيانات لاستخراج المعلومات الحساسة أو تجاوز المصادقة',
    'chapter1.section2.topic1.p2': '• Cross-Site Scripting (XSS) للهجمات على جانب العميل التي يمكن أن تسرق ملفات تعريف الارتباط وبيانات الجلسة',
    'chapter1.section2.topic1.p3': '• استغلال Buffer Overflow الذي يستهدف عيوب إدارة الذاكرة في التطبيقات والأنظمة',
    'chapter1.section2.topic1.p4': '• تنفيذ التعليمات البرمجية عن بُعد من خلال عيوب التطبيق التي تسمح للمهاجمين بتشغيل أوامر عشوائية',
    
    'chapter1.section2.topic2.title': 'المطلب الثاني: الهندسة الاجتماعية واستخدام الذكاء الاصطناعي',
    'chapter1.section2.topic2.p1': '• حملات التصيد الاحتيالي باستخدام رسائل البريد الإلكتروني والمواقع الإلكترونية الخادعة لجمع بيانات الاعتماد والبيانات الشخصية',
    'chapter1.section2.topic2.p2': '• هجمات التصيد الاحتيالي المستهدفة التي تستهدف أفرادًا محددين بمحتوى مخصص لزيادة معدلات النجاح',
    'chapter1.section2.topic2.p3': '• الهجمات المدعومة بالذكاء الاصطناعي التي تؤتمت الاستطلاع واكتشاف نقاط الضعف على نطاق غير مسبوق',
    'chapter1.section2.topic2.p4': '• دراسات حالة عن الاختراقات البارزة مثل SolarWinds و Colonial Pipeline التي توضح المنهجيات المتطورة',
    
    // Chapter 2 Section
    'chapter2.title': 'الفصل الثاني: الإطار القانوني لمكافحة الجرائم الإلكترونية',
    'chapter2.section1.title': 'المبحث الأول: التشريعات الجزائرية والدولية في مكافحة الجرائم السيبرانية',
    'chapter2.section1.subtitle': 'الحماية القانونية ضد التهديدات السيبرانية',
    'chapter2.section1.p1': 'توفر الأطر القانونية الأساس لإنفاذ الأمن السيبراني والحماية ضد الجرائم الرقمية.',
    
    'chapter2.section1.topic1.title': 'المطلب الأول: القوانين الجزائرية المتعلقة بالجرائم الإلكترونية',
    'chapter2.section1.topic1.p1': '• أحكام قانون العقوبات التي تتناول الجرائم السيبرانية بما في ذلك الوصول غير المصرح به وسرقة البيانات',
    'chapter2.section1.topic1.p2': '• القانون 18-07 بشأن حماية البيانات الشخصية الذي يحدد الحقوق والالتزامات لمعالجة البيانات',
    'chapter2.section1.topic1.p3': '• تحديات الإنفاذ بسبب التعقيد التقني والقيود القضائية',
    'chapter2.section1.topic1.p4': '• التطورات القانونية الأخيرة التي تعزز العقوبات على الجرائم السيبرانية وتعزز سلطات التحقيق',
    
    'chapter2.section1.topic2.title': 'المطلب الثاني: المقارنة بين القوانين الجزائرية والدولية',
    'chapter2.section1.topic2.p1': '• اتفاقية بودابست بشأن الجريمة السيبرانية التي توفر إطار التعاون الدولي للتحقيقات',
    'chapter2.section1.topic2.p2': '• اللائحة العامة لحماية البيانات في أوروبا التي تضع معايير عالمية لحماية البيانات والخصوصية',
    'chapter2.section1.topic2.p3': '• قانون مكافحة الاحتيال وإساءة استخدام الحاسوب (CFAA) وغيرها من الصكوك القانونية الدولية التي تتناول جوانب مختلفة من الجرائم السيبرانية',
    'chapter2.section1.topic2.p4': '• فرص الجزائر لتعزيز إطارها القانوني من خلال التعاون الدولي',
    
    'chapter2.section2.title': 'المبحث الثاني: تطوير استراتيجيات الحماية القانونية والتقنية',
    'chapter2.section2.subtitle': 'بناء دفاعات قوية',
    'chapter2.section2.p1': 'يتطلب الأمن السيبراني الفعال كلاً من الأطر القانونية القوية والتدابير التقنية التي تعمل معًا لحماية الأصول الرقمية.',
    
    'chapter2.section2.topic1.title': 'المطلب الأول: تعزيز الأمن السيبراني من خلال الاختراق الأخلاقي',
    'chapter2.section2.topic1.p1': '• منهجيات اختبار الاختراق لتحديد نقاط الضعف قبل أن يتم استغلالها',
    'chapter2.section2.topic1.p2': '• برامج مكافآت الثغرات التي تخلق حوافز اقتصادية لأبحاث الأمان المسؤولة',
    'chapter2.section2.topic1.p3': '• الحدود القانونية ومتطلبات التفويض لاختبار الأمان المشروع',
    'chapter2.section2.topic1.p4': '• بناء موقف الأمن التنظيمي من خلال التقييم والتحسين المنتظم',
    
    'chapter2.section2.topic2.title': 'المطلب الثاني: مقترحات لتعزيز الأمن السيبراني في الجزائر',
    'chapter2.section2.topic2.p1': '• تحسينات تشريعية لتوفير تعريفات أوضح وآليات إنفاذ أقوى',
    'chapter2.section2.topic2.p2': '• إنشاء وحدات متخصصة في الأمن السيبراني ذات خبرة تقنية للتحقيق والاستجابة',
    'chapter2.section2.topic2.p3': '• شراكات بين القطاعين العام والخاص لتبادل معلومات التهديدات والاستجابة المنسقة للحوادث',
    'chapter2.section2.topic2.p4': '• حملات التثقيف والتوعية الوطنية لتطوير ثقافة الأمان في المجتمع',
    
    // Conclusion Section
    'conclusion.title': 'الخاتمة',
    'conclusion.subtitle': 'الطريق إلى الأمام في الأمن السيبراني',
    'conclusion.p1': 'لا يزال مشهد الأمن السيبراني يتطور مع تقدم التكنولوجيا وتغير أنماط التهديد.',
    'conclusion.p2': 'فهم كل من التقنيات الهجومية والأطر الدفاعية أمر ضروري للحماية الشاملة.',
    'conclusion.p3': 'يجب أن يركز البحث المستقبلي على الدور المزدوج للذكاء الاصطناعي في خلق التهديدات السيبرانية والتخفيف من حدتها.',
    'conclusion.p4': 'يوفر النهج المتوازن الذي يجمع بين الابتكار التكنولوجي والأطر القانونية والوعي البشري أقوى دفاع ضد التهديدات السيبرانية.',
    
    // References Section
    'references.title': 'قائمة المراجع والمصادر',
    'references.subtitle': 'قراءات ومصادر إضافية',
    'references.arabic': 'المصادر العربية',
    'references.international': 'المصادر الدولية',
    'references.online': 'الموارد عبر الإنترنت',
    
    // Footer
    'footer.rights': 'جميع الحقوق محفوظة',
    'footer.disclaimer': 'هذا المورد لأغراض تعليمية فقط.',
    
    // Language Toggle
    'language': 'اللغة',
    'language.english': 'English',
    'language.arabic': 'العربية'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  // Function to set language and update HTML attributes
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  };

  // Translator function
  const t = (key: string): string => {
    const currentTranslations = translations[language] || translations.en;
    return currentTranslations[key as keyof typeof currentTranslations] || key;
  };

  // Set initial language
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ar')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language preference
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
