import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <section className="pt-28 pb-20 bg-green-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-4"></div>
          <p className="text-green-200 max-w-2xl mx-auto">Ready to transform your outdoor space? Contact us today for a free consultation.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="text-center p-6 bg-green-800/50 rounded-xl">
            <Phone className="w-10 h-10 text-green-300 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Phone / WhatsApp</h3>
            <a href="tel:0725205243" className="text-green-200 hover:text-white">0725 205 243</a>
          </div>
          <div className="text-center p-6 bg-green-800/50 rounded-xl">
            <Mail className="w-10 h-10 text-green-300 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Email</h3>
            <a href="mailto:lillieslandscapes@gmail.com" className="text-green-200 hover:text-white text-sm break-all">lillieslandscapes@gmail.com</a>
          </div>
          <div className="text-center p-6 bg-green-800/50 rounded-xl">
            <MapPin className="w-10 h-10 text-green-300 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Location</h3>
            <p className="text-green-200">Kiambu, Central Province, Kenya</p>
            <p className="text-green-300 text-sm mt-1">Serving Nairobi, Kiambu, Kajiado, Machakos & Countrywide</p>
          </div>
          <div className="text-center p-6 bg-green-800/50 rounded-xl">
            <Clock className="w-10 h-10 text-green-300 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Working Hours</h3>
            <p className="text-green-200">Mon – Sat</p>
            <p className="text-green-300 text-sm mt-1">7:30 AM – 6:00 PM</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-green-800/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Send us a message</h2>
            <form onSubmit={(e) => {
              e.preventDefault()
              const name = e.target.name.value
              const phone = e.target.phone.value
              const message = e.target.message.value
              const url = `https://wa.me/254725205243?text=${encodeURIComponent(`Hi Lillies Plants, I'm ${name} (${phone}). ${message}`)}`
              window.open(url, '_blank')
            }} className="space-y-4">
              <input name="name" required placeholder="Your name" className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400" />
              <input name="phone" required placeholder="Your phone" className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400" />
              <textarea name="message" required rows={4} placeholder="Tell us about your project..." className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400" />
              <button type="submit" className="w-full py-3 bg-green-500 hover:bg-green-400 rounded-lg font-semibold transition-colors">Send via WhatsApp</button>
            </form>
          </div>
          <div className="bg-green-800/50 rounded-2xl p-8 flex flex-col justify-center text-center">
            <Phone className="w-12 h-12 text-green-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Prefer to chat?</h2>
            <p className="text-green-200 mb-6">Reach us directly on WhatsApp for the fastest response.</p>
            <a href="https://wa.me/254725205243" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-green-500 rounded-full font-semibold hover:bg-green-400">Open WhatsApp</a>
            <a href="tel:0725205243" className="mt-4 text-green-200 hover:text-white">Or call 0725 205 243</a>
          </div>
        </div>
      </div>
    </section>
  )
}
