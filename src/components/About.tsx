const values = [
  'Client-centered approach with personalized attention',
  'Transparent communication and honest counsel',
  'Results-driven strategy with proven track record',
  'Accessible legal services for all Houstonians',
]

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-gold font-semibold uppercase tracking-wider">About Our Firm</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy mt-4 mb-6">
              A Legacy of Excellence in Houston
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              At Leyva Lex PLLC, we believe that quality legal representation should be accessible 
              to everyone. Founded in Houston, Texas, our firm combines deep legal expertise with 
              a genuine commitment to our clients' wellbeing.
            </p>
            <p className="text-lg text-gray-600 italic mb-8 border-l-4 border-gold pl-4">
              "Our mission is simple: to provide smart, strategic legal solutions that protect 
              what matters most to you—your family, your business, your future. We navigate 
              the complexities of the law so you can focus on what's important."
            </p>
            
            {/* Values */}
            <div className="space-y-4 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{value}</span>
                </div>
              ))}
            </div>

            <a 
              href="#team"
              className="inline-flex items-center bg-navy text-white px-8 py-4 rounded font-semibold hover:bg-navy-light transition-colors"
            >
              Meet Our Team
            </a>
          </div>

          {/* Quote Card */}
          <div className="bg-navy rounded-2xl p-10 text-white">
            <div className="text-6xl font-heading text-gold mb-6">LL</div>
            <blockquote className="text-xl md:text-2xl font-heading italic mb-6">
              "Justice is the constant and perpetual will to allot to every man his due."
            </blockquote>
            <cite className="text-gold">— Justinian I</cite>
          </div>
        </div>
      </div>
    </section>
  )
}
