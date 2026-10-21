import { Link } from 'react-router-dom'
import { Leaf, ChevronRight, TreePine, Sun, Flower2, Phone } from 'lucide-react'

const highlights = [
  { icon: <TreePine className="w-10 h-10" />, title: 'Landscaping', desc: 'Design & installation' },
  { icon: <Flower2 className="w-10 h-10" />, title: 'Plants', desc: 'Wide variety available' },
  { icon: <Sun className="w-10 h-10" />, title: 'Cabro Paving', desc: 'Driveways & walkways' },
  { icon: <Leaf className="w-10 h-10" />, title: 'Maintenance', desc: 'Pruning & irrigation' },
]

export default function Home() {
  return (
    <>
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-emerald-900"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 border-2 border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 border-2 border-white rounded-full"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Leaf className="w-16 h-16 text-green-300 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">Lillies Plants <span className="text-green-300">&</span> Landscapes</h1>
          <p className="text-xl md:text-2xl text-green-100 mb-2 italic">"We Design Nature, You Enjoy Life"</p>
          <p className="text-lg text-green-200 mb-8 max-w-2xl mx-auto">Transforming outdoor spaces across Nairobi, Kiambu, Kajiado, Machakos & Countrywide</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services" className="px-8 py-3 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-colors">Explore Services</Link>
            <Link to="/contact" className="px-8 py-3 bg-white text-green-800 rounded-full font-semibold hover:bg-green-50 transition-colors">Get a Free Quote</Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"><ChevronRight className="w-6 h-6 text-white rotate-90" /></div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What We Do</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">From design to delivery — we handle every aspect of your outdoor transformation.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, i) => (
              <div key={i} className="text-center p-8 bg-green-50 rounded-xl hover:shadow-lg transition-all">
                <div className="text-green-700 flex justify-center mb-4">{h.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{h.title}</h3>
                <p className="text-gray-600 text-sm">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Space?</h2>
          <p className="text-green-200 text-lg mb-8">Call or WhatsApp us today for a free consultation and quote.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0725205243" className="inline-flex items-center justify-center px-8 py-3 bg-green-500 text-white rounded-full font-semibold hover:bg-green-400">
              <Phone className="w-5 h-5 mr-2" /> Call 0725 205 243
            </a>
            <a href="https://wa.me/254725205243" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3 bg-white text-green-800 rounded-full font-semibold hover:bg-green-50">WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  )
}
