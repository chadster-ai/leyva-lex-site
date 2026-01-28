const services = [
  {
    icon: '⚖️',
    title: 'Injury Law',
    description: 'Dedicated advocacy for personal injury victims. We fight for the compensation you deserve with compassion and tenacity.',
  },
  {
    icon: '📜',
    title: 'Estate Planning',
    description: 'Comprehensive estate planning including wills, trusts, and probate. Protect your legacy and provide for your loved ones.',
  },
  {
    icon: '🏠',
    title: 'Property Tax',
    description: 'Strategic property tax appeals and protests. We help reduce your tax burden and challenge unfair assessments.',
  },
  {
    icon: '💼',
    title: 'Business Law',
    description: 'From formation to contracts to disputes. We provide the legal foundation your business needs to thrive.',
  },
  {
    icon: '💡',
    title: 'IP Law',
    description: 'Protect your intellectual property with trademark, copyright, and patent services. Safeguard your innovations.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold font-semibold uppercase tracking-wider">Our Practice Areas</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy mt-4 mb-6">
            Comprehensive Legal Services
          </h2>
          <p className="text-lg text-gray-600">
            From life's certainties to business complexities, our experienced team provides 
            tailored legal solutions across multiple practice areas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-heading font-bold text-navy mb-3 group-hover:text-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <span className="inline-flex items-center text-gold font-semibold">
                Learn More
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
