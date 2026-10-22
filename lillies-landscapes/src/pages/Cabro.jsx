import { useState } from 'react'
import PhotoModal, { img } from '../components/PhotoModal'

const cabro = {
  'Regular Cabro (60mm)': { photos: ['Cabro/Regular Cabro (60mm)/60-mm-Interlocker-19.jpg', 'cabros.jpeg'], items: ['Grey', 'Black', 'Red', 'For parking & driveways'] },
  '3D / Interlocking': { photos: ['Cabro/3D Interlocking/3D interlocking.jpg'], items: ['Wave', 'Hexagon', 'Rectangle'] },
  'Coloured Cabro': { photos: ['Cabro/Coloured Cabro/Trihex-3D-coloured-cabros.jpg'], items: ['Charcoal Black', 'Terracotta Red', 'Yellow', 'Mixed Colour'] },
  'Heavy Duty Cabro': { photos: ['Cabro/Heavy Duty Cabro/83635660_NjIwLTEzNzgtMGY5MDI4YmNkOQ.webp', 'cabrosdriveway.jpeg'], items: ['80mm thickness', 'For heavy vehicles'] },
  'Light Duty Cabro': { photos: ['Cabro/Light Duty Cabro/images.jpeg'], items: ['60mm thickness', 'Walkways & home compounds'] },
  'Finishes': { photos: ['Cabro/Finishes/images (1).jpeg'], items: ['Smooth', 'Brushed', 'Textured Non-Slip'] },
  'Slabs': { photos: ['Cabro/Slabs/images.jpeg', 'Slabs & White Pebbles.jpeg', 'Slabs & White Pebbles1.jpeg'], items: ['400x400mm', '600x600mm', 'Grey Slabs + White Pebbles Design'] },
}

const banners = [
  { title: 'Driveways & Parking', desc: 'Heavy-duty 80mm cabro', color: 'bg-green-700', photos: ['cabrosdriveway.jpeg'] },
  { title: 'Walkways & Compounds', desc: '60mm cabro & 3D interlocking', color: 'bg-green-600', photos: ['cabros.jpeg', 'Cabro/3D Interlocking/3D interlocking.jpg'] },
  { title: 'Slabs + Pebbles', desc: 'Grey slabs with white pebbles', color: 'bg-green-500', photos: ['Slabs & White Pebbles.jpeg', 'Slabs & White Pebbles1.jpeg'] },
]

export default function Cabro() {
  const [open, setOpen] = useState(null)
  return (
    <section className="pt-28 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Cabro Paving & Slabs</h1>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Quality paving solutions for driveways, parking areas, walkways and compound finishing.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(cabro).map(([cat, { photos, items }]) => (
            <div key={cat} className="bg-stone-50 rounded-xl overflow-hidden border border-stone-200 hover:shadow-md transition">
              <button onClick={() => setOpen({ title: cat, photos })} className="block w-full h-48 bg-stone-200 relative group">
                <img src={img(photos[0])} alt={cat} loading="lazy" className="w-full h-full object-cover" />
                {photos.length > 1 && <span className="absolute bottom-2 right-2 text-xs bg-black/60 text-white rounded-full px-2 py-0.5">{photos.length} photos</span>}
              </button>
              <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-3">{cat}</h2>
              <ul className="space-y-2">
                {items.map((it, i) => (
                  <li key={i} className="text-gray-600 text-sm flex items-start">
                    
                    {it}
                  </li>
                ))}
              </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {banners.map((b) => (
            <button key={b.title} onClick={() => setOpen({ title: b.title, photos: b.photos })}
              className={`relative overflow-hidden ${b.color} text-white rounded-xl text-center min-h-[200px] flex items-center justify-center`}>
              <img src={img(b.photos[0])} alt={b.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-40" />
              <div className="relative p-8">
                <h3 className="text-xl font-bold mb-2">{b.title}</h3>
                <p className="text-green-50 text-sm">{b.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
      {open && <PhotoModal {...open} onClose={() => setOpen(null)} />}
    </section>
  )
}
