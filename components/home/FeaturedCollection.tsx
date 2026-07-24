import Link from 'next/link'

export default function FeaturedCollection() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 py-120">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="bg-warm-grey aspect-square rounded-sm flex items-center justify-center text-stone-grey text-6xl">
          🚿
        </div>
        <div className="space-y-6">
          <p className="text-eyebrow">COLLECTION HIGHLIGHT</p>
          <h2 className="font-serif text-charcoal">The Brushed Gold Collection</h2>
          <p className="text-stone-grey prose-measure leading-relaxed">
            Warm, sophisticated finishes that add character to any bathroom or kitchen. Hand-polished brass with a matte surface, designed for durability and modern aesthetics. Available across taps, showers, and accessories.
          </p>
          <Link
            href="/products/basin-taps?finish=brushed-gold"
            className="inline-block border-b-2 border-brass text-brass font-semibold hover:text-charcoal hover:border-charcoal transition-colors"
          >
            View Collection →
          </Link>
        </div>
      </div>
    </section>
  )
}
