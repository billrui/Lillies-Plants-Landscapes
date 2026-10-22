import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <img src="/logo.png" alt="Lillies Logo" className="w-12 h-12 rounded-full border border-brand-gold/50" />
              <span className="text-white font-serif font-bold text-lg">Lillies</span>
            </div>
            <p className="text-sm italic text-brand-gold mt-3">"Greener Spaces, Brighter Tomorrows"</p>
            <p className="text-sm mt-3 text-gray-400">Professional landscaping, plants & cabro paving across Kenya.</p>
          </div>
          <div>
            <h4 className="text-white font-serif font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-brand-gold transition">Home</Link></li>
              <li><Link to="/services" className="hover:text-brand-gold transition">Services</Link></li>
              <li><Link to="/plants" className="hover:text-brand-gold transition">Plants</Link></li>
              <li><Link to="/cabro" className="hover:text-brand-gold transition">Cabro & Slabs</Link></li>
              <li><Link to="/contact" className="hover:text-brand-gold transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-serif font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center"> 0725 205 243</li>
              <li className="flex items-center break-all"> lillieslandscapes@gmail.com</li>
              <li className="flex items-start"> Kiambu, Kenya</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-serif font-semibold mb-3">Service Areas</h4>
            <p className="text-sm text-gray-400">Nairobi, Kiambu, Kajiado, Machakos & Countrywide</p>
            <p className="text-sm mt-3"><span className="text-white">Hours:</span> Mon–Sat, 7:30 AM – 6:00 PM</p>
          </div>
        </div>
        <div className="border-t border-brand/50 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Lillies Plants and Landscapes. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
