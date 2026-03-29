import Image from 'next/image';
import AutoSlider from '@/components/ui/AutoSlider';

const QUICK_FACTS = [
  { label: 'Full Name',       value: 'Sheku Foryoh' },
  { label: 'Primary Role',    value: 'Youth Leader & Civic Advocate' },
  { label: 'Key Affiliation', value: 'YACAP International' },
  { label: 'Active Since',    value: '2013' },
  { label: 'Political ID',    value: "APC — All People's Congress" },
];

const SLIDES = [
  { src: '/assets/home/home-slide-1.jpeg',  alt: 'Sheku Foryoh at a youth summit' },
  { src: '/assets/home/home-slide-2.jpeg',  alt: 'Sheku Foryoh with community leaders' },
  { src: '/assets/home/home-slide-3.jpeg',  alt: 'Sheku Foryoh at a national event' },
  { src: '/assets/home/home-slide-4.jpeg',  alt: 'Sheku Foryoh in the field' },
  { src: '/assets/home/home-slide-5.jpeg',  alt: 'Sheku Foryoh at a civic forum' },
  { src: '/assets/home/home-slide-6.jpeg',  alt: 'Sheku Foryoh with youth delegates' },
  { src: '/assets/home/home-slide-7.jpeg',  alt: 'Sheku Foryoh speaking at an event' },
  { src: '/assets/home/home-slide-8.jpeg',  alt: 'Sheku Foryoh at a community gathering' },
  { src: '/assets/home/home-slide-9.jpeg',  alt: 'Sheku Foryoh at a governance meeting' },
  { src: '/assets/home/home-slide-10.jpeg', alt: 'Sheku Foryoh at a national conference' },
  { src: '/assets/home/home-slide-11.jpeg', alt: 'Sheku Foryoh with partners' },
  { src: '/assets/home/home-slide-12.jpeg', alt: 'Sheku Foryoh at an international summit' },
  { src: '/assets/home/home-slide-13.jpeg', alt: 'Sheku Foryoh addressing youth leaders' },
  { src: '/assets/home/home-slide-14.jpeg', alt: 'Sheku Foryoh in advocacy work' },
  { src: '/assets/home/home-slide-15.jpeg', alt: 'Sheku Foryoh at a policy forum' },
  { src: '/assets/home/home-slide-17.jpeg', alt: 'Sheku Foryoh at a development meeting' },
  { src: '/assets/home/home-slide-18.jpeg', alt: 'Sheku Foryoh with civic leaders' },
];

