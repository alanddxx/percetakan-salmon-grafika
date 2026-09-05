import React, { useState, useEffect } from 'react';
import { LOGO_URL, getWhatsAppUrl, PHONE_DISPLAY } from '../data';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#faf8ff]/95 backdrop-blur-xl border-b border-[#eaedff] shadow-[0_4px_20px_rgba(0,0,0,0.06)]'
            : 'bg-[#faf8ff]/90 backdrop-blur-xl border-b border-[#eaedff] shadow-[0_1px_8px_rgba(0,0,0,0.04)]'
        }`}
      >
        <div className="h-20 max-w-[1280px] mx-auto px-5 lg:px-12 flex items-center justify-between gap-4">
          {/* Brand & Profile */}
          <a
            href="#"
            className="flex items-center gap-4 group focus:outline-none"
            aria-label="Salmon Grafika Utama Beranda"
          >
            <div className="relative flex-shrink-0">
              <img
                alt="Salmon Grafika Utama Logo"
                className="w-10 h-10 rounded-full object-contain bg-white ring-2 ring-[#0037b0]/20 group-hover:ring-[#0037b0] transition-all"
                src={LOGO_URL}
                referrerPolicy="no-referrer"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#b61722] ring-2 ring-[#faf8ff]"></span>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl text-[#0037b0] tracking-tight font-bold group-hover:text-[#1d4ed8] transition-colors">
                  Salmon Grafika Utama
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#b61722] hidden sm:inline-block"></span>
              </div>
              <span className="text-[11px] uppercase tracking-wider font-bold text-[#434655]">
                Percetakan Presisi & Cepat
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav
            aria-label="Navigasi Utama"
            className="hidden lg:flex items-center gap-1 p-1 bg-[#eaedff] rounded-xl"
          >
            <a
              href="#"
              className={`px-4 py-2 text-sm font-semibold transition-all rounded-lg ${
                activeSection === 'beranda'
                  ? 'bg-[#1d4ed8] text-white shadow-sm'
                  : 'text-[#434655] hover:text-[#131b2e]'
              }`}
            >
              Beranda
            </a>
            <a
              href="#tentang-kami"
              className={`px-4 py-2 text-sm font-semibold transition-all rounded-lg ${
                activeSection === 'tentang-kami'
                  ? 'bg-[#1d4ed8] text-white shadow-sm'
                  : 'text-[#434655] hover:text-[#131b2e]'
              }`}
            >
              Tentang Kami
            </a>
            <a
              href="#layanan"
              className={`px-4 py-2 text-sm font-semibold transition-all rounded-lg ${
                activeSection === 'layanan'
                  ? 'bg-[#1d4ed8] text-white shadow-sm'
                  : 'text-[#434655] hover:text-[#131b2e]'
              }`}
            >
              Layanan
            </a>
            <a
              href="#galeri"
              className={`px-4 py-2 text-sm font-semibold transition-all rounded-lg ${
                activeSection === 'galeri'
                  ? 'bg-[#1d4ed8] text-white shadow-sm'
                  : 'text-[#434655] hover:text-[#131b2e]'
              }`}
            >
              Galeri Hasil Cetak
            </a>
            <a
              href="#kontak"
              className={`px-4 py-2 text-sm font-semibold transition-all rounded-lg ${
                activeSection === 'kontak'
                  ? 'bg-[#1d4ed8] text-white shadow-sm'
                  : 'text-[#434655] hover:text-[#131b2e]'
              }`}
            >
              Kontak
            </a>
          </nav>

          {/* Action Buttons & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#006b2e] hover:bg-[#005021] text-white text-sm font-semibold rounded-xl transition-all shadow-[0_4px_14px_0_rgba(0,107,46,0.25)] min-h-[44px] touch-manipulation hover:scale-[1.02] active:scale-[0.98]"
              href={getWhatsAppUrl('Halo Percetakan Salmon Grafika Utama, saya ingin konsultasi cetak')}
              rel="noopener noreferrer"
              target="_blank"
              title="Konsultasi WhatsApp"
              id="header-wa-btn"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span className="hidden sm:inline font-semibold">Konsultasi Cepat</span>
            </a>

            {/* Hamburger Button (Mobile / Tablet) */}
            <button
              aria-expanded={mobileMenuOpen}
              aria-label="Buka Menu Navigasi"
              className="lg:hidden flex items-center justify-center w-11 h-11 rounded-xl text-[#131b2e] bg-[#eaedff] hover:bg-[#e2e7ff] focus:outline-none focus:ring-2 focus:ring-[#0037b0] min-h-[44px] min-w-[44px] transition-colors"
              onClick={toggleMobileMenu}
              type="button"
              id="mobile-menu-btn"
            >
              <span className="material-symbols-outlined text-[28px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div
        id="mobile-menu-drawer"
        className={`fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl border-l border-[#eaedff] z-50 flex flex-col justify-between p-6 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-[#eaedff]">
            <div className="flex items-center gap-2.5">
              <img
                alt="Salmon Grafika"
                className="w-9 h-9 rounded-full object-contain bg-white ring-1 ring-[#0037b0]/30"
                src={LOGO_URL}
                referrerPolicy="no-referrer"
              />
              <span className="text-lg font-bold text-[#0037b0]">Menu Navigasi</span>
            </div>
            <button
              aria-label="Tutup Menu"
              className="w-10 h-10 flex items-center justify-center rounded-lg text-[#434655] hover:bg-[#eaedff] focus:outline-none min-h-[44px] min-w-[44px]"
              onClick={closeMobileMenu}
              type="button"
            >
              <span className="material-symbols-outlined text-[24px]">close</span>
            </button>
          </div>

          <nav className="flex flex-col gap-2 mt-6">
            <a
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-[#131b2e] hover:bg-[#f2f3ff] transition-colors min-h-[44px]"
              href="#"
              onClick={closeMobileMenu}
            >
              <span className="material-symbols-outlined text-[#0037b0] text-[22px]">home</span>
              <span>Beranda</span>
            </a>
            <a
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-[#131b2e] hover:bg-[#f2f3ff] transition-colors min-h-[44px]"
              href="#tentang-kami"
              onClick={closeMobileMenu}
            >
              <span className="material-symbols-outlined text-[#0037b0] text-[22px]">info</span>
              <span>Tentang Kami</span>
            </a>
            <a
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-[#131b2e] hover:bg-[#f2f3ff] transition-colors min-h-[44px]"
              href="#layanan"
              onClick={closeMobileMenu}
            >
              <span className="material-symbols-outlined text-[#0037b0] text-[22px]">print</span>
              <span>Layanan Cetak</span>
            </a>
            <a
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-[#131b2e] hover:bg-[#f2f3ff] transition-colors min-h-[44px]"
              href="#galeri"
              onClick={closeMobileMenu}
            >
              <span className="material-symbols-outlined text-[#0037b0] text-[22px]">photo_library</span>
              <span>Galeri Hasil & Mesin</span>
            </a>
            <a
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-[#131b2e] hover:bg-[#f2f3ff] transition-colors min-h-[44px]"
              href="#kontak"
              onClick={closeMobileMenu}
            >
              <span className="material-symbols-outlined text-[#0037b0] text-[22px]">location_on</span>
              <span>Lokasi & Kontak</span>
            </a>
          </nav>
        </div>

        <div className="flex flex-col gap-3 pt-6 border-t border-[#eaedff]">
          <a
            className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#006b2e] hover:bg-[#005021] text-white text-sm font-bold shadow-md transition-colors min-h-[44px]"
            href={getWhatsAppUrl('Halo Percetakan Salmon Grafika Utama, saya ingin konsultasi cetak')}
            rel="noopener noreferrer"
            target="_blank"
            onClick={closeMobileMenu}
          >
            <span className="material-symbols-outlined text-[22px]">chat</span>
            <span>Chat WhatsApp Resmi</span>
          </a>
          <a
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#eaedff] hover:bg-[#e2e7ff] text-[#0037b0] text-xs font-semibold transition-colors min-h-[44px]"
            href="tel:089671279047"
          >
            <span className="material-symbols-outlined text-[18px]">call</span>
            <span>Telepon: {PHONE_DISPLAY}</span>
          </a>
        </div>
      </div>

      {/* Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-[#131b2e]/50 backdrop-blur-sm z-40 transition-opacity"
          onClick={closeMobileMenu}
        />
      )}
    </>
  );
};
