import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '@/assets/logo.png'

const navLinks = [{ label: 'Home', path: '/' }, { label: 'Services', path: '/services' }, { label: 'Pricing', path: '/pricing' }, { label: 'Gallery', path: '/gallery' }, { label: 'Contact', path: '/contact' }]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const closeMenu = () => setIsMenuOpen(false)
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') closeMenu() }
    window.addEventListener('keydown', closeOnEscape)
    window.addEventListener('popstate', closeMenu)
    return () => {
      window.removeEventListener('keydown', closeOnEscape)
      window.removeEventListener('popstate', closeMenu)
    }
  }, [])
  return <header className="sticky top-0 z-50 border-b border-brand-text/10 bg-brand-bg/95 backdrop-blur">
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8" aria-label="Main navigation">
      <Link to="/" onClick={closeMenu} className="flex items-center gap-3" aria-label="RR Digi Media home"><img src={logo} alt="" className="h-10 w-10 object-contain" /><span className="leading-none"><span className="block font-bold tracking-[.08em] text-brand-text">RR DIGI</span><span className="mt-1 block text-[.62rem] font-bold tracking-[.22em] text-brand-primary">MEDIA • PRINT HOUSE</span></span></Link>
      <div className="hidden items-center gap-7 lg:flex">{navLinks.map((link) => <Link key={link.path} to={link.path} onClick={closeMenu} aria-current={pathname === link.path ? 'page' : undefined} className={`border-b pb-1 text-sm font-semibold transition ${pathname === link.path ? 'border-brand-primary text-brand-primary' : 'border-transparent text-brand-muted hover:border-brand-secondary hover:text-brand-text'}`}>{link.label}</Link>)}<Link to="/contact" onClick={closeMenu} className="ink-button px-4 py-2.5">Request a quote <span aria-hidden="true" className="ml-2">↗</span></Link></div>
      <button type="button" className="grid h-11 w-11 place-items-center border border-brand-text/20 lg:hidden" aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={isMenuOpen} aria-controls="mobile-menu" onClick={() => setIsMenuOpen((open) => !open)}><span className="relative block h-4 w-5"><i className={`absolute left-0 block h-px w-5 bg-brand-text transition ${isMenuOpen ? 'top-2 rotate-45' : 'top-0'}`} /><i className={`absolute left-0 top-2 block h-px w-5 bg-brand-text transition ${isMenuOpen ? 'opacity-0' : ''}`} /><i className={`absolute left-0 block h-px w-5 bg-brand-text transition ${isMenuOpen ? 'top-2 -rotate-45' : 'top-4'}`} /></span></button>
    </nav>
    <div id="mobile-menu" hidden={!isMenuOpen} className="border-t border-brand-text/10 bg-brand-bg lg:hidden"><div className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-8">{navLinks.map((link) => <Link key={link.path} to={link.path} onClick={closeMenu} aria-current={pathname === link.path ? 'page' : undefined} className={`border-b border-brand-text/10 py-4 text-base font-semibold ${pathname === link.path ? 'text-brand-primary' : ''}`}>{link.label}</Link>)}<Link to="/contact" onClick={closeMenu} className="ink-button mt-5">Request a quote ↗</Link></div></div>
  </header>
}
