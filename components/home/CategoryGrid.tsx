'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { client } from '@/lib/sanity'

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

export default function CategoryGrid() {
  const [productCounts, setProductCounts] = useState<Record<string, number>>({})

  useEffect(() => {
    async function fetchCounts() {
      const counts: Record<string, number> = {}
      for (const category of CATEGORIES) {
        const query = `count(*[_type == "product" && category->slug.current == "${category.slug}"])`
        const count = await client.fetch(query)
        counts[category.slug] = count
      }
      setProductCounts(counts)
    }
    fetchCounts()
  }, [])

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 py-120">
      <h2 className="text-center font-serif text-charcoal mb-16">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {CATEGORIES.map((cat) => (
          <Link key={cat.slug} href={`/products/${cat.slug}`}>
            <div className="group cursor-pointer">
              <div className="bg-warm-grey aspect-square rounded-sm overflow-hidden mb-4 group-hover:bg-stone-grey transition-colors">
                <div className="w-full h-full flex items-center justify-center text-stone-grey text-5xl">
                  📦
                </div>
              </div>
              <h3 className="font-serif text-charcoal text-sm md:text-base group-hover:text-brass transition-colors">
                {cat.name}
              </h3>
              <p className="text-xs text-stone-grey">
                {productCounts[cat.slug] || 0} items
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
