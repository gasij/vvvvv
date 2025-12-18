
import React from 'react';

const VoiceLayer: React.FC = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="p-12 rounded-[40px] card-gradient flex flex-col md:flex-row items-center gap-12 bg-black/40">
           <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest text-white/50">
                Говорите • Развертывайте • Масштабируйте
              </div>
              <h2 className="text-5xl font-bold">Голосовой слой</h2>
              <p className="text-lg text-white/50 leading-relaxed max-w-md">
                С Onion AI вычисления становятся разговорными. Голос — это нативный слой ввода — быстрый, естественный и без трения.
              </p>
           </div>

           <div className="flex-1 w-full flex justify-center">
              <div className="relative w-72 h-72">
                 <div className="absolute inset-0 bg-white/10 blur-[80px] rounded-full animate-pulse"></div>
                 <div className="relative w-full h-full rounded-full border border-white/10 bg-black flex items-center justify-center overflow-hidden">
                    <div className="w-20 h-20 rounded-full bg-white/20 blur-[10px]"></div>
                    <div className="absolute inset-10 border border-white/5 rounded-full border-dashed"></div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceLayer;
