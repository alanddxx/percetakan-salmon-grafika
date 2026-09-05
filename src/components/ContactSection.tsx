import React from 'react';
import { MAPS_URL, PHONE_DISPLAY } from '../data';

export const ContactSection: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-24 bg-[#f2f3ff]" id="kontak">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: Detail Kontak & Jam Operasional */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] uppercase tracking-wider text-[#b61722] font-bold">
                Kunjungi Workshop Kami
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#131b2e] font-bold tracking-tight">
                Percetakan Salmon Grafika Utama
              </h2>
              <p className="text-sm sm:text-base text-[#434655] leading-relaxed mt-1">
                Siap menerima konsultasi cetak tatap muka, melihat langsung sampel material kertas, mock-up undangan, dan bukti proofing cetak.
              </p>
            </div>

            <div className="space-y-4">
              {/* Card Alamat */}
              <div className="bg-white p-5 rounded-2xl shadow-sm flex items-start gap-4 border border-[#eaedff]">
                <div className="p-3 bg-[#ffdad7] text-[#930013] rounded-xl mt-0.5 flex-shrink-0">
                  <span className="material-symbols-outlined text-[26px]">storefront</span>
                </div>
                <div className="flex-1">
                  <span className="text-[11px] uppercase tracking-wider text-[#434655] font-bold">
                    Alamat Lengkap Workshop
                  </span>
                  <p className="text-sm sm:text-base text-[#131b2e] font-medium mt-1 leading-snug">
                    Jl. Pramuka Raya No.189B RT 07 RW 02 Kel Rawasari Kec Cempaka putih, Jakarta Pusat, DKI Jakarta 10570
                  </p>
                  <span className="inline-block mt-2.5 text-xs text-[#0037b0] bg-[#eaedff] px-3 py-1 rounded-lg font-semibold">
                    Patokan: Kawasan Percetakan Pramuka Rawasari
                  </span>
                </div>
              </div>

              {/* Card Telepon & WhatsApp */}
              <div className="bg-white p-5 rounded-2xl shadow-sm flex items-start gap-4 border border-[#eaedff]">
                <div className="p-3 bg-[#66ff8e] text-[#005322] rounded-xl mt-0.5 flex-shrink-0">
                  <span className="material-symbols-outlined text-[26px]">support_agent</span>
                </div>
                <div className="flex-1">
                  <span className="text-[11px] uppercase tracking-wider text-[#434655] font-bold">
                    Hubungi Langsung
                  </span>
                  <p className="text-xl sm:text-2xl text-[#0037b0] font-bold mt-1">
                    {PHONE_DISPLAY}
                  </p>
                  <p className="text-xs sm:text-sm text-[#434655] mt-1 leading-relaxed">
                    Melayani chat WhatsApp, panggilan telepon, dan kirim file via email/cloud link.
                  </p>
                </div>
              </div>

              {/* Card Jam Buka */}
              <div className="bg-white p-5 rounded-2xl shadow-sm flex items-start gap-4 border border-[#eaedff]">
                <div className="p-3 bg-[#dce1ff] text-[#001551] rounded-xl mt-0.5 flex-shrink-0">
                  <span className="material-symbols-outlined text-[26px]">schedule</span>
                </div>
                <div className="flex-1">
                  <span className="text-[11px] uppercase tracking-wider text-[#434655] font-bold">
                    Jam Operasional Mesin & Kantor
                  </span>
                  <div className="mt-2 space-y-1.5">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="font-semibold text-[#131b2e]">Senin - Sabtu:</span>
                      <span className="text-[#006b2e] font-bold">09:00 - 17:00 WIB</span>
                    </div>
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="font-semibold text-[#131b2e]">Minggu & Hari Libur:</span>
                      <span className="text-[#b61722] font-bold">Tutup / Janji Temu</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Peta Visual Interaktif & Quick Direction */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="bg-white p-5 rounded-2xl shadow-sm flex flex-col gap-4 h-full border border-[#eaedff]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#0037b0] text-[22px]">map</span>
                  <span className="text-lg sm:text-xl text-[#131b2e] font-bold">Peta Lokasi Workshop</span>
                </div>
                <span className="px-3 py-1 bg-[#006b2e]/10 text-[#006b2e] rounded-full text-[11px] uppercase tracking-wider font-bold">
                  Buka Hari Ini
                </span>
              </div>

              {/* Map Placeholder Container */}
              <div
                className="relative w-full h-80 sm:h-96 rounded-xl overflow-hidden bg-[#e2e7ff] flex items-center justify-center shadow-inner"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCdmtdaZCNCxkVOXG3JoRCqZ3rO2YObIC_xvEVaHMupcg9CmaWGQc1o4poPyf0FcdSBIjhFGMbUpmKmCtTEZA9OQR2updsNGOm2-noYbJLR4JzjBh0n8ZEGR-NeLUwc2D5XjvwB6b06c8F_ViEhy7TsIO8np_be9wrnlHU2TK7d3c_II7GHvt1AX6_BAYiM0kwU3esMl9T7i_bsnZ7iNqyM8rc98E6a9Lgi-JMcNr6VN754SNhN3iZM')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-[#0037b0]/10 backdrop-blur-[1px]"></div>

                {/* Interactive Pin Overlay */}
                <div className="relative z-10 flex flex-col items-center bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl max-w-xs text-center border border-[#eaedff]">
                  <div className="w-11 h-11 rounded-full bg-[#b61722] text-white flex items-center justify-center mb-2 shadow-md animate-bounce">
                    <span className="material-symbols-outlined text-[24px]">location_on</span>
                  </div>
                  <span className="text-base sm:text-lg text-[#0037b0] font-bold">Salmon Grafika</span>
                  <span className="text-xs text-[#434655] mt-1 leading-snug">
                    Jl. Pramuka Raya No.189B, Rawasari
                  </span>
                  <a
                    className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 bg-[#0037b0] hover:bg-[#1d4ed8] text-white rounded-xl text-xs font-semibold shadow-sm transition-colors min-h-[40px]"
                    href={MAPS_URL}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span>Buka Google Maps</span>
                    <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                  </a>
                </div>
              </div>

              {/* Quick Direction Actions */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <span className="text-xs sm:text-sm text-[#434655] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#006b2e] text-[18px]">verified</span>
                  Akses parkir motor & mobil luas
                </span>
                <a
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0037b0] hover:bg-[#1d4ed8] text-white text-xs sm:text-sm font-semibold rounded-xl transition-all shadow-sm min-h-[44px]"
                  href={MAPS_URL}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px]">directions</span>
                  <span>Buka Petunjuk Arah di Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
