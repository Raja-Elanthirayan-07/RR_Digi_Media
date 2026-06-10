interface ContactCard {
  id: 'phone' | 'whatsapp' | 'email'
  icon: string
  label: string
  href: string
  value: string
  subtext: string
  external?: boolean
}

const contactCards: ContactCard[] = [
  {
    id: 'phone',
    icon: '\u{1F4DE}',
    label: 'Call Us',
    href: 'tel:9025647318',
    value: '9025647318',
    subtext: 'Mon-Sat, 9am-8pm',
  },
  {
    id: 'whatsapp',
    icon: '\u{1F4AC}',
    label: 'WhatsApp Us',
    href: 'https://wa.me/919025647318',
    value: '+91 90256 47318',
    subtext: 'Quick replies guaranteed',
    external: true,
  },
  {
    id: 'email',
    icon: '\u{2709}\u{FE0F}',
    label: 'Email Us',
    href: 'mailto:rrdigimedia.myl@gmail.com',
    value: 'rrdigimedia.myl@gmail.com',
    subtext: "We'll respond within 24 hours",
  },
]

const hours = [
  { day: 'Monday - Saturday', time: '9:00 AM - 8:00 PM' },
  { day: 'Sunday', time: '10:00 AM - 4:00 PM' },
  { day: 'Public Holidays', time: 'Call to confirm' },
] as const

export default function ContactSection() {
  return (
    <section id="contact" className="bg-brand-dark px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-secondary">
          Get In Touch
        </p>
        <h2 className="mt-3 text-4xl font-extrabold text-white md:text-5xl">
          Let&apos;s Print <span className="text-gradient">Something</span>
        </h2>
        <div
          className="mx-auto mt-4 h-1 w-16 rounded-full"
          style={{
            background: 'linear-gradient(135deg, #D92B2B 0%, #F47920 100%)',
          }}
        />
        <p className="mt-4 text-center text-base text-slate-400">
          Walk in, call, or WhatsApp - we&apos;re here to help you get the
          perfect print.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl items-start gap-12 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          {contactCards.map((card) => (
            <div
              key={card.id}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:bg-white/10"
            >
              <div
                className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-xl"
                style={{
                  background:
                    'linear-gradient(135deg, #D92B2B 0%, #F47920 100%)',
                }}
              >
                {card.icon}
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-400">
                  {card.label}
                </p>
                <a
                  href={card.href}
                  target={card.external ? '_blank' : undefined}
                  rel={card.external ? 'noopener noreferrer' : undefined}
                  className={`transition hover:text-brand-secondary ${
                    card.id === 'email'
                      ? 'break-all font-bold text-white'
                      : 'text-xl font-bold text-white'
                  }`}
                >
                  {card.value}
                </a>
                <p className="mt-1 text-xs text-slate-500">{card.subtext}</p>
              </div>
            </div>
          ))}

          <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div
              className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-xl"
              style={{
                background: 'linear-gradient(135deg, #D92B2B 0%, #F47920 100%)',
              }}
            >
              {'\u{1F4CD}'}
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-400">
                Visit Us
              </p>
              <p className="mt-1 text-sm leading-relaxed text-white">
                RR Digi Media
                <br />
                24/50 Visalam Complex,
                <br />
                Town Extension Road, Old Bus Stop Back Side,
                <br />
                Mayiladuthurai - 609001, Tamil Nadu
              </p>
              <p className="mt-2 text-xs text-slate-500">Near Old Bus Stop</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="tel:9025647318"
              className="rounded-full py-4 text-center font-bold text-white shadow-lg transition hover:opacity-90"
              style={{
                background: 'linear-gradient(135deg, #D92B2B 0%, #F47920 100%)',
              }}
            >
              {'\u{1F4DE}'} Call Now - 9025647318
            </a>
            <a
              href="https://wa.me/919025647318"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-green-500 py-4 text-center font-bold text-green-400 transition hover:bg-green-500/10"
            >
              {'\u{1F4AC}'} Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="w-full overflow-hidden rounded-2xl border border-white/10">
            <iframe
              src="https://maps.google.com/maps?q=Mayiladuthurai,Tamil+Nadu,India&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="280"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RR Digi Media Location"
              className="w-full"
            />
            <div className="border-t border-white/10 bg-white/5 px-4 py-3">
              <p className="text-center text-xs text-slate-400">
                {'\u{1F4CD}'} Near Old Bus Stop, Town Extension Road,
                Mayiladuthurai
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 font-semibold text-white">Business Hours</h3>
            {hours.map((row, index) => (
              <div
                key={row.day}
                className={`flex items-center justify-between py-2 ${
                  index < hours.length - 1 ? 'border-b border-white/10' : ''
                }`}
              >
                <span className="text-sm text-slate-400">{row.day}</span>
                <span className="text-sm font-medium text-white">
                  {row.time}
                </span>
              </div>
            ))}
            <div className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-green-400">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-green-400"></span>
              Usually open now - walk-ins welcome
            </div>
          </div>
        </div>
      </div>

      <div
        className="mx-auto mt-16 max-w-4xl rounded-2xl p-8 text-center"
        style={{
          background: 'linear-gradient(135deg, #D92B2B 0%, #F47920 100%)',
        }}
      >
        <h3 className="text-2xl font-extrabold text-white">
          Ready to get started?
        </h3>
        <p className="mt-2 text-sm text-white/80">
          Join hundreds of satisfied customers in Mayiladuthurai.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href="tel:9025647318"
            className="rounded-full bg-white px-8 py-3 text-sm font-bold transition hover:bg-white/90"
            style={{ color: '#D92B2B' }}
          >
            {'\u{1F4DE}'} Call Now
          </a>
          <a
            href="https://wa.me/919025647318"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-white px-8 py-3 text-sm font-bold text-white transition hover:bg-white/10"
          >
            {'\u{1F4AC}'} WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
