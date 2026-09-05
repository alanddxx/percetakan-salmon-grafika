import React from 'react';
import { PHONE_DISPLAY, getWhatsAppUrl } from '../data';

export const CtaBanner: React.FC = () => {
  return (
    <section className="w-full py-12 sm:py-16 bg-gradient-to-r from-[#0037b0] via-[#1d4ed8] to-[#001551] text-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-2 max-w-2xl text-center lg:text-left">
            <span className="px-3 py-1 bg-[#b61722] rounded-full text-[11px] uppercase tracking-wider font-bold text-white w-fit mx-auto lg:mx-0 shadow-sm">
              Konsultasi Layout & Harga Gratis
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl text-white font-extrabold tracking-tight">
              Punya File Desain Sendiri atau Butuh Bantuan Setting Layout Cetak?
            </h3>
            <p className="text-base sm:text-lg text-[#dce1ff] leading-relaxed mt-1">
              Kirimkan file PDF/Corel/AI Anda kepada kami, atau konsultasikan ukuran dan spesifikasi gramatur yang paling efisien untuk menekan budget perusahaan Anda.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
            <a
              className="inline-flex items-center gap-3 px-7 py-4 bg-[#006b2e] hover:bg-[#005021] text-white rounded-xl shadow-xl shadow-black/25 transition-all transform hover:scale-105 active:scale-95 min-h-[48px]"
              href={getWhatsAppUrl('Halo Salmon Grafika, saya punya desain dan ingin minta estimasi harga')}
              rel="noopener noreferrer"
              target="_blank"
              id="cta-fast-track-wa"
            >
              <span className="material-symbols-outlined text-[28px]">chat</span>
              <div className="text-left leading-tight">
                <span className="block text-[11px] uppercase opacity-90 font-medium">WhatsApp Fast Track</span>
                <span className="font-bold text-base sm:text-lg">{PHONE_DISPLAY}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
