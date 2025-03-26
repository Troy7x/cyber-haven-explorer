
import React, { useState, useEffect } from 'react';
import { Mic, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import CyberButton from './CyberButton';

const VoiceSearch: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');
  const { language } = useLanguage();

  const messages = {
    en: {
      placeholder: 'Ask something about cybersecurity...',
      listening: 'Listening...',
      processing: 'Processing...',
      error: 'Voice recognition not supported in your browser',
      start: 'Voice Search',
      stop: 'Stop',
    },
    ar: {
      placeholder: 'اسأل شيئًا عن الأمن السيبراني...',
      listening: 'جاري الاستماع...',
      processing: 'جاري المعالجة...',
      error: 'التعرف الصوتي غير مدعوم في متصفحك',
      start: 'البحث الصوتي',
      stop: 'توقف',
    }
  };

  const currentMessages = language === 'ar' ? messages.ar : messages.en;

  useEffect(() => {
    let recognition: any = null;

    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
      recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;
      
      if (language === 'ar') {
        recognition.lang = 'ar-SA';
      } else {
        recognition.lang = 'en-US';
      }

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
        const current = event.resultIndex;
        const result = event.results[current][0].transcript;
        setTranscript(result);
      };

      recognition.onend = () => {
        setIsListening(false);
        if (transcript) {
          processTranscript(transcript);
        }
      };

      recognition.onerror = (event: any) => {
        console.error('Speech recognition error', event.error);
        setIsListening(false);
      };
    }

    return () => {
      if (recognition) {
        recognition.abort();
      }
    };
  }, [language, transcript]);

  const startListening = () => {
    setTranscript('');
    setResponse('');
    
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
      const recognition = new SpeechRecognition();
      
      if (language === 'ar') {
        recognition.lang = 'ar-SA';
      } else {
        recognition.lang = 'en-US';
      }
      
      recognition.start();
      
      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
        const current = event.resultIndex;
        const result = event.results[current][0].transcript;
        setTranscript(result);
      };

      recognition.onend = () => {
        setIsListening(false);
        if (transcript || event.results[0][0].transcript) {
          processTranscript(transcript || event.results[0][0].transcript);
        }
      };
    } else {
      alert(currentMessages.error);
    }
  };

  const stopListening = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.stop();
      setIsListening(false);
    }
  };

  const processTranscript = (text: string) => {
    setResponse(currentMessages.processing);
    
    // Simulate AI processing delay
    setTimeout(() => {
      // Simple keyword-based responses
      const lowercaseText = text.toLowerCase();
      
      if (language === 'ar') {
        // Arabic responses
        if (lowercaseText.includes('قوانين') || lowercaseText.includes('تشريعات')) {
          setResponse('القوانين الجزائرية المتعلقة بالجرائم الإلكترونية تشمل القانون رقم 18-07 المتعلق بحماية الأشخاص الطبيعيين في مجال معالجة المعطيات ذات الطابع الشخصي وقانون العقوبات مواد مكافحة الجرائم المعلوماتية.');
        } else if (lowercaseText.includes('اختراق') || lowercaseText.includes('هاكر')) {
          setResponse('الاختراق الأخلاقي هو ممارسة اختبار أمان الأنظمة بإذن مسبق بهدف تحسين الأمن. أما القرصنة غير المصرح بها فهي جريمة يعاقب عليها القانون.');
        } else if (lowercaseText.includes('حماية') || lowercaseText.includes('أمان')) {
          setResponse('تشمل أفضل ممارسات الحماية: استخدام كلمات مرور قوية، تحديث البرامج باستمرار، استخدام التشفير، والحذر من هجمات التصيد.');
        } else {
          setResponse('لم أستطع العثور على معلومات محددة حول هذا الموضوع. يرجى طرح سؤال متعلق بالأمن السيبراني أو القوانين الإلكترونية.');
        }
      } else {
        // English responses
        if (lowercaseText.includes('law') || lowercaseText.includes('legal')) {
          setResponse('Algerian laws related to cybercrime include Law No. 18-07 on the protection of natural persons in the processing of personal data, and specific articles in the Penal Code that address computer crimes.');
        } else if (lowercaseText.includes('hack') || lowercaseText.includes('hacker')) {
          setResponse('Ethical hacking is the practice of testing system security with permission to improve security. Unauthorized hacking is a crime punishable by law.');
        } else if (lowercaseText.includes('protect') || lowercaseText.includes('security')) {
          setResponse('Best security practices include: using strong passwords, keeping software updated, employing encryption, and being cautious of phishing attacks.');
        } else {
          setResponse('I couldn\'t find specific information on this topic. Please ask a question related to cybersecurity or electronic laws.');
        }
      }
    }, 1500);
  };

  return (
    <div className="cyber-card p-6 rounded-xl max-w-2xl mx-auto">
      <h3 className="text-xl font-medium text-center mb-6 neon-text">
        {language === 'ar' ? 'مساعد الأمن السيبراني' : 'Cybersecurity Assistant'}
      </h3>
      
      <div className="relative mb-6">
        <input
          type="text"
          value={isListening ? currentMessages.listening : transcript}
          placeholder={currentMessages.placeholder}
          readOnly
          className="w-full bg-cyber-darker border border-cyber-accent/30 rounded-md px-4 py-3 text-white focus:outline-none focus:border-cyber-accent/60"
        />
        
        {isListening && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 voice-search-indicator">
            <div className="voice-search-bar"></div>
            <div className="voice-search-bar mx-0.5"></div>
            <div className="voice-search-bar"></div>
            <div className="voice-search-bar mx-0.5"></div>
            <div className="voice-search-bar"></div>
          </div>
        )}
      </div>
      
      {response && (
        <div className="cyber-terminal mb-6">
          <div className="cyber-terminal-header">
            <div className="text-xs text-white/50">response.ai</div>
          </div>
          <div className="cyber-terminal-content p-3 text-left text-sm">
            {response}
          </div>
        </div>
      )}
      
      <div className="flex justify-center">
        {!isListening ? (
          <CyberButton variant="3d" onClick={startListening} className="flex items-center">
            <Mic className="w-4 h-4 mr-2" />
            {currentMessages.start}
          </CyberButton>
        ) : (
          <CyberButton variant="3d" onClick={stopListening} className="flex items-center bg-red-500 hover:bg-red-600">
            <X className="w-4 h-4 mr-2" />
            {currentMessages.stop}
          </CyberButton>
        )}
      </div>
    </div>
  );
};

export default VoiceSearch;
