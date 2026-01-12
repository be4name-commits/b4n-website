import { Locale, translations } from '@/lib/i18n';
import { getAllProducts, getProductName, getCategoryName } from '@/lib/products';

interface ProductsPageProps {
  params: { lang: Locale };
  searchParams: { category?: string };
}

export default function ProductsPage({ params, searchParams }: ProductsPageProps) {
  const { lang } = params;
  const t = translations[lang];
  
  let products = getAllProducts();
  
  if (searchParams.category) {
    products = products.filter(p => p.category === searchParams.category);
  }

  return (
    <div className="py-12">
      <div className="container-custom">
        <h1 className="text-4xl font-bold mb-8">
          {searchParams.category 
            ? getCategoryName(searchParams.category, lang)
            : t.products}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.sku}
              className="border border-gray-200 card-hover group"
            >
              <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <span className="text-6xl">
                  {product.category === 'Wallets' && '👛'}
                  {product.category === 'Cosmetic Bags' && '💄'}
                  {product.category === 'Toiletry Bags' && '🧳'}
                  {product.category === 'Belts' && '🎗️'}
                  {product.category === 'Footwear' && '👞'}
                </span>
              </div>

              <div className="p-4">
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                  {getCategoryName(product.category, lang)}
                </p>
                <h3 className="font-semibold mb-2">
                  {getProductName(product, lang)}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  SKU: {product.sku}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">
                    {product.pricing.retail_chf} CHF
                  </span>
                  <button className="text-sm uppercase tracking-wider hover:text-accent">
                    {t.addToCart}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
