
import React from 'react';
import { motion } from 'framer-motion';
import { OnionLogo } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-20 pointer-events-none -z-10">
         <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              d="M0 400C300 350 500 450 720 400C940 350 1140 450 1440 400V800H0V400Z" 
              fill="url(#grad1)" 
            />
            <defs>
              <linearGradient id="grad1" x1="720" y1="400" x2="720" y2="800" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" stopOpacity="0.1" />
                <stop offset="1" stopColor="black" />
              </linearGradient>
            </defs>
         </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest text-white/50 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse"></span>
          Добро пожаловать в Onion AI
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]"
        >
          Модульные вычисления <br /> На базе движка CORA.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-2xl text-white/60 font-light mb-12 max-w-2xl mx-auto"
        >
          Голосовое управление. Осведомленность о блокчейне. Масштабируемость.
        </motion.p>

        <div className="flex flex-col items-center gap-12">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-full bg-white text-black font-bold text-lg hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-shadow"
          >
            Войти в движок MCP
          </motion.button>

          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-white/20 blur-[60px] rounded-full scale-150 animate-pulse"></div>
            <div className="relative w-24 h-24 rounded-3xl bg-black border border-white/20 flex items-center justify-center shadow-2xl animate-float">
              <OnionLogo className="w-12 h-12" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
