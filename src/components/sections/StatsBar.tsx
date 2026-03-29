"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Users, Shield, BookOpen } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const stats = [
  {
    icon: <Users size={22} className="text-green" />,
    numberStr: "5000",
    suffix: "+",
    label: "Youth ambassadors engaged across Sierra Leone and beyond",
  },
  {
    icon: <Shield size={22} className="text-green" />,
    numberStr: "200000",
    suffix: "+",
    label: "Young people reached via U-Report in 5 months",
  },
  {
    icon: <BookOpen size={22} className="text-green" />,
    numberStr: null,
    text: "National Policy",
    label: "Youth Policy and parliamentary youth summits supported",
  },
];

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * to));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="py-20">
      <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,60px)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="relative bg-[#111c2e] border border-white/[0.06] rounded-xl p-7 overflow-hidden">
                {/* Top accent */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-green" />
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-[rgba(30,184,84,0.12)] flex items-center justify-center mb-5">
                  {stat.icon}
                </div>
                {/* Number */}
                <div className="font-display text-3xl text-white mb-2">
                  {stat.numberStr !== null ? (
                    <CountUp to={parseInt(stat.numberStr)} suffix={stat.suffix} />
                  ) : (
                    stat.text
                  )}
                </div>
                {/* Label */}
                <p className="text-sm text-[#8a95a5] leading-relaxed">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
