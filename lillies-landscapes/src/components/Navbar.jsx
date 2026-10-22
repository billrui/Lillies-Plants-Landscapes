import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

const links = [
  { name: 'Home', to: '/' },
  { name: 'Services', to: '/services' },
  { name: 'Plants', to: '/plants' },
  { name: 'Cabro & Slabs', to: '/cabro' },
  { name: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const isHome = location.pathname === '/'
  const solid = scrolled || !isHome

  return (
    <>
    <nav className={`fixed w-full z-50 transition-all duration-300 ${solid ? 'bg-white shadow-lg py-2' : 'bg-brand-dark/90 backdrop-blur-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/logo.png"
              alt="Lillies Plants & Landscapes"
              className={`w-12 h-12 md:w-16 md:h-16 object-contain rounded-full transition-all ${solid ? '' : 'bg-white/10 p-1'}`}
            />
            <div className="hidden sm:block">
              <h1 className={`text-lg md:text-xl font-serif font-bold leading-tight ${solid ? 'text-brand-dark' : 'text-white'}`}>Lillies</h1>
              <p className={`text-[10px] md:text-xs tracking-widest ${solid ? 'text-brand-gold' : 'text-brand-gold'}`}>PLANTS & LANDSCAPES</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className={({ isActive }) => `font-medium transition-colors ${isActive ? 'text-brand-gold' : solid ? 'text-gray-700 hover:text-brand' : 'text-white hover:text-brand-gold'}`}>
                {l.name}
              </NavLink>
            ))}
            <a href="tel:0725205243" className={`flex items-center space-x-1 px-4 py-2 rounded-full transition-colors ${solid ? 'bg-brand text-white hover:bg-brand-dark' : 'bg-brand-gold text-brand-dark hover:bg-yellow-500'}`}>
              <Phone className="w-4 h-4" />
              <span>0725 205 243</span>
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Menu">
            {open ? <X className={`w-6 h-6 ${solid ? 'text-gray-800' : 'text-white'}`} /> : <Menu className={`w-6 h-6 ${solid ? 'text-gray-800' : 'text-white'}`} />}
          </button>
        </div>
      </div>

    </nav>

    {open && (
      <div className="md:hidden fixed inset-0 z-[60] bg-brand-dark flex flex-col">
        <div className="flex items-center justify-between px-4 py-3">
          <Link to="/" onClick={() => setOpen(false)} className="flex items-center space-x-3">
            <img src="/logo.png" alt="Lillies Plants & Landscapes" className="w-12 h-12 object-contain rounded-full bg-white/10 p-1" />
            <div>
              <p className="text-lg font-serif font-bold text-white leading-tight">Lillies</p>
              <p className="text-[10px] tracking-widest text-brand-gold">PLANTS & LANDSCAPES</p>
            </div>
          </Link>
          <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2">
            <X className="w-8 h-8 text-white" />
          </button>
        </div>

        <div className="flex-1 flex flex-col justify-center px-8 space-y-2 overflow-y-auto">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}
              className={({ isActive }) => `block py-4 text-3xl font-serif font-bold border-b border-white/10 ${isActive ? 'text-brand-gold' : 'text-white hover:text-brand-gold'}`}>
              {l.name}
            </NavLink>
          ))}
        </div>

        <div className="px-8 pb-10 pt-4">
          <a href="tel:0725205243" className="flex items-center justify-center space-x-2 w-full py-4 bg-brand-gold text-brand-dark rounded-full font-bold text-lg">
            <Phone className="w-5 h-5" />
            <span>Call 0725 205 243</span>
          </a>
        </div>
      </div>
    )}
    </>
  )
}