import AutoSlider from "@/components/ui/AutoSlider";

const education = [
  {
    date: "2021–2023",
    title: "Masters International Relations",
    institution: "Cyprus International University",
  },
  {
    date: "2017–2019",
    title: "Diploma in Social Work",
    institution: "SOS Hermann Gmeiner International College",
  },
  {
    date: "2016–2020",
    title: "BSc Business Information Technology",
    institution: "Njala University of Sierra Leone",
  },
  {
    date: "2022–2023",
    title: "Harvard University Business School (Online Leadership Course)",
    institution: "Certificates: Project Planning and Management, Gender Equity and Diversity, Leadership, Networking Skills",
  },
];

const skills = [
  "Strategic Planning",
  "Development Communications",
  "Programme Management",
  "Critical Thinking & Analysis",
  "Report Writing and Presentation",
  "Advance use of Microsoft Office Package",
  "Monitoring & Evaluation",
  "Peoples Management",
];

export default function QualificationsPage() {
  return (
    <main className="bg-white text-[#2d3142]">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-b from-[#ede9e3] to-white border-b border-[#ede9e3]">
        <div className="relative z-10 text-center py-20 w-full">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-[#2d3142] mb-4 tracking-tight">Qualifications</h1>
          <p className="text-xl text-[#3a4664] max-w-2xl mx-auto font-medium">Academic and professional credentials that empower youth advocacy and leadership.</p>
        </div>
      </section>
      {/* Education Timeline */}
      <section className="py-16 bg-white border-b border-[#ede9e3]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl font-semibold text-[#2d3142] mb-10 tracking-tight">Education & Training</h2>
          <div className="flex flex-col gap-8">
            {education.map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 bg-[#f7fafc] border border-[#ede9e3] rounded-2xl p-6 shadow-sm">
                <div className="text-xs text-[#bfa76a] font-bold uppercase tracking-widest min-w-[120px]">{item.date}</div>
                <div className="flex-1">
                  <div className="font-display text-lg font-semibold text-[#7c2235] mb-1">{item.title}</div>
                  <div className="text-[#3a4664] text-base">{item.institution}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section className="py-16 bg-[#f7fafc] border-b border-[#ede9e3]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl font-semibold text-[#2d3142] mb-10 tracking-tight">Core Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, i) => (
              <div key={i} className="bg-white border border-[#ede9e3] rounded-xl p-5 text-lg text-[#2d3142] font-semibold shadow-sm">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl font-semibold text-[#2d3142] mb-10 tracking-tight">Gallery</h2>
          <AutoSlider
            slides={[
              { src: '/assets/qualifications/qualifications-hero.jpeg', alt: 'Sheku Foryoh graduation ceremony' },
              { src: '/assets/about/about-2.jpeg', alt: 'Sheku Foryoh at an international conference' },
              { src: '/assets/about/about-3.jpeg', alt: 'Sheku Foryoh at a professional event' },
            ]}
            imgWidth={270}
            imgHeight={180}
            interval={4000}
          />
        </div>
      </section>
    </main>
  );
}
