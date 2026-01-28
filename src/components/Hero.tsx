export default function Hero() {
  const stats = [
    { value: '500+', label: 'Clients Served' },
    { value: '15+', label: 'Years Combined Experience' },
    { value: '98%', label: 'Success Rate' },
    { value: '24/7', label: 'Availability' },
  ]

  return (
    <section className="relative min-h-screen bg-navy text-white pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-navy opacity-90" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-navy-light/50 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-sm">Houston's Trusted Legal Partners</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
            Smart Legal Solutions for the Inevitable:{' '}
            <span className="text-gold">Death & Taxes</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
            Comprehensive legal counsel in Estate Planning, Tax Law, Business Formation, 
            and Personal Injury. Protecting your legacy, your assets, and your future.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a 
              href="#contact"
              className="inline-flex items-center justify-center bg-gold text-navy px-8 py-4 rounded font-semibold text-lg hover:bg-gold-light transition-colors"
            >
              Book a Consult
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="#services"
              className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-4 rounded font-semibold text-lg hover:border-gold hover:text-gold transition-colors"
            >
              Our Services
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold text-gold">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
