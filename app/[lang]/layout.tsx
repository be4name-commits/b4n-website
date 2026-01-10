import { getDictionary } from '@/lib/i18n'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export async function generateStaticParams() {
  return [
    { lang: 'de' },
    { lang: 'fr' },
    { lang: 'it' },
    { lang: 'en' },
  ]
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  const dict = await getDictionary(params.lang)

  return (
    <html lang={params.lang}>
      <body className="min-h-screen flex flex-col bg-white text-black">
        <Header lang={params.lang} dict={dict} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer lang={params.lang} dict={dict} />
      </body>
    </html>
  )
}
