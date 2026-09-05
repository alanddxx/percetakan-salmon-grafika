import { GalleryItem, ServiceItem } from './types';

export const WHATSAPP_NUMBER = '6289671279047';
export const PHONE_DISPLAY = '0896-7127-9047';

export function getWhatsAppUrl(customMessage?: string): string {
  const text = customMessage || 'Halo Percetakan Salmon Grafika Utama, saya ingin konsultasi cetak';
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const MAPS_URL = 'https://maps.google.com/?q=Jl.+Pramuka+Raya+No.189B+Rawasari+Cempaka+Putih+Jakarta+Pusat';

export const LOGO_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuANLe56fETxkAzdh20gw865hT3K-RvdrCeqcG2dYx6S6d2sh9UMBQ9p7HCwMhDVtT539OfG_58giqS7kWpWKnrqFIKb6agRQ-_r7wjQbDrSxcB2x0r68PY2AJ9ETsLHcDJo5Ygytc7Kp4Loyi5YaAWL3Nw5z3uc8D55PzaQzqV1wFKtC3P4N9a8hb26uFavrTdFvy6uOlRWUEhKpUl27bE2CxvlR7uIokZUmQR-1F4UN-NC9gkmq1Oxm-Rqv7KT_cwQTg';

export const SERVICES: ServiceItem[] = [
  {
    id: 'ncr-forms',
    icon: 'receipt_long',
    badge: 'Administrasi Bisnis',
    badgeClass: 'bg-primary/10 text-primary',
    iconBgClass: 'bg-primary-fixed text-on-primary-fixed group-hover:bg-primary group-hover:text-on-primary',
    title: 'Cetak Offset & Form NCR',
    description: 'Kwitansi, invoice, surat jalan, formulir kas ber-nomorator rapi tembus 2 hingga 5 rangkap dengan lem khusus anti lepas.',
    bullet1: 'Kertas NCR Carbonless 2-5 Ply',
    bullet2: 'Finishing Numerator & Porporasi',
    accentClass: 'text-primary',
    bulletColor: 'bg-primary',
    waParam: 'Halo Percetakan Salmon Grafika, saya ingin pesan Cetak Formulir NCR dan Invoice'
  },
  {
    id: 'flyer-brochure',
    icon: 'newspaper',
    badge: 'Marketing & Sales',
    badgeClass: 'bg-secondary/10 text-secondary',
    iconBgClass: 'bg-secondary-fixed text-on-secondary-fixed-variant group-hover:bg-secondary group-hover:text-on-secondary',
    title: 'Brosur & Flyer Promosi',
    description: 'Pilihan kertas Art Paper 120g - 150g dan Matte Paper beresolusi tinggi dengan opsi lipat 2 (bi-fold) atau lipat 3 (tri-fold).',
    bullet1: 'Warna Tajam CMYK High Precision',
    bullet2: 'Opsi Lipatan Otomatis Mesin',
    accentClass: 'text-secondary',
    bulletColor: 'bg-secondary',
    waParam: 'Halo Percetakan Salmon Grafika, saya ingin pesan Cetak Brosur dan Flyer'
  },
  {
    id: 'company-profile',
    icon: 'book_2',
    badge: 'Corporate Branding',
    badgeClass: 'bg-primary/10 text-primary',
    iconBgClass: 'bg-surface-container-high text-primary group-hover:bg-primary-container group-hover:text-on-primary',
    title: 'Company Profile & Katalog',
    description: 'Buku profil perusahaan elegan, booklet pameran, katalog produk dengan jilid steples tengah, kawat spiral, atau lem panas (perfect binding).',
    bullet1: 'Cover Art Carton 260/310g Doff/Glossy',
    bullet2: 'Jilid Kuat & Buka Rata',
    accentClass: 'text-primary',
    bulletColor: 'bg-primary',
    waParam: 'Halo Percetakan Salmon Grafika, saya ingin pesan Company Profile atau Katalog'
  },
  {
    id: 'continuous-form',
    icon: 'print',
    badge: 'Printer Dot-Matrix',
    badgeClass: 'bg-surface-container-high text-on-surface-variant',
    iconBgClass: 'bg-surface-container-highest text-on-surface group-hover:bg-inverse-surface group-hover:text-inverse-on-surface',
    title: 'Continuous Form',
    description: 'Kertas komputer berlubang samping (pin feed) untuk pencetakan faktur massal dot-matrix 1 hingga 5 rangkap berkualitas tinggi.',
    bullet1: 'Ukuran Standar 9.5 x 11, Wartel, Custom',
    bullet2: 'Lubang Traktor Sangat Presisi',
    accentClass: 'text-primary',
    bulletColor: 'bg-on-surface',
    waParam: 'Halo Percetakan Salmon Grafika, saya ingin pesan Continuous Form'
  },
  {
    id: 'spunbond-bag',
    icon: 'shopping_bag',
    badge: 'Event & Souvenir',
    badgeClass: 'bg-tertiary/10 text-tertiary',
    iconBgClass: 'bg-tertiary-fixed text-on-tertiary-fixed-variant group-hover:bg-tertiary-container group-hover:text-on-tertiary',
    title: 'Tas Spunbond & Goodie Bag',
    description: 'Sablon dan cetak tas promosi ramah lingkungan untuk seminar, pameran expo, gathering, maupun packing produk butik premium.',
    bullet1: 'Gramatur 75gsm / 100gsm Tebal',
    bullet2: 'Sablon Padat Warna Solid',
    accentClass: 'text-tertiary',
    bulletColor: 'bg-tertiary',
    waParam: 'Halo Percetakan Salmon Grafika, saya ingin pesan Tas Spunbond dan Goodie Bag'
  },
  {
    id: 'sticker-cutting',
    icon: 'label',
    badge: 'Label Kemasan',
    badgeClass: 'bg-secondary/10 text-secondary',
    iconBgClass: 'bg-secondary-fixed-dim text-on-secondary-fixed group-hover:bg-secondary-container group-hover:text-on-secondary-container',
    title: 'Stiker Label & Cutting',
    description: 'Stiker vinyl tahan air, bontax/kromo ekonomis, stiker transparan, serta gold/silver foil dengan potongan kiss-cut atau die-cut presisi.',
    bullet1: 'Tahan Air, Minyak & Suhu Freezer',
    bullet2: 'Potong Pola Bentuk Custom Apapun',
    accentClass: 'text-secondary',
    bulletColor: 'bg-secondary',
    waParam: 'Halo Percetakan Salmon Grafika, saya ingin pesan Stiker Label dan Cutting'
  },
  {
    id: 'dtf-sablon',
    icon: 'apparel',
    badge: 'Apparel & Tekstil',
    badgeClass: 'bg-primary/10 text-primary',
    iconBgClass: 'bg-primary-fixed text-primary group-hover:bg-primary group-hover:text-on-primary',
    title: 'Press DTF & Sablon Kaos',
    description: 'Teknologi cetak film DTF (Direct-to-Film) resolusi tinggi untuk kaos katun kombed, polo, jaket seragam kantor, dan merchandise kanvas.',
    bullet1: 'Warna Gradasi Detail Tanpa Batas',
    bullet2: 'Daya Rekat Kuat & Tahan Cuci',
    accentClass: 'text-primary',
    bulletColor: 'bg-primary',
    waParam: 'Halo Percetakan Salmon Grafika, saya ingin pesan Press DTF dan Sablon'
  },
  {
    id: 'invitation-card',
    icon: 'mail',
    badge: 'Eksklusif & Fungsional',
    badgeClass: 'bg-secondary/10 text-secondary',
    iconBgClass: 'bg-surface-container-highest text-secondary group-hover:bg-secondary-container group-hover:text-on-secondary-container',
    title: 'Undangan & Kartu Stok',
    description: 'Undangan pernikahan custom beraksen foil emas timbul, serta kartu kendali stok gudang, kartu kontrol restoran, dan kartu inventaris tebal.',
    bullet1: 'Bahan Jasmine, Akasia, BC & Karton Tebal',
    bullet2: 'Emboss, Poly Emas, & Cutting Custom',
    accentClass: 'text-secondary',
    bulletColor: 'bg-secondary',
    waParam: 'Halo Percetakan Salmon Grafika, saya ingin pesan Undangan atau Kartu Stok'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    category: 'hasil',
    badge: 'Hasil Cetak',
    title: 'Undangan Pernikahan Mewah',
    subtitle: 'Hardcover dengan hotprint emas & emboss presisi.',
    description: 'Hardcover dengan hotprint emas & emboss presisi yang dibuat custom sesuai permintaan calon mempelai.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoh1tqVXHfxoYpKNXyLUqZjBnry4gcQdqRB65hYWeOcXp619Kn4QbF4BXqxNIC5VP0jFpaUePaSLp6nzMblvN2_CwbXm_oyppsjUr_iLEvWvXfr-Ghdt9p2d9qel1bUvYrDIBeK-ovL6axDj16x9_UJdHTG2gmJ3iIcAGJSLECzphq9A7w9W2P6ZMiNVd7YAxbhp2k4qxTPDik6aTR1ZRQ0XUmGS2yxyEPZw2MbvJ96_Pjj8LZErFutzTHqe1ta84eKQ'
  },
  {
    id: 'gal-2',
    category: 'mesin',
    badge: 'Mesin Produksi',
    title: 'Mesin Potong Presisi Hualong',
    subtitle: 'Kontrol numerik otomatis, potongan rapi ribuan rim.',
    description: 'Kontrol numerik otomatis dengan pisau baja Jerman untuk hasil potongan rapi ribuan rim tanpa miring.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoSGsmww5j0vBbjyuKMu0MzACFpKFYB6AVJLp5jhZql9kbZ9GYjOql-6j9s-AmfbnfEAvf6uN9wfYTMhToXnXZob_CZOEkmOoWejW_ez6gzoAjuc8w5bbUuSB1OFerrILkt7QsH9aqYRepxUELL2dnN4vx6h2wL_ZlaDr0J9DMEjiXcoTvwJQy-biI52mRRh9kcf8eCKPZ960-cW7Yl8b51Kqi9Q2hBN-SRPhDhr3AM990r8eCGDdMY1x0kj9O7Sv8mA'
  },
  {
    id: 'gal-3',
    category: 'ncr',
    badge: 'Formulir Bisnis',
    title: 'Bukti Kas & Invoice NCR',
    subtitle: 'Penomoran teratur, tembus jelas tanpa bleber.',
    description: 'Penomoran berurutan rapi otomatis dengan kertas tembus jelas tanpa blobor.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMAcduI3R529LQWRqPAlXwvi2V02zKe-LZEQdihVi2-HWwa-dAWeMRF382iSyPPNZmeRSslUx8iEXkJF93JpuPMA3bshrRMrqRHfktWWO4OEnx7lcTrRuiinniwoLO-TEYiFmOR3Dpv9RWqrjbiauSgI1Ogk3Thj3O1JJK61N09CAo-Nq7Uh277OFwiIIBO_Q6SJP5KUxRZ-38HQ4DRPi2qSxL-hdF9VtwA_vVPhb-HX9Fj2CxlQNpw12uRfQQ5jfJVA'
  },
  {
    id: 'gal-4',
    category: 'mesin',
    badge: 'Mesin Offset',
    title: 'Mesin Cetak Offset Heavy-Duty',
    subtitle: 'Kecepatan tinggi, stabilitas register tinta sempurna.',
    description: 'Mesin cetak offset berkecepatan tinggi dengan register presisi untuk cetak volume akbar.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCb-NKRkvSIrfJ2-b2BE_EsS3ytGenF__5ZVyC1yv1IDJVqLDtQFNnPMRZZbA5Pof98dLfaq4rYM-6RppDpqLjvYqNEQ42zML_gxQQUWLH8-3JBxKuAcV3DlVfv1NuwRxzJQHKfxF5QDU_AqeM0OBol4xfpff4y6X-pZCDQyqgMbRGUuJiV4hRXp1Pp9tBOcfBTOUw6kSolNEIIVcwN4PidjrQhTwWIINZy_ewRBI_KPFGAcqCZrkohbT4Gwl0Wu31UDQ'
  },
  {
    id: 'gal-5',
    category: 'ncr',
    badge: 'Kartu Fungsional',
    title: 'Kartu Stok & Lounge Control',
    subtitle: 'Karton tebal presisi untuk inventaris resto & retail.',
    description: 'Karton tebal presisi tinggi untuk inventarisasi resto, retail, dan sistem kontrol gudang.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6HKnW40ErtB0s8m9weWtxRkurwcrUt8GYddaiezQQWGV2Y6dW7eNLtCJ2OGjfdr4PJh2qrY9gQ80CuapclDeb9CrAS4V2yxvGfquKMKTKatT-GrAxulXueYmtL9bD6yt0vn_Dgeae-9LpAMKMV-CxlJ9rpbJ7Lpj0c3S5ueAPnqq1bsioleOTiT2ZW-la8xtIIla3yuKih4MPZ15wdYl-BGyA1MZGdOy1re7hFd8wmTkpmTBJPjKWiLnUL6YyAqNYLA'
  },
  {
    id: 'gal-6',
    category: 'mesin',
    badge: 'Finishing Workshop',
    title: 'Pemotongan Skala Industri',
    subtitle: 'Kapasitas potong ribuan lembar dalam hitungan menit.',
    description: 'Kapasitas pemotongan ribuan lembar kertas sekaligus dengan akurasi bilah pisau stabil.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-DJ9IEPWvsb9KLdZCH2K1xMc8Nl7Pgtcy0Nxz44axPHDBcrTFWGa4QnVOx302oG0N78l4erNayWtFTtHgBJMarlxXAHOpTou7f7c9K_IlP83MQpDRhaKvehNvNyrmac3H0d4nJJx-IpoQmENXNaKBsfm63H0Ni9zJ21DG-CPDGuBgfPz07xucAyffCTDeI4JvlF9oezW0jbYaLCtL3v2_P73hOzfffWV1D_s7UH0e3puqlOxwmpUnbht136oxPvCZCA'
  },
  {
    id: 'gal-7',
    category: 'hasil',
    badge: 'Quality Control',
    title: 'Pemeriksaan & Packing Rapi',
    subtitle: 'Setiap order diperiksa manual dan dikemas kedap air.',
    description: 'Setiap pesanan diperiksa manual lembar demi lembar dan dibungkus kedap air sebelum pengiriman.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8CqBCoGxTzmMMLzUySxSF2AgxTv1MW4MGDbebFOA7Wg1z-QfXrBtM653V-GeG6TAp7vZwinMCS_j7gVH-D95sKjZxKuF4D2AqPZi-lyWUuC89KHoPu2TyUaAsTX9FP9xTH41FylzjrL7CnY7IaorWh3t9TMmUnWfNR3AjDDXyvobWFsaLa_mzmRQogeWFXKPNMj8sxvv1b-mlwlkJGo1yF--_HJ9kMqzqW1POA9cLa4HRbt8ShifcM5JAfNnYk_AYug'
  },
  {
    id: 'gal-8',
    category: 'mesin',
    badge: 'Inventory Siap Pakai',
    title: 'Gudang Bahan Kertas',
    subtitle: 'Stok Art Paper, Ivory, NCR, HVS selalu siap produksi.',
    description: 'Ketersediaan bahan baku kertas Art Paper, Ivory, NCR, HVS dengan berbagai gramatur selalu terjaga.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzrGWPg6-gOe56YBjB-Af7bFlY2QBwurVBHe-vmyjRJ9g2H41ZTZvw00VYo6TWkkQE2gb1OrlQje9bwxzWkeW_Ar8hnipQ90yo1c0V7Aq7TTaxmpgrJa1-n7qCGiOOdK79LnDG6YHIOLdXboaZFBkU2yUwM-Lw9aiEkRJx9dP4rVL9gGRbJ2Hnb2EFGWTsV8vVeveKnObJyGYAOKZjnOVhF7fffjxejNxSqiwy8GGEKAopQ2ZPQW8HDs7Folbkh1Z7kw'
  }
];
