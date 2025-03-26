
import React, { useState, useEffect } from 'react';
import CyberRadialMenu from './CyberRadialMenu';
import ThreatLevelIndicator from './ThreatLevelIndicator';
import MatrixCodeRain from './MatrixCodeRain';
import InterfaceCrack from './InterfaceCrack';
import AccessGrantedOverlay from './AccessGrantedOverlay';

const GlobalEffects: React.FC = () => {
  const [showAccessGranted, setShowAccessGranted] = useState(true);

  // Show the access granted overlay on first load
  useEffect(() => {
    const hasSeenIntro = localStorage.getItem('hasSeenIntro');
    
    if (!hasSeenIntro) {
      setShowAccessGranted(true);
      localStorage.setItem('hasSeenIntro', 'true');
    } else {
      setShowAccessGranted(false);
    }
  }, []);
  
  return (
    <>
      {/* Matrix code rain effect */}
      <MatrixCodeRain />
      
      {/* Interface crack effect */}
      <InterfaceCrack />
      
      {/* Radial menu */}
      <CyberRadialMenu />
      
      {/* Threat level indicator */}
      <ThreatLevelIndicator />
      
      {/* Access granted overlay */}
      <AccessGrantedOverlay 
        isVisible={showAccessGranted} 
        onClose={() => setShowAccessGranted(false)} 
      />
    </>
  );
};

export default GlobalEffects;
