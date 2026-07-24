import Link from 'next/link'

const CATEGORIES = [
  { name: 'Basin & Bathtub Taps', slug: 'basin-taps' },
  { name: 'Kitchen Mixer Taps', slug: 'kitchen-mixers' },
  { name: 'Shower Systems', slug: 'showers' },
  { name: 'Wash Basins & Kitchen Sinks', slug: 'basins-sinks' },
  { name: 'Toilets & Sanitary Ware', slug: 'toilets' },
  { name: 'Water Heaters', slug: 'water-heaters' },
  { name: 'Bathroom Accessories', slug: 'accessories' },
  { name: 'Plumbing Accessories & Spares', slug: 'spares' },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <h1 className="font-serif text-charcoal mb-8">All Products</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => (
            <Link key={cat.slug} href={`/products/${cat.slug}`}>
              <div className="group cursor-pointer">
                <div className="bg-warm-grey aspect-square rounded-sm overflow-hidden mb-4 group-hover:bg-stone-grey transition-colors flex items-center justify-center text-4xl">
                  📦
                </div>
                <h3 className="font-serif text-charcoal text-sm md:text-base group-hover:text-brass transition-colors">
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
