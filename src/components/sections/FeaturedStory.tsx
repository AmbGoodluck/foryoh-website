import { ArrowRight } from "lucide-react";
import Badge from "@/components/ui/Badge";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function FeaturedStory() {
  return (
    <section className="py-12">
      <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,60px)]">
        <ScrollReveal>
          <div
            className="rounded-2xl p-9 border border-white/[0.06] featuredstory-bg"
          >
            <Badge variant="gold" className="mb-5">Featured Impact Story</Badge>
            <h3 className="font-display text-xl text-white mb-4 mt-2">
              National Youth Parliamentary Summit
            </h3>
            <p className="text-[#8a95a5] max-w-2xl mb-6 leading-relaxed">
              Designed and implemented alongside Restless Development, CARE International, and the Ministry of Youth Affairs — convening hundreds of young leaders to directly shape national youth policy and governance frameworks.
            </p>
            <a
              href="#impact"
              className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:gap-3 transition-all duration-200"
            >
              Read the full story <ArrowRight size={16} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
