const team = [
  {
    initials: 'JL',
    name: 'Jose Uryel Leyva',
    title: 'CEO & Managing Attorney',
    bio: 'Founding partner with expertise in estate planning and business law. Jose leads our firm with a vision for accessible, client-focused legal services.',
    image: '/team/jose-leyva.jpg',
  },
  {
    initials: 'NM',
    name: 'Natalia Miralles',
    title: 'CFO & Senior Counsel',
    bio: 'Specialized in property tax appeals and financial law. Natalia brings analytical precision and strategic thinking to every case.',
  },
  {
    initials: 'BE',
    name: 'Brett Emerson',
    title: 'COO & Trial Attorney',
    bio: 'Expert litigator focusing on personal injury and IP law. Brett ensures our operations run smoothly while advocating fiercely for clients.',
    image: '/team/brett-emerson.jpg',
  },
]

export default function Team() {
  return (
    <section id="team" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold font-semibold uppercase tracking-wider">Our Leadership</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy mt-4 mb-6">
            Meet the Team
          </h2>
          <p className="text-lg text-gray-600">
            Our dedicated professionals bring decades of combined experience and a shared 
            commitment to excellence in legal practice.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg text-center"
            >
              {/* Avatar */}
              {member.image ? (
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-6"
                />
              ) : (
                <div className="w-24 h-24 bg-navy rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-heading font-bold text-gold">{member.initials}</span>
                </div>
              )}
              
              <h3 className="text-xl font-heading font-bold text-navy mb-2">
                {member.name}
              </h3>
              <p className="text-gold font-semibold mb-4">{member.title}</p>
              <p className="text-gray-600 mb-6">{member.bio}</p>
              
              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-navy transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-navy transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
