const SOCIAL_LINKS = [
  { label: "LinkedIn",    href: "https://www.linkedin.com/in/sheku-foryoh-5a790424b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  { label: "X / Twitter", href: "https://x.com/sheku_foryoh?s=21" },
  { label: "Facebook",    href: "https://www.facebook.com/share/19uTAoscZf/?mibextid=wwXIfr" },
  { label: "Instagram",   href: "https://www.instagram.com/shekuforyoh/profilecard/?igsh=azY5OThnb3J4bndk" },
  { label: "TikTok",      href: "https://www.tiktok.com/@shekuforyoho?_t=ZM-8vklIWvxpAM&_r=1" },
];

export default function ContactPage() {
  return (
    <div className="page-wrap">
      {/* ── Page Hero ── */}
      <section className="page-hero" data-ghost="CONNECT">
        <div className="page-hero-eyebrow">Get in Touch</div>
        <h1 className="page-hero-h1">
          Let&rsquo;s<br />
          <em className="hero-h1-accent">Connect</em>
        </h1>
        <p className="page-hero-subtitle">
          Reach out to Sheku Foryoh for speaking engagements, partnerships, youth advocacy collaborations, or media enquiries.
        </p>
      </section>

      {/* ── Direct Contact & Socials ── */}
      <section className="opening-section">
        <div className="opening-grid single-col-centered">
          <div>
            <div className="section-label">Email</div>
            <a
              href="mailto:Shekuforyoh1@gmail.com"
              className="contact-email-link"
            >
              Shekuforyoh1@gmail.com
            </a>
            <div className="contact-socials-wrap">
              <div className="section-label">Follow</div>
              <div className="contact-socials">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
