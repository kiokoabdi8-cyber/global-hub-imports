import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative w-full h-screen md:h-[90vh] bg-warm-grey flex items-center justify-center overflow-hidden">
      {/* Background image placeholder */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-grey/20 to-stone-grey/5"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto space-y-6">
        <h1 className="font-serif text-charcoal">Fittings that define the room.</h1>
        <p className="text-lg text-stone-grey prose-measure mx-auto">
          Imported bathroom & kitchen fittings — supplied across Kenya.
        </p>
        <div className="flex gap-4 justify-center pt-8">
          <Link
            href="/products"
            className="bg-charcoal text-white px-8 py-3 hover:bg-brass transition-colors"
          >
            Explore Products
          </Link>
          <Link
            href="/showroom"
            className="border-2 border-charcoal text-charcoal px-8 py-3 hover:bg-charcoal hover:text-white transition-colors"
          >
            Visit the Showroom
          </Link>
        </div>
      </div>
    </section>
  )
}
