
import React from 'react';

// Иконки для языков программирования
const JavaIcon = () => (
  <svg viewBox="0 0 64 64" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="16" y="16" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M24 24 L40 24 M24 32 L40 32 M24 40 L40 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const PythonIcon = () => (
  <svg viewBox="0 0 64 64" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 12 Q20 12 20 24 L20 28 Q20 40 32 40 L40 40" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M32 52 Q44 52 44 40 L44 36 Q44 24 32 24 L24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <circle cx="28" cy="20" r="3" fill="currentColor"/>
    <circle cx="36" cy="44" r="3" fill="currentColor"/>
  </svg>
);

const RubyIcon = () => (
  <svg viewBox="0 0 64 64" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 16 L48 24 L48 40 L32 48 L16 40 L16 24 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);

const CrystalIcon = () => (
  <svg viewBox="0 0 64 64" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 12 L44 20 L44 32 L32 40 L20 32 L20 20 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M32 40 L44 44 L32 52 L20 44 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M20 20 L32 12 L44 20" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);

const DevStack: React.FC = () => {
  return (
    <section id="dev-stack" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest text-white/50 mb-6">
            Стройте быстро • Развертывайте умно
          </div>
          <h2 className="text-5xl font-bold mb-6">Стек разработки</h2>
          <p className="max-w-2xl mx-auto text-white/50 text-sm">
            Среда разработки Onion AI разработана для гибкости, расширяемости и масштабируемости
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <StackCard 
            title="Языково-независимые SDK" 
            desc="Унифицированные интерфейсы для TypeScript, Rust, Python, Solidity и других."
            className="md:col-span-7"
            visual={
              <div className="flex items-center gap-4 mt-8">
                 {[
                   { label: 'JAVA', icon: <JavaIcon /> },
                   { label: 'Python', icon: <PythonIcon /> },
                   { label: 'Ruby', icon: <RubyIcon /> },
                   { label: 'Crystal', icon: <CrystalIcon /> }
                 ].map((item, i) => (
                   <div key={i} className="w-16 h-16 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white opacity-60 hover:opacity-100 transition-opacity">
                      {item.icon}
                   </div>
                 ))}
              </div>
            }
          />
          <StackCard 
            title="Шаблоны запуска" 
            desc="Готовые каркасы для логики агентов, триггеров и потоков MCP."
            className="md:col-span-5"
            visual={
              <div className="mt-8 p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between gap-4">
                 {[1,2,3,4,5].map(i => <div key={i} className="w-8 h-8 rounded-lg bg-white/10 border border-white/10"></div>)}
              </div>
            }
          />
          <StackCard 
            title="Вычислительные плагины" 
            desc="Легко подключайте LLM, голосовые интерпретаторы и офчейн-верификаторы."
            className="md:col-span-4"
            visual={
              <div className="mt-6 w-32 h-32 mx-auto relative">
                <div className="absolute inset-0 border border-dashed border-white/20 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-4 border border-white/10 rounded-full flex items-center justify-center">
                   <div className="w-8 h-8 rounded-full bg-white/20"></div>
                </div>
              </div>
            }
          />
          <StackCard 
            title="Событийная шина" 
            desc="Нативная поддержка агентов в режиме демона, циклов и постоянного состояния."
            className="md:col-span-4"
            img="https://picsum.photos/400/305?grayscale"
          />
          <StackCard 
            title="Слой взаимодействия" 
            desc="Готовые к интеграции модули для оракулов, кошельков, хранилищ и систем идентификации."
            className="md:col-span-4"
            visual={
              <div className="mt-10 p-6 bg-white/5 rounded-2xl border border-white/10 inline-block">
                <div className="w-10 h-10 border-2 border-white/40 rounded rotate-45"></div>
              </div>
            }
          />
        </div>
      </div>
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </section>
  );
};

const StackCard = ({ title, desc, className, visual, img }: any) => (
  <div className={`p-8 rounded-3xl card-gradient overflow-hidden flex flex-col ${className}`}>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-xs text-white/40 mb-4">{desc}</p>
    {visual && <div>{visual}</div>}
    {img && <img src={img} className="mt-auto rounded-xl grayscale opacity-30 h-32 object-cover" />}
  </div>
);

export default DevStack;
