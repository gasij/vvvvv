
import React from 'react';

// Иконки для случаев использования
const SurveillanceIcon = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3"/>
    <circle cx="32" cy="32" r="12" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="32" cy="32" r="4" fill="currentColor"/>
    <path d="M32 12 L32 8 M32 56 L32 52 M12 32 L8 32 M56 32 L52 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ChainIcon = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="32" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="44" cy="32" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M28 32 L36 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M20 24 L12 16 M20 40 L12 48 M44 24 L52 16 M44 40 L52 48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
  </svg>
);

const ProtocolIcon = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="16" y="16" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M24 24 L40 24 M24 32 L40 32 M24 40 L40 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="48" cy="16" r="4" fill="currentColor" opacity="0.6"/>
    <circle cx="48" cy="48" r="4" fill="currentColor" opacity="0.6"/>
    <path d="M48 20 L48 44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 8 L40 24 L56 28 L44 40 L46 56 L32 48 L18 56 L20 40 L8 28 L24 24 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="32" cy="32" r="6" fill="currentColor" opacity="0.8"/>
  </svg>
);

const AutomationIcon = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="16" y="20" width="32" height="24" rx="4" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="24" cy="32" r="3" fill="currentColor"/>
    <circle cx="32" cy="32" r="3" fill="currentColor"/>
    <circle cx="40" cy="32" r="3" fill="currentColor"/>
    <path d="M20 12 L20 20 M44 12 L44 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <rect x="18" y="8" width="4" height="4" fill="currentColor"/>
    <rect x="42" y="8" width="4" height="4" fill="currentColor"/>
  </svg>
);

const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="py-32 px-6 bg-black relative">
       <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-white/[0.02] blur-[100px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest text-white/50 mb-6">
            Развертывайте агентов, которые действуют
          </div>
          <h2 className="text-5xl font-bold mb-6">Случаи использования</h2>
          <p className="text-white/50 text-sm max-w-xl">
            Реальные сценарии, где модульные MCP Onion AI превращают интеллект в выполнение:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-12 p-12 rounded-3xl card-gradient">
           <UseCaseItem 
              title="Наблюдение, активируемое намерением" 
              desc="Запускайте агентов с голосовым управлением для мониторинга ончейн-аномалий и запуска ответных действий."
              icon={<SurveillanceIcon />}
           />
           <UseCaseItem 
              title="Композируемые цепочки агентов" 
              desc="Объединяйте MCP в конвейеры действий (например, GitHub > Запуск > Валидация > Отправка)."
              icon={<ChainIcon />}
           />
           <UseCaseItem 
              title="Интерфейсирование с протоколами в реальном времени" 
              desc="Запрашивайте или изменяйте реальные API и смарт-контракты через голосовой ввод."
              icon={<ProtocolIcon />}
           />
           <UseCaseItem 
              title="Искусственный интеллект для пространственного анализа" 
              desc="Активируйте агентов для маршрутизации, расчета и оптимизации пространственных данных."
              icon={<LocationIcon />}
           />
           <UseCaseItem 
              title="Автоматизация потоков контрактов" 
              desc="Автоматизируйте создание, тестирование и развертывание контрактов с минимальным вмешательством."
              icon={<AutomationIcon />}
           />
        </div>
      </div>
    </section>
  );
};

const UseCaseItem = ({ title, desc, icon }: any) => (
  <div className="space-y-4">
    <div className="text-white/80 flex items-center justify-start">
      {icon}
    </div>
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-sm text-white/40 leading-relaxed">{desc}</p>
  </div>
);

export default UseCases;
