
import React from 'react';
import { PartnerLogos } from '../constants';

const PartnerTicker: React.FC = () => {
  // Дублируем список для бесшовного эффекта
  const fullList = [...PartnerLogos, ...PartnerLogos, ...PartnerLogos];

  return (
    <section className="py-20 border-y border-white/5 bg-black/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="animate-ticker">
          {fullList.map((name, i) => (
            <div 
              key={i} 
              className="flex items-center gap-2 text-xl font-medium tracking-tight whitespace-nowrap px-12 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all cursor-default"
            >
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerTicker;
