import Link from 'next/link'

export default function Showroom() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 py-120">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="font-serif text-charcoal">Visit Our Showroom</h2>
          <div className="space-y-4 text-stone-grey">
            <p>
              <strong className="text-charcoal">📍 Address:</strong>
              <br />
              Westlands, Nairobi, Kenya
            </p>
            <p>
              <strong className="text-charcoal">🕐 Hours:</strong>
              <br />
              Monday–Saturday: 9am–6pm<br />
              Sunday: Closed
            </p>
            <p>
              <strong className="text-charcoal">📞 Contact:</strong>
              <br />
              +254 712 345 678<br />
              info@globalhubimports.co.ke
            </p>
          </div>
          <div className="flex gap-4 pt-4">
            <Link
              href="https://maps.google.com"
              className="border-2 border-charcoal text-charcoal px-6 py-2 hover:bg-charcoal hover:text-white transition-colors"
            >
              Get Directions
            </Link>
            <Link
              href="https://wa.me/254712345678?text=Hello%2C%20I%27d%20like%20to%20book%20a%20showroom%20visit"
              className="bg-whatsapp-green text-white px-6 py-2 hover:opacity-90 transition-opacity"
            >
              Book a Visit
            </Link>
          </div>
        </div>
        <div className="bg-warm-grey aspect-square rounded-sm flex items-center justify-center text-stone-grey text-6xl">
          🏢
        </div>
      </div>
    </section>
  )
}
