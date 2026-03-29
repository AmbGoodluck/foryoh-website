

const EDUCATION = [
  {
    degree: 'Executive Education — Leadership & Governance',
    institution: 'Harvard Kennedy School',
    period: 'Post-Graduate',
    flagClass: 'edu-flag edu-flag-usa',
    flag: 'USA',
  },
  {
    degree: 'Postgraduate Studies — Governance & Democracy',
    institution: 'University of Cyprus',
    period: 'Postgraduate',
    flagClass: 'edu-flag edu-flag-cy',
    flag: 'CY',
  },
  {
    degree: 'Bachelor of Arts — Social Sciences',
    institution: 'Njala University, Sierra Leone',
    period: 'Undergraduate',
    flagClass: 'edu-flag edu-flag-sl',
    flag: 'SL',
  },
  {
    degree: 'Secondary Education',
    institution: 'SOS Hermann Gmeiner International College',
    period: 'Secondary',
    flagClass: 'edu-flag edu-flag-sl',
    flag: 'SL',
  },
]

const AWARDS = [
  {
    year: '2019',
    name: 'Outstanding Youth Leadership Award',
    body: 'National Youth Council of Sierra Leone',
    badge: 'National',
  },
  {
    year: '2017',
    name: 'Youth Champion — Digital Engagement',
    body: 'UNICEF Sierra Leone · U-Report Programme',
    badge: 'UN Agency',
  },
  {
    year: '2015',
    name: 'Civil Society Leadership Recognition',
    body: 'Restless Development / International Partners',
    badge: 'International',
  },
]

const CAREER = [
  {
    year: '2013',
    title: 'Founder & Executive Director — YACAP',
    body: 'Established and led the Youth and Child Advocacy Platform, building it into a nationally recognised civil society organisation.',
  },
  {
    year: '2014',
    title: 'Youth Council Representative',
    body: 'Served in representative and leadership capacities within the National Youth Council of Sierra Leone.',
  },
  {
    year: '2015',
    title: 'Development Communications Practitioner',
    body: 'Produced and hosted broadcast media content across radio and television focused on youth development and civic education.',
  },
  {
    year: '2016',
    title: 'U-Report Sierra Leone Lead',
    body: "Led the expansion of UNICEF's U-Report mobile platform, growing participation and national reach.",
  },
  {
    year: '2018',
    title: 'Co-Convener — United 4 Salone',
    body: 'Co-founded a national civic unity movement bringing together citizens across political and regional lines.',
  },
  {
    year: '2020',
    title: 'ICT for Youth Empowerment',
    body: 'Spearheaded digital literacy and youth ICT access initiatives to bridge the digital divide in Sierra Leone.',
  },
  {
    year: '2021+',
    title: 'Board Member — Restless Development',
    body: 'Joined the board of Restless Development, contributing to strategic direction at an international level.',
  },
]

const TRAINING = [
  {
    title: 'Leadership in the 21st Century',
    org: 'Harvard Kennedy School',
    desc: 'Intensive executive programme covering adaptive leadership, governance strategy, and public value creation.',
  },
  {
    title: 'Youth Governance & Policy',
    org: 'University of Cyprus',
    desc: 'Graduate-level study of democratic governance frameworks, youth policy design, and institutional reform.',
  },
  {
    title: 'Peer-Led Development Practice',
    org: 'Restless Development',
    desc: 'Practical training in community mobilisation, monitoring and evaluation, and youth-led programme design.',
  },
]

export default function QualificationsPage() {
  return (
    <div className="page-wrap">
      {/* ── Page Hero ── */}
      <section className="page-hero" data-ghost="QUALS">
        <div className="hero-img-frame" style={{ margin: '0 auto 1.5rem', display: 'flex', justifyContent: 'center' }}>
          <img src="/assets/qualifications/qualifications-hero.jpeg" alt="Qualifications Hero" className="hero-img" width={220} height={293} />
        </div>
        <div className="page-hero-eyebrow">Education &amp; Experience</div>
        <h1 className="page-hero-h1">
          Qualifications &amp;<br />
          <em className="hero-h1-accent">Professional Record</em>
        </h1>
        <p className="page-hero-subtitle">
          Academic foundations, professional achievements, and leadership training that have shaped Sheku Foryoh&rsquo;s approach to governance and civic service.
        </p>
      </section>

      <section className="quals-section">
        <div className="education-list">
          {EDUCATION.map(({ degree, institution, period, flagClass, flag }) => (
            <div key={degree} className="edu-card">
              <span className={flagClass}>{flag}</span>
              <div className="edu-degree">{degree}</div>
              <div className="edu-institution">{institution}</div>
              <div className="edu-period">{period}</div>
            </div>
          ))}
        </div>

        {/* Awards */}
        <div className="section-label section-label-mb">Awards &amp; Recognition</div>
        <div className="awards-table mb-4r">
          {AWARDS.map(({ year, name, body, badge }) => (
            <div key={name} className="awards-row">
              <span className="awards-year">{year}</span>
              <div>
                <div className="awards-name">{name}</div>
                <div className="awards-org">{body}</div>
              </div>
              <span className="awards-badge">{badge}</span>
            </div>
          ))}
        </div>

        {/* Career Timeline */}
        <div className="section-label section-label-mb">Career Timeline</div>
        <div className="timeline-light mb-4r">
          {CAREER.map(({ year, title, body }) => (
            <div key={year} className="timeline-item">
              <div className="timeline-year">{year}</div>
              <div className="timeline-content">
                <h4>{title}</h4>
                <p>{body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Training */}
        <div className="section-label section-label-mb">Leadership Training</div>
        <div className="training-grid">
          {TRAINING.map(({ title, org, desc }) => (
            <div key={title} className="training-card">
              <div className="training-card-org">{org}</div>
              <div className="training-card-title">{title}</div>
              <p className="training-card-desc">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
