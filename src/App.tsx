import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CoverageBar } from './components/CoverageBar';
import { PartnersSection } from './components/PartnersSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { CtaBanner } from './components/CtaBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LightboxData } from './types';

export function App() {
  const [activeSection, setActiveSection] = useState('beranda');
  const [lightbox, setLightbox] = useState<LightboxData>({
    isOpen: false,
    image: '',
    title: '',
    description: '',
    badge: ''
  });

  const handleOpenLightbox = (image: string, title: string, description: string, badge?: string) => {
    setLightbox({
      isOpen: true,
      image,
      title,
      description,
      badge
    });
  };

  const handleCloseLightbox = () => {
    setLightbox(prev => ({ ...prev, isOpen: false }));
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['tentang-kami', 'layanan', 'galeri', 'kontak'];
      const scrollPos = window.scrollY + 200;

      if (window.scrollY < 300) {
        setActiveSection('beranda');
        return;
      }

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8ff] text-[#131b2e]">
      {/* Sticky Header */}
      <Header activeSection={activeSection} />

      {/* Main Content Area (padding-top to compensate for sticky header) */}
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <HeroSection onOpenLightbox={handleOpenLightbox} />

        {/* Coverage Bar */}
        <CoverageBar />

        {/* About Section */}
        <AboutSection onOpenLightbox={handleOpenLightbox} />

        {/* Services Section */}
        <ServicesSection />

        {/* Partners Marquee Section (Dark Mode) */}
        <PartnersSection />

        {/* Gallery Section with Category Filter */}
        <GallerySection onOpenLightbox={handleOpenLightbox} />

        {/* CTA Banner */}
        <CtaBanner />

        {/* Contact & Map Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Lightbox Modal */}
      <LightboxModal data={lightbox} onClose={handleCloseLightbox} />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
