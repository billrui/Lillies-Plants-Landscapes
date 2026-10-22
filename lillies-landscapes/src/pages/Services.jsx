import { useState } from 'react'
import PhotoModal, { img } from '../components/PhotoModal'

const services = [
  { title: 'Landscape Design & Master Planning', photos: ['2D.jpg'], desc: '3D & 2D landscape plans tailored to your property.' },
  { title: 'Lawn Installation & Maintenance', photos: ['grass/kikuyugrass.jpg', 'grass/zimbabwegrass.jpg', 'grass/maadirivergrass.jpeg', 'grass/pembagrass.jpeg'], desc: 'Kikuyu, Pemba (Arabian), Zimbabwe & Maadi River grass.' },
  { title: 'Cabro Paving & Driveways', photos: ['cabrosdriveway.jpeg', 'cabros.jpeg'], desc: 'Parking, walkways, heavy-duty & light-duty paving.' },
  { title: 'Flower Beds & Rose Gardens', photos: ['flowerbed1.jpg', 'flowerbed2.jpg', 'flower bed.jpeg'], desc: 'Rose gardens, herb gardens, pepper & kitchen gardens.' },
  { title: 'Irrigation Systems', photos: ['irrigationsystem.jpg', 'irrigationsystem1.jpg'], desc: 'Garden maintenance, pruning and irrigation installation.' },
  { title: 'Bamboo Hedges & Privacy', photos: ['hedge/bamboohedge.jpg', 'hedge/durantahedge.jpg', 'hedge/boxwoodhedge.jpg', 'hedge/kei.jpeg'], desc: 'Bamboo, Duranta Gold, Kei Apple, Cypress & Boxwood.' },
  { title: 'Terrazzo & Gazebo Construction', photos: ['gazebo.jpeg', 'terrazo.jpg', 'terrazo.jpeg'], desc: 'Gazebo building, terrazzo finishing & pool surrounds.' },
  { title: 'Trees, Shrubs & Indoor Plants', photos: ['trees/jacaranda.jpg', 'trees/Frangipani.jpeg', 'indoor1.jpg'], desc: 'Supply and planting of quality trees, shrubs & indoor plants.' },
  { title: 'Generator Area Beautification', photos: ['generator area.jpg'], desc: 'Compound finishing and generator area landscaping.' },
  { title: 'Slabs & White Pebbles', photos: ['Slabs & White Pebbles.jpeg', 'Slabs & White Pebbles1.jpeg'], desc: '400x400mm & 600x600mm grey slabs with white pebble designs.' },
  { title: 'Swimming Pool Landscaping', photos: ['swimmingpool.jpg'], desc: 'Landscaping and surrounds for swimming pools.' },
  { title: 'Garden Maintenance', photos: ['gardenmaintenance.jpeg'], desc: 'Ongoing pruning, weeding and garden care contracts.' },
]

export default function Services() {
  const [open, setOpen] = useState(null)
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
            <div key={i} className="bg-stone-50 rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all border border-stone-100">
              <button onClick={() => setOpen({ title: s.title, photos: s.photos })} className="block w-full h-48 relative">
                <img src={img(s.photos[0])} alt={s.title} loading="lazy" className="w-full h-full object-cover" />
                {s.photos.length > 1 && <span className="absolute bottom-2 right-2 text-xs bg-black/60 text-white rounded-full px-2 py-0.5">{s.photos.length} photos</span>}
              </button>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-green-900 rounded-2xl p-10 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Need a custom solution?</h2>
          <p className="text-green-200 mb-6">Talk to us about your unique landscaping project.</p>
          <a href="tel:0725205243" className="inline-block px-8 py-3 bg-green-500 rounded-full font-semibold hover:bg-green-400">Call 0725 205 243</a>
        </div>
      </div>
      {open && <PhotoModal {...open} onClose={() => setOpen(null)} />}
    </section>
  )
}
