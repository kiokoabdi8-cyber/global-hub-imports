'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-warm-grey px-8 py-4 items-center justify-between">
        <Link href="/" className="text-xl font-bold text-charcoal">
          GLOBAL HUB IMPORTS
        </Link>
        <div className="flex items-center gap-8">
          <div className="relative group">
            <button className="text-charcoal hover:text-brass transition-colors">
              Products ▾
            </button>
            {/* Mega menu will go here */}
          </div>
          <Link href="/projects" className="text-charcoal hover:text-brass transition-colors">
            Projects
          </Link>
          <Link href="/professionals" className="text-charcoal hover:text-brass transition-colors">
            For Professionals
          </Link>
          <Link href="/about" className="text-charcoal hover:text-brass transition-colors">
            About
          </Link>
          <Link href="/journal" className="text-charcoal hover:text-brass transition-colors">
            Journal
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/contact" className="text-charcoal hover:text-brass transition-colors">
            Contact
          </Link>
          <Link
            href="/quote"
            className="bg-charcoal text-white px-6 py-2 rounded-none hover:bg-brass transition-colors"
          >
            Request a Quote →
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden sticky top-0 z-50 bg-white border-b border-warm-grey px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-sm font-bold text-charcoal">
          GLOBAL HUB IMPORTS
        </Link>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-charcoal text-2xl"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[70px] z-40 bg-white overflow-y-auto md:hidden">
          <div className="p-6 space-y-6">
            <Link href="/products" className="block text-lg text-charcoal hover:text-brass">
              Products
            </Link>
            <Link href="/projects" className="block text-lg text-charcoal hover:text-brass">
              Projects
            </Link>
            <Link href="/professionals" className="block text-lg text-charcoal hover:text-brass">
              For Professionals
            </Link>
            <Link href="/about" className="block text-lg text-charcoal hover:text-brass">
              About
            </Link>
            <Link href="/journal" className="block text-lg text-charcoal hover:text-brass">
              Journal
            </Link>
            <Link href="/quote" className="block text-lg font-semibold text-brass">
              Request a Quote
            </Link>
          </div>
        </div>
      )}

      {/* Mobile Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-charcoal text-white flex items-center justify-around py-3 border-t border-stone-grey">
        <a
          href="https://wa.me/254712345678?text=Hello%2C%20I%27m%20interested%20in%20your%20products"
          className="flex flex-col items-center gap-1 text-xs"
        >
          <span>💬</span>
          <span>WhatsApp</span>
        </a>
        <a href="tel:+254712345678" className="flex flex-col items-center gap-1 text-xs">
          <span>☎️</span>
          <span>Call</span>
        </a>
        <Link href="/quote" className="flex flex-col items-center gap-1 text-xs">
          <span>📝</span>
          <span>Quote</span>
        </Link>
      </div>
    </>
  )
}
