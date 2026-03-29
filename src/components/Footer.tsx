import Link from 'next/link'

const PAGES = [
  { href: '/',                label: 'Home' },
  { href: '/about',           label: 'About' },
  { href: '/qualifications',  label: 'Qualifications' },
  { href: '/impact',          label: 'Impact' },
  { href: '/activities',      label: 'Activities' },
  { href: '/yacap',           label: 'YACAP' },
  { href: '/foryoh4apcyouth', label: 'Foryoh4APC Youth' },
  { href: '/contact',         label: 'Contact' },
]

const AFFILIATIONS = [
  'YACAP International',
  'National Youth Council of SL',
  'U-Report Sierra Leone',
  'United 4 Salone',
  'Restless Development',
]

const EDUCATION = [
  'Harvard Kennedy School',
  'University of Cyprus',
  'Njala University',
  'SOS Hermann Gmeiner',
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Brand column */}
        <div>
          <div className="footer-col-label">Sheku Foryoh</div>
          <div className="footer-brand-name">Sheku Foryoh</div>
          <div className="footer-brand-subtitle">Youth Leader &amp; Civic Advocate</div>
          <p className="footer-tagline">
            Dedicated to expanding youth participation in governance, amplifying
            community voices, and building the next generation of Sierra Leonean
            civic leaders.
          </p>
        </div>

        {/* Navigate */}
        <div>
          <div className="footer-col-label">Navigate</div>
          <ul className="footer-links">
            {PAGES.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="footer-nav-link">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media & Email */}
        <div>
          <div className="footer-col-label">Connect</div>
          <ul className="footer-links">
            <li><a href="https://www.instagram.com/shekuforyoh/profilecard/?igsh=azY5OThnb3J4bndk" target="_blank" rel="noopener noreferrer" className="social-btn">Instagram</a></li>
            <li><a href="https://www.facebook.com/share/19uTAoscZf/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="social-btn">Facebook</a></li>
            <li><a href="https://x.com/sheku_foryoh?s=21" target="_blank" rel="noopener noreferrer" className="social-btn">X / Twitter</a></li>
            <li><a href="https://www.tiktok.com/@shekuforyoho?_t=ZM-8vklIWvxpAM&_r=1" target="_blank" rel="noopener noreferrer" className="social-btn">TikTok</a></li>
            <li><a href="https://www.linkedin.com/in/sheku-foryoh-5a790424b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="social-btn">LinkedIn</a></li>
            <li><a href="mailto:Shekuforyoh1@gmail.com" className="social-btn">Email</a></li>
          </ul>
        </div>

        {/* Affiliations */}
        <div>
          <div className="footer-col-label">Affiliations</div>
          <ul className="footer-links">
            {AFFILIATIONS.map((name) => (
              <li key={name}><span>{name}</span></li>
            ))}
          </ul>
        </div>

        {/* Education */}
        <div>
          <div className="footer-col-label">Education</div>
          <ul className="footer-links">
            {EDUCATION.map((name) => (
              <li key={name}><span>{name}</span></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center py-4">
        <p>&ldquo;Empowering youth is not a programme — it is a national imperative.&rdquo;</p>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <span className="footer-copyright">
          &copy; {new Date().getFullYear()} Sheku Foryoh. All rights reserved.
        </span>
        <span className="footer-motto">
          By: Amadu Studios.
        </span>
      </div>
    </footer>
  )
}
