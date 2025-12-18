
import React from 'react';
import { motion } from 'framer-motion';

const VoiceLayer: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="p-8 md:p-12 rounded-[40px] card-gradient flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-black/40"
        >
           <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="flex-1 space-y-6 md:space-y-8"
           >
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest text-white/50"
              >
                Говорите • Развертывайте • Масштабируйте
              </motion.div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Голосовой слой</h2>
              <p className="text-base md:text-lg text-white/50 leading-relaxed max-w-md">
                С Onion AI вычисления становятся разговорными. Голос — это нативный слой ввода — быстрый, естественный и без трения.
              </p>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.3 }}
             className="flex-1 w-full flex justify-center"
           >
              <div className="relative w-56 h-56 sm:w-72 sm:h-72">
                 <div className="absolute inset-0 bg-white/10 blur-[80px] rounded-full animate-pulse"></div>
                 <div className="relative w-full h-full rounded-full border border-white/10 bg-black flex items-center justify-center overflow-hidden">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 blur-[10px]"></div>
                    <div className="absolute inset-8 sm:inset-10 border border-white/5 rounded-full border-dashed"></div>
                 </div>
              </div>
           </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VoiceLayer;
