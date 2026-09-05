import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data';
import { GalleryCategory } from '../types';

interface GallerySectionProps {
  onOpenLightbox: (image: string, title: string, description: string, badge?: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenLightbox }) => {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>('all');

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <section className="w-full py-16 sm:py-24 bg-[#faf8ff]" id="galeri">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-1 mb-8 sm:mb-10">
          <span className="text-[11px] uppercase tracking-wider text-[#b61722] font-bold">
            Portofolio & Kapasitas Nyata
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#131b2e] font-bold tracking-tight">
            Galeri Hasil Cetak & Mesin Produksi Kami
          </h2>
          <p className="text-sm sm:text-base text-[#434655] mt-1 leading-relaxed">
            Kombinasi mesin offset industri dan tenaga ahli untuk menghasilkan cetakan presisi tanpa kompromi. Klik foto untuk melihat detail resolusi penuh.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-10">
          <button
            className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold min-h-[44px] touch-manipulation transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-[#0037b0] text-white shadow-sm'
                : 'bg-[#eaedff] text-[#434655] hover:text-[#131b2e]'
            }`}
            onClick={() => setActiveFilter('all')}
            type="button"
          >
            Semua Koleksi
          </button>
          <button
            className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold min-h-[44px] touch-manipulation transition-all cursor-pointer ${
              activeFilter === 'hasil'
                ? 'bg-[#0037b0] text-white shadow-sm'
                : 'bg-[#eaedff] text-[#434655] hover:text-[#131b2e]'
            }`}
            onClick={() => setActiveFilter('hasil')}
            type="button"
          >
            Hasil Cetak Eksklusif
          </button>
          <button
            className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold min-h-[44px] touch-manipulation transition-all cursor-pointer ${
              activeFilter === 'ncr'
                ? 'bg-[#0037b0] text-white shadow-sm'
                : 'bg-[#eaedff] text-[#434655] hover:text-[#131b2e]'
            }`}
            onClick={() => setActiveFilter('ncr')}
            type="button"
          >
            Formulir & NCR
          </button>
          <button
            className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold min-h-[44px] touch-manipulation transition-all cursor-pointer ${
              activeFilter === 'mesin'
                ? 'bg-[#0037b0] text-white shadow-sm'
                : 'bg-[#eaedff] text-[#434655] hover:text-[#131b2e]'
            }`}
            onClick={() => setActiveFilter('mesin')}
            type="button"
          >
            Mesin & Workshop
          </button>
        </div>

        {/* 8-item Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group relative cursor-pointer border border-[#eaedff]"
              onClick={() => onOpenLightbox(item.image, item.title, item.description, item.badge)}
            >
              <div className="h-80 w-full overflow-hidden bg-slate-100">
                <img
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src={item.image}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5 text-white">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-[#b7c4ff]">
                    {item.badge}
                  </span>
                  <span className="material-symbols-outlined text-[20px] text-white/80 group-hover:scale-125 transition-transform">
                    zoom_in
                  </span>
                </div>
                <h4 className="text-lg font-bold leading-tight">{item.title}</h4>
                <p className="text-xs text-gray-300 mt-1 leading-snug">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
