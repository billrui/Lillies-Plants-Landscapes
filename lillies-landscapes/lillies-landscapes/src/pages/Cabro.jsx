import { ChevronRight } from 'lucide-react'

const cabro = {
  'Regular Cabro (60mm)': ['Grey', 'Black', 'Red', 'For parking & driveways'],
  '3D / Interlocking': ['Wave', 'Hexagon', 'Rectangle'],
  'Coloured Cabro': ['Charcoal Black', 'Terracotta Red', 'Yellow', 'Mixed Colour'],
  'Heavy Duty Cabro': ['80mm thickness', 'For heavy vehicles'],
  'Light Duty Cabro': ['60mm thickness', 'Walkways & home compounds'],
  'Finishes': ['Smooth', 'Brushed', 'Textured Non-Slip'],
  'Slabs': ['400x400mm', '600x600mm', 'Grey Slabs + White Pebbles Design'],
}

export default function Cabro() {
  return (
    <section className="pt-28 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Cabro Paving & Slabs</h1>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Quality paving solutions for driveways, parking areas, walkways and compound finishing.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(cabro).map(([cat, items]) => (
            <div key={cat} className="bg-stone-50 rounded-xl p-6 border border-stone-200 hover:shadow-md transition">
              <h2 className="text-lg font-semibold text-gray-800 mb-3">{cat}</h2>
              <ul className="space-y-2">
                {items.map((it, i) => (
                  <li key={i} className="text-gray-600 text-sm flex items-start">
                    <ChevronRight className="w-4 h-4 text-green-600 mr-1 flex-shrink-0 mt-0.5" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-green-700 text-white rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-2">Driveways & Parking</h3>
            <p className="text-green-100 text-sm">Heavy-duty 80mm cabro</p>
          </div>
          <div className="bg-green-600 text-white rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-2">Walkways & Compounds</h3>
            <p className="text-green-100 text-sm">60mm cabro & 3D interlocking</p>
          </div>
          <div className="bg-green-500 text-white rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-2">Slabs + Pebbles</h3>
            <p className="text-green-100 text-sm">Grey slabs with white pebbles</p>
          </div>
        </div>
      </div>
    </section>
  )
}
