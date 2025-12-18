
import React from 'react';

export const NAV_LINKS = [
  { label: 'О нас', href: '#intro' },
  { label: 'Как это работает', href: '#how-it-works' },
  { label: 'Что мы предлагаем', href: '#provide' },
  { label: 'Случаи использования', href: '#use-cases' },
  { label: 'Стек разработки', href: '#dev-stack' },
];

export const OnionLogo = ({ className = "w-8 h-8", showText = false }: { className?: string; showText?: boolean }) => {
  const logoId = showText ? "logoWithText" : "logoIcon";
  
  const LogoIcon = () => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`sphereGradient-${logoId}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00D9FF" />
          <stop offset="50%" stopColor="#9B59B6" />
          <stop offset="100%" stopColor="#FF6B9D" />
        </linearGradient>
        <filter id={`glow-${logoId}`}>
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      {/* Градиентная сфера */}
      <circle cx="50" cy="50" r="42" fill={`url(#sphereGradient-${logoId})`} />
      {/* Орбитальные линии - создают решетчатый узор */}
      <g opacity="0.7" stroke="#000" strokeWidth="3.5" fill="none" strokeLinecap="round">
        {/* Горизонтальные орбиты */}
        <ellipse cx="50" cy="50" rx="35" ry="20" />
        <ellipse cx="50" cy="50" rx="30" ry="15" />
        <ellipse cx="50" cy="50" rx="25" ry="12" />
        {/* Вертикальные орбиты */}
        <ellipse cx="50" cy="50" rx="20" ry="35" />
        <ellipse cx="50" cy="50" rx="15" ry="30" />
        <ellipse cx="50" cy="50" rx="12" ry="25" />
        {/* Диагональные орбиты */}
        <path d="M 20 20 Q 50 50, 80 80" />
        <path d="M 80 20 Q 50 50, 20 80" />
        <path d="M 25 25 Q 50 50, 75 75" />
        <path d="M 75 25 Q 50 50, 25 75" />
      </g>
    </svg>
  );

  if (showText) {
    return (
      <div className="flex items-center gap-3">
        <LogoIcon />
        <span className="text-xl font-bold tracking-tight text-white">Onion AI</span>
      </div>
    );
  }
  
  return <LogoIcon />;
};

export const PartnerLogos = [
  "Google", "Ethereum", "Brave", "Slack", "Alchemy", "Base", "Solana", "GitHub"
];
