// Ascending circle gallery (design box is 330 x 660; positions/sizes in px, scaled by CSS)
const bubbles = [
  { src: '/hero/boxwood.jpg',    alt: 'Clipped boxwood shrubs',      size: 80,  x: 0,   y: 580, delay: '0s',   dur: '7s'  },
  { src: '/hero/italian.jpg',    alt: 'Italian cypress trees',       size: 105, x: 40,  y: 505, delay: '1.2s', dur: '8s'  },
  { src: '/hero/lawn-mower.jpg', alt: 'Trimming a lush lawn',        size: 135, x: 95,  y: 400, delay: '0.6s', dur: '9s'  },
  { src: '/hero/thuja.jpg',      alt: 'Golden thuja tree',           size: 165, x: 125, y: 300, delay: '2s',   dur: '7.5s' },
  { src: '/hero/royal-palm.jpg', alt: 'Royal palm under blue sky',   size: 190, x: 105, y: 165, delay: '1.6s', dur: '10s' },
  { src: '/hero/nice-lawn.jpg',  alt: 'Manicured lawn with hedges',  size: 230, x: 95,  y: 10,  delay: '0.3s', dur: '8.5s' },
]

const highlights = [
  { title: 'Landscaping', desc: 'Design & installation' },
  { title: 'Plants', desc: 'Wide variety available' },
  { title: 'Cabro Paving', desc: 'Driveways & walkways' },
  { title: 'Maintenance', desc: 'Pruning & irrigation' },
]

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen py-28 flex items-center justify-center overflow-hidden">
        {/* Hero background photo + dark green overlay for readability */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/hero/background.jpg')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/90 via-brand/75 to-brand-dark/90"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 border-2 border-brand-gold rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 border-2 border-brand-gold rounded-full"></div>
        </div>

        {/* Decorative ascending circle gallery — absolutely positioned on the right, never affects centering */}
        <div className="hero-gallery hidden xl:block" aria-hidden="true">
          {bubbles.map((b) => (
            <div key={b.src} className="hero-bubble"
              style={{ width: b.size, height: b.size, left: b.x, top: b.y, animationDelay: b.delay, animationDuration: b.dur }}>
              <img src={b.src} alt={b.alt} loading="lazy" />
            </div>
          ))}
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <img src="/logo.png" alt="Lillies Logo" className="w-32 h-32 md:w-40 md:h-40 object-contain mx-auto mb-6 drop-shadow-2xl rounded-full border-4 border-brand-gold/30" />

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4">
            Lillies <span className="text-brand-gold">Plants</span> & Landscapes
          </h1>

          <p className="text-lg md:text-xl text-brand-gold tracking-widest font-semibold mb-4 uppercase">
            Greener Spaces • Brighter Tomorrows
          </p>

          <p className="text-md md:text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Transforming outdoor spaces across Nairobi, Kiambu, Kajiado, Machakos & Countrywide
          </p>

          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#services" className="px-8 py-3 bg-brand-gold text-brand-dark rounded-full font-bold hover:bg-yellow-500 transition-colors shadow-lg">
                Explore Services
              </a>
              <a href="#plants" className="px-8 py-3 bg-brand-gold text-brand-dark rounded-full font-bold hover:bg-yellow-500 transition-colors shadow-lg">
                Plants
              </a>
              <a href="#cabro" className="px-8 py-3 bg-brand-gold text-brand-dark rounded-full font-bold hover:bg-yellow-500 transition-colors shadow-lg">
                Cabro & Slabs
              </a>
            </div>
            <a
              href="https://wa.me/254725205243?text=Hello%20Lillies%2C%20I%27d%20like%20a%20free%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-full font-semibold hover:bg-white/20 transition-colors"
            >
              Get a Free Quote
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          
        </div>
      </section>

      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-4">What We Do</h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">From design to delivery — we handle every aspect of your outdoor transformation.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, i) => (
              <div key={i} className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <h3 className="text-lg font-serif font-bold text-brand-dark mb-1">{h.title}</h3>
                <p className="text-gray-600 text-sm">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Ready to Transform Your Space?</h2>
          <p className="text-brand-cream/80 text-lg mb-8">Call or WhatsApp us today for a free consultation and quote.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0725205243" className="inline-flex items-center justify-center px-8 py-3 bg-brand-gold text-brand-dark rounded-full font-bold hover:bg-yellow-500 shadow-lg">
               Call 0725 205 243
            </a>
            <a href="https://wa.me/254725205243" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3 bg-white/10 text-white border border-white/30 rounded-full font-semibold hover:bg-white/20">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}