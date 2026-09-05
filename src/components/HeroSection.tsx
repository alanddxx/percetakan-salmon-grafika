import React from 'react';
import { getWhatsAppUrl } from '../data';

interface HeroSectionProps {
  onOpenLightbox: (image: string, title: string, description: string, badge?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenLightbox }) => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#e2e7ff]/40 via-[#faf8ff] to-[#faf8ff] pt-6 sm:pt-8 pb-12 sm:pb-16">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left: Text & Action */}
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#dae2fd]/80 text-[#0037b0] text-[11px] uppercase tracking-wider font-bold rounded-full w-fit shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#b61722] animate-pulse"></span>
              <span>Percetakan Offset & Digital Presisi • Jakarta Pusat</span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-sm sm:text-base text-[#b61722] uppercase tracking-wider font-bold">
                Percetakan Salmon Grafika Utama
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-[54px] lg:leading-[1.15] text-[#131b2e] tracking-tight font-extrabold">
                Solusi Kebutuhan Cetak{' '}
                <span className="text-[#0037b0]">
                  Cepat, Rapi,
                </span>{' '}
                & Berkualitas Tinggi.
              </h1>
            </div>

            <p className="text-base sm:text-lg text-[#434655] max-w-2xl leading-relaxed">
              Melayani kebutuhan percetakan komersial, perkantoran, instansi, hingga event dengan mesin offset mutakhir, pisau potong presisi otomatis, dan komitmen mutu tanpa kompromi.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#006b2e] hover:bg-[#005021] text-white font-semibold rounded-xl shadow-lg shadow-[#006b2e]/25 transition-all transform hover:-translate-y-0.5 min-h-[48px] touch-manipulation"
                href={getWhatsAppUrl('Halo Percetakan Salmon Grafika Utama, saya ingin konsultasi kebutuhan cetak')}
                rel="noopener noreferrer"
                target="_blank"
                id="hero-wa-cta"
              >
                <span className="material-symbols-outlined text-[24px]">chat</span>
                <div className="text-left leading-tight">
                  <span className="block text-[11px] font-normal opacity-90">Respon Cepat WhatsApp</span>
                  <span className="font-bold text-sm sm:text-base">Konsultasi via WhatsApp</span>
                </div>
              </a>

              <a
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#e2e7ff] hover:bg-[#dae2fd] text-[#0037b0] text-sm font-bold rounded-xl transition-all min-h-[48px] touch-manipulation"
                href="#layanan"
              >
                <span className="material-symbols-outlined text-[20px]">menu_book</span>
                <span>Lihat Katalog Layanan</span>
              </a>
            </div>

            {/* Highlight Metric Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              <div className="bg-white p-3.5 rounded-xl shadow-sm flex flex-col gap-1 border border-[#eaedff]">
                <span className="material-symbols-outlined text-[#0037b0] text-[22px]">bolt</span>
                <span className="text-lg sm:text-xl text-[#131b2e] font-bold">24 Jam</span>
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#434655]">
                  Cetak Cepat Tersedia
                </span>
              </div>
              <div className="bg-white p-3.5 rounded-xl shadow-sm flex flex-col gap-1 border border-[#eaedff]">
                <span className="material-symbols-outlined text-[#b61722] text-[22px]">local_shipping</span>
                <span className="text-lg sm:text-xl text-[#131b2e] font-bold">Jabodetabek</span>
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#434655]">
                  Kurir & Ekspedisi
                </span>
              </div>
              <div className="bg-white p-3.5 rounded-xl shadow-sm flex flex-col gap-1 border border-[#eaedff]">
                <span className="material-symbols-outlined text-[#005021] text-[22px]">palette</span>
                <span className="text-lg sm:text-xl text-[#131b2e] font-bold">CMYK 100%</span>
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#434655]">
                  Akurasi Warna Tajam
                </span>
              </div>
              <div className="bg-white p-3.5 rounded-xl shadow-sm flex flex-col gap-1 border border-[#eaedff]">
                <span className="material-symbols-outlined text-[#1d4ed8] text-[22px]">verified</span>
                <span className="text-lg sm:text-xl text-[#131b2e] font-bold">Garansi</span>
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#434655]">
                  Mutu Hasil Cetak
                </span>
              </div>
            </div>
          </div>

          {/* Right: Dynamic Showcase Cards */}
          <div className="lg:col-span-5 relative flex flex-col gap-4">
            {/* Top Showcase Image */}
            <div className="relative bg-white p-1.5 rounded-2xl shadow-xl overflow-hidden group">
              <div
                className="relative h-64 sm:h-72 w-full overflow-hidden rounded-xl cursor-pointer"
                onClick={() =>
                  onOpenLightbox(
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuDHv6t6px8Kh8ojkX72pMTcLLzIF6h6rpXJEsI4Z2EMk9Upe7XO6VOzFadLbonddV7oqgid11veBiB2ex9GaxKz6HVMROEv8grXIlQ-KdG24diz3hrJtrIqDkvdfijB_YC9TCSQXIrC6PHyOG2W83KMWl-11a_lnv0f5HQv9rqY7kX-xhGhVUja1u8GV1PK-RAGtIGkShOsgQIeccMrSuG6ThKfeVqT0N2qmwd3HCp5-Oy9EWdFvduTdvSCjl0Ba47Isw',
                    'Undangan Eksklusif & Hardcover',
                    'Teknik foil emas, emboss timbul, dan laminasi doff presisi tinggi untuk pesta & acara formal.',
                    'Finishing Mewah'
                  )
                }
              >
                <img
                  alt="Undangan Pernikahan Mewah dan Hasil Cetakan Presisi"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHv6t6px8Kh8ojkX72pMTcLLzIF6h6rpXJEsI4Z2EMk9Upe7XO6VOzFadLbonddV7oqgid11veBiB2ex9GaxKz6HVMROEv8grXIlQ-KdG24diz3hrJtrIqDkvdfijB_YC9TCSQXIrC6PHyOG2W83KMWl-11a_lnv0f5HQv9rqY7kX-xhGhVUja1u8GV1PK-RAGtIGkShOsgQIeccMrSuG6ThKfeVqT0N2qmwd3HCp5-Oy9EWdFvduTdvSCjl0Ba47Isw"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex items-end p-4 sm:p-5">
                  <div>
                    <span className="px-2 py-0.5 bg-[#b61722] text-white rounded text-[11px] uppercase tracking-wider font-bold">
                      Finishing Mewah
                    </span>
                    <p className="text-xl sm:text-2xl text-white font-bold mt-1">
                      Undangan Eksklusif & Hardcover
                    </p>
                    <p className="text-xs sm:text-sm text-gray-200">
                      Teknik foil emas, emboss, dan laminasi doff presisi
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Asymmetric Subcard */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                className="bg-white p-1.5 rounded-2xl shadow-md overflow-hidden group cursor-pointer"
                onClick={() =>
                  onOpenLightbox(
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuDmu-IdRQe3-BTel0N7nrz_40W0JJ3J6dxpT3WYLB7fiMliWLyxAj4etV5DRFAnMGkZSd0sv4f6f73G3Yf2-JeV1KNPjJIp9PgfCrK9rKa9_U_FoarQqIVWq2g48Um-LE04TfvfeULAbX7KNcnIa39bnCK5Z96dAJmBJfgTLWeS8GGUliogfUGtZkw9yJ6W_pxpUQX0fHMxRQXYwJvcI2IW4oik6hLHtB9cQcq6JPOy-01VyOf8hSR1BJNkvwHMuAPUgA',
                    'Mesin Cetak Offset Running',
                    'Operasional mesin cetak offset continuous kecepatan tinggi.',
                    'Mesin Cetak Offset'
                  )
                }
              >
                <div className="h-32 w-full overflow-hidden rounded-lg relative">
                  <img
                    alt="Mesin Cetak Offset Running"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmu-IdRQe3-BTel0N7nrz_40W0JJ3J6dxpT3WYLB7fiMliWLyxAj4etV5DRFAnMGkZSd0sv4f6f73G3Yf2-JeV1KNPjJIp9PgfCrK9rKa9_U_FoarQqIVWq2g48Um-LE04TfvfeULAbX7KNcnIa39bnCK5Z96dAJmBJfgTLWeS8GGUliogfUGtZkw9yJ6W_pxpUQX0fHMxRQXYwJvcI2IW4oik6hLHtB9cQcq6JPOy-01VyOf8hSR1BJNkvwHMuAPUgA"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131b2e]/80 to-transparent flex items-end p-2.5">
                    <span className="text-white text-xs font-semibold">Mesin Cetak Offset</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#1d4ed8] text-white p-4 rounded-2xl flex flex-col justify-between shadow-md">
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-bold text-[#dce1ff] block">
                    Kapasitas Besar
                  </span>
                  <p className="text-lg sm:text-xl font-bold mt-1">Hingga 50.000+ Rim / Bulan</p>
                </div>
                <a
                  className="inline-flex items-center gap-1 text-[#dce1ff] hover:text-white text-xs font-semibold transition-colors mt-3"
                  href={getWhatsAppUrl('Halo Salmon Grafika, saya ingin tanya kapasitas cetak workshop')}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Hubungi Workshop</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
