
import React from 'react';

// Иконки социальных сетей
const TelegramIcon = () => (
  <svg viewBox="0 0 64 64" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 8 C18 8 8 18 8 32 C8 46 18 56 32 56 C46 56 56 46 56 32 C56 18 46 8 32 8 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M24 32 L32 36 L40 28 M24 32 L18 40 L24 32 M24 32 L40 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MediumIcon = () => (
  <svg viewBox="0 0 64 64" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="32" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
    <ellipse cx="40" cy="32" rx="12" ry="8" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M52 32 L56 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 64 64" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 20 L44 44 M44 20 L20 44" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

const BannerSection: React.FC = () => {
  return (
    <section className="py-40 px-6 relative overflow-hidden">
       {/* Stars/Dust particles approximation */}
       <div className="absolute inset-0 opacity-20 pointer-events-none">
          {Array.from({length: 40}).map((_, i) => (
             <div 
               key={i} 
               className="absolute w-0.5 h-0.5 bg-white rounded-full"
               style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random()
               }}
             />
          ))}
       </div>

       <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-12 flex justify-center">
             <div className="w-32 h-32 relative">
                <div className="absolute inset-0 border-2 border-white/10 rounded-2xl rotate-45"></div>
                <div className="absolute inset-4 border border-white/20 rounded-xl -rotate-12"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-10 h-10 bg-white/5 blur-sm"></div>
                </div>
             </div>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
            Onion AI переопределяет вычисления как живую инфраструктуру...
          </h2>
          <p className="text-white/40 text-sm max-w-xl mx-auto mb-12">
            На базе CORA агенты развиваются через слои, протоколы и время — превращая MCP из конечных точек в системы действий.
          </p>

          <div className="flex items-center justify-center gap-8">
            <button className="px-8 py-3 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Читать техническую документацию
            </button>
            <div className="flex items-center gap-6 text-white opacity-60">
               <span className="cursor-pointer hover:opacity-100 transition-opacity"><TelegramIcon /></span>
               <span className="cursor-pointer hover:opacity-100 transition-opacity"><XIcon /></span>
               <span className="cursor-pointer hover:opacity-100 transition-opacity"><MediumIcon /></span>
            </div>
          </div>
       </div>
    </section>
  );
};

export default BannerSection;
