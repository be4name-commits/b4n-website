import { Locale } from '@/lib/i18n';

interface ContactPageProps {
  params: { lang: Locale };
}

export default function ContactPage({ params }: ContactPageProps) {
  const { lang } = params;

  const content = {
    de: { title: 'Kontakt', subtitle: 'Wir freuen uns auf Ihre Nachricht' },
    fr: { title: 'Contact', subtitle: 'Nous attendons votre message avec impatience' },
    it: { title: 'Contatto', subtitle: 'Non vediamo l\'ora di ricevere il vostro messaggio' },
    en: { title: 'Contact', subtitle: 'We look forward to hearing from you' },
  };

  const t = content[lang];

  return (
    <div className="py-12">
      <div className="container-custom max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
        <p className="text-xl text-gray-600 mb-12">{t.subtitle}</p>

        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-2">Email</h2>
            <a href="mailto:be4name@gmail.com" className="text-blue-600 hover:underline">
              be4name@gmail.com
            </a>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold mb-2">
              {lang === 'de' && 'Telefon'}
              {lang === 'fr' && 'Téléphone'}
              {lang === 'it' && 'Telefono'}
              {lang === 'en' && 'Phone'}
            </h2>
            <a href="tel:+41796608159" className="text-blue-600 hover:underline">
              +41 79 660 81 59
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
