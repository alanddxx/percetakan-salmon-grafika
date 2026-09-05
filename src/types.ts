export type GalleryCategory = 'all' | 'hasil' | 'ncr' | 'mesin';

export interface GalleryItem {
  id: string;
  category: 'hasil' | 'ncr' | 'mesin';
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export interface ServiceItem {
  id: string;
  icon: string;
  badge: string;
  badgeClass: string;
  iconBgClass: string;
  title: string;
  description: string;
  bullet1: string;
  bullet2: string;
  accentClass: string;
  bulletColor: string;
  waParam: string;
}

export interface LightboxData {
  isOpen: boolean;
  image: string;
  title: string;
  description: string;
  badge?: string;
}
