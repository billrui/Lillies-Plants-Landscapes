import { Leaf } from 'lucide-react'

const plants = {
  'Lawn Grass': ['Kikuyu Grass', 'Pemba Grass (Arabian)', 'Zimbabwe Grass', 'Maadi River Grass'],
  'Flowers': ['Roses (all colours)', 'Lavender', 'Marigold', 'Petunia', 'Bougainvillea', 'Hibiscus'],
  'Hedges': ['Bamboo', 'Duranta Gold', 'Kei Apple', 'Cypress', 'Boxwood'],
  'Herbs': ['Rosemary', 'Mint', 'Basil', 'Thyme', 'Sage', 'Coriander'],
  'Vegetables & Pepper': ['Pilipili Hoho', 'Cayenne', 'Bulb Onions', 'Tomatoes'],
  'Trees & Palms': ['Palm Trees', 'Crotons', 'Agave', 'Aloe Vera', 'Frangipani', 'Jacaranda'],
  'Indoor Plants': ['Snake Plant', 'Monstera', 'Money Plant', 'Ferns'],
}

const dotColors = ['bg-green-500', 'bg-pink-400', 'bg-emerald-500', 'bg-lime-500', 'bg-red-400', 'bg-green-700', 'bg-teal-500']

export default function Plants() {
  return (
    <section className="pt-28 pb-20 bg-green-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Plants & Varieties</h1>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">We supply and plant a wide variety of quality plants for every garden need.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(plants).map(([cat, items], idx) => (
            <div key={cat} className="bg-white rounded-xl p-6 shadow-sm border border-green-100 hover:shadow-md transition">
              <div className="flex items-center mb-4">
                <Leaf className="w-6 h-6 text-green-700 mr-2" />
                <h2 className="text-xl font-semibold text-gray-800">{cat}</h2>
              </div>
              <ul className="space-y-2">
                {items.map((it, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <span className={`w-2 h-2 ${dotColors[idx % dotColors.length]} rounded-full mr-3`}></span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
