import { Link } from 'react-router-dom'
import { Leaf, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <Leaf className="w-6 h-6 text-green-500" />
              <span className="text-white font-bold">Lillies Plants</span>
            </div>
            <p className="text-sm italic text-green-500">"We Design Nature, You Enjoy Life"</p>
            <p className="text-sm mt-3">Professional landscaping, plants & cabro paving across Kenya.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-green-400">Home</Link></li>
              <li><Link to="/services" className="hover:text-green-400">Services</Link></li>
              <li><Link to="/plants" className="hover:text-green-400">Plants</Link></li>
              <li><Link to="/cabro" className="hover:text-green-400">Cabro & Slabs</Link></li>
              <li><Link to="/contact" className="hover:text-green-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center"><Phone className="w-4 h-4 mr-2 text-green-500" /> 0725 205 243</li>
              <li className="flex items-center break-all"><Mail className="w-4 h-4 mr-2 text-green-500" /> lillieslandscapes@gmail.com</li>
              <li className="flex items-start"><MapPin className="w-4 h-4 mr-2 text-green-500 mt-0.5" /> Kiambu, Kenya</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Service Areas</h4>
            <p className="text-sm">Nairobi, Kiambu, Kajiado, Machakos & Countrywide</p>
            <p className="text-sm mt-3"><span className="text-white">Hours:</span> Mon–Sat, 7:30 AM – 6:00 PM</p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center text-sm">
          © {new Date().getFullYear()} Lillies Plants and Landscapes. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
