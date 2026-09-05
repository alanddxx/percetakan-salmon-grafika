import React from 'react';
import { getWhatsAppUrl } from '../data';

interface AboutSectionProps {
  onOpenLightbox: (image: string, title: string, description: string, badge?: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenLightbox }) => {
  return (
    <section className="w-full py-16 sm:py-24 bg-[#faf8ff]" id="tentang-kami">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Image mosaic with machine focus */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <div
                className="rounded-2xl overflow-hidden shadow-lg bg-white cursor-pointer group border border-[#eaedff]"
                onClick={() =>
                  onOpenLightbox(
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuBjOFW0-ZyzZLMrDWqMa8x1USRY3oXawW8Mkoh98svEM_P1olk8_9plG3pURw-jK_CkT-aKkRBUQquRgLHsGG3qSUI3jQwVRbYi3MNOwmggiA6cUKQHNR06tTHHCoNbGKJCtLLVdxHA-WFrP7K-k0qS8IYux98RkX5VQltbcGqu6F8O-3NgHUASeaGzKYpZ_6GxOP0wf1Kn9NG1EKbSDv0w5V64Oux_C9mSnq6IJdQa_F9hxHVqnBnsprp3cHSsTObPlg',
                    'Mesin Potong Kertas Digital Hualong',
                    'Teknologi pemotongan presisi tinggi otomatis untuk menjamin hasil potongan rapi tanpa serabut.',
                    'Teknologi Cutting'
                  )
                }
              >
                <div className="h-64 sm:h-72 w-full overflow-hidden">
                  <img
                    alt="Mesin Pemotong Kertas Presisi Otomatis Hualong"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjOFW0-ZyzZLMrDWqMa8x1USRY3oXawW8Mkoh98svEM_P1olk8_9plG3pURw-jK_CkT-aKkRBUQquRgLHsGG3qSUI3jQwVRbYi3MNOwmggiA6cUKQHNR06tTHHCoNbGKJCtLLVdxHA-WFrP7K-k0qS8IYux98RkX5VQltbcGqu6F8O-3NgHUASeaGzKYpZ_6GxOP0wf1Kn9NG1EKbSDv0w5V64Oux_C9mSnq6IJdQa_F9hxHVqnBnsprp3cHSsTObPlg"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-3.5">
                  <span className="text-[11px] uppercase tracking-wider text-[#b61722] block font-bold">
                    Teknologi Cutting
                  </span>
                  <span className="text-xs sm:text-sm text-[#131b2e] font-semibold">
                    Mesin Potong Kertas Digital Hualong
                  </span>
                </div>
              </div>

              <div className="bg-[#e2e7ff] p-4 rounded-2xl flex items-center gap-3 border border-[#dae2fd]">
                <span className="material-symbols-outlined text-[#0037b0] text-[32px]">speed</span>
                <div>
                  <span className="text-lg sm:text-xl text-[#0037b0] font-bold block">100% Akurat</span>
                  <p className="text-xs text-[#434655]">Toleransi potong mikro &lt; 0.5mm</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-0 sm:pt-6">
              <div className="bg-[#ffdad7] text-[#930013] p-4 rounded-2xl shadow-sm border border-[#ffb3ad]">
                <span className="text-xl sm:text-2xl font-bold block">10+ Tahun</span>
                <span className="text-xs sm:text-sm font-medium">
                  Melayani percetakan instansi BUMN, swasta, dan ritel.
                </span>
              </div>

              <div
                className="rounded-2xl overflow-hidden shadow-lg bg-white cursor-pointer group border border-[#eaedff]"
                onClick={() =>
                  onOpenLightbox(
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuC7JQu4NDiaQ1LYRm2ky9tZW7KhwEWc4QAz4KVo_8BRjgDqDNFoEf0KVR5K7qDltpRh8tjVMhxza1rfO2NrvafUkbJz8ULIG9Pt0MrE48Et9ENYe6RhKQDVkvU60vMs6todnL3To60Hsx-vBASmEuL6tTEXISM0GuXfttzTR2O4wRXnH_2Zfzh8HbW7Yl9lmyYPmXUThYwvDvJWl_oR4b8ANpqNStlVFRFcmgzIFQ6kJhqdRO_7TWi5LJY0oA9EEIbSYg',
                    'Pemotongan Presisi Ribuan Lembar',
                    'Proses pemotongan massal formulir, undangan, dan dokumen bisnis berkapasitas besar.',
                    'Produksi Berkapasitas Besar'
                  )
                }
              >
                <div className="h-64 sm:h-72 w-full overflow-hidden">
                  <img
                    alt="Proses Pemotongan Massal Formulir dan Undangan"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7JQu4NDiaQ1LYRm2ky9tZW7KhwEWc4QAz4KVo_8BRjgDqDNFoEf0KVR5K7qDltpRh8tjVMhxza1rfO2NrvafUkbJz8ULIG9Pt0MrE48Et9ENYe6RhKQDVkvU60vMs6todnL3To60Hsx-vBASmEuL6tTEXISM0GuXfttzTR2O4wRXnH_2Zfzh8HbW7Yl9lmyYPmXUThYwvDvJWl_oR4b8ANpqNStlVFRFcmgzIFQ6kJhqdRO_7TWi5LJY0oA9EEIbSYg"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-3.5">
                  <span className="text-[11px] uppercase tracking-wider text-[#0037b0] block font-bold">
                    Produksi Berkapasitas Besar
                  </span>
                  <span className="text-xs sm:text-sm text-[#131b2e] font-semibold">
                    Pemotongan Presisi Ribuan Lembar
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content Narrative */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-[11px] uppercase tracking-wider text-[#b61722] font-bold">
                Mengenal Lebih Dekat
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#131b2e] font-bold tracking-tight">
                Percetakan Salmon Grafika Utama
              </h2>
              <p className="text-base sm:text-lg text-[#434655] leading-relaxed mt-1">
                Berpusat di Rawasari, Cempaka Putih, Jakarta Pusat, kami merupakan mitra percetakan terpercaya yang menghadirkan perpaduan antara keahlian mekanik offset konvensional dan fleksibilitas digital printing modern, termasuk dukungan percetakan spesifik dan prototype.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-[#eaedff]">
                <div className="p-2.5 bg-[#dce1ff] text-[#001551] rounded-lg mt-0.5 flex-shrink-0">
                  <span className="material-symbols-outlined text-[24px]">precision_manufacturing</span>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg text-[#131b2e] font-bold">
                    Mesin Pemotong Digital & Offset Stabil
                  </h3>
                  <p className="text-xs sm:text-sm text-[#434655] mt-1 leading-relaxed">
                    Didukung mesin cetak handal dan mesin potong otomatis berdaya potong tinggi untuk menjamin tepian kertas rata sempurna tanpa serabut.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-[#eaedff]">
                <div className="p-2.5 bg-[#ffdad7] text-[#930013] rounded-lg mt-0.5 flex-shrink-0">
                  <span className="material-symbols-outlined text-[24px]">ink_highlighter</span>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg text-[#131b2e] font-bold">
                    Tinta Khusus Anti-Luntur & Kerapatan Warna
                  </h3>
                  <p className="text-xs sm:text-sm text-[#434655] mt-1 leading-relaxed">
                    Formulasi tinta offset dan toner berkualitas industri yang tahan lama, tajam, serta tidak mudah blobor saat terkena kelembapan.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-[#eaedff]">
                <div className="p-2.5 bg-[#66ff8e] text-[#005322] rounded-lg mt-0.5 flex-shrink-0">
                  <span className="material-symbols-outlined text-[24px]">local_shipping</span>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg text-[#131b2e] font-bold">
                    Kemudahan Antar & Distribusi Cepat
                  </h3>
                  <p className="text-xs sm:text-sm text-[#434655] mt-1 leading-relaxed">
                    Lokasi strategis di Jl. Pramuka Raya memudahkan akses penjemputan barang maupun pengiriman langsung instan ke kantor Anda se-Jabodetabek.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <a
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0037b0] hover:bg-[#1d4ed8] text-white text-sm font-semibold rounded-xl shadow-md transition-all min-h-[44px] hover:scale-[1.02] active:scale-[0.98]"
                href={getWhatsAppUrl('Halo Salmon Grafika, saya ingin tanya spesifikasi cetak')}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>Konsultasikan Kebutuhan Proyek Anda</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
