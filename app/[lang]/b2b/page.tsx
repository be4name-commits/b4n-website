import { Locale } from '@/lib/i18n';

interface B2BPageProps {
  params: { lang: Locale };
}

export default function B2BPage({ params }: B2BPageProps) {
  const { lang } = params;

  const content = {
    de: {
      title: 'B2B Partnerprogramm',
      subtitle: 'Werden Sie unser Partner',
      minOrder: 'Mindestbestellwert: 1000 CHF',
      discount: 'B2B Rabatt: 20% auf Einzelhandelspreise',
      delivery: 'Lieferung: Swiss Post oder persönliche Lieferung (2-3 Tage für große Bestellungen)',
      payment: 'Zahlung: Flexible Konditionen, Vorkasse bevorzugt',
      customization: 'Personalisierung: Branding auf Anfrage verfügbar',
      contactTitle: 'Kontaktieren Sie uns',
      contactText: 'Für weitere Informationen und Partnerschaftsanfragen kontaktieren Sie uns bitte:',
    },
    fr: {
      title: 'Programme Partenaire B2B',
      subtitle: 'Devenez notre partenaire',
      minOrder: 'Commande minimum: 1000 CHF',
      discount: 'Remise B2B: 20% sur les prix de détail',
      delivery: 'Livraison: La Poste Suisse ou livraison personnelle (2-3 jours pour les grandes commandes)',
      payment: 'Paiement: Conditions flexibles, prépaiement préféré',
      customization: 'Personnalisation: Branding disponible sur demande',
      contactTitle: 'Contactez-nous',
      contactText: 'Pour plus d\'informations et demandes de partenariat, veuillez nous contacter:',
    },
    it: {
      title: 'Programma Partner B2B',
      subtitle: 'Diventa nostro partner',
      minOrder: 'Ordine minimo: 1000 CHF',
      discount: 'Sconto B2B: 20% sui prezzi al dettaglio',
      delivery: 'Consegna: Posta Svizzera o consegna personale (2-3 giorni per ordini grandi)',
      payment: 'Pagamento: Condizioni flessibili, pagamento anticipato preferito',
      customization: 'Personalizzazione: Branding disponibile su richiesta',
      contactTitle: 'Contattaci',
      contactText: 'Per ulteriori informazioni e richieste di partnership, contattateci:',
    },
    en: {
      title: 'B2B Partner Program',
      subtitle: 'Become our partner',
      minOrder: 'Minimum order: 1000 CHF',
      discount: 'B2B discount: 20% off retail prices',
      delivery: 'Delivery: Swiss Post or personal delivery (2-3 days for large orders)',
      payment: 'Payment: Flexible terms, prepayment preferred',
      customization: 'Customization: Branding available upon request',
      contactTitle: 'Contact Us',
      contactText: 'For more information and partnership inquiries, please contact us:',
    },
  };

  const t = content[lang];

  return (
    <div className="py-12">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.title}</h1>
        <p className="text-xl text-gray-600 mb-12">{t.subtitle}</p>

        <div className="space-y-8">
          {/* Terms */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">
              {lang === 'de' && 'Konditionen'}
              {lang === 'fr' && 'Conditions'}
              {lang === 'it' && 'Condizioni'}
              {lang === 'en' && 'Terms'}
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-2xl mr-3">•</span>
                <span className="text-lg">{t.minOrder}</span>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">•</span>
                <span className="text-lg">{t.discount}</span>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">•</span>
                <span className="text-lg">{t.delivery}</span>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">•</span>
                <span className="text-lg">{t.payment}</span>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">•</span>
                <span className="text-lg">{t.customization}</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="border-t pt-8">
            <h2 className="text-2xl font-bold mb-4">{t.contactTitle}</h2>
            <p className="text-lg mb-6">{t.contactText}</p>
            <div className="space-y-3">
              <p className="flex items-center gap-3">
                <span className="font-semibold">Email:</span>
                <a
                  href="mailto:be4name@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  be4name@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-3">
                <span className="font-semibold">
                  {lang === 'de' && 'Telefon'}
                  {lang === 'fr' && 'Téléphone'}
                  {lang === 'it' && 'Telefono'}
                  {lang === 'en' && 'Phone'}:
                </span>
                <a
                  href="tel:+41796608159"
                  className="text-blue-600 hover:underline"
                >
                  +41 79 660 81 59
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
