// This file is deprecated and can be deleted.
"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { resources } from "@/data/resources";
import { cn } from "@/lib/utils";

type ResourceFilter = "All" | "Youth Policy" | "Governance" | "Gender & Youth" | "Digital Engagement";

const filters: ResourceFilter[] = ["All", "Youth Policy", "Governance", "Gender & Youth", "Digital Engagement"];

const typeStyles: Record<string, { bg: string; text: string }> = {
  pdf: { bg: "rgba(212,168,67,0.12)", text: "#d4a843" },
  article: { bg: "rgba(218, 165, 32, 0.1)", text: "#DAA520" },
  video: { bg: "rgba(218, 165, 32, 0.12)", text: "#DAA520" },
  media: { bg: "rgba(218, 165, 32, 0.12)", text: "#DAA520" },
};

const actionLabels: Record<string, string> = {
  pdf: "Download PDF",
  article: "Read Article",
  video: "Watch Video",
  media: "Listen Now",
};

export default function ResourcesSection() {
  const [activeFilter, setActiveFilter] = useState<ResourceFilter>("All");

  const filtered = resources.filter(
    (r) => activeFilter === "All" || r.tags.includes(activeFilter)
  );

  return (
    <section id="resources" className="section-alt py-24 md:py-32 border-t border-white/[0.07]">
      <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,60px)]">
        <ScrollReveal className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-7 h-px bg-accent" />
            <span className="text-xs font-semibold tracking-[0.13em] uppercase text-accent">Resources</span>
          </div>
          <h2 className="font-display text-[clamp(2.1rem,3.5vw,3rem)] text-white leading-tight mb-6 drop-shadow-lg">
            Reports, Talks & Advocacy Materials
          </h2>
        </ScrollReveal>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-7 py-2.5 rounded-full text-base font-semibold transition-all duration-200 cursor-pointer border",
                activeFilter === filter
                  ? "bg-accent text-[#0a1420] border-accent shadow-md"
                  : "bg-[#101a28] border-white/10 text-[#8a95a5] hover:text-accent hover:border-accent"
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map((resource, i) => (
            <ScrollReveal key={resource.id} delay={i * 0.07}>
              <div className="card p-8 hover:shadow-2xl hover:border-accent/30 transition-all h-full flex flex-col group">
                <span
                  className={`inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 self-start resource-type-${resource.type}`}
                >
                  {resource.typeLabel}
                </span>
                <h4 className="text-white font-semibold text-base mb-3 leading-snug">{resource.title}</h4>
                <p className="text-[#8a95a5] text-sm leading-relaxed flex-1 mb-6">{resource.summary}</p>
                <a
                  href={resource.link}
                  className="inline-flex items-center gap-2 text-accent text-base font-semibold hover:gap-3 transition-all duration-200"
                >
                  {actionLabels[resource.type]} <ArrowRight size={16} />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
