import Link from 'next/link'

export default function ProfessionalsBand() {
  return (
    <section className="bg-near-black text-white py-120">
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center space-y-8">
        <h2 className="font-serif text-white">
          Developers, architects & designers — get project pricing and spec support.
        </h2>
        <Link
          href="/professionals"
          className="inline-block bg-brass text-charcoal px-8 py-3 font-semibold hover:bg-white transition-colors"
        >
          Submit a Project Inquiry
        </Link>
      </div>
    </section>
  )
}
