const IMPACT_STATS = [
  { number: '10+',    label: 'Years of Active Service' },
  { number: '5+',     label: 'Leadership Roles Held' },
  { number: '1000s',  label: 'Youth Reached' },
]

const CARDS = [
  {
    id: 1,
    wide: true,
    category: 'Civil Society',
    title: 'YACAP — Youth & Child Advocacy Platform',
    body: 'Founded and built YACAP into one of Sierra Leone\'s most recognised youth-led civil society organisations. Established governance structures, community chapters, and a long-term mandate that has mobilised thousands of youth ambassadors and engaged with government ministries, UNICEF, and international development partners on child rights and youth participation.',
    result: '→ Thousands of youth ambassadors mobilised across Sierra Leone',
    ghost: '01',
  },
  {
    id: 2,
    wide: false,
    category: 'Digital Engagement',
    title: 'U-Report Sierra Leone',
    body: 'Championed the deployment and national expansion of UNICEF\'s U-Report platform — a mobile-first social monitoring tool that connects young people to real-time polling on national issues, civic information, and reporting mechanisms.',
    result: '→ Tens of thousands of young Sierra Leoneans enrolled',
    ghost: '02',
  },
  {
    id: 3,
    wide: false,
    category: 'Governance',
    title: 'National Youth Council',
    body: 'Served in leadership capacity within the National Youth Council of Sierra Leone, contributing to policy frameworks on youth representation, civic participation, and government accountability to young citizens.',
    result: '→ National youth policy contributions and representation',
    ghost: '03',
  },
  {
    id: 4,
    wide: false,
    category: 'Media',
    title: 'Radio & Television',
    body: 'Produced and presented development-focused broadcast programming across Sierra Leonean radio and television networks, using media as a bridge between institutions, development discourse, and the communities they serve.',
    result: '→ Broad public reach across radio and TV audiences',
    ghost: '04',
  },
  {
    id: 5,
    wide: false,
    category: 'Civic Unity',
    title: 'United 4 Salone',
    body: 'Co-convened United 4 Salone — a cross-partisan national movement anchored in civic responsibility, peace-building, and shared national identity. Brought citizens together beyond political and regional divides in pursuit of collective progress.',
    result: '→ National movement launched with cross-party civic support',
    ghost: '05',
  },
  {
    id: 6,
    wide: false,
    category: 'International Development',
    title: 'Restless Development',
    body: 'Engaged with Restless Development at national and board levels, linking Sierra Leone\'s youth agenda to a global peer-led development network operating across multiple continents.',
    result: '→ Sierra Leone represented on an international development board',
    ghost: '06',
  },
  {
    id: 7,
    wide: true,
    category: 'ICT & Digital Access',
    title: 'Youth ICT Empowerment',
    body: 'Spearheaded initiatives to bridge the digital divide for young Sierra Leoneans — promoting digital literacy, expanding access to ICT resources, and delivering skills training across communities to equip youth for an increasingly digital economy and civic environment.',
    result: '→ Digital literacy programmes delivered across multiple communities',
    ghost: '07',
  },
]

export default function ImpactPage() {
  return (
    <div className="page-wrap">
      {/* ── Page Hero ── */}
      <section className="page-hero" data-ghost="IMPACT">
        <div className="hero-img-frame" style={{ margin: '0 auto 1.5rem', display: 'flex', justifyContent: 'center' }}>
          <img src="/assets/impact/impact-hero.jpeg" alt="Impact Hero" className="hero-img" width={220} height={293} />
        </div>
        <div className="page-hero-eyebrow">Results &amp; Reach</div>
        <h1 className="page-hero-h1">
          Measurable<br />
          <em className="hero-h1-accent">Impact &amp; Legacy</em>
        </h1>
        <p className="page-hero-subtitle">
          Over a decade of sustained civic engagement, institution-building, and community mobilisation across Sierra Leone and beyond.
        </p>
      </section>

      {/* ── Impact Cards Grid ── */}
      <section className="impact-cards-section">
        <div className="section-label section-label-mb">Areas of Impact</div>
        <div className="impact-cards-grid">
          {CARDS.map(({ id, wide, category, title, body, result, ghost }) => (
            <article
              key={id}
              className={`impact-card${wide ? ' wide' : ''}`}
            >
              <div className="impact-card-ghost">{ghost}</div>
              <div className="impact-card-category">{category}</div>
              <h2 className="impact-card-title">{title}</h2>
              <p className="impact-card-body">{body}</p>
              <div className="impact-card-result">{result}</div>
            </article>
          ))}
        </div>
      </section>

    </div>
  )
}
