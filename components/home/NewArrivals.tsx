'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { client } from '@/lib/sanity'

export default function NewArrivals() {
  const [products, setProducts] = useState<any[]>([])

  useEffect(() => {
    async function fetchProducts() {
      const query = `*[_type == "product" && isNew == true] | order(publishedAt desc) [0..7] {
        _id, name, slug, price, images
      }`
      const results = await client.fetch(query)
      setProducts(results)
    }
    fetchProducts()
  }, [])

  return (
    <section className="bg-warm-grey py-120">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="font-serif text-charcoal mb-12">Recently Landed</h2>
        <div className="flex gap-6 overflow-x-auto pb-4">
          {products.map((product) => (
            <Link
              key={product._id}
              href={`/products/${product.slug.current}`}
              className="flex-shrink-0 w-48 group"
            >
              <div className="bg-white aspect-square mb-3 rounded-sm flex items-center justify-center text-stone-grey text-3xl overflow-hidden group-hover:scale-105 transition-transform">
                🛁
              </div>
              <h3 className="font-serif text-sm text-charcoal group-hover:text-brass transition-colors">
                {product.name}
              </h3>
              {product.price && (
                <p className="text-xs text-stone-grey mt-1">From KES {product.price.toLocaleString()}</p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
