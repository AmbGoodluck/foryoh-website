'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const NAV_LINKS = [
  { href: '/',                label: 'Home' },
  { href: '/about',           label: 'About' },
  { href: '/impact',          label: 'Impact' },
  { href: '/yacap',           label: 'YACAP' },
  { href: '/activities',      label: 'Activities' },
  { href: '/qualifications',  label: 'Qualifications' },
  { href: '/contact',         label: 'Contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      {/* Brand */}
      <Link href="/" className="header-brand-link" onClick={() => setOpen(false)}>
        <div className="brand-monogram">SF</div>
        <div>
          <div className="brand-name">Sheku Foryoh</div>
          <div className="brand-subtitle">Youth Leader &amp; Civic Advocate</div>
        </div>
      </Link>

      {/* Desktop nav */}
      <nav className="nav-desktop flex items-center gap-1">
        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`nav-link${pathname === href ? ' active' : ''}`}
          >
            {label}
          </Link>
        ))}
        <Link href="/foryoh4apcyouth" className="nav-cta nav-cta-spaced">
          Foryoh4APCYouth
        </Link>
      </nav>

      {/* Hamburger button (mobile only) */}
      <button
        type="button"
        className="nav-hamburger"
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open ? 'true' : 'false'}
      >
        {open ? (
          /* X icon */
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="3" x2="19" y2="19" />
            <line x1="19" y1="3" x2="3" y2="19" />
          </svg>
        ) : (
          /* Hamburger icon */
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6"  x2="19" y2="6"  />
            <line x1="3" y1="11" x2="19" y2="11" />
            <line x1="3" y1="16" x2="19" y2="16" />
          </svg>
        )}
      </button>

      {/* Mobile drawer */}
      {open && (
        <nav className="nav-mobile">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`nav-mobile-link${pathname === href ? ' active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/foryoh4apcyouth"
            className="nav-cta nav-mobile-cta"
            onClick={() => setOpen(false)}
          >
            Foryoh4APCYouth
          </Link>
        </nav>
      )}
    </header>
  )
}
