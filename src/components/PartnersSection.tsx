import React from 'react';

const PARTNERS = [
  { 
    name: 'PT Indoguna Utama', 
    logo: '/images.png',
    fallback: 'https://placehold.co/400x160/ffffff/131b2e?text=PT+Indoguna+Utama&font=Montserrat'
  },
  { 
    name: 'XXI Group', 
    logo: '/xxi.jpg',
    fallback: 'https://placehold.co/400x160/ffffff/b61722?text=Cinema+XXI&font=Montserrat'
  }
];

export const PartnersSection: React.FC = () => {
  // Gandakan array lebih banyak (12 kali) agar efek scroll tak terbatas tetap mulus walau hanya 2 logo
  const scrollItems = Array(12).fill(PARTNERS).flat();

  return (
    <section className="w-full py-16 sm:py-20 bg-[#0b101e] overflow-hidden border-y border-gray-800">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-12 mb-10 text-center flex flex-col items-center">
        <span className="px-3 py-1 bg-gray-800 rounded-full text-[11px] uppercase tracking-wider font-bold text-gray-300 w-fit mb-3 shadow-sm border border-gray-700">
          Klien & Mitra Strategis
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Dipercaya oleh Perusahaan Terkemuka</h3>
        <p className="text-sm sm:text-base text-gray-400 mt-2 max-w-2xl leading-relaxed">
          Berpengalaman memenuhi standar cetak korporat skala nasional dengan kualitas dan ketepatan waktu yang dapat diandalkan.
        </p>
      </div>

      <div className="relative flex overflow-hidden w-full group py-6">
        {/* Overlay gradient untuk efek fade di tepi kanan dan kiri */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-40 bg-gradient-to-r from-[#0b101e] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-40 bg-gradient-to-l from-[#0b101e] to-transparent z-10 pointer-events-none"></div>

        {/* Kontainer scrolling dengan animasi kustom */}
        <div className="flex animate-[scroll-left_40s_linear_infinite] group-hover:[animation-play-state:paused] w-max items-center">
          {scrollItems.map((partner, idx) => (
            <div key={idx} className="flex-shrink-0 px-8 sm:px-14 flex items-center justify-center">
              <div className="flex items-center justify-center h-20 sm:h-24 w-40 sm:w-48 group/logo">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = partner.fallback;
                  }}
                  className="max-h-full max-w-full object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] transition-all duration-300 scale-100 hover:scale-110 cursor-pointer"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

