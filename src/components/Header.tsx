'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

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

  return (
    <header className="header">
      {/* Brand */}
      <Link href="/" className="header-brand-link">
        <div className="brand-monogram">SF</div>
        <div>
          <div className="brand-name">Sheku Foryoh</div>
          <div className="brand-subtitle">Youth Leader &amp; Civic Advocate</div>
        </div>
      </Link>

      {/* Nav */}
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
    </header>
  )
}
