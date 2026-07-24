'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { client } from '@/lib/sanity'

export default function JournalTeaser() {
  const [articles, setArticles] = useState<any[]>([])

  useEffect(() => {
    async function fetchArticles() {
      const query = `*[_type == "journal"] | order(publishedAt desc) [0..2] {
        _id, title, slug, publishedAt, description
      }`
      const results = await client.fetch(query)
      setArticles(results)
    }
    fetchArticles()
  }, [])

  return (
    <section className="bg-warm-grey py-120">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="font-serif text-charcoal mb-12">From the Journal</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link key={article._id} href={`/journal/${article.slug.current}`}>
              <div className="group cursor-pointer space-y-3">
                <div className="bg-white aspect-video rounded-sm flex items-center justify-center text-stone-grey text-3xl">
                  📖
                </div>
                <h3 className="font-serif text-charcoal group-hover:text-brass transition-colors">
                  {article.title}
                </h3>
                <p className="text-xs text-stone-grey">
                  {new Date(article.publishedAt).toLocaleDateString()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
