
import React from 'react';
import { motion } from 'framer-motion';

const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-20 md:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="md:w-1/3"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest text-white/50 mb-6"
          >
            Путь Onion AI
          </motion.div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">Дорожная карта</h2>
        </motion.div>

        <div className="md:w-2/3 space-y-8 md:space-y-12 relative">
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-[11px] top-4 w-[1px] bg-gradient-to-b from-white to-transparent opacity-20"
          ></motion.div>
          
          <RoadmapPhase 
            index={0}
            phase="Фаза 1" 
            title="Запуск основного протокола"
            items={[
              'Движок CORA построен и протестирован',
              'Внутренние MCP: Maps, GitHub, YouTube',
              'Запуск токена $Onion AI',
              'Голосовая маршрутизация через CLI'
            ]}
          />
          <RoadmapPhase 
            index={1}
            phase="Фаза 2" 
            title="Песочница для разработчиков"
            items={[
              'Запуск dApp с интеграцией голоса',
              'Включение публикации сторонних MCP',
              'Вход на основе ончейн-подписи',
              'Выпуск SDK и локальных инструментов тестирования'
            ]}
          />
          <RoadmapPhase 
            index={2}
            phase="Фаза 3" 
            title="Активация интеллекта"
            items={[
              'Ончейн-оповещения + анализ поведения',
              'Контейнеризированные модули плагинов LLM',
              'Дашборды разработчиков (Логи, Метрики)',
              'Постоянная память для автономных агентов'
            ]}
          />
          <RoadmapPhase 
            index={3}
            phase="Фаза 4" 
            title="Расширение экосистемы"
            items={[
              'Синхронизация вычислений между распределенными агентами',
              'Маршрутизация логики, независимая от блокчейна',
              'Мультимодальные интерфейсы (Голос, CLI, AR/VR)',
              'Гранты для разработчиков + глобальные программы онбординга'
            ]}
          />
        </div>
      </div>
    </section>
  );
};

const RoadmapPhase = ({ phase, title, items, index }: any) => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    whileHover={{ scale: 1.02, x: 5 }}
    className="relative pl-8 md:pl-12"
  >
    <div className="absolute left-0 top-1 w-5 h-5 md:w-6 md:h-6 rounded-full border-4 border-black bg-white z-10 shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
    <div className="p-6 md:p-8 rounded-3xl card-gradient flex flex-col md:flex-row gap-6 md:gap-12 group hover:bg-white/[0.03] transition-all">
       <span className="text-2xl md:text-4xl font-bold opacity-30 group-hover:opacity-80 transition-opacity shrink-0">{phase}</span>
       <div className="flex-1">
          <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">{title}</h3>
          <ul className="space-y-3 md:space-y-4">
            {items.map((item: string, i: number) => (
              <li key={i} className="text-xs md:text-sm text-white/40 flex items-start gap-3 group-hover:text-white/60 transition-colors">
                <span className="text-white/20 mt-1">→</span>
                {item}
              </li>
            ))}
          </ul>
       </div>
    </div>
  </motion.div>
);

export default Roadmap;
