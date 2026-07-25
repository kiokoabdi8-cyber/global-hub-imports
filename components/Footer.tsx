import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-near-black text-white mt-160 pb-20 md:pb-0">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Column 1: Logo & Company */}
        <div>
          <h4 className="font-serif text-lg mb-2">GLOBAL HUB IMPORTS</h4>
          <p className="text-stone-grey text-sm mb-4">
            Nairobi's trusted source for modern, imported bathroom and kitchen fittings.
          </p>
          <p className="text-stone-grey text-sm mb-1">📍 Syokimau, Nairobi, Kenya</p>
          <p className="text-stone-grey text-sm">⏰ Mon–Sat: 8am–5pm</p>
        </div>

        {/* Column 2: Categories */}
        <div>
          <h5 className="text-eyebrow mb-4">Categories</h5>
          <ul className="space-y-2 text-sm text-stone-grey">
            <li>
              <Link href="/products/basin-taps" className="hover:text-brass transition-colors">
                Basin & Bathtub Taps
              </Link>
            </li>
            <li>
              <Link href="/products/kitchen-mixers" className="hover:text-brass transition-colors">
                Kitchen Mixer Taps
              </Link>
            </li>
            <li>
              <Link href="/products/showers" className="hover:text-brass transition-colors">
                Shower Systems
              </Link>
            </li>
            <li>
              <Link href="/products/basins-sinks" className="hover:text-brass transition-colors">
                Basins & Sinks
              </Link>
            </li>
            <li>
              <Link href="/products/toilets" className="hover:text-brass transition-colors">
                Toilets & Sanitary Ware
              </Link>
            </li>
            <li>
              <Link href="/products/water-heaters" className="hover:text-brass transition-colors">
                Water Heaters
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div>
          <h5 className="text-eyebrow mb-4">Company</h5>
          <ul className="space-y-2 text-sm text-stone-grey">
            <li>
              <Link href="/about" className="hover:text-brass transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-brass transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/professionals" className="hover:text-brass transition-colors">
                For Professionals
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-brass transition-colors">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/journal" className="hover:text-brass transition-colors">
                Journal
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h5 className="text-eyebrow mb-4">Contact</h5>
          <p className="text-stone-grey text-sm mb-2">📞 +254 797 609 616</p>
          <p className="text-stone-grey text-sm mb-2">
            <a href="https://wa.me/254797609616" className="hover:text-brass transition-colors">
              💬 WhatsApp Us
            </a>
          </p>
          <p className="text-stone-grey text-sm">✉️ keithsingi3@gmail.com</p>
        </div>
      </div>

      <div className="border-t border-stone-grey">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-8 text-center text-stone-grey text-sm">
          <p>© 2024 Global Hub Imports. All rights reserved. Registration No. [TBD]</p>
          <div className="mt-4 space-x-6">
            <Link href="/privacy" className="hover:text-brass transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-brass transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
