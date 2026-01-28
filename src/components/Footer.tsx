const footerLinks = {
  services: [
    { name: 'Injury Law', href: '#services' },
    { name: 'Estate Planning', href: '#services' },
    { name: 'Property Tax', href: '#services' },
    { name: 'Business Law', href: '#services' },
    { name: 'IP Law', href: '#services' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Our Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
    { name: 'Careers', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Disclaimer', href: '#' },
    { name: 'Accessibility', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-heading font-bold">
                Leyva Lex <span className="text-gold">PLLC</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              "Smart legal solutions for the inevitable: Death & Taxes. 
              Serving Houston, Texas with dedication and expertise."
            </p>
            <div className="text-gray-400 space-y-1">
              <p>Houston, Texas</p>
              <p>(713) 555-LEYVA</p>
              <p>info@leyvalex.com</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-gold transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-gold transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-gold transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <p className="text-gray-400 text-center text-sm">
            © {new Date().getFullYear()} Leyva Lex PLLC. All rights reserved.
          </p>
          <p className="text-gray-500 text-center text-xs mt-2">
            Attorney Advertising. Prior results do not guarantee a similar outcome. 
            This website is not intended to create an attorney-client relationship.
          </p>
        </div>
      </div>
    </footer>
  )
}
