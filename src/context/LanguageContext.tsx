
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
    'chapter1.section1.topic1.p1': '• White Hat: Ethical hackers who help improve security',
    'chapter1.section1.topic1.p2': '• Black Hat: Malicious hackers seeking unauthorized access',
    'chapter1.section1.topic1.p3': '• Grey Hat: Those who operate in the ethical gray area',
    'chapter1.section1.topic1.p4': 'Their motivations range from financial gain to hacktivism and state-sponsored activities.',
    
    'chapter1.section1.topic2.title': 'The Cyber Attack Lifecycle',
    'chapter1.section1.topic2.p1': '• Phase 1: Reconnaissance - Gathering information about targets',
    'chapter1.section1.topic2.p2': '• Phase 2: Weaponization & Exploitation - Preparing and deploying attacks',
    'chapter1.section1.topic2.p3': '• Phase 3: Installation & Action - Gaining control and achieving objectives',
    
    'chapter1.section2.title': 'Advanced Hacking Techniques',
    'chapter1.section2.subtitle': 'Modern Attack Methodologies',
    'chapter1.section2.p1': 'Modern cyber attackers employ sophisticated techniques to breach even well-protected systems.',
    
    'chapter1.section2.topic1.title': 'Exploiting Security Vulnerabilities',
    'chapter1.section2.topic1.p1': '• SQL Injection attacks targeting databases',
    'chapter1.section2.topic1.p2': '• Cross-Site Scripting (XSS) for client-side attacks',
    'chapter1.section2.topic1.p3': '• Buffer Overflow exploits in memory management',
    'chapter1.section2.topic1.p4': '• Remote Code Execution through application flaws',
    
    'chapter1.section2.topic2.title': 'Social Engineering & AI in Hacking',
    'chapter1.section2.topic2.p1': '• Phishing campaigns targeting credentials',
    'chapter1.section2.topic2.p2': '• Spear Phishing attacks on specific individuals',
    'chapter1.section2.topic2.p3': '• AI-powered attacks automating reconnaissance',
    'chapter1.section2.topic2.p4': '• Case studies of notable breaches and their methodologies',
    
    // Chapter 2 Section
    'chapter2.title': 'Chapter 2: Legal Framework for Cybercrime Prevention',
    'chapter2.section1.title': 'Cybercrime Laws in Algeria and Worldwide',
    'chapter2.section1.subtitle': 'Legal Protections Against Cyber Threats',
    'chapter2.section1.p1': 'Legal frameworks provide the foundation for cybersecurity enforcement and protection.',
    
    'chapter2.section1.topic1.title': 'Algerian Cybercrime Laws',
    'chapter2.section1.topic1.p1': '• Criminal Code provisions addressing cyber offenses',
    'chapter2.section1.topic1.p2': '• Law 18-07 on personal data protection',
    'chapter2.section1.topic1.p3': '• Challenges and gaps in current legislation',
    'chapter2.section1.topic1.p4': '• Recent legal developments in response to emerging threats',
    
    'chapter2.section1.topic2.title': 'Comparison with Global Regulations',
    'chapter2.section1.topic2.p1': '• Budapest Convention on Cybercrime framework',
    'chapter2.section1.topic2.p2': '• GDPR in Europe and its global influence',
    'chapter2.section1.topic2.p3': '• CFAA and other international cybercrime laws',
    'chapter2.section1.topic2.p4': '• Pathways for Algeria to strengthen its legal framework',
    
    'chapter2.section2.title': 'Strengthening Legal & Technical Cybersecurity Measures',
    'chapter2.section2.subtitle': 'Building Robust Defenses',
    'chapter2.section2.p1': 'Effective cybersecurity requires both strong legal frameworks and technical measures working in concert.',
    
    'chapter2.section2.topic1.title': 'How Ethical Hacking Helps in Cybersecurity',
    'chapter2.section2.topic1.p1': '• Penetration testing for vulnerability assessment',
    'chapter2.section2.topic1.p2': '• Bug Bounty programs incentivizing security research',
    'chapter2.section2.topic1.p3': '• Legal boundaries of ethical hacking',
    'chapter2.section2.topic1.p4': '• Building organizational security through testing',
    
    'chapter2.section2.topic2.title': 'Proposed Strategies to Enhance Cybersecurity',
    'chapter2.section2.topic2.p1': '• Legislative improvements for stronger enforcement',
    'chapter2.section2.topic2.p2': '• Creating specialized cybersecurity units',
    'chapter2.section2.topic2.p3': '• Public-private partnerships for threat intelligence',
    'chapter2.section2.topic2.p4': '• Education and awareness campaigns for prevention',
    
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
    'nav.introduction': 'مقدمة',
    'nav.chapter1': 'استراتيجيات الاختراق',
    'nav.chapter2': 'الإطار القانوني',
    'nav.conclusion': 'خاتمة',
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
    'chapter1.title': 'الفصل الأول: استراتيجيات وتقنيات الاختراق',
    'chapter1.section1.title': 'مقدمة إلى عالم الاختراق',
    'chapter1.section1.subtitle': 'فهم مشهد التهديدات السيبرانية',
    'chapter1.section1.p1': 'عالم الاختراق متنوع، مع وجود مختلف الجهات الفاعلة المدفوعة بأهداف مختلفة - من الكسب المالي إلى البيانات الأيديولوجية.',
    
    'chapter1.section1.topic1.title': 'تصنيفات المخترقين وأساليبهم',
    'chapter1.section1.topic1.p1': '• القبعة البيضاء: المخترقون الأخلاقيون الذين يساعدون في تحسين الأمن',
    'chapter1.section1.topic1.p2': '• القبعة السوداء: المخترقون الخبيثون الذين يسعون للوصول غير المصرح به',
    'chapter1.section1.topic1.p3': '• القبعة الرمادية: أولئك الذين يعملون في المنطقة الرمادية الأخلاقية',
    'chapter1.section1.topic1.p4': 'تتراوح دوافعهم من الكسب المالي إلى الهاكتيفيزم والأنشطة التي ترعاها الدولة.',
    
    'chapter1.section1.topic2.title': 'دورة حياة الهجوم السيبراني',
    'chapter1.section1.topic2.p1': '• المرحلة 1: الاستطلاع - جمع المعلومات حول الأهداف',
    'chapter1.section1.topic2.p2': '• المرحلة 2: التسليح والاستغلال - إعداد ونشر الهجمات',
    'chapter1.section1.topic2.p3': '• المرحلة 3: التثبيت والعمل - السيطرة وتحقيق الأهداف',
    
    'chapter1.section2.title': 'تقنيات الاختراق المتقدمة',
    'chapter1.section2.subtitle': 'منهجيات الهجوم الحديثة',
    'chapter1.section2.p1': 'يستخدم المهاجمون السيبرانيون الحديثون تقنيات متطورة لاختراق حتى الأنظمة المحمية جيدًا.',
    
    'chapter1.section2.topic1.title': 'استغلال نقاط الضعف الأمنية',
    'chapter1.section2.topic1.p1': '• هجمات حقن SQL التي تستهدف قواعد البيانات',
    'chapter1.section2.topic1.p2': '• Cross-Site Scripting (XSS) للهجمات على جانب العميل',
    'chapter1.section2.topic1.p3': '• استغلال Buffer Overflow في إدارة الذاكرة',
    'chapter1.section2.topic1.p4': '• التنفيذ البعيد للتعليمات البرمجية من خلال عيوب التطبيق',
    
    'chapter1.section2.topic2.title': 'الهندسة الاجتماعية والذكاء الاصطناعي في الاختراق',
    'chapter1.section2.topic2.p1': '• حملات التصيد الاحتيالي التي تستهدف بيانات الاعتماد',
    'chapter1.section2.topic2.p2': '• هجمات التصيد الاحتيالي المستهدفة على أفراد محددين',
    'chapter1.section2.topic2.p3': '• الهجمات المدعومة بالذكاء الاصطناعي التي تؤتمت عملية الاستطلاع',
    'chapter1.section2.topic2.p4': '• دراسات حالة عن الاختراقات البارزة ومنهجياتها',
    
    // Chapter 2 Section
    'chapter2.title': 'الفصل الثاني: الإطار القانوني للوقاية من الجرائم السيبرانية',
    'chapter2.section1.title': 'قوانين الجرائم السيبرانية في الجزائر وحول العالم',
    'chapter2.section1.subtitle': 'الحماية القانونية ضد التهديدات السيبرانية',
    'chapter2.section1.p1': 'توفر الأطر القانونية الأساس لتطبيق الأمن السيبراني والحماية.',
    
    'chapter2.section1.topic1.title': 'قوانين الجرائم السيبرانية الجزائرية',
    'chapter2.section1.topic1.p1': '• أحكام قانون العقوبات التي تتناول الجرائم السيبرانية',
    'chapter2.section1.topic1.p2': '• القانون 18-07 بشأن حماية البيانات الشخصية',
    'chapter2.section1.topic1.p3': '• التحديات والثغرات في التشريعات الحالية',
    'chapter2.section1.topic1.p4': '• التطورات القانونية الأخيرة استجابة للتهديدات الناشئة',
    
    'chapter2.section1.topic2.title': 'مقارنة مع اللوائح العالمية',
    'chapter2.section1.topic2.p1': '• إطار اتفاقية بودابست بشأن الجريمة السيبرانية',
    'chapter2.section1.topic2.p2': '• اللائحة العامة لحماية البيانات في أوروبا وتأثيرها العالمي',
    'chapter2.section1.topic2.p3': '• قانون مكافحة الاحتيال وإساءة استخدام الحاسوب وغيرها من قوانين الجرائم السيبرانية الدولية',
    'chapter2.section1.topic2.p4': '• مسارات لتعزيز الإطار القانوني في الجزائر',
    
    'chapter2.section2.title': 'تعزيز التدابير القانونية والتقنية للأمن السيبراني',
    'chapter2.section2.subtitle': 'بناء دفاعات قوية',
    'chapter2.section2.p1': 'يتطلب الأمن السيبراني الفعال كلاً من الأطر القانونية القوية والتدابير التقنية التي تعمل بتناغم.',
    
    'chapter2.section2.topic1.title': 'كيف يساعد الاختراق الأخلاقي في الأمن السيبراني',
    'chapter2.section2.topic1.p1': '• اختبار الاختراق لتقييم نقاط الضعف',
    'chapter2.section2.topic1.p2': '• برامج مكافآت الثغرات التي تحفز البحث الأمني',
    'chapter2.section2.topic1.p3': '• الحدود القانونية للاختراق الأخلاقي',
    'chapter2.section2.topic1.p4': '• بناء الأمن المؤسسي من خلال الاختبار',
    
    'chapter2.section2.topic2.title': 'استراتيجيات مقترحة لتعزيز الأمن السيبراني',
    'chapter2.section2.topic2.p1': '• تحسينات تشريعية لتعزيز الإنفاذ',
    'chapter2.section2.topic2.p2': '• إنشاء وحدات متخصصة في الأمن السيبراني',
    'chapter2.section2.topic2.p3': '• شراكات بين القطاعين العام والخاص لتبادل معلومات التهديدات',
    'chapter2.section2.topic2.p4': '• حملات التثقيف والتوعية للوقاية',
    
    // Conclusion Section
    'conclusion.title': 'خاتمة',
    'conclusion.subtitle': 'الطريق إلى الأمام في الأمن السيبراني',
    'conclusion.p1': 'لا يزال مشهد الأمن السيبراني يتطور مع تقدم التكنولوجيا وتغير أنماط التهديد.',
    'conclusion.p2': 'فهم كل من التقنيات الهجومية والأطر الدفاعية أمر ضروري للحماية الشاملة.',
    'conclusion.p3': 'يجب أن يركز البحث المستقبلي على الدور المزدوج للذكاء الاصطناعي في خلق التهديدات السيبرانية والتخفيف من حدتها.',
    'conclusion.p4': 'يوفر النهج المتوازن الذي يجمع بين الابتكار التكنولوجي والأطر القانونية والوعي البشري أقوى دفاع ضد التهديدات السيبرانية.',
    
    // References Section
    'references.title': 'المراجع والمصادر',
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
