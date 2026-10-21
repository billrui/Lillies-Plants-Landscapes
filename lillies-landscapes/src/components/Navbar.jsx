import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Leaf } from 'lucide-react'

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

  const isHome = location.pathname === '/'
  const solid = scrolled || !isHome

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${solid ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className={`w-8 h-8 ${solid ? 'text-green-700' : 'text-white'}`} />
            <div>
              <h1 className={`text-lg md:text-xl font-bold leading-tight ${solid ? 'text-green-800' : 'text-white'}`}>Lillies Plants</h1>
              <p className={`text-[10px] md:text-xs ${solid ? 'text-green-600' : 'text-green-100'}`}>& Landscapes</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className={({ isActive }) => `font-medium transition-colors ${isActive ? 'text-green-600' : solid ? 'text-gray-700 hover:text-green-700' : 'text-white hover:text-green-200'}`}>
                {l.name}
              </NavLink>
            ))}
            <a href="tel:0725205243" className={`flex items-center space-x-1 px-4 py-2 rounded-full transition-colors ${solid ? 'bg-green-700 text-white hover:bg-green-800' : 'bg-white text-green-800 hover:bg-green-50'}`}>
              <Phone className="w-4 h-4" />
              <span>0725 205 243</span>
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Menu">
            {open ? <X className={`w-6 h-6 ${solid ? 'text-gray-800' : 'text-white'}`} /> : <Menu className={`w-6 h-6 ${solid ? 'text-gray-800' : 'text-white'}`} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow-lg mt-2">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)} className={({ isActive }) => `block px-3 py-2 rounded-md ${isActive ? 'bg-green-50 text-green-700 font-semibold' : 'text-gray-700 hover:bg-green-50'}`}>
                {l.name}
              </NavLink>
            ))}
            <a href="tel:0725205243" className="block px-3 py-2 bg-green-700 text-white rounded-md text-center mt-2">Call 0725 205 243</a>
          </div>
        </div>
      )}
    </nav>
  )
}
