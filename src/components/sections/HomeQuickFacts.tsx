const quickFacts = [
  { label: "Full Name", value: "Ambassador Sheku Foryoh" },
  { label: "Title", value: "Youth & Child Rights Advocate" },
  { label: "Core Mission", value: "Empowering youth, advancing governance, and building systems for sustainable development." },
  { label: "Major Affiliations", value: "YACAP, United 4 Salone, Restless Development, National Youth Council" },
  { label: "Education", value: "SOS Hermann Gmeiner International College, Njala University, Cyprus International University, Harvard Business School Online" },
];

export default function HomeQuickFacts() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-[#2d3142] mb-8 tracking-tight">Quick Facts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {quickFacts.map((fact, i) => (
            <div key={i} className="bg-[#f7fafc] border border-[#ede9e3] rounded-xl p-6 shadow-sm flex flex-col gap-2">
              <div className="text-xs text-[#bfa76a] font-bold uppercase tracking-widest mb-1">{fact.label}</div>
              <div className="text-lg text-[#2d3142] font-semibold">{fact.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
