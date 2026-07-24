'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ProfessionalsPage() {
  const [formData, setFormData] = useState({
    company: '',
    role: '',
    projectType: '',
    location: '',
    scale: '',
    timeline: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    console.log('Professional inquiry:', formData)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-warm-grey">
      {/* Hero */}
      <div className="bg-near-black text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-white mb-4">For Developers, Architects & Designers</h1>
          <p className="text-stone-grey text-lg prose-measure">
            Global Hub Imports partners with project teams to deliver specified products, bulk pricing, and expert support — from boutique residential renovations to large-scale hotel fit-outs.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-8 py-16 space-y-12">
        {/* Why Work With Us */}
        <div className="space-y-6">
          <h2 className="font-serif text-charcoal">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-serif text-charcoal mb-3">Spec Authority</h3>
              <p className="text-stone-grey text-sm leading-relaxed">
                Every product comes with full technical specs, dimension drawings, and compliance info. Our team understands architectural and design briefs.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-charcoal mb-3">Bulk & Project Pricing</h3>
              <p className="text-stone-grey text-sm leading-relaxed">
                Volume discounts and tailored project rates. Fast quotation turnaround on bills of quantities.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-charcoal mb-3">Supply Reliability</h3>
              <p className="text-stone-grey text-sm leading-relaxed">
                Real warehouse stock in Nairobi, countrywide delivery logistics, and project-scale delivery capability.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-charcoal mb-3">After-Sale Support</h3>
              <p className="text-stone-grey text-sm leading-relaxed">
                Warranties honoured, spare parts available, and professional guidance for installers and end clients.
              </p>
            </div>
          </div>
        </div>

        {/* Project Portfolio */}
        <div className="space-y-6">
          <h2 className="font-serif text-charcoal">Recent Projects</h2>
          <p className="text-stone-grey">
            We supply to hotels, residential developments, commercial offices, and boutique renovations. Examples include 45-room hotel sanitary ware packages, architect-specified master ensuite collections, and large-scale contractor builds.
          </p>
          <Link href="/projects" className="inline-block border-b-2 border-brass text-brass font-semibold hover:text-charcoal hover:border-charcoal transition-colors">
            View Project Portfolio →
          </Link>
        </div>

        {/* Professional Resources */}
        <div className="space-y-6">
          <h2 className="font-serif text-charcoal">Resources</h2>
          <p className="text-stone-grey mb-4">
            All products include downloadable spec sheets and dimension drawings. Request a trade account or volume pricing list via the form below.
          </p>
          <Link href="/products" className="inline-block border-b-2 border-brass text-brass font-semibold hover:text-charcoal hover:border-charcoal transition-colors">
            Browse Product Specs →
          </Link>
        </div>

        {/* Project Inquiry Form */}
        <div className="bg-white p-8 rounded-sm shadow-sm space-y-6">
          <h2 className="font-serif text-charcoal">Submit a Project Inquiry</h2>

          {submitted ? (
            <div className="bg-warm-grey p-6 rounded-sm border-l-4 border-brass">
              <h3 className="font-serif text-charcoal mb-2">Thank you.</h3>
              <p className="text-stone-grey text-sm">
                Your project inquiry has been received. Our sales team will contact you within 1–2 working days with pricing and availability.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-charcoal text-sm font-semibold mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full border border-stone-grey px-4 py-2 rounded-none focus:outline-none focus:ring-2 focus:ring-brass"
                  />
                </div>
                <div>
                  <label className="block text-charcoal text-sm font-semibold mb-2">
                    Your Role *
                  </label>
                  <select
                    required
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                    className="w-full border border-stone-grey px-4 py-2 rounded-none focus:outline-none focus:ring-2 focus:ring-brass"
                  >
                    <option value="">Select role</option>
                    <option value="Developer">Developer</option>
                    <option value="Architect">Architect</option>
                    <option value="Interior Designer">Interior Designer</option>
                    <option value="Contractor">Contractor</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-charcoal text-sm font-semibold mb-2">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) =>
                      setFormData({ ...formData, projectType: e.target.value })
                    }
                    className="w-full border border-stone-grey px-4 py-2 rounded-none focus:outline-none focus:ring-2 focus:ring-brass"
                  >
                    <option value="">Select type</option>
                    <option value="Hotel">Hotel</option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Office">Office</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-charcoal text-sm font-semibold mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    placeholder="e.g., Westlands, Nairobi"
                    className="w-full border border-stone-grey px-4 py-2 rounded-none focus:outline-none focus:ring-2 focus:ring-brass"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-charcoal text-sm font-semibold mb-2">
                    Estimated Scale
                  </label>
                  <input
                    type="text"
                    value={formData.scale}
                    onChange={(e) =>
                      setFormData({ ...formData, scale: e.target.value })
                    }
                    placeholder="e.g., 45 rooms, 12 bathrooms, 8 kitchens"
                    className="w-full border border-stone-grey px-4 py-2 rounded-none focus:outline-none focus:ring-2 focus:ring-brass"
                  />
                </div>
                <div>
                  <label className="block text-charcoal text-sm font-semibold mb-2">
                    Timeline
                  </label>
                  <input
                    type="text"
                    value={formData.timeline}
                    onChange={(e) =>
                      setFormData({ ...formData, timeline: e.target.value })
                    }
                    placeholder="e.g., Q3 2024, completion by Dec 2024"
                    className="w-full border border-stone-grey px-4 py-2 rounded-none focus:outline-none focus:ring-2 focus:ring-brass"
                  />
                </div>
              </div>

              <div>
                <label className="block text-charcoal text-sm font-semibold mb-2">
                  Project Details & Questions
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={6}
                  placeholder="Tell us about your project, specific product needs, finishes, or any other requirements..."
                  className="w-full border border-stone-grey px-4 py-2 rounded-none focus:outline-none focus:ring-2 focus:ring-brass"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-charcoal text-white py-3 font-semibold hover:bg-brass transition-colors"
              >
                Submit Project Inquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
