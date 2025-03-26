
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import GlobalEffects from './components/GlobalEffects';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <LanguageProvider>
      <Router>
        {/* Global UI effects */}
        <GlobalEffects />
        
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        
        <Toaster />
      </Router>
    </LanguageProvider>
  );
}

export default App;
