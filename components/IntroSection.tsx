
import React from 'react';

// Иконки для IntroSection
const MarketplaceIcon = () => (
  <svg viewBox="0 0 64 64" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M32 12 L32 52 M12 32 L52 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="32" cy="20" r="3" fill="currentColor"/>
    <circle cx="32" cy="44" r="3" fill="currentColor"/>
    <circle cx="20" cy="32" r="3" fill="currentColor"/>
    <circle cx="44" cy="32" r="3" fill="currentColor"/>
  </svg>
);

const VoiceIcon = () => (
  <svg viewBox="0 0 64 64" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 20 L32 44" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    <path d="M24 28 L24 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M40 28 L40 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M20 38 Q20 46 28 46 Q36 46 36 38" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M28 50 L32 54 L36 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ProtocolIcon = () => (
  <svg viewBox="0 0 64 64" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="32" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="44" cy="32" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M26 32 L38 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M14 20 L10 16 M14 44 L10 48 M50 20 L54 16 M50 44 L54 48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
  </svg>
);

const IntroSection: React.FC = () => {
  return (
    <section id="intro" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest text-white/50 mb-6">
            Введение
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Что такое Onion AI?</h2>
          <p className="max-w-2xl mx-auto text-white/50 text-sm leading-relaxed">
            Голосовой модульный протокол вычислений (MCP), построенный на CORA — объединяющий реальные платформы, такие как GitHub и Maps, с ончейн-логикой.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Децентрализованный маркетплейс MCP", icon: <MarketplaceIcon /> },
            { title: "Выполнение в реальном времени через голос", icon: <VoiceIcon /> },
            { title: "Протокольный слой для взаимодействия блокчейнов и приложений", icon: <ProtocolIcon /> }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-3xl card-gradient flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white border border-white/10 shrink-0">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold leading-snug">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
