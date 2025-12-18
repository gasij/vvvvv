
import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-32 px-6 bg-[#030303]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest text-white/50 mb-6">
            Выберите • Разверните • Командуйте • Итерируйте
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Как это работает</h2>
          <p className="max-w-2xl mx-auto text-white/50 text-sm">
            Выберите из маркетплейса, разверните или добавьте узлы, созданные для работы:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StepCard 
            index={0}
            title="Выберите узел" 
            desc="Выберите вычислительный узел из маркетплейса MCP или используйте свой."
            bg={<div className="w-full h-full flex items-center justify-center opacity-30"><div className="w-32 h-32 rounded-full border border-white/20 flex items-center justify-center animate-pulse"><div className="w-16 h-16 rounded-full border border-white/10"></div></div></div>}
          />
          <StepCard 
            index={1}
            title="Разверните на CORA" 
            desc="Запустите свой узел на бэкенд-инфраструктуре Onion AI на базе Q-Flow."
            content={
              <div className="space-y-3 mt-4">
                {['Alchemy MCP Server', 'Base', 'Github', 'Redis'].map((name, i) => (
                  <div key={i} className={`p-3 rounded-lg flex items-center gap-3 text-xs border border-white/10 ${i === 2 ? 'bg-white/10 border-white/30' : 'bg-white/5 opacity-60'}`}>
                    <div className="w-2 h-2 rounded-full bg-white/50"></div>
                    {name}
                  </div>
                ))}
              </div>
            }
          />
          <StepCard 
            index={2}
            title="Зарегистрируйте + Опубликуйте" 
            desc="Привяжите учетные данные, включите голосовую логику и опубликуйте для тестирования."
            bg={<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-white/5 blur-[40px] rounded-full"></div>}
            content={
              <div className="mt-auto pt-10">
                <div className="p-3 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-between text-xs">
                   <span className="text-white/40">Дайте любую команду...!</span>
                   <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">↑</span>
                </div>
              </div>
            }
          />
          <StepCard 
            index={3}
            title="Режим песочницы" 
            desc="Симулируйте, улучшайте и итерируйте поведение агентов в безопасной тестовой среде."
            content={
              <div className="mt-4 p-4 rounded-xl bg-black border border-white/10 font-mono text-[10px] text-white/40">
                <p>"{`github`}: {"{"}</p>
                <p className="pl-4">"{`command`}: "{`docker`}",</p>
                <p className="pl-4">"{`args`}: ["run", "-i", ...]</p>
                <p>{"}"}</p>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
};

const StepCard = ({ title, desc, bg, content, index }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="p-8 rounded-3xl card-gradient flex flex-col min-h-[400px] relative overflow-hidden group"
  >
    <div className="relative z-10">
      <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">{title}</h3>
      <p className="text-sm text-white/50 leading-relaxed mb-6">{desc}</p>
    </div>
    {content && <div className="relative z-10 flex-1 flex flex-col">{content}</div>}
    {bg && <div className="absolute inset-0 z-0">{bg}</div>}
  </motion.div>
);

export default HowItWorks;
