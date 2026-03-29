import AutoSlider from "@/components/ui/AutoSlider";
// ImpactPage: Hero, description, impact summary, achievements
const impactSummary = [
  "Empowered 5,000+ youth ambassadors through YACAP",
  "Organized national youth summits and policy forums",
  "Led U-Report Sierra Leone to 200,000+ members",
  "Supported gender equity and youth leadership initiatives",
  "Advised on World Bank, UN, and government youth programs",
];

const achievements = [
  "Completed $50,000 youth empowerment grant in Sierra Leone",
  "Designed and implemented 2018-2020 Youth Parliamentary Summit",
  "Organized leadership engagement with 500+ youth ambassadors",
  "Developed gender sensitivity projects during COVID-19",
  "Produced technical leadership for democratic governance and human rights programs",
];

export default function ImpactPage() {
  return (
    <main className="bg-white text-[#2d3142]">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-b from-[#ede9e3] to-white border-b border-[#ede9e3]">
        <div className="relative z-10 text-center py-20 w-full">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-[#7c2235] mb-4 tracking-tight">Impact</h1>
          <p className="text-xl text-[#3a4664] max-w-2xl mx-auto font-medium">A decade of measurable change in youth empowerment, governance, and advocacy across Africa.</p>
        </div>
      </section>
      {/* Impact Summary */}
      <section className="py-16 bg-white border-b border-[#ede9e3]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl font-semibold text-[#2d3142] mb-10 tracking-tight">Impact Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {impactSummary.map((item, i) => (
              <div key={i} className="bg-[#f7fafc] border border-[#ede9e3] rounded-2xl p-6 shadow-sm flex items-center gap-4">
                <span className="inline-block w-3 h-3 rounded-full bg-[#bfa76a] mr-2" />
                <span className="text-lg text-[#2d3142] font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Achievements Timeline */}
      <section className="py-16 bg-[#f7fafc]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl font-semibold text-[#2d3142] mb-10 tracking-tight">Key Achievements</h2>
          <div className="relative border-l-4 border-[#bfa76a] pl-8">
            {achievements.map((item, i) => (
              <div key={i} className="mb-10 last:mb-0 relative">
                <div className="absolute -left-5 top-1 w-6 h-6 bg-[#7c2235] border-4 border-[#bfa76a] rounded-full" />
                <div className="bg-white border border-[#ede9e3] rounded-xl p-6 shadow-sm">
                  <span className="text-lg text-[#2d3142] font-semibold">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Impact Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl font-semibold text-[#2d3142] mb-10 tracking-tight">In the Field</h2>
          <AutoSlider
            slides={[1,2,3,4,5,6].map(i => ({
              src: `assets/impact/impact-gallery-${i}.jpeg`,
              alt: `Impact gallery image ${i}`,
            }))}
            imgWidth={270}
            imgHeight={180}
            interval={3600}
          />
        </div>
      </section>
    </main>
  );
}
