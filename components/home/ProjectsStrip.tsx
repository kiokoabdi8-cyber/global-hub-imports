'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { client } from '@/lib/sanity'

export default function ProjectsStrip() {
  const [projects, setProjects] = useState<any[]>([])

  useEffect(() => {
    async function fetchProjects() {
      const query = `*[_type == "project"] | order(completedAt desc) [0..2] {
        _id, title, location, scope, slug
      }`
      const results = await client.fetch(query)
      setProjects(results)
    }
    fetchProjects()
  }, [])

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 py-120">
      <h2 className="font-serif text-charcoal mb-12">Trusted on Projects Across Kenya</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link key={project._id} href={`/projects/${project.slug.current}`}>
            <div className="group cursor-pointer space-y-3">
              <div className="bg-warm-grey aspect-video rounded-sm flex items-center justify-center text-stone-grey text-4xl">
                🏨
              </div>
              <h3 className="font-serif text-charcoal group-hover:text-brass transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-stone-grey">{project.location}</p>
              <p className="text-xs text-stone-grey leading-relaxed">{project.scope}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
