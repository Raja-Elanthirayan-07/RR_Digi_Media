import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  galleryCategories,
  galleryItems,
  type GalleryCategory,
} from '@/constants/gallery'

const aspectRatioClasses = {
  landscape: 'aspect-video',
  portrait: 'aspect-[3/4]',
  square: 'aspect-square',
} as const

export default function GallerySection() {
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All')

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <section id="gallery" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-primary">
          Our Work
        </p>
        <h2 className="mt-3 text-4xl font-extrabold text-brand-text md:text-5xl">
          Work That <span className="text-gradient">Speaks</span>
        </h2>
        <div
          className="mx-auto mt-4 h-1 w-16 rounded-full"
          style={{
            background: 'linear-gradient(135deg, #D92B2B 0%, #F47920 100%)',
          }}
        />
        <p className="mt-4 text-center text-base text-brand-muted">
          Placeholder gallery - real customer work coming soon. Every print
          tells a story.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {galleryCategories.map((category) => {
          const isActive = activeCategory === category

          return (
            <button
              key={category}
              type="button"
              className={`rounded-full px-5 py-2 text-sm transition ${
                isActive
                  ? 'font-semibold text-white shadow-md'
                  : 'border border-slate-200 bg-white font-medium text-brand-muted hover:border-brand-primary hover:text-brand-primary'
              }`}
              style={
                isActive
                  ? {
                      background:
                        'linear-gradient(135deg, #D92B2B 0%, #F47920 100%)',
                    }
                  : undefined
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          )
        })}
      </div>

      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-3">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className={`group relative cursor-default overflow-hidden rounded-2xl ${aspectRatioClasses[item.aspectRatio]}`}
          >
            <div
              className="absolute inset-0 flex transform flex-col items-center justify-center transition-transform duration-300 group-hover:scale-105"
              style={{ backgroundColor: item.bgColor }}
            >
              <span className="text-5xl md:text-6xl">{item.emoji}</span>
              <span className="mt-3 px-2 text-center text-xs font-semibold text-brand-muted">
                {item.label}
              </span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-brand-dark/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-sm font-semibold text-white">
                View Full Size
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="mb-6 text-sm text-brand-muted">
          Like what you see? Get your own custom print today.
        </p>
        <button
          type="button"
          className="rounded-full px-8 py-4 font-semibold text-white shadow-lg transition hover:opacity-90"
          style={{
            background: 'linear-gradient(135deg, #D92B2B 0%, #F47920 100%)',
          }}
          onClick={() => navigate('/contact')}
        >
          Get a Quote {'\u2192'}
        </button>
      </div>
    </section>
  )
}
