import AutoSlider from "@/components/ui/AutoSlider";

const PROGRAMS = [
  {
    num: '01',
    title: 'Youth Ambassadors Programme',
    body: 'Mentorship, training, and civic advocacy for young leaders across Sierra Leone, building a national network of change-makers.',
  },
  {
    num: '02',
    title: 'National Youth Leadership Summits',
    body: 'High-level convenings that bring youth delegates into direct dialogue with policymakers, ministers, and development partners.',
  },
  {
    num: '03',
    title: 'Skills & ICT Training',
    body: 'Career readiness, digital literacy, and entrepreneurship programmes equipping youth for the modern economy.',
  },
  {
    num: '04',
    title: 'Gender-Focused Initiatives',
    body: 'Dedicated programmes promoting equity, safety, and leadership pathways for girls and young women.',
  },
  {
    num: '05',
    title: 'Child Rights & Protection',
    body: 'Advocacy and community engagement focused on child welfare, education access, and safeguarding across Sierra Leone.',
  },
  {
    num: '06',
    title: 'Civic Education',
    body: 'Equipping young people with the knowledge to understand their rights, engage government, and hold power to account.',
  },
];

const GALLERY = [
  { src: '/assets/yacap/yacap-hero.jpeg',    alt: 'YACAP event' },
  { src: '/assets/yacap/yacap-gallery-1.jpeg', alt: 'YACAP youth programme' },
  { src: '/assets/yacap/yacap-gallery-2.jpeg', alt: 'YACAP summit' },
  { src: '/assets/yacap/yacap-gallery-3.jpeg', alt: 'YACAP community engagement' },
];

export default function YacapPage() {
  return (
    <div className="page-wrap">
      {/* ── Page Hero ── */}
      <section className="page-hero" data-ghost="YACAP">
        <div className="page-hero-eyebrow">Youth &amp; Child Advocacy Platform</div>
        <h1 className="page-hero-h1">
          YACAP<br />
          <em className="hero-h1-accent">International</em>
        </h1>
        <p className="page-hero-subtitle">
          Founded in 2013 by Sheku Foryoh, YACAP has grown into one of Sierra Leone&rsquo;s most recognised youth-led civil society organisations — mobilising over 5,000 youth ambassadors and driving change at local, national, and international levels.
        </p>
      </section>

      {/* ── Stats Band ── */}
      <section className="impact-stats-band">
        <div className="impact-stats-grid">
          <div>
            <div className="impact-stat-number">5,000+</div>
            <div className="impact-stat-label">Youth Ambassadors</div>
          </div>
          <div>
            <div className="impact-stat-number">2013</div>
            <div className="impact-stat-label">Year Founded</div>
          </div>
          <div>
            <div className="impact-stat-number">3</div>
            <div className="impact-stat-label">Levels of Operation</div>
          </div>
        </div>
      </section>

      {/* ── About YACAP ── */}
      <section className="opening-section">
        <div className="opening-grid">
          <div>
            <div className="section-label">About YACAP</div>
            <blockquote className="opening-quote">
              &ldquo;Built not as a project, but as an institution — with governance structures, community chapters, and a long-term mandate.&rdquo;
            </blockquote>
          </div>
          <div className="opening-body">
            <p>
              YACAP — the Youth and Child Advocacy Platform — was established to address the structural gap between the energy of Sierra Leone&rsquo;s young people and the systems designed to support them. From its founding, YACAP was built with governance structures, community chapters, and a mandate that extends beyond any single programme cycle.
            </p>
            <p>
              Through partnerships with UNICEF, Restless Development, and government ministries, YACAP has shaped national conversations on child rights, youth participation, and civic engagement. Its programmes span digital empowerment, gender equity, civic education, and leadership development — delivered through a network of trained youth ambassadors working at community level.
            </p>
            <p>
              At the international level, YACAP has connected Sierra Leone&rsquo;s youth agenda to global development frameworks, contributing to policy discussions at the UN, the African Union, and regional development bodies.
            </p>
          </div>
        </div>
      </section>

      {/* ── Core Programmes ── */}
      <section className="values-section">
        <div className="section-label section-label-mb">Core Programmes</div>
        <div className="values-grid">
          {PROGRAMS.map(({ num, title, body }) => (
            <div key={num} className="values-card">
              <div className="values-ghost-num">{num}</div>
              <div className="values-card-title">{title}</div>
              <p className="values-card-body">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="impact-cards-section">
        <div className="section-label section-label-mb">In the Field</div>
        <AutoSlider slides={GALLERY} imgWidth={280} imgHeight={195} interval={3400} />
      </section>
    </div>
  );
}
