import Link from 'next/link'

export default function ClosingCTA() {
  return (
    <section className="bg-warm-grey py-120">
      <div className="max-w-3xl mx-auto px-6 md:px-8 text-center space-y-8">
        <h2 className="font-serif text-charcoal">
          Planning a bathroom or kitchen? Talk to us.
        </h2>
        <div className="flex gap-4 justify-center">
          <Link
            href="/quote"
            className="bg-charcoal text-white px-8 py-3 hover:bg-brass transition-colors"
          >
            Request a Quote
          </Link>
          <Link
            href="https://wa.me/254712345678"
            className="bg-whatsapp-green text-white px-8 py-3 hover:opacity-90 transition-opacity"
          >
            WhatsApp Us
          </Link>
        </div>
      </div>
    </section>
  )
}
