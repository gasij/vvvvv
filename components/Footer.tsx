
import React from 'react';
import { OnionLogo } from '../constants';

// Иконки социальных сетей
const TelegramIcon = () => (
  <svg viewBox="0 0 64 64" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 8 C18 8 8 18 8 32 C8 46 18 56 32 56 C46 56 56 46 56 32 C56 18 46 8 32 8 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M24 32 L32 36 L40 28 M24 32 L18 40 L24 32 M24 32 L40 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MediumIcon = () => (
  <svg viewBox="0 0 64 64" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="32" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
    <ellipse cx="40" cy="32" rx="12" ry="8" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M52 32 L56 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 64 64" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 20 L44 44 M44 20 L20 44" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 64 64" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 12 L20 16 L20 28 Q20 40 32 48 Q44 40 44 28 L44 16 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M28 32 L32 36 L36 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 64 64" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="16" width="40" height="32" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M12 20 L32 36 L52 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="pt-32 pb-12 px-6 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-4">
            <div className="mb-6">
              <OnionLogo className="w-8 h-8" showText={true} />
            </div>
            <p className="text-white/40 text-xs mb-1">© 2025 Onion AI. All Rights Reserved.</p>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-sm font-bold mb-6">Навигация</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Как это работает</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Что мы предлагаем</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Случаи использования</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Стек разработки</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-sm font-bold mb-6">Информация</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-white transition-colors">Дорожная карта</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Токеномика</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Документация</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dex Screener</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-sm font-bold mb-6">Социальные сети</h4>
            <div className="flex items-center gap-6 text-white opacity-40 mb-6">
               <span className="cursor-pointer hover:opacity-100 transition-opacity"><TelegramIcon /></span>
               <span className="cursor-pointer hover:opacity-100 transition-opacity"><MediumIcon /></span>
               <span className="cursor-pointer hover:opacity-100 transition-opacity"><XIcon /></span>
               <span className="cursor-pointer hover:opacity-100 transition-opacity"><ShieldIcon /></span>
               <span className="cursor-pointer hover:opacity-100 transition-opacity"><EmailIcon /></span>
            </div>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-white transition-colors">Telegram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">X (бывший Twitter)</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 text-center">
           <div className="w-full h-[300px] glow-bg opacity-30 pointer-events-none -mt-32"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
