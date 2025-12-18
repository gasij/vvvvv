
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PartnerTicker from './components/PartnerTicker';
import IntroSection from './components/IntroSection';
import HowItWorks from './components/HowItWorks';
import WhatWeProvide from './components/WhatWeProvide';
import UseCases from './components/UseCases';
import DevStack from './components/DevStack';
import VoiceLayer from './components/VoiceLayer';
import BannerSection from './components/BannerSection';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';
import FloatingLights from './components/FloatingLights';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white/20">
      {/* Floating lights animation */}
      <FloatingLights />
      
      {/* Background ambient glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-white/[0.03] blur-[120px] rounded-full"></div>
      </div>

      <Navbar />
      
      <main className="relative z-10 pt-20">
        <Hero />
        <PartnerTicker />
        <IntroSection />
        <HowItWorks />
        <WhatWeProvide />
        <UseCases />
        <DevStack />
        <VoiceLayer />
        <BannerSection />
        <Roadmap />
      </main>

      <Footer />
    </div>
  );
};

export default App;
