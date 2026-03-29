import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

const programs = [
  {
    emoji: "🎓",
    title: "Youth Ambassadors Program",
    description: "Structured mentorship, training, and community advocacy for young leaders across Sierra Leone.",
    metric: "5,000+ ambassadors active",
    bgClass: "bg-yacap-green",
  },
  {
    emoji: "🏛️",
    title: "National Youth Leadership Summits",
    description: "Bringing young leaders into direct dialogue with policymakers to shape governance and youth policy.",
    metric: "National policy outcomes",
    bgClass: "bg-yacap-blue",
  },
  {
    emoji: "💻",
    title: "Skills & ICT Training",
    description: "Career readiness and digital skills development for youth employment and entrepreneurship.",
    metric: "120+ trained",
    bgClass: "bg-yacap-gold",
  },
  {
    emoji: "⚡",
    title: "Gender-Focused Programs",
    description: "Cross-cutting equity programming ensuring girls and young women are central to all initiatives.",
    metric: "Cross-cutting equity",
    bgClass: "bg-yacap-green",
  },
];

export default function YacapSection() {
  return (
    <section id="yacap" className="section-alt py-24 md:py-32 border-t border-white/[0.07]">
      <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,60px)]">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20 items-start">
          <ScrollReveal>
            <Badge variant="green" className="mb-6 text-base px-5 py-2 rounded-full shadow-sm">Flagship Initiative</Badge>
            <h2 className="font-display text-[clamp(2.1rem,3.5vw,3rem)] text-white leading-tight mb-6 drop-shadow-lg">
              Youth and Children&apos;s Advocacy Panel
            </h2>
            <p className="text-[#8a95a5] text-lg leading-relaxed mb-10 max-w-2xl">
              YACAP is Sheku&apos;s flagship initiative — a youth-led organization built on the belief that young people are not just beneficiaries of development, but its most powerful architects. Founded in 2012, YACAP has grown into a multi-program network spanning Sierra Leone and beyond.
            </p>
            <div className="flex flex-wrap gap-5">
              <Button variant="primary" href="#" className="min-w-[180px] text-base shadow-md">Learn About YACAP</Button>
              <Button variant="secondary" href="#" className="min-w-[180px] text-base">Support YACAP&apos;s Work</Button>
            </div>
          </ScrollReveal>

          {/* Stats card */}
          <ScrollReveal delay={0.15}>
            <div className="card p-10 shadow-xl">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <span className="font-display text-4xl text-green block mb-1">5,000+</span>
                  <span className="text-xs text-[#8a95a5]">Youth ambassadors</span>
                </div>
                <div>
                  <span className="font-display text-2xl text-blue block mb-1">Multi-Country</span>
                  <span className="text-xs text-[#8a95a5]">Geographic reach</span>
                </div>
                <div>
                  <span className="font-display text-4xl text-gold block mb-1">10+</span>
                  <span className="text-xs text-[#8a95a5]">Years of impact</span>
                </div>
                <div>
                  <span className="font-display text-4xl text-white block mb-1">4</span>
                  <span className="text-xs text-[#8a95a5]">Core programs</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Programs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, i) => (
            <ScrollReveal key={program.title} delay={i * 0.1}>
              <div className="card p-8 hover:shadow-2xl hover:border-accent/30 transition-all group">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-5 bg-opacity-80 group-hover:scale-105 transition-transform ${program.bgClass}`}
                >
                  {program.emoji}
                </div>
                <h4 className="text-white font-semibold text-lg mb-2">{program.title}</h4>
                <p className="text-[#8a95a5] text-base leading-relaxed mb-5">{program.description}</p>
                <span className="font-jetbrains text-xs text-green bg-[rgba(30,184,84,0.12)] rounded-full px-3 py-1.5">
                  {program.metric}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
