const COMMITMENTS = [
  'Advocate for a dedicated youth seat in APC governance structures',
  'Establish youth policy working groups within the party framework',
  'Bridge the gap between grassroots youth organisations and formal political structures',
  'Champion digital inclusion and ICT access as a political priority',
  'Promote merit-based pathways for young people into civic leadership',
];
const apcHero = { src: "/assets/apc/apc-hero.jpeg" };
const VALUES = [
  {
    num: '01',
    title: 'Youth-Centred Leadership',
    body: 'Placing the needs, voices, and aspirations of young Sierra Leoneans at the centre of every political and governance decision made under the APC banner.',
  },
  {
    num: '02',
    title: 'Accountability & Transparency',
    body: 'Holding institutions to the highest standards of public accountability, ensuring that governance serves the people rather than the powerful.',
  },
  {
    num: '03',
    title: 'Inclusive Participation',
    body: 'Dismantling barriers that prevent young people — women, rural youth, and marginalised communities — from full participation in Sierra Leone\'s political life.',
  },
  {
    num: '04',
    title: 'National Development',
    body: 'Advancing evidence-based, community-rooted policy that addresses the real challenges facing Sierra Leone: education, economic opportunity, and civic infrastructure.',
  },
  {
    num: '05',
    title: 'Principled Unity',
    body: 'Building an APC youth constituency defined not by identity politics, but by shared commitment to principled governance and the long-term development of the nation.',
  },
  {
    num: '06',
    title: 'Civic Education',
    body: 'Equipping young Sierra Leoneans with the knowledge, tools, and confidence to understand their rights, engage their government, and hold power to account.',
  },
]



export default function Foryoh4APCYouthPage() {
  return (
    <div className="page-wrap">

      {/* ── APC Hero ── */}
      <section className="apc-hero">
        <div className="hero-img-frame" style={{ margin: '0 auto 1.5rem', display: 'flex', justifyContent: 'center' }}>
          <img src={apcHero.src} alt="APC Youth Hero" className="hero-img" width={220} height={293} />
        </div>
        <div className="apc-badge">
          <span>◈</span>
          <span>APC · All People&rsquo;s Congress</span>
        </div>
        <h1 className="apc-hero-h1">
          Foryoh4<br />
          <em className="hero-h1-accent">APC Youth</em>
        </h1>
        <p className="apc-hero-subtitle">
          A campaign built on conviction — advancing principled, youth-centred
          leadership within the All People&rsquo;s Congress and across Sierra
          Leone&rsquo;s national political landscape.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a href="#commitment" className="btn-burgundy">Read the Commitment</a>
          <a href="/about" className="btn-outline">About Sheku</a>
        </div>
      </section>

      {/* ── Values Grid ── */}
      <section className="values-section">
        <div className="section-label section-label-mb">Core Values</div>
        <div className="values-grid">
          {VALUES.map(({ num, title, body }) => (
            <div key={num} className="values-card">
              <div className="values-ghost-num">{num}</div>
              <div className="values-card-title">{title}</div>
              <p className="values-card-body">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Commitment Section ── */}
      <section id="commitment" className="commitment-section">
        <div className="commitment-grid">

          {/* Left — quote */}
          <div>
            <div className="section-label section-label-mb">The Commitment</div>
            <blockquote className="commitment-quote">
              &ldquo;APC Youth must not be a slogan. It must be a
              standard — a generation of leaders defined by what they
              build, not by who they follow.&rdquo;
            </blockquote>
          </div>

          {/* Right — bio + list */}
          <div className="commitment-body">
            <p>
              Sheku Foryoh&rsquo;s entry into active APC politics is not a
              departure from his decade of civic work — it is its logical
              extension. Having built YACAP, led U-Report, co-convened United 4
              Salone, and served in national youth governance, he brings to the
              party a record of substantive achievement and a network built on
              trust at the community level.
            </p>
            <p>
              The Foryoh4APCYouth campaign represents a vision for what APC
              youth politics can and should be: evidence-driven, inclusive, and
              anchored in the lived realities of Sierra Leonean young people —
              not abstract party loyalty or patronage. It is a campaign that
              asks more of the party, and more of its youth membership.
            </p>
            <p>
              As a candidate for youth leadership within the APC, Sheku commits
              to the following:
            </p>
            <ul className="commitment-list">
              {COMMITMENTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
}
