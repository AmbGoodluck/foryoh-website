"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[#0a1420] to-[#101a28]">
      {/* Background orbs */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none opacity-60 hero-orb-gold"
      />
      <div
        className="absolute bottom-0 left-0 w-[520px] h-[520px] rounded-full pointer-events-none opacity-60 hero-orb-blue"
      />

      <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,60px)] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2.5 border border-white/[0.07] bg-[#101a28] rounded-full px-5 py-2 mb-10 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0 }}
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-[pulse-dot_2s_ease-in-out_infinite]" />
              <span className="text-[0.75rem] font-semibold tracking-[0.13em] uppercase text-[#8a95a5]">
                Youth & Child Rights Advocate
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              className="font-display text-[clamp(2.7rem,5vw,4.2rem)] text-white leading-[1.08] mb-8 drop-shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              Ambassador Sheku Foryoh -{" "}
              Championing{" "}
              <em className="text-accent not-italic">Youth-Led</em>{" "}
              Development Across Africa
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-[#8a95a5] text-xl leading-relaxed mb-12 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              Over a decade of measurable impact: empowering 5,000+ youth ambassadors, expanding governance participation, and building systems that put young people at the center of policy.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            >
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowRight size={20} />}
                onClick={() => scrollToSection("speaking")}
                className="text-lg min-w-[200px] shadow-lg"
              >
                Invite Sheku to Speak
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => scrollToSection("yacap")}
                className="text-lg min-w-[200px]"
              >
                Partner with YACAP
              </Button>
            </motion.div>
          </div>

          {/* Right - Photo placeholder */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            {/* Decorative accent border */}
            <div className="absolute -top-7 -right-7 w-32 h-32 border-2 border-accent rounded-3xl opacity-25 z-10" />

            {/* Photo container */}
            <div className="relative aspect-[3/4] rounded-3xl bg-[#101a28] border border-white/[0.07] overflow-hidden shadow-xl w-[320px] max-w-full">
              <div
                className="absolute inset-0 flex items-center justify-center hero-photo-bg"
              >
                <div className="text-center px-8">
                  <div className="w-20 h-20 rounded-full bg-[rgba(226,177,60,0.13)] border border-accent/30 flex items-center justify-center mx-auto mb-4">
                    <span className="font-display text-2xl text-accent">SF</span>
                  </div>
                  <p className="text-[#8a95a5] text-sm">Photo of Ambassador Sheku Foryoh</p>
                </div>
              </div>
            </div>

            {/* Dot grid */}
            <div className="absolute -bottom-8 -left-8 grid grid-cols-5 gap-2 opacity-20 z-0">
              {Array.from({ length: 15 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue" />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
