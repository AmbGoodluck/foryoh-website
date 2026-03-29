import { Download } from "lucide-react";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { timeline } from "@/data/timeline";
import { positions } from "@/data/positions";
import { education } from "@/data/education";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white border-t border-[#ede9e3]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-7 h-px bg-[#bfa76a]" />
            <span className="text-xs font-semibold tracking-[0.13em] uppercase text-[#7c2235]">About</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-[#2d3142] font-bold leading-tight mb-6">
            A Decade of Youth-Led Impact
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left — Bio */}
          <div>
            <div className="space-y-7 mb-10">
              <p className="text-[#3a4664] text-lg leading-relaxed">
                <strong className="text-[#7c2235] font-semibold">Ambassador Sheku Foryoh</strong> is a youth and child rights advocate, development communications specialist, and the Founder & CEO of the Youth and Children&apos;s Advocacy Panel (YACAP). For over a decade, he has worked at the intersection of youth empowerment, democratic governance, and policy reform across Sierra Leone and Africa.
              </p>
              <p className="text-[#3a4664] text-lg leading-relaxed">
                From scaling U-Report Sierra Leone to 200,000+ members to chairing the National Youth Council, Sheku has consistently built bridges between young people and the institutions that shape their futures. His work has directly informed <strong className="text-[#bfa76a] font-semibold">World Bank programming</strong>, national government planning, and <strong className="text-[#bfa76a] font-semibold">parliamentary youth engagement</strong>.
              </p>
              <p className="text-[#3a4664] text-lg leading-relaxed">
                He holds a Master&apos;s in International Relations, a BSc in Business Information Technology, and multiple Harvard Business School Online certificates — combining strategic education with deep grassroots experience.
              </p>
            </div>
            {/* Pull quote */}
            <blockquote className="border-l-[4px] border-[#7c2235] bg-[#f7fafc] rounded-r-2xl p-7 mb-10 shadow-md">
              <p className="font-display italic text-xl text-[#2d3142] leading-relaxed">
                &ldquo;When young people have a seat at the table — not as tokens, but as decision-makers — entire systems shift. That&apos;s not hope. That&apos;s evidence.&rdquo;
              </p>
            </blockquote>
            {/* Positions */}
            <div className="space-y-5 mb-10">
              {positions.map((pos, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="w-2 h-2 rounded-full bg-[#bfa76a] mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-base font-medium text-[#2d3142]">{pos.title}</p>
                    <p className="text-xs text-[#3a4664]">{pos.organization}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right — Timeline or Journey (to be implemented) */}
          <div className="flex flex-col gap-8">
            {/* Timeline or journey content can be added here for narrative flow */}
          </div>
        </div>
      </div>
    </section>
  );
}
