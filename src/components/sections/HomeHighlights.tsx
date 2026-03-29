"use client";
import { motion } from "framer-motion";

const highlights = [
  {
    title: "Chairperson, Zonal National Youth Council",
    subtitle: "Ministry of Youth Affairs, Sierra Leone",
    date: "2019–2024",
  },
  {
    title: "Founder & CEO, YACAP",
    subtitle: "Youth and Children’s Advocacy Panel",
    date: "2012–Present",
  },
  {
    title: "Chairman, United 4 Salone",
    subtitle: "Diaspora Youth & Social Welfare Organization",
    date: "2014–Present",
  },
  {
    title: "Board Member, Restless Development",
    subtitle: "Youth-Led Development Board",
    date: "2018–Present",
  },
  {
    title: "U-Report Sierra Leone Lead",
    subtitle: "UNICEF/Restless Development",
    date: "2018–2021",
  },
];

export default function HomeHighlights() {
  return (
    <section className="py-12 bg-[#f7fafc] border-b border-[#ede9e3]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-[#2d3142] mb-8 tracking-tight">Key Leadership & Affiliations</h2>
        <div className="overflow-x-auto pb-2">
          <div className="flex gap-8 min-w-[600px]">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                className="min-w-[320px] bg-white border border-[#ede9e3] rounded-2xl shadow-md px-8 py-6 flex flex-col gap-2 hover:shadow-lg transition-shadow duration-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="text-xs text-[#bfa76a] font-bold uppercase tracking-widest mb-1">{item.date}</div>
                <div className="font-display text-lg font-semibold text-[#7c2235] mb-1">{item.title}</div>
                <div className="text-[#3a4664] text-base">{item.subtitle}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
