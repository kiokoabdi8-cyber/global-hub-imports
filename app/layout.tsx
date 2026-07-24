'use client'

import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Global Hub Imports | Premium Bathroom & Kitchen Fittings, Nairobi',
  description:
    'Nairobi\'s trusted source for modern, imported bathroom and kitchen fittings — showroom-grade quality for homes, hotels, and large-scale projects.',
  keywords:
    'bathroom fittings, kitchen fittings, taps, mixers, showers, sanitary ware, Nairobi, Kenya',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-charcoal">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
