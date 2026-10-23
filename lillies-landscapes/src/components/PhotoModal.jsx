import { useEffect, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

// Build a URL for a file in /public (handles spaces, &, etc.)
export const img = (path) => encodeURI('/' + path)

// "trees/palm trees/Foxtail palm.jpg" -> "Foxtail palm"
export const caption = (path) =>
  path.split('/').pop().replace(/\.[^.]+$/, '').replace(/\.+$/, '').replace(/\s*flower$/i, '')

export default function PhotoModal({ title, photos, onClose }) {
  const [i, setI] = useState(0)
  const many = photos.length > 1
  const prev = () => setI((i + photos.length - 1) % photos.length)
  const next = () => setI((i + 1) % photos.length)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (many && e.key === 'ArrowLeft') prev()
      if (many && e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  useEffect(() => {
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prevOverflow }
  }, [])

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 overflow-y-auto" onClick={onClose}>
     <div className="min-h-full flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between px-5 py-3 border-b">
          <h3 className="font-semibold text-gray-800">{title}</h3>
          <button onClick={onClose} aria-label="Close" className="p-1 rounded hover:bg-gray-100"><X className="w-5 h-5" /></button>
        </div>
        <div className="relative bg-stone-100 flex items-center justify-center">
          <img src={img(photos[i])} alt={caption(photos[i])} className="max-h-[70vh] w-auto object-contain" />
          {many && (
            <>
              <button onClick={prev} aria-label="Previous" className="absolute left-2 p-2 rounded-full bg-white/80 hover:bg-white shadow"><ChevronLeft className="w-5 h-5" /></button>
              <button onClick={next} aria-label="Next" className="absolute right-2 p-2 rounded-full bg-white/80 hover:bg-white shadow"><ChevronRight className="w-5 h-5" /></button>
            </>
          )}
        </div>
        <div className="px-5 py-3 text-sm text-gray-600 flex justify-between">
          <span>{caption(photos[i])}</span>
          {many && <span>{i + 1} / {photos.length}</span>}
        </div>
      </div>
     </div>
    </div>
  )
}
