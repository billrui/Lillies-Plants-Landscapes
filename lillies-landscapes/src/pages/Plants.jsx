import { useState } from 'react'
import PhotoModal, { img } from '../components/PhotoModal'

const palms = ['Foxtail palm', 'Licuala grandis palm', 'alexandria palm', 'bismarck palm', 'christmas palm', 'cycad palm',
  'dancing lady palm.jpeg', 'dwarf betelnut palm', 'fishtail palm', 'golden palm', 'livistona palm', 'peacock palm',
  'round bottom palm', 'royal palm', 'travellers palm', 'washingtonia palm']
  .map((n) => `trees/palm trees/${n.includes('.jpeg') ? n : n + '.jpg'}`)

const cypress = ['Italian cypress', 'leyland cypress', 'green thuja', 'Yellow thuja', 'blue thuja', 'green bookpage cypress', 'yellow bookpage cypress']
  .map((n) => `trees/Ornamental cypress/${n}.jpg`)

const roses = ['redrose flower.jpeg', 'pink rose flower.jpg', 'whiterose flower.jpg', 'yellowrose flower.jpg', 'orangerose flower.jpg',
  'purplerose flower.jpg', 'Peach and apricot rose flower.jpg', 'Burgundy and deep maroon rose flower.jpg'].map((n) => `flowers/rose/${n}`)

// Each item: [label, [photos]] — no photos means plain text (no photo supplied yet)
const plants = {
  'Lawn Grass': [
    ['Kikuyu Grass', ['grass/kikuyugrass.jpg']],
    ['Pemba Grass (Arabian)', ['grass/pembagrass.jpeg', 'grass/Arabic.jpg']],
    ['Zimbabwe Grass', ['grass/zimbabwegrass.jpg']],
    ['Maadi River Grass', ['grass/maadirivergrass.jpeg']],
  ],
  'Flowers': [
    ['Roses (all colours)', roses],
    ['Lavender', ['lavender flower.jpg']],
    ['Marigold', ['flowers/marigold.jpg']],
    ['Petunia', ['flowers/Petunia.jpg']],
    ['Bougainvillea', ['flowers/bouganvillea.jpeg']],
    ['Hibiscus', ['flowers/hibiscus.jpeg']],
  ],
  'Hedges': [
    ['Bamboo', ['hedge/bamboohedge.jpg']],
    ['Duranta Gold', ['hedge/durantahedge.jpg', 'goldendurantahedge.jpg']],
    ['Kei Apple', ['hedge/kei.jpeg']],
    ['Cypress', cypress],
    ['Boxwood', ['hedge/boxwoodhedge.jpg']],
  ],
  'Herbs': [
    ['Rosemary', ['herbs/rosemary..jpg']],
    ['Mint', ['herbs/mint.jpeg']],
    ['Basil', ['herbs/basil.jpeg']],
    ['Thyme', ['herbs/thyme.jpeg']],
    ['Sage', ['herbs/sage.jpeg']],
    ['Coriander', ['herbs/coriander.jpeg']],
  ],
  'Vegetables & Pepper': [
    ['Pilipili Hoho', []], ['Cayenne', []], ['Bulb Onions', []], ['Tomatoes', []],
  ],
  'Trees & Palms': [
    ['Palm Trees', palms],
    ['Crotons', ['trees/crotons.jpeg']],
    ['Agave', ['trees/Agave.jpeg']],
    ['Aloe Vera', ['trees/Aloe vera.jpg']],
    ['Frangipani', ['trees/Frangipani.jpeg']],
    ['Jacaranda', ['trees/jacaranda.jpg']],
  ],
  'Indoor Plants': [
    ['Snake Plant', ['indoor plants/snake plant.jpeg']],
    ['Monstera', ['indoor plants/Monstera.jpeg']],
    ['Money Plant', ['indoor plants/Money Plant.jpg']],
    ['Ferns', ['indoor plants/fernsjpeg']],
  ],
}

const dotColors = ['bg-green-500', 'bg-pink-400', 'bg-emerald-500', 'bg-lime-500', 'bg-red-400', 'bg-green-700', 'bg-teal-500']

export default function Plants() {
  const [open, setOpen] = useState(null)

  return (
    <section className="pt-28 pb-20 bg-green-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Plants & Varieties</h1>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">We supply and plant a wide variety of quality plants for every garden need. Tap a plant to see its photo.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(plants).map(([cat, items], idx) => (
            <div key={cat} className="bg-white rounded-xl p-6 shadow-sm border border-green-100 hover:shadow-md transition">
              <div className="flex items-center mb-4">
                
                <h2 className="text-xl font-semibold text-gray-800">{cat}</h2>
              </div>
              <ul className="space-y-2">
                {items.map(([name, photos]) => (
                  <li key={name}>
                    {photos.length ? (
                      <button onClick={() => setOpen({ title: name, photos })}
                        className="w-full flex items-center text-gray-600 hover:text-green-700 text-left group">
                        <img src={img(photos[0])} alt={name} loading="lazy"
                          className="w-10 h-10 rounded-lg object-cover mr-3 border border-green-100 group-hover:ring-2 ring-green-400" />
                        <span className="flex-1">{name}</span>
                        {photos.length > 1 && <span className="flex items-center text-xs text-gray-400">{photos.length}</span>}
                      </button>
                    ) : (
                      <div className="flex items-center text-gray-600">
                        <span className={`w-2 h-2 ${dotColors[idx % dotColors.length]} rounded-full mx-4`}></span>
                        {name}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {open && <PhotoModal {...open} onClose={() => setOpen(null)} />}
    </section>
  )
}
