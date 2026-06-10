import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '@/assets/logo.png'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { pathname } = useLocation()

  const isActive = (path: string) => pathname === path

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link
          to="/"
          className="flex items-center"
          onClick={() => setIsMenuOpen(false)}
        >
          <img
            src={logo}
            alt="RR Digi Media Logo"
            className="h-10 w-10 object-contain"
          />
          <span className="ml-3 text-lg font-bold text-brand-text">
            RR Digi Media
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm transition ${
                isActive(link.path)
                  ? 'font-semibold text-brand-primary'
                  : 'font-medium text-brand-muted hover:text-brand-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            to="/contact"
            className="rounded-full px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
            style={{
              background: 'linear-gradient(135deg, #D92B2B 0%, #F47920 100%)',
            }}
          >
            Get a Quote
          </Link>
        </div>

        <button
          type="button"
          className="flex flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="h-0.5 w-6 rounded bg-brand-text" />
          <span className="h-0.5 w-6 rounded bg-brand-text" />
          <span className="h-0.5 w-6 rounded bg-brand-text" />
        </button>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-slate-100 bg-white shadow-md md:hidden">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-6 py-3 ${
                  isActive(link.path)
                    ? 'font-semibold text-brand-primary'
                    : 'font-medium text-brand-text'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <Link
              to="/contact"
              className="mx-6 mb-4 rounded-full py-3 text-center font-semibold text-white"
              style={{
                background: 'linear-gradient(135deg, #D92B2B 0%, #F47920 100%)',
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
