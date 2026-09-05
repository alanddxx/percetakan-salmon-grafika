import React from 'react';
import { SERVICES, getWhatsAppUrl } from '../data';

export const ServicesSection: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-24 bg-[#f2f3ff]" id="layanan">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="flex flex-col gap-1">
            <span className="text-[11px] uppercase tracking-wider text-[#b61722] font-bold">
              Katalog Komprehensif
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#131b2e] font-bold tracking-tight">
              Layanan Cetak Spesialis Salmon Grafika
            </h2>
            <p className="text-sm sm:text-base text-[#434655] max-w-xl mt-1">
              Dari kebutuhan administrasi kantor hingga materi promosi berskala akbar, kami hadirkan solusi terpadu satu atap.
            </p>
          </div>

          <div>
            <a
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#dae2fd] text-[#0037b0] text-xs sm:text-sm font-semibold rounded-lg hover:bg-[#e2e7ff] transition-colors min-h-[44px] shadow-sm"
              href={getWhatsAppUrl('Halo Salmon Grafika, saya ingin minta penawaran harga kolektif katalog layanan')}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>Minta Penawaran Harga Kolektif</span>
              <span className="material-symbols-outlined text-[18px]">request_quote</span>
            </a>
          </div>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group border border-[#eaedff]"
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${service.iconBgClass}`}
                >
                  <span className="material-symbols-outlined text-[28px]">{service.icon}</span>
                </div>
                <span className={`px-2.5 py-0.5 rounded text-[11px] uppercase font-bold tracking-wider ${service.badgeClass}`}>
                  {service.badge}
                </span>
                <h3 className="text-lg font-bold text-[#131b2e] mt-2.5">{service.title}</h3>
                <p className="text-xs sm:text-sm text-[#434655] mt-2 leading-relaxed">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-1.5 text-xs sm:text-sm text-[#434655]">
                  <li className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${service.bulletColor}`}></span>
                    <span>{service.bullet1}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${service.bulletColor}`}></span>
                    <span>{service.bullet2}</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-4 border-t border-[#f2f3ff]">
                <a
                  className={`inline-flex items-center justify-between w-full py-2 font-semibold text-xs sm:text-sm group-hover:underline min-h-[44px] ${service.accentClass}`}
                  href={getWhatsAppUrl(service.waParam)}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Pesan Layanan Ini</span>
                  <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
