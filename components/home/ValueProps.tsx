export default function ValueProps() {
  const props = [
    {
      icon: '✓',
      title: 'Imported Quality',
      description: 'Sourced from established international manufacturers, not generic unbranded stock.',
    },
    {
      icon: '✓',
      title: 'Nairobi Showroom',
      description: 'Real, walkable showroom where you can see and touch products in person.',
    },
    {
      icon: '✓',
      title: 'Project Ready',
      description: 'Capacity to supply single items or entire hotel-scale projects.',
    },
    {
      icon: '✓',
      title: 'Warranty & Support',
      description: 'Warranties honoured, spare parts available, professional installation guidance.',
    },
  ]

  return (
    <section className="bg-near-black text-white py-120">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {props.map((prop, i) => (
          <div key={i} className="space-y-3">
            <div className="text-3xl">{prop.icon}</div>
            <h3 className="font-serif text-lg">{prop.title}</h3>
            <p className="text-stone-grey text-sm leading-relaxed">{prop.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
