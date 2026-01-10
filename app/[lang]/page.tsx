import Link from 'next/link';
import { Locale, translations } from '@/lib/i18n';
import { getAllCategories, getCategoryProducts, getCategoryName } from '@/lib/products';

interface HomePageProps {
  params: { lang: Locale };
}

export default function HomePage({ params }: HomePageProps) {
  const { lang } = params;
  const t = translations[lang];
  const categories = getAllCategories();

  return (
    <div>
      {/* Hero Section - Swiss Precision */}
      <section className="relative h-[70vh] min-h-[500px] bg-black text-white flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="container-custom relative z-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {t.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 font-light tracking-wide">
              {t.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={`/${lang}/products`} className="btn-primary">
                {t.shopNow}
              </Link>
              <Link href={`/${lang}/b2b`} className="btn-secondary bg-white text-black hover:bg-gray-100">
                {t.b2b}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-12 border-b border-gray-200">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: '🇨🇭', text: t.swissQuality },
              { icon: '🎨', text: t.genuineLeather },
              { icon: '📦', text: t.freeShipping },
              { icon: '🔒', text: t.securePayment },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{item.icon}</div>
                <p className="text-sm uppercase tracking-wider">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid - Swiss Precision Layout */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {lang === 'de' && 'Unsere Kollektionen'}
            {lang === 'fr' && 'Nos Collections'}
            {lang === 'it' && 'Le Nostre Collezioni'}
            {lang === 'en' && 'Our Collections'}
          </h2>

          {/* Swiss Grid Layout */}
          <div className="swiss-grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {categories.map((category, index) => {
              const categoryProducts = getCategoryProducts(category);
              const productCount = categoryProducts.length;
              const categoryName = getCategoryName(category, lang);
              
              // Define grid spans for Swiss Precision layout
              const gridSpans = [
                'col-span-2 row-span-2', // Wallets - large
                'col-span-1 row-span-1', // Cosmetic Bags
                'col-span-1 row-span-1', // Toiletry Bags
                'col-span-2 row-span-1', // Belts - wide
                'col-span-2 row-span-1', // Footwear - wide
              ];

              return (
                <Link
                  key={category}
                  href={`/${lang}/products?category=${encodeURIComponent(category)}`}
                  className={`grid-category ${gridSpans[index] || 'col-span-1 row-span-1'}`}
                >
                  {/* Placeholder for category image */}
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-6xl mb-4">
                        {category === 'Wallets' && '👛'}
                        {category === 'Cosmetic Bags' && '💄'}
                        {category === 'Toiletry Bags' && '🧳'}
                        {category === 'Belts' && '🎗️'}
                        {category === 'Footwear' && '👞'}
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{categoryName}</h3>
                      <p className="text-sm text-gray-600">
                        {productCount} {t.items}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid-category-overlay">
                    <span className="grid-category-label">
                      {t.viewAll} →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {lang === 'de' && 'B2B Partnerprogramm'}
            {lang === 'fr' && 'Programme Partenaire B2B'}
            {lang === 'it' && 'Programma Partner B2B'}
            {lang === 'en' && 'B2B Partner Program'}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {lang === 'de' && 'Werden Sie unser Partner und profitieren Sie von attraktiven Konditionen ab 1000 CHF Bestellwert.'}
            {lang === 'fr' && 'Devenez notre partenaire et profitez de conditions attractives à partir de 1000 CHF de commande.'}
            {lang === 'it' && 'Diventa nostro partner e approfitta di condizioni vantaggiose a partire da 1000 CHF di ordine.'}
            {lang === 'en' && 'Become our partner and benefit from attractive conditions starting at 1000 CHF order value.'}
          </p>
          <Link href={`/${lang}/b2b`} className="btn-primary">
            {t.learnMore}
          </Link>
        </div>
      </section>
    </div>
  );
}
