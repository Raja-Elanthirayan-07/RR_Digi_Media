import { useNavigate } from 'react-router-dom'

const trustItems = ['Fast Service', 'Affordable Pricing', 'Quality Printing']

const stats = [
  { number: '500+', label: 'Happy Clients' },
  { number: '10+', label: 'Years Experience' },
  { number: '15+', label: 'Print Services' },
]

const serviceTags = [
  { emoji: '🖨️', label: 'Flex Printing' },
  { emoji: '⭐', label: 'Star Flex' },
  { emoji: '🏷️', label: 'Vinyl Print' },
  { emoji: '🎌', label: 'Banners' },
  { emoji: '💌', label: 'Invitations' },
  { emoji: '💼', label: 'Visiting Cards' },
]

export default function Hero() {
  const navigate = useNavigate()

  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden px-6 py-20 md:py-0"
      style={{
        background: 'linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 100%)',
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse at 70% 50%, rgba(217,43,43,0.15) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-16 md:grid-cols-2 md:items-center">
        <div className="flex flex-col gap-6">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-primary/40 bg-brand-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-secondary">
            ⚡ Mayiladuthurai&apos;s Trusted Print Partner
          </div>

          <h1 className="flex flex-col gap-1 text-5xl font-extrabold leading-tight text-white md:text-6xl">
            <span>Premium Printing</span>
            <span className="text-gradient">&amp; Advertising</span>
            <span>Solutions</span>
          </h1>

          <p className="text-lg text-slate-400">
            Flex • Star Flex • Vinyl • Banners • Invitations • Visiting Cards
          </p>

          <div className="flex flex-wrap items-center gap-2">
            {trustItems.map((item, index) => (
              <span key={item} className="flex items-center gap-2">
                <span className="text-sm font-medium text-slate-300">
                  {item}
                </span>
                {index < trustItems.length - 1 && (
                  <span className="text-brand-secondary">✦</span>
                )}
              </span>
            ))}
          </div>

          <div className="mt-2 flex flex-wrap gap-3">
            <button
              type="button"
              className="rounded-full px-8 py-4 font-bold text-white shadow-lg shadow-red-900/30 transition hover:opacity-90"
              style={{
                background: 'linear-gradient(135deg, #D92B2B 0%, #F47920 100%)',
              }}
              onClick={() => navigate('/contact')}
            >
              Get a Quote
            </button>
            <a
              href="tel:9025647318"
              className="rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              📞 Call Now
            </a>
            <a
              href="https://wa.me/919025647318"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-green-500/50 px-8 py-4 font-semibold text-green-400 transition hover:bg-green-500/10"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <div className="mb-6 grid grid-cols-3 gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-white/10 p-4 text-center"
              >
                <p className="text-2xl font-extrabold text-white">
                  {stat.number}
                </p>
                <p className="mt-1 text-xs text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3">
            {serviceTags.map((tag) => (
              <div
                key={tag.label}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3"
              >
                <span className="text-xl">{tag.emoji}</span>
                <span className="text-sm font-medium text-slate-300">
                  {tag.label}
                </span>
              </div>
            ))}
          </div>

          <div
            className="mt-6 rounded-2xl px-4 py-3 text-center text-sm font-semibold text-white"
            style={{
              background: 'linear-gradient(135deg, #D92B2B 0%, #F47920 100%)',
            }}
          >
            Same Day Service Available
          </div>
        </div>
      </div>
    </section>
  )
}
