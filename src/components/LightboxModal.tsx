import React, { useEffect } from 'react';
import { LightboxData } from '../types';
import { getWhatsAppUrl } from '../data';

interface LightboxModalProps {
  data: LightboxData;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ data, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (data.isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [data.isOpen, onClose]);

  if (!data.isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
    >
      <div
        className="relative max-w-4xl w-full bg-[#131b2e] rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with close button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/30">
          <div className="flex items-center gap-2">
            {data.badge && (
              <span className="px-2.5 py-0.5 rounded text-[11px] uppercase font-bold tracking-wider bg-[#b61722] text-white">
                {data.badge}
              </span>
            )}
            <h3 id="lightbox-title" className="text-base sm:text-lg font-bold text-white truncate max-w-md">
              {data.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#0037b0]"
            aria-label="Tutup"
            type="button"
          >
            <span className="material-symbols-outlined text-[22px]">close</span>
          </button>
        </div>

        {/* High Resolution Image View */}
        <div className="relative bg-black flex items-center justify-center max-h-[65vh] overflow-hidden">
          <img
            src={data.image}
            alt={data.title}
            className="max-h-[65vh] w-auto max-w-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Footer info & WhatsApp Action */}
        <div className="p-6 bg-[#131b2e] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-left">
            <p className="text-sm text-gray-300 leading-relaxed max-w-xl">
              {data.description}
            </p>
          </div>
          <a
            href={getWhatsAppUrl(`Halo Percetakan Salmon Grafika, saya tertarik dengan "${data.title}". Boleh minta rincian harga dan spesifikasinya?`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#006b2e] hover:bg-[#005021] text-white font-semibold text-sm transition-all shadow-md flex-shrink-0 min-h-[44px] hover:scale-105 active:scale-95"
          >
            <span className="material-symbols-outlined text-[20px]">chat</span>
            <span>Tanya Pesan via WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
