import { Leaf, TreePine, Sun, Flower2, Droplets, MapPin } from 'lucide-react'

const services = [
  { icon: <Leaf className="w-8 h-8" />, title: 'Landscape Design & Master Planning', desc: '3D & 2D landscape plans tailored to your property.' },
  { icon: <TreePine className="w-8 h-8" />, title: 'Lawn Installation & Maintenance', desc: 'Kikuyu, Pemba (Arabian), Zimbabwe & Maadi River grass.' },
  { icon: <Sun className="w-8 h-8" />, title: 'Cabro Paving & Driveways', desc: 'Parking, walkways, heavy-duty & light-duty paving.' },
  { icon: <Flower2 className="w-8 h-8" />, title: 'Flower Beds & Rose Gardens', desc: 'Rose gardens, herb gardens, pepper & kitchen gardens.' },
  { icon: <Droplets className="w-8 h-8" />, title: 'Irrigation Systems', desc: 'Garden maintenance, pruning and irrigation installation.' },
  { icon: <TreePine className="w-8 h-8" />, title: 'Bamboo Hedges & Privacy', desc: 'Bamboo, Duranta Gold, Kei Apple, Cypress & Boxwood.' },
  { icon: <Sun className="w-8 h-8" />, title: 'Terrazzo & Gazebo Construction', desc: 'Gazebo building, terrazzo finishing & pool surrounds.' },
  { icon: <Leaf className="w-8 h-8" />, title: 'Trees, Shrubs & Indoor Plants', desc: 'Supply and planting of quality trees, shrubs & indoor plants.' },
  { icon: <MapPin className="w-8 h-8" />, title: 'Generator Area Beautification', desc: 'Compound finishing and generator area landscaping.' },
  { icon: <Sun className="w-8 h-8" />, title: 'Slabs & White Pebbles', desc: '400x400mm & 600x600mm grey slabs with white pebble designs.' },
  { icon: <TreePine className="w-8 h-8" />, title: 'Swimming Pool Landscaping', desc: 'Landscaping and surrounds for swimming pools.' },
  { icon: <Droplets className="w-8 h-8" />, title: 'Garden Maintenance', desc: 'Ongoing pruning, weeding and garden care contracts.' },
]

export default function Services() {
  return (
    <section className="pt-28 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Services</h1>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive landscaping and paving solutions delivered by experienced professionals.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="p-6 bg-stone-50 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all border border-stone-100">
              <div className="text-green-700 mb-4">{s.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-green-900 rounded-2xl p-10 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Need a custom solution?</h2>
          <p className="text-green-200 mb-6">Talk to us about your unique landscaping project.</p>
          <a href="tel:0725205243" className="inline-block px-8 py-3 bg-green-500 rounded-full font-semibold hover:bg-green-400">Call 0725 205 243</a>
        </div>
      </div>
    </section>
  )
}
