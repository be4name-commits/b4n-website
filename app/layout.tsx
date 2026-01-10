import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'B4N - Premium Leather Accessories',
  description: 'Swiss quality leather goods: wallets, belts, bags, footwear',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
