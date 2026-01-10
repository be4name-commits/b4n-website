import { Locale, translations } from '@/lib/i18n';

interface CartPageProps {
  params: { lang: Locale };
}

export default function CartPage({ params }: CartPageProps) {
  const { lang } = params;
  const t = translations[lang];

  return (
    <div className="py-12">
      <div className="container-custom">
        <h1 className="text-4xl font-bold mb-8">{t.cart}</h1>
        
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🛒</div>
          <p className="text-xl text-gray-600">
            {lang === 'de' && 'Ihr Warenkorb ist leer'}
            {lang === 'fr' && 'Votre panier est vide'}
            {lang === 'it' && 'Il tuo carrello è vuoto'}
            {lang === 'en' && 'Your cart is empty'}
          </p>
        </div>
      </div>
    </div>
  );
}