export default function HomePage() {
  return (
    <div className="page-wrap">
      {/* ── Hero ── */}
      <section className="bg-navy">
        <div className="hero-grid">
          {/* Left column */}
          <div className="hero-left">
            <div className="hero-eyebrow">Sierra Leone · Youth &amp; Governance</div>
            <h1 className="hero-h1">
              Sheku Foryoh
            </h1>
            <p className="hero-tagline">
              A decade of dedicated service - building institutions, amplifying youth voices, and shaping Sierra Leone&rsquo;s civic landscape from the ground up.
            </p>
            <div className="quick-facts">
              {QUICK_FACTS.map(({ label, value }) => (
                <div key={label} className="quick-fact">
                  <span className="quick-fact-label">{label}</span>
                  <span className="quick-fact-value">{value}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Right column: Framed hero portrait */}
          <div className="hero-right">
            <div className="hero-right-bg" />
            <div className="hero-img-frame">
              <Image
                src="/assets/home/home-hero.jpeg"
                alt="Sheku Foryoh"
                className="hero-img"
                width={220}
                height={293}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Auto-sliding photo strip ── */}

      {/* Home Scroll View / Photo Strip */}
      <div className="photo-strip">
        <AutoSlider slides={SLIDES} imgWidth={260} imgHeight={180} interval={3500} />
      </div>

      {/* Areas of Focus */}
      <section className="values-section">
        <div className="max-w-7xl mx-auto">
          <div className="section-label">Areas of Focus</div>
          <h2 className="font-display text-3xl md:text-4xl text-white font-light tracking-tight mb-10">
            What Drives the Work
          </h2>
          <div className="values-grid">
            <div className="values-card">
              <div className="values-ghost-num">01</div>
              <h3 className="values-card-title">Youth Empowerment</h3>
              <p className="values-card-body">Building platforms and opportunities for young people to lead, innovate, and shape their communities.</p>
            </div>
            <div className="values-card">
              <div className="values-ghost-num">02</div>
              <h3 className="values-card-title">Civic Leadership</h3>
              <p className="values-card-body">Championing youth participation in governance, policy, and national development for a more inclusive future.</p>
            </div>
            <div className="values-card">
              <div className="values-ghost-num">03</div>
              <h3 className="values-card-title">Community Impact</h3>
              <p className="values-card-body">Driving measurable change through advocacy, education, and partnerships at local, national, and global levels.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Snapshots */}
      <section className="roles-section">
        <div className="max-w-7xl mx-auto">
          <div className="section-label">Leadership Snapshots</div>
          <h2 className="font-display text-3xl md:text-4xl text-white font-light tracking-tight mb-10">
            Roles &amp; Positions
          </h2>
          <div className="roles-grid">
            <div className="role-block">
              <span className="role-org">National Youth Council</span>
              <h3 className="role-title">Chairperson</h3>
              <p className="role-desc">Guiding youth policy and engagement at the highest levels of government.</p>
            </div>
            <div className="role-block">
              <span className="role-org">YACAP International</span>
              <h3 className="role-title">Founder &amp; Executive Director</h3>
              <p className="role-desc">Establishing a leading youth and child advocacy platform in Sierra Leone and beyond.</p>
            </div>
            <div className="role-block">
              <span className="role-org">Restless Development</span>
              <h3 className="role-title">Board Member</h3>
              <p className="role-desc">Supporting youth-led development and international partnerships for sustainable change.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="impact-cards-section">
        <div className="max-w-7xl mx-auto">
          <div className="section-label">Impact</div>
          <h2 className="font-display text-3xl md:text-4xl text-white font-light tracking-tight mb-10">
            A Decade of Measurable Change
          </h2>
          <div className="impact-cards-grid">
            <div className="impact-card">
              <h3 className="font-display text-2xl text-white mb-3">200,000+ Youth Reached</h3>
              <p className="text-[#8a9ab5] text-sm leading-relaxed">Through U-Report, YACAP, and national campaigns, empowering youth voices and participation across Sierra Leone.</p>
            </div>
            <div className="impact-card">
              <h3 className="font-display text-2xl text-white mb-3">Policy &amp; Governance</h3>
              <p className="text-[#8a9ab5] text-sm leading-relaxed">Influencing national policy, government planning, and international development agendas at the highest levels.</p>
            </div>
            <div className="impact-card">
              <h3 className="font-display text-2xl text-white mb-3">5,000+ Ambassadors</h3>
              <p className="text-[#8a9ab5] text-sm leading-relaxed">Trained and mobilised through YACAP's national network of youth advocates and community champions.</p>
            </div>
            <div className="impact-card">
              <h3 className="font-display text-2xl text-white mb-3">Global Partnerships</h3>
              <p className="text-[#8a9ab5] text-sm leading-relaxed">Collaborating with UNICEF, World Bank, and Restless Development for coordinated, sustainable impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Opening Statement ── */}
      <section className="opening-section">
        <div className="opening-grid">
          <div>
            <div className="section-label">In His Own Words</div>
            <blockquote className="opening-quote">
              &ldquo;Sierra Leone&rsquo;s greatest resource is not mineral —
              it is the energy, intellect, and moral courage of its young
              people.&rdquo;
            </blockquote>
          </div>
          <div className="opening-body">
            <p>
              Sheku Foryoh has spent more than a decade at the intersection of
              youth advocacy, civic leadership, and national development. From
              founding YACAP International — a platform that has mobilised
              thousands of youth ambassadors — to serving in governance roles
              within the National Youth Council, his work is defined by a
              singular conviction: that young people must not only be
              represented, but empowered to lead.
            </p>
            <p>
              His portfolio spans digital engagement through U-Report, broadcast
              media, national reconciliation efforts through United 4 Salone, and
              international development partnerships with Restless Development.
              Each endeavour has been driven by the same foundational belief —
              that durable change begins at the community level and scales
              upward when institutions are built with integrity.
            </p>
            <p>
              As Sierra Leone navigates an increasingly complex political and
              economic landscape, Sheku Foryoh continues to represent a voice
              of principled, youth-centred leadership. His engagement with the
              All People&rsquo;s Congress reflects his commitment to advancing
              that vision within the structures of national political life.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
