import React from 'react';
import { getWhatsAppUrl } from '../data';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Friendly tooltip on desktop */}
      <div className="hidden md:flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-[#eaedff] text-xs font-semibold text-[#131b2e] animate-fade-in">
        <span className="w-2 h-2 rounded-full bg-[#006b2e] animate-pulse"></span>
        <span>Customer Service Online</span>
      </div>

      <a
        href={getWhatsAppUrl('Halo Percetakan Salmon Grafika Utama, saya ingin konsultasi cetak')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp Salmon Grafika"
        className="w-14 h-14 rounded-full bg-[#006b2e] hover:bg-[#005021] text-white flex items-center justify-center shadow-2xl shadow-[#006b2e]/40 transition-transform duration-300 hover:scale-110 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-[#006b2e]/30"
      >
        <span className="material-symbols-outlined text-[32px] group-hover:rotate-12 transition-transform">
          chat
        </span>
      </a>
    </div>
  );
};
