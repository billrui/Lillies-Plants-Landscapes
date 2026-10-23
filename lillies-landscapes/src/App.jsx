import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Services from './pages/Services'
import Plants from './pages/Plants'
import Cabro from './pages/Cabro'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div id="home"><Home /></div>
        <div id="services"><Services /></div>
        <div id="plants"><Plants /></div>
        <div id="cabro"><Cabro /></div>
        <div id="contact"><Contact /></div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
