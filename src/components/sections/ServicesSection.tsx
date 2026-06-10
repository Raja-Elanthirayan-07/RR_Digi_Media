import { useNavigate } from 'react-router-dom'
import { services } from '@/constants/services'

export default function ServicesSection() {
  const navigate = useNavigate()

  return (
    <section id="services" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-primary">
          What We Offer
        </p>
        <h2 className="mt-3 text-4xl font-extrabold text-brand-text md:text-5xl">
          Our Printing <span className="text-gradient">Services</span>
        </h2>
        <div
          className="mx-auto mt-4 h-1 w-16 rounded-full"
          style={{
            background: 'linear-gradient(135deg, #D92B2B 0%, #F47920 100%)',
          }}
        />
        <p className="mt-4 text-base text-brand-muted">
          From flex banners to visiting cards - everything your business needs,
          printed right here in Mayiladuthurai.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.id}
            className="group relative cursor-default overflow-hidden rounded-2xl border border-slate-100 bg-white p-7 transition-all duration-300 hover:border-brand-primary/30 hover:shadow-xl"
          >
            <div
              className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-10"
              style={{
                background: 'linear-gradient(135deg, #D92B2B 0%, #F47920 100%)',
              }}
            />

            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-light text-2xl">
              {service.emoji}
            </div>
            <h3 className="text-lg font-bold text-brand-text">
              {service.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-muted">
              {service.description}
            </p>
            <button
              type="button"
              className="mt-5 flex cursor-pointer items-center gap-2 text-left"
              onClick={() => navigate('/pricing')}
            >
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{
                  background:
                    'linear-gradient(135deg, #D92B2B 0%, #F47920 100%)',
                }}
              />
              <span className="text-xs font-semibold text-brand-primary">
                View Pricing →
              </span>
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}
