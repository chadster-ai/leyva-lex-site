import { useState } from 'react'

const contactInfo = [
  { icon: '📍', title: 'Houston, Texas', subtitle: 'Serving the Greater Houston Area' },
  { icon: '📞', title: '(713) 555-LEYVA', subtitle: 'Mon-Fri 9am-6pm' },
  { icon: '✉️', title: 'info@leyvalex.com', subtitle: 'We respond within 24 hours' },
  { icon: '🕐', title: 'Monday - Friday', subtitle: '9:00 AM - 6:00 PM CST' },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <span className="text-gold font-semibold uppercase tracking-wider">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy mt-4 mb-6">
              Schedule Your Consultation
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to discuss your legal needs? Contact us today for a confidential consultation. 
              We're here to help you navigate your legal challenges with expertise and care.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="font-semibold text-navy">{item.title}</div>
                    <div className="text-gray-500">{item.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-heading font-bold text-navy mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="(713) 555-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Estate Planning Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message *</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your legal needs..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-navy text-white py-4 rounded-lg font-semibold hover:bg-navy-light transition-colors"
              >
                Send Message
              </button>
              <p className="text-sm text-gray-500 text-center">
                By submitting this form, you agree to our privacy policy. All consultations are confidential.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
