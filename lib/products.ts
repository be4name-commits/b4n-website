import productsData from '../data/B4N_Products_4Languages.json';
import { Locale } from './i18n';

export interface Product {
  sku: string;
  names: {
    en: string;
    de: string;
    fr: string;
    it: string;
  };
  category: string;
  colors: {
    en: string;
    fr: string;
    it: string;
  };
  material: string;
  dimensions: string;
  gender: string;
  features: {
    en: string;
    fr: string;
    it: string;
  };
  packaging: string;
  pricing: {
    retail_chf: number;
    b2b_chf: number;
  };
  galaxus_ready: string;
}

export interface ProductsData {
  version: string;
  updated: string;
  total_products: number;
  categories: string[];
  products: Product[];
}

export const data: ProductsData = productsData as ProductsData;

export function getAllProducts(): Product[] {
  return data.products;
}

export function getProductsByCategory(category: string): Product[] {
  return data.products.filter(p => p.category === category);
}

export function getProductBySku(sku: string): Product | undefined {
  return data.products.find(p => p.sku === sku);
}

export function getAllCategories(): string[] {
  return data.categories;
}

export function getCategoryProducts(category: string): Product[] {
  return data.products.filter(p => p.category === category);
}

export function getProductName(product: Product, locale: Locale): string {
  return product.names[locale] || product.names.en;
}

export function getProductFeatures(product: Product, locale: Locale): string {
  if (locale === 'de') return product.features.en; // Use EN for DE as fallback
  return product.features[locale] || product.features.en;
}

export function getProductColor(product: Product, locale: Locale): string {
  if (locale === 'de') return product.colors.en; // Use EN for DE as fallback
  return product.colors[locale] || product.colors.en;
}

// Category name translations
export const categoryNames = {
  'Wallets': {
    de: 'Portemonnaies',
    fr: 'Portefeuilles',
    it: 'Portafogli',
    en: 'Wallets'
  },
  'Cosmetic Bags': {
    de: 'Kosmetiktaschen',
    fr: 'Trousses de Maquillage',
    it: 'Trousse per Cosmetici',
    en: 'Cosmetic Bags'
  },
  'Toiletry Bags': {
    de: 'Kulturbeutel',
    fr: 'Trousses de Toilette',
    it: 'Trousse da Toilette',
    en: 'Toiletry Bags'
  },
  'Belts': {
    de: 'Gürtel',
    fr: 'Ceintures',
    it: 'Cinture',
    en: 'Belts'
  },
  'Footwear': {
    de: 'Schuhe',
    fr: 'Chaussures',
    it: 'Calzature',
    en: 'Footwear'
  }
};

export function getCategoryName(category: string, locale: Locale): string {
  return categoryNames[category as keyof typeof categoryNames]?.[locale] || category;
}

// Get product image placeholder (will be replaced with actual images)
export function getProductImage(sku: string): string {
  return `/images/${sku}.jpg`;
}

// Category image mappings
export const categoryImages = {
  'Wallets': '/images/category-wallets.jpg',
  'Cosmetic Bags': '/images/category-cosmetic.jpg',
  'Toiletry Bags': '/images/category-toiletry.jpg',
  'Belts': '/images/category-belts.jpg',
  'Footwear': '/images/category-footwear.jpg',
};

export function getCategoryImage(category: string): string {
  return categoryImages[category as keyof typeof categoryImages] || '/images/placeholder.jpg';
}
