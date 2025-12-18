
import React from 'react';

const WhatWeProvide: React.FC = () => {
  return (
    <section id="provide" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest text-white/50 mb-6">
            Ваша обычная LLM на стероидах
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Что мы предлагаем?</h2>
          <p className="max-w-2xl mx-auto text-white/50 text-sm">
            Onion AI объединяет децентрализованное выполнение, модульный дизайн и вычисления в реальном времени через голос с помощью рантайма CORA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Big cards top */}
          <CapabilityCard 
            title="Ядро CORA" 
            desc="Агент-нативный рантайм для постоянной памяти, асинхронной координации и многоуровневой логики задач."
            className="md:col-span-1"
            img="https://picsum.photos/400/300?grayscale"
          />
          <CapabilityCard 
            title="Синхронизированное выполнение на границе" 
            desc="Узлы, работающие через блокчейны, приложения и пользовательские устройства в бесшовной синхронизации."
            className="md:col-span-1"
            content={
              <div className="space-y-2 mt-4 opacity-50">
                 {['Alchemy MCP Server', 'Base', 'Github', 'Redis'].map((n, i) => (
                   <div key={i} className="p-2 border border-white/10 rounded flex items-center justify-between text-[10px]">
                     <span>{n}</span>
                     <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                   </div>
                 ))}
              </div>
            }
          />
          <CapabilityCard 
            title="Инструменты разработки PlugStack" 
            desc="CLI-наборы, движки схем и обертки для быстрого и масштабируемого развертывания MCP."
            className="md:col-span-1"
            img="https://picsum.photos/400/301?grayscale"
          />

          {/* Wider cards bottom */}
          <CapabilityCard 
            title="Интерфейс CommandMesh" 
            desc="Узлы, работающие через блокчейны, приложения и пользовательские устройства в бесшовной синхронизации."
            className="md:col-span-1"
            img="https://picsum.photos/400/302?grayscale"
          />
          <CapabilityCard 
            title="Протоколы, готовые к аудиту" 
            desc="Агент-нативный рантайм для постоянной памяти, асинхронной координации и многоуровневой логики задач."
            className="md:col-span-2"
            content={
              <div className="mt-4 p-4 rounded-xl bg-[#0a0a0a] border border-white/10 font-mono text-xs">
                <span className="text-blue-400">const</span> Response = <span className="text-purple-400">await</span> Functions.<span className="text-yellow-400">makeHttpRequest</span>({`{`}
                <div className="pl-4">
                   Url: <span className="text-orange-300">"https://&lt;SxT-API-URL&gt;"</span>, <br />
                   Method: <span className="text-orange-300">"POST"</span>, <br />
                   Timeout: <span className="text-orange-300">9000</span>, <br />
                   Headers: {`{`} ... {`}`}
                </div>
                {`})`}
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
};

const CapabilityCard = ({ title, desc, className = "", img, content }: any) => (
  <div className={`p-8 rounded-3xl card-gradient overflow-hidden flex flex-col ${className}`}>
    <div className="flex-1">
      {img && <img src={img} className="w-full h-40 object-cover rounded-2xl mb-6 opacity-40 grayscale" />}
      {content && <div className="mb-6">{content}</div>}
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-sm text-white/50 leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default WhatWeProvide;
