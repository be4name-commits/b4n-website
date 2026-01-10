import Link from 'next/link'

interface FooterProps {
  lang: string
  dict: any
}

export default function Footer({ lang, dict }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white border-t border-gray-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4 tracking-wider">B4N</h3>
            <p className="text-sm text-gray-400">
              {dict.footer.tagline || 'Premium Leather Accessories'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide">{dict.footer.quickLinks || 'Links'}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${lang}`} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {dict.nav.home}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/products`} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {dict.nav.products}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/b2b`} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {dict.nav.b2b}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide">{dict.footer.contact || 'Kontakt'}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="mailto:be4name@gmail.com" className="hover:text-white transition-colors">
                  be4name@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+41796608159" className="hover:text-white transition-colors">
                  +41 79 660 81 59
                </a>
              </li>
            </ul>
          </div>

          {/* Shipping Info */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide">{dict.footer.shipping || 'Versand'}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>{dict.footer.shippingFree || 'Kostenlos ab 300 CHF'}</li>
              <li>{dict.footer.shippingCH || 'Schweiz: 9 CHF'}</li>
              <li>{dict.footer.shippingEU || 'Europa: 20 CHF'}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} B4N. {dict.footer.rights || 'Alle Rechte vorbehalten.'}</p>
        </div>
      </div>
    </footer>
  )
}
