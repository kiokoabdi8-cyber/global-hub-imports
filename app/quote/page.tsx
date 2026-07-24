'use client'

import { useState } from 'react'

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    county: '',
    product: '',
    quantity: '1',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // TODO: Connect to backend form handler
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-warm-grey py-16">
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="font-serif text-charcoal mb-8">Request a Quotation</h1>

        {submitted ? (
          <div className="bg-white p-8 rounded-sm border-l-4 border-brass">
            <h2 className="font-serif text-charcoal mb-3">Thank you.</h2>
            <p className="text-stone-grey mb-4">
              We\'ve received your quotation request and will respond via WhatsApp or phone within 2 working hours (Mon–Sat).
            </p>
            <p className="text-stone-grey text-sm">Reference: {new Date().toISOString()}</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-sm space-y-6 shadow-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-charcoal text-sm font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full border border-stone-grey px-4 py-2 rounded-none focus:outline-none focus:ring-2 focus:ring-brass"
                />
              </div>
              <div>
                <label className="block text-charcoal text-sm font-semibold mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full border border-stone-grey px-4 py-2 rounded-none focus:outline-none focus:ring-2 focus:ring-brass"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-charcoal text-sm font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full border border-stone-grey px-4 py-2 rounded-none focus:outline-none focus:ring-2 focus:ring-brass"
                />
              </div>
              <div>
                <label className="block text-charcoal text-sm font-semibold mb-2">
                  County / Region
                </label>
                <input
                  type="text"
                  value={formData.county}
                  onChange={(e) =>
                    setFormData({ ...formData, county: e.target.value })
                  }
                  className="w-full border border-stone-grey px-4 py-2 rounded-none focus:outline-none focus:ring-2 focus:ring-brass"
                />
              </div>
            </div>

            <div>
              <label className="block text-charcoal text-sm font-semibold mb-2">
                Product of Interest
              </label>
              <input
                type="text"
                value={formData.product}
                onChange={(e) =>
                  setFormData({ ...formData, product: e.target.value })
                }
                placeholder="e.g., Concealed Rain Shower Set — Brushed Gold (SKU: RS-001)"
                className="w-full border border-stone-grey px-4 py-2 rounded-none focus:outline-none focus:ring-2 focus:ring-brass"
              />
            </div>

            <div>
              <label className="block text-charcoal text-sm font-semibold mb-2">
                Quantity
              </label>
              <input
                type="number"
                min="1"
                value={formData.quantity}
                onChange={(e) =>
                  setFormData({ ...formData, quantity: e.target.value })
                }
                className="w-full border border-stone-grey px-4 py-2 rounded-none focus:outline-none focus:ring-2 focus:ring-brass"
              />
            </div>

            <div>
              <label className="block text-charcoal text-sm font-semibold mb-2">
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={5}
                placeholder="Tell us about your project, any special requirements, or questions..."
                className="w-full border border-stone-grey px-4 py-2 rounded-none focus:outline-none focus:ring-2 focus:ring-brass"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-charcoal text-white py-3 font-semibold hover:bg-brass transition-colors"
            >
              Submit Quotation Request
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
