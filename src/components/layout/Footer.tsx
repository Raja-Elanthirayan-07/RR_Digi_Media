import { Link } from 'react-router-dom'
import logo from '@/assets/logo.png'

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-dark px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <img
              src={logo}
              alt="RR Digi Media"
              className="h-12 w-12 object-contain"
            />
            <h2 className="mt-3 text-xl font-bold text-white">
              RR Digi Media
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Quality Printing. Fast Service. Affordable Pricing.
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Serving Mayiladuthurai and surrounding areas.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:9025647318"
                className="rounded-full bg-brand-primary px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
              >
                📞 Call
              </a>
              <a
                href="https://wa.me/919025647318"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-green-500 px-4 py-2 text-sm font-medium text-green-400 transition hover:bg-green-500/10"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
              Quick Links
            </h2>
            <div>
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block py-1 text-sm text-slate-400 transition hover:text-brand-secondary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
              Contact Us
            </h2>
            <div className="flex flex-col gap-3">
              <a
                href="tel:9025647318"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                9025647318
              </a>
              <a
                href="mailto:rrdigimedia.myl@gmail.com"
                className="break-all text-sm text-slate-400 transition hover:text-white"
              >
                rrdigimedia.myl@gmail.com
              </a>
              <p className="text-sm leading-relaxed text-slate-500">
                24/50 Visalam Complex,
                <br />
                Town Extension Road, Old Bus Stop Back Side,
                <br />
                Mayiladuthurai - 609001, Tamil Nadu
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-800 pt-6 text-center md:flex-row md:text-left">
          <p className="text-xs text-slate-600">
            © 2025 RR Digi Media. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Made with ❤️ in Mayiladuthurai
          </p>
        </div>
      </div>
    </footer>
  )
}
