const features = [
  {
    emoji: '💰',
    title: 'Affordable Pricing',
    description:
      'Competitive rates for every budget. Bulk discounts available for large orders.',
  },
  {
    emoji: '⚡',
    title: 'Fast Turnaround',
    description: 'Same day and next day delivery options for urgent requirements.',
  },
  {
    emoji: '🎨',
    title: 'Custom Design Support',
    description:
      'Our team helps you design from scratch or works with your existing artwork.',
  },
  {
    emoji: '✅',
    title: 'Quality Materials',
    description: 'We use premium inks and materials to ensure prints that last.',
  },
  {
    emoji: '🤝',
    title: 'Local Customer Service',
    description:
      'Walk in, call, or WhatsApp - real people, real support, every time.',
  },
  {
    emoji: '📦',
    title: 'Bulk Order Capability',
    description:
      'Equipped to handle large volume orders without compromising quality.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-brand-dark px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-secondary">
          Why Customers Trust Us
        </p>
        <h2 className="mt-3 text-4xl font-extrabold text-white md:text-5xl">
          Why Choose <span className="text-gradient">RR Digi Media</span>?
        </h2>
        <div
          className="mx-auto mt-4 h-1 w-16 rounded-full"
          style={{
            background: 'linear-gradient(135deg, #D92B2B 0%, #F47920 100%)',
          }}
        />
        <p className="mt-4 text-base text-slate-400">
          Quality, speed, and honest pricing - every order, every time.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:border-brand-primary/40 hover:bg-white/10"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-2xl">
              {feature.emoji}
            </div>
            <h3 className="text-lg font-bold text-white">{feature.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              {feature.description}
            </p>
            <div
              className="mt-5 h-0.5 w-8 rounded-full"
              style={{
                background: 'linear-gradient(135deg, #D92B2B 0%, #F47920 100%)',
              }}
            />
          </article>
        ))}
      </div>
    </section>
  )
}
