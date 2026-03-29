"use client";
import Image from "next/image";

export default function Foryoh4APCYouthPage() {
  return (
    <main className="bg-white text-[#101a28]">
      {/* Hero Section */}
      <section className="w-full border-b border-gray-200 bg-gradient-to-b from-[#f7fafc] to-white pt-16 pb-12 md:pt-24 md:pb-20">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Text Side */}
          <div className="flex-1 min-w-0">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 tracking-tight text-[#101a28]">Foryoh4APCYouth</h1>
            <div className="space-y-6 text-lg md:text-xl leading-relaxed max-w-2xl">
              <p>Amb. Sheku Foryoh remains a dedicated and committed member of the Diaspora Young Congress and the All People’s Congress (APC).</p>
              <p>His involvement reflects a strong passion for youth empowerment, unity, and progressive leadership within the party.</p>
              <p>Through continuous advocacy and engagement, he actively supports party structures and promotes the inclusion of young people in decision-making processes.</p>
              <p>He serves as a bridge between emerging youth voices and senior leadership, ensuring that the aspirations of the diaspora youth are represented.</p>
              <p>His commitment is ongoing, driven by a vision to build a stronger, united, and youth-led APC for the future.</p>
            </div>
          </div>
          {/* Image Placeholder Side */}
          <div className="flex-1 flex items-center justify-center w-full max-w-md">
            <div className="w-full aspect-[3/4] max-w-xs bg-[#e6eaf3] border-2 border-dashed border-[#b6c2d6] rounded-2xl flex flex-col items-center justify-center shadow-lg relative">
              <span className="font-display text-lg text-[#3a4664] font-semibold mb-2">Portrait / Hero Image</span>
              <span className="text-[#8a95a5] text-base">Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Callout Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-3xl font-semibold text-[#7c2235] mb-6 tracking-tight">Foryoh’s Commitment</h2>
          <div className="rounded-2xl border-2 border-[#bfa76a] bg-gradient-to-br from-[#ede9e3] to-white shadow-lg p-10 md:p-12 flex flex-col items-center">
            <span className="inline-block mb-4 w-12 h-1 rounded-full bg-[#bfa76a]" />
            <p className="text-2xl md:text-3xl font-semibold text-[#2d3142] leading-relaxed text-center">
              His commitment is ongoing, driven by a vision to build a <span className="text-[#bfa76a]">stronger</span>, <span className="text-[#7c2235]">united</span>, and <span className="text-[#3a4664]">youth-led</span> APC for the future.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
