export type Locale = 'de' | 'fr' | 'it' | 'en';

export const locales: Locale[] = ['de', 'fr', 'it', 'en'];
export const defaultLocale: Locale = 'de';

export const translations = {
  de: {
    // Navigation
    home: 'Startseite',
    products: 'Produkte',
    about: 'Über uns',
    b2b: 'B2B',
    contact: 'Kontakt',
    cart: 'Warenkorb',
    
    // Hero
    heroTitle: 'B4N Premium Lederaccessoires',
    heroSubtitle: 'Schweizer Qualität • Echtes Leder • Handgefertigt',
    shopNow: 'Jetzt einkaufen',
    learnMore: 'Mehr erfahren',
    
    // Categories
    wallets: 'Portemonnaies',
    cosmetic_bags: 'Kosmetiktaschen',
    toiletry_bags: 'Kulturbeutel',
    belts: 'Gürtel',
    footwear: 'Schuhe',
    
    // Product
    addToCart: 'In den Warenkorb',
    viewDetails: 'Details anzeigen',
    price: 'Preis',
    material: 'Material',
    dimensions: 'Abmessungen',
    
    // USP
    freeShipping: 'Kostenloser Versand ab 300 CHF',
    swissQuality: 'Schweizer Qualität',
    genuineLeather: 'Echtes Leder',
    securePayment: 'Sichere Zahlung',
    
    // Footer
    footerAbout: 'Über B4N',
    footerShipping: 'Versand & Lieferung',
    footerReturns: 'Rückgabe & Umtausch',
    footerPrivacy: 'Datenschutz',
    footerTerms: 'AGB',
    footerContact: 'Kontakt',
    
    // Contact
    email: 'E-Mail',
    phone: 'Telefon',
    
    // Common
    viewAll: 'Alle anzeigen',
    items: 'Artikel',
  },
  
  fr: {
    // Navigation
    home: 'Accueil',
    products: 'Produits',
    about: 'À propos',
    b2b: 'B2B',
    contact: 'Contact',
    cart: 'Panier',
    
    // Hero
    heroTitle: 'B4N Accessoires en Cuir Premium',
    heroSubtitle: 'Qualité Suisse • Cuir Véritable • Fait Main',
    shopNow: 'Acheter maintenant',
    learnMore: 'En savoir plus',
    
    // Categories
    wallets: 'Portefeuilles',
    cosmetic_bags: 'Trousses de Maquillage',
    toiletry_bags: 'Trousses de Toilette',
    belts: 'Ceintures',
    footwear: 'Chaussures',
    
    // Product
    addToCart: 'Ajouter au panier',
    viewDetails: 'Voir les détails',
    price: 'Prix',
    material: 'Matériel',
    dimensions: 'Dimensions',
    
    // USP
    freeShipping: 'Livraison gratuite dès 300 CHF',
    swissQuality: 'Qualité Suisse',
    genuineLeather: 'Cuir Véritable',
    securePayment: 'Paiement Sécurisé',
    
    // Footer
    footerAbout: 'À propos de B4N',
    footerShipping: 'Expédition & Livraison',
    footerReturns: 'Retours & Échanges',
    footerPrivacy: 'Confidentialité',
    footerTerms: 'CGV',
    footerContact: 'Contact',
    
    // Contact
    email: 'E-mail',
    phone: 'Téléphone',
    
    // Common
    viewAll: 'Voir tout',
    items: 'articles',
  },
  
  it: {
    // Navigation
    home: 'Home',
    products: 'Prodotti',
    about: 'Chi siamo',
    b2b: 'B2B',
    contact: 'Contatto',
    cart: 'Carrello',
    
    // Hero
    heroTitle: 'B4N Accessori in Pelle Premium',
    heroSubtitle: 'Qualità Svizzera • Pelle Genuina • Fatto a Mano',
    shopNow: 'Acquista ora',
    learnMore: 'Scopri di più',
    
    // Categories
    wallets: 'Portafogli',
    cosmetic_bags: 'Trousse per Cosmetici',
    toiletry_bags: 'Trousse da Toilette',
    belts: 'Cinture',
    footwear: 'Calzature',
    
    // Product
    addToCart: 'Aggiungi al carrello',
    viewDetails: 'Vedi dettagli',
    price: 'Prezzo',
    material: 'Materiale',
    dimensions: 'Dimensioni',
    
    // USP
    freeShipping: 'Spedizione gratuita oltre 300 CHF',
    swissQuality: 'Qualità Svizzera',
    genuineLeather: 'Pelle Genuina',
    securePayment: 'Pagamento Sicuro',
    
    // Footer
    footerAbout: 'Chi siamo',
    footerShipping: 'Spedizione & Consegna',
    footerReturns: 'Resi & Cambi',
    footerPrivacy: 'Privacy',
    footerTerms: 'Termini e Condizioni',
    footerContact: 'Contatto',
    
    // Contact
    email: 'E-mail',
    phone: 'Telefono',
    
    // Common
    viewAll: 'Vedi tutto',
    items: 'articoli',
  },
  
  en: {
    // Navigation
    home: 'Home',
    products: 'Products',
    about: 'About',
    b2b: 'B2B',
    contact: 'Contact',
    cart: 'Cart',
    
    // Hero
    heroTitle: 'B4N Premium Leather Accessories',
    heroSubtitle: 'Swiss Quality • Genuine Leather • Handcrafted',
    shopNow: 'Shop Now',
    learnMore: 'Learn More',
    
    // Categories
    wallets: 'Wallets',
    cosmetic_bags: 'Cosmetic Bags',
    toiletry_bags: 'Toiletry Bags',
    belts: 'Belts',
    footwear: 'Footwear',
    
    // Product
    addToCart: 'Add to Cart',
    viewDetails: 'View Details',
    price: 'Price',
    material: 'Material',
    dimensions: 'Dimensions',
    
    // USP
    freeShipping: 'Free Shipping over 300 CHF',
    swissQuality: 'Swiss Quality',
    genuineLeather: 'Genuine Leather',
    securePayment: 'Secure Payment',
    
    // Footer
    footerAbout: 'About B4N',
    footerShipping: 'Shipping & Delivery',
    footerReturns: 'Returns & Exchanges',
    footerPrivacy: 'Privacy',
    footerTerms: 'Terms & Conditions',
    footerContact: 'Contact',
    
    // Contact
    email: 'Email',
    phone: 'Phone',
    
    // Common
    viewAll: 'View All',
    items: 'items',
  },
};

export function getTranslation(locale: Locale, key: keyof typeof translations.de) {
  return translations[locale][key] || translations[defaultLocale][key];
}
