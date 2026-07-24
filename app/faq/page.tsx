'use client'

import { useState } from 'react'

const FAQS = [
  {
    category: 'Delivery & Shipping',
    items: [
      {
        q: 'Do you deliver countrywide?',
        a: 'Yes. We deliver to all 47 counties in Kenya. Delivery timelines vary by location — typically 2–5 working days for within Nairobi, 5–10 days for up-country.',
      },
      {
        q: 'What are the delivery charges?',
        a: 'Delivery costs are calculated based on location and order weight. We\'ll provide a quotation when you submit your order or quotation request.',
      },
    ],
  },
  {
    category: 'Warranties & Support',
    items: [
      {
        q: 'What\'s the warranty on products?',
        a: 'Warranties vary by product — typically 10 years on tap bodies, 2 years on cartridges and electronic components. Check individual product pages for specific terms. All warranties cover manufacturing defects under normal use.',
      },
      {
        q: 'Are spare parts available?',
        a: 'Yes. We stock common spares (cartridges, washers, seals, hoses) and can order others quickly from manufacturers. Contact us via WhatsApp or phone for spare-part inquiries.',
      },
    ],
  },
  {
    category: 'Installation',
    items: [
      {
        q: 'Do you provide installation services?',
        a: 'We don\'t directly provide installation, but we work with trusted plumbers and contractors across Nairobi and Kenya. We can recommend installers and provide detailed guidance to them.',
      },
      {
        q: 'Do you offer installation guides?',
        a: 'Every product comes with an installation guide (PDF) available for download. For detailed questions, contact our team via WhatsApp or phone — our consultants can walk plumbers through any specifics.',
      },
    ],
  },
  {
    category: 'Payment & Terms',
    items: [
      {
        q: 'What payment methods do you accept?',
        a: 'We accept cash, bank transfers, M-Pesa (for appropriate amounts), and card payments (subject to a processing fee). For large projects, we typically work on a deposit + invoice basis.',
      },
      {
        q: 'Do you offer payment plans for large orders?',
        a: 'Yes. For bulk or project orders, we can arrange deposit + milestone payment structures. Discuss terms directly with the sales team when you submit a project inquiry.',
      },
    ],
  },
]

export default function FAQPage() {
  const [openCategory, setOpenCategory] = useState<string | null>(null)
  const [openItem, setOpenItem] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-warm-grey">
      <div className="max-w-3xl mx-auto px-6 md:px-8 py-16">
        <h1 className="font-serif text-charcoal mb-12">Frequently Asked Questions</h1>

        <div className="space-y-4">
          {FAQS.map((section) => (
            <div key={section.category}>
              <button
                onClick={() =>
                  setOpenCategory(
                    openCategory === section.category ? null : section.category
                  )
                }
                className="w-full bg-white p-4 text-left font-semibold text-charcoal hover:bg-warm-grey transition-colors border-l-4 border-brass"
              >
                {section.category}
              </button>

              {openCategory === section.category && (
                <div className="bg-white border-b-4 border-warm-grey space-y-4 p-6">
                  {section.items.map((item, i) => {
                    const itemId = `${section.category}-${i}`
                    return (
                      <div key={itemId}>
                        <button
                          onClick={() =>
                            setOpenItem(openItem === itemId ? null : itemId)
                          }
                          className="w-full text-left font-semibold text-charcoal hover:text-brass transition-colors py-2 flex items-center justify-between"
                        >
                          {item.q}
                          <span className="text-stone-grey">
                            {openItem === itemId ? '−' : '+'}
                          </span>
                        </button>
                        {openItem === itemId && (
                          <p className="text-stone-grey text-sm leading-relaxed pt-3 pb-6">
                            {item.a}
                          </p>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
