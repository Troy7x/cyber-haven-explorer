
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Create a client
const queryClient = new QueryClient();

// Preload images for better performance
const preloadImages = () => {
  const images = [
    '/images/background.svg',
    '/images/hacker-dark.jpg',
    '/images/code-matrix.jpg',
    '/images/legal-cyber.jpg',
    '/images/security-lock.jpg'
  ];
  
  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};

// Add translation keys for new content
const addTranslationKeys = () => {
  // Add new keys to window object for language context
  if (!(window as any).translations) {
    (window as any).translations = {};
  }
  
  // English translations
  (window as any).translations.en = {
    ...(window as any).translations.en || {},
    securityFeed: {
      title: 'Latest Cyber Threats'
    },
    attackVectors: {
      title: 'Common Attack Vectors',
      subtitle: 'Understanding the most prevalent techniques used by hackers',
      sqlInjection: 'Attackers insert malicious SQL code into database queries, potentially gaining unauthorized access to data.',
      xss: 'Cross-Site Scripting allows attackers to inject client-side scripts into web pages viewed by other users.',
      socialEngineeringTitle: 'Social Engineering',
      socialEngineering: 'Manipulating people into divulging confidential information or performing actions that compromise security.',
      learnMore: 'Explore Methods'
    },
    defenseStrategies: {
      title: 'Defense Strategies',
      subtitle: 'Protecting against cyber threats requires both technical and legal measures',
      technicalTitle: 'Technical Safeguards',
      technical1: 'Implement robust access controls and authentication systems',
      technical2: 'Regular security audits and penetration testing',
      technical3: 'Keep systems updated with security patches',
      legalTitle: 'Legal Protections',
      legal1: 'Document and report all security incidents',
      legal2: 'Implement compliance with relevant cybersecurity laws',
      legal3: 'Develop clear security policies and procedures',
      bestPracticesTitle: 'Cybersecurity Best Practices',
      bestPracticesDesc: 'Download our comprehensive guide to protecting your organization against modern cyber threats.',
      downloadGuide: 'Download Guide'
    },
    references: {
      citationTitle: 'How to Cite This Resource',
      citationDesc: 'When referencing this work in academic papers or research, please use APA or MLA format with the URL and access date.'
    },
    footer: {
      intro: 'Introduction',
      hacking: 'Hacking Strategies',
      legal: 'Legal Framework',
      references: 'References'
    }
  };
  
  // Arabic translations
  (window as any).translations.ar = {
    ...(window as any).translations.ar || {},
    securityFeed: {
      title: 'أحدث التهديدات السيبرانية'
    },
    attackVectors: {
      title: 'طرق الهجوم الشائعة',
      subtitle: 'فهم التقنيات الأكثر انتشارًا التي يستخدمها المخترقون',
      sqlInjection: 'يقوم المهاجمون بإدراج كود SQL ضار في استعلامات قواعد البيانات، مما قد يؤدي إلى الوصول غير المصرح به إلى البيانات.',
      xss: 'يسمح XSS للمهاجمين بحقن نصوص برمجية على جانب العميل في صفحات الويب التي يشاهدها المستخدمون الآخرون.',
      socialEngineeringTitle: 'الهندسة الاجتماعية',
      socialEngineering: 'التلاعب بالأشخاص للكشف عن معلومات سرية أو القيام بإجراءات تضر بالأمن.',
      learnMore: 'استكشاف الطرق'
    },
    defenseStrategies: {
      title: 'استراتيجيات الدفاع',
      subtitle: 'تتطلب الحماية من التهديدات السيبرانية تدابير تقنية وقانونية',
      technicalTitle: 'الضمانات التقنية',
      technical1: 'تنفيذ ضوابط وصول قوية وأنظمة مصادقة',
      technical2: 'عمليات تدقيق أمنية منتظمة واختبار الاختراق',
      technical3: 'الحفاظ على تحديث الأنظمة بتصحيحات الأمان',
      legalTitle: 'الحمايات القانونية',
      legal1: 'توثيق وإبلاغ جميع الحوادث الأمنية',
      legal2: 'تنفيذ الامتثال لقوانين الأمن السيبراني ذات الصلة',
      legal3: 'تطوير سياسات وإجراءات أمنية واضحة',
      bestPracticesTitle: 'أفضل ممارسات الأمن السيبراني',
      bestPracticesDesc: 'قم بتنزيل دليلنا الشامل لحماية مؤسستك من التهديدات السيبرانية الحديثة.',
      downloadGuide: 'تحميل الدليل'
    },
    references: {
      citationTitle: 'كيفية الاستشهاد بهذا المصدر',
      citationDesc: 'عند الإشارة إلى هذا العمل في الأوراق الأكاديمية أو البحوث، يرجى استخدام تنسيق APA أو MLA مع عنوان URL وتاريخ الوصول.'
    },
    footer: {
      intro: 'المقدمة',
      hacking: 'استراتيجيات الاختراق',
      legal: 'الإطار القانوني',
      references: 'المراجع'
    }
  };
};

// Initialize app
(function init() {
  // Preload images when the app starts
  preloadImages();
  
  // Add translation keys
  addTranslationKeys();
})();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
