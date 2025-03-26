
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Lock, CheckCircle2 } from 'lucide-react';
import CyberButton from './CyberButton';

interface AccessGrantedOverlayProps {
  isVisible: boolean;
  onClose: () => void;
}

const AccessGrantedOverlay: React.FC<AccessGrantedOverlayProps> = ({ isVisible, onClose }) => {
  const { t, language } = useLanguage();
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('authenticating');
  const [typedText, setTypedText] = useState('');
  
  const messages = {
    en: {
      authenticating: 'Authenticating...',
      scanning: 'Scanning system...',
      verifying: 'Verifying credentials...',
      granted: 'ACCESS GRANTED',
      welcome: 'Welcome back, User',
      continue: 'Continue'
    },
    ar: {
      authenticating: 'جاري المصادقة...',
      scanning: 'مسح النظام...',
      verifying: 'التحقق من بيانات الاعتماد...',
      granted: 'تم منح الوصول',
      welcome: 'مرحبًا بعودتك, المستخدم',
      continue: 'استمر'
    }
  };

  const currentMessages = language === 'ar' ? messages.ar : messages.en;

  useEffect(() => {
    if (isVisible) {
      // Reset states
      setProgress(0);
      setStatus('authenticating');
      setTypedText('');
      
      // Simulate authentication process
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prev + 1;
        });
      }, 30);
      
      // Update status messages
      setTimeout(() => setStatus('scanning'), 1000);
      setTimeout(() => setStatus('verifying'), 2000);
      setTimeout(() => setStatus('granted'), 3000);
      
      // Type out the welcome message
      setTimeout(() => {
        const welcomeMessage = currentMessages.welcome;
        let i = 0;
        const typeInterval = setInterval(() => {
          if (i < welcomeMessage.length) {
            setTypedText(welcomeMessage.substring(0, i + 1));
            i++;
          } else {
            clearInterval(typeInterval);
          }
        }, 50);
      }, 3500);
      
      return () => {
        clearInterval(progressInterval);
      };
    }
  }, [isVisible, language, currentMessages.welcome]);

  return (
    <div className={`access-granted-overlay ${isVisible ? 'active' : ''}`}>
      <div className="access-granted-content">
        <div className="mb-8">
          {status === 'granted' ? (
            <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto" />
          ) : (
            <Lock className="w-20 h-20 text-cyber-accent mx-auto animate-pulse" />
          )}
        </div>
        
        <div className="cyber-terminal mb-6 max-w-md">
          <div className="cyber-terminal-header">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="ml-auto text-xs text-white/50">system.auth.sh</div>
          </div>
          
          <div className="cyber-terminal-content text-left p-2">
            <div className="cyber-terminal-line">
              <span className="text-green-400">[system]</span> <span className="text-white">Initializing security protocol...</span>
            </div>
            
            {progress >= 20 && (
              <div className="cyber-terminal-line mt-1">
                <span className="text-green-400">[system]</span> <span className="text-white">{currentMessages.authenticating}</span>
              </div>
            )}
            
            {progress >= 40 && (
              <div className="cyber-terminal-line mt-1">
                <span className="text-green-400">[system]</span> <span className="text-white">{currentMessages.scanning}</span>
              </div>
            )}
            
            {progress >= 60 && (
              <div className="cyber-terminal-line mt-1">
                <span className="text-green-400">[system]</span> <span className="text-white">{currentMessages.verifying}</span>
              </div>
            )}
            
            {progress >= 90 && (
              <div className="cyber-terminal-line mt-1">
                <span className="text-green-400">[system]</span> <span className="text-white">Authentication complete</span>
              </div>
            )}
            
            {progress >= 100 && (
              <>
                <div className="cyber-terminal-line mt-3 text-center">
                  <span className="text-green-500 font-bold text-xl">{currentMessages.granted}</span>
                </div>
                <div className="cyber-terminal-line mt-2 text-center">
                  <span className="text-cyan-400">{typedText}</span>
                  <span className="border-r-2 border-cyan-400 animate-[blink-caret_0.75s_infinite]"></span>
                </div>
              </>
            )}
          </div>
        </div>
        
        <div className="w-full bg-gray-800 rounded-full h-2 mb-6">
          <div 
            className="bg-gradient-to-r from-green-500 to-cyber-accent h-2 rounded-full transition-all duration-300" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        {progress >= 100 && (
          <CyberButton variant="glow" onClick={onClose}>
            {currentMessages.continue}
          </CyberButton>
        )}
      </div>
    </div>
  );
};

export default AccessGrantedOverlay;
