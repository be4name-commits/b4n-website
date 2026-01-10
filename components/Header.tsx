'use client'

import Link from 'next/link'
import { useState } from 'react'

interface HeaderProps {
  lang: string
  dict: any
}

export default function Header({ lang, dict }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [langMenuOpen, setLangMenuOpen] = useState(false)

  const navigation = [
    { name: dict.nav.home, href: `/${lang}` },
    { name: dict.nav.products, href: `/${lang}/products` },
    { name: dict.nav.b2b, href: `/${lang}/b2b` },
    { name: dict.nav.contact, href: `/${lang}/contact` },
  ]

  const languages = [
    { code: 'de', name: 'Deutsch' },
    { code: 'fr', name: 'Français' },
    { code: 'it', name: 'Italiano' },
    { code: 'en', name: 'English' },
  ]

  return (
    <header className="bg-black text-white border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href={`/${lang}`} className="text-2xl font-bold tracking-wider">
              B4N
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-gray-300 transition-colors uppercase tracking-wide"
              >
                {item.name}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="text-sm font-medium hover:text-gray-300 transition-colors uppercase tracking-wide flex items-center"
              >
                {lang.toUpperCase()}
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg z-50">
                  {languages.map((language) => (
                    <Link
                      key={language.code}
                      href={`/${language.code}`}
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() => setLangMenuOpen(false)}
                    >
                      {language.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Cart */}
            <Link
              href={`/${lang}/cart`}
              className="text-sm font-medium hover:text-gray-300 transition-colors"
            >
              🛒 {dict.nav.cart}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-gray-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-sm font-medium hover:text-gray-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="border-t border-gray-800 mt-2 pt-2">
              {languages.map((language) => (
                <Link
                  key={language.code}
                  href={`/${language.code}`}
                  className="block py-2 text-sm hover:text-gray-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {language.name}
                </Link>
              ))}
            </div>
            <Link
              href={`/${lang}/cart`}
              className="block py-2 text-sm font-medium hover:text-gray-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              🛒 {dict.nav.cart}
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
