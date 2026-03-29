'use client'

const CARDS = [
  {
    num: '01',
    tag: 'Origins',
    title: 'Roots in Community Service',
    body: 'Raised with a deep sense of civic duty, Sheku began his journey in grassroots community mobilisation, volunteering across youth programmes in Sierra Leone.',
  },
  {
    num: '02',
    tag: 'Founding',
    title: 'YACAP - A Vision Institutionalized',
    body: 'Founded the Youth and Child Advocacy Platform (YACAP) to create a structured, nationally recognised vehicle for youth rights and child welfare advocacy.',
  },
  {
    num: '03',
    tag: 'Governance',
    title: 'National Youth Council Leadership',
    body: 'Served in leadership capacity within the National Youth Council of Sierra Leone, shaping national policy on youth participation and civic engagement.',
  },
  {
    num: '04',
    tag: 'Media',
    title: 'Radio, TV & Development Comms',
    body: 'Leveraged broadcast media as a tool for development communication, producing and presenting programmes focused on youth issues and national dialogue.',
  },
  {
    num: '05',
    tag: 'Digital',
    title: 'U-Report Sierra Leone',
    body: 'Championed the deployment and expansion of U-Report - UNICEF\'s mobile-first social monitoring tool - connecting thousands of young Sierra Leoneans to real-time polling and information.',
  },
  {
    num: '06',
    tag: 'Solidarity',
    title: 'United 4 Salone',
    body: 'Co-convened United 4 Salone, a national movement uniting citizens around shared values of peace, accountability, and civic responsibility beyond partisan lines.',
  },
  {
    num: '07',
    tag: 'Global',
    title: 'Restless Development',
    body: 'Engaged with Restless Development at both national and international levels, connecting Sierra Leone\'s youth agenda to a global network of peer-led development.',
  },
  {
    num: '08',
    tag: 'ICT',
    title: 'Youth ICT Empowerment',
    body: 'Spearheaded initiatives to bridge the digital divide for young Sierra Leoneans, promoting digital literacy, access, and skills training across communities.',
  },
]

export default function StoryStrip() {
  return (
    <section className="story-strip">
      {/* Header row */}
      <div className="story-strip-header">
        <div className="section-label">Leadership Story</div>
        <span
          style={{
            fontFamily: 'var(--font-dm-sans, "DM Sans", sans-serif)',
            fontSize: '0.72rem',
            fontWeight: 300,
            color: 'var(--slate)',
            letterSpacing: '0.05em',
          }}
        >
          Scroll to explore →
        </span>
      </div>

      {/* Scrollable cards */}
      <div className="story-strip-scroll">
        {CARDS.map((card) => (
          <article key={card.num} className="story-card">
            <span className="story-ghost-num">{card.num}</span>
            <span className="story-tag">{card.tag}</span>
            <h3 className="story-card-title">{card.title}</h3>
            <p className="story-card-body">{card.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
