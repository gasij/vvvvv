
import React from 'react';
import Model3D from './Model3D';

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
              <div className="relative w-full h-[300px] md:h-[400px]">
                 <div className="absolute inset-0 bg-gradient-to-br from-[#00D9FF]/20 via-[#9B59B6]/20 to-[#FF6B9D]/20 blur-[80px] rounded-full animate-pulse"></div>
                 <div className="relative w-full h-full">
                    <Model3D 
                      modelPath="/julia_revolute_variation_5.glb"
                      className="w-full h-full"
                      autoRotate={true}
                      enableZoom={true}
                    />
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceLayer;
