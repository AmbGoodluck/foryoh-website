import AutoSlider from "@/components/ui/AutoSlider";

const TIMELINE = [
  {
    year: 'Early',
    title: 'Grassroots Mobilisation',
    body: 'Began civic life through community-level volunteerism across Sierra Leone, building a foundational understanding of youth challenges at the local level.',
  },
  {
    year: '2013',
    title: 'Founding of YACAP',
    body: 'Established the Youth and Child Advocacy Platform (YACAP) as a structured, nationally recognised organisation dedicated to youth rights, child welfare, and civic education.',
  },
  {
    year: '2014–16',
    title: 'National Youth Council',
    body: 'Assumed leadership roles within the National Youth Council of Sierra Leone, contributing to national policy frameworks on youth participation and governance.',
  },
  {
    year: '2016',
    title: 'U-Report Sierra Leone',
    body: 'Led the deployment and expansion of UNICEF\'s U-Report platform in Sierra Leone, connecting tens of thousands of young people to mobile-first civic engagement tools.',
  },
  {
    year: '2017–19',
    title: 'Media & Development Communications',
    body: 'Produced and presented broadcast programmes across radio and television, using media as a vehicle for development communication, civic dialogue, and youth storytelling.',
  },
  {
    year: '2019',
    title: 'United 4 Salone',
    body: 'Co-convened United 4 Salone - a national movement transcending partisan boundaries to unite citizens around shared values of peace, accountability, and civic responsibility.',
  },
  {
    year: '2020+',
    title: 'Board of Restless Development',
    body: 'Joined the board of Restless Development, connecting Sierra Leone\'s national youth agenda to a global network of peer-led international development organisations.',
  },
]

const ABOUT_GALLERY = [
  { src: "/assets/about/about-hero.jpeg", alt: "Sheku Foryoh portrait" },
  { src: "/assets/about/about-2.jpeg", alt: "Sheku Foryoh at an international conference" },
  { src: "/assets/about/about-3.jpeg", alt: "Sheku Foryoh speaking at a summit" },
  { src: "/assets/about/about-4.jpeg", alt: "Sheku Foryoh at a youth forum" },
  { src: "/assets/about/about-5.jpeg", alt: "Sheku Foryoh receiving recognition" },
  { src: "/assets/about/about-6.jpeg", alt: "Sheku Foryoh at a UN event" },
  { src: "/assets/about/about-7.jpeg", alt: "Sheku Foryoh with peers" },
  { src: "/assets/about/about-8.jpeg", alt: "Sheku Foryoh in community engagement" },
];

export default function AboutPage() {
  return (
    <div className="page-wrap">
      {/* ── Page Hero ── */}
      <section className="page-hero" data-ghost="ABOUT">
        <div className="page-hero-eyebrow">Sheku Foryoh · Sierra Leone</div>
        <h1 className="page-hero-h1">
          A Life Defined by<br />
          <em className="hero-h1-accent">Purpose &amp; Service</em>
        </h1>
        <p className="page-hero-subtitle">
          Youth leader, civic advocate, and institution-builder - Sheku Foryoh
          has dedicated more than a decade to expanding the voice and agency of
          young Sierra Leoneans at every level of national life.
        </p>
      </section>

      {/* ── Bio + Sidebar ── */}
      <section className="bio-section">
        <div className="bio-grid">
          {/* Left - Bio */}
          <div className="bio-content">
            <h3>Early Life &amp; Formation</h3>
            <p>
              Sheku Foryoh was shaped by the communities he grew up in - places
              where the energy of young people was abundant but the structures
              to channel it were scarce. This gap between potential and
              opportunity became the animating force of his public life. From
              early voluntary work in local youth programmes to national
              leadership, his trajectory has always been guided by a belief
              that Sierra Leone&rsquo;s future is inseparable from the
              development of its youth.
            </p>
            <h3>YACAP - An Institution Built from Conviction</h3>
            <p>
              In 2013, Sheku founded the Youth and Child Advocacy Platform
              (YACAP) - an organisation that would become one of Sierra
              Leone&rsquo;s most recognised youth-led civil society bodies.
              YACAP was built not as a project, but as an institution: with
              governance structures, community chapters, and a long-term mandate
              to advocate for youth rights and child welfare at local, national,
              and international levels.
            </p>
            <p>
              Under his leadership, YACAP has mobilised thousands of youth
              ambassadors, engaged with government ministries, and partnered
              with international organisations including UNICEF and Restless
              Development to advance child protection and youth participation
              agendas across the country.
            </p>
            <h3>Governance &amp; National Service</h3>
            <p>
              Sheku&rsquo;s engagement with national governance has been both
              formal and substantive. Through his work with the National Youth
              Council of Sierra Leone, he contributed to policy processes that
              sought to raise the minimum threshold of youth representation in
              civic and governmental structures. He understands governance not
              as an end in itself, but as the architecture through which
              communities are protected and empowered.
            </p>
            <h3>Digital Engagement &amp; Media</h3>
            <p>
              Recognising the transformative potential of technology, Sheku led
              the expansion of U-Report Sierra Leone - a UNICEF-supported
              mobile platform that enables young people to participate in
              real-time polling on national issues, access information, and
              report violations. Simultaneously, his work in radio and
              television brought development communication into living rooms and
              community gathering spaces, using storytelling as a bridge between
              institutions and the people they serve.
            </p>
            <h3>Civic Unity &amp; International Development</h3>
            <p>
              Through co-founding United 4 Salone, Sheku demonstrated a
              commitment to national unity that transcends partisan divides. His
              board-level engagement with Restless Development further placed
              Sierra Leone&rsquo;s youth agenda within a global context -
              contributing to an organisation that operates across multiple
              continents through peer-led models of development.
            </p>
          </div>
          {/* Right - Sidebar */}
          <div className="bio-sidebar">
            <div className="sidebar-block">
              <div className="sidebar-block-label">Nationality</div>
              <ul>
                <li>Sierra Leonean</li>
              </ul>
            </div>
            <div className="sidebar-block">
              <div className="sidebar-block-label">Key Domains</div>
              <ul>
                <li>Youth Advocacy</li>
                <li>Civic Governance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── About Gallery (auto-sliding) ── */}
      <div className="about-gallery">
        <AutoSlider slides={ABOUT_GALLERY} imgWidth={280} imgHeight={195} interval={3200} />
      </div>

      {/* ── Leadership Journey Timeline ── */}
      <div className="section-label section-label-mb">Leadership Journey</div>
      <div className="timeline">
        {TIMELINE.map(({ year, title, body }) => (
          <div key={year} className="timeline-item">
            <div className="timeline-year">{year}</div>
            <div className="timeline-content">
              <h4>{title}</h4>
              <p>{body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
