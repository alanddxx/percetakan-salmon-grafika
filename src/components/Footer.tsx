import React from 'react';
import { LOGO_URL, PHONE_DISPLAY, getWhatsAppUrl } from '../data';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#131b2e] text-white pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-gray-800">
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                alt="Salmon Grafika Utama"
                className="w-10 h-10 rounded-full object-contain bg-white ring-2 ring-[#0037b0]"
                src={LOGO_URL}
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="text-xl font-bold tracking-tight text-white block">
                  Salmon Grafika Utama
                </span>
                <span className="text-[11px] uppercase tracking-wider text-gray-400 font-bold block">
                  Percetakan Presisi & Cepat
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Workshop spesialis percetakan offset dan digital printing berkapasitas besar di Jakarta Pusat. Solusi terpercaya untuk kebutuhan formulir bisnis, kemasan, promosi, dan undangan eksklusif.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#006b2e] flex items-center justify-center transition-colors text-white min-h-[40px] min-w-[40px]"
                href={getWhatsAppUrl('Halo Salmon Grafika')}
                rel="noopener noreferrer"
                target="_blank"
                title="WhatsApp Resmi"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
              </a>
              <a
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#0037b0] flex items-center justify-center transition-colors text-white min-h-[40px] min-w-[40px]"
                href="tel:089671279047"
                title="Telepon"
              >
                <span className="material-symbols-outlined text-[20px]">call</span>
              </a>
              <a
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#b61722] flex items-center justify-center transition-colors text-white min-h-[40px] min-w-[40px]"
                href="#kontak"
                title="Peta Lokasi"
              >
                <span className="material-symbols-outlined text-[20px]">location_on</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="text-xs uppercase tracking-wider font-bold text-[#b7c4ff]">
              Navigasi Cepat
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Beranda
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#tentang-kami">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#layanan">
                  Layanan Cetak
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#galeri">
                  Galeri & Mesin
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#kontak">
                  Lokasi Workshop
                </a>
              </li>
            </ul>
          </div>

          {/* Layanan Utama */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="text-xs uppercase tracking-wider font-bold text-[#b7c4ff]">
              Layanan Unggulan
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li>
                <a className="hover:text-white transition-colors" href="#layanan">
                  Form NCR & Invoice Kas
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#layanan">
                  Continuous Form Dot-Matrix
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#layanan">
                  Undangan Hardcover & Foil
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#layanan">
                  Brosur & Company Profile
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#layanan">
                  Tas Spunbond & Sablon DTF
                </a>
              </li>
            </ul>
          </div>

          {/* Lokasi & CS */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="text-xs uppercase tracking-wider font-bold text-[#b7c4ff]">
              Workshop Jakarta
            </span>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Jl. Pramuka Raya No.189B, Rawasari, Cempaka Putih, Jakarta Pusat 10570
            </p>
            <div className="pt-2 flex flex-col gap-1 text-xs sm:text-sm">
              <span className="text-gray-400">
                Telepon / WA: <strong className="text-white">{PHONE_DISPLAY}</strong>
              </span>
              <span className="text-gray-400">
                Jam Kerja: <span className="text-[#66ff8e]">09:00 - 17:00 WIB</span>
              </span>
            </div>
          </div>
        </div>

        {/* Machine Technologies & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-gray-400 font-semibold">Teknologi Mesin:</span>
            <span className="px-2 py-0.5 bg-gray-800 rounded text-gray-300">Offset Heidelberg</span>
            <span className="px-2 py-0.5 bg-gray-800 rounded text-gray-300">Mesin Potong Hualong</span>
            <span className="px-2 py-0.5 bg-gray-800 rounded text-gray-300">DTF 8 Head</span>
            <span className="px-2 py-0.5 bg-gray-800 rounded text-gray-300">Plating CTP</span>
            <span className="px-2 py-0.5 bg-gray-800 rounded text-gray-300">Mesin Pond & Emboss</span>
          </div>

          <p className="text-center md:text-right">
            &copy; 2026 Percetakan Salmon Grafika Utama. Hak Cipta Dilindungi Undang-Undang.
          </p>
        </div>
      </div>
    </footer>
  );
};
