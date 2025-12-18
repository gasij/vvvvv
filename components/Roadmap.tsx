
import React from 'react';
import { motion } from 'framer-motion';

const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:w-1/3"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest text-white/50 mb-6">
            Путь Onion AI
          </div>
          <h2 className="text-6xl font-bold">Дорожная карта</h2>
        </motion.div>

        <div className="md:w-2/3 space-y-12 relative">
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
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
    viewport={{ once: true }}
    transition={{ delay: index * 0.2 }}
    className="relative pl-12"
  >
    <div className="absolute left-0 top-1 w-6 h-6 rounded-full border-4 border-black bg-white z-10 shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
    <div className="p-8 rounded-3xl card-gradient flex flex-col md:flex-row gap-12 group hover:bg-white/[0.03] transition-all">
       <span className="text-4xl font-bold opacity-30 group-hover:opacity-80 transition-opacity shrink-0">{phase}</span>
       <div className="flex-1">
          <h3 className="text-xl font-bold mb-6">{title}</h3>
          <ul className="space-y-4">
            {items.map((item: string, i: number) => (
              <li key={i} className="text-sm text-white/40 flex items-start gap-3 group-hover:text-white/60 transition-colors">
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
