import React from 'react';

export const CoverageBar: React.FC = () => {
  return (
    <section className="w-full bg-[#eaedff] py-4 border-y border-[#e2e7ff]">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-center md:text-left">
          <span className="material-symbols-outlined text-[#b61722] text-[24px]">location_searching</span>
          <div>
            <span className="text-base sm:text-lg text-[#131b2e] font-semibold block">
              Jangkauan Layanan Cepat
            </span>
            <span className="text-xs sm:text-sm text-[#434655]">
              Melayani pemesanan online & offline dengan pengiriman cepat ke seluruh wilayah
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="px-4 py-1.5 bg-[#0037b0] text-white rounded-full text-xs font-bold shadow-sm">
            Rawasari & Cempaka Putih
          </span>
          <span className="px-4 py-1.5 bg-white text-[#131b2e] rounded-full text-xs font-semibold shadow-sm border border-[#eaedff]">
            Jakarta Timur
          </span>
          <span className="px-4 py-1.5 bg-white text-[#131b2e] rounded-full text-xs font-semibold shadow-sm border border-[#eaedff]">
            Seluruh Jakarta & Bodetabek
          </span>
        </div>
      </div>
    </section>
  );
};
