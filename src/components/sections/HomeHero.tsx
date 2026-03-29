"use client";
import { motion } from "framer-motion";

export default function HomeHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[#2d3142] to-[#bfa76a]/10">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <motion.div
              className="inline-flex items-center gap-2.5 border border-[#bfa76a]/30 bg-[#ede9e3] rounded-full px-5 py-2 mb-10 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0 }}
            >
              <span className="w-2 h-2 rounded-full bg-[#7c2235] animate-pulse" />
              <span className="text-[0.75rem] font-semibold tracking-[0.13em] uppercase text-[#7c2235]">
                Youth & Child Rights Advocate
              </span>
            </motion.div>
            <motion.h1
              className="font-display text-[clamp(2.7rem,5vw,4.2rem)] text-[#2d3142] leading-[1.08] mb-8 drop-shadow-xl font-bold"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              Ambassador Sheku Foryoh
              <br />
              <span className="text-[#7c2235]">Leadership. Service. Impact.</span>
            </motion.h1>
            <motion.p
              className="text-[#3a4664] text-xl leading-relaxed mb-12 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              Influential youth leader, public servant, and advocate for child and youth empowerment across Africa. Chairperson of the Zonal National Youth Council, Founder of YACAP, and a driving force for policy, governance, and community transformation.
            </motion.p>
          </div>
          {/* Right - Photo placeholder */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div className="relative aspect-[3/4] rounded-3xl bg-[#ede9e3] border-2 border-dashed border-[#bfa76a] overflow-hidden shadow-xl w-[320px] max-w-full flex flex-col items-center justify-center">
              <span className="font-display text-2xl text-[#7c2235] font-semibold mb-2">Portrait / Hero Image</span>
              <span className="text-[#3a4664] text-base">Placeholder</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
